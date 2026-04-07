import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R}from"./index-BioFo8Zg.js";import"./index-yBjzXJbu.js";const a=R.forwardRef(({icon:v,size:S="m",selected:z=!1,className:h,...B},T)=>e.jsx("button",{ref:T,type:"button",className:["fas-icon-btn",`fas-icon-btn--${S}`,z&&"fas-icon-btn--selected",h].filter(Boolean).join(" "),...B,children:v}));a.displayName="IconButton";a.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Material Icon name 字串，或任意 ReactNode"},size:{required:!1,tsType:{name:"union",raw:"'l' | 'm' | 's'",elements:[{name:"literal",value:"'l'"},{name:"literal",value:"'m'"},{name:"literal",value:"'s'"}]},description:"",defaultValue:{value:"'m'",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"selected 狀態（用於 Toggle）",defaultValue:{value:"false",computed:!1}},"aria-label":{required:!0,tsType:{name:"string"},description:"aria-label 必填，提供無障礙說明"}}};const q={title:"Data Entry/IconButton",component:a,tags:["autodocs"],argTypes:{size:{control:"select",options:["l","m","s"]},selected:{control:"boolean"},disabled:{control:"boolean"}}},I=()=>e.jsx("span",{style:{fontSize:"18px",fontWeight:400},children:"✕"}),o=()=>e.jsx("span",{style:{fontSize:"18px"},children:"⚙"}),l=()=>e.jsx("span",{style:{fontSize:"18px"},children:"⚡"}),A=()=>e.jsx("span",{style:{fontSize:"18px"},children:"🔍"}),t={args:{icon:e.jsx(I,{}),"aria-label":"關閉",size:"m"}},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsx(a,{"aria-label":"L size",size:"l",icon:e.jsx(o,{})}),e.jsx(a,{"aria-label":"M size",size:"m",icon:e.jsx(o,{})}),e.jsx(a,{"aria-label":"S size",size:"s",icon:e.jsx(o,{})})]})},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:16,alignItems:"center"},children:[e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(a,{"aria-label":"預設",icon:e.jsx(l,{})}),e.jsx("p",{style:{fontSize:12,marginTop:4,color:"var(--text-medium)"},children:"預設"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(a,{"aria-label":"選取",icon:e.jsx(l,{}),selected:!0}),e.jsx("p",{style:{fontSize:12,marginTop:4,color:"var(--text-medium)"},children:"Selected"})]}),e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(a,{"aria-label":"停用",icon:e.jsx(l,{}),disabled:!0}),e.jsx("p",{style:{fontSize:12,marginTop:4,color:"var(--text-medium)"},children:"Disabled"})]})]})},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(a,{"aria-label":"關閉",icon:e.jsx(I,{})}),e.jsx(a,{"aria-label":"設定",icon:e.jsx(o,{})}),e.jsx(a,{"aria-label":"篩選",icon:e.jsx(l,{})}),e.jsx(a,{"aria-label":"搜尋",icon:e.jsx(A,{})})]})};var r,c,d;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    icon: <CloseIcon />,
    'aria-label': '關閉',
    size: 'm'
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <IconButton aria-label="L size" size="l" icon={<SettingsIcon />} />
      <IconButton aria-label="M size" size="m" icon={<SettingsIcon />} />
      <IconButton aria-label="S size" size="s" icon={<SettingsIcon />} />
    </div>
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,g,j;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    alignItems: 'center'
  }}>
      <div style={{
      textAlign: 'center'
    }}>
        <IconButton aria-label="預設" icon={<FilterIcon />} />
        <p style={{
        fontSize: 12,
        marginTop: 4,
        color: 'var(--text-medium)'
      }}>預設</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <IconButton aria-label="選取" icon={<FilterIcon />} selected />
        <p style={{
        fontSize: 12,
        marginTop: 4,
        color: 'var(--text-medium)'
      }}>Selected</p>
      </div>
      <div style={{
      textAlign: 'center'
    }}>
        <IconButton aria-label="停用" icon={<FilterIcon />} disabled />
        <p style={{
        fontSize: 12,
        marginTop: 4,
        color: 'var(--text-medium)'
      }}>Disabled</p>
      </div>
    </div>
}`,...(j=(g=n.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var b,f,y;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8
  }}>
      <IconButton aria-label="關閉" icon={<CloseIcon />} />
      <IconButton aria-label="設定" icon={<SettingsIcon />} />
      <IconButton aria-label="篩選" icon={<FilterIcon />} />
      <IconButton aria-label="搜尋" icon={<SearchIcon />} />
    </div>
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const V=["Default","AllSizes","States","VariousIcons"];export{s as AllSizes,t as Default,n as States,i as VariousIcons,V as __namedExportsOrder,q as default};
