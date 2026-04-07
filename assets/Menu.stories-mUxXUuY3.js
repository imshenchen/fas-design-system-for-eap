import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o}from"./index-BioFo8Zg.js";import{B as k}from"./Button-iDd4ESB6.js";import"./index-yBjzXJbu.js";const c=({open:t,onClose:n,anchorEl:s,children:r,className:u,style:M})=>{const l=o.useRef(null);o.useEffect(()=>{if(!t)return;const i=p=>{l.current&&!l.current.contains(p.target)&&s!==p.target&&n()};return document.addEventListener("mousedown",i),()=>document.removeEventListener("mousedown",i)},[t,n,s]),o.useEffect(()=>{if(!t)return;const i=p=>{p.key==="Escape"&&n()};return document.addEventListener("keydown",i),()=>document.removeEventListener("keydown",i)},[t,n]);let d={position:"absolute"};if(s){const i=s.getBoundingClientRect();d={position:"fixed",top:i.bottom+4,left:i.left}}return t?e.jsx("div",{ref:l,className:["fas-menu",u].filter(Boolean).join(" "),style:{...d,...M},role:"menu",children:e.jsx("ul",{className:"fas-menu__list",children:r})}):null};c.displayName="Menu";const a=({children:t,onClick:n,selected:s=!1,disabled:r=!1,icon:u,destructive:M=!1,className:l,style:d})=>e.jsxs("li",{role:"menuitem",className:["fas-menu-item",s&&"fas-menu-item--selected",r&&"fas-menu-item--disabled",M&&"fas-menu-item--destructive",l].filter(Boolean).join(" "),style:d,onClick:r?void 0:n,tabIndex:r?-1:0,"aria-disabled":r,children:[u&&e.jsx("span",{className:"fas-menu-item__icon","aria-hidden":!0,children:u}),e.jsx("span",{className:"fas-menu-item__label",children:t})]});a.displayName="MenuItem";const v=({className:t})=>e.jsx("li",{role:"separator",className:["fas-menu-divider",t].filter(Boolean).join(" ")});v.displayName="MenuDivider";c.__docgenInfo={description:"",methods:[],displayName:"Menu",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onClose:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},anchorEl:{required:!1,tsType:{name:"union",raw:"HTMLElement | null",elements:[{name:"HTMLElement"},{name:"null"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};a.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},selected:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},destructive:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};v.__docgenInfo={description:"",methods:[],displayName:"MenuDivider",props:{className:{required:!1,tsType:{name:"string"},description:""}}};const O={title:"Navigation/Menu",component:c,tags:["autodocs"]},m={render:()=>{const[t,n]=o.useState(!1),s=o.useRef(null);return e.jsxs("div",{style:{padding:16},children:[e.jsx(k,{ref:s,variant:"outlined",onClick:()=>n(r=>!r),children:"Open Menu"}),e.jsxs(c,{open:t,onClose:()=>n(!1),anchorEl:s.current,children:[e.jsx(a,{onClick:()=>n(!1),children:"View"}),e.jsx(a,{onClick:()=>n(!1),children:"Edit"}),e.jsx(a,{onClick:()=>n(!1),children:"Duplicate"}),e.jsx(v,{}),e.jsx(a,{destructive:!0,onClick:()=>n(!1),children:"Delete"})]})]})}},f={render:()=>{const[t,n]=o.useState(!1),s=o.useRef(null);return e.jsxs("div",{style:{padding:16},children:[e.jsx(k,{ref:s,variant:"outlined",onClick:()=>n(r=>!r),children:"Actions ▾"}),e.jsxs(c,{open:t,onClose:()=>n(!1),anchorEl:s.current,children:[e.jsx(a,{icon:"✏️",onClick:()=>n(!1),children:"Edit"}),e.jsx(a,{icon:"📋",onClick:()=>n(!1),children:"Copy"}),e.jsx(a,{icon:"📤",onClick:()=>n(!1),children:"Export"}),e.jsx(v,{}),e.jsx(a,{icon:"🗑️",destructive:!0,onClick:()=>n(!1),children:"Delete"})]})]})}};var h,y,R;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(R=(y=m.parameters)==null?void 0:y.docs)==null?void 0:R.source}}};var x,C,j;f.parameters={...f.parameters,docs:{...(x=f.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(j=(C=f.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const T=["Default","WithIcons"];export{m as Default,f as WithIcons,T as __namedExportsOrder,O as default};
