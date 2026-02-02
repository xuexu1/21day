import svgPaths from "./svg-eyzk82b7bg";

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
    <div className="absolute h-[28px] left-[12px] overflow-auto right-[44px] top-[9px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] h-[16px] justify-center leading-[0] left-[7px] text-[#cdd3df] text-[14px] top-1/2 w-[154.2px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal] whitespace-pre-wrap">点击添加新的单词或句子</p>
      </div>
    </div>
  );
}

function Input1() {
  return (
    <div className="absolute bg-[rgba(249,250,251,0.5)] border border-[#f3f4f6] border-solid h-[122px] left-[21px] overflow-clip right-[21px] rounded-[16px] top-[107px]" data-name="Input">
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[28px] left-[12px] overflow-auto right-[44px] top-[9px]" data-name="Container">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular','Noto_Sans_SC:Regular',sans-serif] h-[16px] justify-center leading-[0] left-[7px] text-[#cdd3df] text-[14px] top-1/2 w-[154.2px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[normal] whitespace-pre-wrap">输入翻译</p>
      </div>
    </div>
  );
}

function Input2() {
  return (
    <div className="absolute bg-white border border-[#f3f4f6] border-solid h-[122px] left-[21px] overflow-clip right-[21px] rounded-[16px] top-[244px]" data-name="Input">
      <Container1 />
    </div>
  );
}

function Svg1() {
  return (
    <div className="-translate-y-1/2 absolute left-[52px] size-[16px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p43eff00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#2563eb] h-[40px] left-[254px] overflow-clip rounded-[9999px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[458px] w-[88px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[calc(50%-9.9px)] text-[14px] text-center text-white top-[20px] w-[28.2px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[20px] whitespace-pre-wrap">搜索</p>
      </div>
      <Svg1 />
    </div>
  );
}

