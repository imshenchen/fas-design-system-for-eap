import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{D as t}from"./Divider-PGiQvWAm.js";import"./index-yBjzXJbu.js";const z={title:"Core/Foundations/Divider",component:t,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]}}},o={args:{orientation:"horizontal"},decorators:[u=>e.jsx("div",{style:{padding:24},children:e.jsx(u,{})})]},r={render:()=>e.jsxs("div",{style:{padding:24,display:"flex",flexDirection:"column",gap:16},children:[e.jsx("p",{style:{margin:0,color:"var(--text-body)"},children:"Section above"}),e.jsx(t,{orientation:"horizontal"}),e.jsx("p",{style:{margin:0,color:"var(--text-body)"},children:"Section below"})]})},i={render:()=>e.jsxs("div",{style:{padding:24,display:"flex",alignItems:"center",height:48,gap:16},children:[e.jsx("span",{style:{color:"var(--text-body)"},children:"Left"}),e.jsx(t,{orientation:"vertical",style:{height:24}}),e.jsx("span",{style:{color:"var(--text-body)"},children:"Right"})]})},a={render:()=>e.jsxs("div",{style:{padding:24},children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"var(--text-medium)"},children:"Horizontal"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,marginBottom:32},children:[e.jsx("p",{style:{margin:0,color:"var(--text-body)"},children:"Item one"}),e.jsx(t,{orientation:"horizontal"}),e.jsx("p",{style:{margin:0,color:"var(--text-body)"},children:"Item two"}),e.jsx(t,{orientation:"horizontal"}),e.jsx("p",{style:{margin:0,color:"var(--text-body)"},children:"Item three"})]}),e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"var(--text-medium)"},children:"Vertical"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,height:32},children:[e.jsx("span",{style:{color:"var(--text-body)"},children:"Home"}),e.jsx(t,{orientation:"vertical",style:{height:20}}),e.jsx("span",{style:{color:"var(--text-body)"},children:"About"}),e.jsx(t,{orientation:"vertical",style:{height:20}}),e.jsx("span",{style:{color:"var(--text-body)"},children:"Contact"})]})]})};var n,s,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  decorators: [Story => <div style={{
    padding: 24
  }}>
        <Story />
      </div>]
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var d,c,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 16
  }}>
      <p style={{
      margin: 0,
      color: 'var(--text-body)'
    }}>Section above</p>
      <Divider orientation="horizontal" />
      <p style={{
      margin: 0,
      color: 'var(--text-body)'
    }}>Section below</p>
    </div>
}`,...(p=(c=r.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var y,m,x;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24,
    display: 'flex',
    alignItems: 'center',
    height: 48,
    gap: 16
  }}>
      <span style={{
      color: 'var(--text-body)'
    }}>Left</span>
      <Divider orientation="vertical" style={{
      height: 24
    }} />
      <span style={{
      color: 'var(--text-body)'
    }}>Right</span>
    </div>
}`,...(x=(m=i.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var v,g,h;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24
  }}>
      <p style={{
      marginBottom: 8,
      fontSize: 12,
      color: 'var(--text-medium)'
    }}>Horizontal</p>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 32
    }}>
        <p style={{
        margin: 0,
        color: 'var(--text-body)'
      }}>Item one</p>
        <Divider orientation="horizontal" />
        <p style={{
        margin: 0,
        color: 'var(--text-body)'
      }}>Item two</p>
        <Divider orientation="horizontal" />
        <p style={{
        margin: 0,
        color: 'var(--text-body)'
      }}>Item three</p>
      </div>

      <p style={{
      marginBottom: 8,
      fontSize: 12,
      color: 'var(--text-medium)'
    }}>Vertical</p>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      height: 32
    }}>
        <span style={{
        color: 'var(--text-body)'
      }}>Home</span>
        <Divider orientation="vertical" style={{
        height: 20
      }} />
        <span style={{
        color: 'var(--text-body)'
      }}>About</span>
        <Divider orientation="vertical" style={{
        height: 20
      }} />
        <span style={{
        color: 'var(--text-body)'
      }}>Contact</span>
      </div>
    </div>
}`,...(h=(g=a.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};const D=["Default","Horizontal","Vertical","BothOrientations"];export{a as BothOrientations,o as Default,r as Horizontal,i as Vertical,D as __namedExportsOrder,z as default};
