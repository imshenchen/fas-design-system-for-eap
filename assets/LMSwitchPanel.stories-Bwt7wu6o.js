import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as s}from"./index-BioFo8Zg.js";import{L as r}from"./LMSwitchPanel-KcMj3785.js";import{L as W}from"./LMQuadrantSelector-CtpCiFzl.js";import"./index-yBjzXJbu.js";import"./Divider-PGiQvWAm.js";import"./LMScopeTile-BFX7F_mT.js";import"./tokens-BoTh6Ygv.js";const V={title:"LM/Components/LMSwitchPanel",component:r,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`LMSwitchPanel — 內容區塊頂部的 scope 切換列。

- 由左至右排列 \`LMScopeTile\`（128 × 128 方形），點選切換 scope
- 每顆 tile：三色三形狀燈號 + 產線/機台 icon + 名稱
- 同時只有一顆被選取`}}}},i=[{key:"line-a",label:"產線 A",type:"line",status:"normal"},{key:"aoi-001",label:"AOI檢測機 001",type:"machine",status:"warning"},{key:"laser-002",label:"LASER雷雕機 002",type:"machine",status:"down"},{key:"smt-003",label:"SMT貼片機 003",type:"machine",status:"normal"}],o=({children:t})=>e.jsxs("div",{style:{padding:32,background:"var(--bg-surface-dim)",minHeight:"100vh"},children:[t,e.jsx("div",{style:{marginTop:24,color:"var(--text-medium)"},children:"（示意：下方為主內容；切換上方 tile 會帶動主內容載入對應 scope 的資料）"})]}),H=()=>{const[t,a]=s.useState(["topLeft"]);return e.jsx(W,{value:t,onChange:a,size:52})},l={render:()=>{const[t,a]=s.useState("line-a");return e.jsx(o,{children:e.jsx(r,{items:i,value:t,onChange:a,featureTitle:"即時數據",rightSlot:e.jsx(H,{})})})}},c={name:"No rightSlot — without quadrant",render:()=>{const[t,a]=s.useState("line-a");return e.jsx(o,{children:e.jsx(r,{items:i,value:t,onChange:a,featureTitle:"即時數據"})})}},m={name:"Many items — More button overflow",render:()=>{const t=[...i,{key:"aoi-002",label:"AOI檢測機 002",type:"machine",status:"normal"},{key:"aoi-003",label:"AOI檢測機 003",type:"machine",status:"warning"},{key:"oven-001",label:"回焊爐 001",type:"machine",status:"normal"},{key:"pcb-tester",label:"PCB 測試機",type:"machine",status:"down"},{key:"smt-005",label:"SMT貼片機 005",type:"machine",status:"normal"},{key:"oven-002",label:"回焊爐 002",type:"machine",status:"down"}],[a,n]=s.useState("line-a");return e.jsx(o,{children:e.jsx(r,{items:t,value:a,onChange:n,featureTitle:"即時數據"})})}},u={name:"Narrow container — overflow into More menu",render:()=>{const t=[...i,{key:"aoi-002",label:"AOI檢測機 002",type:"machine",status:"normal"},{key:"aoi-003",label:"AOI檢測機 003",type:"machine",status:"warning"},{key:"oven-001",label:"回焊爐 001",type:"machine",status:"normal"},{key:"pcb-tester",label:"PCB 測試機",type:"machine",status:"down"}],[a,n]=s.useState("line-a");return e.jsxs("div",{style:{padding:32,background:"var(--bg-surface-dim)",minHeight:"100vh"},children:[e.jsx("div",{style:{width:720,maxWidth:"100%"},children:e.jsx(r,{items:t,value:a,onChange:n,featureTitle:"即時數據"})}),e.jsx("div",{style:{marginTop:24,color:"var(--text-medium)"},children:"（容器寬 720px，無法放下所有 8 顆 tile → tail-end 自動收進 More 按鈕）"})]})}},p={name:"No featureTitle — title section omitted",render:()=>{const[t,a]=s.useState("line-a");return e.jsx(o,{children:e.jsx(r,{items:i,value:t,onChange:a})})}},d={render:()=>{const t=[...i,{key:"old-mes",label:"Legacy MES",type:"machine",status:"down",disabled:!0}],[a,n]=s.useState("line-a");return e.jsx(o,{children:e.jsx(r,{items:t,value:a,onChange:n})})}},h={name:"Status legend",render:()=>{const t=[{key:"a",label:"正常運行中",type:"machine",status:"normal"},{key:"b",label:"警告",type:"machine",status:"warning"},{key:"c",label:"停機",type:"machine",status:"down"}],[a,n]=s.useState("a");return e.jsx(o,{children:e.jsx(r,{items:t,value:a,onChange:n})})}},S={name:"Mixed — line + machine",render:()=>{const t=[{key:"line-a",label:"產線 A",type:"line",status:"normal"},{key:"line-b",label:"產線 B",type:"line",status:"warning"},{key:"aoi-001",label:"AOI檢測機 001",type:"machine",status:"normal"},{key:"laser-002",label:"LASER雷雕機 002",type:"machine",status:"down"}],[a,n]=s.useState("line-a");return e.jsx(o,{children:e.jsx(r,{items:t,value:a,onChange:n})})}};var y,b,g;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [scope, setScope] = useState('line-a');
    return <Frame>
        <LMSwitchPanel items={SAMPLE_ITEMS} value={scope} onChange={setScope} featureTitle="即時數據" rightSlot={<QuadrantDemo />} />
      </Frame>;
  }
}`,...(g=(b=l.parameters)==null?void 0:b.docs)==null?void 0:g.source}}};var M,w,v;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: 'No rightSlot — without quadrant',
  render: () => {
    const [scope, setScope] = useState('line-a');
    return <Frame>
        <LMSwitchPanel items={SAMPLE_ITEMS} value={scope} onChange={setScope} featureTitle="即時數據" />
      </Frame>;
  }
}`,...(v=(w=c.parameters)==null?void 0:w.docs)==null?void 0:v.source}}};var k,x,L;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
        <LMSwitchPanel items={items} value={scope} onChange={setScope} featureTitle="即時數據" />
      </Frame>;
  }
}`,...(L=(x=m.parameters)==null?void 0:x.docs)==null?void 0:L.source}}};var f,A,P;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
          <LMSwitchPanel items={items} value={scope} onChange={setScope} featureTitle="即時數據" />
        </div>
        <div style={{
        marginTop: 24,
        color: 'var(--text-medium)'
      }}>
          （容器寬 720px，無法放下所有 8 顆 tile → tail-end 自動收進 More 按鈕）
        </div>
      </div>;
  }
}`,...(P=(A=u.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var T,I,j;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'No featureTitle — title section omitted',
  render: () => {
    const [scope, setScope] = useState('line-a');
    return <Frame>
        <LMSwitchPanel items={SAMPLE_ITEMS} value={scope} onChange={setScope} />
      </Frame>;
  }
}`,...(j=(I=p.parameters)==null?void 0:I.docs)==null?void 0:j.source}}};var C,E,F;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(F=(E=d.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var O,N,_;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(_=(N=h.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var B,D,R;S.parameters={...S.parameters,docs:{...(B=S.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(R=(D=S.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const X=["Default","NoRightSlot","ManyItemsOverflow","NarrowContainer","NoFeatureTitle","WithDisabled","AllStatuses","MixedLineAndMachine"];export{h as AllStatuses,l as Default,m as ManyItemsOverflow,S as MixedLineAndMachine,u as NarrowContainer,p as NoFeatureTitle,c as NoRightSlot,d as WithDisabled,X as __namedExportsOrder,V as default};
