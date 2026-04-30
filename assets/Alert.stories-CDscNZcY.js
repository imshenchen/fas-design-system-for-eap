import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as P}from"./index-BioFo8Zg.js";import{A as r}from"./Alert-Oqz73ybB.js";import"./index-yBjzXJbu.js";const I={title:"Core/Feedback/Alert",component:r,tags:["autodocs"],argTypes:{severity:{control:"select",options:["info","success","warning","error"]},variant:{control:"select",options:["standard","filled","outlined"]}}},s={args:{severity:"info",children:"This is an informational message."}},i={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(r,{severity:"info",children:"This is an info message."}),e.jsx(r,{severity:"success",children:"Operation completed successfully."}),e.jsx(r,{severity:"warning",children:"Please review before continuing."}),e.jsx(r,{severity:"error",children:"An error occurred. Please try again."})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(r,{severity:"info",variant:"filled",children:"Info"}),e.jsx(r,{severity:"success",variant:"filled",children:"Success"}),e.jsx(r,{severity:"warning",variant:"filled",children:"Warning"}),e.jsx(r,{severity:"error",variant:"filled",children:"Error"})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(r,{severity:"info",variant:"outlined",children:"Info"}),e.jsx(r,{severity:"success",variant:"outlined",children:"Success"}),e.jsx(r,{severity:"warning",variant:"outlined",children:"Warning"}),e.jsx(r,{severity:"error",variant:"outlined",children:"Error"})]})},n={render:()=>e.jsx(r,{severity:"warning",title:"Attention Required",children:"Your session will expire in 5 minutes. Please save your work."})},a={render:()=>{const[E,T]=P.useState(!0);return E?e.jsx(r,{severity:"success",onClose:()=>T(!1),children:"File uploaded successfully."}):e.jsx("p",{style:{fontSize:12,color:"#727171"},children:"Alert closed."})}};var o,c,d;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    severity: 'info',
    children: 'This is an informational message.'
  }
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var u,v,p;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <Alert severity="info">This is an info message.</Alert>
      <Alert severity="success">Operation completed successfully.</Alert>
      <Alert severity="warning">Please review before continuing.</Alert>
      <Alert severity="error">An error occurred. Please try again.</Alert>
    </div>
}`,...(p=(v=i.parameters)==null?void 0:v.docs)==null?void 0:p.source}}};var f,y,m;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <Alert severity="info" variant="filled">Info</Alert>
      <Alert severity="success" variant="filled">Success</Alert>
      <Alert severity="warning" variant="filled">Warning</Alert>
      <Alert severity="error" variant="filled">Error</Alert>
    </div>
}`,...(m=(y=t.parameters)==null?void 0:y.docs)==null?void 0:m.source}}};var A,g,x;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <Alert severity="info" variant="outlined">Info</Alert>
      <Alert severity="success" variant="outlined">Success</Alert>
      <Alert severity="warning" variant="outlined">Warning</Alert>
      <Alert severity="error" variant="outlined">Error</Alert>
    </div>
}`,...(x=(g=l.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,j,S;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Alert severity="warning" title="Attention Required">
      Your session will expire in 5 minutes. Please save your work.
    </Alert>
}`,...(S=(j=n.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var w,b,D;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = useState(true);
    return visible ? <Alert severity="success" onClose={() => setVisible(false)}>
        File uploaded successfully.
      </Alert> : <p style={{
      fontSize: 12,
      color: '#727171'
    }}>Alert closed.</p>;
  }
}`,...(D=(b=a.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};const k=["Default","AllSeverities","Filled","Outlined","WithTitle","Closeable"];export{i as AllSeverities,a as Closeable,s as Default,t as Filled,l as Outlined,n as WithTitle,k as __namedExportsOrder,I as default};
