import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r}from"./index-BioFo8Zg.js";import{S as l}from"./SideMenu-CR0GA44M.js";import{N as o}from"./NavigationBar-bRpudFzd.js";import"./index-yBjzXJbu.js";import"./index-CncNTZwy.js";import"./index-B6ujFmsw.js";import"./IconButton-B9YUEI9a.js";import"./Tooltip-DHUvMufU.js";const Y={title:"Core/Layout/SideMenu",component:l,parameters:{layout:"fullscreen"}},d=[{key:"dev",label:"開發者工具",isSection:!0,children:[{key:"nodes",label:"節點",icon:"device_hub",defaultOpen:!0,children:[{key:"node-mgmt",label:"節點管理"},{key:"device-templates",label:"設備連線模板"}]},{key:"data-processing",label:"數據處理",icon:"analytics",children:[{key:"pipelines",label:"資料管線"},{key:"transforms",label:"資料轉換"}]},{key:"low-code",label:"低代碼工具",icon:"code",children:[{key:"flows",label:"流程設計"}]},{key:"apps",label:"應用程式",icon:"apps",children:[{key:"app-list",label:"應用列表"}]},{key:"alerts",label:"告警管理",icon:"notifications_active",children:[{key:"alert-rules",label:"告警規則"},{key:"alert-history",label:"告警歷史"}]},{key:"ai-service",label:"AI服務",icon:"auto_awesome",children:[{key:"ai-models",label:"模型管理"}]},{key:"logs",label:"日誌",icon:"description",children:[{key:"system-logs",label:"系統日誌"}]},{key:"images",label:"映像檔",icon:"note_stack"}]},{key:"ops",label:"維運助手",isSection:!0,children:[{key:"monitoring",label:"系統監控",icon:"monitoring",children:[{key:"machine-status",label:"機台監控"},{key:"service-health",label:"服務健康度"}]},{key:"tickets",label:"工單管理",icon:"assignment",children:[{key:"ticket-list",label:"工單列表"},{key:"maintenance-schedule",label:"維修排程"}]},{key:"backup",label:"備份還原",icon:"backup"}]}],c={args:{items:d,activeKey:"node-mgmt",version:"v1.2.0"},render:a=>{const[i,s]=r.useState(a.activeKey);return e.jsxs("div",{style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(o,{appName:"APP Name"}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(l,{...a,activeKey:i,onItemClick:t=>s(t)}),e.jsx("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)",overflow:"auto"},children:e.jsxs("p",{style:{color:"var(--text-medium)",fontFamily:"Roboto, sans-serif"},children:["Active: ",e.jsx("strong",{style:{color:"var(--primary)"},children:i})]})})]})]})}},m={args:{items:d,activeKey:"node-mgmt",collapsed:!0,version:"v1.2.0"},render:a=>e.jsxs("div",{style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(o,{appName:"APP Name"}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(l,{...a}),e.jsx("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)"}})]})]})},y={args:{items:d,activeKey:"node-mgmt",collapsed:!0,collapsedMode:"hidden",version:"v1.2.0"},render:a=>e.jsxs("div",{style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(o,{appName:"APP Name"}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(l,{...a}),e.jsxs("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)",color:"var(--text-medium)",fontFamily:"Roboto, sans-serif"},children:["SideMenu is fully hidden (width: 0). Toggle ",e.jsx("code",{children:"collapsedMode"})," ","to ",e.jsx("code",{children:"'narrow'"})," in the Controls panel to switch to icon-only mode."]})]})]})},v={args:{items:d,activeKey:"node-mgmt",version:"v1.2.0"},render:a=>{const[i,s]=r.useState(!1),[t,L]=r.useState(a.activeKey);return e.jsxs("div",{style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(o,{appName:"APP Name",onMenuToggle:()=>s(u=>!u)}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(l,{...a,collapsed:i,activeKey:t,onItemClick:u=>L(u)}),e.jsx("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)",overflow:"auto"},children:e.jsxs("p",{style:{color:"var(--text-medium)",fontFamily:"Roboto, sans-serif"},children:["Click the ",e.jsx("strong",{children:"☰ hamburger"})," button in the NavBar to toggle the side menu.",e.jsx("br",{}),"Active: ",e.jsx("strong",{style:{color:"var(--primary)"},children:t})]})})]})]})}},p={args:{items:d,activeKey:"node-mgmt",version:"v1.2.0"},render:a=>{const[i,s]=r.useState(a.activeKey);return e.jsxs("div",{"data-theme":"dark",style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(o,{appName:"APP Name"}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(l,{...a,activeKey:i,onItemClick:t=>s(t)}),e.jsx("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)"}})]})]})}},O=[{key:"dev",label:"開發者工具",isSection:!0,children:[{key:"nodes",label:"節點",icon:"node",defaultOpen:!0,children:[{key:"node-mgmt",label:"節點管理"},{key:"device-templates",label:"設備連線模板"}]},{key:"data-processing",label:"數據處理",icon:"data_processing",children:[{key:"pipelines",label:"資料管線"},{key:"transforms",label:"資料轉換"}]},{key:"low-code",label:"低代碼工具",icon:"low_code_tool",children:[{key:"flows",label:"流程設計"}]},{key:"apps",label:"應用程式",icon:"application",children:[{key:"app-list",label:"應用列表"}]},{key:"alerts",label:"告警管理",icon:"alert_management",children:[{key:"alert-rules",label:"告警規則"},{key:"alert-history",label:"告警歷史"}]},{key:"ai-service",label:"AI服務",icon:"ai_service",children:[{key:"ai-models",label:"模型管理"}]},{key:"logs",label:"日誌",icon:"log",children:[{key:"system-logs",label:"系統日誌"}]},{key:"images",label:"映像檔",icon:"image_file"},{key:"modules",label:"模組管理",icon:"module"}]},{key:"ops",label:"維運助手",isSection:!0,children:[{key:"monitoring",label:"系統監控",icon:"system_monitoring",children:[{key:"machine-status",label:"機台監控"},{key:"service-health",label:"服務健康度"}]},{key:"storage",label:"儲存空間",icon:"storage_space"},{key:"settings",label:"系統設定",icon:"settings"}]}],g={args:{variant:"corp",items:O,activeKey:"node-mgmt",version:"2.0.0"},render:a=>{const[i,s]=r.useState(a.activeKey);return e.jsxs("div",{style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(o,{variant:"corp",appName:"設備自動化控制系統控制台"}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(l,{...a,activeKey:i,onItemClick:t=>s(t)}),e.jsx("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)",overflow:"auto"},children:e.jsxs("p",{style:{color:"var(--text-medium)",fontFamily:"Roboto, sans-serif"},children:["Active: ",e.jsx("strong",{style:{color:"var(--primary)"},children:i})]})})]})]})}},n={args:{variant:"corp",items:O,activeKey:"node-mgmt",collapsed:!0,version:"2.0.0"},render:a=>{const[i,s]=r.useState(a.activeKey);return e.jsxs("div",{style:{display:"flex",height:"100vh",flexDirection:"column"},children:[e.jsx(o,{variant:"corp",appName:"設備自動化控制系統控制台"}),e.jsxs("div",{style:{display:"flex",flex:1,overflow:"hidden"},children:[e.jsx(l,{...a,activeKey:i,onItemClick:t=>s(t)}),e.jsx("main",{style:{flex:1,padding:32,background:"var(--bg-surface-dim)",overflow:"auto"},children:e.jsx("p",{style:{color:"var(--text-medium)",fontFamily:"Roboto, sans-serif"},children:"Hover 左側模組 icon 會浮出固定整條面板（底部顯示版本）。"})})]})]})}};var f,h,x;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(h=c.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var b,k,K;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(K=(k=m.parameters)==null?void 0:k.docs)==null?void 0:K.source}}};var j,S,w;y.parameters={...y.parameters,docs:{...(j=y.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(w=(S=y.parameters)==null?void 0:S.docs)==null?void 0:w.source}}};var N,A,C;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(C=(A=v.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var I,M,P;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(P=(M=p.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var D,_,R;g.parameters={...g.parameters,docs:{...(D=g.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: 'corp',
    items: corpItems,
    activeKey: 'node-mgmt',
    version: '2.0.0'
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
}`,...(R=(_=g.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var B,F,T,H,E;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'corp',
    items: corpItems,
    activeKey: 'node-mgmt',
    collapsed: true,
    version: '2.0.0'
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
              Hover 左側模組 icon 會浮出固定整條面板（底部顯示版本）。
            </p>
          </main>
        </div>
      </div>;
  }
}`,...(T=(F=n.parameters)==null?void 0:F.docs)==null?void 0:T.source},description:{story:`Corp 收折：narrow rail 只顯示產品 Logo（底部）；hover 模組會浮出與 SideMenu
等高的「固定整條」面板，面板底部顯示版本。`,...(E=(H=n.parameters)==null?void 0:H.docs)==null?void 0:E.description}}};const Z=["Default","Collapsed","CollapsedHidden","WithToggle","DarkMode","Corp","CorpCollapsed"];export{m as Collapsed,y as CollapsedHidden,g as Corp,n as CorpCollapsed,p as DarkMode,c as Default,v as WithToggle,Z as __namedExportsOrder,Y as default};
