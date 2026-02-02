import { useState, useRef, useEffect } from 'react';
import svgPaths from '@/imports/svg-k6dftwh48e';

interface Word {
  id: string;
  word: string;
  translation: string;
  type: 'word' | 'sentence';
}

interface MemoryCardProps {
  word: Word;
  rememberedCount: number;
  totalCount: number;
  onRemember: () => void;
  onForgot: () => void;
}

export function MemoryCard({ word, rememberedCount, totalCount, onRemember, onForgot }: MemoryCardProps) {
  const [isPressed, setIsPressed] = useState(false);
  const [shouldUseSmallerFont, setShouldUseSmallerFont] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isEntering, setIsEntering] = useState(true);
  const textRef = useRef<HTMLParagraphElement>(null);
  const callbackRef = useRef<(() => void) | null>(null);

  // 检测文本是否超过一行
  useEffect(() => {
    if (textRef.current) {
      // 创建一个临时元素来测量文本宽度
      const tempElement = document.createElement('span');
      tempElement.style.font = '700 30px Segoe UI, sans-serif';
      tempElement.style.visibility = 'hidden';
      tempElement.style.position = 'absolute';
      tempElement.style.whiteSpace = 'nowrap';
      tempElement.textContent = word.word;
      document.body.appendChild(tempElement);
      
      const textWidth = tempElement.offsetWidth;
      document.body.removeChild(tempElement);
      
      // 容器宽度是287px，如果文本宽度超过这个值，就使用小字体
      setShouldUseSmallerFont(textWidth > 287);
    }
  }, [word.word]);

  // 监听单词变化，触发进入动画
  useEffect(() => {
    setIsEntering(true);
    const timer = setTimeout(() => {
      setIsEntering(false);
    }, 300); // 300ms 动画时间
    
    return () => clearTimeout(timer);
  }, [word.id]);

  // 处理退出动画完成后的回调
  useEffect(() => {
    if (isExiting) {
      const timer = setTimeout(() => {
        if (callbackRef.current) {
          callbackRef.current();
          callbackRef.current = null;
        }
        setIsExiting(false);
      }, 150); // 150ms 后触发切换，与300ms退出动画重叠150ms
      
      return () => clearTimeout(timer);
    }
  }, [isExiting]);

  const handleMouseDown = () => setIsPressed(true);
  const handleMouseUp = () => setIsPressed(false);
  const handleMouseLeave = () => setIsPressed(false);

  const handleTouchStart = () => setIsPressed(true);
  const handleTouchEnd = () => setIsPressed(false);

  // 处理记住按钮点击
  const handleRememberClick = () => {
    if (isExiting) return;
    callbackRef.current = onRemember;
    setIsExiting(true);
  };

  // 处理忘记按钮点击
  const handleForgotClick = () => {
    if (isExiting) return;
    callbackRef.current = onForgot;
    setIsExiting(true);
  };

  // 根据是否超过一行来决定字体大小
  const textSize = shouldUseSmallerFont ? 'text-[20px]' : 'text-[30px]';
  const lineHeight = shouldUseSmallerFont ? 'leading-[24px]' : 'leading-[36px]';
  
  // 判断是否需要自动换行（对于长句子）
  const needsWrap = word.word.length > 30 || word.word.includes(' ');

  // 动画类名
  const getAnimationClass = () => {
    if (isExiting) return 'card-exit';
    if (isEntering) return 'card-enter';
    return '';
  };

  return (
    <div 
      className="relative w-[310px] h-[315px]"
      data-name="memory-card"
    >
      {/* 背景卡片 - 静止不动 */}
      <div className="absolute flex h-[291.13px] items-center justify-center left-[6.66px] top-[-10.34px] w-[315.616px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.64deg]">
          <div className="bg-[#bbc5e4] h-[282.442px] rounded-[14px] w-[307.66px]" />
        </div>
      </div>

      {/* 主卡片 - 有动画效果 */}
      <div className={`absolute bg-white content-stretch flex flex-col gap-[16px] inset-[0_0_30px_0] items-end pt-[8px] rounded-[16px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] ${getAnimationClass()}`}>
        {/* 顶部提示文字 */}
        <div className="flex flex-col font-['Segoe_UI:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[12px] text-center w-full" style={{ fontVariationSettings: "'wght' 400" }}>
          <p className="leading-[16px] whitespace-pre-wrap">
            {needsWrap ? '还记得这句话吗？' : '还记得这个单词吗？'}
          </p>
        </div>

        {/* 按钮区域 */}
        <div className="absolute bottom-0 h-[40px] left-0 right-0 shadow-[0px_-4px_15px_0px_rgba(0,0,0,0.08)]" data-name="btn">
          {/* 忘记按钮 */}
          <button
            onClick={handleForgotClick}
            className="absolute bg-white border border-[#f2f3f5] border-solid h-[40px] left-0 rounded-bl-[16px] top-0 w-[155px] hover:bg-gray-50 active:bg-gray-100 transition-colors cursor-pointer"
            data-name="btn-lost"
          >
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+2.5px)] size-[24px] top-1/2" data-name="lost">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="lost">
                  <path d={svgPaths.p188e7700} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </button>

          {/* 记住按钮 */}
          <button
            onClick={handleRememberClick}
            className="absolute bg-white border border-[#f2f3f5] border-solid h-[40px] left-[155px] rounded-br-[16px] top-0 w-[155px] hover:bg-blue-50 active:bg-blue-100 transition-colors cursor-pointer"
            data-name="btn-remember"
          >
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[24px] top-1/2" data-name="remenber">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
                <g id="remenber">
                  <path d={svgPaths.p33678800} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
              </svg>
            </div>
          </button>
        </div>

        {/* 卡片内容区域 */}
        <div
          className="absolute content-stretch flex flex-col gap-[4px] inset-[40px_0_56px_0] items-center justify-center p-[8px] cursor-pointer select-none"
          data-name="canvas"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* 单词/句子文本 */}
          <div className="content-stretch flex items-center justify-center px-[3px] relative shrink-0" data-name="text">
            <div className={`flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1e293b] ${textSize} text-center w-[287px]`}>
              <p ref={textRef} className={`${lineHeight} ${needsWrap ? 'whitespace-pre-wrap' : ''}`}>{word.word}</p>
            </div>
          </div>

          {/* 翻译文本 */}
          <div className="content-stretch flex items-center justify-center px-[24px] relative shrink-0" data-name="translate">
            <div className={`flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] relative text-[12px] text-center transition-colors ${isPressed ? 'text-[#9ca3af]' : 'text-[#60a5fa]'} w-full`} style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="leading-[16px] whitespace-pre-wrap break-words">
                {isPressed ? word.translation : '按压查看翻译'}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 底部计数 */}
      <div className="absolute bottom-0 h-[24px] left-0 w-[310px]" data-name="count-left">
        <p className="-translate-x-1/2 absolute font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] h-[24px] leading-[15px] left-[155px] text-[#4e5969] text-[12px] text-center top-0 w-[310px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wght' 400" }}>
          今日{rememberedCount}/ {totalCount}个词汇
        </p>
      </div>
    </div>
  );
}
