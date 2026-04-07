import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as V,r as A}from"./index-BioFo8Zg.js";import"./index-yBjzXJbu.js";const _=V.createContext(null);function W(){const l=V.useContext(_);if(!l)throw new Error("<Tab> must be used inside <Tabs>");return l}const f=({value:l,onChange:i,children:t,variant:r="line",size:c="m",className:g})=>{const x={value:l,onChange:i,variant:r,size:c};return e.jsx(_.Provider,{value:x,children:e.jsx("div",{role:"tablist",className:["fas-tabs",`fas-tabs--${r}`,`fas-tabs--${c}`,g].filter(Boolean).join(" "),style:{display:"flex",flexDirection:"row",alignItems:"stretch",borderBottom:r==="line"?"1px solid var(--divider)":"none",gap:r==="filled"?4:0},children:t})})};f.displayName="Tabs";const a=({value:l,label:i,disabled:t=!1,icon:r,className:c})=>{const{value:g,onChange:x,variant:d,size:y}=W(),n=l===g,H=y==="s"?36:48,I=y==="s"?"0 12px":"0 16px",L={color:"var(--primary)",borderBottom:"2px solid var(--primary)",marginBottom:-1,fontWeight:600},T={color:"var(--text-medium)",borderBottom:"2px solid transparent",marginBottom:-1},E={backgroundColor:"var(--primary)",color:"#ffffff",borderRadius:4,fontWeight:600},h={backgroundColor:"var(--bg-container-low)",color:"var(--text-body)",borderRadius:4},F={color:"var(--text-disabled)",cursor:"not-allowed",pointerEvents:"none"};let b={};return t?b={...F,...d==="filled"?h:T,color:"var(--text-disabled)"}:d==="line"?b=n?L:T:b=n?E:h,e.jsxs("button",{role:"tab",type:"button","aria-selected":n,"aria-disabled":t,disabled:t,tabIndex:n?0:-1,onClick:()=>!t&&x(l),className:["fas-tab",n&&"fas-tab--active",t&&"fas-tab--disabled",c].filter(Boolean).join(" "),style:{display:"inline-flex",alignItems:"center",justifyContent:"center",gap:6,height:H,padding:I,fontSize:14,fontFamily:"inherit",border:"none",cursor:t?"not-allowed":"pointer",background:"transparent",transition:"background 0.15s, color 0.15s",whiteSpace:"nowrap",...b},onMouseEnter:s=>{t||n||(s.currentTarget.style.backgroundColor="var(--comp-hover)",d==="line"&&(s.currentTarget.style.color="var(--text-body)"))},onMouseLeave:s=>{t||n||(d==="line"?(s.currentTarget.style.backgroundColor="transparent",s.currentTarget.style.color="var(--text-medium)"):(s.currentTarget.style.backgroundColor="var(--bg-container-low)",s.currentTarget.style.color="var(--text-body)"))},children:[r&&e.jsx("span",{className:"fas-tab__icon","aria-hidden":!0,children:r}),e.jsx("span",{className:"fas-tab__label",children:i})]})};a.displayName="Tab";f.__docgenInfo={description:"",methods:[],displayName:"Tabs",props:{value:{required:!0,tsType:{name:"string"},description:"Currently active tab value"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Called when the active tab changes"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'line' | 'filled'",elements:[{name:"literal",value:"'line'"},{name:"literal",value:"'filled'"}]},description:"Visual style — default 'line'",defaultValue:{value:"'line'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'m' | 's'",elements:[{name:"literal",value:"'m'"},{name:"literal",value:"'s'"}]},description:"Height size — default 'm'",defaultValue:{value:"'m'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{value:{required:!0,tsType:{name:"string"},description:"Unique identifier; compared against Tabs.value"},label:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Tab label content"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disables interaction",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Optional icon rendered before the label"},className:{required:!1,tsType:{name:"string"},description:""}}};const P={title:"Navigation/Tab",component:f,tags:["autodocs"],argTypes:{variant:{control:"select",options:["line","filled"]},size:{control:"select",options:["m","s"]}}};function o(l){const[i,t]=A.useState(l.value??"tab1");return e.jsx(f,{...l,value:i,onChange:t,children:l.children})}const u={render:()=>e.jsxs(o,{value:"tab1",onChange:()=>{},variant:"line",size:"m",children:[e.jsx(a,{value:"tab1",label:"Overview"}),e.jsx(a,{value:"tab2",label:"Details"}),e.jsx(a,{value:"tab3",label:"History"}),e.jsx(a,{value:"tab4",label:"Settings",disabled:!0})]})},v={render:()=>e.jsxs(o,{value:"tab1",onChange:()=>{},variant:"filled",size:"m",children:[e.jsx(a,{value:"tab1",label:"Overview"}),e.jsx(a,{value:"tab2",label:"Details"}),e.jsx(a,{value:"tab3",label:"History"}),e.jsx(a,{value:"tab4",label:"Settings",disabled:!0})]})},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#727171"},children:"Line — size s"}),e.jsxs(o,{value:"tab1",onChange:()=>{},variant:"line",size:"s",children:[e.jsx(a,{value:"tab1",label:"Overview"}),e.jsx(a,{value:"tab2",label:"Details"}),e.jsx(a,{value:"tab3",label:"History"})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#727171"},children:"Filled — size s"}),e.jsxs(o,{value:"tab1",onChange:()=>{},variant:"filled",size:"s",children:[e.jsx(a,{value:"tab1",label:"Overview"}),e.jsx(a,{value:"tab2",label:"Details"}),e.jsx(a,{value:"tab3",label:"History"})]})]})]})},p={render:()=>e.jsxs(o,{value:"tab1",onChange:()=>{},variant:"line",size:"m",children:[e.jsx(a,{value:"tab1",label:"Dashboard",icon:"📊"}),e.jsx(a,{value:"tab2",label:"Reports",icon:"📄"}),e.jsx(a,{value:"tab3",label:"Users",icon:"👥"}),e.jsx(a,{value:"tab4",label:"Locked",icon:"🔒",disabled:!0})]})};var j,C,S;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <ControlledTabs value="tab1" onChange={() => {}} variant="line" size="m">
      <Tab value="tab1" label="Overview" />
      <Tab value="tab2" label="Details" />
      <Tab value="tab3" label="History" />
      <Tab value="tab4" label="Settings" disabled />
    </ControlledTabs>
}`,...(S=(C=u.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var w,z,R;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <ControlledTabs value="tab1" onChange={() => {}} variant="filled" size="m">
      <Tab value="tab1" label="Overview" />
      <Tab value="tab2" label="Details" />
      <Tab value="tab3" label="History" />
      <Tab value="tab4" label="Settings" disabled />
    </ControlledTabs>
}`,...(R=(z=v.parameters)==null?void 0:z.docs)==null?void 0:R.source}}};var N,D,q;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#727171'
      }}>Line — size s</p>
        <ControlledTabs value="tab1" onChange={() => {}} variant="line" size="s">
          <Tab value="tab1" label="Overview" />
          <Tab value="tab2" label="Details" />
          <Tab value="tab3" label="History" />
        </ControlledTabs>
      </div>
      <div>
        <p style={{
        marginBottom: 8,
        fontSize: 12,
        color: '#727171'
      }}>Filled — size s</p>
        <ControlledTabs value="tab1" onChange={() => {}} variant="filled" size="s">
          <Tab value="tab1" label="Overview" />
          <Tab value="tab2" label="Details" />
          <Tab value="tab3" label="History" />
        </ControlledTabs>
      </div>
    </div>
}`,...(q=(D=m.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};var B,k,O;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <ControlledTabs value="tab1" onChange={() => {}} variant="line" size="m">
      <Tab value="tab1" label="Dashboard" icon="📊" />
      <Tab value="tab2" label="Reports" icon="📄" />
      <Tab value="tab3" label="Users" icon="👥" />
      <Tab value="tab4" label="Locked" icon="🔒" disabled />
    </ControlledTabs>
}`,...(O=(k=p.parameters)==null?void 0:k.docs)==null?void 0:O.source}}};const G=["LineVariant","FilledVariant","SmallSize","WithIcons"];export{v as FilledVariant,u as LineVariant,m as SmallSize,p as WithIcons,G as __namedExportsOrder,P as default};
