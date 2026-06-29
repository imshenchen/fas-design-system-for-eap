import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{L as i}from"./LMMobileInstallButton-abJbI09o.js";import"./index-yBjzXJbu.js";import"./index-BioFo8Zg.js";import"./IconButton-B9YUEI9a.js";import"./Tooltip-DHUvMufU.js";import"./tokens-tiCIra3T.js";const C={title:"LM/Components/LMMobileInstallButton",component:i,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:`LMMobileInstallButton — 安裝 Mobile 版本的 trigger 按鈕。

- 點擊浮出 popover 顯示 QR Code
- QR Code 由 caller 提供（\`<img>\` 或 SVG）
- 通常放在 LMAppShell 的 SideMenu 版本號右側`}}}},t=()=>e.jsx("div",{style:{width:"160px",height:"160px",background:`repeating-linear-gradient(
        45deg,
        var(--text-high),
        var(--text-high) 4px,
        var(--bg-surface) 4px,
        var(--bg-surface) 8px
      )`,borderRadius:"4px"},role:"img","aria-label":"範例 QR Code"}),r={render:()=>e.jsx("div",{style:{padding:80,background:"var(--bg-surface-dim)"},children:e.jsx(i,{qrCode:e.jsx(t,{})})})},o={name:"Custom title + description",render:()=>e.jsx("div",{style:{padding:80,background:"var(--bg-surface-dim)"},children:e.jsx(i,{qrCode:e.jsx(t,{}),title:"下載 Delta LM Mobile",description:"使用裝置內建相機掃描 QR Code，即可下載 iOS / Android 版本"})})},a={name:"In SideMenu footer (visual context)",render:()=>e.jsxs("div",{style:{width:280,background:"var(--bg-surface)",border:"1px solid var(--card-outlined)",borderRadius:8,padding:8,marginTop:400},children:[e.jsx("div",{style:{height:1,background:"var(--divider)",marginBottom:4}}),e.jsxs("div",{style:{display:"flex",alignItems:"center"},children:[e.jsxs("div",{style:{flex:1,display:"flex",alignItems:"center",gap:12,padding:"8px 12px",color:"var(--primary)",fontSize:13,fontFamily:'"Noto Sans TC", sans-serif'},children:[e.jsx("span",{className:"material-symbols-outlined",children:"deployed_code"}),"v1.2.0"]}),e.jsx("span",{style:{paddingRight:8},children:e.jsx(i,{qrCode:e.jsx(t,{})})})]})]})};var d,s,n;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 80,
    background: 'var(--bg-surface-dim)'
  }}>
      <LMMobileInstallButton qrCode={<PlaceholderQR />} />
    </div>
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var l,p,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: 'Custom title + description',
  render: () => <div style={{
    padding: 80,
    background: 'var(--bg-surface-dim)'
  }}>
      <LMMobileInstallButton qrCode={<PlaceholderQR />} title="下載 Delta LM Mobile" description="使用裝置內建相機掃描 QR Code，即可下載 iOS / Android 版本" />
    </div>
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var m,g,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: 'In SideMenu footer (visual context)',
  render: () => <div style={{
    width: 280,
    background: 'var(--bg-surface)',
    border: '1px solid var(--card-outlined)',
    borderRadius: 8,
    padding: 8,
    marginTop: 400 // push down so popover (above trigger) is visible in canvas
  }}>
      <div style={{
      height: 1,
      background: 'var(--divider)',
      marginBottom: 4
    }} />
      <div style={{
      display: 'flex',
      alignItems: 'center'
    }}>
        <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '8px 12px',
        color: 'var(--primary)',
        fontSize: 13,
        fontFamily: '"Noto Sans TC", sans-serif'
      }}>
          <span className="material-symbols-outlined">deployed_code</span>
          v1.2.0
        </div>
        <span style={{
        paddingRight: 8
      }}>
          <LMMobileInstallButton qrCode={<PlaceholderQR />} />
        </span>
      </div>
    </div>
}`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const j=["Default","CustomTitleAndDescription","InSideMenuFooter"];export{o as CustomTitleAndDescription,r as Default,a as InSideMenuFooter,j as __namedExportsOrder,C as default};
