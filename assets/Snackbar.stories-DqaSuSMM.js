import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as i}from"./index-BioFo8Zg.js";import{B as d}from"./Button-iDd4ESB6.js";import"./index-yBjzXJbu.js";const r=({open:s,message:n,status:o,autoHideDuration:c=4e3,action:u,onClose:a,className:t})=>(i.useEffect(()=>{if(!s||!c)return;const l=setTimeout(()=>a==null?void 0:a(),c);return()=>clearTimeout(l)},[s,c,a]),s?e.jsxs("div",{role:"status","aria-live":"polite",className:["fas-snackbar",o&&`fas-snackbar--${o}`,t].filter(Boolean).join(" "),children:[o&&e.jsx("span",{className:"fas-snackbar__icon","aria-hidden":!0}),e.jsx("span",{className:"fas-snackbar__message",children:n}),u&&e.jsx("button",{type:"button",onClick:u.onClick,className:"fas-snackbar__action",children:u.label}),a&&e.jsx("button",{type:"button","aria-label":"關閉",onClick:a,className:"fas-snackbar__close",children:"×"})]}):null),P=i.createContext({showSnackbar:()=>{}}),W=()=>i.useContext(P),R=({children:s})=>{const[n,o]=i.useState([]),c=i.useCallback(a=>{const t=`snackbar-${Date.now()}`;o(l=>[...l,{...a,id:t}])},[]),u=a=>o(t=>t.filter(l=>l.id!==a));return e.jsxs(P.Provider,{value:{showSnackbar:c},children:[s,e.jsx("div",{className:"fas-snackbar__container","aria-live":"polite",children:n.map(({id:a,...t})=>e.jsx(r,{open:!0,onClose:()=>u(a),...t},a))})]})};r.__docgenInfo={description:"",methods:[],displayName:"Snackbar",props:{open:{required:!0,tsType:{name:"boolean"},description:""},message:{required:!0,tsType:{name:"string"},description:""},status:{required:!1,tsType:{name:"union",raw:"'success' | 'error' | 'warning' | 'processing'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'processing'"}]},description:""},autoHideDuration:{required:!1,tsType:{name:"number"},description:"自動關閉毫秒數，0 表示不自動關閉",defaultValue:{value:"4000",computed:!1}},action:{required:!1,tsType:{name:"SnackbarAction"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};R.__docgenInfo={description:"",methods:[],displayName:"SnackbarProvider",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const $={title:"Core/Feedback/Snackbar",component:r,tags:["autodocs"],parameters:{layout:"padded"},argTypes:{status:{control:"select",options:["success","error","warning","processing"]},open:{control:"boolean"},autoHideDuration:{control:"number"}}},p={args:{open:!0,message:"操作已成功完成",status:"success",autoHideDuration:0}},m={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:8},children:[e.jsx(r,{open:!0,message:"正在處理中，請稍候…",status:"processing",autoHideDuration:0}),e.jsx(r,{open:!0,message:"操作已成功完成",status:"success",autoHideDuration:0}),e.jsx(r,{open:!0,message:"注意：此操作可能影響系統設定",status:"warning",autoHideDuration:0}),e.jsx(r,{open:!0,message:"操作失敗，請稍後再試",status:"error",autoHideDuration:0}),e.jsx(r,{open:!0,message:"沒有狀態圖示的通知訊息",autoHideDuration:0})]})},g={args:{open:!0,message:"節點已刪除",autoHideDuration:0,action:{label:"復原",onClick:()=>alert("已復原")}}},b={render:()=>{const[s,n]=i.useState(!1);return e.jsxs("div",{style:{height:200,position:"relative"},children:[e.jsx(d,{variant:"contained",onClick:()=>n(!0),children:"顯示通知"}),e.jsx(r,{open:s,message:"操作已成功完成！",status:"success",autoHideDuration:3e3,onClose:()=>n(!1),action:{label:"查看",onClick:()=>{}}})]})}},A=()=>{const{showSnackbar:s}=W();return e.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.jsx(d,{variant:"contained",color:"primary",onClick:()=>s({message:"成功！",status:"success"}),children:"Success"}),e.jsx(d,{variant:"outlined",color:"error",onClick:()=>s({message:"操作失敗",status:"error"}),children:"Error"}),e.jsx(d,{variant:"outlined",onClick:()=>s({message:"請注意此操作",status:"warning"}),children:"Warning"}),e.jsx(d,{variant:"outlined",onClick:()=>s({message:"正在處理中…",status:"processing"}),children:"Processing"})]})},k={render:()=>e.jsx(R,{children:e.jsx(A,{})})};var f,v,x;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    open: true,
    message: '操作已成功完成',
    status: 'success',
    autoHideDuration: 0
  }
}`,...(x=(v=p.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var S,h,j;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 8
  }}>
      <Snackbar open message="正在處理中，請稍候…" status="processing" autoHideDuration={0} />
      <Snackbar open message="操作已成功完成" status="success" autoHideDuration={0} />
      <Snackbar open message="注意：此操作可能影響系統設定" status="warning" autoHideDuration={0} />
      <Snackbar open message="操作失敗，請稍後再試" status="error" autoHideDuration={0} />
      <Snackbar open message="沒有狀態圖示的通知訊息" autoHideDuration={0} />
    </div>
}`,...(j=(h=m.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var y,D,H;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    open: true,
    message: '節點已刪除',
    autoHideDuration: 0,
    action: {
      label: '復原',
      onClick: () => alert('已復原')
    }
  }
}`,...(H=(D=g.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var _,C,w;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <div style={{
      height: 200,
      position: 'relative'
    }}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          顯示通知
        </Button>
        <Snackbar open={open} message="操作已成功完成！" status="success" autoHideDuration={3000} onClose={() => setOpen(false)} action={{
        label: '查看',
        onClick: () => {}
      }} />
      </div>;
  }
}`,...(w=(C=b.parameters)==null?void 0:C.docs)==null?void 0:w.source}}};var T,N,q;k.parameters={...k.parameters,docs:{...(T=k.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <SnackbarProvider>
      <SnackbarTrigger />
    </SnackbarProvider>
}`,...(q=(N=k.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};const F=["Default","AllStatuses","WithAction","Interactive","WithProvider"];export{m as AllStatuses,p as Default,b as Interactive,g as WithAction,k as WithProvider,F as __namedExportsOrder,$ as default};
