import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as u}from"./index-BioFo8Zg.js";import{N as Ie}from"./NavigationBar-BgwXuV8o.js";import{S as Pe}from"./SideMenu-CyFGwqL_.js";import{I as Re}from"./IconButton-B9YUEI9a.js";import{S as Ae}from"./Select-tvCMycsp.js";import{L as Be}from"./LMFeatureTitle-M1jfoJks.js";import{L as qe}from"./LMSwitchPanel-RhJoagOh.js";import{L as ce}from"./LMFooter-BABfQ23y.js";import{L as Fe}from"./LMQuadrantSelector-DgenfdiQ.js";import{L as _e}from"./LMMobileInstallButton-Dq6DbXMz.js";import{C as de}from"./Card-D85ioM2d.js";import{B as W}from"./Button-iDd4ESB6.js";import"./index-yBjzXJbu.js";import"./index-CncNTZwy.js";import"./index-B6ujFmsw.js";import"./Tooltip-DHUvMufU.js";import"./Checkbox-DACd6qjG.js";import"./Chip-CxPBUIB_.js";import"./tokens-BoTh6Ygv.js";import"./Divider-PGiQvWAm.js";import"./LMScopeTile-CchEKmIS.js";function me(a,c,s=[]){if(a)for(const i of a){const o=[...s,i];if(i.key===c)return o;if(i.children){const m=me(i.children,c,o);if(m)return m}}}const L=({appName:a,logo:c,userInitial:s="K",onUserClick:i,navActions:o,lineOptions:m,lineValue:y,onLineChange:p,linePlaceholder:d="選擇產線",onLanguageClick:x,menuItems:l,activeKey:h,onMenuItemClick:S,version:v,versionAction:b,collapsed:g,defaultCollapsed:t=!1,onCollapsedChange:n,breadcrumb:M,actions:pe,switchItems:he,switchValue:ge,onSwitchChange:ye,switchRightSlot:fe,switchLocale:ve,children:be,switchPadding:xe=0,contentPadding:Se=32,switchGap:Le=32,contentBackground:Me,footer:q,className:we,style:ke})=>{const F=g!==void 0,[Te,je]=u.useState(t),_=F?g:Te,Ne=()=>{const r=!_;F||je(r),n==null||n(r)},R=r=>typeof r=="number"?`${r}px`:r,A=R(xe),B=R(Se),Ce=R(Le);return e.jsxs("div",{className:["lm-app-shell",we].filter(Boolean).join(" "),style:{display:"flex",flexDirection:"column",height:"100vh",width:"100%",minWidth:0,background:"var(--bg-surface)",...ke},children:[e.jsx(Ie,{appName:a,logo:c,showDefaults:!1,onMenuToggle:Ne,actions:e.jsxs("div",{className:"lm-app-shell__nav-actions",style:{display:"flex",alignItems:"center",gap:12},children:[o,m&&e.jsx("div",{style:{minWidth:160},children:e.jsx(Ae,{options:m,value:y,onChange:r=>p==null?void 0:p(r),size:"s",placeholder:d,clearable:!1})}),e.jsx(Re,{size:"l",tooltipPlacement:"bottom","aria-label":"Language",onClick:x,icon:e.jsx("span",{className:"fas-navbar__lang",children:"En"})}),e.jsx("button",{type:"button",className:"fas-navbar__avatar",onClick:i,"aria-label":`User ${s}`,children:s})]})}),e.jsxs("div",{className:"lm-app-shell__body",style:{display:"flex",flex:1,minHeight:0},children:[e.jsx(Pe,{items:l,activeKey:h,onItemClick:S,collapsed:_,collapsedMode:"hidden",version:v,versionAction:b}),e.jsxs("div",{className:"lm-app-shell__main",style:{flex:1,minWidth:0,display:"flex",flexDirection:"column",minHeight:0,background:Me??"var(--bg-surface-dim)"},children:[e.jsx("div",{className:"lm-app-shell__feature-title-region",style:{flexShrink:0,minWidth:0},children:e.jsx(Be,{items:M??(h?(me(l,h)??[]).filter(r=>!r.isSection).map(r=>({label:r.label})):[]),actions:pe,topOffset:0})}),e.jsx("div",{className:"lm-app-shell__switch-region",style:{paddingTop:A,paddingLeft:A,paddingRight:A,boxSizing:"border-box",flexShrink:0},children:e.jsx(qe,{items:he,value:ge,onChange:ye,locale:ve,rightSlot:fe})}),e.jsx("div",{className:"lm-app-shell__content",style:{flex:1,minWidth:0,minHeight:0,paddingTop:Ce,paddingLeft:B,paddingRight:B,paddingBottom:B,boxSizing:"border-box",overflowY:"auto"},children:be}),q&&e.jsx("div",{className:"lm-app-shell__footer",style:{flexShrink:0,minWidth:0},children:q})]})]})]})};L.displayName="LMAppShell";L.__docgenInfo={description:"",methods:[],displayName:"LMAppShell",props:{appName:{required:!1,tsType:{name:"string"},description:"App 名稱，顯示於 Logo 右側"},logo:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"自訂 Logo"},userInitial:{required:!1,tsType:{name:"string"},description:"Avatar 顯示文字（通常為使用者姓名首字母）",defaultValue:{value:"'K'",computed:!1}},onUserClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"點擊 Avatar 的 callback"},navActions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"NavigationBar 右側自訂操作區（顯示在內建語系切換按鈕左側）"},lineOptions:{required:!1,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:"NavBar 產線下拉選單的選項。傳入後 NavBar 右側會顯示 Select；\n切換時呼叫 `onLineChange`。通常與下方 LMSwitchPanel 的「產線」tile 連動\n（由 page 自行管理：當 line 切換時更新 `switchItems`）。"},lineValue:{required:!1,tsType:{name:"string"},description:"目前選取的產線 value（受控）"},onLineChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"產線切換 callback"},linePlaceholder:{required:!1,tsType:{name:"string"},description:"產線下拉選單的 placeholder，預設「選擇產線」",defaultValue:{value:"'選擇產線'",computed:!1}},onLanguageClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"點擊語系切換按鈕的 callback；未傳則 button 仍渲染但無動作（保留 hover tooltip）"},menuItems:{required:!0,tsType:{name:"Array",elements:[{name:"SideNavItem"}],raw:"SideNavItem[]"},description:"SideMenu 項目結構（群組／模組／功能三層）"},activeKey:{required:!1,tsType:{name:"string"},description:"目前選中的 menu item key"},onMenuItemClick:{required:!1,tsType:{name:"SideMenuProps['onItemClick']",raw:"SideMenuProps['onItemClick']"},description:"點擊 menu item 的 callback"},version:{required:!1,tsType:{name:"string"},description:"SideMenu 底部顯示的版本字串"},versionAction:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"版本號右側 action slot —— 通常傳 `<LMMobileInstallButton ... />`\n提供 QR Code 安裝引導。SideMenu 收折時自動隱藏。"},collapsed:{required:!1,tsType:{name:"boolean"},description:"受控收折狀態；若未傳則由內部管理（搭配 NavBar 漢堡按鈕）"},defaultCollapsed:{required:!1,tsType:{name:"boolean"},description:"非受控模式下的初始收折狀態，預設 false",defaultValue:{value:"false",computed:!1}},onCollapsedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(next: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"next"}],return:{name:"void"}}},description:"收折狀態變更 callback（受控／非受控皆會觸發）"},breadcrumb:{required:!1,tsType:{name:"Array",elements:[{name:"LMFeatureTitleItem"}],raw:"LMFeatureTitleItem[]"},description:"麵包屑導航層級，最多 5 層；最後一項為當前頁面。\n\n未傳時自動依 `menuItems` + `activeKey` 推導路徑（忽略 `isSection` 群組），\n並隨 SideMenu 切換而更新。需要客製化（例如多加層級、跨樹節點）時可手動傳入覆寫。"},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"LMFeatureTitle 右側操作按鈕區（通常為 CTA 按鈕）"},switchItems:{required:!0,tsType:{name:"Array",elements:[{name:"LMSwitchPanelItem"}],raw:"LMSwitchPanelItem[]"},description:"Switch panel 項目"},switchValue:{required:!0,tsType:{name:"string"},description:"目前選取的 scope key（受控）"},onSwitchChange:{required:!0,tsType:{name:"LMSwitchPanelProps['onChange']",raw:"LMSwitchPanelProps['onChange']"},description:"切換 scope 時的 callback"},switchRightSlot:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"SwitchPanel 最右側 slot —— 固定在 panel 最右、不受 tile scroll 影響。\n通常傳 `<LMQuadrantSelector size={52} ... />`。"},switchLocale:{required:!1,tsType:{name:"LMSwitchPanelProps['locale']",raw:"LMSwitchPanelProps['locale']"},description:"Switch panel 內 tile 的 type caption / 狀態文字語系，預設 `zh`"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"主內容（功能畫面）"},switchPadding:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"LMSwitchPanel 外距（與 NavBar / SideMenu 之間的留白）。預設 `0`\n（flush 樣式：panel 貼齊 NavBar / SideMenu，仿 core FeatureTitle）。",defaultValue:{value:"0",computed:!1}},contentPadding:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"真正功能 content 範圍的 padding（圍繞 children）。預設 32px。\n同時套用於 left / right / bottom；top 由 `switchGap` 控制。",defaultValue:{value:"32",computed:!1}},switchGap:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`LMSwitchPanel 與 children content 之間的垂直間距。預設 32px
（對應 design system「32px Section: card vs. card / major page divisions」）。`,defaultValue:{value:"32",computed:!1}},contentBackground:{required:!1,tsType:{name:"string"},description:"主內容區背景，預設沿用 css token `var(--bg-surface-dim)`"},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`底部 footer slot（通常傳 \`<LMFooter />\`，但可放任意 ReactNode）。

行為：
 - **未傳 / null** → 不渲染、不佔空間
 - **有傳** → 貼齊主內容區左 / 右 / 底邊；
   SideMenu 收合時自動跟著變寬（footer 是 Main column 的最後一個 flex item）；
   content-region 變成唯一 scroll 容器，footer 永遠可見

Footer 的 button 行為與資料狀態由 page 控制；shell 只負責放置位置。`},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const dt={title:"LM/Templates/LMAppShell",component:L,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`LMAppShell — LM 專案頁面最外層版面樣板。

與 core \`AppShell\` 同一角色，但有兩處差異：
  1. Header 由上至下三層：NavBar → LMFeatureTitle → LMSwitchPanel
     （core AppShell 只有 NavBar + FeatureTitle 兩層）
  2. SideMenu 收折時固定為 \`'hidden'\`（width 0 完全消失），不保留 narrow 形態`}}}},We=[{key:"lm",label:"LM 工具",isSection:!0,children:[{key:"monitor",label:"產線監控",icon:"monitoring",defaultOpen:!0,children:[{key:"realtime",label:"即時數據"},{key:"history",label:"歷史趨勢"}]},{key:"devices",label:"設備管理",icon:"precision_manufacturing"}]}],ue=[{value:"line-a",label:"產線 A"},{value:"line-b",label:"產線 B"},{value:"line-c",label:"產線 C"}],ze=[{key:"yamaha-1",label:"Yamaha YSM20R #01",type:"machine",status:"normal"},{key:"pana-2",label:"Panasonic NPM-W2 #02",type:"machine",status:"warning"},{key:"fuji-3",label:"Fuji NXT III #03",type:"machine",status:"down"}],De=a=>{var s;const c=((s=ue.find(i=>i.value===a))==null?void 0:s.label)??a;return[{key:a,label:c,type:"line",status:"normal"},...ze]},Oe=()=>e.jsx("div",{style:{width:160,height:160,background:"repeating-linear-gradient(45deg, var(--text-high), var(--text-high) 4px, var(--bg-surface) 4px, var(--bg-surface) 8px)",borderRadius:4},role:"img","aria-label":"QR Code 範例"}),f=({defaultCollapsed:a,footer:c,longContent:s,withQuadrant:i,versionAction:o,actions:m})=>{const[y,p]=u.useState("realtime"),[d,x]=u.useState("line-a"),[l,h]=u.useState("line-a"),[S,v]=u.useState(["topLeft"]),b=De(d),g=b.some(n=>n.key===l)?l:d,t=n=>{x(n),h(n)};return e.jsx(L,{appName:"LM Console",userInitial:"L",menuItems:We,activeKey:y,onMenuItemClick:n=>p(n),version:"v1.0.0",defaultCollapsed:a,lineOptions:ue,lineValue:d,onLineChange:t,actions:m,switchItems:b,switchValue:g,onSwitchChange:n=>h(n),switchRightSlot:i?e.jsx(Fe,{value:S,onChange:v,size:52}):void 0,versionAction:o,footer:c,children:e.jsxs(de,{variant:"elevated",children:[e.jsx("h3",{style:{margin:"0 0 12px",color:"var(--text-high)"},children:"主內容區"}),e.jsxs("p",{style:{margin:0,color:"var(--text-medium)"},children:["當前產線：",e.jsx("strong",{style:{color:"var(--primary)"},children:d}),"；當前 scope：",e.jsx("strong",{style:{color:"var(--primary)"},children:g}),"；當前選單：",e.jsx("strong",{style:{color:"var(--primary)"},children:y})]}),s&&e.jsx("div",{style:{marginTop:16},children:Array.from({length:30}).map((n,M)=>e.jsxs("p",{style:{color:"var(--text-medium)"},children:["Row ",M+1,"：模擬長內容 — 滾動時 footer 應永遠貼底、switch panel 應永遠貼頂。"]},M))})]})})},w={render:()=>e.jsx(f,{withQuadrant:!0,versionAction:e.jsx(_e,{qrCode:e.jsx(Oe,{})})})},k={name:"With LMFeatureTitle actions (CTA)",render:()=>e.jsx(f,{withQuadrant:!0,actions:e.jsxs(e.Fragment,{children:[e.jsx(W,{variant:"text",color:"secondary",size:"s",children:"取消"}),e.jsx(W,{variant:"contained",size:"s",children:"儲存"})]})})},T={name:"Without quadrant — no rightSlot",render:()=>e.jsx(f,{})},j={name:"SideMenu hidden — full-width content",render:()=>e.jsx(f,{defaultCollapsed:!0})},N={name:"With LMFooter slot",render:()=>e.jsx(f,{footer:e.jsx(ce,{onHelp:()=>alert("open help"),onPrev:()=>alert("prev"),onNext:()=>alert("next")})})},C={name:"Footer + long scrolling content",render:()=>e.jsx(f,{longContent:!0,footer:e.jsx(ce,{onHelp:()=>{},onPrev:()=>{},onNext:()=>{}})})},I={name:"Locale toggle — switchLocale 切換",render:()=>{const a={zh:{menu:[{key:"lm",label:"LM 工具",isSection:!0,children:[{key:"monitor",label:"產線監控",icon:"monitoring",defaultOpen:!0,children:[{key:"realtime",label:"即時數據"},{key:"history",label:"歷史趨勢"}]},{key:"devices",label:"設備管理",icon:"precision_manufacturing"}]}],lines:[{value:"line-a",label:"產線 A"},{value:"line-b",label:"產線 B"},{value:"line-c",label:"產線 C"}],linePlaceholder:"選擇產線",contentTitle:"主內容區",contentBody:"點 NavBar 右側內建的「En」語系按鈕切換語系，SideMenu、產線下拉、LMSwitchPanel 內 tile 都會同步切換。"},en:{menu:[{key:"lm",label:"LM Tools",isSection:!0,children:[{key:"monitor",label:"Line Monitoring",icon:"monitoring",defaultOpen:!0,children:[{key:"realtime",label:"Realtime Data"},{key:"history",label:"Historical Trends"}]},{key:"devices",label:"Device Management",icon:"precision_manufacturing"}]}],lines:[{value:"line-a",label:"Line A"},{value:"line-b",label:"Line B"},{value:"line-c",label:"Line C"}],linePlaceholder:"Select line",contentTitle:"Main content",contentBody:'Click the built-in "En" language button in the NavBar (top-right). The SideMenu, line dropdown, and switch panel tiles all update in sync.'}},c=()=>{var g;const[s,i]=u.useState("realtime"),[o,m]=u.useState("line-a"),[y,p]=u.useState("line-a"),[d,x]=u.useState("zh"),l=a[d],h=[{key:"yamaha-1",label:"Yamaha YSM20R #01",type:"machine",status:"normal"},{key:"pana-2",label:"Panasonic NPM-W2 #02",type:"machine",status:"warning"},{key:"fuji-3",label:"Fuji NXT III #03",type:"machine",status:"down"}],S=((g=l.lines.find(t=>t.value===o))==null?void 0:g.label)??o,v=[{key:o,label:S,type:"line",status:"normal"},...h],b=v.some(t=>t.key===y)?y:o;return e.jsx(L,{appName:"LM Console",userInitial:"L",menuItems:l.menu,activeKey:s,onMenuItemClick:t=>i(t),version:"v1.0.0",lineOptions:l.lines,lineValue:o,onLineChange:t=>{m(t),p(t)},linePlaceholder:l.linePlaceholder,onLanguageClick:()=>x(t=>t==="zh"?"en":"zh"),switchItems:v,switchValue:b,onSwitchChange:t=>p(t),switchLocale:d,children:e.jsxs(de,{variant:"elevated",children:[e.jsx("h3",{style:{margin:"0 0 12px",color:"var(--text-high)"},children:l.contentTitle}),e.jsx("p",{style:{margin:0,color:"var(--text-medium)"},children:l.contentBody}),e.jsx("p",{style:{margin:"8px 0 0",color:"var(--text-medium)"},children:e.jsxs("code",{children:['locale = "',d,'"']})})]})})};return e.jsx(c,{})}},P={name:"Custom footer node (not LMFooter)",render:()=>e.jsx(f,{footer:e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",alignItems:"center",gap:12,padding:"12px 24px",minHeight:64,background:"var(--bg-surface)",borderTop:"1px solid var(--divider)"},children:[e.jsx("span",{style:{color:"var(--text-medium)",marginRight:"auto"},children:"Footer slot 接受任意 ReactNode（不一定要 LMFooter）"}),e.jsx("button",{children:"自訂 A"}),e.jsx("button",{children:"自訂 B"})]})})};var z,D,O;w.parameters={...w.parameters,docs:{...(z=w.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => <Demo withQuadrant versionAction={<LMMobileInstallButton qrCode={<PlaceholderQR />} />} />
}`,...(O=(D=w.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var H,Q,V;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'With LMFeatureTitle actions (CTA)',
  render: () => <Demo withQuadrant actions={<>
          <Button variant="text" color="secondary" size="s">取消</Button>
          <Button variant="contained" size="s">儲存</Button>
        </>} />
}`,...(V=(Q=k.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var E,K,Y;T.parameters={...T.parameters,docs:{...(E=T.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'Without quadrant — no rightSlot',
  render: () => <Demo />
}`,...(Y=(K=T.parameters)==null?void 0:K.docs)==null?void 0:Y.source}}};var X,G,U;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
  name: 'SideMenu hidden — full-width content',
  render: () => <Demo defaultCollapsed />
}`,...(U=(G=j.parameters)==null?void 0:G.docs)==null?void 0:U.source}}};var $,Z,J;N.parameters={...N.parameters,docs:{...($=N.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'With LMFooter slot',
  render: () => <Demo footer={<LMFooter onHelp={() => alert('open help')} onPrev={() => alert('prev')} onNext={() => alert('next')} />} />
}`,...(J=(Z=N.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var ee,te,ne;C.parameters={...C.parameters,docs:{...(ee=C.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  name: 'Footer + long scrolling content',
  render: () => <Demo longContent footer={<LMFooter onHelp={() => {}} onPrev={() => {}} onNext={() => {}} />} />
}`,...(ne=(te=C.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,ie,oe;I.parameters={...I.parameters,docs:{...(ae=I.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  name: 'Locale toggle — switchLocale 切換',
  render: () => {
    const COPY = {
      zh: {
        menu: [{
          key: 'lm',
          label: 'LM 工具',
          isSection: true,
          children: [{
            key: 'monitor',
            label: '產線監控',
            icon: 'monitoring',
            defaultOpen: true,
            children: [{
              key: 'realtime',
              label: '即時數據'
            }, {
              key: 'history',
              label: '歷史趨勢'
            }]
          }, {
            key: 'devices',
            label: '設備管理',
            icon: 'precision_manufacturing'
          }]
        }] as SideNavItem[],
        lines: [{
          value: 'line-a',
          label: '產線 A'
        }, {
          value: 'line-b',
          label: '產線 B'
        }, {
          value: 'line-c',
          label: '產線 C'
        }],
        linePlaceholder: '選擇產線',
        contentTitle: '主內容區',
        contentBody: '點 NavBar 右側內建的「En」語系按鈕切換語系，SideMenu、產線下拉、LMSwitchPanel 內 tile 都會同步切換。'
      },
      en: {
        menu: [{
          key: 'lm',
          label: 'LM Tools',
          isSection: true,
          children: [{
            key: 'monitor',
            label: 'Line Monitoring',
            icon: 'monitoring',
            defaultOpen: true,
            children: [{
              key: 'realtime',
              label: 'Realtime Data'
            }, {
              key: 'history',
              label: 'Historical Trends'
            }]
          }, {
            key: 'devices',
            label: 'Device Management',
            icon: 'precision_manufacturing'
          }]
        }] as SideNavItem[],
        lines: [{
          value: 'line-a',
          label: 'Line A'
        }, {
          value: 'line-b',
          label: 'Line B'
        }, {
          value: 'line-c',
          label: 'Line C'
        }],
        linePlaceholder: 'Select line',
        contentTitle: 'Main content',
        contentBody: 'Click the built-in "En" language button in the NavBar (top-right). The SideMenu, line dropdown, and switch panel tiles all update in sync.'
      }
    } as const;
    const LocaleDemo: React.FC = () => {
      const [activeKey, setActiveKey] = useState('realtime');
      const [line, setLine] = useState('line-a');
      const [scope, setScope] = useState<string>('line-a');
      const [locale, setLocale] = useState<'zh' | 'en'>('zh');
      const t = COPY[locale];
      const machineTiles: LMSwitchPanelItem[] = [{
        key: 'yamaha-1',
        label: 'Yamaha YSM20R #01',
        type: 'machine',
        status: 'normal'
      }, {
        key: 'pana-2',
        label: 'Panasonic NPM-W2 #02',
        type: 'machine',
        status: 'warning'
      }, {
        key: 'fuji-3',
        label: 'Fuji NXT III #03',
        type: 'machine',
        status: 'down'
      }];
      const lineLabel = t.lines.find(l => l.value === line)?.label ?? line;
      const switchItems: LMSwitchPanelItem[] = [{
        key: line,
        label: lineLabel,
        type: 'line',
        status: 'normal'
      }, ...machineTiles];
      const effectiveScope = switchItems.some(it => it.key === scope) ? scope : line;
      return <LMAppShell appName="LM Console" userInitial="L" menuItems={t.menu} activeKey={activeKey} onMenuItemClick={key => setActiveKey(key)} version="v1.0.0" lineOptions={t.lines} lineValue={line} onLineChange={next => {
        setLine(next);
        setScope(next);
      }} linePlaceholder={t.linePlaceholder} onLanguageClick={() => setLocale(v => v === 'zh' ? 'en' : 'zh')} switchItems={switchItems} switchValue={effectiveScope} onSwitchChange={key => setScope(key)} switchLocale={locale}>
          <Card variant="elevated">
            <h3 style={{
            margin: '0 0 12px',
            color: 'var(--text-high)'
          }}>{t.contentTitle}</h3>
            <p style={{
            margin: 0,
            color: 'var(--text-medium)'
          }}>{t.contentBody}</p>
            <p style={{
            margin: '8px 0 0',
            color: 'var(--text-medium)'
          }}>
              <code>locale = "{locale}"</code>
            </p>
          </Card>
        </LMAppShell>;
    };
    return <LocaleDemo />;
  }
}`,...(oe=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:oe.source}}};var le,re,se;P.parameters={...P.parameters,docs:{...(le=P.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Custom footer node (not LMFooter)',
  render: () => <Demo footer={<div style={{
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 12,
    padding: '12px 24px',
    minHeight: 64,
    background: 'var(--bg-surface)',
    borderTop: '1px solid var(--divider)'
  }}>
          <span style={{
      color: 'var(--text-medium)',
      marginRight: 'auto'
    }}>
            Footer slot 接受任意 ReactNode（不一定要 LMFooter）
          </span>
          <button>自訂 A</button>
          <button>自訂 B</button>
        </div>} />
}`,...(se=(re=P.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};const mt=["Default","WithFeatureTitleActions","WithoutQuadrant","SideMenuHidden","WithFooter","WithFooterAndLongContent","LocaleToggle","CustomFooter"];export{P as CustomFooter,w as Default,I as LocaleToggle,j as SideMenuHidden,k as WithFeatureTitleActions,N as WithFooter,C as WithFooterAndLongContent,T as WithoutQuadrant,mt as __namedExportsOrder,dt as default};
