import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{B as t}from"./Button-iDd4ESB6.js";import"./index-yBjzXJbu.js";import"./index-BioFo8Zg.js";const z={title:"Core/Data Entry/Button",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["contained","outlined","text"]},color:{control:"select",options:["primary","secondary","error"]},size:{control:"select",options:["xl","l","m","s","xs"]},loading:{control:"boolean"},disabled:{control:"boolean"}}},n={args:{children:"Button",variant:"outlined",color:"primary",size:"m"}},o={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[r.jsxs("div",{children:[r.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#727171"},children:"Contained"}),r.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[r.jsx(t,{variant:"contained",color:"primary",children:"Primary"}),r.jsx(t,{variant:"contained",color:"primary",loading:!0,children:"Loading"}),r.jsx(t,{variant:"contained",color:"primary",disabled:!0,children:"Disabled"}),r.jsx(t,{variant:"contained",color:"error",children:"Error"})]})]}),r.jsxs("div",{children:[r.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#727171"},children:"Outlined"}),r.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[r.jsx(t,{variant:"outlined",color:"primary",children:"Primary"}),r.jsx(t,{variant:"outlined",color:"secondary",children:"Secondary"}),r.jsx(t,{variant:"outlined",color:"error",children:"Error"}),r.jsx(t,{variant:"outlined",color:"primary",disabled:!0,children:"Disabled"})]})]}),r.jsxs("div",{children:[r.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#727171"},children:"Text"}),r.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[r.jsx(t,{variant:"text",color:"primary",children:"Primary"}),r.jsx(t,{variant:"text",color:"secondary",children:"Secondary"}),r.jsx(t,{variant:"text",color:"error",children:"Error"}),r.jsx(t,{variant:"text",color:"primary",disabled:!0,children:"Disabled"})]})]}),r.jsxs("div",{children:[r.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#727171"},children:"Sizes"}),r.jsxs("div",{style:{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"},children:[r.jsx(t,{variant:"contained",size:"xl",children:"XL – 48px"}),r.jsx(t,{variant:"contained",size:"l",children:"L – 44px"}),r.jsx(t,{variant:"contained",size:"m",children:"M – 40px"}),r.jsx(t,{variant:"contained",size:"s",children:"S – 36px"}),r.jsx(t,{variant:"contained",size:"xs",children:"XS – 32px"})]})]})]})},a={render:()=>r.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:[r.jsx(t,{variant:"contained",iconLeft:"＋",children:"新增"}),r.jsx(t,{variant:"outlined",iconRight:"→",children:"繼續"}),r.jsx(t,{variant:"text",iconLeft:"⬆",children:"匯出"})]})},e={args:{children:"儲存中",variant:"contained",loading:!0}};var i,l,s;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    children: 'Button',
    variant: 'outlined',
    color: 'primary',
    size: 'm'
  }
}`,...(s=(l=n.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var d,c,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      {/* Contained */}
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#727171'
      }}>Contained</p>
        <div style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }}>
          <Button variant="contained" color="primary">Primary</Button>
          <Button variant="contained" color="primary" loading>Loading</Button>
          <Button variant="contained" color="primary" disabled>Disabled</Button>
          <Button variant="contained" color="error">Error</Button>
        </div>
      </div>

      {/* Outlined */}
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#727171'
      }}>Outlined</p>
        <div style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }}>
          <Button variant="outlined" color="primary">Primary</Button>
          <Button variant="outlined" color="secondary">Secondary</Button>
          <Button variant="outlined" color="error">Error</Button>
          <Button variant="outlined" color="primary" disabled>Disabled</Button>
        </div>
      </div>

      {/* Text */}
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#727171'
      }}>Text</p>
        <div style={{
        display: 'flex',
        gap: 12,
        flexWrap: 'wrap'
      }}>
          <Button variant="text" color="primary">Primary</Button>
          <Button variant="text" color="secondary">Secondary</Button>
          <Button variant="text" color="error">Error</Button>
          <Button variant="text" color="primary" disabled>Disabled</Button>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#727171'
      }}>Sizes</p>
        <div style={{
        display: 'flex',
        gap: 12,
        alignItems: 'center',
        flexWrap: 'wrap'
      }}>
          <Button variant="contained" size="xl">XL – 48px</Button>
          <Button variant="contained" size="l">L – 44px</Button>
          <Button variant="contained" size="m">M – 40px</Button>
          <Button variant="contained" size="s">S – 36px</Button>
          <Button variant="contained" size="xs">XS – 32px</Button>
        </div>
      </div>
    </div>
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var x,u,v;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}>
      <Button variant="contained" iconLeft="＋">新增</Button>
      <Button variant="outlined" iconRight="→">繼續</Button>
      <Button variant="text" iconLeft="⬆">匯出</Button>
    </div>
}`,...(v=(u=a.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var m,y,B;e.parameters={...e.parameters,docs:{...(m=e.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: '儲存中',
    variant: 'contained',
    loading: true
  }
}`,...(B=(y=e.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const S=["Default","AllVariants","WithIcons","Loading"];export{o as AllVariants,n as Default,e as Loading,a as WithIcons,S as __namedExportsOrder,z as default};
