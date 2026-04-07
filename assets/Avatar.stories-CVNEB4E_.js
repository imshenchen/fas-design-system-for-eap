import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{A as t}from"./Avatar-C_9irKxG.js";import"./index-yBjzXJbu.js";const x={title:"Foundations/Avatar",component:t,tags:["autodocs"],argTypes:{type:{control:"select",options:["primary","secondary","photo"]},size:{control:"select",options:["l","m","s"]}}},a={args:{type:"primary",size:"m",initials:"AB"}},r={render:()=>e.jsx("div",{style:{display:"flex",flexDirection:"column",gap:24},children:["l","m","s"].map(s=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx("span",{style:{width:60,fontSize:12,color:"#727171"},children:s.toUpperCase()}),e.jsx(t,{type:"primary",size:s,initials:"AB"}),e.jsx(t,{type:"secondary",size:s,initials:"CD"}),e.jsx(t,{type:"photo",size:s,src:"https://i.pravatar.cc/150?img=3",alt:"User"}),e.jsx(t,{type:"photo",size:s,alt:"No photo"})]},s))})};var o,i,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    size: 'm',
    initials: 'AB'
  }
}`,...(p=(i=a.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var l,n,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 24
  }}>
      {(['l', 'm', 's'] as const).map(size => <div key={size} style={{
      display: 'flex',
      gap: 16,
      alignItems: 'center'
    }}>
          <span style={{
        width: 60,
        fontSize: 12,
        color: '#727171'
      }}>{size.toUpperCase()}</span>
          <Avatar type="primary" size={size} initials="AB" />
          <Avatar type="secondary" size={size} initials="CD" />
          <Avatar type="photo" size={size} src="https://i.pravatar.cc/150?img=3" alt="User" />
          <Avatar type="photo" size={size} alt="No photo" />
        </div>)}
    </div>
}`,...(c=(n=r.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};const g=["Default","AllTypes"];export{r as AllTypes,a as Default,g as __namedExportsOrder,x as default};
