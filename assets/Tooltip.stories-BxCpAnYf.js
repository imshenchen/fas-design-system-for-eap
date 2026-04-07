import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as b}from"./index-BioFo8Zg.js";import{B as r}from"./Button-iDd4ESB6.js";import"./index-yBjzXJbu.js";const o=({title:t,placement:x="top",children:n,disabled:y=!1,className:T})=>{const[j,i]=b.useState(!1);return y||!t?n:e.jsxs("span",{className:["fas-tooltip-root",T].filter(Boolean).join(" "),onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),onFocus:()=>i(!0),onBlur:()=>i(!1),children:[n,j&&e.jsxs("span",{className:["fas-tooltip-popup",`fas-tooltip-popup--${x}`].join(" "),role:"tooltip",children:[t,e.jsx("span",{className:"fas-tooltip-popup__arrow","aria-hidden":!0})]})]})};o.displayName="Tooltip";o.__docgenInfo={description:"",methods:[],displayName:"Tooltip",props:{title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},placement:{required:!1,tsType:{name:"union",raw:"'top' | 'bottom' | 'left' | 'right'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"},{name:"literal",value:"'right'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactElement",raw:"React.ReactElement"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const k={title:"Feedback/Tooltip",component:o,tags:["autodocs"],argTypes:{placement:{control:"select",options:["top","bottom","left","right"]}}},a={render:()=>e.jsx("div",{style:{padding:60,display:"inline-block"},children:e.jsx(o,{title:"This is a tooltip",children:e.jsx(r,{variant:"outlined",children:"Hover me"})})})},l={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,padding:80},children:["top","bottom","left","right"].map(t=>e.jsx("div",{style:{display:"flex",justifyContent:"center"},children:e.jsx(o,{title:`Placement: ${t}`,placement:t,children:e.jsx(r,{variant:"outlined",size:"s",children:t})})},t))})},s={render:()=>e.jsx("div",{style:{padding:80,display:"inline-block"},children:e.jsx(o,{title:"This is a much longer tooltip text that will wrap onto multiple lines when it exceeds the max width.",children:e.jsx(r,{variant:"outlined",children:"Long tooltip"})})})};var p,d,c;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 60,
    display: 'inline-block'
  }}>
      <Tooltip title="This is a tooltip">
        <Button variant="outlined">Hover me</Button>
      </Tooltip>
    </div>
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,u,f;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 48,
    padding: 80
  }}>
      {(['top', 'bottom', 'left', 'right'] as const).map(placement => <div key={placement} style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
          <Tooltip title={\`Placement: \${placement}\`} placement={placement}>
            <Button variant="outlined" size="s">{placement}</Button>
          </Tooltip>
        </div>)}
    </div>
}`,...(f=(u=l.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var h,g,v;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 80,
    display: 'inline-block'
  }}>
      <Tooltip title="This is a much longer tooltip text that will wrap onto multiple lines when it exceeds the max width.">
        <Button variant="outlined">Long tooltip</Button>
      </Tooltip>
    </div>
}`,...(v=(g=s.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};const E=["Default","AllPlacements","LongText"];export{l as AllPlacements,a as Default,s as LongText,E as __namedExportsOrder,k as default};
