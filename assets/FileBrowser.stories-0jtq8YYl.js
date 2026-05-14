import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as s}from"./index-BioFo8Zg.js";import{F as o}from"./FileBrowser-Ct-yyiCb.js";import{D as O}from"./Dialog-BcmMvr8Q.js";import{B as g}from"./Button-iDd4ESB6.js";import"./index-yBjzXJbu.js";import"./Breadcrumbs-sApHxDHF.js";import"./IconButton-B9YUEI9a.js";import"./Tooltip-DHUvMufU.js";import"./Checkbox-DACd6qjG.js";import"./Spin-CukcU5C-.js";const h=({open:t,onClose:r,onConfirm:n,title:a="選擇檔案",confirmLabel:i="確認",cancelLabel:f="取消",defaultValue:y,nodes:P,loadChildren:W,emptyText:A})=>{const[d,j]=s.useState(y??[]),x=s.useRef(t);s.useEffect(()=>{t&&!x.current&&j(y??[]),x.current=t},[t,y]);const I=()=>{d.length!==0&&n(d)};return e.jsx(O,{open:t,onClose:r,title:a,size:"lg",actions:e.jsxs(e.Fragment,{children:[e.jsx(g,{variant:"text",color:"secondary",onClick:r,children:f}),e.jsx(g,{variant:"contained",color:"primary",onClick:I,disabled:d.length===0,children:i})]}),children:e.jsx(o,{nodes:P,value:d,onChange:j,loadChildren:W,emptyText:A,height:420})})};h.displayName="FileBrowserDialog";h.__docgenInfo={description:"",methods:[],displayName:"FileBrowserDialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onConfirm:{required:!0,tsType:{name:"signature",type:"function",raw:"(selectedFileIds: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"selectedFileIds"}],return:{name:"void"}}},description:""},title:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'選擇檔案'",computed:!1}},confirmLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'確認'",computed:!1}},cancelLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'取消'",computed:!1}},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"開啟時的初始選取（每次 open=true 重置為此值）"},nodes:{required:!0,tsType:{name:"Array",elements:[{name:"FileBrowserNode"}],raw:"FileBrowserNode[]"},description:""},loadChildren:{required:!1,tsType:{name:"signature",type:"function",raw:"(folderId: string) => Promise<FileBrowserNode[]>",signature:{arguments:[{type:{name:"string"},name:"folderId"}],return:{name:"Promise",elements:[{name:"Array",elements:[{name:"FileBrowserNode"}],raw:"FileBrowserNode[]"}],raw:"Promise<FileBrowserNode[]>"}}},description:""},emptyText:{required:!1,tsType:{name:"string"},description:""}}};const ee={title:"Core/Data Entry/FileBrowser",component:o,tags:["autodocs"]},v=[{id:"reports",name:"報告",type:"folder",children:[{id:"reports/2024",name:"2024",type:"folder",children:[{id:"reports/2024/q1.pdf",name:"Q1 季報.pdf",type:"file",caption:"2024/03/31 · 2.1 MB"},{id:"reports/2024/q2.pdf",name:"Q2 季報.pdf",type:"file",caption:"2024/06/30 · 2.4 MB"},{id:"reports/2024/q3.pdf",name:"Q3 季報.pdf",type:"file",caption:"2024/09/30 · 2.6 MB"}]},{id:"reports/2023",name:"2023",type:"folder",children:[{id:"reports/2023/annual.pdf",name:"年度總結.pdf",type:"file",caption:"2023/12/31 · 5.8 MB"},{id:"reports/2023/legacy.pdf",name:"Legacy 文件.pdf",type:"file",disabled:!0,caption:"已封存"}]}]},{id:"datasets",name:"資料集",type:"folder",children:[{id:"datasets/aoi.csv",name:"AOI 檢測資料.csv",type:"file",caption:"12.3 MB"},{id:"datasets/laser.csv",name:"雷射雕刻紀錄.csv",type:"file",caption:"8.7 MB"},{id:"datasets/archive",name:"舊版資料",type:"folder",disabled:!0,children:[{id:"datasets/archive/old.csv",name:"舊版 raw.csv",type:"file",disabled:!0}]}]},{id:"readme.md",name:"README.md",type:"file",caption:"專案說明"},{id:"empty-folder",name:"空資料夾",type:"folder",children:[]}],l={render:()=>{const[t,r]=s.useState([]);return e.jsxs("div",{style:{maxWidth:640},children:[e.jsx(o,{nodes:v,value:t,onChange:r}),e.jsxs("p",{style:{marginTop:12,color:"#727171",fontSize:13},children:["已選 ",t.length," 個檔案：",t.join(", ")||"（無）"]})]})}},c={render:()=>{const[t,r]=s.useState([]),n=[...v,{id:"locked-folder",name:"受限資料夾",type:"folder",disabled:!0,children:[{id:"locked-folder/secret.pdf",name:"secret.pdf",type:"file",disabled:!0}]}];return e.jsx("div",{style:{maxWidth:640},children:e.jsx(o,{nodes:n,value:t,onChange:r})})}},z=[{id:"remote/projects",name:"專案",type:"folder",hasChildren:!0},{id:"remote/logs",name:"系統紀錄",type:"folder",hasChildren:!0},{id:"remote/notes.txt",name:"notes.txt",type:"file",caption:"345 KB"}],L={"remote/projects":[{id:"remote/projects/alpha",name:"Project Alpha",type:"folder",hasChildren:!0},{id:"remote/projects/beta",name:"Project Beta",type:"folder",hasChildren:!0},{id:"remote/projects/readme.md",name:"projects-readme.md",type:"file"}],"remote/logs":[{id:"remote/logs/2024-05-12.log",name:"2024-05-12.log",type:"file",caption:"1.2 MB"},{id:"remote/logs/2024-05-13.log",name:"2024-05-13.log",type:"file",caption:"900 KB"}],"remote/projects/alpha":[{id:"remote/projects/alpha/spec.md",name:"spec.md",type:"file"},{id:"remote/projects/alpha/data.csv",name:"data.csv",type:"file"}],"remote/projects/beta":[{id:"remote/projects/beta/spec.md",name:"spec.md",type:"file"}]},p={render:()=>{const[t,r]=s.useState([]),n=a=>new Promise((i,f)=>{setTimeout(()=>{if(a==="remote/projects/beta"&&Math.random()>.5)return f(new Error("連線逾時"));i(L[a]??[])},800)});return e.jsx("div",{style:{maxWidth:640},children:e.jsx(o,{nodes:z,value:t,onChange:r,loadChildren:n})})}},m={render:()=>{const[t,r]=s.useState([]);return e.jsx("div",{style:{maxWidth:640},children:e.jsx(o,{nodes:[],value:t,onChange:r,emptyText:"尚無檔案，請先建立資料夾或上傳檔案"})})}},u={render:()=>{const[t,r]=s.useState(!1),[n,a]=s.useState([]);return e.jsxs("div",{children:[e.jsx(g,{variant:"contained",onClick:()=>r(!0),children:"選擇檔案"}),e.jsxs("p",{style:{marginTop:12,color:"#727171",fontSize:13},children:["已選：",n.length===0?"（無）":n.join(", ")]}),e.jsx(h,{open:t,onClose:()=>r(!1),onConfirm:i=>{a(i),r(!1)},nodes:v,defaultValue:n})]})}};var B,w,C;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string[]>([]);
    return <div style={{
      maxWidth: 640
    }}>
        <FileBrowser nodes={sampleNodes} value={value} onChange={setValue} />
        <p style={{
        marginTop: 12,
        color: '#727171',
        fontSize: 13
      }}>
          已選 {value.length} 個檔案：{value.join(', ') || '（無）'}
        </p>
      </div>;
  }
}`,...(C=(w=l.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var S,F,T;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string[]>([]);
    const nodes: FileBrowserNode[] = [...sampleNodes, {
      id: 'locked-folder',
      name: '受限資料夾',
      type: 'folder',
      disabled: true,
      children: [{
        id: 'locked-folder/secret.pdf',
        name: 'secret.pdf',
        type: 'file',
        disabled: true
      }]
    }];
    return <div style={{
      maxWidth: 640
    }}>
        <FileBrowser nodes={nodes} value={value} onChange={setValue} />
      </div>;
  }
}`,...(T=(F=c.parameters)==null?void 0:F.docs)==null?void 0:T.source}}};var b,k,D;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string[]>([]);
    const loadChildren = (id: string) => new Promise<FileBrowserNode[]>((resolve, reject) => {
      setTimeout(() => {
        if (id === 'remote/projects/beta') {
          // 演示錯誤狀態：第一次失敗，再次重試成功
          if (Math.random() > 0.5) return reject(new Error('連線逾時'));
        }
        resolve(remoteData[id] ?? []);
      }, 800);
    });
    return <div style={{
      maxWidth: 640
    }}>
        <FileBrowser nodes={asyncRoot} value={value} onChange={setValue} loadChildren={loadChildren} />
      </div>;
  }
}`,...(D=(k=p.parameters)==null?void 0:k.docs)==null?void 0:D.source}}};var V,N,R;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = React.useState<string[]>([]);
    return <div style={{
      maxWidth: 640
    }}>
        <FileBrowser nodes={[]} value={value} onChange={setValue} emptyText="尚無檔案，請先建立資料夾或上傳檔案" />
      </div>;
  }
}`,...(R=(N=m.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var q,E,M;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [picked, setPicked] = React.useState<string[]>([]);
    return <div>
        <Button variant="contained" onClick={() => setOpen(true)}>
          選擇檔案
        </Button>
        <p style={{
        marginTop: 12,
        color: '#727171',
        fontSize: 13
      }}>
          已選：{picked.length === 0 ? '（無）' : picked.join(', ')}
        </p>
        <FileBrowserDialog open={open} onClose={() => setOpen(false)} onConfirm={ids => {
        setPicked(ids);
        setOpen(false);
      }} nodes={sampleNodes} defaultValue={picked} />
      </div>;
  }
}`,...(M=(E=u.parameters)==null?void 0:E.docs)==null?void 0:M.source}}};const te=["Default","WithDisabled","AsyncLoad","Empty","InDialog"];export{p as AsyncLoad,l as Default,m as Empty,u as InDialog,c as WithDisabled,te as __namedExportsOrder,ee as default};
