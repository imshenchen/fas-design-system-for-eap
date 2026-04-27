import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{R as p}from"./index-BioFo8Zg.js";import{D as d,a as u,b as B}from"./Dialog-BcmMvr8Q.js";import{B as s}from"./Button-iDd4ESB6.js";import{T as a}from"./TextField-CvnJVySZ.js";import"./index-yBjzXJbu.js";const w={title:"Layout/Dialog",component:d,tags:["autodocs"],parameters:{layout:"fullscreen"},argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"]},open:{control:"boolean"},closeOnOverlay:{control:"boolean"}}},b=({size:l="md",title:o="對話框標題",children:k})=>{const[S,r]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsxs(s,{variant:"outlined",onClick:()=>r(!0),children:["開啟 ",l.toUpperCase()," Dialog"]}),e.jsx(d,{open:S,onClose:()=>r(!1),title:o,size:l,actions:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outlined",color:"secondary",size:"s",onClick:()=>r(!1),children:"取消"}),e.jsx(s,{variant:"contained",size:"s",onClick:()=>r(!1),children:"確認"})]}),children:k??e.jsx("p",{style:{margin:0,color:"var(--text-body)"},children:"這是 Dialog 的內容區域。可以放置表單、資訊或其他元件。"})})]})},n={render:()=>e.jsx(b,{})},t={render:()=>e.jsx("div",{style:{display:"flex",gap:12,flexWrap:"wrap"},children:["xs","sm","md","lg","xl"].map(l=>e.jsx(b,{size:l},l))})},i={render:()=>{const[l,o]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outlined",onClick:()=>o(!0),children:"開啟表單 Dialog"}),e.jsx(d,{open:l,onClose:()=>o(!1),title:"新增節點",size:"md",actions:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outlined",color:"secondary",size:"s",onClick:()=>o(!1),children:"取消"}),e.jsx(s,{variant:"contained",size:"s",onClick:()=>o(!1),children:"建立"})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[e.jsx(u,{label:"基本資訊",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(a,{label:"節點名稱",placeholder:"請輸入名稱",required:!0}),e.jsx(a,{label:"IP 位址",placeholder:"例：192.168.1.1"}),e.jsx(a,{label:"Port",placeholder:"例：8080"})]})}),e.jsx(B,{}),e.jsx(u,{label:"描述",children:e.jsx(a,{label:"備註",placeholder:"選填"})})]})})]})}},c={render:()=>{const[l,o]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outlined",color:"error",onClick:()=>o(!0),children:"刪除節點"}),e.jsx(d,{open:l,onClose:()=>o(!1),title:"確認刪除",size:"xs",closeOnOverlay:!1,actions:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outlined",color:"secondary",size:"s",onClick:()=>o(!1),children:"取消"}),e.jsx(s,{variant:"contained",color:"error",size:"s",onClick:()=>o(!1),children:"確認刪除"})]}),children:e.jsx("p",{style:{margin:0,color:"var(--text-body)"},children:"此操作無法復原。確定要刪除這個節點嗎？"})})]})}};var x,m,f;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <DialogDemo />
}`,...(f=(m=n.parameters)==null?void 0:m.docs)==null?void 0:f.source}}};var g,h,j;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map(size => <DialogDemo key={size} size={size} />)}
    </div>
}`,...(j=(h=t.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var D,v,y;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(y=(v=i.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var C,O,z;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(z=(O=c.parameters)==null?void 0:O.docs)==null?void 0:z.source}}};const A=["Default","AllSizes","WithForm","ConfirmDelete"];export{t as AllSizes,c as ConfirmDelete,n as Default,i as WithForm,A as __namedExportsOrder,w as default};
