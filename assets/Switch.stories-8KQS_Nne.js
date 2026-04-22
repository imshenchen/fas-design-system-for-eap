import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as l,R as S}from"./index-BioFo8Zg.js";import"./index-yBjzXJbu.js";const a=({checked:s=!1,disabled:t=!1,onChange:c,label:o,className:x,style:w})=>{const i=l.useId();return e.jsxs("label",{htmlFor:i,className:["fas-switch",s&&"fas-switch--on",t&&"fas-switch--disabled",x].filter(Boolean).join(" "),style:w,children:[e.jsx("input",{id:i,type:"checkbox",role:"switch",checked:s,disabled:t,onChange:y=>c==null?void 0:c(y.target.checked),className:"fas-switch__input","aria-checked":s}),e.jsx("span",{className:"fas-switch__track","aria-hidden":!0,children:e.jsx("span",{className:"fas-switch__thumb"})}),o&&e.jsx("span",{className:"fas-switch__label",children:o})]})};a.displayName="Switch";a.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const _={title:"Data Entry/Switch",component:a,tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"}}},r={args:{checked:!1,disabled:!1,label:"Option"},render:s=>{const[t,c]=l.useState(!!s.checked);return S.useEffect(()=>{c(!!s.checked)},[s.checked]),e.jsx(a,{...s,checked:t,onChange:c})}},n={render:()=>{const[s,t]=l.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{checked:s,onChange:t,label:s?"On":"Off"}),e.jsx(a,{checked:!1,label:"未選取狀態"}),e.jsx(a,{checked:!1,disabled:!0,label:"未選取狀態 / 不可修改"}),e.jsx(a,{checked:!0,label:"選取狀態"}),e.jsx(a,{checked:!0,disabled:!0,label:"選取狀態 / 不可修改"})]})}};var d,h,p,u,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    label: 'Option'
  },
  render: args => {
    const [on, setOn] = useState(!!args.checked);
    // Keep story state in sync when the \`checked\` control is flipped
    React.useEffect(() => {
      setOn(!!args.checked);
    }, [args.checked]);
    return <Switch {...args} checked={on} onChange={setOn} />;
  }
}`,...(p=(h=r.parameters)==null?void 0:h.docs)==null?void 0:p.source},description:{story:"Fully interactive: click or use the `checked` control — either toggles the state.",...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.description}}};var m,b,k;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const [on, setOn] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
        <Switch checked={on} onChange={setOn} label={on ? 'On' : 'Off'} />
        <Switch checked={false} label="未選取狀態" />
        <Switch checked={false} disabled label="未選取狀態 / 不可修改" />
        <Switch checked={true} label="選取狀態" />
        <Switch checked={true} disabled label="選取狀態 / 不可修改" />
      </div>;
  }
}`,...(k=(b=n.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};const N=["Default","AllStates"];export{n as AllStates,r as Default,N as __namedExportsOrder,_ as default};
