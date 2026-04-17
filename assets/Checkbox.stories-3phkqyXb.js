import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as v}from"./index-BioFo8Zg.js";import{C as s}from"./Checkbox-Ds7IhLWd.js";import"./index-yBjzXJbu.js";const E={title:"Data Entry/Checkbox",component:s,tags:["autodocs"],argTypes:{checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"},size:{control:"select",options:["m","s"]},label:{control:"text"}}},t={args:{label:"Checkbox",checked:!1,size:"m"},render:c=>{const[n,S]=v.useState(c.checked??!1);return e.jsx(s,{...c,checked:n,onChange:S})}},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(s,{label:"Unchecked",checked:!1}),e.jsx(s,{label:"Checked",checked:!0}),e.jsx(s,{label:"Indeterminate",indeterminate:!0}),e.jsx(s,{label:"Disabled unchecked",disabled:!0}),e.jsx(s,{label:"Disabled checked",checked:!0,disabled:!0}),e.jsx(s,{label:"Disabled indeterminate",indeterminate:!0,disabled:!0})]})},r={render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(s,{checked:!1}),e.jsx(s,{checked:!0}),e.jsx(s,{indeterminate:!0}),e.jsx(s,{disabled:!0})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#727171"},children:"Size m (18px — default)"}),e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(s,{size:"m",label:"Unchecked"}),e.jsx(s,{size:"m",checked:!0,label:"Checked"}),e.jsx(s,{size:"m",indeterminate:!0,label:"Indeterminate"})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#727171"},children:"Size s (14px)"}),e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(s,{size:"s",label:"Unchecked"}),e.jsx(s,{size:"s",checked:!0,label:"Checked"}),e.jsx(s,{size:"s",indeterminate:!0,label:"Indeterminate"})]})]})]})},d={render:()=>{const[c,n]=v.useState(!1);return e.jsx(s,{label:`Click me (${c?"checked":"unchecked"})`,checked:c,onChange:n})}};var i,o,h;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox',
    checked: false,
    size: 'm'
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(args.checked ?? false);
    return <Checkbox {...args} checked={checked} onChange={setChecked} />;
  }
}`,...(h=(o=t.parameters)==null?void 0:o.docs)==null?void 0:h.source}}};var k,m,x;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(x=(m=a.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var b,u,p;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var C,f,g;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var j,y,z;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(false);
    return <Checkbox label={\`Click me (\${checked ? 'checked' : 'unchecked'})\`} checked={checked} onChange={setChecked} />;
  }
}`,...(z=(y=d.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};const A=["Default","AllStates","NoLabel","Sizes","Interactive"];export{a as AllStates,t as Default,d as Interactive,r as NoLabel,l as Sizes,A as __namedExportsOrder,E as default};
