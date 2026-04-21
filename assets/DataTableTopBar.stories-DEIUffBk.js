import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r}from"./index-BioFo8Zg.js";import{a as o,D as B}from"./DataTable-QWiN5CMW.js";import"./index-yBjzXJbu.js";import"./Checkbox-Ds7IhLWd.js";import"./Button-iDd4ESB6.js";const N={title:"Data Display/DataTableTopBar",component:o,tags:["autodocs"]},c={render:()=>t.jsx(o,{title:"機台清單",total:128,selectedCount:3})},s={render:()=>{const[e,a]=r.useState("all");return t.jsx(o,{title:"工單管理",tabs:[{key:"all",label:"全部",icon:"table"},{key:"trash",label:"回收桶",icon:"delete"}],activeTab:e,onTabChange:a,total:64})}},n={render:()=>{const[e,a]=r.useState("");return t.jsx(o,{title:"設備列表",total:50,actions:[{key:"add",label:"新增",icon:"add",variant:"outlined",color:"primary",onClick:()=>alert("新增")},{key:"delete",label:"刪除",icon:"delete",variant:"text",color:"error",onClick:()=>alert("刪除"),disabled:!0},{key:"export",label:"匯出",icon:"file_download",variant:"text",color:"primary",onClick:()=>alert("匯出")},{key:"import",label:"匯入",icon:"file_upload",variant:"text",color:"primary",onClick:()=>alert("匯入")}],showSearch:!0,searchValue:e,onSearch:a})}},i={render:()=>{const[e,a]=r.useState("active"),[l,u]=r.useState("");return t.jsx(o,{title:"Table title",tabs:[{key:"active",label:"Table A",icon:"table"},{key:"trash",label:"Trash",icon:"delete"}],activeTab:e,onTabChange:a,total:0,selectedCount:0,actions:[{key:"add",label:"新增",icon:"add",variant:"outlined",color:"primary",onClick:()=>{}},{key:"delete",label:"刪除",icon:"delete",variant:"text",color:"error",onClick:()=>{},disabled:!0},{key:"export",label:"匯出",icon:"file_download",variant:"text",color:"primary",onClick:()=>{}},{key:"import",label:"匯入",icon:"file_upload",variant:"text",color:"primary",onClick:()=>{}},{key:"template",label:"Template",icon:"description",variant:"text",color:"primary",onClick:()=>{}},{key:"colsetting",label:"Column setting",icon:"view_column",variant:"text",color:"primary",onClick:()=>{}}],showSearch:!0,searchPlaceholder:"快速搜尋",searchValue:l,onSearch:u})}},E=[{key:"name",header:"名稱",width:"30%",sortable:!0},{key:"type",header:"類型",width:"20%"},{key:"status",header:"狀態",width:"20%"},{key:"date",header:"更新日期",width:"30%",sortable:!0}],p=[{name:"Edge-Node-01",type:"Gateway",status:"Online",date:"2025-04-01"},{name:"Edge-Node-02",type:"Sensor",status:"Offline",date:"2025-04-02"},{name:"Edge-Node-03",type:"Gateway",status:"Online",date:"2025-04-03"},{name:"Edge-Node-04",type:"Sensor",status:"Online",date:"2025-04-04"}],d={render:()=>{const[e,a]=r.useState(""),[l,u]=r.useState(new Set),A=p.filter(b=>!e||b.name.toLowerCase().includes(e.toLowerCase()));return t.jsxs("div",{children:[t.jsx(o,{title:"節點清單",total:p.length,selectedCount:l.size,actions:[{key:"add",label:"新增",icon:"add",variant:"outlined",color:"primary",onClick:()=>{}},{key:"delete",label:"刪除",icon:"delete",variant:"text",color:"error",onClick:()=>{},disabled:l.size===0}],showSearch:!0,searchValue:e,onSearch:a}),t.jsx(B,{columns:E,data:A,rowKey:b=>b.name,selectable:!0,selectedKeys:l,onSelectChange:u,striped:!0})]})}};var h,m,y;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <DataTableTopBar title="機台清單" total={128} selectedCount={3} />
}`,...(y=(m=c.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var k,S,C;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => {
    const [tab, setTab] = useState('all');
    return <DataTableTopBar title="工單管理" tabs={[{
      key: 'all',
      label: '全部',
      icon: 'table'
    }, {
      key: 'trash',
      label: '回收桶',
      icon: 'delete'
    }]} activeTab={tab} onTabChange={setTab} total={64} />;
  }
}`,...(C=(S=s.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var T,v,x;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => {
    const [search, setSearch] = useState('');
    return <DataTableTopBar title="設備列表" total={50} actions={[{
      key: 'add',
      label: '新增',
      icon: 'add',
      variant: 'outlined',
      color: 'primary',
      onClick: () => alert('新增')
    }, {
      key: 'delete',
      label: '刪除',
      icon: 'delete',
      variant: 'text',
      color: 'error',
      onClick: () => alert('刪除'),
      disabled: true
    }, {
      key: 'export',
      label: '匯出',
      icon: 'file_download',
      variant: 'text',
      color: 'primary',
      onClick: () => alert('匯出')
    }, {
      key: 'import',
      label: '匯入',
      icon: 'file_upload',
      variant: 'text',
      color: 'primary',
      onClick: () => alert('匯入')
    }]} showSearch searchValue={search} onSearch={setSearch} />;
  }
}`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var w,g,f;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => {
    const [tab, setTab] = useState('active');
    const [search, setSearch] = useState('');
    return <DataTableTopBar title="Table title" tabs={[{
      key: 'active',
      label: 'Table A',
      icon: 'table'
    }, {
      key: 'trash',
      label: 'Trash',
      icon: 'delete'
    }]} activeTab={tab} onTabChange={setTab} total={0} selectedCount={0} actions={[{
      key: 'add',
      label: '新增',
      icon: 'add',
      variant: 'outlined',
      color: 'primary',
      onClick: () => {}
    }, {
      key: 'delete',
      label: '刪除',
      icon: 'delete',
      variant: 'text',
      color: 'error',
      onClick: () => {},
      disabled: true
    }, {
      key: 'export',
      label: '匯出',
      icon: 'file_download',
      variant: 'text',
      color: 'primary',
      onClick: () => {}
    }, {
      key: 'import',
      label: '匯入',
      icon: 'file_upload',
      variant: 'text',
      color: 'primary',
      onClick: () => {}
    }, {
      key: 'template',
      label: 'Template',
      icon: 'description',
      variant: 'text',
      color: 'primary',
      onClick: () => {}
    }, {
      key: 'colsetting',
      label: 'Column setting',
      icon: 'view_column',
      variant: 'text',
      color: 'primary',
      onClick: () => {}
    }]} showSearch searchPlaceholder="快速搜尋" searchValue={search} onSearch={setSearch} />;
  }
}`,...(f=(g=i.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var D,_,j;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => {
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState<Set<string | number>>(new Set());
    const filtered = sampleData.filter(r => !search || r.name.toLowerCase().includes(search.toLowerCase()));
    return <div>
        <DataTableTopBar title="節點清單" total={sampleData.length} selectedCount={selected.size} actions={[{
        key: 'add',
        label: '新增',
        icon: 'add',
        variant: 'outlined',
        color: 'primary',
        onClick: () => {}
      }, {
        key: 'delete',
        label: '刪除',
        icon: 'delete',
        variant: 'text',
        color: 'error',
        onClick: () => {},
        disabled: selected.size === 0
      }]} showSearch searchValue={search} onSearch={setSearch} />
        <DataTable columns={columns} data={filtered} rowKey={r => r.name} selectable selectedKeys={selected} onSelectChange={setSelected} striped />
      </div>;
  }
}`,...(j=(_=d.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};const F=["TitleAndCounts","WithTabs","WithActionsAndSearch","Full","WithDataTable"];export{i as Full,c as TitleAndCounts,n as WithActionsAndSearch,d as WithDataTable,s as WithTabs,F as __namedExportsOrder,N as default};
