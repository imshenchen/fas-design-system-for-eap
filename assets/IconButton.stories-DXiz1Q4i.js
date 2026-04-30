import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{I as i}from"./IconButton-B9YUEI9a.js";import"./index-yBjzXJbu.js";import"./index-BioFo8Zg.js";import"./Tooltip-DHUvMufU.js";const k={title:"Core/Data Entry/IconButton",component:i,tags:["autodocs"],argTypes:{size:{control:"select",options:["l","m","s"]},selected:{control:"boolean"},disabled:{control:"boolean"},tooltip:{control:"boolean"}}},s=({name:t})=>e.jsx("span",{className:"material-symbols-outlined",style:{fontSize:20},children:t}),a={args:{icon:e.jsx(s,{name:"settings"}),"aria-label":"Settings",size:"l"}},o={args:{icon:e.jsx(s,{name:"settings"}),"aria-label":"Settings",size:"l",tooltip:!1}},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center",padding:40},children:[e.jsx(i,{"aria-label":"Large",size:"l",icon:e.jsx(s,{name:"delete"})}),e.jsx(i,{"aria-label":"Medium",size:"m",icon:e.jsx(s,{name:"delete"})}),e.jsx(i,{"aria-label":"Small",size:"s",icon:e.jsx(s,{name:"delete"})})]})},r={render:()=>e.jsx("div",{style:{display:"flex",gap:32,alignItems:"flex-end",padding:48},children:[{label:"Default",props:{}},{label:"Disabled",props:{disabled:!0}},{label:"Selected",props:{selected:!0}},{label:"Tooltip off",props:{tooltip:!1}}].map(({label:t,props:A})=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(i,{"aria-label":t,icon:e.jsx(s,{name:"delete"}),size:"l",...A}),e.jsx("p",{style:{fontSize:12,marginTop:8,color:"var(--text-medium)"},children:t})]},t))})};var n,c,p,d,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    icon: <Icon name="settings" />,
    'aria-label': 'Settings',
    size: 'l'
  }
}`,...(p=(c=a.parameters)==null?void 0:c.docs)==null?void 0:p.source},description:{story:"Default — tooltip 預設開啟，hover 可看見",...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.description}}};var g,u,b,x,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    icon: <Icon name="settings" />,
    'aria-label': 'Settings',
    size: 'l',
    tooltip: false
  }
}`,...(b=(u=o.parameters)==null?void 0:u.docs)==null?void 0:b.source},description:{story:"tooltip={false} — 關閉 tooltip",...(f=(x=o.parameters)==null?void 0:x.docs)==null?void 0:f.description}}};var y,S,z,I,j;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 24,
    alignItems: 'center',
    padding: 40
  }}>
      <IconButton aria-label="Large" size="l" icon={<Icon name="delete" />} />
      <IconButton aria-label="Medium" size="m" icon={<Icon name="delete" />} />
      <IconButton aria-label="Small" size="s" icon={<Icon name="delete" />} />
    </div>
}`,...(z=(S=l.parameters)==null?void 0:S.docs)==null?void 0:z.source},description:{story:"三種尺寸 — 全部預設顯示 tooltip",...(j=(I=l.parameters)==null?void 0:I.docs)==null?void 0:j.description}}};var v,D,h,T,B;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    alignItems: 'flex-end',
    padding: 48
  }}>
      {[{
      label: 'Default',
      props: {}
    }, {
      label: 'Disabled',
      props: {
        disabled: true
      }
    }, {
      label: 'Selected',
      props: {
        selected: true
      }
    }, {
      label: 'Tooltip off',
      props: {
        tooltip: false as const
      }
    }].map(({
      label,
      props
    }) => <div key={label} style={{
      textAlign: 'center'
    }}>
          <IconButton aria-label={label} icon={<Icon name="delete" />} size="l" {...props} />
          <p style={{
        fontSize: 12,
        marginTop: 8,
        color: 'var(--text-medium)'
      }}>{label}</p>
        </div>)}
    </div>
}`,...(h=(D=r.parameters)==null?void 0:D.docs)==null?void 0:h.source},description:{story:"各狀態 — Default / Hover（滑鼠移入可看 tooltip）/ Disabled / Selected / Selected hover",...(B=(T=r.parameters)==null?void 0:T.docs)==null?void 0:B.description}}};const C=["Default","NoTooltip","AllSizes","States"];export{l as AllSizes,a as Default,o as NoTooltip,r as States,C as __namedExportsOrder,k as default};
