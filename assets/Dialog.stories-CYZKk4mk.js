import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as r}from"./index-BioFo8Zg.js";import{B as l}from"./Button-iDd4ESB6.js";import{T as c}from"./TextField-VNRuG959.js";import"./index-yBjzXJbu.js";const w={xs:"320px",sm:"400px",md:"480px",lg:"640px",xl:"800px"},t=({open:a,title:s,size:i="md",children:f,actions:o,closeOnOverlay:B=!0,onClose:n,titleId:F})=>{const q=r.useId(),y=F??`dialog-title-${q}`;return r.useEffect(()=>{if(!a)return;const d=I=>{I.key==="Escape"&&n()};return document.addEventListener("keydown",d),()=>document.removeEventListener("keydown",d)},[a,n]),a?e.jsx("div",{className:"fas-dialog__overlay","aria-modal":"true",role:"presentation",onClick:B?n:void 0,children:e.jsxs("div",{role:"dialog","aria-labelledby":y,className:["fas-dialog",`fas-dialog--${i}`].join(" "),style:{maxWidth:w[i]},onClick:d=>d.stopPropagation(),children:[e.jsxs("div",{className:"fas-dialog__header",children:[e.jsx("h2",{id:y,className:"fas-dialog__title",children:s}),e.jsx("button",{type:"button",className:"fas-dialog__close","aria-label":"關閉",onClick:n,children:e.jsx("span",{className:"material-symbols-outlined","aria-hidden":!0,children:"close"})})]}),e.jsx("div",{className:"fas-dialog__body",children:f}),o&&e.jsx("div",{className:"fas-dialog__footer",children:o})]})}):null},g=({label:a,children:s})=>e.jsxs("section",{className:"fas-dialog__section",children:[a&&e.jsx("p",{className:"fas-dialog__section-label",children:a}),s]}),R=()=>e.jsx("hr",{className:"fas-dialog__divider"});t.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{open:{required:!0,tsType:{name:"boolean"},description:""},title:{required:!0,tsType:{name:"string"},description:"Dialog 標題"},size:{required:!1,tsType:{name:"union",raw:"'xs' | 'sm' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xs'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},actions:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Footer actions（通常為 Button 組合）"},closeOnOverlay:{required:!1,tsType:{name:"boolean"},description:"點擊 Overlay 是否關閉，破壞性操作建議設為 false",defaultValue:{value:"true",computed:!1}},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},titleId:{required:!1,tsType:{name:"string"},description:"aria-labelledby 的 id，若不指定由元件自動產生"}}};g.__docgenInfo={description:"",methods:[],displayName:"DialogSection",props:{label:{required:!1,tsType:{name:"string"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};R.__docgenInfo={description:"",methods:[],displayName:"DialogDivider"};const V={title:"Layout/Dialog",component:t,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},open:{control:"boolean"},closeOnOverlay:{control:"boolean"}}},S=({size:a="md",title:s="對話框標題",children:i})=>{const[f,o]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(l,{variant:"outlined",onClick:()=>o(!0),children:["開啟 ",a.toUpperCase()," Dialog"]}),e.jsx(t,{open:f,onClose:()=>o(!1),title:s,size:a,actions:e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"outlined",color:"secondary",size:"s",onClick:()=>o(!1),children:"取消"}),e.jsx(l,{variant:"contained",size:"s",onClick:()=>o(!1),children:"確認"})]}),children:i??e.jsx("p",{style:{margin:0,color:"var(--text-body)"},children:"這是 Dialog 的內容區域。可以放置表單、資訊或其他元件。"})})]})},p={render:()=>e.jsx(S,{})},u={render:()=>e.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:["xs","sm","md","lg","xl"].map(a=>e.jsx(S,{size:a},a))})},m={render:()=>{const[a,s]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"outlined",onClick:()=>s(!0),children:"開啟表單 Dialog"}),e.jsx(t,{open:a,onClose:()=>s(!1),title:"新增節點",size:"md",actions:e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"outlined",color:"secondary",size:"s",onClick:()=>s(!1),children:"取消"}),e.jsx(l,{variant:"contained",size:"s",onClick:()=>s(!1),children:"建立"})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(g,{label:"基本資訊",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(c,{label:"節點名稱",placeholder:"請輸入名稱",required:!0}),e.jsx(c,{label:"IP 位址",placeholder:"例：192.168.1.1"}),e.jsx(c,{label:"Port",placeholder:"例：8080"})]})}),e.jsx(R,{}),e.jsx(g,{label:"描述",children:e.jsx(c,{label:"備註",placeholder:"選填"})})]})})]})}},x={render:()=>{const[a,s]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"outlined",color:"error",onClick:()=>s(!0),children:"刪除節點"}),e.jsx(t,{open:a,onClose:()=>s(!1),title:"確認刪除",size:"xs",closeOnOverlay:!1,actions:e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"outlined",color:"secondary",size:"s",onClick:()=>s(!1),children:"取消"}),e.jsx(l,{variant:"contained",color:"error",size:"s",onClick:()=>s(!1),children:"確認刪除"})]}),children:e.jsx("p",{style:{margin:0,color:"var(--text-body)"},children:"此操作無法復原。確定要刪除這個節點嗎？"})})]})}};var h,v,j;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <DialogDemo />
}`,...(j=(v=p.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var D,b,_;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <DialogDemo key={size} size={size} />)}
    </div>
}`,...(_=(b=u.parameters)==null?void 0:b.docs)==null?void 0:_.source}}};var C,O,k;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button variant="outlined" onClick={() => setOpen(true)}>開啟表單 Dialog</Button>
        <Dialog open={open} onClose={() => setOpen(false)} title="新增節點" size="md" actions={<>
              <Button variant="outlined" color="secondary" size="s" onClick={() => setOpen(false)}>取消</Button>
              <Button variant="contained" size="s" onClick={() => setOpen(false)}>建立</Button>
            </>}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 16
        }}>
            <DialogSection label="基本資訊">
              <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 12
            }}>
                <TextField label="節點名稱" placeholder="請輸入名稱" required />
                <TextField label="IP 位址" placeholder="例：192.168.1.1" />
                <TextField label="Port" placeholder="例：8080" />
              </div>
            </DialogSection>
            <DialogDivider />
            <DialogSection label="描述">
              <TextField label="備註" placeholder="選填" />
            </DialogSection>
          </div>
        </Dialog>
      </>;
  }
}`,...(k=(O=m.parameters)==null?void 0:O.docs)==null?void 0:k.source}}};var N,z,T;x.parameters={...x.parameters,docs:{...(N=x.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = React.useState(false);
    return <>
        <Button variant="outlined" color="error" onClick={() => setOpen(true)}>刪除節點</Button>
        <Dialog open={open} onClose={() => setOpen(false)} title="確認刪除" size="xs" closeOnOverlay={false} actions={<>
              <Button variant="outlined" color="secondary" size="s" onClick={() => setOpen(false)}>取消</Button>
              <Button variant="contained" color="error" size="s" onClick={() => setOpen(false)}>確認刪除</Button>
            </>}>
          <p style={{
          margin: 0,
          color: 'var(--text-body)'
        }}>
            此操作無法復原。確定要刪除這個節點嗎？
          </p>
        </Dialog>
      </>;
  }
}`,...(T=(z=x.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};const $=["Default","AllSizes","WithForm","ConfirmDelete"];export{u as AllSizes,x as ConfirmDelete,p as Default,m as WithForm,$ as __namedExportsOrder,V as default};
