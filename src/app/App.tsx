import { useState } from 'react';
import { Toaster } from 'sonner';
import { toast } from 'sonner';
import { DictionaryPage } from '@/app/pages/DictionaryPage';
import { ReviewPageContainer } from '@/app/pages/ReviewPageContainer';
import { InputPage } from '@/app/components/InputPage';
import { BatchImportPage } from '@/app/components/BatchImportPage';
import { ConfirmImportDialog } from '@/app/components/ConfirmImportDialog';
import { WordData } from '@/app/utils/memorySystem';
import { useMemoryWords } from '@/app/hooks/useMemoryWords';

export default function App() {
  const [activeTab, setActiveTab] = useState<'dictionary' | 'review'>('dictionary');
  const [showInputPage, setShowInputPage] = useState(false);
  const [showBatchImport, setShowBatchImport] = useState(false);
  const [pendingImportWords, setPendingImportWords] = useState<WordData[]>([]);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const {
    allWords,
    todayWords,
    currentIndex,
    todayTotalCount,
    rememberedCount,
    isExtraReview,
    extraReviewCount,
    handleRemember,
    handleForgot,
    handleAddWord,
    handleDeleteWords,
    parseBatchImport,
    addImportedWords,
    startExtraReview,
  } = useMemoryWords();

  const handleAddWordWithClose = (word: string, translation: string): boolean => {
    const wasAdded = handleAddWord(word, translation);
    setShowInputPage(false);
    return wasAdded;
  };

  // 处理批量导入 - 解析文本并显示确认弹窗
  const handleBatchImport = (text: string) => {
    const { newWords, duplicateCount, invalidCount } = parseBatchImport(text);
    
    // 显示警告信息
    if (duplicateCount > 0) {
      toast.warning(`跳过 ${duplicateCount} 个重复单词`);
    }
    if (invalidCount > 0) {
      toast.error(`${invalidCount} 行格式无效`);
    }
    
    // 如果有有效的新单词，显示确认弹窗
    if (newWords.length > 0) {
      console.log('准备导入的单词:', newWords);
      setPendingImportWords(newWords);
      setShowConfirmDialog(true);
      // 不关闭批量导入页面，这样取消时可以继续编辑
    } else {
      // 没有新词可导入
      if (duplicateCount > 0) {
        toast.info(`导入的 ${duplicateCount} 个词已全部存在于词库中`);
      } else if (invalidCount === 0) {
        toast.error('未找到有效内容');
      }
      setShowBatchImport(false);
    }
  };

  // 确认导入
  const handleConfirmImport = () => {
    if (pendingImportWords.length > 0) {
      const { insertIndex, updatedTodayWords } = addImportedWords(pendingImportWords);
      
      // 显示成功提示
      toast.success(`本次导入了${pendingImportWords.length}个新词汇`);
      
      console.log('导入完成:', {
        pendingCount: pendingImportWords.length,
        todayWordsLength: updatedTodayWords.length,
        insertIndex,
        currentWord: updatedTodayWords[insertIndex],
        allWords: updatedTodayWords
      });
    }
    
    // 关闭弹窗、批量导入页面并清空待导入列表
    setShowConfirmDialog(false);
    setPendingImportWords([]);
    setShowBatchImport(false);
  };

  // 取消导入
  const handleCancelImport = () => {
    // 只关闭弹窗，不关闭批量导入页面，这样用户可以继续编辑
    setShowConfirmDialog(false);
    setPendingImportWords([]);
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex items-center justify-center md:p-4">
      <Toaster 
        position="top-center" 
        toastOptions={{
          duration: 2400,
          style: {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            transition: 'opacity 400ms ease-out',
          },
        }}
      />
      <div className="bg-white border-0 md:border border-[#e5e7eb] border-solid overflow-hidden relative w-full h-screen max-w-[480px] md:rounded-[24px] md:h-[90vh] md:max-h-[900px] shadow-none md:shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]">
        {/* Input Page Overlay */}
        {showInputPage && (
          <InputPage
            onBack={() => setShowInputPage(false)}
            onSubmit={handleAddWordWithClose}
          />
        )}

        {showBatchImport && (
          <BatchImportPage
            onBack={() => setShowBatchImport(false)}
            onSubmit={handleBatchImport}
          />
        )}

        {/* Confirm Import Dialog */}
        {showConfirmDialog && (
          <ConfirmImportDialog
            words={pendingImportWords}
            onConfirm={handleConfirmImport}
            onCancel={handleCancelImport}
          />
        )}

        {/* Header */}
        <div className="absolute bg-white h-[96px] left-0 right-0 top-0" />
        
        {/* Title */}
        <div className="absolute top-[64px] left-0 right-0 flex justify-center px-4">
          <div className="flex flex-col font-['Segoe_UI:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] justify-center leading-[0] text-[#0f172a] text-[clamp(20px,5vw,24px)] text-center tracking-[-0.6px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
            <p className="leading-[32px]">21日记忆</p>
          </div>
        </div>

        {/* Main Content */}
        {activeTab === 'dictionary' ? (
          <DictionaryPage
            todayWords={todayWords}
            currentIndex={currentIndex}
            rememberedCount={rememberedCount}
            todayTotalCount={todayTotalCount}
            onRemember={handleRemember}
            onForgot={handleForgot}
            onReviewAgain={() => startExtraReview()}
            onOpenInput={() => setShowInputPage(true)}
            onOpenBatchImport={() => setShowBatchImport(true)}
          />
        ) : (
          <ReviewPageContainer words={allWords} onDeleteWords={handleDeleteWords} />
        )}

        {/* Bottom Navigation */}
        <div className="absolute bg-white border-[#f3f4f6] border-solid border-t bottom-0 h-[64px] left-0 right-0">
          {/* Dictionary Tab */}
          <button
            onClick={() => setActiveTab('dictionary')}
            className="absolute bottom-[8px] left-0 right-1/2 top-0 cursor-pointer"
          >
            <div className="absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[calc(50%-14.1px)] text-[14px] text-center top-[11.5px] w-[28.2px]" style={{ fontVariationSettings: "'wght' 400", color: activeTab === 'dictionary' ? '#2563eb' : '#9ca3af' }}>
              <p className="leading-[20px] whitespace-pre-wrap">词典</p>
            </div>
            {activeTab === 'dictionary' && (
              <div className="absolute bg-[#2563eb] h-[4px] left-[calc(50%-16px)] rounded-[9999px] top-[35.5px] w-[32px]" />
            )}
          </button>

          {/* Review Tab */}
          <button
            onClick={() => setActiveTab('review')}
            className="absolute bottom-[8px] left-1/2 right-0 top-0 cursor-pointer"
          >
            <div className="absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[calc(50%-14.1px)] text-[14px] text-center top-[11.5px] w-[28.2px]" style={{ fontVariationSettings: "'wght' 400", color: activeTab === 'review' ? '#2563eb' : '#9ca3af' }}>
              <p className="leading-[20px] whitespace-pre-wrap">回顾</p>
            </div>
            {activeTab === 'review' && (
              <div className="absolute bg-[#2563eb] h-[4px] left-[calc(50%-16px)] rounded-[9999px] top-[35.5px] w-[32px]" />
            )}
          </button>
        </div>

        {/* Home Indicator - 仅在移动端显示 */}
        <div className="absolute bg-[#1f2937] bottom-[4px] h-[4px] left-[calc(50%-64px)] opacity-10 rounded-[9999px] w-[128px] md:hidden" />
      </div>
    </div>
  );
}
