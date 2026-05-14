import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as d}from"./index-BioFo8Zg.js";import{F as le}from"./FileBrowser-Ct-yyiCb.js";import{B as L}from"./Button-iDd4ESB6.js";import{C}from"./Checkbox-DACd6qjG.js";import{I as _}from"./Icon-CEbj-L6z.js";import"./index-yBjzXJbu.js";import"./Breadcrumbs-sApHxDHF.js";import"./IconButton-B9YUEI9a.js";import"./Tooltip-DHUvMufU.js";import"./Spin-CukcU5C-.js";function D(s,a){if(s)for(const n of s){if(n.type==="file"&&n.id===a)return{id:n.id,name:n.name,caption:n.caption};if(n.type==="folder"&&n.children){const c=D(n.children,a);if(c)return c}}}const m=({nodes:s,value:a,onChange:n,loadChildren:c,height:u=480,addLabel:G="加入",removeLabel:O="移除",resetLabel:Q="Reset",selectAllLabel:$="全選",targetEmptyText:K="尚未加入任何檔案",targetTitle:H="已選檔案",emptyText:J,fileBrowserLabels:U,className:X})=>{const[p,j]=d.useState([]),[o,f]=d.useState([]),[Y,N]=d.useState(new Map);d.useEffect(()=>{N(t=>{const r=new Map(t),i=g=>{g.forEach(l=>{l.type==="file"?r.has(l.id)||r.set(l.id,{id:l.id,name:l.name,caption:l.caption}):l.children&&i(l.children)})};return i(s),r})},[s]);const Z=d.useMemo(()=>{if(c)return t=>c(t).then(r=>(N(i=>{const g=new Map(i);return r.forEach(l=>{l.type==="file"&&!g.has(l.id)&&g.set(l.id,{id:l.id,name:l.name,caption:l.caption})}),g}),r))},[c]),ee=()=>{if(p.length===0)return;const t=new Set(a);p.forEach(r=>t.add(r)),n(Array.from(t)),j([])},te=()=>{if(o.length===0)return;const t=new Set(o);n(a.filter(r=>!t.has(r))),f([])},w=t=>{f(r=>r.includes(t)?r.filter(i=>i!==t):[...r,t])},ae=()=>{a.length===0&&p.length===0&&o.length===0||(n([]),j([]),f([]))},A=a.length>0&&o.length===a.length,re=o.length>0&&o.length<a.length,k=()=>{f(A?[]:[...a])};d.useEffect(()=>{f(t=>t.filter(r=>a.includes(r)))},[a]);const h=a.map(t=>{const r=Y.get(t);if(r)return r;const i=D(s,t);return i||{id:t,name:t}}),se=p.filter(t=>!a.includes(t)).length,ne={height:typeof u=="number"?`${u}px`:u};return e.jsxs("div",{className:["fas-ft",X].filter(Boolean).join(" "),style:ne,children:[e.jsx("div",{className:"fas-ft__left",children:e.jsx(le,{nodes:s,value:p,onChange:j,loadChildren:Z,emptyText:J,height:"100%",...U})}),e.jsxs("div",{className:"fas-ft__center",children:[e.jsx(L,{variant:"outlined",color:"secondary",size:"s",disabled:se===0,onClick:ee,iconRight:e.jsx(_,{name:"navigate_next"}),children:G}),e.jsx(L,{variant:"outlined",color:"secondary",size:"s",disabled:o.length===0,onClick:te,iconLeft:e.jsx(_,{name:"navigate_before"}),children:O}),e.jsx(L,{variant:"text",color:"error",size:"s",disabled:a.length===0&&p.length===0&&o.length===0,onClick:ae,children:Q})]}),e.jsxs("div",{className:"fas-ft__right",children:[e.jsx("div",{className:"fas-ft__right-header",children:e.jsxs("span",{className:"fas-ft__right-title",children:[H,e.jsxs("span",{className:"fas-ft__right-count",children:["(",h.length,")"]})]})}),h.length>0&&e.jsxs("div",{className:"fas-ft__select-all",onClick:t=>{t.target.closest(".fas-checkbox")||k()},children:[e.jsx("span",{className:"fas-ft__select-all-checkbox",onClick:t=>t.stopPropagation(),children:e.jsx(C,{checked:A,indeterminate:re,onChange:k,size:"m"})}),e.jsxs("span",{className:"fas-ft__select-all-label",children:[$," ",e.jsxs("span",{className:"fas-ft__select-all-count",children:["(",o.length," / ",h.length,")"]})]})]}),e.jsx("div",{className:"fas-ft__right-list",children:h.length===0?e.jsxs("div",{className:"fas-ft__right-empty",children:[e.jsx("div",{className:"fas-ft__right-empty-illu","aria-hidden":"true",children:e.jsx(_,{name:"inbox",size:56})}),e.jsx("div",{className:"fas-ft__right-empty-text",children:K})]}):h.map(t=>{const r=o.includes(t.id);return e.jsxs("div",{className:["fas-ft__target-row",r&&"fas-ft__target-row--checked"].filter(Boolean).join(" "),onClick:()=>w(t.id),children:[e.jsx("span",{className:"fas-ft__target-checkbox",onClick:i=>i.stopPropagation(),children:e.jsx(C,{checked:r,onChange:()=>w(t.id),size:"m"})}),e.jsx("span",{className:"fas-ft__target-icon","aria-hidden":!0,children:e.jsx("span",{className:"material-symbols-outlined",children:"description"})}),e.jsxs("div",{className:"fas-ft__target-text",children:[e.jsx("span",{className:"fas-ft__target-name",title:t.name,children:t.name}),t.caption&&e.jsx("span",{className:"fas-ft__target-caption",children:t.caption})]})]},t.id)})})]})]})};m.displayName="FileTransfer";m.__docgenInfo={description:"",methods:[],displayName:"FileTransfer",props:{nodes:{required:!0,tsType:{name:"Array",elements:[{name:"FileBrowserNode"}],raw:"FileBrowserNode[]"},description:"root 層節點，pass-through 給 FileBrowser"},value:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"已加入的 file id（受控）"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(next: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"next"}],return:{name:"void"}}},description:""},loadChildren:{required:!1,tsType:{name:"signature",type:"function",raw:"(folderId: string) => Promise<FileBrowserNode[]>",signature:{arguments:[{type:{name:"string"},name:"folderId"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"FileBrowserNode"}],raw:"FileBrowserNode[]"}],raw:"Promise<FileBrowserNode[]>"}}},description:"lazy load 子節點"},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"整體高度，預設 480",defaultValue:{value:"480",computed:!1}},addLabel:{required:!1,tsType:{name:"string"},description:"中央加入按鈕文字，預設「加入」",defaultValue:{value:"'加入'",computed:!1}},removeLabel:{required:!1,tsType:{name:"string"},description:"中央移除按鈕文字，預設「移除」",defaultValue:{value:"'移除'",computed:!1}},resetLabel:{required:!1,tsType:{name:"string"},description:"中央 Reset 按鈕文字，預設「Reset」",defaultValue:{value:"'Reset'",computed:!1}},selectAllLabel:{required:!1,tsType:{name:"string"},description:"右側「全選」label，預設「全選」",defaultValue:{value:"'全選'",computed:!1}},targetEmptyText:{required:!1,tsType:{name:"string"},description:"右側空狀態文字，預設「尚未加入任何檔案」",defaultValue:{value:"'尚未加入任何檔案'",computed:!1}},targetTitle:{required:!1,tsType:{name:"string"},description:"右側欄標題，預設「已選檔案」",defaultValue:{value:"'已選檔案'",computed:!1}},emptyText:{required:!1,tsType:{name:"string"},description:"FileBrowser 空資料夾文字（pass-through）"},fileBrowserLabels:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  rootLabel?: string;
  homeAriaLabel?: string;
  backAriaLabel?: string;
  treeAriaLabel?: string;
  selectAllLabel?: string;
  enterAriaLabel?: (name: string) => string;
  loadFailedText?: string;
  retryLabel?: string;
}`,signature:{properties:[{key:"rootLabel",value:{name:"string",required:!1}},{key:"homeAriaLabel",value:{name:"string",required:!1}},{key:"backAriaLabel",value:{name:"string",required:!1}},{key:"treeAriaLabel",value:{name:"string",required:!1}},{key:"selectAllLabel",value:{name:"string",required:!1}},{key:"enterAriaLabel",value:{name:"signature",type:"function",raw:"(name: string) => string",signature:{arguments:[{type:{name:"string"},name:"name"}],return:{name:"string"}},required:!1}},{key:"loadFailedText",value:{name:"string",required:!1}},{key:"retryLabel",value:{name:"string",required:!1}}]}},description:"FileBrowser i18n labels（pass-through）"},className:{required:!1,tsType:{name:"string"},description:""}}};const be={title:"Core/Templates/FileTransfer",component:m,tags:["autodocs"],parameters:{layout:"padded"}},T=[{id:"reports",name:"報告",type:"folder",children:[{id:"reports/2024",name:"2024",type:"folder",children:[{id:"reports/2024/q1.pdf",name:"Q1 季報.pdf",type:"file",caption:"2024/03/31 · 2.1 MB"},{id:"reports/2024/q2.pdf",name:"Q2 季報.pdf",type:"file",caption:"2024/06/30 · 2.4 MB"},{id:"reports/2024/q3.pdf",name:"Q3 季報.pdf",type:"file",caption:"2024/09/30 · 2.6 MB"}]},{id:"reports/2023",name:"2023",type:"folder",children:[{id:"reports/2023/annual.pdf",name:"年度總結.pdf",type:"file",caption:"2023/12/31 · 5.8 MB"},{id:"reports/2023/legacy.pdf",name:"Legacy 文件.pdf",type:"file",disabled:!0,caption:"已封存"}]}]},{id:"datasets",name:"資料集",type:"folder",children:[{id:"datasets/aoi.csv",name:"AOI 檢測資料.csv",type:"file",caption:"12.3 MB"},{id:"datasets/laser.csv",name:"雷射雕刻紀錄.csv",type:"file",caption:"8.7 MB"}]},{id:"readme.md",name:"README.md",type:"file",caption:"專案說明"}],y={render:()=>{const[s,a]=d.useState([]);return e.jsxs("div",{style:{maxWidth:1080},children:[e.jsx(m,{nodes:T,value:s,onChange:a}),e.jsxs("p",{style:{marginTop:12,color:"#727171",fontSize:13},children:["已加入：",s.length===0?"（無）":s.join(", ")]})]})}},v={render:()=>{const[s,a]=d.useState(["reports/2024/q1.pdf","datasets/aoi.csv"]);return e.jsx("div",{style:{maxWidth:1080},children:e.jsx(m,{nodes:T,value:s,onChange:a})})}},ie=[{id:"remote/projects",name:"專案",type:"folder",hasChildren:!0},{id:"remote/logs",name:"系統紀錄",type:"folder",hasChildren:!0}],oe={"remote/projects":[{id:"remote/projects/alpha",name:"Project Alpha",type:"folder",hasChildren:!0},{id:"remote/projects/readme.md",name:"projects-readme.md",type:"file"}],"remote/logs":[{id:"remote/logs/2024-05-12.log",name:"2024-05-12.log",type:"file",caption:"1.2 MB"},{id:"remote/logs/2024-05-13.log",name:"2024-05-13.log",type:"file",caption:"900 KB"}],"remote/projects/alpha":[{id:"remote/projects/alpha/spec.md",name:"spec.md",type:"file"},{id:"remote/projects/alpha/data.csv",name:"data.csv",type:"file"}]},x={render:()=>{const[s,a]=d.useState([]);return e.jsx("div",{style:{maxWidth:1080},children:e.jsx(m,{nodes:T,value:s,onChange:a,addLabel:"Add",removeLabel:"Remove",resetLabel:"Reset",selectAllLabel:"Select all",targetTitle:"Selected files",targetEmptyText:"No files added yet",emptyText:"This folder is empty",fileBrowserLabels:{rootLabel:"Root",homeAriaLabel:"Go to root",backAriaLabel:"Go back",treeAriaLabel:"File browser",selectAllLabel:"Select all",enterAriaLabel:n=>`Open ${n}`,loadFailedText:"Failed to load",retryLabel:"Retry"}})})}},b={render:()=>{const[s,a]=d.useState([]),n=c=>new Promise(u=>{setTimeout(()=>u(oe[c]??[]),600)});return e.jsx("div",{style:{maxWidth:1080},children:e.jsx(m,{nodes:ie,value:s,onChange:a,loadChildren:n})})}};var R,F,S;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string[]>([]);
    return <div style={{
      maxWidth: 1080
    }}>
        <FileTransfer nodes={sampleNodes} value={value} onChange={setValue} />
        <p style={{
        marginTop: 12,
        color: '#727171',
        fontSize: 13
      }}>
          已加入：{value.length === 0 ? '（無）' : value.join(', ')}
        </p>
      </div>;
  }
}`,...(S=(F=y.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var q,B,V;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string[]>(['reports/2024/q1.pdf', 'datasets/aoi.csv']);
    return <div style={{
      maxWidth: 1080
    }}>
        <FileTransfer nodes={sampleNodes} value={value} onChange={setValue} />
      </div>;
  }
}`,...(V=(B=v.parameters)==null?void 0:B.docs)==null?void 0:V.source}}};var E,M,W;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string[]>([]);
    return <div style={{
      maxWidth: 1080
    }}>
        <FileTransfer nodes={sampleNodes} value={value} onChange={setValue} addLabel="Add" removeLabel="Remove" resetLabel="Reset" selectAllLabel="Select all" targetTitle="Selected files" targetEmptyText="No files added yet" emptyText="This folder is empty" fileBrowserLabels={{
        rootLabel: 'Root',
        homeAriaLabel: 'Go to root',
        backAriaLabel: 'Go back',
        treeAriaLabel: 'File browser',
        selectAllLabel: 'Select all',
        enterAriaLabel: name => \`Open \${name}\`,
        loadFailedText: 'Failed to load',
        retryLabel: 'Retry'
      }} />
      </div>;
  }
}`,...(W=(M=x.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var z,I,P;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string[]>([]);
    const loadChildren = (id: string) => new Promise<FileBrowserNode[]>(resolve => {
      setTimeout(() => resolve(remoteData[id] ?? []), 600);
    });
    return <div style={{
      maxWidth: 1080
    }}>
        <FileTransfer nodes={asyncRoot} value={value} onChange={setValue} loadChildren={loadChildren} />
      </div>;
  }
}`,...(P=(I=b.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const je=["Default","WithInitialValue","English","AsyncLoad"];export{b as AsyncLoad,y as Default,x as English,v as WithInitialValue,je as __namedExportsOrder,be as default};
