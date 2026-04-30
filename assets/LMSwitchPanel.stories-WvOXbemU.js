import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r}from"./index-BioFo8Zg.js";import{L as s}from"./LMSwitchPanel-ADny5OVX.js";import"./index-yBjzXJbu.js";import"./Card-D85ioM2d.js";import"./Divider-PGiQvWAm.js";import"./Menu-gZp1tj2o.js";import"./LMScopeTile-BWCmcWwE.js";import"./Tooltip-DHUvMufU.js";import"./tokens-DAmOzuQn.js";const K={title:"LM/Components/LMSwitchPanel",component:s,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`LMSwitchPanel — 內容區塊頂部的 scope 切換列。

- 由左至右排列 \`LMScopeTile\`（128 × 128 方形），點選切換 scope
- 每顆 tile：三色三形狀燈號 + 產線/機台 icon + 名稱
- 同時只有一顆被選取`}}}},i=[{key:"line-a",label:"產線 A",type:"line",status:"normal"},{key:"aoi-001",label:"AOI檢測機 001",type:"machine",status:"warning"},{key:"laser-002",label:"LASER雷雕機 002",type:"machine",status:"down"},{key:"smt-003",label:"SMT貼片機 003",type:"machine",status:"normal"}],o=({children:t})=>e.jsxs("div",{style:{padding:32,background:"var(--bg-surface-dim)",minHeight:"100vh"},children:[t,e.jsx("div",{style:{marginTop:24,color:"var(--text-medium)"},children:"（示意：下方為主內容；切換上方 tile 會帶動主內容載入對應 scope 的資料）"})]}),l={render:()=>{const[t,a]=r.useState("line-a");return e.jsx(o,{children:e.jsx(s,{items:i,value:t,onChange:a,featureTitle:"即時數據"})})}},c={name:"Many items — More button overflow",render:()=>{const t=[...i,{key:"aoi-002",label:"AOI檢測機 002",type:"machine",status:"normal"},{key:"aoi-003",label:"AOI檢測機 003",type:"machine",status:"warning"},{key:"oven-001",label:"回焊爐 001",type:"machine",status:"normal"},{key:"pcb-tester",label:"PCB 測試機",type:"machine",status:"down"},{key:"smt-005",label:"SMT貼片機 005",type:"machine",status:"normal"},{key:"oven-002",label:"回焊爐 002",type:"machine",status:"down"}],[a,n]=r.useState("line-a");return e.jsx(o,{children:e.jsx(s,{items:t,value:a,onChange:n,featureTitle:"即時數據"})})}},m={name:"Narrow container — overflow into More menu",render:()=>{const t=[...i,{key:"aoi-002",label:"AOI檢測機 002",type:"machine",status:"normal"},{key:"aoi-003",label:"AOI檢測機 003",type:"machine",status:"warning"},{key:"oven-001",label:"回焊爐 001",type:"machine",status:"normal"},{key:"pcb-tester",label:"PCB 測試機",type:"machine",status:"down"}],[a,n]=r.useState("line-a");return e.jsxs("div",{style:{padding:32,background:"var(--bg-surface-dim)",minHeight:"100vh"},children:[e.jsx("div",{style:{width:720,maxWidth:"100%"},children:e.jsx(s,{items:t,value:a,onChange:n,featureTitle:"即時數據"})}),e.jsx("div",{style:{marginTop:24,color:"var(--text-medium)"},children:"（容器寬 720px，無法放下所有 8 顆 tile → tail-end 自動收進 More 按鈕）"})]})}},p={name:"No featureTitle — title section omitted",render:()=>{const[t,a]=r.useState("line-a");return e.jsx(o,{children:e.jsx(s,{items:i,value:t,onChange:a})})}},u={render:()=>{const t=[...i,{key:"old-mes",label:"Legacy MES",type:"machine",status:"down",disabled:!0}],[a,n]=r.useState("line-a");return e.jsx(o,{children:e.jsx(s,{items:t,value:a,onChange:n})})}},d={name:"Status legend",render:()=>{const t=[{key:"a",label:"正常運行中",type:"machine",status:"normal"},{key:"b",label:"警告",type:"machine",status:"warning"},{key:"c",label:"停機",type:"machine",status:"down"}],[a,n]=r.useState("a");return e.jsx(o,{children:e.jsx(s,{items:t,value:a,onChange:n})})}},y={name:"Mixed — line + machine",render:()=>{const t=[{key:"line-a",label:"產線 A",type:"line",status:"normal"},{key:"line-b",label:"產線 B",type:"line",status:"warning"},{key:"aoi-001",label:"AOI檢測機 001",type:"machine",status:"normal"},{key:"laser-002",label:"LASER雷雕機 002",type:"machine",status:"down"}],[a,n]=r.useState("line-a");return e.jsx(o,{children:e.jsx(s,{items:t,value:a,onChange:n})})}};var h,S,b;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [scope, setScope] = useState('line-a');
    return <Frame>
        <LMSwitchPanel items={SAMPLE_ITEMS} value={scope} onChange={setScope} featureTitle="即時數據" />
      </Frame>;
  }
}`,...(b=(S=l.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var g,M,w;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(w=(M=c.parameters)==null?void 0:M.docs)==null?void 0:w.source}}};var v,k,x;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(k=m.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var L,A,P;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'No featureTitle — title section omitted',
  render: () => {
    const [scope, setScope] = useState('line-a');
    return <Frame>
        <LMSwitchPanel items={SAMPLE_ITEMS} value={scope} onChange={setScope} />
      </Frame>;
  }
}`,...(P=(A=p.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var f,I,T;u.parameters={...u.parameters,docs:{...(f=u.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(T=(I=u.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var C,j,E;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(E=(j=d.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var F,O,N;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(N=(O=y.parameters)==null?void 0:O.docs)==null?void 0:N.source}}};const Q=["Default","ManyItemsOverflow","NarrowContainer","NoFeatureTitle","WithDisabled","AllStatuses","MixedLineAndMachine"];export{d as AllStatuses,l as Default,c as ManyItemsOverflow,y as MixedLineAndMachine,m as NarrowContainer,p as NoFeatureTitle,u as WithDisabled,Q as __namedExportsOrder,K as default};
