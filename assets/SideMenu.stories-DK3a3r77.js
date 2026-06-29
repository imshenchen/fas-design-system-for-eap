import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r}from"./index-BioFo8Zg.js";import{S as s}from"./SideMenu-CvJ7IAa1.js";import{N as o}from"./NavigationBar-DDqgtcLB.js";import"./index-yBjzXJbu.js";import"./index-CncNTZwy.js";import"./index-B6ujFmsw.js";import"./IconButton-B9YUEI9a.js";import"./Tooltip-DHUvMufU.js";const G={title:"Core/Layout/SideMenu",component:s,parameters:{layout:"fullscreen"}},n=[{key:"dev",label:"開發者工具",isSection:!0,children:[{key:"nodes",label:"節點",icon:"device_hub",defaultOpen:!0,children:[{key:"node-mgmt",label:"節點管理"},{key:"device-templates",label:"設備連線模板"}]},{key:"data-processing",label:"數據處理",icon:"analytics",children:[{key:"pipelines",label:"資料管線"},{key:"transforms",label:"資料轉換"}]},{key:"low-code",label:"低代碼工具",icon:"code",children:[{key:"flows",label:"流程設計"}]},{key:"apps",label:"應用程式",icon:"apps",children:[{key:"app-list",label:"應用列表"}]},{key:"alerts",label:"告警管理",icon:"notifications_active",children:[{key:"alert-rules",label:"告警規則"},{key:"alert-history",label:"告警歷史"}]},{key:"ai-service",label:"AI服務",icon:"auto_awesome",children:[{key:"ai-models",label:"模型管理"}]},{key:"logs",label:"日誌",icon:"description",children:[{key:"system-logs",label:"系統日誌"}]},{key:"images",label:"映像檔",icon:"note_stack"}]},{key:"ops",label:"維運助手",isSection:!0,children:[{key:"monitoring",label:"系統監控",icon:"monitoring",children:[{key:"machine-status",label:"機台監控"},{key:"service-health",label:"服務健康度"}]},{key:"tickets",label:"工單管理",icon:"assignment",children:[{key:"ticket-list",label:"工單列表"},{key:"maintenance-schedule",label:"維修排程"}]},{key:"backup",label:"備份還原",icon:"backup"}]}],d={args:{items:n,activeKey:"node-mgmt",version:"v1.2.0"},render:a=>{const[i,t]=r.useState(a.activeKey);return e.jsxs("div",{style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(o,{appName:"APP Name"}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(s,{...a,activeKey:i,onItemClick:l=>t(l)}),e.jsx("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)",overflow:"auto"},children:e.jsxs("p",{style:{color:"var(--text-medium)",fontFamily:"Roboto, sans-serif"},children:["Active: ",e.jsx("strong",{style:{color:"var(--primary)"},children:i})]})})]})]})}},c={args:{items:n,activeKey:"node-mgmt",collapsed:!0,version:"v1.2.0"},render:a=>e.jsxs("div",{style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(o,{appName:"APP Name"}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(s,{...a}),e.jsx("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)"}})]})]})},m={args:{items:n,activeKey:"node-mgmt",collapsed:!0,collapsedMode:"hidden",version:"v1.2.0"},render:a=>e.jsxs("div",{style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(o,{appName:"APP Name"}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(s,{...a}),e.jsxs("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)",color:"var(--text-medium)",fontFamily:"Roboto, sans-serif"},children:["SideMenu is fully hidden (width: 0). Toggle ",e.jsx("code",{children:"collapsedMode"})," ","to ",e.jsx("code",{children:"'narrow'"})," in the Controls panel to switch to icon-only mode."]})]})]})},y={args:{items:n,activeKey:"node-mgmt",version:"v1.2.0"},render:a=>{const[i,t]=r.useState(!1),[l,B]=r.useState(a.activeKey);return e.jsxs("div",{style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(o,{appName:"APP Name",onMenuToggle:()=>t(g=>!g)}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(s,{...a,collapsed:i,activeKey:l,onItemClick:g=>B(g)}),e.jsx("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)",overflow:"auto"},children:e.jsxs("p",{style:{color:"var(--text-medium)",fontFamily:"Roboto, sans-serif"},children:["Click the ",e.jsx("strong",{children:"☰ hamburger"})," button in the NavBar to toggle the side menu.",e.jsx("br",{}),"Active: ",e.jsx("strong",{style:{color:"var(--primary)"},children:l})]})})]})]})}},v={args:{items:n,activeKey:"node-mgmt",version:"v1.2.0"},render:a=>{const[i,t]=r.useState(a.activeKey);return e.jsxs("div",{"data-theme":"dark",style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(o,{appName:"APP Name"}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(s,{...a,activeKey:i,onItemClick:l=>t(l)}),e.jsx("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)"}})]})]})}},R=[{key:"dev",label:"開發者工具",isSection:!0,children:[{key:"nodes",label:"節點",icon:"node",defaultOpen:!0,children:[{key:"node-mgmt",label:"節點管理"},{key:"device-templates",label:"設備連線模板"}]},{key:"data-processing",label:"數據處理",icon:"data_processing",children:[{key:"pipelines",label:"資料管線"},{key:"transforms",label:"資料轉換"}]},{key:"low-code",label:"低代碼工具",icon:"low_code_tool",children:[{key:"flows",label:"流程設計"}]},{key:"apps",label:"應用程式",icon:"application",children:[{key:"app-list",label:"應用列表"}]},{key:"alerts",label:"告警管理",icon:"alert_management",children:[{key:"alert-rules",label:"告警規則"},{key:"alert-history",label:"告警歷史"}]},{key:"ai-service",label:"AI服務",icon:"ai_service",children:[{key:"ai-models",label:"模型管理"}]},{key:"logs",label:"日誌",icon:"log",children:[{key:"system-logs",label:"系統日誌"}]},{key:"images",label:"映像檔",icon:"image_file"},{key:"modules",label:"模組管理",icon:"module"}]},{key:"ops",label:"維運助手",isSection:!0,children:[{key:"monitoring",label:"系統監控",icon:"system_monitoring",children:[{key:"machine-status",label:"機台監控"},{key:"service-health",label:"服務健康度"}]},{key:"storage",label:"儲存空間",icon:"storage_space"},{key:"settings",label:"系統設定",icon:"settings"}]}],p={args:{variant:"corp",items:R,activeKey:"node-mgmt",version:"v1.2.0"},render:a=>{const[i,t]=r.useState(a.activeKey);return e.jsxs("div",{style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(o,{variant:"corp",appName:"設備自動化控制系統控制台"}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(s,{...a,activeKey:i,onItemClick:l=>t(l)}),e.jsx("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)",overflow:"auto"},children:e.jsxs("p",{style:{color:"var(--text-medium)",fontFamily:"Roboto, sans-serif"},children:["Active: ",e.jsx("strong",{style:{color:"var(--primary)"},children:i})]})})]})]})}};var u,f,h;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(h=(f=d.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,b,k;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(k=(b=c.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var K,j,N;m.parameters={...m.parameters,docs:{...(K=m.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(N=(j=m.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};var S,w,A;y.parameters={...y.parameters,docs:{...(S=y.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(A=(w=y.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var C,P,I;v.parameters={...v.parameters,docs:{...(C=v.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(I=(P=v.parameters)==null?void 0:P.docs)==null?void 0:I.source}}};var M,D,_;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'corp',
    items: corpItems,
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
        <NavigationBar variant="corp" appName="設備自動化控制系統控制台" />
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
}`,...(_=(D=p.parameters)==null?void 0:D.docs)==null?void 0:_.source}}};const J=["Default","Collapsed","CollapsedHidden","WithToggle","DarkMode","Corp"];export{c as Collapsed,m as CollapsedHidden,p as Corp,v as DarkMode,d as Default,y as WithToggle,J as __namedExportsOrder,G as default};
