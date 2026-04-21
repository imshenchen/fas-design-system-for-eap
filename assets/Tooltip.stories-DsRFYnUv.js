import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{T as o}from"./Tooltip-DHUvMufU.js";import{B as L}from"./Button-iDd4ESB6.js";import"./index-yBjzXJbu.js";import"./index-BioFo8Zg.js";const q={title:"Data Display/Tooltip",component:o,tags:["autodocs"],parameters:{layout:"centered"},decorators:[t=>e.jsx("div",{style:{padding:64},children:e.jsx(t,{})})],argTypes:{variant:{control:"select",options:["plain","rich"]},placement:{control:"select",options:["top","bottom","left","right"]}}},l=({label:t})=>e.jsx("button",{style:{width:36,height:36,borderRadius:"50%",border:"none",background:"transparent",cursor:"pointer",display:"inline-flex",alignItems:"center",justifyContent:"center",color:"var(--secondary)"},"aria-label":t,children:e.jsx("span",{className:"material-symbols-outlined",style:{fontSize:20},children:"delete"})}),r={render:()=>e.jsx(o,{title:"Delete",placement:"top",children:e.jsx(l,{label:"Delete"})})},n={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, auto)",gap:48},children:["top","bottom","left","right"].map(t=>e.jsxs("div",{style:{textAlign:"center"},children:[e.jsx(o,{title:`Placement: ${t}`,placement:t,children:e.jsx(l,{label:t})}),e.jsx("p",{style:{fontSize:12,marginTop:8,color:"var(--text-medium)"},children:t})]},t))})},a={render:()=>e.jsx(o,{title:"YINGHSIU.CHEN@deltaww.com",placement:"top",gap:8,children:e.jsx(L,{variant:"outlined",size:"s",children:"YH Chen"})})},s={render:()=>e.jsx(o,{variant:"rich",title:"Scan the barcode",body:"You can scan and decode barcodes on the WIP.",placement:"top",actions:{secondary:{label:"Dismiss",onClick:()=>alert("Dismiss")},primary:{label:"Learn more",onClick:()=>alert("Learn more")}},children:e.jsx(l,{label:"Scan"})})},i={render:()=>e.jsx(o,{variant:"rich",title:"Scan the barcode",body:"You can scan and decode barcodes on the WIP.",placement:"bottom",children:e.jsx(l,{label:"Scan"})})},c={render:()=>e.jsx(o,{variant:"rich",title:"Node Management",placement:"right",children:e.jsx(l,{label:"Node"})})};var d,p,m,h,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Tooltip title="Delete" placement="top">
      <IconBtn label="Delete" />
    </Tooltip>
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source},description:{story:"預設：單行不換行，出現在上方",...(u=(h=r.parameters)==null?void 0:h.docs)==null?void 0:u.description}}};var b,y,g,x,j;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto)',
    gap: 48
  }}>
      {(['top', 'bottom', 'left', 'right'] as const).map(p => <div key={p} style={{
      textAlign: 'center'
    }}>
          <Tooltip title={\`Placement: \${p}\`} placement={p}>
            <IconBtn label={p} />
          </Tooltip>
          <p style={{
        fontSize: 12,
        marginTop: 8,
        color: 'var(--text-medium)'
      }}>{p}</p>
        </div>)}
    </div>
}`,...(g=(y=n.parameters)==null?void 0:y.docs)==null?void 0:g.source},description:{story:"四個方向",...(j=(x=n.parameters)==null?void 0:x.docs)==null?void 0:j.description}}};var T,v,S,I,f;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Tooltip title="YINGHSIU.CHEN@deltaww.com" placement="top" gap={8}>
      <Button variant="outlined" size="s">YH Chen</Button>
    </Tooltip>
}`,...(S=(v=a.parameters)==null?void 0:v.docs)==null?void 0:S.source},description:{story:"文字截斷場景：tooltip 顯示完整 email",...(f=(I=a.parameters)==null?void 0:I.docs)==null?void 0:f.description}}};var B,D,P,C,R;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <Tooltip variant="rich" title="Scan the barcode" body="You can scan and decode barcodes on the WIP." placement="top" actions={{
    secondary: {
      label: 'Dismiss',
      onClick: () => alert('Dismiss')
    },
    primary: {
      label: 'Learn more',
      onClick: () => alert('Learn more')
    }
  }}>
      <IconBtn label="Scan" />
    </Tooltip>
}`,...(P=(D=s.parameters)==null?void 0:D.docs)==null?void 0:P.source},description:{story:"Rich：標題 + 內文 + 兩個 action 按鈕",...(R=(C=s.parameters)==null?void 0:C.docs)==null?void 0:R.description}}};var N,A,W,Y,k;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Tooltip variant="rich" title="Scan the barcode" body="You can scan and decode barcodes on the WIP." placement="bottom">
      <IconBtn label="Scan" />
    </Tooltip>
}`,...(W=(A=i.parameters)==null?void 0:A.docs)==null?void 0:W.source},description:{story:"Rich：只有標題 + 內文，不需要按鈕",...(k=(Y=i.parameters)==null?void 0:Y.docs)==null?void 0:k.description}}};var H,w,z,O,E;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <Tooltip variant="rich" title="Node Management" placement="right">
      <IconBtn label="Node" />
    </Tooltip>
}`,...(z=(w=c.parameters)==null?void 0:w.docs)==null?void 0:z.source},description:{story:"Rich：只有標題",...(E=(O=c.parameters)==null?void 0:O.docs)==null?void 0:E.description}}};const F=["PlainDefault","AllPlacements","PlainOnButton","RichWithActions","RichWithoutActions","RichTitleOnly"];export{n as AllPlacements,r as PlainDefault,a as PlainOnButton,c as RichTitleOnly,s as RichWithActions,i as RichWithoutActions,F as __namedExportsOrder,q as default};
