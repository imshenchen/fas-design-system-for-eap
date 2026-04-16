import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as v}from"./index-BioFo8Zg.js";import{C as s}from"./Checkbox-BzDwVlr1.js";import"./index-yBjzXJbu.js";const B={title:"Data Entry/Checkbox",component:s,tags:["autodocs"],argTypes:{checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"},size:{control:"select",options:["m","s"]},label:{control:"text"}}},c={args:{label:"Checkbox",checked:!1,size:"m"}},t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(s,{label:"Unchecked",checked:!1}),e.jsx(s,{label:"Checked",checked:!0}),e.jsx(s,{label:"Indeterminate",indeterminate:!0}),e.jsx(s,{label:"Disabled unchecked",disabled:!0}),e.jsx(s,{label:"Disabled checked",checked:!0,disabled:!0}),e.jsx(s,{label:"Disabled indeterminate",indeterminate:!0,disabled:!0})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(s,{checked:!1}),e.jsx(s,{checked:!0}),e.jsx(s,{indeterminate:!0}),e.jsx(s,{disabled:!0})]})},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#727171"},children:"Size m (18px — default)"}),e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(s,{size:"m",label:"Unchecked"}),e.jsx(s,{size:"m",checked:!0,label:"Checked"}),e.jsx(s,{size:"m",indeterminate:!0,label:"Indeterminate"})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#727171"},children:"Size s (14px)"}),e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(s,{size:"s",label:"Unchecked"}),e.jsx(s,{size:"s",checked:!0,label:"Checked"}),e.jsx(s,{size:"s",indeterminate:!0,label:"Indeterminate"})]})]})]})},l={render:()=>{const[d,z]=v.useState(!1);return e.jsx(s,{label:`Click me (${d?"checked":"unchecked"})`,checked:d,onChange:z})}};var i,n,o;c.parameters={...c.parameters,docs:{...(i=c.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox',
    checked: false,
    size: 'm'
  }
}`,...(o=(n=c.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};var h,m,x;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <Checkbox label="Unchecked" checked={false} />
      <Checkbox label="Checked" checked={true} />
      <Checkbox label="Indeterminate" indeterminate={true} />
      <Checkbox label="Disabled unchecked" disabled={true} />
      <Checkbox label="Disabled checked" checked={true} disabled={true} />
      <Checkbox label="Disabled indeterminate" indeterminate={true} disabled={true} />
    </div>
}`,...(x=(m=t.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var b,k,p;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <Checkbox checked={false} />
      <Checkbox checked={true} />
      <Checkbox indeterminate={true} />
      <Checkbox disabled={true} />
    </div>
}`,...(p=(k=a.parameters)==null?void 0:k.docs)==null?void 0:p.source}}};var u,f,C;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#727171'
      }}>Size m (18px — default)</p>
        <div style={{
        display: 'flex',
        gap: 16
      }}>
          <Checkbox size="m" label="Unchecked" />
          <Checkbox size="m" checked label="Checked" />
          <Checkbox size="m" indeterminate label="Indeterminate" />
        </div>
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#727171'
      }}>Size s (14px)</p>
        <div style={{
        display: 'flex',
        gap: 16
      }}>
          <Checkbox size="s" label="Unchecked" />
          <Checkbox size="s" checked label="Checked" />
          <Checkbox size="s" indeterminate label="Indeterminate" />
        </div>
      </div>
    </div>
}`,...(C=(f=r.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var j,g,y;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(false);
    return <Checkbox label={\`Click me (\${checked ? 'checked' : 'unchecked'})\`} checked={checked} onChange={setChecked} />;
  }
}`,...(y=(g=l.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const E=["Default","AllStates","NoLabel","Sizes","Interactive"];export{t as AllStates,c as Default,l as Interactive,a as NoLabel,r as Sizes,E as __namedExportsOrder,B as default};
