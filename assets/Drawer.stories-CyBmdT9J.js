import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as p}from"./index-BioFo8Zg.js";import{O as v}from"./index-CRmY8kra.js";import{B as w}from"./Button-iDd4ESB6.js";import{L as N,a as c,c as d,b as m}from"./List-BUbYMR5y.js";import"./index-yBjzXJbu.js";import"./index-BLHw34Di.js";const n=({open:r,onClose:t,anchor:o="left",width:i=280,height:l=280,children:y,title:u,showBackdrop:g=!0,className:D,style:b})=>{if(p.useEffect(()=>(r&&(document.body.style.overflow="hidden"),()=>{document.body.style.overflow=""}),[r]),!r)return null;const O=o==="left"||o==="right"?{width:typeof i=="number"?`${i}px`:i}:{height:typeof l=="number"?`${l}px`:l};return v.createPortal(e.jsxs("div",{className:"fas-drawer-portal",children:[g&&e.jsx("div",{className:"fas-drawer-backdrop",onClick:t,"aria-hidden":!0}),e.jsxs("div",{className:["fas-drawer",`fas-drawer--${o}`,"fas-drawer--open",D].filter(Boolean).join(" "),style:{...O,...b},role:"dialog","aria-modal":"true",children:[u&&e.jsxs("div",{className:"fas-drawer__header",children:[e.jsx("span",{className:"fas-drawer__title",children:u}),e.jsx("button",{type:"button",className:"fas-drawer__close",onClick:t,"aria-label":"Close drawer",children:e.jsx("span",{className:"material-symbols-outlined","aria-hidden":!0,children:"close"})})]}),e.jsx("div",{className:"fas-drawer__body",children:y})]})]}),document.body)};n.displayName="Drawer";const E={title:"Layout/Drawer",component:n,tags:["autodocs"],argTypes:{anchor:{control:"select",options:["left","right","top","bottom"]}}},s={render:()=>{const[r,t]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(w,{variant:"outlined",onClick:()=>t(!0),children:"Open Left Drawer"}),e.jsx(n,{open:r,onClose:()=>t(!1),title:"Navigation",anchor:"left",children:e.jsxs(N,{children:[e.jsxs(c,{children:[e.jsx(d,{children:"📊"}),e.jsx(m,{primary:"Dashboard"})]}),e.jsxs(c,{children:[e.jsx(d,{children:"📋"}),e.jsx(m,{primary:"Reports"})]}),e.jsxs(c,{children:[e.jsx(d,{children:"⚙️"}),e.jsx(m,{primary:"Settings"})]})]})})]})}},a={render:()=>{const[r,t]=p.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(w,{variant:"outlined",onClick:()=>t(!0),children:"Open Right Drawer"}),e.jsx(n,{open:r,onClose:()=>t(!1),title:"Details",anchor:"right",children:e.jsx("p",{style:{margin:0,fontSize:14,color:"#727171"},children:"Drawer content on the right side."})})]})}};var f,h,x;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="outlined" onClick={() => setOpen(true)}>Open Left Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Navigation" anchor="left">
          <List>
            <ListItem><ListItemIcon>📊</ListItemIcon><ListItemText primary="Dashboard" /></ListItem>
            <ListItem><ListItemIcon>📋</ListItemIcon><ListItemText primary="Reports" /></ListItem>
            <ListItem><ListItemIcon>⚙️</ListItemIcon><ListItemText primary="Settings" /></ListItem>
          </List>
        </Drawer>
      </>;
  }
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var j,L,I;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="outlined" onClick={() => setOpen(true)}>Open Right Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Details" anchor="right">
          <p style={{
          margin: 0,
          fontSize: 14,
          color: '#727171'
        }}>Drawer content on the right side.</p>
        </Drawer>
      </>;
  }
}`,...(I=(L=a.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};const $=["Left","Right"];export{s as Left,a as Right,$ as __namedExportsOrder,E as default};
