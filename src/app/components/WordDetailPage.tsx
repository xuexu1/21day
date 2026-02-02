import { WordData } from '@/app/utils/memorySystem';
import svgPaths from '@/imports/svg-8qbbdv7ise';

interface WordDetailPageProps {
  word: WordData;
  onBack: () => void;
}

export function WordDetailPage({ word, onBack }: WordDetailPageProps) {
  return (
    <div className="absolute inset-0 bg-white z-50">
      {/* Header */}
      <div className="absolute bg-white h-[104px] left-0 right-0 top-0">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute left-[8px] rounded-full size-[40px] top-[48px] cursor-pointer hover:bg-gray-50 transition-colors flex items-center justify-center"
        >
          <div className="size-[24px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
              <path d={svgPaths.p3e896500} stroke="#0F172A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
            </svg>
          </div>
        </button>
      </div>

      {/* Content Container - 使用flex布局确保固定24px间距 */}
      <div className="absolute left-[19px] right-[23px] top-[104px] bottom-0 overflow-auto px-[17px] py-[8px]">
        <div className="flex flex-col">
          {/* Word Container */}
          <div className="bg-white rounded-[16px] px-[0px] py-[8px]">
            <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] text-[#0f172a] text-[22px] w-full">
              <p className="leading-[28px] whitespace-pre-wrap break-words">{word.word}</p>
            </div>
          </div>

          {/* Translation - 固定24px上边距 */}
          <div className="mt-[24px] flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] text-[#5f6774] text-[16px]" style={{ fontVariationSettings: "'wght' 400" }}>
            <p className="leading-[20px] whitespace-pre-wrap break-words">{word.translation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
