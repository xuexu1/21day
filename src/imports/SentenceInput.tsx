import svgPaths from "./svg-8qbbdv7ise";

function Svg() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p3e896500} id="Vector" stroke="var(--stroke-0, #0F172A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute left-[8px] rounded-[9999px] size-[40px] top-[48px]" data-name="Button">
      <Svg />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white h-[104px] left-0 right-0 top-0" data-name="Header">
      <Button />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[112px] left-[17px] overflow-auto right-[8px] top-0" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] left-0 not-italic text-[#0f172a] text-[22px] top-[56px] w-[296px]">
        <p className="leading-[28px] whitespace-pre-wrap">Your 200k context window can shrink to 70k with too many tools enabled</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-white h-[112px] left-[19px] overflow-clip right-[23px] rounded-[16px] top-[104px]" data-name="Input">
      <Container />
    </div>
  );
}

export default function SentenceInput() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid overflow-clip relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="sentence_input">
      <Header />
      <Input />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] left-[36px] text-[#5f6774] text-[16px] top-[250px] w-[290px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[20px] whitespace-pre-wrap">如果启用过多的工具，您的20万字的上下文窗口可能会缩减至7万字</p>
      </div>
    </div>
  );
}