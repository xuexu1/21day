import svgPaths from "./svg-vqdm2fnnw8";

function Svg() {
  return (
    <div className="absolute left-[8px] size-[24px] top-[8px]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d="M15 19L8 12L15 5" id="Vector" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
          <path d="M8 12H18" id="Vector_2" stroke="var(--stroke-0, #1F2937)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute left-[8px] rounded-[9999px] size-[40px] top-[52px]" data-name="Button">
      <Svg />
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white h-[104px] left-0 right-0 top-0" data-name="Header">
      <Button />
      <div className="absolute h-[11.5px] left-[315px] top-[67px] w-[18px]">
        <div className="absolute inset-[-17.39%_-11.11%_-14.46%_-11.11%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22.0001 15.1625">
            <path d={svgPaths.p161b4d00} id="Vector 653" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeWidth="4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[510px] left-[8px] overflow-auto right-[6px] top-[9px]" data-name="Container">
      <div className="absolute font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] leading-[normal] left-0 text-[#cdd3df] text-[14px] top-0 w-[300px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="mb-0">点击添加新的单词或句子，格式参考:</p>
        <p className="mb-0">shrinkable adj.会收缩的</p>
        <p className="mb-0">{`placeholder n.占位符 `}</p>
        <p className="mb-0">recommend v.推荐,建议,劝告</p>
        <p className="mb-0">{`Don't enable all MCPs at once. Your 200k context window can shrink to 70k with too many tools enabled`}</p>
        <p className="mb-0">不要一次性使用全部MCP。你20万的上下文窗口会因为太多工具支持而缩减到7千。</p>
        <p className="mb-0">intensive 集中的，细致的</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-[rgba(249,250,251,0.5)] border border-[#f3f4f6] border-solid h-[530px] left-[21px] overflow-clip right-[21px] rounded-[16px] top-[107px]" data-name="Input">
      <Container />
    </div>
  );
}

function BtnTextMobile() {
  return (
    <div className="absolute bg-[#165dff] h-[41px] left-[24px] rounded-[4px] top-[701px] w-[313px]" data-name="btn-text-mobile-">
      <div className="absolute flex flex-col font-['Inter:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] font-normal inset-[10px_29.5px_9px_29.5px] justify-center leading-[0] not-italic text-[18px] text-center text-white">
        <p className="leading-[normal] whitespace-pre-wrap">导入</p>
      </div>
    </div>
  );
}

export default function Input() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid overflow-clip relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="input">
      <Header />
      <Input1 />
      <BtnTextMobile />
    </div>
  );
}