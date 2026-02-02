import svgPaths from "./svg-k6dftwh48e";

function Lost() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+2.5px)] size-[24px] top-1/2" data-name="lost">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="lost">
          <path d={svgPaths.p188e7700} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BtnLost() {
  return (
    <div className="absolute bg-white border border-[#f2f3f5] border-solid h-[40px] left-0 rounded-bl-[16px] top-0 w-[155px]" data-name="btn-lost">
      <Lost />
    </div>
  );
}

function Remenber() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+0.5px)] size-[24px] top-1/2" data-name="remenber">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="remenber">
          <path d={svgPaths.p33678800} id="Vector" stroke="var(--stroke-0, #3B82F6)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function BtnRemember() {
  return (
    <div className="absolute bg-white border border-[#f2f3f5] border-solid h-[40px] left-[155px] rounded-br-[16px] top-0 w-[155px]" data-name="btn-remember">
      <Remenber />
    </div>
  );
}

function Btn() {
  return (
    <div className="absolute bottom-0 h-[40px] left-0 right-0 shadow-[0px_-4px_15px_0px_rgba(0,0,0,0.08)]" data-name="btn">
      <BtnLost />
      <BtnRemember />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex items-center justify-center px-[3px] relative shrink-0" data-name="text">
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2129] text-[20px] text-center w-[287px]">
        <p className="leading-[24px] whitespace-pre-wrap">“Your 200k context window can shrink to 70k with too many tools enabled”</p>
      </div>
    </div>
  );
}

function Translate() {
  return (
    <div className="content-stretch flex items-center justify-center px-[58px] relative shrink-0 w-[268px]" data-name="translate">
      <div className="flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#60a5fa] text-[12px] text-center w-[266px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px] whitespace-pre-wrap">按压查看翻译</p>
      </div>
    </div>
  );
}

function Canvas() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] inset-[40px_0_56px_0] items-center justify-center p-[8px]" data-name="canvas">
      <Text />
      <Translate />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] inset-[0_0_30px_0] items-end pt-[8px] rounded-[16px]">
      <div className="flex flex-col font-['Segoe_UI:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[12px] text-center w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px] whitespace-pre-wrap">还记得这句话吗？</p>
      </div>
      <Btn />
      <Canvas />
    </div>
  );
}

function CountLeft() {
  return (
    <div className="absolute bottom-0 h-[24px] left-0 w-[310px]" data-name="count-left">
      <p className="-translate-x-1/2 absolute font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] h-[24px] leading-[15px] left-[155px] text-[#4e5969] text-[12px] text-center top-0 w-[310px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wght' 400" }}>
        今日1/ 3个词汇
      </p>
    </div>
  );
}

export default function MemoryCardNml() {
  return (
    <div className="relative rounded-[16px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)] size-full" data-name="memory-card-nml">
      <div className="absolute flex h-[291.13px] items-center justify-center left-[6.66px] top-[-10.34px] w-[315.616px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.64deg]">
          <div className="bg-[#bbc5e4] h-[282.442px] rounded-[14px] w-[307.66px]" />
        </div>
      </div>
      <Frame />
      <CountLeft />
    </div>
  );
}