import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as I}from"./index-BioFo8Zg.js";import"./index-yBjzXJbu.js";const O={info:"info",success:"check_circle",warning:"warning",error:"cancel"},r=({severity:s,variant:c="standard",title:d,children:D,onClose:u,action:m,className:P,style:E})=>e.jsxs("div",{role:"alert",className:["fas-alert",`fas-alert--${s}`,`fas-alert--${c}`,P].filter(Boolean).join(" "),style:E,children:[e.jsx("span",{className:"material-symbols-outlined fas-alert__icon","aria-hidden":!0,children:O[s]}),e.jsxs("div",{className:"fas-alert__content",children:[d&&e.jsx("div",{className:"fas-alert__title",children:d}),e.jsx("div",{className:"fas-alert__message",children:D})]}),m&&e.jsx("div",{className:"fas-alert__action",children:m}),u&&e.jsx("button",{type:"button",className:"fas-alert__close",onClick:u,"aria-label":"Close",children:e.jsx("span",{className:"material-symbols-outlined","aria-hidden":!0,children:"close"})})]});r.displayName="Alert";r.__docgenInfo={description:"",methods:[],displayName:"Alert",props:{severity:{required:!0,tsType:{name:"union",raw:"'success' | 'warning' | 'error' | 'info'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"},{name:"literal",value:"'info'"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:"'standard' | 'filled' | 'outlined'",elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'filled'"},{name:"literal",value:"'outlined'"}]},description:"",defaultValue:{value:"'standard'",computed:!1}},title:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const V={title:"Feedback/Alert",component:r,tags:["autodocs"],argTypes:{severity:{control:"select",options:["info","success","warning","error"]},variant:{control:"select",options:["standard","filled","outlined"]}}},i={args:{severity:"info",children:"This is an informational message."}},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(r,{severity:"info",children:"This is an info message."}),e.jsx(r,{severity:"success",children:"Operation completed successfully."}),e.jsx(r,{severity:"warning",children:"Please review before continuing."}),e.jsx(r,{severity:"error",children:"An error occurred. Please try again."})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(r,{severity:"info",variant:"filled",children:"Info"}),e.jsx(r,{severity:"success",variant:"filled",children:"Success"}),e.jsx(r,{severity:"warning",variant:"filled",children:"Warning"}),e.jsx(r,{severity:"error",variant:"filled",children:"Error"})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(r,{severity:"info",variant:"outlined",children:"Info"}),e.jsx(r,{severity:"success",variant:"outlined",children:"Success"}),e.jsx(r,{severity:"warning",variant:"outlined",children:"Warning"}),e.jsx(r,{severity:"error",variant:"outlined",children:"Error"})]})},n={render:()=>e.jsx(r,{severity:"warning",title:"Attention Required",children:"Your session will expire in 5 minutes. Please save your work."})},o={render:()=>{const[s,c]=I.useState(!0);return s?e.jsx(r,{severity:"success",onClose:()=>c(!1),children:"File uploaded successfully."}):e.jsx("p",{style:{fontSize:12,color:"#727171"},children:"Alert closed."})}};var p,v,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    severity: 'info',
    children: 'This is an informational message.'
  }
}`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var y,g,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(g=a.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var A,h,j;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(j=(h=t.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var w,S,_;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(_=(S=l.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var b,N,T;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <Alert severity="warning" title="Attention Required">
      Your session will expire in 5 minutes. Please save your work.
    </Alert>
}`,...(T=(N=n.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var R,q,C;o.parameters={...o.parameters,docs:{...(R=o.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [visible, setVisible] = useState(true);
    return visible ? <Alert severity="success" onClose={() => setVisible(false)}>
        File uploaded successfully.
      </Alert> : <p style={{
      fontSize: 12,
      color: '#727171'
    }}>Alert closed.</p>;
  }
}`,...(C=(q=o.parameters)==null?void 0:q.docs)==null?void 0:C.source}}};const z=["Default","AllSeverities","Filled","Outlined","WithTitle","Closeable"];export{a as AllSeverities,o as Closeable,i as Default,t as Filled,l as Outlined,n as WithTitle,z as __namedExportsOrder,V as default};
