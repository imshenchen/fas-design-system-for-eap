import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{T as l,a as p}from"./TextField-CvnJVySZ.js";import"./index-yBjzXJbu.js";import"./index-BioFo8Zg.js";const k={title:"Data Entry/TextField",component:l,tags:["autodocs"],argTypes:{style:{control:"select",options:["outlined","underline","borderless"]},size:{control:"select",options:["xl","l","m","s","xs"]},labelPosition:{control:"select",options:["top","inline","left"]},disabled:{control:"boolean"},readOnly:{control:"boolean"},required:{control:"boolean"}}},t={args:{label:"欄位名稱",placeholder:"請輸入文字",style:"outlined",size:"m"}},s={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:400},children:[e.jsx(l,{label:"預設",placeholder:"請輸入文字"}),e.jsx(l,{label:"有值",defaultValue:"已填入的文字"}),e.jsx(l,{label:"必填",required:!0,placeholder:"必填欄位"}),e.jsx(l,{label:"錯誤",error:"此欄位格式不正確",defaultValue:"錯誤的輸入"}),e.jsx(l,{label:"提示文字",helperText:"請輸入 6–20 個字元"}),e.jsx(l,{label:"停用",disabled:!0,placeholder:"停用狀態"}),e.jsx(l,{label:"唯讀",readOnly:!0,defaultValue:"唯讀文字"})]})},a={name:"States (Figma spec)",render:()=>{const r=(q,x)=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"160px 260px 260px",alignItems:"start",gap:24},children:[e.jsx("div",{style:{fontSize:14,color:"var(--text-medium)",paddingTop:32},children:q}),e.jsx(l,{style:"outlined",label:"欄位名稱",...x}),e.jsx(l,{style:"underline",label:"欄位名稱",...x})]});return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r("Empty",{placeholder:"請輸入"}),r("Filled",{defaultValue:"輸入值"}),r("Focus (點擊)",{defaultValue:"輸入值"}),r("Error",{defaultValue:"輸入值",error:"錯誤訊息"}),r("Disabled",{defaultValue:"輸入值",disabled:!0}),r("Read-only",{defaultValue:"輸入值",readOnly:!0})]})}},o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:400},children:[e.jsx(l,{label:"Outlined",style:"outlined",placeholder:"外框樣式"}),e.jsx(l,{label:"Underline",style:"underline",placeholder:"底線樣式"}),e.jsx(l,{label:"Borderless",style:"borderless",placeholder:"無框樣式"})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,maxWidth:400},children:[e.jsx(l,{size:"xl",placeholder:"XL – 48px"}),e.jsx(l,{size:"l",placeholder:"L – 44px"}),e.jsx(l,{size:"m",placeholder:"M – 40px（預設）"}),e.jsx(l,{size:"s",placeholder:"S – 36px"}),e.jsx(l,{size:"xs",placeholder:"XS – 32px"})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:500},children:[e.jsx(l,{label:"Top Label",labelPosition:"top",placeholder:"label 在上方"}),e.jsx(l,{label:"Left Label",labelPosition:"left",placeholder:"label 在左側"})]})},n={name:"TextArea",render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16,maxWidth:400},children:[e.jsx(p,{label:"備註",placeholder:"請輸入備註內容",rows:4}),e.jsx(p,{label:"限制字數",placeholder:"最多 200 字",maxLength:200,showCount:!0,rows:3}),e.jsx(p,{label:"錯誤狀態",error:"內容不得為空",rows:3})]})},c={args:{label:"描述",placeholder:"請輸入描述",maxLength:100,showCount:!0}};var u,m,h;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: '欄位名稱',
    placeholder: '請輸入文字',
    style: 'outlined',
    size: 'm'
  }
}`,...(h=(m=t.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var b,y,f;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var g,T,j,F,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'States (Figma spec)',
  render: () => {
    const row = (label: string, props: React.ComponentProps<typeof TextField>) => <div style={{
      display: 'grid',
      gridTemplateColumns: '160px 260px 260px',
      alignItems: 'start',
      gap: 24
    }}>
        <div style={{
        fontSize: 14,
        color: 'var(--text-medium)',
        paddingTop: 32
      }}>{label}</div>
        <TextField style="outlined" label="欄位名稱" {...props} />
        <TextField style="underline" label="欄位名稱" {...props} />
      </div>;
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        {row('Empty', {
        placeholder: '請輸入'
      })}
        {row('Filled', {
        defaultValue: '輸入值'
      })}
        {row('Focus (點擊)', {
        defaultValue: '輸入值'
      })}
        {row('Error', {
        defaultValue: '輸入值',
        error: '錯誤訊息'
      })}
        {row('Disabled', {
        defaultValue: '輸入值',
        disabled: true
      })}
        {row('Read-only', {
        defaultValue: '輸入值',
        readOnly: true
      })}
      </div>;
  }
}`,...(j=(T=a.parameters)==null?void 0:T.docs)==null?void 0:j.source},description:{story:`State matrix matching Figma 7185:55633 — every row shows outlined + underline
side by side. Click into a field to see focus state + clear icon.`,...(v=(F=a.parameters)==null?void 0:F.docs)==null?void 0:v.description}}};var S,w,z;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(z=(w=o.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var D,L,V;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(V=(L=d.parameters)==null?void 0:L.docs)==null?void 0:V.source}}};var A,W,C;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    maxWidth: 500
  }}>
      <TextField label="Top Label" labelPosition="top" placeholder="label 在上方" />
      <TextField label="Left Label" labelPosition="left" placeholder="label 在左側" />
    </div>
}`,...(C=(W=i.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var O,P,E;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(E=(P=n.parameters)==null?void 0:P.docs)==null?void 0:E.source}}};var M,R,X;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    label: '描述',
    placeholder: '請輸入描述',
    maxLength: 100,
    showCount: true
  }
}`,...(X=(R=c.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};const G=["Default","AllStates","StateMatrix","AllStyles","AllSizes","WithLabelPositions","TextAreaStory","WithCharCount"];export{d as AllSizes,s as AllStates,o as AllStyles,t as Default,a as StateMatrix,n as TextAreaStory,c as WithCharCount,i as WithLabelPositions,G as __namedExportsOrder,k as default};
