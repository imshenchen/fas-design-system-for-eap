import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const a=({value:r=0,variant:o="indeterminate",color:j="primary",thickness:S=4,className:T,style:P})=>{const l=Math.min(100,Math.max(0,r));return e.jsx("div",{role:"progressbar","aria-valuenow":o==="determinate"?l:void 0,"aria-valuemin":0,"aria-valuemax":100,className:["fas-progress",`fas-progress--${o}`,`fas-progress--${j}`,T].filter(Boolean).join(" "),style:{height:S,...P},children:e.jsx("span",{className:"fas-progress__bar",style:o==="determinate"?{width:`${l}%`}:void 0})})};a.displayName="Progress";a.__docgenInfo={description:"",methods:[],displayName:"Progress",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},variant:{required:!1,tsType:{name:"union",raw:"'determinate' | 'indeterminate'",elements:[{name:"literal",value:"'determinate'"},{name:"literal",value:"'indeterminate'"}]},description:"",defaultValue:{value:"'indeterminate'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'success' | 'warning' | 'error'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'error'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},thickness:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"4",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const z={title:"Core/Feedback/Progress",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["determinate","indeterminate"]},color:{control:"select",options:["primary","success","warning","error"]},value:{control:{type:"range",min:0,max:100}}}},s={args:{variant:"indeterminate",color:"primary"}},t={args:{variant:"determinate",value:60,color:"primary"}},i={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:16,width:300},children:[0,25,50,75,100].map(r=>e.jsxs("div",{children:[e.jsxs("div",{style:{fontSize:12,marginBottom:4},children:[r,"%"]}),e.jsx(a,{variant:"determinate",value:r})]},r))})},n={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:12,width:300},children:["primary","success","warning","error"].map(r=>e.jsxs("div",{children:[e.jsx("div",{style:{fontSize:12,marginBottom:4,textTransform:"capitalize"},children:r}),e.jsx(a,{variant:"determinate",value:65,color:r})]},r))})};var m,d,c;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: 'indeterminate',
    color: 'primary'
  }
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,u,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: 'determinate',
    value: 60,
    color: 'primary'
  }
}`,...(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var g,y,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    width: 300
  }}>
      {[0, 25, 50, 75, 100].map(v => <div key={v}>
          <div style={{
        fontSize: 12,
        marginBottom: 4
      }}>{v}%</div>
          <Progress variant="determinate" value={v} />
        </div>)}
    </div>
}`,...(f=(y=i.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var x,h,w;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: 300
  }}>
      {(['primary', 'success', 'warning', 'error'] as const).map(color => <div key={color}>
          <div style={{
        fontSize: 12,
        marginBottom: 4,
        textTransform: 'capitalize'
      }}>{color}</div>
          <Progress variant="determinate" value={65} color={color} />
        </div>)}
    </div>
}`,...(w=(h=n.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const D=["Indeterminate","Determinate","AllValues","AllColors"];export{n as AllColors,i as AllValues,t as Determinate,s as Indeterminate,D as __namedExportsOrder,z as default};
