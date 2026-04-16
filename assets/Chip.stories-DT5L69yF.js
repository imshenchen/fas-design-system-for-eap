import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{S as s,R as d,a as m}from"./Chip-C026yDsk.js";import"./index-yBjzXJbu.js";const r=["processing","success","warning","emergency","error","milestone","idle","mariner","moss","bronze","salmon","wine","orchid","slate","indigo","turquoise","khaki","cinnamon","pink","violet","aqua"],F={title:"Data Display/Chip",component:s,tags:["autodocs"],argTypes:{status:{control:"select",options:r},shape:{control:"select",options:["round","rectangle"]},variant:{control:"select",options:["filled","outlined"]},size:{control:"select",options:["l","s"]}}},l={args:{status:"processing",label:"Processing",shape:"rectangle",variant:"filled",size:"l"}},t={render:()=>a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:r.map(e=>a.jsx(s,{status:e,label:e,shape:"round",variant:"filled"},e))})},i={render:()=>a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:r.map(e=>a.jsx(s,{status:e,label:e,shape:"round",variant:"outlined"},e))})},p={render:()=>a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:r.slice(0,7).map(e=>a.jsx(s,{status:e,label:e,shape:"rectangle",variant:"filled"},e))})},o={render:()=>a.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:8},children:r.slice(0,7).map(e=>a.jsx(s,{status:e,label:e,size:"s"},e))})},n={render:()=>{const e=["全部","React","Vue","Angular","Svelte"];return a.jsxs("div",{style:{display:"flex",gap:8,flexWrap:"wrap"},children:[e.map((u,D)=>a.jsx(m,{label:u,selected:D===0},u)),a.jsx(m,{label:"停用",disabled:!0})]})}},c={render:()=>a.jsxs("div",{style:{display:"flex",gap:8},children:[a.jsx(d,{label:"React"}),a.jsx(d,{label:"TypeScript"}),a.jsx(d,{label:"Vite"})]})};var S,x,g;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    status: 'processing',
    label: 'Processing',
    shape: 'rectangle',
    variant: 'filled',
    size: 'l'
  }
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var v,b,f;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8
  }}>
      {ALL_STATUSES.map(s => <StatusChip key={s} status={s} label={s} shape="round" variant="filled" />)}
    </div>
}`,...(f=(b=t.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,h,j;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8
  }}>
      {ALL_STATUSES.map(s => <StatusChip key={s} status={s} label={s} shape="round" variant="outlined" />)}
    </div>
}`,...(j=(h=i.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};var A,R,C;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8
  }}>
      {ALL_STATUSES.slice(0, 7).map(s => <StatusChip key={s} status={s} label={s} shape="rectangle" variant="filled" />)}
    </div>
}`,...(C=(R=p.parameters)==null?void 0:R.docs)==null?void 0:C.source}}};var T,w,L;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: 8
  }}>
      {ALL_STATUSES.slice(0, 7).map(s => <StatusChip key={s} status={s} label={s} size="s" />)}
    </div>
}`,...(L=(w=o.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};var W,k,z;n.parameters={...n.parameters,docs:{...(W=n.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => {
    const options = ['全部', 'React', 'Vue', 'Angular', 'Svelte'];
    return <div style={{
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }}>
        {options.map((opt, i) => <SelectableChip key={opt} label={opt} selected={i === 0} />)}
        <SelectableChip label="停用" disabled />
      </div>;
  }
}`,...(z=(k=n.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var E,_,U;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 8
  }}>
      <RemovableChip label="React" />
      <RemovableChip label="TypeScript" />
      <RemovableChip label="Vite" />
    </div>
}`,...(U=(_=c.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};const P=["Default","AllStatusFilled","AllStatusOutlined","RectangleShape","SmallSize","Selectable","Removable"];export{t as AllStatusFilled,i as AllStatusOutlined,l as Default,p as RectangleShape,c as Removable,n as Selectable,o as SmallSize,P as __namedExportsOrder,F as default};
