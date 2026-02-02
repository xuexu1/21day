function Container() {
  return (
    <div className="absolute h-[16px] left-[104px] top-[52px] w-[28px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] h-[16px] justify-center leading-[0] left-0 text-[#9ca3af] text-[14px] top-[8px] w-[28.2px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[20px] whitespace-pre-wrap">半年</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[16px] left-[164px] top-[52px] w-[28px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] h-[16px] justify-center leading-[0] left-0 text-[#9ca3af] text-[14px] top-[8px] w-[28.2px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[20px] whitespace-pre-wrap">一年</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-white border-[#f9fafb] border-b border-solid h-[85px] left-0 right-0 top-0" data-name="Header">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] h-[17px] justify-center leading-[0] left-[24px] text-[#2563eb] text-[16px] top-[59.5px] w-[48.2px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[24px] whitespace-pre-wrap">一个月</p>
      </div>
      <div className="absolute bg-[#2563eb] h-[2px] left-[40px] rounded-[9999px] top-[82px] w-[16px]" data-name="Horizontal Divider" />
      <Container />
      <Container1 />
    </div>
  );
}

function Verticallearn() {
  return (
    <div className="content-center flex flex-wrap gap-[4px_12px] items-center justify-center px-[8px] py-[4px] relative shrink-0 w-[103px]" data-name="Verticallearn">
      <div aria-hidden="true" className="absolute border-[#c9cdd4] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] h-[14px] justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] text-center w-[100px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px] whitespace-pre-wrap">2次回顾</p>
      </div>
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2563eb] text-[13.7px] text-center w-[15.78px]">
        <p className="leading-[20px] whitespace-pre-wrap">8</p>
      </div>
    </div>
  );
}

function Verticallearn1() {
  return (
    <div className="content-center flex flex-wrap gap-[4px_12px] items-center justify-center px-[8px] py-[4px] relative shrink-0 w-[102px]" data-name="Verticallearn">
      <div aria-hidden="true" className="absolute border-[#c9cdd4] border-r border-solid inset-0 pointer-events-none" />
      <div className="flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] relative shrink-0 text-[#6b7280] text-[12px] text-center w-[100px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px] whitespace-pre-wrap">3次回顾</p>
      </div>
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#2563eb] text-[13.7px] text-center w-[15.78px]">
        <p className="leading-[20px] whitespace-pre-wrap">5</p>
      </div>
    </div>
  );
}

function Verticallearn2() {
  return (
    <div className="content-center flex flex-wrap gap-[4px] items-center justify-center leading-[0] px-[8px] py-[4px] relative shrink-0 text-center w-[103px]" data-name="Verticallearn">
      <div className="flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center relative shrink-0 text-[#6b7280] text-[12px] w-[100px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px] whitespace-pre-wrap">4次回顾</p>
      </div>
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] h-[16px] justify-center not-italic relative shrink-0 text-[#2563eb] text-[13.7px] w-[15.78px]">
        <p className="leading-[20px] whitespace-pre-wrap">1</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="-translate-x-1/2 absolute bg-[rgba(22,93,255,0.05)] content-stretch flex h-[66px] items-center justify-center left-[calc(50%+1px)] px-[7px] py-[11px] rounded-[12px] top-[95px] w-[318px]" data-name="Background">
      <Verticallearn />
      <Verticallearn1 />
      <Verticallearn2 />
    </div>
  );
}

