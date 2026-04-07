import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r,R as S}from"./index-BioFo8Zg.js";import"./index-yBjzXJbu.js";const n=({title:h,children:x,defaultExpanded:A=!1,disabled:i=!1,expanded:d,onChange:s,className:a})=>{const o=d!==void 0,[y,g]=r.useState(A),t=o?d:y,l=r.useRef(null),[v,m]=r.useState(t?void 0:0);r.useEffect(()=>{if(l.current)if(t){m(l.current.scrollHeight);const p=setTimeout(()=>m(void 0),250);return()=>clearTimeout(p)}else m(l.current.scrollHeight),requestAnimationFrame(()=>m(0))},[t]);const w=()=>{if(i)return;const p=!t;o||g(p),s==null||s(p)};return e.jsxs("div",{className:["fas-accordion-item",t&&"fas-accordion-item--expanded",i&&"fas-accordion-item--disabled",a].filter(Boolean).join(" "),children:[e.jsxs("button",{type:"button",className:"fas-accordion-item__header",onClick:w,disabled:i,"aria-expanded":t,children:[e.jsx("span",{className:"fas-accordion-item__title",children:h}),e.jsx("span",{className:"material-symbols-outlined fas-accordion-item__chevron","aria-hidden":!0,children:t?"expand_less":"expand_more"})]}),e.jsx("div",{className:"fas-accordion-item__content-wrapper",style:{height:v===void 0?"auto":v,overflow:"hidden"},children:e.jsx("div",{ref:l,className:"fas-accordion-item__content",children:x})})]})};n.displayName="AccordionItem";const c=({children:h,multiple:x=!1,className:A})=>{const[i,d]=r.useState(new Set),s=S.Children.map(h,(a,o)=>S.isValidElement(a)?S.cloneElement(a,{expanded:i.has(o),onChange:y=>{d(g=>{const t=x?new Set(g):new Set;return y?t.add(o):t.delete(o),t})}}):a);return e.jsx("div",{className:["fas-accordion",A].filter(Boolean).join(" "),children:s})};c.displayName="Accordion";n.__docgenInfo={description:"",methods:[],displayName:"AccordionItem",props:{title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},defaultExpanded:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},expanded:{required:!1,tsType:{name:"boolean"},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(expanded: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"expanded"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"Accordion",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const q={title:"Layout/Accordion",component:c,tags:["autodocs"]},u={render:()=>e.jsx("div",{style:{width:400},children:e.jsxs(c,{children:[e.jsx(n,{title:"Panel 1 — What is FAS Design System?",children:"FAS Design System is a component library for Delta EAP applications, providing consistent UI components with light and dark mode support."}),e.jsx(n,{title:"Panel 2 — How to use components?",defaultExpanded:!0,children:"Import components from the package and use them in your React application. All components support theming via CSS custom properties."}),e.jsx(n,{title:"Panel 3 — Disabled example",disabled:!0,children:"This content is not accessible because the item is disabled."})]})})},f={render:()=>e.jsx("div",{style:{width:400},children:e.jsxs(c,{multiple:!0,children:[e.jsx(n,{title:"Section A",children:"Content A"}),e.jsx(n,{title:"Section B",children:"Content B"}),e.jsx(n,{title:"Section C",children:"Content C"})]})})};var I,b,j;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 400
  }}>
      <Accordion>
        <AccordionItem title="Panel 1 — What is FAS Design System?">
          FAS Design System is a component library for Delta EAP applications, providing
          consistent UI components with light and dark mode support.
        </AccordionItem>
        <AccordionItem title="Panel 2 — How to use components?" defaultExpanded>
          Import components from the package and use them in your React application.
          All components support theming via CSS custom properties.
        </AccordionItem>
        <AccordionItem title="Panel 3 — Disabled example" disabled>
          This content is not accessible because the item is disabled.
        </AccordionItem>
      </Accordion>
    </div>
}`,...(j=(b=u.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var N,R,_;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    width: 400
  }}>
      <Accordion multiple>
        <AccordionItem title="Section A">Content A</AccordionItem>
        <AccordionItem title="Section B">Content B</AccordionItem>
        <AccordionItem title="Section C">Content C</AccordionItem>
      </Accordion>
    </div>
}`,...(_=(R=f.parameters)==null?void 0:R.docs)==null?void 0:_.source}}};const D=["Default","Multiple"];export{u as Default,f as Multiple,D as __namedExportsOrder,q as default};
