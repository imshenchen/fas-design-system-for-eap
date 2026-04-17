import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r as m}from"./index-BioFo8Zg.js";import"./index-yBjzXJbu.js";const t=({checked:e=!1,disabled:r=!1,onChange:s,label:o,value:i,name:b,className:v,style:h})=>{const l=m.useId();return a.jsxs("label",{htmlFor:l,className:["fas-radio",e&&"fas-radio--checked",r&&"fas-radio--disabled",v].filter(Boolean).join(" "),style:h,children:[a.jsx("input",{id:l,type:"radio",checked:e,disabled:r,value:i,name:b,onChange:y=>s==null?void 0:s(y.target.checked),onClick:()=>{e&&(s==null||s(!1))},className:"fas-radio__input"}),a.jsx("span",{className:"fas-radio__indicator","aria-hidden":!0,children:e&&a.jsx("span",{className:"fas-radio__dot"})}),o&&a.jsx("span",{className:"fas-radio__label",children:o})]})};t.displayName="Radio";const f=({name:e,value:r,onChange:s,options:o,direction:i="column",disabled:b=!1,className:v,style:h})=>a.jsx("div",{role:"radiogroup",className:["fas-radio-group",v].filter(Boolean).join(" "),style:{display:"flex",flexDirection:i,gap:i==="row"?16:8,...h},children:o.map(l=>a.jsx(t,{name:e,value:l.value,checked:r===l.value,disabled:b||l.disabled,label:l.label,onChange:y=>s(y?l.value:"")},l.value))});f.displayName="RadioGroup";t.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},value:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};f.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"RadioGroupOption"}],raw:"RadioGroupOption[]"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:"",defaultValue:{value:"'column'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const B={title:"Data Entry/Radio",component:t,tags:["autodocs"]},n={args:{checked:!1,label:"Option A"},render:e=>{const[r,s]=m.useState(e.checked??!1);return a.jsx(t,{...e,checked:r,onChange:s})}},d={args:{checked:!0,label:"Selected option"}},c={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[a.jsx(t,{checked:!1,disabled:!0,label:"Disabled unchecked"}),a.jsx(t,{checked:!0,disabled:!0,label:"Disabled checked"})]})},u={render:()=>{const[e,r]=m.useState("a");return a.jsx(f,{name:"demo",value:e,onChange:r,options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C (disabled)",disabled:!0}]})}},p={render:()=>{const[e,r]=m.useState("x");return a.jsx(f,{name:"horizontal",value:e,onChange:r,direction:"row",options:[{value:"x",label:"X"},{value:"y",label:"Y"},{value:"z",label:"Z"}]})}};var g,k,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    checked: false,
    label: 'Option A'
  },
  render: args => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(args.checked ?? false);
    return <Radio {...args} checked={checked} onChange={setChecked} />;
  }
}`,...(x=(k=n.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var R,S,j;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: 'Selected option'
  }
}`,...(j=(S=d.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var q,T,N;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <Radio checked={false} disabled label="Disabled unchecked" />
      <Radio checked={true} disabled label="Disabled checked" />
    </div>
}`,...(N=(T=c.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var _,C,w;u.parameters={...u.parameters,docs:{...(_=u.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(w=(C=u.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var D,G,O;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(O=(G=p.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};const E=["Default","Checked","Disabled","Group","HorizontalGroup"];export{d as Checked,n as Default,c as Disabled,u as Group,p as HorizontalGroup,E as __namedExportsOrder,B as default};
