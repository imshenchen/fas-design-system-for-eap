import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as v}from"./index-BioFo8Zg.js";import{L as a}from"./LMScopeTile-CJLvvluq.js";import"./index-yBjzXJbu.js";import"./tokens-tiCIra3T.js";const O={title:"LM/Components/LMScopeTile",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`LMScopeTile — 方形 tile 按鈕，用於選擇整條產線或特定機台（多為 SMT 貼片機）。

燈號規則（顏色 + 形狀皆帶語意，符合色盲可讀性）：
  - 綠色圓形 ●  正常運行 / Running
  - 黃色三角 ▲  警告     / Warning
  - 紅色方形 ■  停機     / Down`}}}},t=({children:n})=>e.jsx("div",{style:{display:"flex",gap:16,padding:24,background:"var(--bg-surface-dim)"},children:n}),r={render:()=>{const[n,l]=v.useState("yamaha-01");return e.jsxs(t,{children:[e.jsx(a,{type:"machine",label:"Yamaha YSM20R #01",status:"normal",selected:n==="yamaha-01",onClick:()=>l("yamaha-01")}),e.jsx(a,{type:"machine",label:"Panasonic NPM-W2 #02",status:"warning",selected:n==="pana-02",onClick:()=>l("pana-02")}),e.jsx(a,{type:"machine",label:"Fuji NXT III #03",status:"down",selected:n==="fuji-03",onClick:()=>l("fuji-03")})]})}},i={name:"Type — line",render:()=>e.jsxs(t,{children:[e.jsx(a,{type:"line",label:"產線 A",status:"normal"}),e.jsx(a,{type:"line",label:"產線 B",status:"warning",selected:!0}),e.jsx(a,{type:"line",label:"產線 C（測試）",status:"down"})]})},c={name:"Status — 三色三形狀",render:()=>e.jsxs(t,{children:[e.jsx(a,{type:"machine",label:"Yamaha YSM20R #01",status:"normal"}),e.jsx(a,{type:"machine",label:"Panasonic NPM-W2 #02",status:"warning"}),e.jsx(a,{type:"machine",label:"Fuji NXT III #03",status:"down"})]})},o={name:"Locale — English",render:()=>e.jsxs(t,{children:[e.jsx(a,{type:"line",label:"Line A",status:"normal",locale:"en"}),e.jsx(a,{type:"machine",label:"Yamaha YSM20R #01",status:"normal",locale:"en"}),e.jsx(a,{type:"machine",label:"Panasonic NPM-W2 #02",status:"warning",locale:"en"}),e.jsx(a,{type:"machine",label:"Fuji NXT III #03",status:"down",locale:"en"})]})},m={name:"Selected vs unselected",render:()=>e.jsxs(t,{children:[e.jsx(a,{type:"machine",label:"Yamaha YSM20R #01",status:"normal"}),e.jsx(a,{type:"machine",label:"Yamaha YSM20R #02",status:"normal",selected:!0})]})},p={render:()=>e.jsxs(t,{children:[e.jsx(a,{type:"machine",label:"Yamaha YSM20R #01",status:"normal",disabled:!0}),e.jsx(a,{type:"machine",label:"Panasonic NPM-W2 #02",status:"warning",disabled:!0}),e.jsx(a,{type:"machine",label:"Fuji NXT III #03",status:"down",disabled:!0})]})},d={name:"Long label — ellipsis",render:()=>e.jsxs(t,{children:[e.jsx(a,{type:"machine",label:"ASM SIPLACE SX2 高速貼片機 #001-Production",status:"normal"}),e.jsx(a,{type:"line",label:"第一電子三廠 SMT 產線 A-12",status:"warning",selected:!0})]})},u={name:"Grid layout — 多 tile 並排",render:()=>{const n=[{key:"line-a",type:"line",label:"產線 A",status:"normal"},{key:"line-b",type:"line",label:"產線 B",status:"warning"},{key:"yamaha-1",type:"machine",label:"Yamaha YSM20R #01",status:"normal"},{key:"pana-2",type:"machine",label:"Panasonic NPM-W2 #02",status:"warning"},{key:"fuji-3",type:"machine",label:"Fuji NXT III #03",status:"down"},{key:"asm-4",type:"machine",label:"ASM SIPLACE SX2 #04",status:"normal"},{key:"juki-5",type:"machine",label:"Juki RX-7R #05",status:"normal"},{key:"hanwha-6",type:"machine",label:"Hanwha SM482 #06",status:"down"}],[l,D]=v.useState("line-a");return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 128px)",gap:16,padding:24,background:"var(--bg-surface-dim)"},children:n.map(s=>e.jsx(a,{type:s.type,label:s.label,status:s.status,selected:l===s.key,onClick:()=>D(s.key)},s.key))})}};var y,S,b;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('yamaha-01');
    return <Frame>
        <LMScopeTile type="machine" label="Yamaha YSM20R #01" status="normal" selected={selected === 'yamaha-01'} onClick={() => setSelected('yamaha-01')} />
        <LMScopeTile type="machine" label="Panasonic NPM-W2 #02" status="warning" selected={selected === 'pana-02'} onClick={() => setSelected('pana-02')} />
        <LMScopeTile type="machine" label="Fuji NXT III #03" status="down" selected={selected === 'fuji-03'} onClick={() => setSelected('fuji-03')} />
      </Frame>;
  }
}`,...(b=(S=r.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var h,M,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Type — line',
  render: () => <Frame>
      <LMScopeTile type="line" label="產線 A" status="normal" />
      <LMScopeTile type="line" label="產線 B" status="warning" selected />
      <LMScopeTile type="line" label="產線 C（測試）" status="down" />
    </Frame>
}`,...(g=(M=i.parameters)==null?void 0:M.docs)==null?void 0:g.source}}};var j,L,T;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Status — 三色三形狀',
  render: () => <Frame>
      <LMScopeTile type="machine" label="Yamaha YSM20R #01" status="normal" />
      <LMScopeTile type="machine" label="Panasonic NPM-W2 #02" status="warning" />
      <LMScopeTile type="machine" label="Fuji NXT III #03" status="down" />
    </Frame>
}`,...(T=(L=c.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};var k,x,w;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: 'Locale — English',
  render: () => <Frame>
      <LMScopeTile type="line" label="Line A" status="normal" locale="en" />
      <LMScopeTile type="machine" label="Yamaha YSM20R #01" status="normal" locale="en" />
      <LMScopeTile type="machine" label="Panasonic NPM-W2 #02" status="warning" locale="en" />
      <LMScopeTile type="machine" label="Fuji NXT III #03" status="down" locale="en" />
    </Frame>
}`,...(w=(x=o.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};var I,Y,P;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Selected vs unselected',
  render: () => <Frame>
      <LMScopeTile type="machine" label="Yamaha YSM20R #01" status="normal" />
      <LMScopeTile type="machine" label="Yamaha YSM20R #02" status="normal" selected />
    </Frame>
}`,...(P=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:P.source}}};var F,N,R;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <Frame>
      <LMScopeTile type="machine" label="Yamaha YSM20R #01" status="normal" disabled />
      <LMScopeTile type="machine" label="Panasonic NPM-W2 #02" status="warning" disabled />
      <LMScopeTile type="machine" label="Fuji NXT III #03" status="down" disabled />
    </Frame>
}`,...(R=(N=p.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var C,f,A;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: 'Long label — ellipsis',
  render: () => <Frame>
      <LMScopeTile type="machine" label="ASM SIPLACE SX2 高速貼片機 #001-Production" status="normal" />
      <LMScopeTile type="line" label="第一電子三廠 SMT 產線 A-12" status="warning" selected />
    </Frame>
}`,...(A=(f=d.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};var X,E,W;u.parameters={...u.parameters,docs:{...(X=u.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'Grid layout — 多 tile 並排',
  render: () => {
    const items: {
      key: string;
      type: LMScopeTileType;
      label: string;
      status: LMScopeTileStatus;
    }[] = [{
      key: 'line-a',
      type: 'line',
      label: '產線 A',
      status: 'normal'
    }, {
      key: 'line-b',
      type: 'line',
      label: '產線 B',
      status: 'warning'
    }, {
      key: 'yamaha-1',
      type: 'machine',
      label: 'Yamaha YSM20R #01',
      status: 'normal'
    }, {
      key: 'pana-2',
      type: 'machine',
      label: 'Panasonic NPM-W2 #02',
      status: 'warning'
    }, {
      key: 'fuji-3',
      type: 'machine',
      label: 'Fuji NXT III #03',
      status: 'down'
    }, {
      key: 'asm-4',
      type: 'machine',
      label: 'ASM SIPLACE SX2 #04',
      status: 'normal'
    }, {
      key: 'juki-5',
      type: 'machine',
      label: 'Juki RX-7R #05',
      status: 'normal'
    }, {
      key: 'hanwha-6',
      type: 'machine',
      label: 'Hanwha SM482 #06',
      status: 'down'
    }];
    const [selected, setSelected] = useState('line-a');
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 128px)',
      gap: 16,
      padding: 24,
      background: 'var(--bg-surface-dim)'
    }}>
        {items.map(it => <LMScopeTile key={it.key} type={it.type} label={it.label} status={it.status} selected={selected === it.key} onClick={() => setSelected(it.key)} />)}
      </div>;
  }
}`,...(W=(E=u.parameters)==null?void 0:E.docs)==null?void 0:W.source}}};const q=["Default","TypeLine","StatusLegend","LocaleEn","SelectedComparison","DisabledStates","LongLabelTruncation","Grid"];export{r as Default,p as DisabledStates,u as Grid,o as LocaleEn,d as LongLabelTruncation,m as SelectedComparison,c as StatusLegend,i as TypeLine,q as __namedExportsOrder,O as default};
