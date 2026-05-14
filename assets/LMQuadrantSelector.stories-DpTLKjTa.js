import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as n}from"./index-BioFo8Zg.js";import{L as r}from"./LMQuadrantSelector-DgenfdiQ.js";import"./index-yBjzXJbu.js";import"./tokens-BoTh6Ygv.js";const X={title:"LM/Components/LMQuadrantSelector",component:r,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`LMQuadrantSelector — 田字四象限多選按鈕。

- 4 個象限可獨立切換選取狀態（多選）
- 中央圓形按鈕：點擊一鍵全選 / 全不選
- 適用情境：選擇設備上 4 區塊的上料資料、感測點、拼板等`}}}},s=({children:e,status:a})=>t.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:16,padding:24,background:"var(--bg-surface-dim)"},children:[e,a&&t.jsx("div",{style:{color:"var(--text-medium)",fontSize:13},children:a})]}),o={render:()=>{const[e,a]=n.useState(["topLeft"]);return t.jsx(s,{status:`已選：${e.length===0?"無":e.join(", ")}`,children:t.jsx(r,{value:e,onChange:a})})}},l={name:"All selected — center button highlighted",render:()=>{const[e,a]=n.useState(["topLeft","topRight","bottomLeft","bottomRight"]);return t.jsx(s,{status:"全部選取 → 中央按鈕變 primary，icon 變 select_all",children:t.jsx(r,{value:e,onChange:a})})}},c={render:()=>{const[e,a]=n.useState([]);return t.jsx(s,{status:"未選取任何象限",children:t.jsx(r,{value:e,onChange:a})})}},d={name:"Custom labels — 區1/區2/區3/區4",render:()=>{const[e,a]=n.useState(["topLeft","bottomRight"]);return t.jsx(s,{status:`已選區塊：${e.length}/4`,children:t.jsx(r,{value:e,onChange:a,labels:{topLeft:"區 1",topRight:"區 2",bottomLeft:"區 3",bottomRight:"區 4"}})})}},i={name:"Disabled — 右下無法操作",render:()=>{const[e,a]=n.useState(["topLeft"]);return t.jsx(s,{status:"右下象限禁用，全選按鈕只會切換可用象限",children:t.jsx(r,{value:e,onChange:a,disabled:{bottomRight:!0}})})}},u={name:"Size 160",render:()=>{const[e,a]=n.useState(["topRight","bottomLeft"]);return t.jsx(s,{children:t.jsx(r,{value:e,onChange:a,size:160})})}},m={name:"Size 96",render:()=>{const[e,a]=n.useState([]);return t.jsx(s,{children:t.jsx(r,{value:e,onChange:a,size:96})})}},p={name:"Row selectors — 全選上排 / 全選下排",render:()=>{const[e,a]=n.useState(["topLeft"]);return t.jsx(s,{status:`已選：${e.length===0?"無":e.join(", ")}`,children:t.jsx(r,{value:e,onChange:a,showRowSelectors:!0})})}},g={name:"Row selectors + disabled — 下排部分禁用",render:()=>{const[e,a]=n.useState([]);return t.jsx(s,{status:"右下象限禁用 → 全選下排按鈕仍會選起 BL，但不會動到 BR",children:t.jsx(r,{value:e,onChange:a,showRowSelectors:!0,disabled:{bottomRight:!0}})})}},v={name:"In context — 上料資料 picker",render:()=>{const[e,a]=n.useState(["topLeft","topRight"]);return t.jsx("div",{style:{padding:24,background:"var(--bg-surface-dim)"},children:t.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center",padding:16,background:"var(--bg-surface)",border:"1px solid var(--card-outlined)",borderRadius:8},children:[t.jsx(r,{value:e,onChange:a,size:120}),t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:4},children:[t.jsx("div",{style:{fontSize:14,fontWeight:600,color:"var(--text-high)"},children:"選擇要查看上料資料的區塊"}),t.jsxs("div",{style:{fontSize:13,color:"var(--text-medium)"},children:["已選：",e.length===0?"尚未選擇任何區塊":e.length===4?"全部 4 區":e.join(" / ")]}),t.jsx("div",{style:{fontSize:12,color:"var(--text-medium)",marginTop:4},children:"點擊正中央可一鍵全選 / 全不選"})]})]})})}};var h,S,x;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState<LMQuadrantKey[]>(['topLeft']);
    return <Frame status={\`已選：\${val.length === 0 ? '無' : val.join(', ')}\`}>
        <LMQuadrantSelector value={val} onChange={setVal} />
      </Frame>;
  }
}`,...(x=(S=o.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var L,b,f;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'All selected — center button highlighted',
  render: () => {
    const [val, setVal] = useState<LMQuadrantKey[]>(['topLeft', 'topRight', 'bottomLeft', 'bottomRight']);
    return <Frame status="全部選取 → 中央按鈕變 primary，icon 變 select_all">
        <LMQuadrantSelector value={val} onChange={setVal} />
      </Frame>;
  }
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var j,R,y;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState<LMQuadrantKey[]>([]);
    return <Frame status="未選取任何象限">
        <LMQuadrantSelector value={val} onChange={setVal} />
      </Frame>;
  }
}`,...(y=(R=c.parameters)==null?void 0:R.docs)==null?void 0:y.source}}};var V,C,M;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(M=(C=d.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var Q,z,F;i.parameters={...i.parameters,docs:{...(Q=i.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Disabled — 右下無法操作',
  render: () => {
    const [val, setVal] = useState<LMQuadrantKey[]>(['topLeft']);
    return <Frame status="右下象限禁用，全選按鈕只會切換可用象限">
        <LMQuadrantSelector value={val} onChange={setVal} disabled={{
        bottomRight: true
      }} />
      </Frame>;
  }
}`,...(F=(z=i.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var w,D,K;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Size 160',
  render: () => {
    const [val, setVal] = useState<LMQuadrantKey[]>(['topRight', 'bottomLeft']);
    return <Frame>
        <LMQuadrantSelector value={val} onChange={setVal} size={160} />
      </Frame>;
  }
}`,...(K=(D=u.parameters)==null?void 0:D.docs)==null?void 0:K.source}}};var W,k,I;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  name: 'Size 96',
  render: () => {
    const [val, setVal] = useState<LMQuadrantKey[]>([]);
    return <Frame>
        <LMQuadrantSelector value={val} onChange={setVal} size={96} />
      </Frame>;
  }
}`,...(I=(k=m.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var $,E,A;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Row selectors — 全選上排 / 全選下排',
  render: () => {
    const [val, setVal] = useState<LMQuadrantKey[]>(['topLeft']);
    return <Frame status={\`已選：\${val.length === 0 ? '無' : val.join(', ')}\`}>
        <LMQuadrantSelector value={val} onChange={setVal} showRowSelectors />
      </Frame>;
  }
}`,...(A=(E=p.parameters)==null?void 0:E.docs)==null?void 0:A.source}}};var B,_,T;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: 'Row selectors + disabled — 下排部分禁用',
  render: () => {
    const [val, setVal] = useState<LMQuadrantKey[]>([]);
    return <Frame status="右下象限禁用 → 全選下排按鈕仍會選起 BL，但不會動到 BR">
        <LMQuadrantSelector value={val} onChange={setVal} showRowSelectors disabled={{
        bottomRight: true
      }} />
      </Frame>;
  }
}`,...(T=(_=g.parameters)==null?void 0:_.docs)==null?void 0:T.source}}};var O,q,G;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(G=(q=v.parameters)==null?void 0:q.docs)==null?void 0:G.source}}};const Y=["Default","AllSelected","Empty","CustomLabels","WithDisabled","SizeLarge","SizeSmall","WithRowSelectors","RowSelectorsWithDisabled","InContext"];export{l as AllSelected,d as CustomLabels,o as Default,c as Empty,v as InContext,g as RowSelectorsWithDisabled,u as SizeLarge,m as SizeSmall,i as WithDisabled,p as WithRowSelectors,Y as __namedExportsOrder,X as default};
