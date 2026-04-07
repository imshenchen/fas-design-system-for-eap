import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as R,R as x}from"./index-BioFo8Zg.js";import"./index-yBjzXJbu.js";const s=({checked:c=!1,indeterminate:a=!1,disabled:m=!1,onChange:i,label:h,size:w="m",className:T,style:q})=>{const u=R.useId(),o=x.useRef(null);x.useEffect(()=>{o.current&&(o.current.indeterminate=a)},[a]);const B=U=>{i==null||i(U.target.checked)},L=["fas-checkbox",`fas-checkbox--${w}`,c&&!a&&"fas-checkbox--checked",a&&"fas-checkbox--indeterminate",m&&"fas-checkbox--disabled",T].filter(Boolean).join(" ");return e.jsxs("label",{htmlFor:u,className:L,style:q,children:[e.jsx("input",{ref:o,id:u,type:"checkbox",checked:c,disabled:m,onChange:B,className:"fas-checkbox__input","aria-checked":a?"mixed":c}),e.jsxs("span",{className:"fas-checkbox__box","aria-hidden":!0,children:[a&&e.jsx("span",{className:"fas-checkbox__mark fas-checkbox__mark--dash",children:"–"}),!a&&c&&e.jsx("svg",{className:"fas-checkbox__mark fas-checkbox__mark--check",viewBox:"0 0 12 10",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M1 5L4.5 8.5L11 1.5",stroke:"white",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})]}),h&&e.jsx("span",{className:"fas-checkbox__label",children:h})]})};s.displayName="Checkbox";s.__docgenInfo={description:"",methods:[],displayName:"Checkbox",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},indeterminate:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:"'m' | 's'",elements:[{name:"literal",value:"'m'"},{name:"literal",value:"'s'"}]},description:"m = 18px box (default), s = 14px box",defaultValue:{value:"'m'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const A={title:"Data Entry/Checkbox",component:s,tags:["autodocs"],argTypes:{checked:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"},size:{control:"select",options:["m","s"]},label:{control:"text"}}},t={args:{label:"Checkbox",checked:!1,size:"m"}},l={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(s,{label:"Unchecked",checked:!1}),e.jsx(s,{label:"Checked",checked:!0}),e.jsx(s,{label:"Indeterminate",indeterminate:!0}),e.jsx(s,{label:"Disabled unchecked",disabled:!0}),e.jsx(s,{label:"Disabled checked",checked:!0,disabled:!0}),e.jsx(s,{label:"Disabled indeterminate",indeterminate:!0,disabled:!0})]})},r={render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(s,{checked:!1}),e.jsx(s,{checked:!0}),e.jsx(s,{indeterminate:!0}),e.jsx(s,{disabled:!0})]})},d={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#727171"},children:"Size m (18px — default)"}),e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(s,{size:"m",label:"Unchecked"}),e.jsx(s,{size:"m",checked:!0,label:"Checked"}),e.jsx(s,{size:"m",indeterminate:!0,label:"Indeterminate"})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#727171"},children:"Size s (14px)"}),e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(s,{size:"s",label:"Unchecked"}),e.jsx(s,{size:"s",checked:!0,label:"Checked"}),e.jsx(s,{size:"s",indeterminate:!0,label:"Indeterminate"})]})]})]})},n={render:()=>{const[c,a]=R.useState(!1);return e.jsx(s,{label:`Click me (${c?"checked":"unchecked"})`,checked:c,onChange:a})}};var p,b,k;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    label: 'Checkbox',
    checked: false,
    size: 'm'
  }
}`,...(k=(b=t.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var f,y,C;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(C=(y=l.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var j,g,v;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(v=(g=r.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var z,S,_;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(_=(S=d.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var D,N,I;n.parameters={...n.parameters,docs:{...(D=n.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(false);
    return <Checkbox label={\`Click me (\${checked ? 'checked' : 'unchecked'})\`} checked={checked} onChange={setChecked} />;
  }
}`,...(I=(N=n.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};const P=["Default","AllStates","NoLabel","Sizes","Interactive"];export{l as AllStates,t as Default,n as Interactive,r as NoLabel,d as Sizes,P as __namedExportsOrder,A as default};
