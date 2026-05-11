import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as s}from"./index-BioFo8Zg.js";import{L as o}from"./LMSwitchPanel-uFrFbjTC.js";import{L as _}from"./LMQuadrantSelector-CtpCiFzl.js";import"./index-yBjzXJbu.js";import"./Divider-PGiQvWAm.js";import"./LMScopeTile-BFX7F_mT.js";import"./tokens-BoTh6Ygv.js";const G={title:"LM/Components/LMSwitchPanel",component:o,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`LMSwitchPanel — 內容區塊頂部的 scope 切換列。

- 由左至右排列 \`LMScopeTile\`（128 × 128 方形），點選切換 scope
- 每顆 tile：三色三形狀燈號 + 產線/機台 icon + 名稱
- 同時只有一顆被選取`}}}},i=[{key:"line-a",label:"產線 A",type:"line",status:"normal"},{key:"aoi-001",label:"AOI檢測機 001",type:"machine",status:"warning"},{key:"laser-002",label:"LASER雷雕機 002",type:"machine",status:"down"},{key:"smt-003",label:"SMT貼片機 003",type:"machine",status:"normal"}],r=({children:n})=>e.jsxs("div",{style:{padding:32,background:"var(--bg-surface-dim)",minHeight:"100vh"},children:[n,e.jsx("div",{style:{marginTop:24,color:"var(--text-medium)"},children:"（示意：下方為主內容；切換上方 tile 會帶動主內容載入對應 scope 的資料）"})]}),B=()=>{const[n,t]=s.useState(["topLeft"]);return e.jsx(_,{value:n,onChange:t,size:52})},l={render:()=>{const[n,t]=s.useState("line-a");return e.jsx(r,{children:e.jsx(o,{items:i,value:n,onChange:t,rightSlot:e.jsx(B,{})})})}},c={name:"No rightSlot — without quadrant",render:()=>{const[n,t]=s.useState("line-a");return e.jsx(r,{children:e.jsx(o,{items:i,value:n,onChange:t})})}},m={name:"Many items — More button overflow",render:()=>{const n=[...i,{key:"aoi-002",label:"AOI檢測機 002",type:"machine",status:"normal"},{key:"aoi-003",label:"AOI檢測機 003",type:"machine",status:"warning"},{key:"oven-001",label:"回焊爐 001",type:"machine",status:"normal"},{key:"pcb-tester",label:"PCB 測試機",type:"machine",status:"down"},{key:"smt-005",label:"SMT貼片機 005",type:"machine",status:"normal"},{key:"oven-002",label:"回焊爐 002",type:"machine",status:"down"}],[t,a]=s.useState("line-a");return e.jsx(r,{children:e.jsx(o,{items:n,value:t,onChange:a})})}},p={name:"Narrow container — overflow into More menu",render:()=>{const n=[...i,{key:"aoi-002",label:"AOI檢測機 002",type:"machine",status:"normal"},{key:"aoi-003",label:"AOI檢測機 003",type:"machine",status:"warning"},{key:"oven-001",label:"回焊爐 001",type:"machine",status:"normal"},{key:"pcb-tester",label:"PCB 測試機",type:"machine",status:"down"}],[t,a]=s.useState("line-a");return e.jsxs("div",{style:{padding:32,background:"var(--bg-surface-dim)",minHeight:"100vh"},children:[e.jsx("div",{style:{width:720,maxWidth:"100%"},children:e.jsx(o,{items:n,value:t,onChange:a})}),e.jsx("div",{style:{marginTop:24,color:"var(--text-medium)"},children:"（容器寬 720px，無法放下所有 8 顆 tile → tail-end 自動收進 More 按鈕）"})]})}},u={render:()=>{const n=[...i,{key:"old-mes",label:"Legacy MES",type:"machine",status:"down",disabled:!0}],[t,a]=s.useState("line-a");return e.jsx(r,{children:e.jsx(o,{items:n,value:t,onChange:a})})}},d={name:"Status legend",render:()=>{const n=[{key:"a",label:"正常運行中",type:"machine",status:"normal"},{key:"b",label:"警告",type:"machine",status:"warning"},{key:"c",label:"停機",type:"machine",status:"down"}],[t,a]=s.useState("a");return e.jsx(r,{children:e.jsx(o,{items:n,value:t,onChange:a})})}},h={name:"Mixed — line + machine",render:()=>{const n=[{key:"line-a",label:"產線 A",type:"line",status:"normal"},{key:"line-b",label:"產線 B",type:"line",status:"warning"},{key:"aoi-001",label:"AOI檢測機 001",type:"machine",status:"normal"},{key:"laser-002",label:"LASER雷雕機 002",type:"machine",status:"down"}],[t,a]=s.useState("line-a");return e.jsx(r,{children:e.jsx(o,{items:n,value:t,onChange:a})})}};var y,S,b;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [scope, setScope] = useState('line-a');
    return <Frame>
        <LMSwitchPanel items={SAMPLE_ITEMS} value={scope} onChange={setScope} rightSlot={<QuadrantDemo />} />
      </Frame>;
  }
}`,...(b=(S=l.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var g,w,M;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'No rightSlot — without quadrant',
  render: () => {
    const [scope, setScope] = useState('line-a');
    return <Frame>
        <LMSwitchPanel items={SAMPLE_ITEMS} value={scope} onChange={setScope} />
      </Frame>;
  }
}`,...(M=(w=c.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var v,k,x;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'Many items — More button overflow',
  render: () => {
    const items: LMSwitchPanelItem[] = [...SAMPLE_ITEMS, {
      key: 'aoi-002',
      label: 'AOI檢測機 002',
      type: 'machine',
      status: 'normal'
    }, {
      key: 'aoi-003',
      label: 'AOI檢測機 003',
      type: 'machine',
      status: 'warning'
    }, {
      key: 'oven-001',
      label: '回焊爐 001',
      type: 'machine',
      status: 'normal'
    }, {
      key: 'pcb-tester',
      label: 'PCB 測試機',
      type: 'machine',
      status: 'down'
    }, {
      key: 'smt-005',
      label: 'SMT貼片機 005',
      type: 'machine',
      status: 'normal'
    }, {
      key: 'oven-002',
      label: '回焊爐 002',
      type: 'machine',
      status: 'down'
    }];
    const [scope, setScope] = useState('line-a');
    return <Frame>
        <LMSwitchPanel items={items} value={scope} onChange={setScope} />
      </Frame>;
  }
}`,...(x=(k=m.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var L,A,P;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Narrow container — overflow into More menu',
  render: () => {
    const items: LMSwitchPanelItem[] = [...SAMPLE_ITEMS, {
      key: 'aoi-002',
      label: 'AOI檢測機 002',
      type: 'machine',
      status: 'normal'
    }, {
      key: 'aoi-003',
      label: 'AOI檢測機 003',
      type: 'machine',
      status: 'warning'
    }, {
      key: 'oven-001',
      label: '回焊爐 001',
      type: 'machine',
      status: 'normal'
    }, {
      key: 'pcb-tester',
      label: 'PCB 測試機',
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
}`,...(P=(A=p.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var I,j,C;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(C=(j=u.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var E,f,O;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Status legend',
  render: () => {
    const items: LMSwitchPanelItem[] = [{
      key: 'a',
      label: '正常運行中',
      type: 'machine',
      status: 'normal'
    }, {
      key: 'b',
      label: '警告',
      type: 'machine',
      status: 'warning'
    }, {
      key: 'c',
      label: '停機',
      type: 'machine',
      status: 'down'
    }];
    const [scope, setScope] = useState('a');
    return <Frame>
        <LMSwitchPanel items={items} value={scope} onChange={setScope} />
      </Frame>;
  }
}`,...(O=(f=d.parameters)==null?void 0:f.docs)==null?void 0:O.source}}};var F,T,N;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
      key: 'aoi-001',
      label: 'AOI檢測機 001',
      type: 'machine',
      status: 'normal'
    }, {
      key: 'laser-002',
      label: 'LASER雷雕機 002',
      type: 'machine',
      status: 'down'
    }];
    const [scope, setScope] = useState('line-a');
    return <Frame>
        <LMSwitchPanel items={items} value={scope} onChange={setScope} />
      </Frame>;
  }
}`,...(N=(T=h.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};const J=["Default","NoRightSlot","ManyItemsOverflow","NarrowContainer","WithDisabled","AllStatuses","MixedLineAndMachine"];export{d as AllStatuses,l as Default,m as ManyItemsOverflow,h as MixedLineAndMachine,p as NarrowContainer,c as NoRightSlot,u as WithDisabled,J as __namedExportsOrder,G as default};
