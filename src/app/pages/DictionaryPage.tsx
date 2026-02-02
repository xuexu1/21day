import { Layers } from 'lucide-react';
import { MemoryCard } from '@/app/components/MemoryCard';
import svgPaths from '@/imports/svg-zdr1glqli5';
import { WordData } from '@/app/utils/memorySystem';

interface DictionaryPageProps {
  todayWords: WordData[];
  currentIndex: number;
  rememberedCount: number;
  todayTotalCount: number;
  onRemember: () => void;
  onForgot: () => void;
  onOpenInput: () => void;
  onOpenBatchImport: () => void;
}

export function DictionaryPage({
  todayWords,
  currentIndex,
  rememberedCount,
  todayTotalCount,
  onRemember,
  onForgot,
  onOpenInput,
  onOpenBatchImport,
}: DictionaryPageProps) {
  return (
    <div className="absolute top-[100px] bottom-[64px] left-0 right-0 overflow-auto flex flex-col items-center justify-center gap-8 px-[5%]">
      {/* Memory Card */}
      <div className="flex-shrink-0">
        {todayWords.length > 0 && currentIndex < todayWords.length ? (
          <MemoryCard
            word={todayWords[currentIndex]}
            rememberedCount={rememberedCount}
            totalCount={todayTotalCount}
            onRemember={onRemember}
            onForgot={onForgot}
          />
        ) : (
          <div className="relative w-[310px] h-[315px]">
            {/* 背景阴影卡片 */}
            <div className="absolute flex h-[291.13px] items-center justify-center left-[6.66px] top-[-10.34px] w-[315.616px]">
              <div className="flex-none rotate-[1.64deg]">
                <div className="bg-[#bbc5e4] h-[282.442px] rounded-[14px] w-[307.66px]" />
              </div>
            </div>

            {/* 前景白色卡片 */}
            <div className="absolute bg-white rounded-[16px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] inset-[0_0_30px_0] flex items-center justify-center">
              <p className="font-['Segoe_UI:Regular','Noto_Sans_SC:Regular',sans-serif] text-[clamp(14px,4vw,16px)] text-[#9ca3af]" style={{ fontVariationSettings: "'wght' 400" }}>
                暂无单词
              </p>
            </div>

            {/* 底部计数 */}
            <div className="absolute bottom-0 h-[24px] left-0 w-[310px] flex items-center justify-center">
              <p className="font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] text-[#4e5969] text-[12px] text-center leading-[15px]" style={{ fontVariationSettings: "'wght' 400" }}>
                今日0个词汇
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Input Section */}
      <div className="relative bg-white h-[96px] w-full max-w-[400px] overflow-hidden rounded-[6px] flex-shrink-0">
        {/* Language Switch */}
        <div className="absolute h-[16px] left-[8px] top-[9px] w-[86px]">
          <div className="absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] left-0 top-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            <p className="leading-[16px]">英文</p>
          </div>
          <div className="absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] left-[58px] top-0 text-[14px] text-black whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
            <p className="leading-[16px]">中文</p>
          </div>
          <div className="absolute flex h-[5px] items-center justify-center left-[38px] top-[4px] w-[14px]">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="h-[5px] relative w-[14px]">
                <div className="absolute inset-[-10.34%_-5.36%_-15%_4.14%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1708 6.26713">
                    <path d={svgPaths.pc212580} fill="var(--stroke-0, black)" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Input Field */}
        <div className="absolute border border-[#f2f3f5] border-solid h-[50px] left-[6px] overflow-hidden rounded-[8px] top-[34px] right-[6px] flex items-center">
          <button onClick={onOpenInput} className="flex-1 h-full cursor-pointer text-left">
            <div className="absolute h-[18px] left-[16px] overflow-hidden right-[56px] top-[15px]">
              <div className="absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] h-[16px] justify-center leading-[0] left-0 text-[#9ca3af] text-[14px] top-[8px] w-[154.2px]" style={{ fontVariationSettings: "'wght' 400" }}>
                <p className="leading-[normal] whitespace-pre-wrap -translate-y-1/2 absolute top-0">点击添加新的单词或句子</p>
              </div>
            </div>
          </button>

          {/* Batch Import Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenBatchImport();
            }}
            className="flex-shrink-0 w-[40px] h-full flex items-center justify-center cursor-pointer hover:bg-[#f5f5f5] transition-colors"
            aria-label="批量导入"
          >
            <Layers className="w-[20px] h-[20px] text-[#9ca3af]" />
          </button>
        </div>
      </div>
    </div>
  );
}
