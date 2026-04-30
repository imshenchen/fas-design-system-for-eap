import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{L as r}from"./LMFooter-ITWr2p13.js";import"./index-yBjzXJbu.js";import"./index-BioFo8Zg.js";import"./Button-iDd4ESB6.js";import"./tokens-DAmOzuQn.js";const z={title:"LM/Components/LMFooter",component:r,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:"LMFooter — LM 專案功能內容區塊底部的固定操作列。\n\n- 左側：Help（text button），點擊開啟說明 / 文件\n- 右側：上一步（outlined）+ 下一步（contained primary）\n- 透過 `position:sticky; bottom:0` 釘在 scroll 容器底部\n\nWizard 第一步可省略 `onPrev`，最後一步可把 `nextLabel` 改成「完成」/「送出」。"}}}},o=({children:h})=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"360px",background:"var(--bg-surface-dim)"},children:[e.jsx("div",{style:{flex:1,padding:32,overflow:"auto"},children:e.jsx("p",{style:{color:"var(--text-medium)"},children:"（示意：功能內容區塊。LMFooter 釘在 scroll 容器底部）"})}),h]}),t={render:()=>e.jsx(o,{children:e.jsx(r,{onHelp:()=>alert("open help"),onPrev:()=>alert("prev"),onNext:()=>alert("next")})})},n={name:"Wizard — first step (no prev)",render:()=>e.jsx(o,{children:e.jsx(r,{onHelp:()=>{},onNext:()=>{}})})},a={name:"Wizard — last step (submit)",render:()=>e.jsx(o,{children:e.jsx(r,{onHelp:()=>{},onPrev:()=>{},onNext:()=>{},nextLabel:"完成"})})},s={render:()=>e.jsx(o,{children:e.jsx(r,{onHelp:()=>{},onPrev:()=>{},onNext:()=>{},nextLoading:!0})})},p={render:()=>e.jsx(o,{children:e.jsx(r,{onHelp:()=>{},onPrev:()=>{},onNext:()=>{},nextDisabled:!0})})};var l,d,i;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <Frame>
      <LMFooter onHelp={() => alert('open help')} onPrev={() => alert('prev')} onNext={() => alert('next')} />
    </Frame>
}`,...(i=(d=t.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var c,m,x;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: 'Wizard — first step (no prev)',
  render: () => <Frame>
      <LMFooter onHelp={() => {}} onNext={() => {}} />
    </Frame>
}`,...(x=(m=n.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var u,F,L;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Wizard — last step (submit)',
  render: () => <Frame>
      <LMFooter onHelp={() => {}} onPrev={() => {}} onNext={() => {}} nextLabel="完成" />
    </Frame>
}`,...(L=(F=a.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var v,j,g;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <Frame>
      <LMFooter onHelp={() => {}} onPrev={() => {}} onNext={() => {}} nextLoading />
    </Frame>
}`,...(g=(j=s.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var N,b,f;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Frame>
      <LMFooter onHelp={() => {}} onPrev={() => {}} onNext={() => {}} nextDisabled />
    </Frame>
}`,...(f=(b=p.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};const W=["Default","FirstStep","LastStep","NextLoading","NextDisabled"];export{t as Default,n as FirstStep,a as LastStep,p as NextDisabled,s as NextLoading,W as __namedExportsOrder,z as default};
