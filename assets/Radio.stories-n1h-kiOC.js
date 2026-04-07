import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as y}from"./index-BioFo8Zg.js";import"./index-yBjzXJbu.js";const l=({checked:a=!1,disabled:s=!1,onChange:o,label:t,value:i,name:f,className:b,style:v})=>{const r=y.useId();return e.jsxs("label",{htmlFor:r,className:["fas-radio",a&&"fas-radio--checked",s&&"fas-radio--disabled",b].filter(Boolean).join(" "),style:v,children:[e.jsx("input",{id:r,type:"radio",checked:a,disabled:s,value:i,name:f,onChange:O=>o==null?void 0:o(O.target.checked),className:"fas-radio__input"}),e.jsx("span",{className:"fas-radio__indicator","aria-hidden":!0,children:a&&e.jsx("span",{className:"fas-radio__dot"})}),t&&e.jsx("span",{className:"fas-radio__label",children:t})]})};l.displayName="Radio";const m=({name:a,value:s,onChange:o,options:t,direction:i="column",disabled:f=!1,className:b,style:v})=>e.jsx("div",{role:"radiogroup",className:["fas-radio-group",b].filter(Boolean).join(" "),style:{display:"flex",flexDirection:i,gap:i==="row"?16:8,...v},children:t.map(r=>e.jsx(l,{name:a,value:r.value,checked:s===r.value,disabled:f||r.disabled,label:r.label,onChange:()=>o(r.value)},r.value))});m.displayName="RadioGroup";l.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},value:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};m.__docgenInfo={description:"",methods:[],displayName:"RadioGroup",props:{name:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"string"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"RadioGroupOption"}],raw:"RadioGroupOption[]"},description:""},direction:{required:!1,tsType:{name:"union",raw:"'row' | 'column'",elements:[{name:"literal",value:"'row'"},{name:"literal",value:"'column'"}]},description:"",defaultValue:{value:"'column'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const B={title:"Data Entry/Radio",component:l,tags:["autodocs"]},n={args:{checked:!1,label:"Option A"}},d={args:{checked:!0,label:"Selected option"}},c={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(l,{checked:!1,disabled:!0,label:"Disabled unchecked"}),e.jsx(l,{checked:!0,disabled:!0,label:"Disabled checked"})]})},u={render:()=>{const[a,s]=y.useState("a");return e.jsx(m,{name:"demo",value:a,onChange:s,options:[{value:"a",label:"Option A"},{value:"b",label:"Option B"},{value:"c",label:"Option C (disabled)",disabled:!0}]})}},p={render:()=>{const[a,s]=y.useState("x");return e.jsx(m,{name:"horizontal",value:a,onChange:s,direction:"row",options:[{value:"x",label:"X"},{value:"y",label:"Y"},{value:"z",label:"Z"}]})}};var g,h,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    checked: false,
    label: 'Option A'
  }
}`,...(x=(h=n.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var R,S,k;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    checked: true,
    label: 'Selected option'
  }
}`,...(k=(S=d.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};var j,q,T;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <Radio checked={false} disabled label="Disabled unchecked" />
      <Radio checked={true} disabled label="Disabled checked" />
    </div>
}`,...(T=(q=c.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};var N,_,w;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(w=(_=u.parameters)==null?void 0:_.docs)==null?void 0:w.source}}};var C,D,G;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(G=(D=p.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};const E=["Default","Checked","Disabled","Group","HorizontalGroup"];export{d as Checked,n as Default,c as Disabled,u as Group,p as HorizontalGroup,E as __namedExportsOrder,B as default};
