import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as i}from"./index-BioFo8Zg.js";import"./index-yBjzXJbu.js";const r=({value:s=0,min:a=0,max:o=100,step:V=1,disabled:u=!1,onChange:d,showValue:b=!1,className:w,style:j})=>{const _=i.useId(),c=(s-a)/(o-a)*100;return e.jsxs("div",{className:["fas-slider",u&&"fas-slider--disabled",w].filter(Boolean).join(" "),style:j,children:[b&&e.jsx("span",{className:"fas-slider__value",children:s}),e.jsxs("div",{className:"fas-slider__track-wrapper",children:[e.jsx("div",{className:"fas-slider__track",children:e.jsx("div",{className:"fas-slider__fill",style:{width:`${c}%`}})}),e.jsx("input",{id:_,type:"range",className:"fas-slider__input",min:a,max:o,step:V,value:s,disabled:u,onChange:N=>d==null?void 0:d(Number(N.target.value)),style:{"--slider-fill":`${c}%`}})]})]})};r.displayName="Slider";r.__docgenInfo={description:"",methods:[],displayName:"Slider",props:{value:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"100",computed:!1}},step:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: number) => void",signature:{arguments:[{type:{name:"number"},name:"value"}],return:{name:"void"}}},description:""},showValue:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const D={title:"Data Entry/Slider",component:r,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100}},disabled:{control:"boolean"},showValue:{control:"boolean"}}},t={render:()=>{const[s,a]=i.useState(40);return e.jsx("div",{style:{width:300},children:e.jsx(r,{value:s,onChange:a,showValue:!0})})}},l={render:()=>e.jsx("div",{style:{width:300},children:e.jsx(r,{value:60,disabled:!0})})},n={render:()=>{const[s,a]=i.useState(5);return e.jsx("div",{style:{width:300},children:e.jsx(r,{value:s,min:0,max:10,step:1,onChange:a,showValue:!0})})}};var p,m,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => {
    const [v, setV] = useState(40);
    return <div style={{
      width: 300
    }}><Slider value={v} onChange={setV} showValue /></div>;
  }
}`,...(f=(m=t.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var v,y,h;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 300
  }}><Slider value={60} disabled /></div>
}`,...(h=(y=l.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var x,g,S;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [v, setV] = useState(5);
    return <div style={{
      width: 300
    }}>
        <Slider value={v} min={0} max={10} step={1} onChange={setV} showValue />
      </div>;
  }
}`,...(S=(g=n.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};const R=["Default","Disabled","CustomRange"];export{n as CustomRange,t as Default,l as Disabled,R as __namedExportsOrder,D as default};
