import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as j}from"./index-BioFo8Zg.js";import{S as I}from"./Chip-DhUF7zEm.js";import"./index-yBjzXJbu.js";function c({columns:s,data:r,rowKey:d,pagination:t,sortKey:m,sortDirection:l="none",onSort:v,selectable:u=!1,selectedKeys:i,onSelectChange:h,loading:w=!1,emptyText:V="目前沒有資料",striped:W=!0,className:$}){const F=a=>{if(!v)return;let n="asc";m===a&&(n=l==="asc"?"desc":l==="desc"?"none":"asc"),v(a,n)},T=u&&r.length>0&&r.every((a,n)=>i==null?void 0:i.has(d(a,n))),G=()=>{if(!h)return;const a=r.map((n,p)=>d(n,p));h(T?new Set:new Set(a))},H=a=>{if(!h||!i)return;const n=new Set(i);n.has(a)?n.delete(a):n.add(a),h(n)};return e.jsxs("div",{className:["fas-datatable__wrapper",$].filter(Boolean).join(" "),children:[e.jsx("div",{className:"fas-datatable__scroll",children:e.jsxs("table",{className:["fas-datatable",W&&"fas-datatable--striped",w&&"fas-datatable--loading"].filter(Boolean).join(" "),children:[e.jsx("thead",{children:e.jsxs("tr",{children:[u&&e.jsx("th",{className:"fas-datatable__th fas-datatable__th--checkbox",children:e.jsx("input",{type:"checkbox",checked:T,onChange:G,"aria-label":"全選"})}),s.map(a=>e.jsxs("th",{className:["fas-datatable__th",a.sortable&&"fas-datatable__th--sortable",a.align&&`fas-datatable__th--${a.align}`].filter(Boolean).join(" "),style:{width:a.width},onClick:a.sortable?()=>F(a.key):void 0,"aria-sort":m===a.key?l==="asc"?"ascending":l==="desc"?"descending":"none":void 0,children:[a.header,a.sortable&&e.jsx("span",{className:["material-symbols-outlined fas-datatable__sort-icon",m===a.key&&"fas-datatable__sort-icon--active"].filter(Boolean).join(" "),"aria-hidden":!0,children:"unfold_more"})]},a.key))]})}),e.jsx("tbody",{children:w?e.jsx("tr",{children:e.jsx("td",{colSpan:s.length+(u?1:0),className:"fas-datatable__td fas-datatable__td--loading",children:e.jsx("span",{className:"fas-spin","aria-label":"載入中"})})}):r.length===0?e.jsx("tr",{children:e.jsx("td",{colSpan:s.length+(u?1:0),className:"fas-datatable__td fas-datatable__td--empty",children:V})}):r.map((a,n)=>{const p=d(a,n),N=(i==null?void 0:i.has(p))??!1;return e.jsxs("tr",{className:["fas-datatable__row",N&&"fas-datatable__row--selected"].filter(Boolean).join(" "),children:[u&&e.jsx("td",{className:"fas-datatable__td fas-datatable__td--checkbox",children:e.jsx("input",{type:"checkbox",checked:N,onChange:()=>H(p),"aria-label":`選取第 ${n+1} 列`})}),s.map(o=>e.jsx("td",{className:["fas-datatable__td",o.align&&`fas-datatable__td--${o.align}`].filter(Boolean).join(" "),children:o.render?o.render(a[o.key],a,n):String(a[o.key]??"")},o.key))]},p)})})]})}),t&&e.jsxs("div",{className:"fas-datatable__pagination",children:[e.jsxs("div",{className:"fas-datatable__page-size",children:[e.jsx("span",{children:"每頁列數："}),e.jsx("select",{value:t.pageSize,onChange:a=>{var n;return(n=t.onPageSizeChange)==null?void 0:n.call(t,Number(a.target.value))},children:(t.pageSizeOptions??[10,20,50]).map(a=>e.jsx("option",{value:a,children:a},a))})]}),e.jsxs("div",{className:"fas-datatable__page-nav",children:[e.jsxs("span",{children:[(t.page-1)*t.pageSize+1,"–",Math.min(t.page*t.pageSize,t.total)," / ",t.total]}),e.jsx("button",{onClick:()=>t.onPageChange(1),disabled:t.page===1,children:e.jsx("span",{className:"material-symbols-outlined","aria-hidden":!0,children:"first_page"})}),e.jsx("button",{onClick:()=>t.onPageChange(t.page-1),disabled:t.page===1,children:e.jsx("span",{className:"material-symbols-outlined","aria-hidden":!0,children:"chevron_left"})}),e.jsx("button",{onClick:()=>t.onPageChange(t.page+1),disabled:t.page*t.pageSize>=t.total,children:e.jsx("span",{className:"material-symbols-outlined","aria-hidden":!0,children:"chevron_right"})}),e.jsx("button",{onClick:()=>t.onPageChange(Math.ceil(t.total/t.pageSize)),disabled:t.page*t.pageSize>=t.total,children:e.jsx("span",{className:"material-symbols-outlined","aria-hidden":!0,children:"last_page"})})]})]})]})}c.__docgenInfo={description:"",methods:[],displayName:"DataTable",props:{columns:{required:!0,tsType:{name:"Array",elements:[{name:"ColumnDef",elements:[{name:"T"}],raw:"ColumnDef<T>"}],raw:"ColumnDef<T>[]"},description:""},data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},rowKey:{required:!0,tsType:{name:"signature",type:"function",raw:"(row: T, index: number) => string | number",signature:{arguments:[{type:{name:"T"},name:"row"},{type:{name:"number"},name:"index"}],return:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}}},description:"row 的唯一 key 取得函式"},pagination:{required:!1,tsType:{name:"PaginationConfig"},description:""},sortKey:{required:!1,tsType:{name:"string"},description:"排序狀態（受控）"},sortDirection:{required:!1,tsType:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},description:"",defaultValue:{value:"'none'",computed:!1}},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:"(key: string, direction: SortDirection) => void",signature:{arguments:[{type:{name:"string"},name:"key"},{type:{name:"union",raw:"'asc' | 'desc' | 'none'",elements:[{name:"literal",value:"'asc'"},{name:"literal",value:"'desc'"},{name:"literal",value:"'none'"}]},name:"direction"}],return:{name:"void"}}},description:""},selectable:{required:!1,tsType:{name:"boolean"},description:"選取（checkbox）",defaultValue:{value:"false",computed:!1}},selectedKeys:{required:!1,tsType:{name:"Set",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"Set<string | number>"},description:""},onSelectChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(keys: Set<string | number>) => void",signature:{arguments:[{type:{name:"Set",elements:[{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]}],raw:"Set<string | number>"},name:"keys"}],return:{name:"void"}}},description:""},loading:{required:!1,tsType:{name:"boolean"},description:"loading 狀態：顯示 Spin overlay",defaultValue:{value:"false",computed:!1}},emptyText:{required:!1,tsType:{name:"string"},description:"empty state 顯示",defaultValue:{value:"'目前沒有資料'",computed:!1}},striped:{required:!1,tsType:{name:"boolean"},description:"斑馬紋",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const _=[{id:"1",name:"Edge-Node-01",ip:"192.168.1.101",status:"success",lastSeen:"2026-04-01 09:00"},{id:"2",name:"Edge-Node-02",ip:"192.168.1.102",status:"error",lastSeen:"2026-04-01 08:45"},{id:"3",name:"Edge-Node-03",ip:"192.168.1.103",status:"warning",lastSeen:"2026-04-01 08:30"},{id:"4",name:"Edge-Node-04",ip:"192.168.1.104",status:"processing",lastSeen:"2026-04-01 09:05"},{id:"5",name:"Edge-Node-05",ip:"192.168.1.105",status:"idle",lastSeen:"2026-03-31 18:00"},{id:"6",name:"Edge-Node-06",ip:"192.168.1.106",status:"success",lastSeen:"2026-04-01 09:10"}],g=[{key:"name",header:"節點名稱",sortable:!0},{key:"ip",header:"IP 位址"},{key:"status",header:"狀態",render:s=>e.jsx(I,{status:s,label:String(s),size:"s"})},{key:"lastSeen",header:"最後上線",sortable:!0}],Z={title:"Data Display/DataTable",component:c,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{striped:{control:"boolean"},loading:{control:"boolean"},selectable:{control:"boolean"}}},b={render:()=>e.jsx("div",{style:{padding:24},children:e.jsx(c,{columns:g,data:_,rowKey:s=>s.id,striped:!0})})},f={render:()=>{const[s,r]=j.useState(1),[d,t]=j.useState(3),m=_.slice((s-1)*d,s*d);return e.jsx("div",{style:{padding:24},children:e.jsx(c,{columns:g,data:m,rowKey:l=>l.id,striped:!0,pagination:{page:s,pageSize:d,total:_.length,pageSizeOptions:[3,5,10],onPageChange:r,onPageSizeChange:l=>{t(l),r(1)}}})})}},y={render:()=>{const[s,r]=j.useState(new Set);return e.jsxs("div",{style:{padding:24},children:[e.jsxs("p",{style:{marginBottom:8,color:"var(--text-medium)",fontSize:14},children:["已選取：",s.size," 筆"]}),e.jsx(c,{columns:g,data:_,rowKey:d=>d.id,selectable:!0,selectedKeys:s,onSelectChange:r,striped:!0})]})}},S={render:()=>e.jsx("div",{style:{padding:24},children:e.jsx(c,{columns:g,data:[],rowKey:s=>s.id,loading:!0})})},x={render:()=>e.jsx("div",{style:{padding:24},children:e.jsx(c,{columns:g,data:[],rowKey:s=>s.id,emptyText:"目前沒有節點資料"})})};var C,k,z;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24
  }}>
      <DataTable columns={COLUMNS} data={MOCK_DATA} rowKey={row => row.id} striped />
    </div>
}`,...(z=(k=b.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var P,D,O;f.parameters={...f.parameters,docs:{...(P=f.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(O=(D=f.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var q,A,M;y.parameters={...y.parameters,docs:{...(q=y.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(M=(A=y.parameters)==null?void 0:A.docs)==null?void 0:M.source}}};var E,B,L;S.parameters={...S.parameters,docs:{...(E=S.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24
  }}>
      <DataTable columns={COLUMNS} data={[]} rowKey={row => (row as Node).id} loading />
    </div>
}`,...(L=(B=S.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var R,U,K;x.parameters={...x.parameters,docs:{...(R=x.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24
  }}>
      <DataTable columns={COLUMNS} data={[]} rowKey={row => (row as Node).id} emptyText="目前沒有節點資料" />
    </div>
}`,...(K=(U=x.parameters)==null?void 0:U.docs)==null?void 0:K.source}}};const ee=["Default","WithPagination","WithSelection","Loading","Empty"];export{b as Default,x as Empty,S as Loading,f as WithPagination,y as WithSelection,ee as __namedExportsOrder,Z as default};
