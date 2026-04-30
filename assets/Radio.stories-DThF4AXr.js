import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as d}from"./index-BioFo8Zg.js";import{R as n,a as O}from"./Radio-YnbnRESg.js";import"./index-yBjzXJbu.js";const A={title:"Core/Data Entry/Radio",component:n,tags:["autodocs"]},s={args:{checked:!1,label:"Option A"},render:e=>{const[r,j]=d.useState(e.checked??!1);return a.jsx(n,{...e,checked:r,onChange:j})}},o={args:{checked:!0,label:"Selected option"}},l={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[a.jsx(n,{checked:!1,disabled:!0,label:"Disabled unchecked"}),a.jsx(n,{checked:!0,disabled:!0,label:"Disabled checked"})]})},t={render:()=>{const[e,r]=d.useState("a");return a.jsx(O,{name:"demo",value:e,onChange:r,options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C (disabled)",disabled:!0}]})}},c={render:()=>{const[e,r]=d.useState("x");return a.jsx(O,{name:"horizontal",value:e,onChange:r,direction:"row",options:[{value:"x",label:"X"},{value:"y",label:"Y"},{value:"z",label:"Z"}]})}};var i,u,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    checked: false,
    label: 'Option A'
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(args.checked ?? false);
    return <Radio {...args} checked={checked} onChange={setChecked} />;
  }
}`,...(p=(u=s.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var m,b,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: 'Selected option'
  }
}`,...(h=(b=o.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var k,v,g;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <Radio checked={false} disabled label="Disabled unchecked" />
      <Radio checked={true} disabled label="Disabled checked" />
    </div>
}`,...(g=(v=l.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var x,f,C;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState('a');
    return <RadioGroup name="demo" value={val} onChange={setVal} options={[{
      value: 'a',
      label: 'Option A'
    }, {
      value: 'b',
      label: 'Option B'
    }, {
      value: 'c',
      label: 'Option C (disabled)',
      disabled: true
    }]} />;
  }
}`,...(C=(f=t.parameters)==null?void 0:f.docs)==null?void 0:C.source}}};var S,D,R;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [val, setVal] = useState('x');
    return <RadioGroup name="horizontal" value={val} onChange={setVal} direction="row" options={[{
      value: 'x',
      label: 'X'
    }, {
      value: 'y',
      label: 'Y'
    }, {
      value: 'z',
      label: 'Z'
    }]} />;
  }
}`,...(R=(D=c.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const E=["Default","Checked","Disabled","Group","HorizontalGroup"];export{o as Checked,s as Default,l as Disabled,t as Group,c as HorizontalGroup,E as __namedExportsOrder,A as default};
