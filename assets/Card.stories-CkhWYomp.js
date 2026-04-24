import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{C as a,a as r,b as j,c as b}from"./Card-D85ioM2d.js";import{B as l}from"./Button-iDd4ESB6.js";import{A as B}from"./Avatar-DRuec5BF.js";import"./index-yBjzXJbu.js";import"./index-BioFo8Zg.js";const E={title:"Data Display/Card",component:a,tags:["autodocs"],argTypes:{variant:{control:"select",options:["elevated","outlined","filled"]},clickable:{control:"boolean"}}},i={args:{variant:"elevated"},render:t=>e.jsxs(a,{...t,style:{width:280},children:[e.jsx(j,{title:"Card Title",subtitle:"Secondary text"}),e.jsx(r,{children:"Card body content goes here."})]})},d={render:()=>e.jsx("div",{style:{display:"flex",gap:16,flexWrap:"wrap"},children:["elevated","outlined","filled"].map(t=>e.jsx(a,{variant:t,style:{width:200},children:e.jsxs(r,{children:[e.jsx("div",{style:{fontWeight:600,marginBottom:4,textTransform:"capitalize"},children:t}),e.jsx("div",{style:{fontSize:12,color:"#727171"},children:"Card variant example"})]})},t))})},n={render:()=>e.jsxs(a,{style:{width:320},children:[e.jsx(j,{avatar:e.jsx(B,{type:"primary",size:"m",initials:"JD"}),title:"John Doe",subtitle:"Software Engineer",action:e.jsx(l,{variant:"text",size:"xs",children:"Edit"})}),e.jsx(r,{children:e.jsx("p",{style:{margin:0,fontSize:14,color:"#727171",lineHeight:1.5},children:"A brief description about this person or content item."})}),e.jsxs(b,{children:[e.jsx(l,{variant:"outlined",size:"s",children:"Cancel"}),e.jsx(l,{variant:"contained",size:"s",children:"Confirm"})]})]})},s={render:()=>e.jsxs("div",{style:{display:"flex",gap:16},children:[e.jsx(a,{clickable:!0,variant:"elevated",style:{width:160,padding:0},onClick:()=>alert("Clicked!"),children:e.jsx(r,{children:"Click me"})}),e.jsx(a,{clickable:!0,variant:"outlined",style:{width:160,padding:0},children:e.jsx(r,{children:"Outlined clickable"})})]})};var o,c,p;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'elevated'
  },
  render: args => <Card {...args} style={{
    width: 280
  }}>
      <CardHeader title="Card Title" subtitle="Secondary text" />
      <CardBody>Card body content goes here.</CardBody>
    </Card>
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,C,y;d.parameters={...d.parameters,docs:{...(m=d.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(y=(C=d.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var u,x,v;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(v=(x=n.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var h,f,g;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(f=s.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const H=["Default","AllVariants","FullCard","Clickable"];export{d as AllVariants,s as Clickable,i as Default,n as FullCard,H as __namedExportsOrder,E as default};
