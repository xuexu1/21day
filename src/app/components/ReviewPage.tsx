import { useState, useEffect } from 'react';
import { Trash2 } from 'lucide-react';
import { WordData } from '@/app/utils/memorySystem';
import { 
  getMonthlyStats, 
  getHalfYearStats, 
  getYearStats,
  getCurrentYearMonth,
  ReviewStats 
} from '@/app/utils/reviewStats';
import { WordDetailPage } from '@/app/components/WordDetailPage';

interface ReviewPageProps {
  words: WordData[];
  onDeleteWords?: (wordIds: string[]) => void;
}

type TimePeriod = 'month' | 'halfYear' | 'year';

export function ReviewPage({ words, onDeleteWords }: ReviewPageProps) {
  const [period, setPeriod] = useState<TimePeriod>('month');
  const [selectedWord, setSelectedWord] = useState<WordData | null>(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [stats, setStats] = useState<ReviewStats>({
    newWordsCount: 0,
    review2Count: 0,
    review3Count: 0,
    review4Count: 0,
    newWords: [],
  });

  useEffect(() => {
    let newStats: ReviewStats;
    
    if (period === 'month') {
      const { year, month } = getCurrentYearMonth();
      newStats = getMonthlyStats(words, year, month);
    } else if (period === 'halfYear') {
      newStats = getHalfYearStats(words);
    } else {
      newStats = getYearStats(words);
    }
    
    setStats(newStats);
  }, [words, period]);

  // 处理删除确认
  const handleConfirmDelete = () => {
    if (onDeleteWords && stats.newWords.length > 0) {
      const wordIds = stats.newWords.map(w => w.id);
      onDeleteWords(wordIds);
    }
    setShowDeleteDialog(false);
  };

  // 如果选中了单词，显示详情页面
  if (selectedWord) {
    return <WordDetailPage word={selectedWord} onBack={() => setSelectedWord(null)} />;
  }
  
  return (
    <div className="absolute inset-0">
      {/* 删除确认对话框 */}
      {showDeleteDialog && (
        <div className="absolute inset-0 z-50 flex items-center justify-center">
          {/* 半透明背景 */}
          <div 
            className="absolute inset-0 bg-[rgba(0,0,0,0.6)]"
            onClick={() => setShowDeleteDialog(false)}
          />
          
          {/* 对话框 */}
          <div className="relative bg-white border border-[#e5e7eb] border-solid h-[192px] overflow-clip rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] w-[316px]">
            {/* 对话框内容 */}
            <div className="absolute left-[24px] right-[24px] top-[74px] flex items-center justify-center">
              <div className="flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] text-[#4e5969] text-[16px] text-center" style={{ fontVariationSettings: "'wght' 400" }}>
                <p className="leading-[26px]">是否确认删除近期所有的新增单词</p>
              </div>
            </div>
            
            {/* 按钮区域 */}
            <div className="absolute border-[#f3f4f6] border-solid border-t h-[48px] left-0 right-0 top-[142px]">
              {/* 取消按钮 */}
              <button
                onClick={() => setShowDeleteDialog(false)}
                className="absolute h-[47px] left-0 right-[154.5px] top-0 cursor-pointer hover:opacity-70 transition-opacity"
              >
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] h-[16px] justify-center leading-[0] left-[calc(50%+0.1px)] text-[#6b7280] text-[14px] text-center top-1/2 w-[28.2px]" style={{ fontVariationSettings: "'wght' 400" }}>
                  <p className="leading-[20px] whitespace-pre-wrap">取消</p>
                </div>
              </button>
              
              {/* 竖线分隔 */}
              <div className="absolute bg-[#f3f4f6] bottom-0 left-[153.5px] top-0 w-px" />
              
              {/* 确认按钮 */}
              <button
                onClick={handleConfirmDelete}
                className="absolute h-[47px] left-[154.5px] right-0 top-0 cursor-pointer hover:opacity-70 transition-opacity"
              >
                <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] h-[16px] justify-center leading-[0] left-[calc(50%+0.1px)] text-[#0f172a] text-[14px] text-center top-1/2 w-[28.2px]" style={{ fontVariationSettings: "'wght' 700" }}>
                  <p className="leading-[20px] whitespace-pre-wrap">确认</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 固定的顶部区域 */}
      <div className="absolute left-0 right-0 top-0 bottom-0 pointer-events-none">
        {/* 白色背景底板 - 延伸到包含标题区域 */}
        <div className="absolute bg-white h-[296px] left-0 right-0 top-0 pointer-events-auto" />
        
        {/* 统计卡片区域 */}
        <div className="absolute bg-white border-[#f9fafb] border-b border-solid h-[40px] left-0 right-0 top-16 pointer-events-auto z-10">
          {/* 删除按钮 - 右上角 */}
          <button
            onClick={() => setShowDeleteDialog(true)}
            className="absolute right-[24px] top-[8px] cursor-pointer hover:opacity-70 transition-opacity"
          >
            <Trash2 size={20} className="text-[#6b7280]" />
          </button>

          <button
            onClick={() => setPeriod('month')}
            className={`absolute h-[16px] left-[24px] top-[0px] cursor-pointer`}
          >
            <div 
              className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] h-[16px] justify-center leading-[0] left-0 text-[16px] top-[8px] w-[48.2px]" 
              style={{ 
                fontVariationSettings: "'wght' 400",
                color: period === 'month' ? '#2563eb' : '#9ca3af'
              }}
            >
              <p className="leading-[24px] whitespace-pre-wrap">一个月</p>
            </div>
          </button>
          {period === 'month' && (
            <div className="absolute bg-[#2563eb] h-[2px] left-[40px] rounded-[9999px] top-[24px] w-[16px]" />
          )}

          <button
            onClick={() => setPeriod('halfYear')}
            className={`absolute h-[16px] left-[104px] top-[0px] cursor-pointer`}
          >
            <div 
              className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] h-[16px] justify-center leading-[0] left-0 text-[14px] top-[8px] w-[28.2px]" 
              style={{ 
                fontVariationSettings: "'wght' 400",
                color: period === 'halfYear' ? '#2563eb' : '#9ca3af'
              }}
            >
              <p className="leading-[20px] whitespace-pre-wrap">半年</p>
            </div>
          </button>
          {period === 'halfYear' && (
            <div className="absolute bg-[#2563eb] h-[2px] left-[110px] rounded-[9999px] top-[24px] w-[16px]" />
          )}

          <button
            onClick={() => setPeriod('year')}
            className={`absolute h-[16px] left-[164px] top-[0px] cursor-pointer`}
          >
            <div 
              className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] h-[16px] justify-center leading-[0] left-0 text-[14px] top-[8px] w-[28.2px]" 
              style={{ 
                fontVariationSettings: "'wght' 400",
                color: period === 'year' ? '#2563eb' : '#9ca3af'
              }}
            >
              <p className="leading-[20px] whitespace-pre-wrap">一年</p>
            </div>
          </button>
          {period === 'year' && (
            <div className="absolute bg-[#2563eb] h-[2px] left-[168px] rounded-[9999px] top-[24px] w-[16px]" />
          )}
        </div>

        {/* 统计数字区域 - 居中适配 */}
        <div className="absolute left-0 right-0 top-[88px] flex flex-col items-center gap-[8px] pointer-events-auto px-[24px]">
          {/* 新增单词量标题 */}
          <div className="flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] text-[#6b7280] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            <p className="leading-[16px]">
              {period === 'month' ? '新增单词量' : period === 'halfYear' ? '新增单词量' : '新增单词量'}
            </p>
          </div>

          {/* 数字显示 */}
          <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic text-[#2563eb] text-[40px] text-center whitespace-nowrap">
            <p className="leading-[49px]">{String(stats.newWordsCount).padStart(2, '0')}</p>
          </div>

          {/* 回顾次数统计 */}
          <div className="bg-[rgba(22,93,255,0.05)] content-stretch flex h-[66px] items-center justify-center px-[7px] py-[11px] rounded-[12px] w-full max-w-[318px]">
          <div className="content-center flex flex-wrap gap-[4px_12px] items-center justify-center px-[8px] py-[4px] relative shrink-0 w-[103px]">
            <div aria-hidden="true" className="absolute border-[#c9cdd4] border-r border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] h-[14px] justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] text-center w-[100px]" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="leading-[16px] whitespace-pre-wrap">2次回顾</p>
            </div>
            <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2563eb] text-[13.7px] text-center w-[15.78px]">
              <p className="leading-[20px] whitespace-pre-wrap">{stats.review2Count}</p>
            </div>
          </div>

          <div className="content-center flex flex-wrap gap-[4px_12px] items-center justify-center px-[8px] py-[4px] relative shrink-0 w-[102px]">
            <div aria-hidden="true" className="absolute border-[#c9cdd4] border-r border-solid inset-0 pointer-events-none" />
            <div className="flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] text-center w-[100px]" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="leading-[16px] whitespace-pre-wrap">3次回顾</p>
            </div>
            <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2563eb] text-[13.7px] text-center w-[15.78px]">
              <p className="leading-[20px] whitespace-pre-wrap">{stats.review3Count}</p>
            </div>
          </div>

          <div className="content-center flex flex-wrap gap-[4px] items-center justify-center leading-[0] px-[8px] py-[4px] relative shrink-0 text-center w-[103px]">
            <div className="flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center relative shrink-0 text-[#6b7280] text-[12px] w-[100px]" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="leading-[16px] whitespace-pre-wrap">4次回顾</p>
            </div>
            <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] h-[16px] justify-center not-italic relative shrink-0 text-[#2563eb] text-[13.7px] w-[15.78px]">
              <p className="leading-[20px] whitespace-pre-wrap">{stats.review4Count}</p>
            </div>
          </div>
          </div>
        </div>

        {/* 固定的列表标题 */}
        <div className="absolute left-[24px] top-[260px] pointer-events-auto">
          <div className="flex flex-col font-['Segoe_UI:Bold','Noto_Sans_JP:Bold',sans-serif] h-[16px] justify-center leading-[0] text-[#1f2937] text-[12px]" style={{ fontVariationSettings: "'wght' 700" }}>
            <p className="leading-[16px] whitespace-pre-wrap">
              {period === 'month' ? '本月新增' : period === 'halfYear' ? '半年新增' : '一年新增'}
            </p>
          </div>
        </div>
      </div>

      {/* 可滚动的单词列表区域 */}
      <div className="absolute left-0 right-0 top-[296px] bottom-0 overflow-y-auto overflow-x-hidden scrollbar-hide">
        <div className="content-stretch flex flex-col gap-[20px] px-[24px] pb-[80px]">
          {stats.newWords.map((word) => (
            <button
              key={word.id}
              onClick={() => setSelectedWord(word)}
              className="h-[24px] relative shrink-0 w-full cursor-pointer text-left hover:opacity-70 transition-opacity overflow-hidden"
            >
              <div className="flex gap-[8px] items-center h-full">
                <div className="bg-[#f3f4f6] h-[19px] relative rounded-[4px] shrink-0 w-[32px]">
                  <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] left-[6px] text-[#9ca3af] text-[10px] top-[9.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                    <p className="leading-[15px]">英中</p>
                  </div>
                </div>
                <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] max-w-[120px] overflow-hidden">
                  <p className="leading-[20px] whitespace-nowrap truncate">{word.word}</p>
                </div>
                <div className="flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] relative flex-1 text-[#9ca3af] text-[12px] min-w-0 overflow-hidden" style={{ fontVariationSettings: "'wght' 400" }}>
                  <p className="leading-[16px] whitespace-nowrap truncate">{word.translation}</p>
                </div>
              </div>
            </button>
          ))}

          {stats.newWords.length === 0 && (
            <div className="flex items-center justify-center py-8">
              <p className="font-['Segoe_UI:Regular','Noto_Sans_SC:Regular',sans-serif] text-[14px] text-[#9ca3af]" style={{ fontVariationSettings: "'wght' 400" }}>
                暂无数据
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
