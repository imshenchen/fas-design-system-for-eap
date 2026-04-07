import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as m}from"./index-BioFo8Zg.js";import"./index-yBjzXJbu.js";const a=({checked:s=!1,disabled:t=!1,onChange:r,label:i,className:b,style:w})=>{const n=m.useId();return e.jsxs("label",{htmlFor:n,className:["fas-switch",s&&"fas-switch--on",t&&"fas-switch--disabled",b].filter(Boolean).join(" "),style:w,children:[e.jsx("input",{id:n,type:"checkbox",role:"switch",checked:s,disabled:t,onChange:y=>r==null?void 0:r(y.target.checked),className:"fas-switch__input","aria-checked":s}),e.jsx("span",{className:"fas-switch__track","aria-hidden":!0,children:e.jsx("span",{className:"fas-switch__thumb"})}),i&&e.jsx("span",{className:"fas-switch__label",children:i})]})};a.displayName="Switch";a.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const O={title:"Data Entry/Switch",component:a,tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"}}},l={args:{checked:!1}},c={render:()=>{const[s,t]=m.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{checked:s,onChange:t,label:s?"On":"Off"}),e.jsx(a,{checked:!0,label:"Always On"}),e.jsx(a,{checked:!1,label:"Always Off"}),e.jsx(a,{checked:!0,disabled:!0,label:"Disabled On"}),e.jsx(a,{checked:!1,disabled:!0,label:"Disabled Off"})]})}};var o,d,f;l.parameters={...l.parameters,docs:{...(o=l.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    checked: false
  }
}`,...(f=(d=l.parameters)==null?void 0:d.docs)==null?void 0:f.source}}};var p,u,h;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [on, setOn] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
        <Switch checked={on} onChange={setOn} label={on ? 'On' : 'Off'} />
        <Switch checked={true} label="Always On" />
        <Switch checked={false} label="Always Off" />
        <Switch checked={true} disabled label="Disabled On" />
        <Switch checked={false} disabled label="Disabled Off" />
      </div>;
  }
}`,...(h=(u=c.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const g=["Default","AllStates"];export{c as AllStates,l as Default,g as __namedExportsOrder,O as default};
