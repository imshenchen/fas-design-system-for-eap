import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as E}from"./index-BioFo8Zg.js";import{L as a}from"./LMScopeTile-BWCmcWwE.js";import"./index-yBjzXJbu.js";import"./Tooltip-DHUvMufU.js";import"./tokens-DAmOzuQn.js";const H={title:"LM/Components/LMScopeTile",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`LMScopeTile — 方形 tile 按鈕，用於選擇整條產線或特定機台。

燈號規則（顏色 + 形狀皆帶語意，符合色盲可讀性）：
  - 綠色圓形 ●  正常運行中
  - 黃色三角 ▲  警告
  - 紅色方形 ■  停機`}}}},n=({children:t})=>e.jsx("div",{style:{display:"flex",gap:16,padding:24,background:"var(--bg-surface-dim)"},children:t}),r={render:()=>{const[t,l]=E.useState("aoi-001");return e.jsxs(n,{children:[e.jsx(a,{type:"machine",label:"AOI檢測機 001",status:"normal",selected:t==="aoi-001",onClick:()=>l("aoi-001")}),e.jsx(a,{type:"machine",label:"LASER雷雕機 002",status:"warning",selected:t==="laser-002",onClick:()=>l("laser-002")}),e.jsx(a,{type:"machine",label:"SMT貼片機 003",status:"down",selected:t==="smt-003",onClick:()=>l("smt-003")})]})}},i={name:"Type — line",render:()=>e.jsxs(n,{children:[e.jsx(a,{type:"line",label:"產線 A",status:"normal"}),e.jsx(a,{type:"line",label:"產線 B",status:"warning",selected:!0}),e.jsx(a,{type:"line",label:"產線 C（測試）",status:"down"})]})},o={name:"Status — 三色三形狀",render:()=>e.jsxs(n,{children:[e.jsx(a,{type:"machine",label:"正常運行中",status:"normal"}),e.jsx(a,{type:"machine",label:"警告",status:"warning"}),e.jsx(a,{type:"machine",label:"停機",status:"down"})]})},c={name:"Selected vs unselected",render:()=>e.jsxs(n,{children:[e.jsx(a,{type:"machine",label:"未選取",status:"normal"}),e.jsx(a,{type:"machine",label:"選取中",status:"normal",selected:!0})]})},d={render:()=>e.jsxs(n,{children:[e.jsx(a,{type:"machine",label:"Disabled normal",status:"normal",disabled:!0}),e.jsx(a,{type:"machine",label:"Disabled warning",status:"warning",disabled:!0}),e.jsx(a,{type:"machine",label:"Disabled down",status:"down",disabled:!0})]})},m={name:"Long label — ellipsis",render:()=>e.jsxs(n,{children:[e.jsx(a,{type:"machine",label:"AOI高解析度檢測機 #001-Production",status:"normal"}),e.jsx(a,{type:"line",label:"第一電子三廠SMT產線 A-12",status:"warning",selected:!0})]})},p={name:"Grid layout — 多 tile 並排",render:()=>{const t=[{key:"line-a",type:"line",label:"產線 A",status:"normal"},{key:"line-b",type:"line",label:"產線 B",status:"warning"},{key:"aoi-001",type:"machine",label:"AOI檢測機 001",status:"normal"},{key:"aoi-002",type:"machine",label:"AOI檢測機 002",status:"warning"},{key:"laser-002",type:"machine",label:"LASER雷雕機 002",status:"down"},{key:"smt-003",type:"machine",label:"SMT貼片機 003",status:"normal"},{key:"oven-001",type:"machine",label:"回焊爐 001",status:"normal"},{key:"pcb-test",type:"machine",label:"PCB 測試機",status:"down"}],[l,B]=E.useState("line-a");return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 128px)",gap:16,padding:24,background:"var(--bg-surface-dim)"},children:t.map(s=>e.jsx(a,{type:s.type,label:s.label,status:s.status,selected:l===s.key,onClick:()=>B(s.key)},s.key))})}};var u,y,b;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = useState('aoi-001');
    return <Frame>
        <LMScopeTile type="machine" label="AOI檢測機 001" status="normal" selected={selected === 'aoi-001'} onClick={() => setSelected('aoi-001')} />
        <LMScopeTile type="machine" label="LASER雷雕機 002" status="warning" selected={selected === 'laser-002'} onClick={() => setSelected('laser-002')} />
        <LMScopeTile type="machine" label="SMT貼片機 003" status="down" selected={selected === 'smt-003'} onClick={() => setSelected('smt-003')} />
      </Frame>;
  }
}`,...(b=(y=r.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var S,g,h;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Type — line',
  render: () => <Frame>
      <LMScopeTile type="line" label="產線 A" status="normal" />
      <LMScopeTile type="line" label="產線 B" status="warning" selected />
      <LMScopeTile type="line" label="產線 C（測試）" status="down" />
    </Frame>
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var L,T,k;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Status — 三色三形狀',
  render: () => <Frame>
      <LMScopeTile type="machine" label="正常運行中" status="normal" />
      <LMScopeTile type="machine" label="警告" status="warning" />
      <LMScopeTile type="machine" label="停機" status="down" />
    </Frame>
}`,...(k=(T=o.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};var x,w,M;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Selected vs unselected',
  render: () => <Frame>
      <LMScopeTile type="machine" label="未選取" status="normal" />
      <LMScopeTile type="machine" label="選取中" status="normal" selected />
    </Frame>
}`,...(M=(w=c.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var j,A,C;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Frame>
      <LMScopeTile type="machine" label="Disabled normal" status="normal" disabled />
      <LMScopeTile type="machine" label="Disabled warning" status="warning" disabled />
      <LMScopeTile type="machine" label="Disabled down" status="down" disabled />
    </Frame>
}`,...(C=(A=d.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var F,v,f;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Long label — ellipsis',
  render: () => <Frame>
      <LMScopeTile type="machine" label="AOI高解析度檢測機 #001-Production" status="normal" />
      <LMScopeTile type="line" label="第一電子三廠SMT產線 A-12" status="warning" selected />
    </Frame>
}`,...(f=(v=m.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var D,O,I;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
      key: 'aoi-001',
      type: 'machine',
      label: 'AOI檢測機 001',
      status: 'normal'
    }, {
      key: 'aoi-002',
      type: 'machine',
      label: 'AOI檢測機 002',
      status: 'warning'
    }, {
      key: 'laser-002',
      type: 'machine',
      label: 'LASER雷雕機 002',
      status: 'down'
    }, {
      key: 'smt-003',
      type: 'machine',
      label: 'SMT貼片機 003',
      status: 'normal'
    }, {
      key: 'oven-001',
      type: 'machine',
      label: '回焊爐 001',
      status: 'normal'
    }, {
      key: 'pcb-test',
      type: 'machine',
      label: 'PCB 測試機',
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
}`,...(I=(O=p.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};const J=["Default","TypeLine","StatusLegend","SelectedComparison","DisabledStates","LongLabelTruncation","Grid"];export{r as Default,d as DisabledStates,p as Grid,m as LongLabelTruncation,c as SelectedComparison,o as StatusLegend,i as TypeLine,J as __namedExportsOrder,H as default};
