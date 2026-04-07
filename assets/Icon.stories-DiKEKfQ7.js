import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";function s({name:a,size:l=20,className:I,style:S,"aria-hidden":_=!0,"aria-label":o,filled:j=!1}){return e.jsx("span",{className:["material-symbols-outlined",I].filter(Boolean).join(" "),style:{fontSize:l,fontVariationSettings:`'FILL' ${j?1:0}, 'wght' 400, 'GRAD' 0, 'opsz' ${l}`,...S},"aria-hidden":_||void 0,"aria-label":o,role:o?"img":void 0,children:a})}s.__docgenInfo={description:"",methods:[],displayName:"Icon",props:{name:{required:!0,tsType:{name:"string"},description:'Material Symbols 名稱，例如 "close", "check_circle", "arrow_back"'},size:{required:!1,tsType:{name:"number"},description:"圖示大小（px），預設 20",defaultValue:{value:"20",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"CSS class"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},"aria-hidden":{required:!1,tsType:{name:"boolean"},description:"預設 true（裝飾性圖示），若圖示有語意請設為 false 並提供 aria-label",defaultValue:{value:"true",computed:!1}},"aria-label":{required:!1,tsType:{name:"string"},description:""},filled:{required:!1,tsType:{name:"boolean"},description:"是否填滿（filled variant），預設 false",defaultValue:{value:"false",computed:!1}}}};const T={title:"Foundations/Icon",component:s,tags:["autodocs"],argTypes:{name:{control:"text"},size:{control:"number"},filled:{control:"boolean"}}},r={args:{name:"check_circle",size:24}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsx(s,{name:"star",size:16}),e.jsx(s,{name:"star",size:20}),e.jsx(s,{name:"star",size:24}),e.jsx(s,{name:"star",size:32}),e.jsx(s,{name:"star",size:48})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{name:"star",size:32,filled:!1}),e.jsx("p",{style:{fontSize:11,marginTop:4},children:"Outlined"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(s,{name:"star",size:32,filled:!0}),e.jsx("p",{style:{fontSize:11,marginTop:4},children:"Filled"})]})]})},b=["close","check","check_circle","cancel","info","warning","error","add","remove","expand_more","expand_less","chevron_right","chevron_left","first_page","last_page","arrow_back","arrow_forward","unfold_more","more_horiz","search","settings","delete","edit","visibility","download","upload","refresh","priority_high","done"],t={render:()=>e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:16},children:b.map(a=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:4,width:80},children:[e.jsx(s,{name:a,size:24}),e.jsx("span",{style:{fontSize:10,color:"#727171",textAlign:"center",wordBreak:"break-all"},children:a})]},a))})};var d,c,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    name: 'check_circle',
    size: 24
  }
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,f,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(f=n.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var g,x,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var h,z,v;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(v=(z=t.parameters)==null?void 0:z.docs)==null?void 0:v.source}}};const O=["Default","Sizes","FilledVsOutlined","CommonIcons"];export{t as CommonIcons,r as Default,i as FilledVsOutlined,n as Sizes,O as __namedExportsOrder,T as default};
