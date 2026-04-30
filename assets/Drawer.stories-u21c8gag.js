import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as a}from"./index-BioFo8Zg.js";import{D as n}from"./Drawer-CL634bve.js";import{B as s}from"./Button-iDd4ESB6.js";import{L as M,a as i,b as o,c as l}from"./List-Dp9yfRm3.js";import"./index-yBjzXJbu.js";import"./index-CRmY8kra.js";import"./index-BLHw34Di.js";import"./IconButton-B9YUEI9a.js";import"./Tooltip-DHUvMufU.js";const J={title:"Core/Layout/Drawer",component:n,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","float"]},size:{control:"select",options:["s","m","l"]},anchor:{control:"select",options:["left","right","top","bottom"]}}},c={name:"Default / Left",render:()=>{const[t,r]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outlined",onClick:()=>r(!0),children:"Open Left Drawer"}),e.jsx(n,{open:t,onClose:()=>r(!1),title:"Navigation",anchor:"left",size:"s",children:e.jsxs(M,{children:[e.jsxs(i,{children:[e.jsx(o,{children:"📊"}),e.jsx(l,{primary:"Dashboard"})]}),e.jsxs(i,{children:[e.jsx(o,{children:"📋"}),e.jsx(l,{primary:"Reports"})]}),e.jsxs(i,{children:[e.jsx(o,{children:"⚙️"}),e.jsx(l,{primary:"Settings"})]})]})})]})}},d={name:"Default / Right",render:()=>{const[t,r]=a.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"outlined",onClick:()=>r(!0),children:"Open Right Drawer"}),e.jsx(n,{open:t,onClose:()=>r(!1),title:"Details",anchor:"right",size:"m",children:e.jsx("p",{style:{margin:0,fontSize:14,color:"var(--text-medium)"},children:"Default drawer — overlays the page with a backdrop mask."})})]})}},p={name:"Default / All Sizes",render:()=>{const[t,r]=a.useState(null);return e.jsxs("div",{style:{display:"flex",gap:8},children:[e.jsx(s,{variant:"outlined",onClick:()=>r("s"),children:"Open S (25vw)"}),e.jsx(s,{variant:"outlined",onClick:()=>r("m"),children:"Open M (35vw)"}),e.jsx(s,{variant:"outlined",onClick:()=>r("l"),children:"Open L (50vw)"}),t&&e.jsx(n,{open:!0,onClose:()=>r(null),title:`Size: ${t.toUpperCase()}`,anchor:"right",size:t,children:e.jsxs("p",{style:{margin:0,fontSize:14},children:["Width = ",t==="s"?"25vw":t==="m"?"35vw":"50vw"]})})]})}},x=({children:t})=>e.jsx("div",{style:{display:"flex",height:520,border:"1px solid var(--divider)",background:"var(--bg-surface-dim-var)",overflow:"hidden"},children:t}),m={name:"Float / Right",render:()=>{const[t,r]=a.useState(!0);return e.jsxs(x,{children:[e.jsxs("div",{style:{flex:1,padding:24,overflow:"auto"},children:[e.jsxs(s,{variant:"outlined",onClick:()=>r(v=>!v),children:[t?"Close":"Open"," Float Drawer"]}),e.jsx("p",{style:{marginTop:16,color:"var(--text-medium)"},children:"Main content area — shrinks when the float drawer opens. No mask overlay."})]}),e.jsx(n,{variant:"float",open:t,onClose:()=>r(!1),title:"{app name}",anchor:"right",size:"m",children:e.jsx("p",{style:{margin:0,fontSize:14,color:"var(--text-medium)"},children:"Float drawer content — coexists with main content."})})]})}},u={name:"Float / All Sizes",render:()=>{const[t,r]=a.useState("m");return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"flex",gap:8,marginBottom:12},children:[e.jsx(s,{variant:t==="s"?"contained":"outlined",size:"s",onClick:()=>r("s"),children:"S · 25vw"}),e.jsx(s,{variant:t==="m"?"contained":"outlined",size:"s",onClick:()=>r("m"),children:"M · 35vw"}),e.jsx(s,{variant:t==="l"?"contained":"outlined",size:"s",onClick:()=>r("l"),children:"L · 50vw"})]}),e.jsxs(x,{children:[e.jsx("div",{style:{flex:1,padding:24},children:e.jsxs("p",{style:{margin:0,color:"var(--text-medium)"},children:["Main content — current drawer size: ",e.jsx("b",{children:t.toUpperCase()})]})}),e.jsx(n,{variant:"float",open:!0,onClose:()=>{},title:`Float · ${t.toUpperCase()}`,anchor:"right",size:t,children:e.jsxs("p",{style:{margin:0,fontSize:14},children:["Width = ",t==="s"?"25vw":t==="m"?"35vw":"50vw"]})})]})]})}},h={name:"Float / Left",render:()=>{const[t,r]=a.useState(!0);return e.jsxs(x,{children:[e.jsx(n,{variant:"float",open:t,onClose:()=>r(!1),title:"Navigation",anchor:"left",size:"s",children:e.jsxs(M,{children:[e.jsxs(i,{children:[e.jsx(o,{children:"📊"}),e.jsx(l,{primary:"Dashboard"})]}),e.jsxs(i,{children:[e.jsx(o,{children:"📋"}),e.jsx(l,{primary:"Reports"})]})]})}),e.jsx("div",{style:{flex:1,padding:24},children:e.jsxs(s,{variant:"outlined",onClick:()=>r(v=>!v),children:[t?"Close":"Open"," Left Drawer"]})})]})}};var f,z,g;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Default / Left',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="outlined" onClick={() => setOpen(true)}>Open Left Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Navigation" anchor="left" size="s">
          <List>
            <ListItem><ListItemIcon>📊</ListItemIcon><ListItemText primary="Dashboard" /></ListItem>
            <ListItem><ListItemIcon>📋</ListItemIcon><ListItemText primary="Reports" /></ListItem>
            <ListItem><ListItemIcon>⚙️</ListItemIcon><ListItemText primary="Settings" /></ListItem>
          </List>
        </Drawer>
      </>;
  }
}`,...(g=(z=c.parameters)==null?void 0:z.docs)==null?void 0:g.source}}};var w,j,S;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Default / Right',
  render: () => {
    const [open, setOpen] = useState(false);
    return <>
        <Button variant="outlined" onClick={() => setOpen(true)}>Open Right Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Details" anchor="right" size="m">
          <p style={{
          margin: 0,
          fontSize: 14,
          color: 'var(--text-medium)'
        }}>
            Default drawer — overlays the page with a backdrop mask.
          </p>
        </Drawer>
      </>;
  }
}`,...(S=(j=d.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var L,y,C;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Default / All Sizes',
  render: () => {
    const [size, setSize] = useState<'s' | 'm' | 'l' | null>(null);
    return <div style={{
      display: 'flex',
      gap: 8
    }}>
        <Button variant="outlined" onClick={() => setSize('s')}>Open S (25vw)</Button>
        <Button variant="outlined" onClick={() => setSize('m')}>Open M (35vw)</Button>
        <Button variant="outlined" onClick={() => setSize('l')}>Open L (50vw)</Button>
        {size && <Drawer open onClose={() => setSize(null)} title={\`Size: \${size.toUpperCase()}\`} anchor="right" size={size}>
            <p style={{
          margin: 0,
          fontSize: 14
        }}>Width = {size === 's' ? '25vw' : size === 'm' ? '35vw' : '50vw'}</p>
          </Drawer>}
      </div>;
  }
}`,...(C=(y=p.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var D,I,F;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Float / Right',
  render: () => {
    const [open, setOpen] = useState(true);
    return <FloatFrame>
        <div style={{
        flex: 1,
        padding: 24,
        overflow: 'auto'
      }}>
          <Button variant="outlined" onClick={() => setOpen(v => !v)}>
            {open ? 'Close' : 'Open'} Float Drawer
          </Button>
          <p style={{
          marginTop: 16,
          color: 'var(--text-medium)'
        }}>
            Main content area — shrinks when the float drawer opens. No mask overlay.
          </p>
        </div>
        <Drawer variant="float" open={open} onClose={() => setOpen(false)} title="{app name}" anchor="right" size="m">
          <p style={{
          margin: 0,
          fontSize: 14,
          color: 'var(--text-medium)'
        }}>
            Float drawer content — coexists with main content.
          </p>
        </Drawer>
      </FloatFrame>;
  }
}`,...(F=(I=m.parameters)==null?void 0:I.docs)==null?void 0:F.source}}};var O,k,B;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Float / All Sizes',
  render: () => {
    const [size, setSize] = useState<'s' | 'm' | 'l'>('m');
    return <div>
        <div style={{
        display: 'flex',
        gap: 8,
        marginBottom: 12
      }}>
          <Button variant={size === 's' ? 'contained' : 'outlined'} size="s" onClick={() => setSize('s')}>S · 25vw</Button>
          <Button variant={size === 'm' ? 'contained' : 'outlined'} size="s" onClick={() => setSize('m')}>M · 35vw</Button>
          <Button variant={size === 'l' ? 'contained' : 'outlined'} size="s" onClick={() => setSize('l')}>L · 50vw</Button>
        </div>
        <FloatFrame>
          <div style={{
          flex: 1,
          padding: 24
        }}>
            <p style={{
            margin: 0,
            color: 'var(--text-medium)'
          }}>
              Main content — current drawer size: <b>{size.toUpperCase()}</b>
            </p>
          </div>
          <Drawer variant="float" open onClose={() => {}} title={\`Float · \${size.toUpperCase()}\`} anchor="right" size={size}>
            <p style={{
            margin: 0,
            fontSize: 14
          }}>
              Width = {size === 's' ? '25vw' : size === 'm' ? '35vw' : '50vw'}
            </p>
          </Drawer>
        </FloatFrame>
      </div>;
  }
}`,...(B=(k=u.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var R,b,T;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Float / Left',
  render: () => {
    const [open, setOpen] = useState(true);
    return <FloatFrame>
        <Drawer variant="float" open={open} onClose={() => setOpen(false)} title="Navigation" anchor="left" size="s">
          <List>
            <ListItem><ListItemIcon>📊</ListItemIcon><ListItemText primary="Dashboard" /></ListItem>
            <ListItem><ListItemIcon>📋</ListItemIcon><ListItemText primary="Reports" /></ListItem>
          </List>
        </Drawer>
        <div style={{
        flex: 1,
        padding: 24
      }}>
          <Button variant="outlined" onClick={() => setOpen(v => !v)}>
            {open ? 'Close' : 'Open'} Left Drawer
          </Button>
        </div>
      </FloatFrame>;
  }
}`,...(T=(b=h.parameters)==null?void 0:b.docs)==null?void 0:T.source}}};const K=["DefaultLeft","DefaultRight","DefaultSizes","FloatRight","FloatSizes","FloatLeft"];export{c as DefaultLeft,d as DefaultRight,p as DefaultSizes,h as FloatLeft,m as FloatRight,u as FloatSizes,K as __namedExportsOrder,J as default};
