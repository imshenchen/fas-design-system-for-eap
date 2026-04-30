import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as f}from"./index-BioFo8Zg.js";import{T as h,a}from"./Tab-dtb0v2E7.js";import"./index-yBjzXJbu.js";const w={title:"Core/Navigation/Tab",component:h,tags:["autodocs"],argTypes:{variant:{control:"select",options:["line","filled"]},size:{control:"select",options:["m","s"]}}};function l(n){const[C,z]=f.useState(n.value??"tab1");return e.jsx(h,{...n,value:C,onChange:z,children:n.children})}const t={render:()=>e.jsxs(l,{value:"tab1",onChange:()=>{},variant:"line",size:"m",children:[e.jsx(a,{value:"tab1",label:"Overview"}),e.jsx(a,{value:"tab2",label:"Details"}),e.jsx(a,{value:"tab3",label:"History"}),e.jsx(a,{value:"tab4",label:"Settings",disabled:!0})]})},s={render:()=>e.jsxs(l,{value:"tab1",onChange:()=>{},variant:"filled",size:"m",children:[e.jsx(a,{value:"tab1",label:"Overview"}),e.jsx(a,{value:"tab2",label:"Details"}),e.jsx(a,{value:"tab3",label:"History"}),e.jsx(a,{value:"tab4",label:"Settings",disabled:!0})]})},r={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:24},children:[e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#727171"},children:"Line — size s"}),e.jsxs(l,{value:"tab1",onChange:()=>{},variant:"line",size:"s",children:[e.jsx(a,{value:"tab1",label:"Overview"}),e.jsx(a,{value:"tab2",label:"Details"}),e.jsx(a,{value:"tab3",label:"History"})]})]}),e.jsxs("div",{children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"#727171"},children:"Filled — size s"}),e.jsxs(l,{value:"tab1",onChange:()=>{},variant:"filled",size:"s",children:[e.jsx(a,{value:"tab1",label:"Overview"}),e.jsx(a,{value:"tab2",label:"Details"}),e.jsx(a,{value:"tab3",label:"History"})]})]})]})},i={render:()=>e.jsxs(l,{value:"tab1",onChange:()=>{},variant:"line",size:"m",children:[e.jsx(a,{value:"tab1",label:"Dashboard",icon:"📊"}),e.jsx(a,{value:"tab2",label:"Reports",icon:"📄"}),e.jsx(a,{value:"tab3",label:"Users",icon:"👥"}),e.jsx(a,{value:"tab4",label:"Locked",icon:"🔒",disabled:!0})]})};var o,b,v;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <ControlledTabs value="tab1" onChange={() => {}} variant="line" size="m">
      <Tab value="tab1" label="Overview" />
      <Tab value="tab2" label="Details" />
      <Tab value="tab3" label="History" />
      <Tab value="tab4" label="Settings" disabled />
    </ControlledTabs>
}`,...(v=(b=t.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var d,c,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <ControlledTabs value="tab1" onChange={() => {}} variant="filled" size="m">
      <Tab value="tab1" label="Overview" />
      <Tab value="tab2" label="Details" />
      <Tab value="tab3" label="History" />
      <Tab value="tab4" label="Settings" disabled />
    </ControlledTabs>
}`,...(u=(c=s.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,x,p;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(p=(x=r.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var T,j,g;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <ControlledTabs value="tab1" onChange={() => {}} variant="line" size="m">
      <Tab value="tab1" label="Dashboard" icon="📊" />
      <Tab value="tab2" label="Reports" icon="📄" />
      <Tab value="tab3" label="Users" icon="👥" />
      <Tab value="tab4" label="Locked" icon="🔒" disabled />
    </ControlledTabs>
}`,...(g=(j=i.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};const H=["LineVariant","FilledVariant","SmallSize","WithIcons"];export{s as FilledVariant,t as LineVariant,r as SmallSize,i as WithIcons,H as __namedExportsOrder,w as default};
