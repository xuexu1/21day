import svgPaths from "./svg-zdr1glqli5";

function Header() {
  return <div className="absolute bg-white h-[96px] left-0 right-0 top-0" data-name="Header" />;
}

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
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#1d2129] text-[30px] text-center w-[287px]">
        <p className="leading-[36px] whitespace-pre-wrap">intensive</p>
      </div>
    </div>
  );
}

function Translate() {
  return (
    <div className="content-stretch flex items-center justify-center px-[58px] relative shrink-0" data-name="translate">
      <div className="flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#60a5fa] text-[12px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px]">按压查看翻译</p>
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

function Frame1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] inset-[0_0_30px_0] items-end pt-[8px] rounded-[16px]">
      <div className="flex flex-col font-['Segoe_UI:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] h-[24px] justify-center leading-[0] relative shrink-0 text-[#9ca3af] text-[12px] text-center w-full" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px] whitespace-pre-wrap">还记得这个单词吗？</p>
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
        今日1/ 3个单词
      </p>
    </div>
  );
}

function MemoryCardNml() {
  return (
    <div className="absolute bottom-[202px] h-[314px] left-[24px] opacity-80 right-[24px] rounded-[16px] shadow-[0px_4px_20px_0px_rgba(0,0,0,0.15)]" data-name="memory-card-nml">
      <div className="absolute flex h-[291.13px] items-center justify-center left-[6.66px] top-[-10.34px] w-[315.616px]" style={{ "--transform-inner-width": "0", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="flex-none rotate-[1.64deg]">
          <div className="bg-[#bbc5e4] h-[282.442px] rounded-[14px] w-[307.66px]" />
        </div>
      </div>
      <Frame1 />
      <CountLeft />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[18px] left-[16px] overflow-clip right-[40px] top-[15px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] h-[16px] justify-center leading-[0] left-0 text-[#9ca3af] text-[14px] top-[8px] w-[154.2px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal] whitespace-pre-wrap">点击添加新的单词或句子</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute border border-[#f2f3f5] border-solid h-[50px] left-[calc(50%-0.5px)] overflow-clip rounded-[8px] top-[calc(50%+12px)] w-[307px]" data-name="Input">
      <Container />
    </div>
  );
}

function Translate1() {
  return (
    <div className="-translate-x-1/2 absolute h-[16px] left-[calc(50%-109px)] top-[9px] w-[86px]" data-name="translate">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] left-0 text-[14px] text-black top-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px]">英文</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] left-[58px] text-[14px] text-black top-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px]">中文</p>
      </div>
      <div className="absolute flex h-[5px] items-center justify-center left-[38px] top-[4px] w-[14px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[5px] relative w-[14px]">
            <div className="absolute inset-[-10.34%_-5.36%_-15%_4.14%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.1708 6.26713">
                <path d={svgPaths.pc212580} fill="var(--stroke-0, black)" id="Vector 649" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-white h-[96px] left-[20px] overflow-clip rounded-[6px] top-[413px] w-[326px]">
      <Input />
      <Translate1 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute inset-[132px_1px_64px_-1px] overflow-auto" data-name="Main">
      <MemoryCardNml />
      <Frame />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bottom-[8px] left-0 right-1/2 top-0" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[calc(50%+0.1px)] text-[#2563eb] text-[14px] text-center top-[23.5px] w-[28.2px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[20px] whitespace-pre-wrap">词典</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#2563eb] h-[4px] left-1/2 rounded-[9999px] top-[calc(50%+12px)] w-[32px]" data-name="Background" />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bottom-[8px] left-1/2 right-0 top-0" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[calc(50%+0.1px)] text-[#9ca3af] text-[14px] text-center top-[23.5px] w-[28.2px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[20px] whitespace-pre-wrap">回顾</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4px] left-1/2 top-[calc(50%+12px)] w-[32px]" data-name="Rectangle" />
    </div>
  );
}

function Nav() {
  return (
    <div className="absolute bg-white border-[#f3f4f6] border-solid border-t bottom-0 h-[64px] left-0 right-0" data-name="Nav">
      <Button />
      <Button1 />
    </div>
  );
}

export default function Home() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid overflow-clip relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="home">
      <Header />
      <div className="-translate-x-1/2 absolute bottom-[678px] flex flex-col font-['Segoe_UI:Bold','Noto_Sans_JP:Bold','Noto_Sans_SC:Bold',sans-serif] justify-center leading-[0] left-[calc(50%-0.5px)] text-[#0f172a] text-[24px] text-center tracking-[-0.6px] translate-y-1/2 whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[32px]">21日单词记忆</p>
      </div>
      <Main />
      <Nav />
      <div className="-translate-x-1/2 absolute bg-[#1f2937] bottom-[4px] h-[4px] left-1/2 opacity-10 rounded-[9999px] w-[128px]" data-name="Background" />
    </div>
  );
}