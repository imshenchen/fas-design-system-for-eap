import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as o}from"./index-BioFo8Zg.js";import{F as pe}from"./FileBrowser-Dh6AMfIG.js";import{B as A}from"./Button-iDd4ESB6.js";import{C as z}from"./Checkbox-DACd6qjG.js";import{I as k}from"./Icon-CEbj-L6z.js";import"./index-yBjzXJbu.js";import"./Breadcrumbs-sApHxDHF.js";import"./IconButton-B9YUEI9a.js";import"./Tooltip-DHUvMufU.js";import"./Spin-CukcU5C-.js";function J(r,a,d=[]){if(r)for(const l of r){if(l.type==="file"&&l.id===a)return{id:l.id,name:l.name,path:d};if(l.type==="folder"&&l.children){const p=J(l.children,a,[...d,l.name]);if(p)return p}}}const u=({nodes:r,value:a,onChange:d,loadChildren:l,height:p=480,addLabel:K="加入",removeLabel:U="移除",resetLabel:X="Reset",selectAllLabel:Y="全選",targetEmptyText:Z="尚未加入任何檔案",targetTitle:ee="已選檔案",emptyText:te,fileBrowserLabels:v,className:ae})=>{const[f,T]=o.useState([]),[c,h]=o.useState([]),[se,w]=o.useState(new Map),N=o.useRef(new Map);o.useEffect(()=>{const t=N.current;w(s=>{const n=new Map(s),x=(y,m)=>{y.forEach(i=>{if(i.type==="file")n.has(i.id)||n.set(i.id,{id:i.id,name:i.name,path:m});else{const V=[...m,i.name];t.set(i.id,V),i.children&&x(i.children,V)}})};return x(r,[]),n})},[r]);const re=o.useMemo(()=>{if(l)return t=>l(t).then(s=>{const n=N.current.get(t)??[];return w(x=>{const y=new Map(x);return s.forEach(m=>{if(m.type==="file")y.has(m.id)||y.set(m.id,{id:m.id,name:m.name,path:n});else{const i=[...n,m.name];N.current.set(m.id,i)}}),y}),s})},[l]),ne=()=>{if(f.length===0)return;const t=new Set(a);f.forEach(s=>t.add(s)),d(Array.from(t)),T([])},le=()=>{if(c.length===0)return;const t=new Set(c);d(a.filter(s=>!t.has(s))),h([])},R=t=>{h(s=>s.includes(t)?s.filter(n=>n!==t):[...s,t])},ie=()=>{a.length===0&&f.length===0&&c.length===0||(d([]),T([]),h([]))},F=a.length>0&&c.length===a.length,oe=c.length>0&&c.length<a.length,S=()=>{h(F?[]:[...a])};o.useEffect(()=>{h(t=>t.filter(s=>a.includes(s)))},[a]);const g=a.map(t=>{const s=se.get(t);if(s)return s;const n=J(r,t);return n||{id:t,name:t,path:[]}}),q=(v==null?void 0:v.rootLabel)??"根目錄",de=t=>t.length===0?q:[q,...t].join(" / "),ce=f.filter(t=>!a.includes(t)).length,me={height:typeof p=="number"?`${p}px`:p};return e.jsxs("div",{className:["fas-ft",ae].filter(Boolean).join(" "),style:me,children:[e.jsx("div",{className:"fas-ft__left",children:e.jsx(pe,{nodes:r,value:f,onChange:T,loadChildren:re,emptyText:te,height:"100%",...v})}),e.jsxs("div",{className:"fas-ft__center",children:[e.jsx(A,{variant:"outlined",color:"secondary",size:"s",disabled:ce===0,onClick:ne,iconRight:e.jsx(k,{name:"navigate_next"}),children:K}),e.jsx(A,{variant:"outlined",color:"secondary",size:"s",disabled:c.length===0,onClick:le,iconLeft:e.jsx(k,{name:"navigate_before"}),children:U}),e.jsx(A,{variant:"text",color:"error",size:"s",disabled:a.length===0&&f.length===0&&c.length===0,onClick:ie,children:X})]}),e.jsxs("div",{className:"fas-ft__right",children:[e.jsx("div",{className:"fas-ft__right-header",children:e.jsxs("span",{className:"fas-ft__right-title",children:[ee,e.jsxs("span",{className:"fas-ft__right-count",children:["(",g.length,")"]})]})}),g.length>0&&e.jsxs("div",{className:"fas-ft__select-all",onClick:t=>{t.target.closest(".fas-checkbox")||S()},children:[e.jsx("span",{className:"fas-ft__select-all-checkbox",onClick:t=>t.stopPropagation(),children:e.jsx(z,{checked:F,indeterminate:oe,onChange:S,size:"m"})}),e.jsxs("span",{className:"fas-ft__select-all-label",children:[Y," ",e.jsxs("span",{className:"fas-ft__select-all-count",children:["(",c.length," / ",g.length,")"]})]})]}),e.jsx("div",{className:"fas-ft__right-list",children:g.length===0?e.jsxs("div",{className:"fas-ft__right-empty",children:[e.jsx("div",{className:"fas-ft__right-empty-illu","aria-hidden":"true",children:e.jsx(k,{name:"inbox",size:56})}),e.jsx("div",{className:"fas-ft__right-empty-text",children:Z})]}):g.map(t=>{const s=c.includes(t.id);return e.jsxs("div",{className:["fas-ft__target-row",s&&"fas-ft__target-row--checked"].filter(Boolean).join(" "),onClick:()=>R(t.id),children:[e.jsx("span",{className:"fas-ft__target-checkbox",onClick:n=>n.stopPropagation(),children:e.jsx(z,{checked:s,onChange:()=>R(t.id),size:"m"})}),e.jsx("span",{className:"fas-ft__target-icon","aria-hidden":!0,children:e.jsx("span",{className:"material-symbols-outlined",children:"description"})}),e.jsxs("div",{className:"fas-ft__target-text",children:[e.jsx("span",{className:"fas-ft__target-name",title:t.name,children:t.name}),(()=>{const n=de(t.path);return e.jsx("span",{className:"fas-ft__target-caption",title:n,children:n})})()]})]},t.id)})})]})]})};u.displayName="FileTransfer";u.__docgenInfo={description:"",methods:[],displayName:"FileTransfer",props:{nodes:{required:!0,tsType:{name:"Array",elements:[{name:"FileBrowserNode"}],raw:"FileBrowserNode[]"},description:"root 層節點，pass-through 給 FileBrowser"},value:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"已加入的 file id（受控）"},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(next: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"next"}],return:{name:"void"}}},description:""},loadChildren:{required:!1,tsType:{name:"signature",type:"function",raw:"(folderId: string) => Promise<FileBrowserNode[]>",signature:{arguments:[{type:{name:"string"},name:"folderId"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"FileBrowserNode"}],raw:"FileBrowserNode[]"}],raw:"Promise<FileBrowserNode[]>"}}},description:"lazy load 子節點"},height:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"整體高度，預設 480",defaultValue:{value:"480",computed:!1}},addLabel:{required:!1,tsType:{name:"string"},description:"中央加入按鈕文字，預設「加入」",defaultValue:{value:"'加入'",computed:!1}},removeLabel:{required:!1,tsType:{name:"string"},description:"中央移除按鈕文字，預設「移除」",defaultValue:{value:"'移除'",computed:!1}},resetLabel:{required:!1,tsType:{name:"string"},description:"中央 Reset 按鈕文字，預設「Reset」",defaultValue:{value:"'Reset'",computed:!1}},selectAllLabel:{required:!1,tsType:{name:"string"},description:"右側「全選」label，預設「全選」",defaultValue:{value:"'全選'",computed:!1}},targetEmptyText:{required:!1,tsType:{name:"string"},description:"右側空狀態文字，預設「尚未加入任何檔案」",defaultValue:{value:"'尚未加入任何檔案'",computed:!1}},targetTitle:{required:!1,tsType:{name:"string"},description:"右側欄標題，預設「已選檔案」",defaultValue:{value:"'已選檔案'",computed:!1}},emptyText:{required:!1,tsType:{name:"string"},description:"FileBrowser 空資料夾文字（pass-through）"},fileBrowserLabels:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  rootLabel?: string;
  homeAriaLabel?: string;
  backAriaLabel?: string;
  treeAriaLabel?: string;
  selectAllLabel?: string;
  enterAriaLabel?: (name: string) => string;
  loadFailedText?: string;
  retryLabel?: string;
}`,signature:{properties:[{key:"rootLabel",value:{name:"string",required:!1}},{key:"homeAriaLabel",value:{name:"string",required:!1}},{key:"backAriaLabel",value:{name:"string",required:!1}},{key:"treeAriaLabel",value:{name:"string",required:!1}},{key:"selectAllLabel",value:{name:"string",required:!1}},{key:"enterAriaLabel",value:{name:"signature",type:"function",raw:"(name: string) => string",signature:{arguments:[{type:{name:"string"},name:"name"}],return:{name:"string"}},required:!1}},{key:"loadFailedText",value:{name:"string",required:!1}},{key:"retryLabel",value:{name:"string",required:!1}}]}},description:"FileBrowser i18n labels（pass-through）"},className:{required:!1,tsType:{name:"string"},description:""}}};const Ae={title:"Core/Templates/FileTransfer",component:u,tags:["autodocs"],parameters:{layout:"padded"}},C=[{id:"reports",name:"報告",type:"folder",children:[{id:"reports/2024",name:"2024",type:"folder",children:[{id:"reports/2024/q1.pdf",name:"Q1 季報.pdf",type:"file",size:22e5},{id:"reports/2024/q2.pdf",name:"Q2 季報.pdf",type:"file",size:2516e3},{id:"reports/2024/q3.pdf",name:"Q3 季報.pdf",type:"file",size:2726e3}]},{id:"reports/2023",name:"2023",type:"folder",children:[{id:"reports/2023/annual.pdf",name:"年度總結.pdf",type:"file",size:6082e3},{id:"reports/2023/legacy.pdf",name:"Legacy 文件.pdf",type:"file",disabled:!0,caption:"已封存"}]}]},{id:"datasets",name:"資料集",type:"folder",children:[{id:"datasets/aoi.csv",name:"AOI 檢測資料.csv",type:"file",size:12894e3},{id:"datasets/laser.csv",name:"雷射雕刻紀錄.csv",type:"file",size:9122e3}]},{id:"readme.md",name:"README.md",type:"file",size:4318}],b={render:()=>{const[r,a]=o.useState([]);return e.jsxs("div",{style:{maxWidth:1080},children:[e.jsx(u,{nodes:C,value:r,onChange:a}),e.jsxs("p",{style:{marginTop:12,color:"#727171",fontSize:13},children:["已加入：",r.length===0?"（無）":r.join(", ")]})]})}},j={render:()=>{const[r,a]=o.useState(["reports/2024/q1.pdf","datasets/aoi.csv"]);return e.jsx("div",{style:{maxWidth:1080},children:e.jsx(u,{nodes:C,value:r,onChange:a})})}},ue=[{id:"remote/projects",name:"專案",type:"folder",hasChildren:!0},{id:"remote/logs",name:"系統紀錄",type:"folder",hasChildren:!0}],fe={"remote/projects":[{id:"remote/projects/alpha",name:"Project Alpha",type:"folder",hasChildren:!0},{id:"remote/projects/readme.md",name:"projects-readme.md",type:"file"}],"remote/logs":[{id:"remote/logs/2024-05-12.log",name:"2024-05-12.log",type:"file",size:1258e3},{id:"remote/logs/2024-05-13.log",name:"2024-05-13.log",type:"file",size:921600}],"remote/projects/alpha":[{id:"remote/projects/alpha/spec.md",name:"spec.md",type:"file"},{id:"remote/projects/alpha/data.csv",name:"data.csv",type:"file"}]},_={render:()=>{const[r,a]=o.useState([]);return e.jsx("div",{style:{maxWidth:1080},children:e.jsx(u,{nodes:C,value:r,onChange:a,addLabel:"Add",removeLabel:"Remove",resetLabel:"Reset",selectAllLabel:"Select all",targetTitle:"Selected files",targetEmptyText:"No files added yet",emptyText:"This folder is empty",fileBrowserLabels:{rootLabel:"Root",homeAriaLabel:"Go to root",backAriaLabel:"Go back",treeAriaLabel:"File browser",selectAllLabel:"Select all",enterAriaLabel:d=>`Open ${d}`,loadFailedText:"Failed to load",retryLabel:"Retry"}})})}},L={render:()=>{const[r,a]=o.useState([]),d=l=>new Promise(p=>{setTimeout(()=>p(fe[l]??[]),600)});return e.jsx("div",{style:{maxWidth:1080},children:e.jsx(u,{nodes:ue,value:r,onChange:a,loadChildren:d})})}};var E,B,P;b.parameters={...b.parameters,docs:{...(E=b.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(P=(B=b.parameters)==null?void 0:B.docs)==null?void 0:P.source}}};var W,I,M;j.parameters={...j.parameters,docs:{...(W=j.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string[]>(['reports/2024/q1.pdf', 'datasets/aoi.csv']);
    return <div style={{
      maxWidth: 1080
    }}>
        <FileTransfer nodes={sampleNodes} value={value} onChange={setValue} />
      </div>;
  }
}`,...(M=(I=j.parameters)==null?void 0:I.docs)==null?void 0:M.source}}};var D,G,O;_.parameters={..._.parameters,docs:{...(D=_.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(O=(G=_.parameters)==null?void 0:G.docs)==null?void 0:O.source}}};var Q,$,H;L.parameters={...L.parameters,docs:{...(Q=L.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(H=($=L.parameters)==null?void 0:$.docs)==null?void 0:H.source}}};const ke=["Default","WithInitialValue","English","AsyncLoad"];export{L as AsyncLoad,b as Default,_ as English,j as WithInitialValue,ke as __namedExportsOrder,Ae as default};
