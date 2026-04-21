import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{T as r}from"./Tooltip-CYrLbS1X.js";import{B as s}from"./Button-iDd4ESB6.js";import"./index-yBjzXJbu.js";import"./index-BioFo8Zg.js";const j={title:"Feedback/Tooltip",component:r,tags:["autodocs"],argTypes:{placement:{control:"select",options:["top","bottom","left","right"]}}},i={render:()=>t.jsx("div",{style:{padding:60,display:"inline-block"},children:t.jsx(r,{title:"This is a tooltip",children:t.jsx(s,{variant:"outlined",children:"Hover me"})})})},o={render:()=>t.jsx("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,padding:80},children:["top","bottom","left","right"].map(e=>t.jsx("div",{style:{display:"flex",justifyContent:"center"},children:t.jsx(r,{title:`Placement: ${e}`,placement:e,children:t.jsx(s,{variant:"outlined",size:"s",children:e})})},e))})},l={render:()=>t.jsx("div",{style:{padding:80,display:"inline-block"},children:t.jsx(r,{title:"This is a much longer tooltip text that will wrap onto multiple lines when it exceeds the max width.",children:t.jsx(s,{variant:"outlined",children:"Long tooltip"})})})};var n,a,d;i.parameters={...i.parameters,docs:{...(n=i.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 60,
    display: 'inline-block'
  }}>
      <Tooltip title="This is a tooltip">
        <Button variant="outlined">Hover me</Button>
      </Tooltip>
    </div>
}`,...(d=(a=i.parameters)==null?void 0:a.docs)==null?void 0:d.source}}};var p,c,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 48,
    padding: 80
  }}>
      {(['top', 'bottom', 'left', 'right'] as const).map(placement => <div key={placement} style={{
      display: 'flex',
      justifyContent: 'center'
    }}>
          <Tooltip title={\`Placement: \${placement}\`} placement={placement}>
            <Button variant="outlined" size="s">{placement}</Button>
          </Tooltip>
        </div>)}
    </div>
}`,...(m=(c=o.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,h,g;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 80,
    display: 'inline-block'
  }}>
      <Tooltip title="This is a much longer tooltip text that will wrap onto multiple lines when it exceeds the max width.">
        <Button variant="outlined">Long tooltip</Button>
      </Tooltip>
    </div>
}`,...(g=(h=l.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const b=["Default","AllPlacements","LongText"];export{o as AllPlacements,i as Default,l as LongText,b as __namedExportsOrder,j as default};
