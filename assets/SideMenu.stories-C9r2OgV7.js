import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as d}from"./index-BioFo8Zg.js";import{S as l}from"./SideMenu-B0usBoAD.js";import{N as m}from"./NavigationBar-Wj4ABS4U.js";import"./index-yBjzXJbu.js";import"./index-CRmY8kra.js";import"./index-BLHw34Di.js";import"./IconButton-B9YUEI9a.js";import"./Tooltip-DHUvMufU.js";const F={title:"Layout/SideMenu",component:l,parameters:{layout:"fullscreen"}},v=[{key:"dev",label:"開發者工具",isSection:!0,children:[{key:"nodes",label:"節點",icon:"device_hub",defaultOpen:!0,children:[{key:"node-mgmt",label:"節點管理"},{key:"device-templates",label:"設備連線模板"}]},{key:"data-processing",label:"數據處理",icon:"analytics",children:[{key:"pipelines",label:"資料管線"},{key:"transforms",label:"資料轉換"}]},{key:"low-code",label:"低代碼工具",icon:"code",children:[{key:"flows",label:"流程設計"}]},{key:"apps",label:"應用程式",icon:"apps",children:[{key:"app-list",label:"應用列表"}]},{key:"alerts",label:"告警管理",icon:"notifications_active",children:[{key:"alert-rules",label:"告警規則"},{key:"alert-history",label:"告警歷史"}]},{key:"ai-service",label:"AI服務",icon:"auto_awesome",children:[{key:"ai-models",label:"模型管理"}]},{key:"logs",label:"日誌",icon:"description",children:[{key:"system-logs",label:"系統日誌"}]},{key:"images",label:"映像檔",icon:"note_stack"}]},{key:"ops",label:"維運助手",isSection:!0,children:[{key:"monitoring",label:"系統監控",icon:"monitoring",children:[{key:"machine-status",label:"機台監控"},{key:"service-health",label:"服務健康度"}]},{key:"tickets",label:"工單管理",icon:"assignment",children:[{key:"ticket-list",label:"工單列表"},{key:"maintenance-schedule",label:"維修排程"}]},{key:"backup",label:"備份還原",icon:"backup"}]}],r={args:{items:v,activeKey:"node-mgmt",version:"v1.2.0"},render:a=>{const[t,s]=d.useState(a.activeKey);return e.jsxs("div",{style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(m,{appName:"APP Name"}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(l,{...a,activeKey:t,onItemClick:i=>s(i)}),e.jsx("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)",overflow:"auto"},children:e.jsxs("p",{style:{color:"var(--text-medium)",fontFamily:"Roboto, sans-serif"},children:["Active: ",e.jsx("strong",{style:{color:"var(--primary)"},children:t})]})})]})]})}},o={args:{items:v,activeKey:"node-mgmt",collapsed:!0,version:"v1.2.0"},render:a=>e.jsxs("div",{style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(m,{appName:"APP Name"}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(l,{...a}),e.jsx("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)"}})]})]})},n={args:{items:v,activeKey:"node-mgmt",version:"v1.2.0"},render:a=>{const[t,s]=d.useState(!1),[i,S]=d.useState(a.activeKey);return e.jsxs("div",{style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(m,{appName:"APP Name",onMenuToggle:()=>s(y=>!y)}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(l,{...a,collapsed:t,activeKey:i,onItemClick:y=>S(y)}),e.jsx("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)",overflow:"auto"},children:e.jsxs("p",{style:{color:"var(--text-medium)",fontFamily:"Roboto, sans-serif"},children:["Click the ",e.jsx("strong",{children:"☰ hamburger"})," button in the NavBar to toggle the side menu.",e.jsx("br",{}),"Active: ",e.jsx("strong",{style:{color:"var(--primary)"},children:i})]})})]})]})}},c={args:{items:v,activeKey:"node-mgmt",version:"v1.2.0"},render:a=>{const[t,s]=d.useState(a.activeKey);return e.jsxs("div",{"data-theme":"dark",style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(m,{appName:"APP Name"}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(l,{...a,activeKey:t,onItemClick:i=>s(i)}),e.jsx("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)"}})]})]})}};var p,g,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var f,h,x;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(h=o.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var k,b,K;n.parameters={...n.parameters,docs:{...(k=n.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(K=(b=n.parameters)==null?void 0:b.docs)==null?void 0:K.source}}};var j,N,A;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(A=(N=c.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};const T=["Default","Collapsed","WithToggle","DarkMode"];export{o as Collapsed,c as DarkMode,r as Default,n as WithToggle,T as __namedExportsOrder,F as default};
