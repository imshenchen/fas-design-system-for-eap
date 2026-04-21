import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as M}from"./index-BioFo8Zg.js";import{T as V}from"./Tooltip-CYrLbS1X.js";import"./index-yBjzXJbu.js";const t=M.forwardRef(({icon:a,size:n="m",selected:A=!1,tooltip:_=!0,className:w,...c},E)=>{const d=e.jsx("button",{ref:E,type:"button",className:["fas-icon-btn",`fas-icon-btn--${n}`,A&&"fas-icon-btn--selected",w].filter(Boolean).join(" "),...c,children:a});return _?e.jsx(V,{title:c["aria-label"],placement:"top",children:d}):d});t.displayName="IconButton";t.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{icon:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Material Icon name 字串，或任意 ReactNode"},size:{required:!1,tsType:{name:"union",raw:"'l' | 'm' | 's'",elements:[{name:"literal",value:"'l'"},{name:"literal",value:"'m'"},{name:"literal",value:"'s'"}]},description:"",defaultValue:{value:"'m'",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"selected 狀態（用於 Toggle）",defaultValue:{value:"false",computed:!1}},"aria-label":{required:!0,tsType:{name:"string"},description:"aria-label 必填，提供無障礙說明；同時作為 tooltip 文字"},tooltip:{required:!1,tsType:{name:"boolean"},description:`滑鼠移入時顯示 tooltip（取自 aria-label）。
預設 true；設為 false 可關閉。`,defaultValue:{value:"true",computed:!1}}}};const $={title:"Data Entry/IconButton",component:t,tags:["autodocs"],argTypes:{size:{control:"select",options:["l","m","s"]},selected:{control:"boolean"},disabled:{control:"boolean"},tooltip:{control:"boolean"}}},o=({name:a})=>e.jsx("span",{className:"material-symbols-outlined",style:{fontSize:20},children:a}),s={args:{icon:e.jsx(o,{name:"settings"}),"aria-label":"Settings",size:"l"}},l={args:{icon:e.jsx(o,{name:"settings"}),"aria-label":"Settings",size:"l",tooltip:!1}},r={render:()=>e.jsxs("div",{style:{display:"flex",gap:24,alignItems:"center",padding:40},children:[e.jsx(t,{"aria-label":"Large",size:"l",icon:e.jsx(o,{name:"delete"})}),e.jsx(t,{"aria-label":"Medium",size:"m",icon:e.jsx(o,{name:"delete"})}),e.jsx(t,{"aria-label":"Small",size:"s",icon:e.jsx(o,{name:"delete"})})]})},i={render:()=>e.jsx("div",{style:{display:"flex",gap:32,alignItems:"flex-end",padding:48},children:[{label:"Default",props:{}},{label:"Disabled",props:{disabled:!0}},{label:"Selected",props:{selected:!0}},{label:"Tooltip off",props:{tooltip:!1}}].map(({label:a,props:n})=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(t,{"aria-label":a,icon:e.jsx(o,{name:"delete"}),size:"l",...n}),e.jsx("p",{style:{fontSize:12,marginTop:8,color:"var(--text-medium)"},children:a})]},a))})};var p,m,u,f,b;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    icon: <Icon name="settings" />,
    'aria-label': 'Settings',
    size: 'l'
  }
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source},description:{story:"Default — tooltip 預設開啟，hover 可看見",...(b=(f=s.parameters)==null?void 0:f.docs)==null?void 0:b.description}}};var g,x,y,I,S;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    icon: <Icon name="settings" />,
    'aria-label': 'Settings',
    size: 'l',
    tooltip: false
  }
}`,...(y=(x=l.parameters)==null?void 0:x.docs)==null?void 0:y.source},description:{story:"tooltip={false} — 關閉 tooltip",...(S=(I=l.parameters)==null?void 0:I.docs)==null?void 0:S.description}}};var j,v,z,T,h;r.parameters={...r.parameters,docs:{...(j=r.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(z=(v=r.parameters)==null?void 0:v.docs)==null?void 0:z.source},description:{story:"三種尺寸 — 全部預設顯示 tooltip",...(h=(T=r.parameters)==null?void 0:T.docs)==null?void 0:h.description}}};var D,B,N,R,q;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(N=(B=i.parameters)==null?void 0:B.docs)==null?void 0:N.source},description:{story:"各狀態 — Default / Hover（滑鼠移入可看 tooltip）/ Disabled / Selected / Selected hover",...(q=(R=i.parameters)==null?void 0:R.docs)==null?void 0:q.description}}};const C=["Default","NoTooltip","AllSizes","States"];export{r as AllSizes,s as Default,l as NoTooltip,i as States,C as __namedExportsOrder,$ as default};
