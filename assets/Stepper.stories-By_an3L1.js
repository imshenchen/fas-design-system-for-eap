import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as d}from"./index-BioFo8Zg.js";import{S as r,a as t}from"./Stepper-DXKUK0lM.js";import{B as l}from"./Button-iDd4ESB6.js";import"./index-yBjzXJbu.js";const D={title:"Core/Navigation/Stepper",component:r,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},labelPosition:{control:"select",options:["bottom","right"]},activeStep:{control:{type:"range",min:0,max:3}}}},o={render:()=>{const[s,a]=d.useState(1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs(r,{activeStep:s,children:[e.jsx(t,{label:"Select template"}),e.jsx(t,{label:"Configure settings"}),e.jsx(t,{label:"Review & submit"}),e.jsx(t,{label:"Done"})]}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(l,{size:"s",variant:"outlined",onClick:()=>a(i=>Math.max(0,i-1)),children:"Back"}),e.jsx(l,{size:"s",variant:"contained",onClick:()=>a(i=>Math.min(4,i+1)),children:"Next"})]})]})}},n={name:'Horizontal — labelPosition="right"',render:()=>{const[s,a]=d.useState(1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs(r,{activeStep:s,labelPosition:"right",children:[e.jsx(t,{label:"Select template"}),e.jsx(t,{label:"Configure settings"}),e.jsx(t,{label:"Review & submit"}),e.jsx(t,{label:"Done"})]}),e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(l,{size:"s",variant:"outlined",onClick:()=>a(i=>Math.max(0,i-1)),children:"Back"}),e.jsx(l,{size:"s",variant:"contained",onClick:()=>a(i=>Math.min(4,i+1)),children:"Next"})]})]})}},c={render:()=>{const[s,a]=d.useState(1);return e.jsxs("div",{style:{display:"flex",gap:24},children:[e.jsxs(r,{activeStep:s,orientation:"vertical",style:{width:220},children:[e.jsx(t,{label:"Upload file",description:"Select CSV or Excel"}),e.jsx(t,{label:"Map columns",description:"Match data fields"}),e.jsx(t,{label:"Validate",optional:!0}),e.jsx(t,{label:"Import"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(l,{size:"s",variant:"outlined",onClick:()=>a(i=>Math.max(0,i-1)),children:"Back"}),e.jsx(l,{size:"s",variant:"contained",onClick:()=>a(i=>Math.min(4,i+1)),children:"Next"})]})]})}},p={render:()=>e.jsxs(r,{activeStep:2,children:[e.jsx(t,{label:"Step 1"}),e.jsx(t,{label:"Step 2 — Error",error:!0}),e.jsx(t,{label:"Step 3"})]})};var x,v,m;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(m=(v=o.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var u,S,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: 'Horizontal — labelPosition="right"',
  render: () => {
    const [active, setActive] = useState(1);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }}>
        <Stepper activeStep={active} labelPosition="right">
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
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var h,g,j;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(j=(g=c.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var f,y,B;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Stepper activeStep={2}>
      <Step label="Step 1" />
      <Step label="Step 2 — Error" error />
      <Step label="Step 3" />
    </Stepper>
}`,...(B=(y=p.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};const E=["Horizontal","HorizontalLabelRight","Vertical","WithError"];export{o as Horizontal,n as HorizontalLabelRight,c as Vertical,p as WithError,E as __namedExportsOrder,D as default};
