import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{R as m}from"./index-BioFo8Zg.js";import{D as a}from"./DataTable-WKVnZgxK.js";import{S as M}from"./Chip-C026yDsk.js";import"./index-yBjzXJbu.js";import"./Checkbox-BzDwVlr1.js";const p=[{id:"1",name:"Edge-Node-01",ip:"192.168.1.101",status:"success",lastSeen:"2026-04-01 09:00"},{id:"2",name:"Edge-Node-02",ip:"192.168.1.102",status:"error",lastSeen:"2026-04-01 08:45"},{id:"3",name:"Edge-Node-03",ip:"192.168.1.103",status:"warning",lastSeen:"2026-04-01 08:30"},{id:"4",name:"Edge-Node-04",ip:"192.168.1.104",status:"processing",lastSeen:"2026-04-01 09:05"},{id:"5",name:"Edge-Node-05",ip:"192.168.1.105",status:"idle",lastSeen:"2026-03-31 18:00"},{id:"6",name:"Edge-Node-06",ip:"192.168.1.106",status:"success",lastSeen:"2026-04-01 09:10"}],n=[{key:"name",header:"節點名稱",sortable:!0},{key:"ip",header:"IP 位址",sortable:!0},{key:"status",header:"狀態",render:e=>t.jsx(M,{status:e,label:String(e),size:"s"})},{key:"lastSeen",header:"最後上線",sortable:!0}],U={title:"Data Display/DataTable",component:a,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{striped:{control:"boolean"},loading:{control:"boolean"},selectable:{control:"boolean"}}},o={render:()=>t.jsx("div",{style:{padding:24},children:t.jsx(a,{columns:n,data:p,rowKey:e=>e.id,striped:!0})})},d={render:()=>{const[e,r]=m.useState(1),[s,O]=m.useState(3),P=p.slice((e-1)*s,e*s);return t.jsx("div",{style:{padding:24},children:t.jsx(a,{columns:n,data:P,rowKey:g=>g.id,striped:!0,pagination:{page:e,pageSize:s,total:p.length,pageSizeOptions:[3,5,10],onPageChange:r,onPageSizeChange:g=>{O(g),r(1)}}})})}},i={render:()=>{const[e,r]=m.useState(new Set);return t.jsxs("div",{style:{padding:24},children:[t.jsxs("p",{style:{marginBottom:8,color:"var(--text-medium)",fontSize:14},children:["已選取：",e.size," 筆"]}),t.jsx(a,{columns:n,data:p,rowKey:s=>s.id,selectable:!0,selectedKeys:e,onSelectChange:r,striped:!0})]})}},c={render:()=>t.jsx("div",{style:{padding:24},children:t.jsx(a,{columns:n,data:[],rowKey:e=>e.id,loading:!0})})},l={render:()=>t.jsx("div",{style:{padding:24},children:t.jsx(a,{columns:n,data:[],rowKey:e=>e.id,emptyText:"目前沒有節點資料"})})};var u,S,y;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24
  }}>
      <DataTable columns={COLUMNS} data={MOCK_DATA} rowKey={row => row.id} striped />
    </div>
}`,...(y=(S=o.parameters)==null?void 0:S.docs)==null?void 0:y.source}}};var h,w,x;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => {
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(3);
    const paged = MOCK_DATA.slice((page - 1) * pageSize, page * pageSize);
    return <div style={{
      padding: 24
    }}>
        <DataTable columns={COLUMNS} data={paged} rowKey={row => row.id} striped pagination={{
        page,
        pageSize,
        total: MOCK_DATA.length,
        pageSizeOptions: [3, 5, 10],
        onPageChange: setPage,
        onPageSizeChange: s => {
          setPageSize(s);
          setPage(1);
        }
      }} />
      </div>;
  }
}`,...(x=(w=d.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var b,C,z;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState<Set<string | number>>(new Set());
    return <div style={{
      padding: 24
    }}>
        <p style={{
        marginBottom: 8,
        color: 'var(--text-medium)',
        fontSize: 14
      }}>
          已選取：{selected.size} 筆
        </p>
        <DataTable columns={COLUMNS} data={MOCK_DATA} rowKey={row => row.id} selectable selectedKeys={selected} onSelectChange={setSelected} striped />
      </div>;
  }
}`,...(z=(C=i.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var D,K,v;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24
  }}>
      <DataTable columns={COLUMNS} data={[]} rowKey={row => (row as Node).id} loading />
    </div>
}`,...(v=(K=c.parameters)==null?void 0:K.docs)==null?void 0:v.source}}};var T,j,N;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24
  }}>
      <DataTable columns={COLUMNS} data={[]} rowKey={row => (row as Node).id} emptyText="目前沒有節點資料" />
    </div>
}`,...(N=(j=l.parameters)==null?void 0:j.docs)==null?void 0:N.source}}};const k=["Default","WithPagination","WithSelection","Loading","Empty"];export{o as Default,l as Empty,c as Loading,d as WithPagination,i as WithSelection,k as __namedExportsOrder,U as default};