function ParagraphVerticalBorder() {
  return (
    <div className="absolute h-[56px] left-[155px] top-[10px] w-[48.2px]" data-name="Paragraph+VerticalBorder">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] left-[calc(50%+0.4px)] not-italic text-[#2563eb] text-[40px] text-center top-[31.5px] whitespace-nowrap">
        <p className="leading-[49px]">08</p>
      </div>
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
    <div className="h-[16px] overflow-clip relative shrink-0 w-[197.3px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] left-0 text-[#9ca3af] text-[12px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px]">adj. 加强的，集中的，深入细致的…</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-0">
      <Background1 />
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">intensive</p>
      </div>
      <Container3 />
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Frame />
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
    <div className="h-[16px] overflow-clip relative shrink-0 w-[222.19px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] left-0 text-[#9ca3af] text-[12px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px]">n. (整齐的) 一堆；垛；堆；大量，许多...</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-0">
      <Background2 />
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">stack</p>
      </div>
      <Container5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Frame1 />
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

function Container7() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-[212.11px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] left-0 text-[#9ca3af] text-[12px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px]">v. 修改，改正；修饰，限定；缓和，…</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-0">
      <Background3 />
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[13.6px] whitespace-nowrap">
        <p className="leading-[20px]">modify</p>
      </div>
      <Container7 />
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Frame2 />
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

function Container9() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-[189px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] left-0 text-[#9ca3af] text-[12px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px]">n. 模块化</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-0">
      <Background4 />
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[13.6px] whitespace-nowrap">
        <p className="leading-[20px]">modular</p>
      </div>
      <Container9 />
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Frame3 />
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

function Container11() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-[169px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] left-0 text-[#9ca3af] text-[12px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px]">v. 有利于，促成</p>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-0">
      <Background5 />
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[13.6px] whitespace-nowrap">
        <p className="leading-[20px]">contribute ro</p>
      </div>
      <Container11 />
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Frame4 />
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

function Container13() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-[169px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] left-0 text-[#9ca3af] text-[12px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px]">n. 上下文/语境</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-0">
      <Background6 />
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[13.6px] whitespace-nowrap">
        <p className="leading-[20px]">context</p>
      </div>
      <Container13 />
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Frame5 />
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

function Container15() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-[169px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] left-0 text-[#9ca3af] text-[12px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px]">n. 共振共鸣</p>
      </div>
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-0">
      <Background7 />
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[13.6px] whitespace-nowrap">
        <p className="leading-[20px]">{`resonates `}</p>
      </div>
      <Container15 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Frame6 />
    </div>
  );
}

function Background8() {
  return (
    <div className="bg-[#f3f4f6] h-[19px] relative rounded-[4px] shrink-0 w-[32px]" data-name="Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] left-[6px] text-[#9ca3af] text-[10px] top-[9.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[15px]">英中</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-[169px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] justify-center leading-[0] left-0 text-[#9ca3af] text-[12px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px]">v. 使成整齐的一堆，成堆叠</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute content-stretch flex gap-[8px] items-center left-0 top-0">
      <Background8 />
      <div className="flex flex-col font-['Segoe_UI:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0f172a] text-[13.6px] whitespace-nowrap">
        <p className="leading-[20px]">stack</p>
      </div>
      <Container17 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Frame7 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] h-[430px] items-start left-[24px] top-[190px] w-[310px]">
      <div className="flex flex-col font-['Segoe_UI:Bold','Noto_Sans_JP:Bold',sans-serif] h-[16px] justify-center leading-[0] relative shrink-0 text-[#1f2937] text-[12px] w-full" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[16px] whitespace-pre-wrap">本月新增</p>
      </div>
      <Container2 />
      <Container4 />
      <Container6 />
      <Container8 />
      <Container10 />
      <Container12 />
      <Container14 />
      <Container16 />
    </div>
  );
}

function Main() {
  return (
    <div className="absolute inset-[85px_0_0_0] overflow-auto" data-name="Main">
      <Background />
      <ParagraphVerticalBorder />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] justify-center leading-[0] left-[calc(50%+1px)] text-[#6b7280] text-[12px] text-center top-[71px] whitespace-nowrap" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[16px]">本月新增单词量</p>
      </div>
      <Frame8 />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bottom-[8px] left-0 right-1/2 top-0" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_SC:Regular','Noto_Sans_JP:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[calc(50%+0.1px)] text-[#9ca3af] text-[14px] text-center top-[23.5px] w-[28.2px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[20px] whitespace-pre-wrap">词典</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4px] left-1/2 top-[calc(50%+12px)] w-[32px]" data-name="Rectangle" />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bottom-[8px] left-1/2 right-0 top-0" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[calc(50%+0.1px)] text-[#2563eb] text-[14px] text-center top-[23.5px] w-[28.2px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[20px] whitespace-pre-wrap">回顾</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#2563eb] h-[4px] left-1/2 rounded-[9999px] top-[calc(50%+12px)] w-[32px]" data-name="Background" />
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

export default function Review() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid overflow-clip relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="review">
      <Header />
      <Main />
      <Nav />
      <div className="-translate-x-1/2 absolute bg-[#1f2937] bottom-[4px] h-[4px] left-1/2 opacity-10 rounded-[9999px] w-[128px]" data-name="Background" />
    </div>
  );
}