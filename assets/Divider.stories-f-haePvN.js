import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const t=({orientation:r="horizontal",className:b,style:n})=>{const l=["fas-divider",`fas-divider--${r}`,b].filter(Boolean).join(" ");return r==="vertical"?e.jsx("div",{className:l,style:n,role:"separator","aria-orientation":"vertical"}):e.jsx("hr",{className:l,style:n})};t.displayName="Divider";t.__docgenInfo={description:"",methods:[],displayName:"Divider",props:{orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'horizontal'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const D={title:"Foundations/Divider",component:t,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]}}},o={args:{orientation:"horizontal"},decorators:[r=>e.jsx("div",{style:{padding:24},children:e.jsx(r,{})})]},i={render:()=>e.jsxs("div",{style:{padding:24,display:"flex",flexDirection:"column",gap:16},children:[e.jsx("p",{style:{margin:0,color:"var(--text-body)"},children:"Section above"}),e.jsx(t,{orientation:"horizontal"}),e.jsx("p",{style:{margin:0,color:"var(--text-body)"},children:"Section below"})]})},a={render:()=>e.jsxs("div",{style:{padding:24,display:"flex",alignItems:"center",height:48,gap:16},children:[e.jsx("span",{style:{color:"var(--text-body)"},children:"Left"}),e.jsx(t,{orientation:"vertical",style:{height:24}}),e.jsx("span",{style:{color:"var(--text-body)"},children:"Right"})]})},s={render:()=>e.jsxs("div",{style:{padding:24},children:[e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"var(--text-medium)"},children:"Horizontal"}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,marginBottom:32},children:[e.jsx("p",{style:{margin:0,color:"var(--text-body)"},children:"Item one"}),e.jsx(t,{orientation:"horizontal"}),e.jsx("p",{style:{margin:0,color:"var(--text-body)"},children:"Item two"}),e.jsx(t,{orientation:"horizontal"}),e.jsx("p",{style:{margin:0,color:"var(--text-body)"},children:"Item three"})]}),e.jsx("p",{style:{marginBottom:8,fontSize:12,color:"var(--text-medium)"},children:"Vertical"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:12,height:32},children:[e.jsx("span",{style:{color:"var(--text-body)"},children:"Home"}),e.jsx(t,{orientation:"vertical",style:{height:20}}),e.jsx("span",{style:{color:"var(--text-body)"},children:"About"}),e.jsx(t,{orientation:"vertical",style:{height:20}}),e.jsx("span",{style:{color:"var(--text-body)"},children:"Contact"})]})]})};var d,c,p;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  decorators: [Story => <div style={{
    padding: 24
  }}>
        <Story />
      </div>]
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,y,v;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(v=(y=i.parameters)==null?void 0:y.docs)==null?void 0:v.source}}};var x,h,g;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var u,f,j;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(j=(f=s.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};const I=["Default","Horizontal","Vertical","BothOrientations"];export{s as BothOrientations,o as Default,i as Horizontal,a as Vertical,I as __namedExportsOrder,D as default};
