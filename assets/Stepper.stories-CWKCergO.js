import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as v,r as C}from"./index-BioFo8Zg.js";import{B as m}from"./Button-iDd4ESB6.js";import"./index-yBjzXJbu.js";const t=({label:r,description:s,error:a=!1,optional:u=!1,_active:f=!1,_completed:o=!1,_isLast:n=!1})=>{const i=a?"error":o?"completed":f?"active":"pending";return e.jsxs("div",{className:["fas-step",`fas-step--${i}`].join(" "),children:[e.jsxs("div",{className:"fas-step__indicator-row",children:[e.jsxs("div",{className:"fas-step__circle",children:[i==="completed"&&e.jsx("span",{className:"material-symbols-outlined","aria-hidden":!0,children:"check"}),i==="error"&&e.jsx("span",{className:"material-symbols-outlined","aria-hidden":!0,children:"priority_high"}),(i==="active"||i==="pending")&&e.jsx("span",{className:"fas-step__number"})]}),!n&&e.jsx("div",{className:"fas-step__connector"})]}),e.jsxs("div",{className:"fas-step__content",children:[e.jsx("div",{className:"fas-step__label",children:r}),u&&e.jsx("div",{className:"fas-step__optional",children:"Optional"}),s&&e.jsx("div",{className:"fas-step__description",children:s})]})]})};t.displayName="Step";const l=({activeStep:r,orientation:s="horizontal",children:a,className:u,style:f})=>{const o=v.Children.toArray(a);return e.jsx("div",{className:["fas-stepper",`fas-stepper--${s}`,u].filter(Boolean).join(" "),style:f,children:o.map((n,i)=>v.isValidElement(n)?v.cloneElement(n,{_index:i,_active:i===r,_completed:i<r,_isLast:i===o.length-1}):n)})};l.displayName="Stepper";t.__docgenInfo={description:"",methods:[],displayName:"Step",props:{label:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},optional:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},completed:{required:!1,tsType:{name:"boolean"},description:"Controlled completed state; otherwise inferred from Stepper.activeStep"},_index:{required:!1,tsType:{name:"number"},description:"Injected by Stepper"},_active:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},_completed:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},_isLast:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};l.__docgenInfo={description:"",methods:[],displayName:"Stepper",props:{activeStep:{required:!0,tsType:{name:"number"},description:""},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const k={title:"Navigation/Stepper",component:l,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},activeStep:{control:{type:"range",min:0,max:3}}}},p={render:()=>{const[r,s]=C.useState(1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs(l,{activeStep:r,children:[e.jsx(t,{label:"Select template"}),e.jsx(t,{label:"Configure settings"}),e.jsx(t,{label:"Review & submit"}),e.jsx(t,{label:"Done"})]}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(m,{size:"s",variant:"outlined",onClick:()=>s(a=>Math.max(0,a-1)),children:"Back"}),e.jsx(m,{size:"s",variant:"contained",onClick:()=>s(a=>Math.min(4,a+1)),children:"Next"})]})]})}},c={render:()=>{const[r,s]=C.useState(1);return e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsxs(l,{activeStep:r,orientation:"vertical",style:{width:220},children:[e.jsx(t,{label:"Upload file",description:"Select CSV or Excel"}),e.jsx(t,{label:"Map columns",description:"Match data fields"}),e.jsx(t,{label:"Validate",optional:!0}),e.jsx(t,{label:"Import"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(m,{size:"s",variant:"outlined",onClick:()=>s(a=>Math.max(0,a-1)),children:"Back"}),e.jsx(m,{size:"s",variant:"contained",onClick:()=>s(a=>Math.min(4,a+1)),children:"Next"})]})]})}},d={render:()=>e.jsxs(l,{activeStep:2,children:[e.jsx(t,{label:"Step 1"}),e.jsx(t,{label:"Step 2 — Error",error:!0}),e.jsx(t,{label:"Step 3"})]})};var x,S,h;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState(1);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
        <Stepper activeStep={active}>
          <Step label="Select template" />
          <Step label="Configure settings" />
          <Step label="Review & submit" />
          <Step label="Done" />
        </Stepper>
        <div style={{
        display: 'flex',
        gap: 8
      }}>
          <Button size="s" variant="outlined" onClick={() => setActive(p => Math.max(0, p - 1))}>Back</Button>
          <Button size="s" variant="contained" onClick={() => setActive(p => Math.min(4, p + 1))}>Next</Button>
        </div>
      </div>;
  }
}`,...(h=(S=p.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var y,j,b;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => {
    const [active, setActive] = useState(1);
    return <div style={{
      display: 'flex',
      gap: 24
    }}>
        <Stepper activeStep={active} orientation="vertical" style={{
        width: 220
      }}>
          <Step label="Upload file" description="Select CSV or Excel" />
          <Step label="Map columns" description="Match data fields" />
          <Step label="Validate" optional />
          <Step label="Import" />
        </Stepper>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8
      }}>
          <Button size="s" variant="outlined" onClick={() => setActive(p => Math.max(0, p - 1))}>Back</Button>
          <Button size="s" variant="contained" onClick={() => setActive(p => Math.min(4, p + 1))}>Next</Button>
        </div>
      </div>;
  }
}`,...(b=(j=c.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var _,g,N;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => <Stepper activeStep={2}>
      <Step label="Step 1" />
      <Step label="Step 2 — Error" error />
      <Step label="Step 3" />
    </Stepper>
}`,...(N=(g=d.parameters)==null?void 0:g.docs)==null?void 0:N.source}}};const V=["Horizontal","Vertical","WithError"];export{p as Horizontal,c as Vertical,d as WithError,V as __namedExportsOrder,k as default};
