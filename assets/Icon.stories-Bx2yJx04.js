import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{I as s}from"./Icon-CEbj-L6z.js";import"./index-yBjzXJbu.js";const _={title:"Core/Foundations/Icon",component:s,tags:["autodocs"],argTypes:{name:{control:"text"},size:{control:"number"},filled:{control:"boolean"}}},r={args:{name:"check_circle",size:24}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsx(s,{name:"star",size:16}),e.jsx(s,{name:"star",size:20}),e.jsx(s,{name:"star",size:24}),e.jsx(s,{name:"star",size:32}),e.jsx(s,{name:"star",size:48})]})},a={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{name:"star",size:32,filled:!1}),e.jsx("p",{style:{fontSize:11,marginTop:4},children:"Outlined"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{name:"star",size:32,filled:!0}),e.jsx("p",{style:{fontSize:11,marginTop:4},children:"Filled"})]})]})},h=["close","check","check_circle","cancel","info","warning","error","add","remove","expand_more","expand_less","chevron_right","chevron_left","first_page","last_page","arrow_back","arrow_forward","unfold_more","more_horiz","search","settings","delete","edit","visibility","download","upload","refresh","priority_high","done"],t={render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:16},children:h.map(i=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,width:80},children:[e.jsx(s,{name:i,size:24}),e.jsx("span",{style:{fontSize:10,color:"#727171",textAlign:"center",wordBreak:"break-all"},children:i})]},i))})};var l,o,c;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: 'check_circle',
    size: 24
  }
}`,...(c=(o=r.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var d,m,p;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center'
  }}>
      <Icon name="star" size={16} />
      <Icon name="star" size={20} />
      <Icon name="star" size={24} />
      <Icon name="star" size={32} />
      <Icon name="star" size={48} />
    </div>
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var x,g,f;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <Icon name="star" size={32} filled={false} />
        <p style={{
        fontSize: 11,
        marginTop: 4
      }}>Outlined</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Icon name="star" size={32} filled />
        <p style={{
        fontSize: 11,
        marginTop: 4
      }}>Filled</p>
      </div>
    </div>
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var y,u,z;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 16
  }}>
      {COMMON_ICONS.map(name => <div key={name} style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 4,
      width: 80
    }}>
          <Icon name={name} size={24} />
          <span style={{
        fontSize: 10,
        color: '#727171',
        textAlign: 'center',
        wordBreak: 'break-all'
      }}>{name}</span>
        </div>)}
    </div>
}`,...(z=(u=t.parameters)==null?void 0:u.docs)==null?void 0:z.source}}};const S=["Default","Sizes","FilledVsOutlined","CommonIcons"];export{t as CommonIcons,r as Default,a as FilledVsOutlined,n as Sizes,S as __namedExportsOrder,_ as default};
