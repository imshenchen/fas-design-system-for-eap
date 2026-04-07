import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const r=({content:s,variant:a="standard",color:z="error",max:d=99,showZero:b=!1,children:V,className:T,style:q})=>{const C=a==="standard"&&(s===void 0||s===0&&!b),N=()=>a==="dot"?"":typeof s=="number"&&s>d?`${d}+`:String(s??""),R=["fas-badge",`fas-badge--${a}`,`fas-badge--${z}`,C&&"fas-badge--hidden"].filter(Boolean).join(" "),Z=["fas-badge-root",T].filter(Boolean).join(" ");return e.jsxs("span",{className:Z,style:q,children:[V,e.jsx("span",{className:R,"aria-label":a==="dot"?"badge":void 0,children:N()})]})};r.displayName="Badge";r.__docgenInfo={description:"",methods:[],displayName:"Badge",props:{content:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:""},variant:{required:!1,tsType:{name:"union",raw:"'standard' | 'dot'",elements:[{name:"literal",value:"'standard'"},{name:"literal",value:"'dot'"}]},description:"",defaultValue:{value:"'standard'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'error' | 'processing' | 'success' | 'warning'",elements:[{name:"literal",value:"'error'"},{name:"literal",value:"'processing'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"}]},description:"",defaultValue:{value:"'error'",computed:!1}},max:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"99",computed:!1}},showZero:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const A={title:"Foundations/Badge",component:r,tags:["autodocs"],argTypes:{variant:{control:"select",options:["standard","dot"]},color:{control:"select",options:["error","processing","success","warning"]},content:{control:"text"},max:{control:"number"},showZero:{control:"boolean"}}},n=()=>e.jsx("span",{style:{fontSize:24,lineHeight:1},children:"🔔"}),o={args:{content:4,color:"error",variant:"standard"},render:s=>e.jsx(r,{...s,children:e.jsx(n,{})})},t={render:()=>e.jsxs("div",{style:{display:"flex",gap:32,alignItems:"center",padding:24},children:[e.jsx(r,{content:4,color:"error",children:e.jsx(n,{})}),e.jsx(r,{content:12,color:"processing",children:e.jsx(n,{})}),e.jsx(r,{content:99,color:"success",children:e.jsx(n,{})}),e.jsx(r,{content:100,color:"warning",children:e.jsx(n,{})}),e.jsx(r,{content:0,showZero:!0,color:"error",children:e.jsx(n,{})})]})},l={render:()=>e.jsxs("div",{style:{display:"flex",gap:32,alignItems:"center",padding:24},children:[e.jsx(r,{variant:"dot",color:"error",children:e.jsx(n,{})}),e.jsx(r,{variant:"dot",color:"processing",children:e.jsx(n,{})}),e.jsx(r,{variant:"dot",color:"success",children:e.jsx(n,{})}),e.jsx(r,{variant:"dot",color:"warning",children:e.jsx(n,{})})]})},i={render:()=>e.jsxs("div",{style:{padding:24},children:[e.jsx("p",{style:{marginBottom:16,fontSize:12,color:"var(--text-medium)"},children:"Standard — all colors"}),e.jsxs("div",{style:{display:"flex",gap:32,marginBottom:32},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(r,{content:5,color:"error",children:e.jsx(n,{})}),e.jsx("span",{style:{fontSize:12,color:"var(--text-medium)"},children:"error"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(r,{content:5,color:"processing",children:e.jsx(n,{})}),e.jsx("span",{style:{fontSize:12,color:"var(--text-medium)"},children:"processing"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(r,{content:5,color:"success",children:e.jsx(n,{})}),e.jsx("span",{style:{fontSize:12,color:"var(--text-medium)"},children:"success"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(r,{content:5,color:"warning",children:e.jsx(n,{})}),e.jsx("span",{style:{fontSize:12,color:"var(--text-medium)"},children:"warning"})]})]}),e.jsx("p",{style:{marginBottom:16,fontSize:12,color:"var(--text-medium)"},children:"Dot — all colors"}),e.jsxs("div",{style:{display:"flex",gap:32},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(r,{variant:"dot",color:"error",children:e.jsx(n,{})}),e.jsx("span",{style:{fontSize:12,color:"var(--text-medium)"},children:"error"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(r,{variant:"dot",color:"processing",children:e.jsx(n,{})}),e.jsx("span",{style:{fontSize:12,color:"var(--text-medium)"},children:"processing"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(r,{variant:"dot",color:"success",children:e.jsx(n,{})}),e.jsx("span",{style:{fontSize:12,color:"var(--text-medium)"},children:"success"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:8},children:[e.jsx(r,{variant:"dot",color:"warning",children:e.jsx(n,{})}),e.jsx("span",{style:{fontSize:12,color:"var(--text-medium)"},children:"warning"})]})]})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:32,alignItems:"center",padding:24},children:[e.jsx(r,{content:99,max:99,children:e.jsx(n,{})}),e.jsx(r,{content:100,max:99,children:e.jsx(n,{})}),e.jsx(r,{content:999,max:99,children:e.jsx(n,{})}),e.jsx(r,{content:5,max:3,children:e.jsx(n,{})})]})};var p,g,m;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    content: 4,
    color: 'error',
    variant: 'standard'
  },
  render: args => <Badge {...args}>
      <BellIcon />
    </Badge>
}`,...(m=(g=o.parameters)==null?void 0:g.docs)==null?void 0:m.source}}};var x,u,f;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    alignItems: 'center',
    padding: 24
  }}>
      <Badge content={4} color="error"><BellIcon /></Badge>
      <Badge content={12} color="processing"><BellIcon /></Badge>
      <Badge content={99} color="success"><BellIcon /></Badge>
      <Badge content={100} color="warning"><BellIcon /></Badge>
      <Badge content={0} showZero color="error"><BellIcon /></Badge>
    </div>
}`,...(f=(u=t.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var v,y,B;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    alignItems: 'center',
    padding: 24
  }}>
      <Badge variant="dot" color="error"><BellIcon /></Badge>
      <Badge variant="dot" color="processing"><BellIcon /></Badge>
      <Badge variant="dot" color="success"><BellIcon /></Badge>
      <Badge variant="dot" color="warning"><BellIcon /></Badge>
    </div>
}`,...(B=(y=l.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var j,h,I;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: 24
  }}>
      <p style={{
      marginBottom: 16,
      fontSize: 12,
      color: 'var(--text-medium)'
    }}>Standard — all colors</p>
      <div style={{
      display: 'flex',
      gap: 32,
      marginBottom: 32
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8
      }}>
          <Badge content={5} color="error"><BellIcon /></Badge>
          <span style={{
          fontSize: 12,
          color: 'var(--text-medium)'
        }}>error</span>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8
      }}>
          <Badge content={5} color="processing"><BellIcon /></Badge>
          <span style={{
          fontSize: 12,
          color: 'var(--text-medium)'
        }}>processing</span>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8
      }}>
          <Badge content={5} color="success"><BellIcon /></Badge>
          <span style={{
          fontSize: 12,
          color: 'var(--text-medium)'
        }}>success</span>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8
      }}>
          <Badge content={5} color="warning"><BellIcon /></Badge>
          <span style={{
          fontSize: 12,
          color: 'var(--text-medium)'
        }}>warning</span>
        </div>
      </div>

      <p style={{
      marginBottom: 16,
      fontSize: 12,
      color: 'var(--text-medium)'
    }}>Dot — all colors</p>
      <div style={{
      display: 'flex',
      gap: 32
    }}>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8
      }}>
          <Badge variant="dot" color="error"><BellIcon /></Badge>
          <span style={{
          fontSize: 12,
          color: 'var(--text-medium)'
        }}>error</span>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8
      }}>
          <Badge variant="dot" color="processing"><BellIcon /></Badge>
          <span style={{
          fontSize: 12,
          color: 'var(--text-medium)'
        }}>processing</span>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8
      }}>
          <Badge variant="dot" color="success"><BellIcon /></Badge>
          <span style={{
          fontSize: 12,
          color: 'var(--text-medium)'
        }}>success</span>
        </div>
        <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8
      }}>
          <Badge variant="dot" color="warning"><BellIcon /></Badge>
          <span style={{
          fontSize: 12,
          color: 'var(--text-medium)'
        }}>warning</span>
        </div>
      </div>
    </div>
}`,...(I=(h=i.parameters)==null?void 0:h.docs)==null?void 0:I.source}}};var S,w,D;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 32,
    alignItems: 'center',
    padding: 24
  }}>
      <Badge content={99} max={99}><BellIcon /></Badge>
      <Badge content={100} max={99}><BellIcon /></Badge>
      <Badge content={999} max={99}><BellIcon /></Badge>
      <Badge content={5} max={3}><BellIcon /></Badge>
    </div>
}`,...(D=(w=c.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const E=["Default","StandardVariant","DotVariant","AllColors","MaxValue"];export{i as AllColors,o as Default,l as DotVariant,c as MaxValue,t as StandardVariant,E as __namedExportsOrder,A as default};
