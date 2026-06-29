import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{L as s,a as r,c as t,b as m,d as n,e as S}from"./List-Dp9yfRm3.js";import"./index-yBjzXJbu.js";const D={title:"Core/Data Display/List",component:s,tags:["autodocs"]},i={render:()=>e.jsxs(s,{style:{width:280,border:"1px solid #d9d9d9",borderRadius:4},children:[e.jsx(r,{children:e.jsx(t,{primary:"Item one"})}),e.jsx(r,{children:e.jsx(t,{primary:"Item two"})}),e.jsx(r,{children:e.jsx(t,{primary:"Item three"})})]})},d={render:()=>e.jsxs(s,{style:{width:280,border:"1px solid #d9d9d9",borderRadius:4},children:[e.jsxs(r,{onClick:()=>{},children:[e.jsx(m,{children:"📁"}),e.jsx(t,{primary:"Folder",secondary:"12 items"})]}),e.jsxs(r,{onClick:()=>{},selected:!0,children:[e.jsx(m,{children:"📄"}),e.jsx(t,{primary:"Document.pdf",secondary:"Selected"})]}),e.jsxs(r,{onClick:()=>{},disabled:!0,children:[e.jsx(m,{children:"🔒"}),e.jsx(t,{primary:"Locked item"})]})]})},o={render:()=>e.jsxs(s,{style:{width:280,border:"1px solid #d9d9d9",borderRadius:4,maxHeight:300,overflow:"auto"},children:[e.jsx(n,{children:"Recent"}),e.jsx(r,{onClick:()=>{},children:e.jsx(t,{primary:"File A"})}),e.jsx(r,{onClick:()=>{},children:e.jsx(t,{primary:"File B"})}),e.jsx(S,{}),e.jsx(n,{children:"Archived"}),e.jsx(r,{onClick:()=>{},children:e.jsx(t,{primary:"Old file C"})})]})},a={render:()=>e.jsx(s,{dense:!0,style:{width:240,border:"1px solid #d9d9d9",borderRadius:4},children:["Apple","Banana","Cherry","Date","Elderberry"].map(c=>e.jsx(r,{onClick:()=>{},children:e.jsx(t,{primary:c})},c))})};var l,p,L;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <List style={{
    width: 280,
    border: '1px solid #d9d9d9',
    borderRadius: 4
  }}>
      <ListItem><ListItemText primary="Item one" /></ListItem>
      <ListItem><ListItemText primary="Item two" /></ListItem>
      <ListItem><ListItemText primary="Item three" /></ListItem>
    </List>
}`,...(L=(p=i.parameters)==null?void 0:p.docs)==null?void 0:L.source}}};var x,I,h;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <List style={{
    width: 280,
    border: '1px solid #d9d9d9',
    borderRadius: 4
  }}>
      <ListItem onClick={() => {}}>
        <ListItemIcon>📁</ListItemIcon>
        <ListItemText primary="Folder" secondary="12 items" />
      </ListItem>
      <ListItem onClick={() => {}} selected>
        <ListItemIcon>📄</ListItemIcon>
        <ListItemText primary="Document.pdf" secondary="Selected" />
      </ListItem>
      <ListItem onClick={() => {}} disabled>
        <ListItemIcon>🔒</ListItemIcon>
        <ListItemText primary="Locked item" />
      </ListItem>
    </List>
}`,...(h=(I=d.parameters)==null?void 0:I.docs)==null?void 0:h.source}}};var y,u,j;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <List style={{
    width: 280,
    border: '1px solid #d9d9d9',
    borderRadius: 4,
    maxHeight: 300,
    overflow: 'auto'
  }}>
      <ListSubheader>Recent</ListSubheader>
      <ListItem onClick={() => {}}><ListItemText primary="File A" /></ListItem>
      <ListItem onClick={() => {}}><ListItemText primary="File B" /></ListItem>
      <ListDivider />
      <ListSubheader>Archived</ListSubheader>
      <ListItem onClick={() => {}}><ListItemText primary="Old file C" /></ListItem>
    </List>
}`,...(j=(u=o.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};var b,C,k;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <List dense style={{
    width: 240,
    border: '1px solid #d9d9d9',
    borderRadius: 4
  }}>
      {['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'].map(item => <ListItem key={item} onClick={() => {}}>
          <ListItemText primary={item} />
        </ListItem>)}
    </List>
}`,...(k=(C=a.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};const f=["Basic","WithIcons","WithSubheaders","Dense"];export{i as Basic,a as Dense,d as WithIcons,o as WithSubheaders,f as __namedExportsOrder,D as default};
