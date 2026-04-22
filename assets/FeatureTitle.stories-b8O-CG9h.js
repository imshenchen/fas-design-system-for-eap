import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as g}from"./index-BioFo8Zg.js";import{B as u}from"./Button-iDd4ESB6.js";import"./index-yBjzXJbu.js";const i={secondary:"var(--secondary)",bgSurface:"var(--bg-surface)",textHigh:"var(--text-high)",divider:"var(--divider)"},r={2:"8px",4:"16px",6:"24px"},G={sticky:10},t=g.forwardRef(({items:q,actions:p,className:E,topOffset:$=56},V)=>{const m=q.slice(0,5);return e.jsxs("div",{ref:V,className:["fas-feature-title",E].filter(Boolean).join(" "),style:{position:"sticky",top:$,zIndex:G.sticky,display:"flex",alignItems:"center",gap:r[4],minHeight:"56px",padding:`${r[2]} ${r[6]}`,backgroundColor:i.bgSurface,borderBottom:`1px solid ${i.divider}`,boxSizing:"border-box"},children:[e.jsx("nav",{"aria-label":"Page breadcrumb",className:"fas-feature-title__nav",style:{display:"flex",alignItems:"center",gap:r[2],flex:1,minWidth:0},children:m.map((d,f)=>{const a=f===m.length-1,P=!a&&!!d.onClick;return e.jsxs(g.Fragment,{children:[P?e.jsx("button",{type:"button",onClick:d.onClick,className:"fas-feature-title__crumb fas-feature-title__crumb--link",style:{font:"inherit",fontSize:"20px",lineHeight:"24px",fontWeight:500,fontFamily:'"Noto Sans TC", sans-serif',color:i.secondary,background:"none",border:"none",padding:0,cursor:"pointer",whiteSpace:"nowrap",textDecoration:"none"},children:d.label}):e.jsx("span",{className:`fas-feature-title__crumb${a?" fas-feature-title__crumb--current":""}`,"aria-current":a?"page":void 0,style:{fontSize:"20px",lineHeight:"24px",fontWeight:500,fontFamily:'"Noto Sans TC", sans-serif',color:a?i.textHigh:i.secondary,whiteSpace:"nowrap",overflow:a?"hidden":void 0,textOverflow:a?"ellipsis":void 0},children:d.label}),!a&&e.jsx("span",{className:"material-symbols-outlined fas-feature-title__sep","aria-hidden":"true",style:{fontSize:"24px",lineHeight:"24px",color:i.secondary,userSelect:"none",flexShrink:0},children:"navigate_next"})]},f)})}),p&&e.jsx("div",{className:"fas-feature-title__actions",style:{display:"flex",alignItems:"center",gap:r[4],flexShrink:0},children:p})]})});t.displayName="FeatureTitle";t.__docgenInfo={description:"",methods:[],displayName:"FeatureTitle",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"FeatureTitleItem"}],raw:"FeatureTitleItem[]"},description:`麵包屑導航層級，最多 5 層。
最後一項為當前頁面（不可點擊），其餘項目需提供 onClick。`},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`右側操作按鈕區，傳入 <Button> 元件即可。
建議最多放 2 個按鈕。`},className:{required:!1,tsType:{name:"string"},description:"自訂 className"},topOffset:{required:!1,tsType:{name:"number"},description:`距離頂部的偏移量（px），預設 56（NavBar 高度）。
若 NavBar 高度不同，請依實際值調整。`,defaultValue:{value:"56",computed:!1}}}};const X={title:"Data Display/FeatureTitle",component:t,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`FeatureTitle — sticky page-title bar beneath the NavigationBar.

Breadcrumb rule:
  The FIRST level must always be the currently selected item in the SideMenu
  (the active leaf node). Never skip it or replace it with a parent section label.

  ✅  Rule Settings > Create Rule          (SideMenu active: "Rule Settings")
  ❌  Alert Mgmt > Rule Settings > Create  (parent section — not the selected item)`}}}},n={render:()=>e.jsx(t,{topOffset:0,items:[{label:"Rule Settings",onClick:()=>{}},{label:"Create Rule"}],actions:e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"text",color:"secondary",size:"s",children:"Cancel"}),e.jsx(u,{variant:"contained",size:"s",children:"Create"})]})})},s={render:()=>e.jsx(t,{topOffset:0,items:[{label:"Node Management"}]})},l={render:()=>e.jsx(t,{topOffset:0,items:[{label:"Rule Settings",onClick:()=>{}},{label:"Rule Detail",onClick:()=>{}},{label:"Edit"}],actions:e.jsxs(e.Fragment,{children:[e.jsx(u,{variant:"text",color:"secondary",size:"s",children:"Cancel"}),e.jsx(u,{variant:"contained",size:"s",children:"Save"})]})})},o={render:()=>e.jsx(t,{topOffset:0,items:[{label:"Alert List",onClick:()=>{}},{label:"Alert Detail"}]})},c={render:()=>e.jsx(t,{topOffset:0,items:[{label:"Storage",onClick:()=>{}},{label:"Bucket List",onClick:()=>{}},{label:"Bucket Detail",onClick:()=>{}},{label:"File List",onClick:()=>{}},{label:"File Detail"}]})};var b,v,x,h,y;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <FeatureTitle topOffset={0} items={[{
    label: 'Rule Settings',
    onClick: () => {}
  }, {
    label: 'Create Rule'
  }]} actions={<>
          <Button variant="text" color="secondary" size="s">Cancel</Button>
          <Button variant="contained" size="s">Create</Button>
        </>} />
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source},description:{story:`Create / edit page — actions placed in FeatureTitle (edit pages only).
SideMenu active item: "Rule Settings" → first breadcrumb level.`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.description}}};var S,k,C,F,R;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <FeatureTitle topOffset={0} items={[{
    label: 'Node Management'
  }]} />
}`,...(C=(k=s.parameters)==null?void 0:k.docs)==null?void 0:C.source},description:{story:`List page — single level, no sub-page context.
SideMenu active item: "Node Management" → first (and only) breadcrumb level.
On list pages, action buttons belong inside the page content area, not here.`,...(R=(F=s.parameters)==null?void 0:F.docs)==null?void 0:R.description}}};var N,T,j,B,_;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <FeatureTitle topOffset={0} items={[{
    label: 'Rule Settings',
    onClick: () => {}
  }, {
    label: 'Rule Detail',
    onClick: () => {}
  }, {
    label: 'Edit'
  }]} actions={<>
          <Button variant="text" color="secondary" size="s">Cancel</Button>
          <Button variant="contained" size="s">Save</Button>
        </>} />
}`,...(j=(T=l.parameters)==null?void 0:T.docs)==null?void 0:j.source},description:{story:`Nested edit page — three levels deep.
SideMenu active item: "Rule Settings" → first breadcrumb level.`,...(_=(B=l.parameters)==null?void 0:B.docs)==null?void 0:_.description}}};var L,M,z,D,O;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <FeatureTitle topOffset={0} items={[{
    label: 'Alert List',
    onClick: () => {}
  }, {
    label: 'Alert Detail'
  }]} />
}`,...(z=(M=o.parameters)==null?void 0:M.docs)==null?void 0:z.source},description:{story:`Detail / read-only page — no actions in FeatureTitle.
SideMenu active item: "Alert List" → first breadcrumb level.`,...(O=(D=o.parameters)==null?void 0:D.docs)==null?void 0:O.description}}};var w,I,A,H,W;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <FeatureTitle topOffset={0} items={[{
    label: 'Storage',
    onClick: () => {}
  }, {
    label: 'Bucket List',
    onClick: () => {}
  }, {
    label: 'Bucket Detail',
    onClick: () => {}
  }, {
    label: 'File List',
    onClick: () => {}
  }, {
    label: 'File Detail'
  }]} />
}`,...(A=(I=c.parameters)==null?void 0:I.docs)==null?void 0:A.source},description:{story:`Maximum depth: 5 levels.
SideMenu active item: "Storage" → first breadcrumb level.`,...(W=(H=c.parameters)==null?void 0:H.docs)==null?void 0:W.description}}};const Y=["Default","SingleLevel","MultiLevel","WithoutActions","MaxFiveLevels"];export{n as Default,c as MaxFiveLevels,l as MultiLevel,s as SingleLevel,o as WithoutActions,Y as __namedExportsOrder,X as default};
