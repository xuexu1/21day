interface CompletionCardProps {
  rememberedCount: number;
  totalCount: number;
  onReview: () => void;
}

export function CompletionCard({ rememberedCount, totalCount, onReview }: CompletionCardProps) {
  return (
    <div className="opacity-80 relative rounded-[16px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] w-[310px] h-[315px]" data-name="memory-card-complete">
      {/* 背景卡片 */}
      <div className="absolute flex h-[291.13px] items-center justify-center left-[6.66px] top-[-10.34px] w-[315.616px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.64deg]">
          <div className="bg-[#bbc5e4] h-[282.442px] rounded-[14px] w-[307.66px]" />
        </div>
      </div>

      {/* 主卡片 */}
      <div className="absolute bg-white content-stretch flex flex-col inset-[0_0_30px_0] items-end pt-[8px] rounded-[16px]">
        {/* 完成文本 */}
        <div className="absolute content-stretch flex flex-col gap-[4px] inset-[40px_0_56px_0] items-center justify-center p-[8px]" data-name="canvas">
          <div className="content-stretch flex items-center justify-center px-[3px] relative shrink-0" data-name="text">
            <div className="flex flex-col font-['Segoe_UI:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] justify-center leading-[36px] relative shrink-0 text-[#165dff] text-[24px] text-center w-[287px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wght' 700" }}>
              <p className="mb-0">真棒！</p>
              <p>又一次完成回顾</p>
            </div>
          </div>
          
          {/* 再复习一遍按钮 */}
          <div className="content-stretch flex items-center justify-center px-[58px] relative shrink-0 w-[268px]" data-name="translate">
            <button 
              onClick={onReview}
              className="flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] h-[36px] justify-center leading-[0] relative shrink-0 text-[#495260] text-[12px] text-center w-[266px] cursor-pointer hover:text-[#165dff] transition-colors" 
              style={{ fontVariationSettings: "'wght' 400" }}
            >
              <p className="decoration-solid leading-[16px] underline whitespace-pre-wrap">再复习一遍</p>
            </button>
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
