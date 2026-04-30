import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const i=({size:v="m",color:g="primary",className:x,style:f})=>e.jsx("span",{className:["fas-spin",`fas-spin--${v}`,`fas-spin--${g}`,x].filter(Boolean).join(" "),style:f,role:"status","aria-label":"Loading"});i.displayName="Spin";i.__docgenInfo={description:"",methods:[],displayName:"Spin",props:{size:{required:!1,tsType:{name:"union",raw:"'s' | 'm' | 'l'",elements:[{name:"literal",value:"'s'"},{name:"literal",value:"'m'"},{name:"literal",value:"'l'"}]},description:"",defaultValue:{value:"'m'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'white'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'white'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const j={title:"Core/Feedback/Spin",component:i,tags:["autodocs"],argTypes:{size:{control:"select",options:["s","m","l"]},color:{control:"select",options:["primary","secondary","white"]}}},r={args:{size:"m",color:"primary"}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{size:"s"}),e.jsx("div",{style:{fontSize:12,marginTop:4},children:"S"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{size:"m"}),e.jsx("div",{style:{fontSize:12,marginTop:4},children:"M"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{size:"l"}),e.jsx("div",{style:{fontSize:12,marginTop:4},children:"L"})]})]})},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{color:"primary"}),e.jsx("div",{style:{fontSize:12,marginTop:4},children:"Primary"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{color:"secondary"}),e.jsx("div",{style:{fontSize:12,marginTop:4},children:"Secondary"})]}),e.jsxs("div",{style:{textAlign:"center",background:"#333",padding:8,borderRadius:4},children:[e.jsx(i,{color:"white"}),e.jsx("div",{style:{fontSize:12,marginTop:4,color:"#fff"},children:"White"})]})]})};var n,l,a;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 'm',
    color: 'primary'
  }
}`,...(a=(l=r.parameters)==null?void 0:l.docs)==null?void 0:a.source}}};var o,d,c;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <Spin size="s" /><div style={{
        fontSize: 12,
        marginTop: 4
      }}>S</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Spin size="m" /><div style={{
        fontSize: 12,
        marginTop: 4
      }}>M</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Spin size="l" /><div style={{
        fontSize: 12,
        marginTop: 4
      }}>L</div>
      </div>
    </div>
}`,...(c=(d=s.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,y;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <Spin color="primary" /><div style={{
        fontSize: 12,
        marginTop: 4
      }}>Primary</div>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <Spin color="secondary" /><div style={{
        fontSize: 12,
        marginTop: 4
      }}>Secondary</div>
      </div>
      <div style={{
      textAlign: 'center',
      background: '#333',
      padding: 8,
      borderRadius: 4
    }}>
        <Spin color="white" /><div style={{
        fontSize: 12,
        marginTop: 4,
        color: '#fff'
      }}>White</div>
      </div>
    </div>
}`,...(y=(m=t.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};const z=["Default","AllSizes","AllColors"];export{t as AllColors,s as AllSizes,r as Default,z as __namedExportsOrder,j as default};
