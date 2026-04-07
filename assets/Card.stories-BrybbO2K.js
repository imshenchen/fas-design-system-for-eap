import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{B as u}from"./Button-iDd4ESB6.js";import{A as S}from"./Avatar-C_9irKxG.js";import"./index-yBjzXJbu.js";import"./index-BioFo8Zg.js";const i=({variant:a="elevated",clickable:r=!1,children:t,className:d,style:m,onClick:b})=>e.jsx("div",{className:["fas-card",`fas-card--${a}`,r&&"fas-card--clickable",d].filter(Boolean).join(" "),style:m,onClick:b,role:r?"button":void 0,tabIndex:r?0:void 0,children:t});i.displayName="Card";const p=({title:a,subtitle:r,action:t,avatar:d,className:m})=>e.jsxs("div",{className:["fas-card__header",m].filter(Boolean).join(" "),children:[d&&e.jsx("div",{className:"fas-card__header-avatar",children:d}),e.jsxs("div",{className:"fas-card__header-content",children:[e.jsx("div",{className:"fas-card__header-title",children:a}),r&&e.jsx("div",{className:"fas-card__header-subtitle",children:r})]}),t&&e.jsx("div",{className:"fas-card__header-action",children:t})]});p.displayName="CardHeader";const s=({children:a,className:r,style:t})=>e.jsx("div",{className:["fas-card__body",r].filter(Boolean).join(" "),style:t,children:a});s.displayName="CardBody";const y=({children:a,className:r,style:t})=>e.jsx("div",{className:["fas-card__actions",r].filter(Boolean).join(" "),style:t,children:a});y.displayName="CardActions";i.__docgenInfo={description:"",methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:"'elevated' | 'outlined' | 'filled'",elements:[{name:"literal",value:"'elevated'"},{name:"literal",value:"'outlined'"},{name:"literal",value:"'filled'"}]},description:"",defaultValue:{value:"'elevated'",computed:!1}},clickable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};p.__docgenInfo={description:"",methods:[],displayName:"CardHeader",props:{title:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},subtitle:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},action:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},avatar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};s.__docgenInfo={description:"",methods:[],displayName:"CardBody",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};y.__docgenInfo={description:"",methods:[],displayName:"CardActions",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""}}};const D={title:"Data Display/Card",component:i,tags:["autodocs"],argTypes:{variant:{control:"select",options:["elevated","outlined","filled"]},clickable:{control:"boolean"}}},n={args:{variant:"elevated"},render:a=>e.jsxs(i,{...a,style:{width:280},children:[e.jsx(p,{title:"Card Title",subtitle:"Secondary text"}),e.jsx(s,{children:"Card body content goes here."})]})},l={render:()=>e.jsx("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:["elevated","outlined","filled"].map(a=>e.jsx(i,{variant:a,style:{width:200},children:e.jsxs(s,{children:[e.jsx("div",{style:{fontWeight:600,marginBottom:4,textTransform:"capitalize"},children:a}),e.jsx("div",{style:{fontSize:12,color:"#727171"},children:"Card variant example"})]})},a))})},o={render:()=>e.jsxs(i,{style:{width:320},children:[e.jsx(p,{avatar:e.jsx(S,{type:"primary",size:"m",initials:"JD"}),title:"John Doe",subtitle:"Software Engineer",action:e.jsx(u,{variant:"text",size:"xs",children:"Edit"})}),e.jsx(s,{children:e.jsx("p",{style:{margin:0,fontSize:14,color:"#727171",lineHeight:1.5},children:"A brief description about this person or content item."})}),e.jsxs(y,{children:[e.jsx(u,{variant:"outlined",size:"s",children:"Cancel"}),e.jsx(u,{variant:"contained",size:"s",children:"Confirm"})]})]})},c={render:()=>e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(i,{clickable:!0,variant:"elevated",style:{width:160,padding:0},onClick:()=>alert("Clicked!"),children:e.jsx(s,{children:"Click me"})}),e.jsx(i,{clickable:!0,variant:"outlined",style:{width:160,padding:0},children:e.jsx(s,{children:"Outlined clickable"})})]})};var f,v,C;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    variant: 'elevated'
  },
  render: args => <Card {...args} style={{
    width: 280
  }}>
      <CardHeader title="Card Title" subtitle="Secondary text" />
      <CardBody>Card body content goes here.</CardBody>
    </Card>
}`,...(C=(v=n.parameters)==null?void 0:v.docs)==null?void 0:C.source}}};var h,x,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16,
    flexWrap: 'wrap'
  }}>
      {(['elevated', 'outlined', 'filled'] as const).map(variant => <Card key={variant} variant={variant} style={{
      width: 200
    }}>
          <CardBody>
            <div style={{
          fontWeight: 600,
          marginBottom: 4,
          textTransform: 'capitalize'
        }}>{variant}</div>
            <div style={{
          fontSize: 12,
          color: '#727171'
        }}>Card variant example</div>
          </CardBody>
        </Card>)}
    </div>
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var j,N,R;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <Card style={{
    width: 320
  }}>
      <CardHeader avatar={<Avatar type="primary" size="m" initials="JD" />} title="John Doe" subtitle="Software Engineer" action={<Button variant="text" size="xs">Edit</Button>} />
      <CardBody>
        <p style={{
        margin: 0,
        fontSize: 14,
        color: '#727171',
        lineHeight: 1.5
      }}>
          A brief description about this person or content item.
        </p>
      </CardBody>
      <CardActions>
        <Button variant="outlined" size="s">Cancel</Button>
        <Button variant="contained" size="s">Confirm</Button>
      </CardActions>
    </Card>
}`,...(R=(N=o.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var B,w,_;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 16
  }}>
      <Card clickable variant="elevated" style={{
      width: 160,
      padding: 0
    }} onClick={() => alert('Clicked!')}>
        <CardBody>Click me</CardBody>
      </Card>
      <Card clickable variant="outlined" style={{
      width: 160,
      padding: 0
    }}>
        <CardBody>Outlined clickable</CardBody>
      </Card>
    </div>
}`,...(_=(w=c.parameters)==null?void 0:w.docs)==null?void 0:_.source}}};const H=["Default","AllVariants","FullCard","Clickable"];export{l as AllVariants,c as Clickable,n as Default,o as FullCard,H as __namedExportsOrder,D as default};
