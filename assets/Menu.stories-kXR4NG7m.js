import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as l}from"./index-BioFo8Zg.js";import{M as a,a as t,b as h}from"./Menu-gZp1tj2o.js";import{B as C}from"./Button-iDd4ESB6.js";import"./index-yBjzXJbu.js";const v={title:"Core/Navigation/Menu",component:a,tags:["autodocs"]},o={render:()=>{const[c,n]=l.useState(!1),s=l.useRef(null);return e.jsxs("div",{style:{padding:16},children:[e.jsx(C,{ref:s,variant:"outlined",onClick:()=>n(i=>!i),children:"Open Menu"}),e.jsxs(a,{open:c,onClose:()=>n(!1),anchorEl:s.current,children:[e.jsx(t,{onClick:()=>n(!1),children:"View"}),e.jsx(t,{onClick:()=>n(!1),children:"Edit"}),e.jsx(t,{onClick:()=>n(!1),children:"Duplicate"}),e.jsx(h,{}),e.jsx(t,{destructive:!0,onClick:()=>n(!1),children:"Delete"})]})]})}},r={render:()=>{const[c,n]=l.useState(!1),s=l.useRef(null);return e.jsxs("div",{style:{padding:16},children:[e.jsx(C,{ref:s,variant:"outlined",onClick:()=>n(i=>!i),children:"Actions ▾"}),e.jsxs(a,{open:c,onClose:()=>n(!1),anchorEl:s.current,children:[e.jsx(t,{icon:"✏️",onClick:()=>n(!1),children:"Edit"}),e.jsx(t,{icon:"📋",onClick:()=>n(!1),children:"Copy"}),e.jsx(t,{icon:"📤",onClick:()=>n(!1),children:"Export"}),e.jsx(h,{}),e.jsx(t,{icon:"🗑️",destructive:!0,onClick:()=>n(!1),children:"Delete"})]})]})}};var u,p,d;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);
    return <div style={{
      padding: 16
    }}>
        <Button ref={anchorRef} variant="outlined" onClick={() => setOpen(p => !p)}>
          Open Menu
        </Button>
        <Menu open={open} onClose={() => setOpen(false)} anchorEl={anchorRef.current}>
          <MenuItem onClick={() => setOpen(false)}>View</MenuItem>
          <MenuItem onClick={() => setOpen(false)}>Edit</MenuItem>
          <MenuItem onClick={() => setOpen(false)}>Duplicate</MenuItem>
          <MenuDivider />
          <MenuItem destructive onClick={() => setOpen(false)}>Delete</MenuItem>
        </Menu>
      </div>;
  }
}`,...(d=(p=o.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var f,m,M;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);
    return <div style={{
      padding: 16
    }}>
        <Button ref={anchorRef} variant="outlined" onClick={() => setOpen(p => !p)}>
          Actions ▾
        </Button>
        <Menu open={open} onClose={() => setOpen(false)} anchorEl={anchorRef.current}>
          <MenuItem icon="✏️" onClick={() => setOpen(false)}>Edit</MenuItem>
          <MenuItem icon="📋" onClick={() => setOpen(false)}>Copy</MenuItem>
          <MenuItem icon="📤" onClick={() => setOpen(false)}>Export</MenuItem>
          <MenuDivider />
          <MenuItem icon="🗑️" destructive onClick={() => setOpen(false)}>Delete</MenuItem>
        </Menu>
      </div>;
  }
}`,...(M=(m=r.parameters)==null?void 0:m.docs)==null?void 0:M.source}}};const E=["Default","WithIcons"];export{o as Default,r as WithIcons,E as __namedExportsOrder,v as default};
