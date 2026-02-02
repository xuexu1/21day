import imgImage4306 from "figma:asset/f8c2fa6ef5a2b6f386e8c81e690a222b0709e8a3.png";

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
    <div className="absolute border-[#f3f4f6] border-solid border-t bottom-0 h-[48px] left-0 right-0" data-name="HorizontalBorder">
      <Button />
      <div className="absolute bg-[#f3f4f6] bottom-0 left-[153.5px] top-0 w-px" data-name="Vertical Divider" />
      <Button1 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#f3f4f6] h-[19px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] left-[6px] text-[#9ca3af] text-[10px] top-[9.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[15px]">英中</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-[197.3px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] left-0 text-[#9ca3af] text-[12px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px]">adj. 会收缩的</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-0">
      <Background />
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">shrinkable</p>
      </div>
      <Container1 />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Frame />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#f3f4f6] h-[19px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] left-[6px] text-[#9ca3af] text-[10px] top-[9.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[15px]">英中</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-[222.19px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] left-0 text-[#9ca3af] text-[12px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px]">{`n. 占位符 `}</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-0">
      <Background1 />
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">placeholder</p>
      </div>
      <Container3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Frame1 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#f3f4f6] h-[19px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] left-[6px] text-[#9ca3af] text-[10px] top-[9.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[15px]">英中</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-[212.11px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] left-0 text-[#9ca3af] text-[12px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px]">v. 推荐,建议,劝告</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-0">
      <Background2 />
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[13.6px] whitespace-nowrap">
        <p className="leading-[20px]">recommend</p>
      </div>
      <Container5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Frame2 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#f3f4f6] h-[19px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] left-[6px] text-[#9ca3af] text-[10px] top-[9.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[15px]">英中</p>
      </div>
    </div>
  );
}

function SentenseChinese() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="sentense-chinese">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] left-0 not-italic text-[#0f172a] text-[13.6px] top-[30px] w-[255px]">
        <p className="leading-[20px] whitespace-pre-wrap">{`Don't enable all MCPs at once. Your 200k context window can shrink to 70k with too many tools enabled`}</p>
      </div>
    </div>
  );
}

function Sentense() {
  return (
    <div className="h-[35px] overflow-clip relative shrink-0 w-full" data-name="sentense">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] left-0 text-[#9ca3af] text-[12px] top-[16px] w-[291px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px] whitespace-pre-wrap">不要一次性使用全部MCP。你20万的上下文窗口会因为太多工具支持而缩减到7千。</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col h-[104px] items-start relative shrink-0 w-[255px]">
      <SentenseChinese />
      <Sentense />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-start flex flex-wrap gap-[8px] items-start justify-end left-0 top-0 w-[295px]">
      <Background3 />
      <Frame10 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[111px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Frame3 />
    </div>
  );
}

function Background4() {
  return (
    <div className="bg-[#f3f4f6] h-[19px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] left-[6px] text-[#9ca3af] text-[10px] top-[9.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[15px]">英中</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-[212.11px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] left-0 text-[#9ca3af] text-[12px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px]">n. 示例</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-0">
      <Background4 />
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[13.6px] whitespace-nowrap">
        <p className="leading-[20px]">example</p>
      </div>
      <Container8 />
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Frame4 />
    </div>
  );
}

function Background5() {
  return (
    <div className="bg-[#f3f4f6] h-[19px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] left-[6px] text-[#9ca3af] text-[10px] top-[9.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[15px]">英中</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-[212.11px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] left-0 text-[#9ca3af] text-[12px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px]">n. 示例</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-0">
      <Background5 />
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[13.6px] whitespace-nowrap">
        <p className="leading-[20px]">example</p>
      </div>
      <Container10 />
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Frame5 />
    </div>
  );
}

function Background6() {
  return (
    <div className="bg-[#f3f4f6] h-[19px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] left-[6px] text-[#9ca3af] text-[10px] top-[9.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[15px]">英中</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-[212.11px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] left-0 text-[#9ca3af] text-[12px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px]">n. 示例</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-0">
      <Background6 />
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[13.6px] whitespace-nowrap">
        <p className="leading-[20px]">example</p>
      </div>
      <Container12 />
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Frame6 />
    </div>
  );
}

function Background7() {
  return (
    <div className="bg-[#f3f4f6] h-[19px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] left-[6px] text-[#9ca3af] text-[10px] top-[9.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[15px]">英中</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-[212.11px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] left-0 text-[#9ca3af] text-[12px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px]">v. 集中的，细致的</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-0">
      <Background7 />
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[13.6px] whitespace-nowrap">
        <p className="leading-[20px]">{`intensive `}</p>
      </div>
      <Container14 />
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[367px] items-start left-[11px] overflow-x-clip overflow-y-auto top-[61px] w-[292px]">
      <Container />
      <Container2 />
      <Container4 />
      <Container6 />
      <Container7 />
      <Container9 />
      <Container11 />
      <Container13 />
    </div>
  );
}

function BackgroundBorderShadow() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border border-[#e5e7eb] border-solid h-[496px] left-1/2 overflow-clip rounded-[16px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] top-[calc(50%+18px)] w-[316px]" data-name="Background+Border+Shadow">
      <HorizontalBorder />
      <Frame8 />
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Semibold','Noto_Sans_SC:Bold','Noto_Sans_JP:Bold',sans-serif] justify-center leading-[0] left-[125px] text-[#1d2129] text-[16px] top-[30px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[26px]">导入确认</p>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[780px] left-0 right-0 top-0">
      <div className="absolute bg-[rgba(0,0,0,0.6)] inset-0" />
      <BackgroundBorderShadow />
    </div>
  );
}

export default function InputWindows() {
  return (
    <div className="relative size-full" data-name="input-windows">
      <div className="absolute h-[780px] left-px top-0 w-[358px]" data-name="image 4306">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage4306} />
      </div>
      <Frame9 />
    </div>
  );
}