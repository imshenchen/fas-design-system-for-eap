import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{T as l,a as n}from"./TextField-VNRuG959.js";import"./index-yBjzXJbu.js";import"./index-BioFo8Zg.js";const X={title:"Data Entry/TextField",component:l,tags:["autodocs"],argTypes:{style:{control:"select",options:["outlined","underline","borderless"]},size:{control:"select",options:["xl","l","m","s","xs"]},labelPosition:{control:"select",options:["top","inline","left"]},disabled:{control:"boolean"},readOnly:{control:"boolean"},required:{control:"boolean"}}},r={args:{label:"欄位名稱",placeholder:"請輸入文字",style:"outlined",size:"m"}},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:400},children:[e.jsx(l,{label:"預設",placeholder:"請輸入文字"}),e.jsx(l,{label:"有值",defaultValue:"已填入的文字"}),e.jsx(l,{label:"必填",required:!0,placeholder:"必填欄位"}),e.jsx(l,{label:"錯誤",error:"此欄位格式不正確",defaultValue:"錯誤的輸入"}),e.jsx(l,{label:"提示文字",helperText:"請輸入 6–20 個字元"}),e.jsx(l,{label:"停用",disabled:!0,placeholder:"停用狀態"}),e.jsx(l,{label:"唯讀",readOnly:!0,defaultValue:"唯讀文字"})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:400},children:[e.jsx(l,{label:"Outlined",style:"outlined",placeholder:"外框樣式"}),e.jsx(l,{label:"Underline",style:"underline",placeholder:"底線樣式"}),e.jsx(l,{label:"Borderless",style:"borderless",placeholder:"無框樣式"})]})},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:400},children:[e.jsx(l,{size:"xl",placeholder:"XL – 48px"}),e.jsx(l,{size:"l",placeholder:"L – 44px"}),e.jsx(l,{size:"m",placeholder:"M – 40px（預設）"}),e.jsx(l,{size:"s",placeholder:"S – 36px"}),e.jsx(l,{size:"xs",placeholder:"XS – 32px"})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:500},children:[e.jsx(l,{label:"Top Label",labelPosition:"top",placeholder:"label 在上方"}),e.jsx(l,{label:"Left Label",labelPosition:"left",placeholder:"label 在左側"})]})},d={name:"TextArea",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:400},children:[e.jsx(n,{label:"備註",placeholder:"請輸入備註內容",rows:4}),e.jsx(n,{label:"限制字數",placeholder:"最多 200 字",maxLength:200,showCount:!0,rows:3}),e.jsx(n,{label:"錯誤狀態",error:"內容不得為空",rows:3})]})},i={args:{label:"描述",placeholder:"請輸入描述",maxLength:100,showCount:!0}};var c,p,x;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: '欄位名稱',
    placeholder: '請輸入文字',
    style: 'outlined',
    size: 'm'
  }
}`,...(x=(p=r.parameters)==null?void 0:p.docs)==null?void 0:x.source}}};var u,m,h;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 400
  }}>
      <TextField label="預設" placeholder="請輸入文字" />
      <TextField label="有值" defaultValue="已填入的文字" />
      <TextField label="必填" required placeholder="必填欄位" />
      <TextField label="錯誤" error="此欄位格式不正確" defaultValue="錯誤的輸入" />
      <TextField label="提示文字" helperText="請輸入 6–20 個字元" />
      <TextField label="停用" disabled placeholder="停用狀態" />
      <TextField label="唯讀" readOnly defaultValue="唯讀文字" />
    </div>
}`,...(h=(m=a.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var b,y,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 400
  }}>
      <TextField label="Outlined" style="outlined" placeholder="外框樣式" />
      <TextField label="Underline" style="underline" placeholder="底線樣式" />
      <TextField label="Borderless" style="borderless" placeholder="無框樣式" />
    </div>
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var T,g,j;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    maxWidth: 400
  }}>
      <TextField size="xl" placeholder="XL – 48px" />
      <TextField size="l" placeholder="L – 44px" />
      <TextField size="m" placeholder="M – 40px（預設）" />
      <TextField size="s" placeholder="S – 36px" />
      <TextField size="xs" placeholder="XS – 32px" />
    </div>
}`,...(j=(g=o.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var F,S,L;t.parameters={...t.parameters,docs:{...(F=t.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 500
  }}>
      <TextField label="Top Label" labelPosition="top" placeholder="label 在上方" />
      <TextField label="Left Label" labelPosition="left" placeholder="label 在左側" />
    </div>
}`,...(L=(S=t.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var v,z,A;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: 'TextArea',
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 400
  }}>
      <TextArea label="備註" placeholder="請輸入備註內容" rows={4} />
      <TextArea label="限制字數" placeholder="最多 200 字" maxLength={200} showCount rows={3} />
      <TextArea label="錯誤狀態" error="內容不得為空" rows={3} />
    </div>
}`,...(A=(z=d.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var W,D,w;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    label: '描述',
    placeholder: '請輸入描述',
    maxLength: 100,
    showCount: true
  }
}`,...(w=(D=i.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};const q=["Default","AllStates","AllStyles","AllSizes","WithLabelPositions","TextAreaStory","WithCharCount"];export{o as AllSizes,a as AllStates,s as AllStyles,r as Default,d as TextAreaStory,i as WithCharCount,t as WithLabelPositions,q as __namedExportsOrder,X as default};
