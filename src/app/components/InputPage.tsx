import { useState, useEffect, useRef } from 'react';
import { toast } from 'sonner';
import svgPaths from '@/imports/svg-eyzk82b7bg';
import { searchDictionary, DictionaryEntry, translateSentence } from '@/app/utils/dictionary';

interface InputPageProps {
  onBack: () => void;
  onSubmit: (word: string, translation: string) => boolean;
}

export function InputPage({ onBack, onSubmit }: InputPageProps) {
  const [word, setWord] = useState('');
  const [translation, setTranslation] = useState('');
  const [predictions, setPredictions] = useState<DictionaryEntry[]>([]);
  const searchTimerRef = useRef<NodeJS.Timeout | null>(null);
  const searchRequestIdRef = useRef(0);
  const wordInputRef = useRef<HTMLTextAreaElement | null>(null);
  const handlePredictionScroll = () => {
    if (document.activeElement === wordInputRef.current) {
      wordInputRef.current?.blur();
    }
  };

  // 打开输入页时默认聚焦，触发键盘
  useEffect(() => {
    const timer = setTimeout(() => {
      wordInputRef.current?.focus();
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  // 监听单词输入变化，延迟0.3秒后搜索
  useEffect(() => {
    // 清除之前的定时器
    if (searchTimerRef.current) {
      clearTimeout(searchTimerRef.current);
    }

    // 如果输入为空，清空预测
    if (!word.trim()) {
      searchRequestIdRef.current += 1;
      setPredictions([]);
      setTranslation('');
      return;
    }

    // 设置新的定时器，0.3秒后搜索
    const requestId = ++searchRequestIdRef.current;
    searchTimerRef.current = setTimeout(async () => {
      // 检查是否以空格结尾（表示用户完成了一个单词的输入）
      const endsWithSpace = /\s$/.test(word);
      
      if (endsWithSpace) {
        // 如果以空格结尾，清空预测列表
        setPredictions([]);
      } else {
        // 获取最后一个单词（空格后的部分）
        const words = word.trim().split(/\s+/);
        const lastWord = words[words.length - 1];
        
        // 只对最后一个单词进行预测
        if (lastWord) {
          const results = await searchDictionary(lastWord);
          if (requestId === searchRequestIdRef.current) {
            setPredictions(results);
          }
        } else {
          setPredictions([]);
        }
      }

      // 自动翻译整个句子
      const autoTranslation = await translateSentence(word);
      if (requestId === searchRequestIdRef.current) {
        setTranslation(autoTranslation);
      }
    }, 300);

    // 清理函数
    return () => {
      if (searchTimerRef.current) {
        clearTimeout(searchTimerRef.current);
      }
    };
  }, [word]);

  // 处理选择预测单词
  const handleSelectPrediction = async (entry: DictionaryEntry) => {
    // 获取当前输入的所有单词
    const words = word.trim().split(/\s+/);
    
    // 替换最后一个单词为选中的预测词，并添加空格以便继续输入
    words[words.length - 1] = entry.word;
    
    // 更新单词输入框，在末尾添加空格
    const newWord = words.join(' ') + ' ';
    setWord(newWord);
    
    // 重新翻译整个句子
    const autoTranslation = await translateSentence(newWord.trim());
    setTranslation(autoTranslation);
    
    // 清空预测列表
    setPredictions([]);
    
    // 重新聚焦到输入框，并将光标移动到末尾
    setTimeout(() => {
      if (wordInputRef.current) {
        wordInputRef.current.focus();
        // 将光标移动到文本末尾
        const length = newWord.length;
        wordInputRef.current.setSelectionRange(length, length);
      }
    }, 0);
  };

  // 清空单词输入
  const handleClearWord = () => {
    setWord('');
    setTranslation('');
    setPredictions([]);
  };

  const handleSubmit = () => {
    if (word.trim() && translation.trim()) {
      const wasAdded = onSubmit(word.trim(), translation.trim());
      if (wasAdded) {
        toast.success('添加了新单词');
      } else {
        toast.error('单词已存在');
      }
      setWord('');
      setTranslation('');
    } else {
      // 没有内容，直接返回
      onBack();
    }
  };

  return (
    <div className="absolute inset-0 bg-white z-50">
      {/* Header */}
      <div className="absolute bg-white h-[104px] left-0 right-0 top-0">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute left-[8px] rounded-[9999px] size-[40px] top-[52px] cursor-pointer"
        >
          <div className="absolute left-[8px] size-[24px] top-[8px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <g>
                <path d="M15 19L8 12L15 5" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
                <path d="M8 12H18" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
              </g>
            </svg>
          </div>
        </button>

        {/* Submit Icon */}
        <button
          onClick={handleSubmit}
          className="absolute h-[11.5px] right-[5%] top-[67px] w-[18px] cursor-pointer"
        >
          <div className="absolute inset-[-17.39%_-11.11%_-14.46%_-11.11%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0001 15.1625">
              <path d={svgPaths.p161b4d00} stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="4" />
            </svg>
          </div>
        </button>
      </div>

      {/* Word Input */}
      <div className="absolute bg-white border border-[#f3f4f6] border-solid h-[122px] left-[21px] overflow-clip right-[21px] rounded-[16px] top-[107px]">
        <textarea
          ref={wordInputRef}
          value={word}
          onChange={(e) => setWord(e.target.value)}
          placeholder="点击添加新的单词或句子"
          className="absolute h-full left-[12px] overflow-auto right-[48px] top-[9px] bg-transparent border-none outline-none resize-none font-['Segoe_UI:Bold',sans-serif] text-[16px] text-[#0f172a] placeholder:text-[#cdd3df]"
          style={{ fontVariationSettings: "'wght' 700" }}
        />
        {/* Clear Button */}
        {word && (
          <button
            onClick={handleClearWord}
            className="absolute bg-[#f3f4f6] bottom-[12px] right-[12px] rounded-[9999px] size-[24px] cursor-pointer hover:bg-[#e5e7eb] transition-colors"
          >
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[12px] top-1/2">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                <g>
                  <path d="M3 9L9 3M3 3L9 9" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </div>
          </button>
        )}
      </div>

      {/* Predictions List - Dropdown */}
      {predictions.length > 0 && (
        <>
          {/* Backdrop - Click to close predictions */}
          <div 
            className="absolute inset-0 z-10"
            onClick={() => setPredictions([])}
          />
          
          <div
            className="absolute left-[21px] right-[21px] top-[237px] bg-white rounded-[16px] shadow-[0_4px_12px_rgba(0,0,0,0.08)] border border-[#f3f4f6] border-solid z-20 px-[24px] py-[20px] overflow-y-auto"
            style={{ maxHeight: 'calc(100% - 237px - 40px)' }}
            onScroll={handlePredictionScroll}
            onTouchMove={handlePredictionScroll}
          >
            <div className="flex flex-col gap-[24px]">
              {predictions.map((entry, index) => (
                <button
                  key={index}
                  onClick={() => handleSelectPrediction(entry)}
                  className="flex items-center relative shrink-0 w-full cursor-pointer hover:opacity-70 transition-opacity"
                >
                  <div className="flex gap-[8px] items-center leading-[0] whitespace-nowrap overflow-hidden w-full">
                    <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center not-italic relative shrink-0 text-[#0f172a] text-[18px]">
                      <p className="leading-[28px]">{entry.word}</p>
                    </div>
                    <div className="flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center relative flex-1 text-[#9ca3af] text-[12px] overflow-hidden min-w-0" style={{ fontVariationSettings: "'wght' 400" }}>
                      <p className="leading-[16px] whitespace-nowrap truncate">{entry.translation}</p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Translation Input */}
      <div className={`absolute bg-white border border-[#f3f4f6] border-solid h-[122px] left-[21px] overflow-clip right-[21px] rounded-[16px] top-[244px] ${predictions.length > 0 ? 'invisible' : 'visible'}`}>
        <textarea
          value={translation}
          onChange={(e) => setTranslation(e.target.value)}
          placeholder="输入翻译"
          className="absolute h-full left-[12px] overflow-auto right-[12px] top-[9px] bg-transparent border-none outline-none resize-none font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] text-[14px] text-black placeholder:text-[#cdd3df]"
          style={{ fontVariationSettings: "'wght' 400" }}
        />
      </div>

  
    </div>
  );
}
