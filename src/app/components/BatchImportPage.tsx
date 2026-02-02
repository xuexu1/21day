import { useState, useRef, useEffect } from "react";
import { toast } from "sonner";
import svgPaths from "@/imports/svg-vqdm2fnnw8";

interface BatchImportPageProps {
  onBack: () => void;
  onSubmit: (text: string) => void;
}

export function BatchImportPage({
  onBack,
  onSubmit,
}: BatchImportPageProps) {
  const [text, setText] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // 自动聚焦到输入框
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  // 处理粘贴
  const handlePaste = async () => {
    try {
      const clipboardText =
        await navigator.clipboard.readText();
      if (clipboardText) {
        setText(clipboardText);
        toast.success("已粘贴剪切板内容");
      }
    } catch (error) {
      toast.error("无法读取剪切板内容");
    }
  };

  // 处理提交
  const handleSubmit = () => {
    if (text.trim()) {
      onSubmit(text.trim());
    } else {
      // 没有内容，直接返回
      onBack();
    }
  };

  return (
    <div className="absolute inset-0 bg-white z-50 flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0 bg-white h-[104px] relative">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="absolute left-[8px] rounded-[9999px] size-[40px] top-[52px] cursor-pointer"
        >
          <div className="absolute left-[8px] size-[24px] top-[8px]">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
            >
              <g>
                <path
                  d="M15 19L8 12L15 5"
                  stroke="var(--stroke-0, #1F2937)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                />
                <path
                  d="M8 12H18"
                  stroke="var(--stroke-0, #1F2937)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                />
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
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 22.0001 15.1625"
            >
              <path
                d={svgPaths.p161b4d00}
                stroke="var(--stroke-0, black)"
                strokeLinecap="round"
                strokeWidth="4"
              />
            </svg>
          </div>
        </button>
      </div>

      {/* Input Container - 占据剩余空间，输入框内不显示滚动条 */}
      <div className="flex-1 px-[21px] overflow-hidden">
        <div className="bg-[rgba(249,250,251,0.5)] border border-[#f3f4f6] border-solid h-full overflow-hidden rounded-[16px] p-[9px]">
          <textarea
            ref={textareaRef}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={`批量添加新的单词或句子，格式参考:
shrinkable adj.会收缩的`}
            className="w-full h-full bg-transparent border-none outline-none resize-none font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] text-[14px] text-black placeholder:text-[#cdd3df] leading-[normal] scrollbar-hide"
            style={{ fontVariationSettings: "'wght' 400" }}
          />
        </div>
      </div>

      {/* Import Button - 固定在底部，左右有固定边距 */}
      <div className="flex-shrink-0 px-[24px] py-[24px]">
        <button
          onClick={handleSubmit}
          className="w-full bg-[#165dff] h-[41px] rounded-[4px] cursor-pointer hover:bg-[#0e4fd1] transition-colors flex items-center justify-center"
        >
          <span className="font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] text-[18px] text-white">
            批量添加
          </span>
        </button>
      </div>
    </div>
  );
}