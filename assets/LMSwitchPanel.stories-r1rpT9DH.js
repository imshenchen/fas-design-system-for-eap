import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as s}from"./index-BioFo8Zg.js";import{L as o}from"./LMSwitchPanel-DRYD00zH.js";import{L as D}from"./LMQuadrantSelector-DgenfdiQ.js";import"./index-yBjzXJbu.js";import"./Divider-PGiQvWAm.js";import"./LMScopeTile-CchEKmIS.js";import"./tokens-BoTh6Ygv.js";const G={title:"LM/Components/LMSwitchPanel",component:o,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`LMSwitchPanel — 內容區塊頂部的 scope 切換列。

- 由左至右排列 \`LMScopeTile\`，點選切換 scope
- 每顆 tile：三色三形狀燈號 + 類型 caption（產線 / 設備）+ 名稱
- 同時只有一顆被選取`}}}},i=[{key:"line-a",label:"產線 A",type:"line",status:"normal"},{key:"yamaha-1",label:"Yamaha YSM20R #01",type:"machine",status:"normal"},{key:"pana-2",label:"Panasonic NPM-W2 #02",type:"machine",status:"warning"},{key:"fuji-3",label:"Fuji NXT III #03",type:"machine",status:"down"}],r=({children:n})=>e.jsxs("div",{style:{padding:32,background:"var(--bg-surface-dim)",minHeight:"100vh"},children:[n,e.jsx("div",{style:{marginTop:24,color:"var(--text-medium)"},children:"（示意：下方為主內容；切換上方 tile 會帶動主內容載入對應 scope 的資料）"})]}),l={render:()=>{const[n,a]=s.useState("line-a"),[t,H]=s.useState(["topLeft"]);return e.jsx(r,{children:e.jsx(o,{items:i,value:n,onChange:a,rightSlot:e.jsx(D,{value:t,onChange:H,size:52})})})}},c={name:"No rightSlot — without quadrant",render:()=>{const[n,a]=s.useState("line-a");return e.jsx(r,{children:e.jsx(o,{items:i,value:n,onChange:a})})}},m={name:"Many items — More button overflow",render:()=>{const n=[...i,{key:"asm-4",label:"ASM SIPLACE SX2 #04",type:"machine",status:"normal"},{key:"juki-5",label:"Juki RX-7R #05",type:"machine",status:"warning"},{key:"hanwha-6",label:"Hanwha SM482 #06",type:"machine",status:"normal"},{key:"yamaha-7",label:"Yamaha YS12 #07",type:"machine",status:"down"},{key:"pana-8",label:"Panasonic NPM-D3 #08",type:"machine",status:"normal"},{key:"fuji-9",label:"Fuji AIMEX III #09",type:"machine",status:"down"}],[a,t]=s.useState("line-a");return e.jsx(r,{children:e.jsx(o,{items:n,value:a,onChange:t})})}},u={name:"Narrow container — overflow into More menu",render:()=>{const n=[...i,{key:"asm-4",label:"ASM SIPLACE SX2 #04",type:"machine",status:"normal"},{key:"juki-5",label:"Juki RX-7R #05",type:"machine",status:"warning"},{key:"hanwha-6",label:"Hanwha SM482 #06",type:"machine",status:"normal"},{key:"yamaha-7",label:"Yamaha YS12 #07",type:"machine",status:"down"}],[a,t]=s.useState("line-a");return e.jsxs("div",{style:{padding:32,background:"var(--bg-surface-dim)",minHeight:"100vh"},children:[e.jsx("div",{style:{width:720,maxWidth:"100%"},children:e.jsx(o,{items:n,value:a,onChange:t})}),e.jsx("div",{style:{marginTop:24,color:"var(--text-medium)"},children:"（容器寬 720px，無法放下所有 8 顆 tile → tail-end 自動收進 More 按鈕）"})]})}},p={render:()=>{const n=[...i,{key:"old-mes",label:"Legacy MES",type:"machine",status:"down",disabled:!0}],[a,t]=s.useState("line-a");return e.jsx(r,{children:e.jsx(o,{items:n,value:a,onChange:t})})}},h={name:"Status legend",render:()=>{const n=[{key:"a",label:"Yamaha YSM20R #01",type:"machine",status:"normal"},{key:"b",label:"Panasonic NPM-W2 #02",type:"machine",status:"warning"},{key:"c",label:"Fuji NXT III #03",type:"machine",status:"down"}],[a,t]=s.useState("a");return e.jsx(r,{children:e.jsx(o,{items:n,value:a,onChange:t})})}},d={name:"Mixed — line + machine",render:()=>{const n=[{key:"line-a",label:"產線 A",type:"line",status:"normal"},{key:"line-b",label:"產線 B",type:"line",status:"warning"},{key:"yamaha-1",label:"Yamaha YSM20R #01",type:"machine",status:"normal"},{key:"pana-2",label:"Panasonic NPM-W2 #02",type:"machine",status:"down"}],[a,t]=s.useState("line-a");return e.jsx(r,{children:e.jsx(o,{items:n,value:a,onChange:t})})}},y={name:"Locale — English",render:()=>{const n=[{key:"line-a",label:"Line A",type:"line",status:"normal"},{key:"yamaha-1",label:"Yamaha YSM20R #01",type:"machine",status:"normal"},{key:"pana-2",label:"Panasonic NPM-W2 #02",type:"machine",status:"warning"},{key:"fuji-3",label:"Fuji NXT III #03",type:"machine",status:"down"}],[a,t]=s.useState("line-a");return e.jsx(r,{children:e.jsx(o,{items:n,value:a,onChange:t,locale:"en"})})}};var S,M,g;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [scope, setScope] = useState('line-a');
    const [zones, setZones] = useState<LMQuadrantKey[]>(['topLeft']);
    return <Frame>
        <LMSwitchPanel items={SAMPLE_ITEMS} value={scope} onChange={setScope} rightSlot={<LMQuadrantSelector value={zones} onChange={setZones} size={52} />} />
      </Frame>;
  }
}`,...(g=(M=l.parameters)==null?void 0:M.docs)==null?void 0:g.source}}};var w,b,k;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'No rightSlot — without quadrant',
  render: () => {
    const [scope, setScope] = useState('line-a');
    return <Frame>
        <LMSwitchPanel items={SAMPLE_ITEMS} value={scope} onChange={setScope} />
      </Frame>;
  }
}`,...(k=(b=c.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var L,P,v;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Many items — More button overflow',
  render: () => {
    const items: LMSwitchPanelItem[] = [...SAMPLE_ITEMS, {
      key: 'asm-4',
      label: 'ASM SIPLACE SX2 #04',
      type: 'machine',
      status: 'normal'
    }, {
      key: 'juki-5',
      label: 'Juki RX-7R #05',
      type: 'machine',
      status: 'warning'
    }, {
      key: 'hanwha-6',
      label: 'Hanwha SM482 #06',
      type: 'machine',
      status: 'normal'
    }, {
      key: 'yamaha-7',
      label: 'Yamaha YS12 #07',
      type: 'machine',
      status: 'down'
    }, {
      key: 'pana-8',
      label: 'Panasonic NPM-D3 #08',
      type: 'machine',
      status: 'normal'
    }, {
      key: 'fuji-9',
      label: 'Fuji AIMEX III #09',
      type: 'machine',
      status: 'down'
    }];
    const [scope, setScope] = useState('line-a');
    return <Frame>
        <LMSwitchPanel items={items} value={scope} onChange={setScope} />
      </Frame>;
  }
}`,...(v=(P=m.parameters)==null?void 0:P.docs)==null?void 0:v.source}}};var I,j,x;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Narrow container — overflow into More menu',
  render: () => {
    const items: LMSwitchPanelItem[] = [...SAMPLE_ITEMS, {
      key: 'asm-4',
      label: 'ASM SIPLACE SX2 #04',
      type: 'machine',
      status: 'normal'
    }, {
      key: 'juki-5',
      label: 'Juki RX-7R #05',
      type: 'machine',
      status: 'warning'
    }, {
      key: 'hanwha-6',
      label: 'Hanwha SM482 #06',
      type: 'machine',
      status: 'normal'
    }, {
      key: 'yamaha-7',
      label: 'Yamaha YS12 #07',
      type: 'machine',
      status: 'down'
    }];
    const [scope, setScope] = useState('line-a');
    return <div style={{
      padding: 32,
      background: 'var(--bg-surface-dim)',
      minHeight: '100vh'
    }}>
        <div style={{
        width: 720,
        maxWidth: '100%'
      }}>
          <LMSwitchPanel items={items} value={scope} onChange={setScope} />
        </div>
        <div style={{
        marginTop: 24,
        color: 'var(--text-medium)'
      }}>
          （容器寬 720px，無法放下所有 8 顆 tile → tail-end 自動收進 More 按鈕）
        </div>
      </div>;
  }
}`,...(x=(j=u.parameters)==null?void 0:j.docs)==null?void 0:x.source}}};var E,A,C;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const items: LMSwitchPanelItem[] = [...SAMPLE_ITEMS, {
      key: 'old-mes',
      label: 'Legacy MES',
      type: 'machine',
      status: 'down',
      disabled: true
    }];
    const [scope, setScope] = useState('line-a');
    return <Frame>
        <LMSwitchPanel items={items} value={scope} onChange={setScope} />
      </Frame>;
  }
}`,...(C=(A=p.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var f,F,N;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Status legend',
  render: () => {
    const items: LMSwitchPanelItem[] = [{
      key: 'a',
      label: 'Yamaha YSM20R #01',
      type: 'machine',
      status: 'normal'
    }, {
      key: 'b',
      label: 'Panasonic NPM-W2 #02',
      type: 'machine',
      status: 'warning'
    }, {
      key: 'c',
      label: 'Fuji NXT III #03',
      type: 'machine',
      status: 'down'
    }];
    const [scope, setScope] = useState('a');
    return <Frame>
        <LMSwitchPanel items={items} value={scope} onChange={setScope} />
      </Frame>;
  }
}`,...(N=(F=h.parameters)==null?void 0:F.docs)==null?void 0:N.source}}};var Y,R,T;d.parameters={...d.parameters,docs:{...(Y=d.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Mixed — line + machine',
  render: () => {
    const items: LMSwitchPanelItem[] = [{
      key: 'line-a',
      label: '產線 A',
      type: 'line',
      status: 'normal'
    }, {
      key: 'line-b',
      label: '產線 B',
      type: 'line',
      status: 'warning'
    }, {
      key: 'yamaha-1',
      label: 'Yamaha YSM20R #01',
      type: 'machine',
      status: 'normal'
    }, {
      key: 'pana-2',
      label: 'Panasonic NPM-W2 #02',
      type: 'machine',
      status: 'down'
    }];
    const [scope, setScope] = useState('line-a');
    return <Frame>
        <LMSwitchPanel items={items} value={scope} onChange={setScope} />
      </Frame>;
  }
}`,...(T=(R=d.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var X,W,_;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Locale — English',
  render: () => {
    const items: LMSwitchPanelItem[] = [{
      key: 'line-a',
      label: 'Line A',
      type: 'line',
      status: 'normal'
    }, {
      key: 'yamaha-1',
      label: 'Yamaha YSM20R #01',
      type: 'machine',
      status: 'normal'
    }, {
      key: 'pana-2',
      label: 'Panasonic NPM-W2 #02',
      type: 'machine',
      status: 'warning'
    }, {
      key: 'fuji-3',
      label: 'Fuji NXT III #03',
      type: 'machine',
      status: 'down'
    }];
    const [scope, setScope] = useState('line-a');
    return <Frame>
        <LMSwitchPanel items={items} value={scope} onChange={setScope} locale="en" />
      </Frame>;
  }
}`,...(_=(W=y.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};const U=["Default","NoRightSlot","ManyItemsOverflow","NarrowContainer","WithDisabled","AllStatuses","MixedLineAndMachine","LocaleEn"];export{h as AllStatuses,l as Default,y as LocaleEn,m as ManyItemsOverflow,d as MixedLineAndMachine,u as NarrowContainer,c as NoRightSlot,p as WithDisabled,U as __namedExportsOrder,G as default};
