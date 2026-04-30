import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as y}from"./index-BioFo8Zg.js";import{S as s}from"./SideMenu-C4oC_xRd.js";import{N as o}from"./NavigationBar-Wj4ABS4U.js";import"./index-yBjzXJbu.js";import"./index-CRmY8kra.js";import"./index-BLHw34Di.js";import"./IconButton-B9YUEI9a.js";import"./Tooltip-DHUvMufU.js";const O={title:"Layout/SideMenu",component:s,parameters:{layout:"fullscreen"}},r=[{key:"dev",label:"開發者工具",isSection:!0,children:[{key:"nodes",label:"節點",icon:"device_hub",defaultOpen:!0,children:[{key:"node-mgmt",label:"節點管理"},{key:"device-templates",label:"設備連線模板"}]},{key:"data-processing",label:"數據處理",icon:"analytics",children:[{key:"pipelines",label:"資料管線"},{key:"transforms",label:"資料轉換"}]},{key:"low-code",label:"低代碼工具",icon:"code",children:[{key:"flows",label:"流程設計"}]},{key:"apps",label:"應用程式",icon:"apps",children:[{key:"app-list",label:"應用列表"}]},{key:"alerts",label:"告警管理",icon:"notifications_active",children:[{key:"alert-rules",label:"告警規則"},{key:"alert-history",label:"告警歷史"}]},{key:"ai-service",label:"AI服務",icon:"auto_awesome",children:[{key:"ai-models",label:"模型管理"}]},{key:"logs",label:"日誌",icon:"description",children:[{key:"system-logs",label:"系統日誌"}]},{key:"images",label:"映像檔",icon:"note_stack"}]},{key:"ops",label:"維運助手",isSection:!0,children:[{key:"monitoring",label:"系統監控",icon:"monitoring",children:[{key:"machine-status",label:"機台監控"},{key:"service-health",label:"服務健康度"}]},{key:"tickets",label:"工單管理",icon:"assignment",children:[{key:"ticket-list",label:"工單列表"},{key:"maintenance-schedule",label:"維修排程"}]},{key:"backup",label:"備份還原",icon:"backup"}]}],d={args:{items:r,activeKey:"node-mgmt",version:"v1.2.0"},render:a=>{const[i,l]=y.useState(a.activeKey);return e.jsxs("div",{style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(o,{appName:"APP Name"}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(s,{...a,activeKey:i,onItemClick:t=>l(t)}),e.jsx("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)",overflow:"auto"},children:e.jsxs("p",{style:{color:"var(--text-medium)",fontFamily:"Roboto, sans-serif"},children:["Active: ",e.jsx("strong",{style:{color:"var(--primary)"},children:i})]})})]})]})}},n={args:{items:r,activeKey:"node-mgmt",collapsed:!0,version:"v1.2.0"},render:a=>e.jsxs("div",{style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(o,{appName:"APP Name"}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(s,{...a}),e.jsx("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)"}})]})]})},c={args:{items:r,activeKey:"node-mgmt",collapsed:!0,collapsedMode:"hidden",version:"v1.2.0"},render:a=>e.jsxs("div",{style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(o,{appName:"APP Name"}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(s,{...a}),e.jsxs("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)",color:"var(--text-medium)",fontFamily:"Roboto, sans-serif"},children:["SideMenu is fully hidden (width: 0). Toggle ",e.jsx("code",{children:"collapsedMode"})," ","to ",e.jsx("code",{children:"'narrow'"})," in the Controls panel to switch to icon-only mode."]})]})]})},m={args:{items:r,activeKey:"node-mgmt",version:"v1.2.0"},render:a=>{const[i,l]=y.useState(!1),[t,M]=y.useState(a.activeKey);return e.jsxs("div",{style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(o,{appName:"APP Name",onMenuToggle:()=>l(p=>!p)}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(s,{...a,collapsed:i,activeKey:t,onItemClick:p=>M(p)}),e.jsx("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)",overflow:"auto"},children:e.jsxs("p",{style:{color:"var(--text-medium)",fontFamily:"Roboto, sans-serif"},children:["Click the ",e.jsx("strong",{children:"☰ hamburger"})," button in the NavBar to toggle the side menu.",e.jsx("br",{}),"Active: ",e.jsx("strong",{style:{color:"var(--primary)"},children:t})]})})]})]})}},v={args:{items:r,activeKey:"node-mgmt",version:"v1.2.0"},render:a=>{const[i,l]=y.useState(a.activeKey);return e.jsxs("div",{"data-theme":"dark",style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(o,{appName:"APP Name"}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(s,{...a,activeKey:i,onItemClick:t=>l(t)}),e.jsx("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)"}})]})]})}};var g,u,f;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(f=(u=d.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var h,x,b;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(b=(x=n.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var k,K,j;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    items: demoItems,
    activeKey: 'node-mgmt',
    collapsed: true,
    collapsedMode: 'hidden',
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
        background: 'var(--bg-surface-dim)',
        color: 'var(--text-medium)',
        fontFamily: 'Roboto, sans-serif'
      }}>
          SideMenu is fully hidden (width: 0). Toggle <code>collapsedMode</code>{' '}
          to <code>'narrow'</code> in the Controls panel to switch to icon-only mode.
        </main>
      </div>
    </div>
}`,...(j=(K=c.parameters)==null?void 0:K.docs)==null?void 0:j.source}}};var N,S,A;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(A=(S=m.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var w,P,C;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(C=(P=v.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};const W=["Default","Collapsed","CollapsedHidden","WithToggle","DarkMode"];export{n as Collapsed,c as CollapsedHidden,v as DarkMode,d as Default,m as WithToggle,W as __namedExportsOrder,O as default};
