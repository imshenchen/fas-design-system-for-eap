import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{R as g}from"./index-BioFo8Zg.js";import{D as s}from"./DataTable-DLxlpInt.js";import{S as A}from"./Chip-C026yDsk.js";import"./index-yBjzXJbu.js";import"./Checkbox-DACd6qjG.js";import"./Button-iDd4ESB6.js";const o=[{id:"1",name:"Edge-Node-01",ip:"192.168.1.101",status:"success",lastSeen:"2026-04-01 09:00"},{id:"2",name:"Edge-Node-02",ip:"192.168.1.102",status:"error",lastSeen:"2026-04-01 08:45"},{id:"3",name:"Edge-Node-03",ip:"192.168.1.103",status:"warning",lastSeen:"2026-04-01 08:30"},{id:"4",name:"Edge-Node-04",ip:"192.168.1.104",status:"processing",lastSeen:"2026-04-01 09:05"},{id:"5",name:"Edge-Node-05",ip:"192.168.1.105",status:"idle",lastSeen:"2026-03-31 18:00"},{id:"6",name:"Edge-Node-06",ip:"192.168.1.106",status:"success",lastSeen:"2026-04-01 09:10"}],E={key:"__seq__",header:"#",width:52,align:"center",render:(e,r,a)=>a+1},d=[E,{key:"name",header:"節點名稱",sortable:!0},{key:"ip",header:"IP 位址",sortable:!0},{key:"status",header:"狀態",render:e=>t.jsx(A,{status:e,label:String(e),size:"s"})},{key:"lastSeen",header:"最後上線",sortable:!0}],Q={title:"Data Display/DataTable",component:s,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{striped:{control:"boolean"},loading:{control:"boolean"},selectable:{control:"boolean"}}},i={render:()=>t.jsx("div",{style:{padding:24},children:t.jsx(s,{columns:d,data:o,rowKey:e=>e.id,striped:!0})})},l={render:()=>{const[e,r]=g.useState(1),[a,n]=g.useState(3),M=o.slice((e-1)*a,e*a);return t.jsx("div",{style:{padding:24},children:t.jsx(s,{columns:d,data:M,rowKey:S=>S.id,striped:!0,pagination:{page:e,pageSize:a,total:o.length,pageSizeOptions:[3,5,10],onPageChange:r,onPageSizeChange:S=>{n(S),r(1)}}})})}},c={render:()=>{const[e,r]=g.useState(new Set);return t.jsxs("div",{style:{padding:24},children:[t.jsxs("p",{style:{marginBottom:8,color:"var(--text-medium)",fontSize:14},children:["已選取：",e.size," 筆"]}),t.jsx(s,{columns:d,data:o,rowKey:a=>a.id,selectable:!0,selectedKeys:e,onSelectChange:r,striped:!0})]})}},p={render:()=>{const[e,r]=g.useState(new Set),a=[E,{key:"name",header:"節點名稱",frozen:"left",width:140},{key:"ip",header:"IP 位址",sortable:!0},{key:"status",header:"狀態",render:n=>t.jsx(A,{status:n,label:String(n),size:"s"})},{key:"lastSeen",header:"最後上線",sortable:!0},{key:"actions",header:"操作",frozen:"right",width:100,align:"center",render:()=>t.jsx("button",{style:{fontSize:12,color:"var(--primary)",background:"none",border:"none",cursor:"pointer"},children:"詳細"})}];return t.jsxs("div",{style:{padding:24,maxWidth:480},children:[t.jsx("p",{style:{marginBottom:8,color:"var(--text-medium)",fontSize:13},children:"視窗縮小或欄位過多時，selection / 節點名稱（左）與操作（右）維持可見"}),t.jsx(s,{columns:a,data:o,rowKey:n=>n.id,selectable:!0,selectedKeys:e,onSelectChange:r,striped:!0})]})}},u={render:()=>t.jsx("div",{style:{padding:24},children:t.jsx(s,{columns:d,data:[],rowKey:e=>e.id,loading:!0})})},m={render:()=>t.jsx("div",{style:{padding:24},children:t.jsx(s,{columns:d,data:[],rowKey:e=>e.id,emptyText:"目前沒有節點資料"})})};var y,h,b;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24
  }}>
      <DataTable columns={COLUMNS} data={MOCK_DATA} rowKey={row => row.id} striped />
    </div>
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var w,z,C;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(C=(z=l.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var x,v,f;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(f=(v=c.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var K,D,j;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => {
    const [selected, setSelected] = React.useState<Set<string | number>>(new Set());
    const frozenColumns: ColumnDef<Node>[] = [SEQ_COL, {
      key: 'name',
      header: '節點名稱',
      frozen: 'left',
      width: 140
    }, {
      key: 'ip',
      header: 'IP 位址',
      sortable: true
    }, {
      key: 'status',
      header: '狀態',
      render: val => <StatusChip status={val as Node['status']} label={String(val)} size="s" />
    }, {
      key: 'lastSeen',
      header: '最後上線',
      sortable: true
    }, {
      key: 'actions',
      header: '操作',
      frozen: 'right',
      width: 100,
      align: 'center',
      render: () => <button style={{
        fontSize: 12,
        color: 'var(--primary)',
        background: 'none',
        border: 'none',
        cursor: 'pointer'
      }}>
            詳細
          </button>
    }];
    return <div style={{
      padding: 24,
      maxWidth: 480
    }}>
        <p style={{
        marginBottom: 8,
        color: 'var(--text-medium)',
        fontSize: 13
      }}>
          視窗縮小或欄位過多時，selection / 節點名稱（左）與操作（右）維持可見
        </p>
        <DataTable columns={frozenColumns} data={MOCK_DATA} rowKey={row => row.id} selectable selectedKeys={selected} onSelectChange={setSelected} striped />
      </div>;
  }
}`,...(j=(D=p.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var k,O,T;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24
  }}>
      <DataTable columns={COLUMNS} data={[]} rowKey={row => (row as Node).id} loading />
    </div>
}`,...(T=(O=u.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var N,P,_;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24
  }}>
      <DataTable columns={COLUMNS} data={[]} rowKey={row => (row as Node).id} emptyText="目前沒有節點資料" />
    </div>
}`,...(_=(P=m.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};const q=["Default","WithPagination","WithSelection","WithFrozenColumns","Loading","Empty"];export{i as Default,m as Empty,u as Loading,p as WithFrozenColumns,l as WithPagination,c as WithSelection,q as __namedExportsOrder,Q as default};
