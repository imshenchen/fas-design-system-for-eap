import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as m}from"./index-BioFo8Zg.js";import{N as g}from"./NavigationBar-MULoU-bh.js";import"./index-yBjzXJbu.js";const h=({item:s,activeKey:t,onItemClick:i,collapsed:a})=>{var c;const[l,o]=m.useState(s.defaultOpen??!1),u=(c=s.children)==null?void 0:c.some(r=>r.key===t),n=l||u;return e.jsxs("div",{className:"fas-sidemenu__group",children:[e.jsxs("button",{className:["fas-sidemenu__item","fas-sidemenu__item--l1",u?"fas-sidemenu__item--parent-active":""].filter(Boolean).join(" "),onClick:()=>o(r=>!r),"aria-expanded":n,children:[s.icon&&e.jsx("span",{className:"material-symbols-outlined fas-sidemenu__icon","aria-hidden":!0,children:s.icon}),!a&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"fas-sidemenu__label",children:s.label}),e.jsx("span",{className:["material-symbols-outlined","fas-sidemenu__chevron",n?"fas-sidemenu__chevron--open":""].filter(Boolean).join(" "),"aria-hidden":!0,children:"expand_more"})]})]}),n&&!a&&s.children&&e.jsxs("div",{className:"fas-sidemenu__sub",role:"group",children:[e.jsx("div",{className:"fas-sidemenu__sub-guide","aria-hidden":!0}),s.children.map(r=>e.jsx("button",{className:["fas-sidemenu__item","fas-sidemenu__item--l2",t===r.key?"fas-sidemenu__item--active":""].filter(Boolean).join(" "),onClick:()=>i==null?void 0:i(r.key,r),children:e.jsx("span",{className:"fas-sidemenu__label",children:r.label})},r.key))]})]})},b=({item:s,activeKey:t,onItemClick:i,collapsed:a})=>{const l=t===s.key;return e.jsxs("button",{className:["fas-sidemenu__item","fas-sidemenu__item--l1",l?"fas-sidemenu__item--active":""].filter(Boolean).join(" "),onClick:()=>i==null?void 0:i(s.key,s),title:a?s.label:void 0,children:[s.icon&&e.jsx("span",{className:"material-symbols-outlined fas-sidemenu__icon","aria-hidden":!0,children:s.icon}),!a&&e.jsx("span",{className:"fas-sidemenu__label",children:s.label})]})},d=({items:s,activeKey:t,onItemClick:i,collapsed:a=!1,version:l,className:o,style:u})=>e.jsxs("nav",{className:["fas-sidemenu",a?"fas-sidemenu--collapsed":"",o].filter(Boolean).join(" "),style:u,"aria-label":"Side navigation",children:[e.jsx("div",{className:"fas-sidemenu__scroll",children:s.map(n=>{var c;return n.isSection?e.jsxs("div",{className:"fas-sidemenu__section",children:[!a&&e.jsx("span",{className:"fas-sidemenu__section-label",children:n.label}),(c=n.children)==null?void 0:c.map(r=>r.children&&r.children.length>0?e.jsx(h,{item:r,activeKey:t,onItemClick:i,collapsed:a},r.key):e.jsx(b,{item:r,activeKey:t,onItemClick:i,collapsed:a},r.key))]},n.key):n.children&&n.children.length>0?e.jsx(h,{item:n,activeKey:t,onItemClick:i,collapsed:a},n.key):e.jsx(b,{item:n,activeKey:t,onItemClick:i,collapsed:a},n.key)})}),l&&e.jsxs("div",{className:"fas-sidemenu__footer",children:[e.jsx("div",{className:"fas-sidemenu__footer-divider"}),e.jsxs("button",{className:"fas-sidemenu__item fas-sidemenu__item--l1 fas-sidemenu__item--version",title:a?l:void 0,children:[e.jsx("span",{className:"material-symbols-outlined fas-sidemenu__icon","aria-hidden":!0,children:"deployed_code"}),!a&&e.jsx("span",{className:"fas-sidemenu__label",children:l})]})]})]});d.__docgenInfo={description:"",methods:[],displayName:"SideMenu",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"SideNavItem"}],raw:"SideNavItem[]"},description:"選單項目結構"},activeKey:{required:!1,tsType:{name:"string"},description:"目前選中的 item key"},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, item: SideNavItem) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"SideNavItem"},name:"item"}],return:{name:"void"}}},description:"點擊 item 的回呼"},collapsed:{required:!1,tsType:{name:"boolean"},description:"收折模式（只顯示 icon，80px 寬）",defaultValue:{value:"false",computed:!1}},version:{required:!1,tsType:{name:"string"},description:"顯示在底部的版本號文字"},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const R={title:"Layout/SideMenu",component:d,parameters:{layout:"fullscreen"}},x=[{key:"dev",label:"開發者工具",isSection:!0,children:[{key:"nodes",label:"節點",icon:"device_hub",defaultOpen:!0,children:[{key:"node-mgmt",label:"節點管理"},{key:"device-templates",label:"設備連線模板"}]},{key:"data-processing",label:"數據處理",icon:"analytics",children:[{key:"pipelines",label:"資料管線"},{key:"transforms",label:"資料轉換"}]},{key:"low-code",label:"低代碼工具",icon:"code",children:[{key:"flows",label:"流程設計"}]},{key:"apps",label:"應用程式",icon:"apps",children:[{key:"app-list",label:"應用列表"}]},{key:"alerts",label:"告警管理",icon:"notifications_active",children:[{key:"alert-rules",label:"告警規則"},{key:"alert-history",label:"告警歷史"}]},{key:"ai-service",label:"AI服務",icon:"auto_awesome",children:[{key:"ai-models",label:"模型管理"}]},{key:"logs",label:"日誌",icon:"description",children:[{key:"system-logs",label:"系統日誌"}]},{key:"images",label:"映像檔",icon:"note_stack"}]},{key:"maintenance",label:"維運助手",icon:"build"}],v={args:{items:x,activeKey:"node-mgmt",version:"v1.2.0"},render:s=>{const[t,i]=m.useState(s.activeKey);return e.jsxs("div",{style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(g,{appName:"APP Name"}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(d,{...s,activeKey:t,onItemClick:a=>i(a)}),e.jsx("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)",overflow:"auto"},children:e.jsxs("p",{style:{color:"var(--text-medium)",fontFamily:"Roboto, sans-serif"},children:["Active: ",e.jsx("strong",{style:{color:"var(--primary)"},children:t})]})})]})]})}},y={args:{items:x,activeKey:"node-mgmt",collapsed:!0,version:"v1.2.0"},render:s=>e.jsxs("div",{style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(g,{appName:"APP Name"}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(d,{...s}),e.jsx("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)"}})]})]})},p={args:{items:x,activeKey:"node-mgmt",version:"v1.2.0"},render:s=>{const[t,i]=m.useState(!1),[a,l]=m.useState(s.activeKey);return e.jsxs("div",{style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(g,{appName:"APP Name",onMenuToggle:()=>i(o=>!o)}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(d,{...s,collapsed:t,activeKey:a,onItemClick:o=>l(o)}),e.jsx("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)",overflow:"auto"},children:e.jsxs("p",{style:{color:"var(--text-medium)",fontFamily:"Roboto, sans-serif"},children:["Click the ",e.jsx("strong",{children:"☰ hamburger"})," button in the NavBar to toggle the side menu.",e.jsx("br",{}),"Active: ",e.jsx("strong",{style:{color:"var(--primary)"},children:a})]})})]})]})}},f={args:{items:x,activeKey:"node-mgmt",version:"v1.2.0"},render:s=>{const[t,i]=m.useState(s.activeKey);return e.jsxs("div",{"data-theme":"dark",style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(g,{appName:"APP Name"}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(d,{...s,activeKey:t,onItemClick:a=>i(a)}),e.jsx("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)"}})]})]})}};var _,j,k;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    items: demoItems,
    activeKey: 'node-mgmt',
    version: 'v1.2.0'
  },
  render: args => {
    const [activeKey, setActiveKey] = useState(args.activeKey);
    return <div style={{
      display: 'flex',
      height: '100vh',
      flexDirection: 'column'
    }}>
        <NavigationBar appName="APP Name" />
        <div style={{
        display: 'flex',
        flex: 1,
        overflow: 'hidden'
      }}>
          <SideMenu {...args} activeKey={activeKey} onItemClick={key => setActiveKey(key)} />
          <main style={{
          flex: 1,
          padding: 32,
          background: 'var(--bg-surface-dim)',
          overflow: 'auto'
        }}>
            <p style={{
            color: 'var(--text-medium)',
            fontFamily: 'Roboto, sans-serif'
          }}>
              Active: <strong style={{
              color: 'var(--primary)'
            }}>{activeKey}</strong>
            </p>
          </main>
        </div>
      </div>;
  }
}`,...(k=(j=v.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};var N,K,S;y.parameters={...y.parameters,docs:{...(N=y.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    items: demoItems,
    activeKey: 'node-mgmt',
    collapsed: true,
    version: 'v1.2.0'
  },
  render: args => <div style={{
    display: 'flex',
    height: '100vh',
    flexDirection: 'column'
  }}>
      <NavigationBar appName="APP Name" />
      <div style={{
      display: 'flex',
      flex: 1,
      overflow: 'hidden'
    }}>
        <SideMenu {...args} />
        <main style={{
        flex: 1,
        padding: 32,
        background: 'var(--bg-surface-dim)'
      }} />
      </div>
    </div>
}`,...(S=(K=y.parameters)==null?void 0:K.docs)==null?void 0:S.source}}};var A,P,w;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    items: demoItems,
    activeKey: 'node-mgmt',
    version: 'v1.2.0'
  },
  render: args => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeKey, setActiveKey] = useState(args.activeKey);
    return <div style={{
      display: 'flex',
      height: '100vh',
      flexDirection: 'column'
    }}>
        <NavigationBar appName="APP Name" onMenuToggle={() => setCollapsed(v => !v)} />
        <div style={{
        display: 'flex',
        flex: 1,
        overflow: 'hidden'
      }}>
          <SideMenu {...args} collapsed={collapsed} activeKey={activeKey} onItemClick={key => setActiveKey(key)} />
          <main style={{
          flex: 1,
          padding: 32,
          background: 'var(--bg-surface-dim)',
          overflow: 'auto'
        }}>
            <p style={{
            color: 'var(--text-medium)',
            fontFamily: 'Roboto, sans-serif'
          }}>
              Click the <strong>☰ hamburger</strong> button in the NavBar to toggle the side menu.
              <br />
              Active: <strong style={{
              color: 'var(--primary)'
            }}>{activeKey}</strong>
            </p>
          </main>
        </div>
      </div>;
  }
}`,...(w=(P=p.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var B,D,M;f.parameters={...f.parameters,docs:{...(B=f.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    items: demoItems,
    activeKey: 'node-mgmt',
    version: 'v1.2.0'
  },
  render: args => {
    const [activeKey, setActiveKey] = useState(args.activeKey);
    return <div data-theme="dark" style={{
      display: 'flex',
      height: '100vh',
      flexDirection: 'column'
    }}>
        <NavigationBar appName="APP Name" />
        <div style={{
        display: 'flex',
        flex: 1,
        overflow: 'hidden'
      }}>
          <SideMenu {...args} activeKey={activeKey} onItemClick={key => setActiveKey(key)} />
          <main style={{
          flex: 1,
          padding: 32,
          background: 'var(--bg-surface-dim)'
        }} />
        </div>
      </div>;
  }
}`,...(M=(D=f.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};const F=["Default","Collapsed","WithToggle","DarkMode"];export{y as Collapsed,f as DarkMode,v as Default,p as WithToggle,F as __namedExportsOrder,R as default};
