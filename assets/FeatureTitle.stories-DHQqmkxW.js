import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as b}from"./index-BioFo8Zg.js";import{B as p}from"./Button-iDd4ESB6.js";import"./index-yBjzXJbu.js";const n={secondary:"var(--secondary)",bgSurface:"var(--bg-surface)",textHigh:"var(--text-high)",divider:"var(--divider)"},r={2:"8px",4:"16px",6:"24px"},H={sticky:10},t=b.forwardRef(({items:O,actions:u,className:z,topOffset:I=56},w)=>{const m=O.slice(0,5);return e.jsxs("div",{ref:w,className:["fas-feature-title",z].filter(Boolean).join(" "),style:{position:"sticky",top:I,zIndex:H.sticky,display:"flex",alignItems:"center",gap:r[4],minHeight:"56px",padding:`${r[2]} ${r[6]}`,backgroundColor:n.bgSurface,borderBottom:`1px solid ${n.divider}`,boxSizing:"border-box"},children:[e.jsx("nav",{"aria-label":"Page breadcrumb",className:"fas-feature-title__nav",style:{display:"flex",alignItems:"center",gap:r[2],flex:1,minWidth:0},children:m.map((s,f)=>{const a=f===m.length-1,R=!a&&!!s.onClick;return e.jsxs(b.Fragment,{children:[R?e.jsx("button",{type:"button",onClick:s.onClick,className:"fas-feature-title__crumb fas-feature-title__crumb--link",style:{font:"inherit",fontSize:"20px",lineHeight:"24px",fontWeight:500,fontFamily:'"Noto Sans TC", sans-serif',color:n.secondary,background:"none",border:"none",padding:0,cursor:"pointer",whiteSpace:"nowrap",textDecoration:"none"},children:s.label}):e.jsx("span",{className:`fas-feature-title__crumb${a?" fas-feature-title__crumb--current":""}`,"aria-current":a?"page":void 0,style:{fontSize:"20px",lineHeight:"24px",fontWeight:500,fontFamily:'"Noto Sans TC", sans-serif',color:a?n.textHigh:n.secondary,whiteSpace:"nowrap",overflow:a?"hidden":void 0,textOverflow:a?"ellipsis":void 0},children:s.label}),!a&&e.jsx("span",{className:"fas-feature-title__sep","aria-hidden":"true",style:{fontFamily:'"Material Icons"',fontSize:"24px",lineHeight:"24px",color:n.secondary,userSelect:"none",flexShrink:0},children:"navigate_next"})]},f)})}),u&&e.jsx("div",{className:"fas-feature-title__actions",style:{display:"flex",alignItems:"center",gap:r[4],flexShrink:0},children:u})]})});t.displayName="FeatureTitle";t.__docgenInfo={description:"",methods:[],displayName:"FeatureTitle",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"FeatureTitleItem"}],raw:"FeatureTitleItem[]"},description:`麵包屑導航層級，最多 5 層。
最後一項為當前頁面（不可點擊），其餘項目需提供 onClick。`},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`右側操作按鈕區，傳入 <Button> 元件即可。
建議最多放 2 個按鈕。`},className:{required:!1,tsType:{name:"string"},description:"自訂 className"},topOffset:{required:!1,tsType:{name:"number"},description:`距離頂部的偏移量（px），預設 56（NavBar 高度）。
若 NavBar 高度不同，請依實際值調整。`,defaultValue:{value:"56",computed:!1}}}};const $={title:"Data Display/FeatureTitle",component:t,tags:["autodocs"],parameters:{layout:"fullscreen"}},i={render:()=>e.jsx(t,{topOffset:0,items:[{label:"節點管理",onClick:()=>{}},{label:"新增節點"}],actions:e.jsxs(e.Fragment,{children:[e.jsx(p,{variant:"outlined",color:"secondary",size:"s",children:"取消"}),e.jsx(p,{variant:"contained",size:"s",children:"建立"})]})})},l={render:()=>e.jsx(t,{topOffset:0,items:[{label:"節點管理"}],actions:e.jsx(p,{variant:"contained",size:"s",children:"新增節點"})})},o={render:()=>e.jsx(t,{topOffset:0,items:[{label:"首頁",onClick:()=>{}},{label:"系統設定",onClick:()=>{}},{label:"使用者管理",onClick:()=>{}},{label:"編輯使用者"}]})},c={render:()=>e.jsx(t,{topOffset:0,items:[{label:"報表",onClick:()=>{}},{label:"月報"}]})},d={render:()=>e.jsx(t,{topOffset:0,items:[{label:"L1",onClick:()=>{}},{label:"L2",onClick:()=>{}},{label:"L3",onClick:()=>{}},{label:"L4",onClick:()=>{}},{label:"L5 (當前頁面)"}]})};var x,g,v;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <FeatureTitle topOffset={0} items={[{
    label: '節點管理',
    onClick: () => {}
  }, {
    label: '新增節點'
  }]} actions={<>
          <Button variant="outlined" color="secondary" size="s">取消</Button>
          <Button variant="contained" size="s">建立</Button>
        </>} />
}`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var h,y,k;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <FeatureTitle topOffset={0} items={[{
    label: '節點管理'
  }]} actions={<Button variant="contained" size="s">新增節點</Button>} />
}`,...(k=(y=l.parameters)==null?void 0:y.docs)==null?void 0:k.source}}};var C,S,j;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <FeatureTitle topOffset={0} items={[{
    label: '首頁',
    onClick: () => {}
  }, {
    label: '系統設定',
    onClick: () => {}
  }, {
    label: '使用者管理',
    onClick: () => {}
  }, {
    label: '編輯使用者'
  }]} />
}`,...(j=(S=o.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var _,F,L;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <FeatureTitle topOffset={0} items={[{
    label: '報表',
    onClick: () => {}
  }, {
    label: '月報'
  }]} />
}`,...(L=(F=c.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var T,N,B;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <FeatureTitle topOffset={0} items={[{
    label: 'L1',
    onClick: () => {}
  }, {
    label: 'L2',
    onClick: () => {}
  }, {
    label: 'L3',
    onClick: () => {}
  }, {
    label: 'L4',
    onClick: () => {}
  }, {
    label: 'L5 (當前頁面)'
  }]} />
}`,...(B=(N=d.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};const A=["Default","SingleLevel","MultipleLevel","WithoutActions","MaxFiveLevels"];export{i as Default,d as MaxFiveLevels,o as MultipleLevel,l as SingleLevel,c as WithoutActions,A as __namedExportsOrder,$ as default};
