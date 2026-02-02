import imgImage4306 from "figma:asset/32a7ca9491e0625729c5d90f4d6c0a3698976dae.png";

function Button() {
  return (
    <div className="absolute h-[47px] left-0 right-[154.5px] top-0" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] h-[16px] justify-center leading-[0] left-[calc(50%+0.1px)] text-[#6b7280] text-[14px] text-center top-1/2 w-[28.2px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[20px] whitespace-pre-wrap">取消</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[47px] left-[154.5px] right-0 top-0" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] h-[16px] justify-center leading-[0] left-[calc(50%+0.1px)] text-[#0f172a] text-[14px] text-center top-1/2 w-[28.2px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[20px] whitespace-pre-wrap">确认</p>
      </div>
    </div>
  );
}

function HorizontalBorder() {
  return (
    <div className="absolute border-[#f3f4f6] border-solid border-t h-[48px] left-0 right-0 top-[142px]" data-name="HorizontalBorder">
      <Button />
      <div className="absolute bg-[#f3f4f6] bottom-0 left-[153.5px] top-0 w-px" data-name="Vertical Divider" />
      <Button1 />
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border border-[#e5e7eb] border-solid h-[192px] left-1/2 overflow-clip rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-1/2 w-[316px]" data-name="Background+Border+Shadow">
      <HorizontalBorder />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] left-[37px] text-[#4e5969] text-[16px] top-[74px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[26px]">是否确认删除近期所有的新增单词</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[780px] left-0 top-0 w-[360px]">
      <div className="absolute bg-[rgba(0,0,0,0.6)] h-[780px] left-0 top-0 w-[360px]" />
      <BackgroundBorderShadow />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="relative size-full">
      <div className="absolute h-[780px] left-px top-0 w-[358px]" data-name="image 4306">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4306} />
      </div>
      <Frame />
    </div>
  );
}