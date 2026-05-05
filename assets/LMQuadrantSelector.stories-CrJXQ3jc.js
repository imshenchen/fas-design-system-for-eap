import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r}from"./index-BioFo8Zg.js";import{L as n}from"./LMQuadrantSelector-CtpCiFzl.js";import"./index-yBjzXJbu.js";import"./tokens-BoTh6Ygv.js";const w={title:"LM/Components/LMQuadrantSelector",component:n,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`LMQuadrantSelector — 田字四象限多選按鈕。

- 4 個象限可獨立切換選取狀態（多選）
- 中央圓形按鈕：點擊一鍵全選 / 全不選
- 適用情境：選擇設備上 4 區塊的上料資料、感測點、拼板等`}}}},s=({children:e,status:a})=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16,padding:24,background:"var(--bg-surface-dim)"},children:[e,a&&t.jsx("div",{style:{color:"var(--text-medium)",fontSize:13},children:a})]}),o={render:()=>{const[e,a]=r.useState(["topLeft"]);return t.jsx(s,{status:`已選：${e.length===0?"無":e.join(", ")}`,children:t.jsx(n,{value:e,onChange:a})})}},l={name:"All selected — center button highlighted",render:()=>{const[e,a]=r.useState(["topLeft","topRight","bottomLeft","bottomRight"]);return t.jsx(s,{status:"全部選取 → 中央按鈕變 primary，icon 變 select_all",children:t.jsx(n,{value:e,onChange:a})})}},i={render:()=>{const[e,a]=r.useState([]);return t.jsx(s,{status:"未選取任何象限",children:t.jsx(n,{value:e,onChange:a})})}},d={name:"Custom labels — 區1/區2/區3/區4",render:()=>{const[e,a]=r.useState(["topLeft","bottomRight"]);return t.jsx(s,{status:`已選區塊：${e.length}/4`,children:t.jsx(n,{value:e,onChange:a,labels:{topLeft:"區 1",topRight:"區 2",bottomLeft:"區 3",bottomRight:"區 4"}})})}},c={name:"Disabled — 右下無法操作",render:()=>{const[e,a]=r.useState(["topLeft"]);return t.jsx(s,{status:"右下象限禁用，全選按鈕只會切換可用象限",children:t.jsx(n,{value:e,onChange:a,disabled:{bottomRight:!0}})})}},u={name:"Size 160",render:()=>{const[e,a]=r.useState(["topRight","bottomLeft"]);return t.jsx(s,{children:t.jsx(n,{value:e,onChange:a,size:160})})}},m={name:"Size 96",render:()=>{const[e,a]=r.useState([]);return t.jsx(s,{children:t.jsx(n,{value:e,onChange:a,size:96})})}},p={name:"In context — 上料資料 picker",render:()=>{const[e,a]=r.useState(["topLeft","topRight"]);return t.jsx("div",{style:{padding:24,background:"var(--bg-surface-dim)"},children:t.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center",padding:16,background:"var(--bg-surface)",border:"1px solid var(--card-outlined)",borderRadius:8},children:[t.jsx(n,{value:e,onChange:a,size:120}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[t.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--text-high)"},children:"選擇要查看上料資料的區塊"}),t.jsxs("div",{style:{fontSize:13,color:"var(--text-medium)"},children:["已選：",e.length===0?"尚未選擇任何區塊":e.length===4?"全部 4 區":e.join(" / ")]}),t.jsx("div",{style:{fontSize:12,color:"var(--text-medium)",marginTop:4},children:"點擊正中央可一鍵全選 / 全不選"})]})]})})}};var g,v,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState<LMQuadrantKey[]>(['topLeft']);
    return <Frame status={\`已選：\${val.length === 0 ? '無' : val.join(', ')}\`}>
        <LMQuadrantSelector value={val} onChange={setVal} />
      </Frame>;
  }
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var S,x,f;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'All selected — center button highlighted',
  render: () => {
    const [val, setVal] = useState<LMQuadrantKey[]>(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
    return <Frame status="全部選取 → 中央按鈕變 primary，icon 變 select_all">
        <LMQuadrantSelector value={val} onChange={setVal} />
      </Frame>;
  }
}`,...(f=(x=l.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var L,b,y;i.parameters={...i.parameters,docs:{...(L=i.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState<LMQuadrantKey[]>([]);
    return <Frame status="未選取任何象限">
        <LMQuadrantSelector value={val} onChange={setVal} />
      </Frame>;
  }
}`,...(y=(b=i.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var j,V,C;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Custom labels — 區1/區2/區3/區4',
  render: () => {
    const [val, setVal] = useState<LMQuadrantKey[]>(['topLeft', 'bottomRight']);
    return <Frame status={\`已選區塊：\${val.length}/4\`}>
        <LMQuadrantSelector value={val} onChange={setVal} labels={{
        topLeft: '區 1',
        topRight: '區 2',
        bottomLeft: '區 3',
        bottomRight: '區 4'
      }} />
      </Frame>;
  }
}`,...(C=(V=d.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var z,M,Q;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  name: 'Disabled — 右下無法操作',
  render: () => {
    const [val, setVal] = useState<LMQuadrantKey[]>(['topLeft']);
    return <Frame status="右下象限禁用，全選按鈕只會切換可用象限">
        <LMQuadrantSelector value={val} onChange={setVal} disabled={{
        bottomRight: true
      }} />
      </Frame>;
  }
}`,...(Q=(M=c.parameters)==null?void 0:M.docs)==null?void 0:Q.source}}};var R,F,D;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Size 160',
  render: () => {
    const [val, setVal] = useState<LMQuadrantKey[]>(['topRight', 'bottomLeft']);
    return <Frame>
        <LMQuadrantSelector value={val} onChange={setVal} size={160} />
      </Frame>;
  }
}`,...(D=(F=u.parameters)==null?void 0:F.docs)==null?void 0:D.source}}};var K,k,I;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: 'Size 96',
  render: () => {
    const [val, setVal] = useState<LMQuadrantKey[]>([]);
    return <Frame>
        <LMQuadrantSelector value={val} onChange={setVal} size={96} />
      </Frame>;
  }
}`,...(I=(k=m.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var E,A,W;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'In context — 上料資料 picker',
  render: () => {
    const [val, setVal] = useState<LMQuadrantKey[]>(['topLeft', 'topRight']);
    return <div style={{
      padding: 24,
      background: 'var(--bg-surface-dim)'
    }}>
        <div style={{
        display: 'flex',
        gap: 24,
        alignItems: 'center',
        padding: 16,
        background: 'var(--bg-surface)',
        border: '1px solid var(--card-outlined)',
        borderRadius: 8
      }}>
          <LMQuadrantSelector value={val} onChange={setVal} size={120} />
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4
        }}>
            <div style={{
            fontSize: 14,
            fontWeight: 600,
            color: 'var(--text-high)'
          }}>
              選擇要查看上料資料的區塊
            </div>
            <div style={{
            fontSize: 13,
            color: 'var(--text-medium)'
          }}>
              已選：{val.length === 0 ? '尚未選擇任何區塊' : val.length === 4 ? '全部 4 區' : val.join(' / ')}
            </div>
            <div style={{
            fontSize: 12,
            color: 'var(--text-medium)',
            marginTop: 4
          }}>
              點擊正中央可一鍵全選 / 全不選
            </div>
          </div>
        </div>
      </div>;
  }
}`,...(W=(A=p.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};const B=["Default","AllSelected","Empty","CustomLabels","WithDisabled","SizeLarge","SizeSmall","InContext"];export{l as AllSelected,d as CustomLabels,o as Default,i as Empty,p as InContext,u as SizeLarge,m as SizeSmall,c as WithDisabled,B as __namedExportsOrder,w as default};