function Svg2() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[16px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p2141ee80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Background1() {
  return (
    <div className="absolute bg-[#374151] left-[12px] rounded-[4px] size-[32px] top-[12px]" data-name="Background">
      <Svg2 />
    </div>
  );
}

function Background2() {
  return (
    <div className="absolute bg-[#374151] left-[60px] rounded-[4px] size-[32px] top-[12px]" data-name="Background">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Georgia:Bold_Italic','Noto_Sans_JP:Bold',sans-serif] h-[24px] italic justify-center leading-[0] left-[8px] text-[16px] text-white top-[16px] w-[16.2px]" style={{ fontVariationSettings: "'wght' 700" }}>
        <p className="leading-[24px] whitespace-pre-wrap">文</p>
      </div>
    </div>
  );
}

function Svg3() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+151px)] size-[20px] top-[calc(50%-136px)]" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.p7b68400} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[12px] right-[318px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[56px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[20px] text-center text-white top-1/2 w-[11.33px]">
        <p className="leading-[28px] whitespace-pre-wrap">q</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[46px] right-[284px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[56px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[20px] text-center text-white top-1/2 w-[14.65px]">
        <p className="leading-[28px] whitespace-pre-wrap">w</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[80px] right-[250px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[56px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[20px] text-center text-white top-1/2 w-[11.33px]">
        <p className="leading-[28px] whitespace-pre-wrap">e</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[114px] right-[216px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[56px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[20px] text-center text-white top-1/2 w-[6.87px]">
        <p className="leading-[28px] whitespace-pre-wrap">r</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[148px] right-[182px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[56px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[20px] text-center text-white top-1/2 w-[5.76px]">
        <p className="leading-[28px] whitespace-pre-wrap">t</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[182px] right-[148px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[56px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[20px] text-center text-white top-1/2 w-[10.2px]">
        <p className="leading-[28px] whitespace-pre-wrap">y</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[216px] right-[114px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[56px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[20px] text-center text-white top-1/2 w-[11.33px]">
        <p className="leading-[28px] whitespace-pre-wrap">u</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[250px] right-[80px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[56px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[20px] text-center text-white top-1/2 w-[4.65px]">
        <p className="leading-[28px] whitespace-pre-wrap">i</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[284px] right-[46px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[56px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[20px] text-center text-white top-1/2 w-[11.33px]">
        <p className="leading-[28px] whitespace-pre-wrap">o</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[318px] right-[12px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[56px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[20px] text-center text-white top-1/2 w-[11.33px]">
        <p className="leading-[28px] whitespace-pre-wrap">p</p>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[24px] right-[304.89px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[112px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[20px] text-center text-white top-1/2 w-[11.33px]">
        <p className="leading-[28px] whitespace-pre-wrap">a</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[59.11px] right-[269.78px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[112px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[20px] text-center text-white top-1/2 w-[10.2px]">
        <p className="leading-[28px] whitespace-pre-wrap">s</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[94.22px] right-[234.67px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[112px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[20px] text-center text-white top-1/2 w-[11.33px]">
        <p className="leading-[28px] whitespace-pre-wrap">d</p>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[129.33px] right-[199.56px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[112px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[19.8px] text-center text-white top-1/2 w-[5.76px]">
        <p className="leading-[28px] whitespace-pre-wrap">f</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[164.44px] right-[164.45px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[112px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[20px] text-center text-white top-1/2 w-[11.33px]">
        <p className="leading-[28px] whitespace-pre-wrap">g</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[199.55px] right-[129.34px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[112px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[20px] text-center text-white top-1/2 w-[11.33px]">
        <p className="leading-[28px] whitespace-pre-wrap">h</p>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[234.66px] right-[94.23px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[112px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[18.4px] text-center text-white top-1/2 w-[4.65px]">
        <p className="leading-[28px] whitespace-pre-wrap">j</p>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[269.77px] right-[59.12px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[112px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.08px)] not-italic text-[20px] text-center text-white top-1/2 w-[10.2px]">
        <p className="leading-[28px] whitespace-pre-wrap">k</p>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[304.88px] right-[24.01px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[112px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[20px] text-center text-white top-1/2 w-[4.65px]">
        <p className="leading-[28px] whitespace-pre-wrap">l</p>
      </div>
    </div>
  );
}

function Svg4() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[20px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="SVG">
          <path d={svgPaths.pb98ef80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Button21() {
  return (
    <div className="absolute bg-[#374151] h-[44px] left-[12px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[168px] w-[42px]" data-name="Button">
      <Svg4 />
    </div>
  );
}

function Button22() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[66px] right-[264.86px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[168px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[20px] text-center text-white top-1/2 w-[10.2px]">
        <p className="leading-[28px] whitespace-pre-wrap">z</p>
      </div>
    </div>
  );
}

function Button23() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[99.14px] right-[231.72px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[168px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[20px] text-center text-white top-1/2 w-[10.2px]">
        <p className="leading-[28px] whitespace-pre-wrap">x</p>
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[132.28px] right-[198.58px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[168px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[20px] text-center text-white top-1/2 w-[10.2px]">
        <p className="leading-[28px] whitespace-pre-wrap">c</p>
      </div>
    </div>
  );
}

function Button25() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[165.42px] right-[165.44px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[168px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.09px)] not-italic text-[20px] text-center text-white top-1/2 w-[10.2px]">
        <p className="leading-[28px] whitespace-pre-wrap">v</p>
      </div>
    </div>
  );
}

function Button26() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[198.56px] right-[132.3px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[168px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[20px] text-center text-white top-1/2 w-[11.33px]">
        <p className="leading-[28px] whitespace-pre-wrap">b</p>
      </div>
    </div>
  );
}

function Button27() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[231.7px] right-[99.16px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[168px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.1px)] not-italic text-[20px] text-center text-white top-1/2 w-[11.33px]">
        <p className="leading-[28px] whitespace-pre-wrap">n</p>
      </div>
    </div>
  );
}

function Button28() {
  return (
    <div className="absolute bg-[#4b5563] h-[44px] left-[264.84px] right-[66.02px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[168px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[22px] justify-center leading-[0] left-[calc(50%+0.11px)] not-italic text-[20px] text-center text-white top-1/2 w-[16.87px]">
        <p className="leading-[28px] whitespace-pre-wrap">m</p>
      </div>
    </div>
  );
}

function Svg5() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[24px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="SVG">
          <path d={svgPaths.p2974e000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button29() {
  return (
    <div className="absolute bg-[#374151] h-[44px] left-[304px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[168px] w-[42px]" data-name="Button">
      <Svg5 />
    </div>
  );
}

function Button30() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#374151] h-[44px] left-[12px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[calc(50%+82px)] w-[86px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] h-[16px] justify-center leading-[0] left-[calc(50%+0.1px)] text-[14px] text-center text-white top-1/2 w-[41.45px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[20px] whitespace-pre-wrap">符 123</p>
      </div>
    </div>
  );
}

function Svg6() {
  return (
    <div className="-translate-y-1/2 absolute left-[65px] size-[16px] top-1/2" data-name="SVG">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="SVG">
          <path d={svgPaths.p18574300} id="Vector" stroke="var(--stroke-0, #9CA3AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button31() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#4b5563] h-[44px] left-[106px] right-[106px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[calc(50%+82px)]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[calc(50%-58.95px)] not-italic text-[#9ca3af] text-[14px] text-center top-[22px] w-[4.09px]">
        <p className="leading-[20px] whitespace-pre-wrap">,</p>
      </div>
      <Svg6 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular',sans-serif] h-[20px] justify-center leading-[0] left-[calc(50%+59.16px)] not-italic text-[#9ca3af] text-[14px] text-center top-[22px] w-[4.09px]">
        <p className="leading-[20px] whitespace-pre-wrap">.</p>
      </div>
    </div>
  );
}

function Button32() {
  return (
    <div className="-translate-y-1/2 absolute bg-[#007aff] h-[44px] left-[260px] rounded-[5px] shadow-[0px_1px_0px_0px_black] top-[calc(50%+82px)] w-[86px]" data-name="Button">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Segoe_UI:Regular','Noto_Sans_JP:Regular',sans-serif] h-[16px] justify-center leading-[0] left-[calc(50%+0.1px)] text-[14px] text-center text-white top-1/2 w-[28.2px]" style={{ fontVariationSettings: "'wght' 400" }}>
        <p className="leading-[20px] whitespace-pre-wrap">确定</p>
      </div>
    </div>
  );
}

function Background() {
  return (
    <div className="absolute bg-[#1c1c1e] h-[328px] left-0 right-0 top-[450px]" data-name="Background">
      <Background1 />
      <Background2 />
      <Svg3 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
      <Button15 />
      <Button16 />
      <Button17 />
      <Button18 />
      <Button19 />
      <Button20 />
      <Button21 />
      <Button22 />
      <Button23 />
      <Button24 />
      <Button25 />
      <Button26 />
      <Button27 />
      <Button28 />
      <Button29 />
      <Button30 />
      <Button31 />
      <Button32 />
      <div className="-translate-x-1/2 absolute bg-white bottom-[32px] h-[4px] left-1/2 opacity-30 rounded-[9999px] w-[128px]" data-name="Background" />
    </div>
  );
}

export default function Input() {
  return (
    <div className="bg-white border border-[#e5e7eb] border-solid overflow-clip relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] size-full" data-name="input">
      <Header />
      <Input1 />
      <Input2 />
      <Button1 />
      <Background />
    </div>
  );
}