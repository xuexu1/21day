import { WordData } from '@/app/utils/memorySystem';

interface ConfirmImportDialogProps {
  words: WordData[];
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmImportDialog({ words, onConfirm, onCancel }: ConfirmImportDialogProps) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[rgba(0,0,0,0.6)]" onClick={onCancel} />
      
      {/* Dialog */}
      <div className="relative bg-white border border-[#e5e7eb] border-solid w-[316px] h-[496px] rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] overflow-hidden">
        {/* Title */}
        <div className="absolute top-[30px] left-0 right-0 flex justify-center">
          <div className="flex flex-col font-['Segoe_UI:Semibold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] text-[#1d2129] text-[16px]" style={{ fontVariationSettings: "'wght' 700" }}>
            <p className="leading-[26px]">导入确认</p>
          </div>
        </div>

        {/* Word List - Scrollable */}
        <div className="absolute left-[11px] top-[61px] w-[292px] h-[367px] overflow-x-clip overflow-y-auto">
          <div className="flex flex-col gap-[20px]">
            {words.map((word, index) => (
              <div key={index} className="w-full shrink-0">
                {word.type === 'word' ? (
                  // Single word display
                  <div className="h-[24px] overflow-clip relative w-full">
                    <div className="absolute flex gap-[8px] items-center left-0 top-0">
                      {/* Tag */}
                      <div className="bg-[#f3f4f6] h-[19px] rounded-[4px] shrink-0 w-[32px] relative">
                        <div className="absolute left-[6px] top-[2px] flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] text-[#9ca3af] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                          <p className="leading-[15px]">英中</p>
                        </div>
                      </div>
                      
                      {/* Word */}
                      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
                        <p className="leading-[20px]">{word.word}</p>
                      </div>
                      
                      {/* Translation */}
                      <div className="h-[16px] overflow-clip relative shrink-0 max-w-[197px]">
                        <div className="flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] text-[#9ca3af] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                          <p className="leading-[16px]">{word.translation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // Sentence display
                  <div className="overflow-clip relative w-full">
                    <div className="flex gap-[8px] items-start w-[295px]">
                      {/* Tag */}
                      <div className="bg-[#f3f4f6] h-[19px] rounded-[4px] shrink-0 w-[32px] relative">
                        <div className="absolute left-[6px] top-[2px] flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] text-[#9ca3af] text-[10px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
                          <p className="leading-[15px]">英中</p>
                        </div>
                      </div>
                      
                      {/* Sentence and Translation */}
                      <div className="flex flex-col shrink-0 w-[255px]">
                        {/* English Sentence */}
                        <div className="relative shrink-0 w-full mb-[5px]">
                          <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic text-[#0f172a] text-[13.6px] w-full">
                            <p className="leading-[20px] whitespace-pre-wrap break-words">{word.word}</p>
                          </div>
                        </div>
                        
                        {/* Chinese Translation */}
                        <div className="overflow-clip relative shrink-0 w-full">
                          <div className="flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] text-[#9ca3af] text-[12px] w-full" style={{ fontVariationSettings: "'wght' 400" }}>
                            <p className="leading-[16px] whitespace-pre-wrap break-words">{word.translation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="absolute bottom-0 left-0 right-0 h-[48px] border-[#f3f4f6] border-solid border-t">
          {/* Cancel Button */}
          <button
            onClick={onCancel}
            className="absolute h-[47px] left-0 right-[154.5px] top-0 cursor-pointer hover:bg-[#f9fafb] transition-colors"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] text-[#6b7280] text-[14px] text-center" style={{ fontVariationSettings: "'wght' 400" }}>
              <p className="leading-[20px] whitespace-pre-wrap">取消</p>
            </div>
          </button>
          
          {/* Vertical Divider */}
          <div className="absolute bg-[#f3f4f6] bottom-0 left-[153.5px] top-0 w-px" />
          
          {/* Confirm Button */}
          <button
            onClick={onConfirm}
            className="absolute h-[47px] left-[154.5px] right-0 top-0 cursor-pointer hover:bg-[#f9fafb] transition-colors"
          >
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col font-['Segoe_UI:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] justify-center leading-[0] text-[#0f172a] text-[14px] text-center" style={{ fontVariationSettings: "'wght' 700" }}>
              <p className="leading-[20px] whitespace-pre-wrap">确认</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
