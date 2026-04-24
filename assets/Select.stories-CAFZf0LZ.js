import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{r as o}from"./index-BioFo8Zg.js";import{S as l}from"./Select-tvCMycsp.js";import"./index-yBjzXJbu.js";import"./Checkbox-DACd6qjG.js";import"./Chip-CxPBUIB_.js";const H={title:"Data Entry/Select",component:l,tags:["autodocs"],argTypes:{style:{control:"select",options:["outlined","underline"]},size:{control:"select",options:["xl","l","m","s","xs"]},labelPosition:{control:"select",options:["top","inline","left"]},multiple:{control:"boolean"},searchable:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"boolean"},required:{control:"boolean"}}},a=[{value:"apple",label:"蘋果 Apple"},{value:"banana",label:"香蕉 Banana"},{value:"cherry",label:"櫻桃 Cherry"},{value:"durian",label:"榴槤 Durian"},{value:"elderberry",label:"接骨木 Elderberry"},{value:"fig",label:"無花果 Fig"},{value:"grape",label:"葡萄 Grape"},{value:"honeydew",label:"哈密瓜 Honeydew"},{value:"kiwi",label:"奇異果 Kiwi",disabled:!0},{value:"lemon",label:"檸檬 Lemon"}],n={name:"Single select",render:()=>{const[t,r]=o.useState("");return e.jsx("div",{style:{width:320},children:e.jsx(l,{label:"水果",options:a,value:t,onChange:s=>r(s),placeholder:"請選擇一種水果",helperText:`目前選擇：${t||"(無)"}`})})}},i={name:"Multi select",render:()=>{const[t,r]=o.useState(["apple","cherry"]);return e.jsx("div",{style:{width:420},children:e.jsx(l,{label:"喜歡的水果（可多選）",options:a,value:t,onChange:s=>r(s),multiple:!0,placeholder:"請選擇多種水果",helperText:`已選 ${t.length} 項`})})}},c={name:"Single + searchable",render:()=>{const[t,r]=o.useState("");return e.jsx("div",{style:{width:320},children:e.jsx(l,{label:"搜尋選擇",options:a,value:t,onChange:s=>r(s),searchable:!0,placeholder:"輸入文字搜尋"})})}},d={name:"Multi + searchable",render:()=>{const[t,r]=o.useState([]);return e.jsx("div",{style:{width:480},children:e.jsx(l,{label:"搜尋多選",options:a,value:t,onChange:s=>r(s),multiple:!0,searchable:!0,placeholder:"輸入文字搜尋，勾選加入"})})}},p={name:"Single + searchable + creatable",render:()=>{const[t,r]=o.useState("");return e.jsx("div",{style:{width:360},children:e.jsx(l,{label:"分類（可新增）",options:a,value:t,onChange:s=>r(s),searchable:!0,creatable:!0,placeholder:"輸入搜尋，或新增新分類",helperText:`目前選擇：${t||"(無)"}`})})}},u={name:"Multi + searchable + creatable",render:()=>{const[t,r]=o.useState(["apple"]);return e.jsx("div",{style:{width:480},children:e.jsx(l,{label:"標籤（可多選 + 新增）",options:a,value:t,onChange:s=>r(s),multiple:!0,searchable:!0,creatable:!0,placeholder:"輸入搜尋，或新增新標籤",helperText:`已選 ${t.length} 項`})})}},h={name:"All states",render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,width:720},children:[e.jsx(l,{label:"Empty",options:a,placeholder:"請選擇"}),e.jsx(l,{label:"Filled",options:a,defaultValue:"banana"}),e.jsx(l,{label:"Error",options:a,defaultValue:"apple",error:"欄位格式不正確"}),e.jsx(l,{label:"Disabled",options:a,defaultValue:"grape",disabled:!0}),e.jsx(l,{label:"Read-only",options:a,defaultValue:"fig",readOnly:!0}),e.jsx(l,{label:"Underline",options:a,style:"underline",defaultValue:"cherry"})]})},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:320},children:[e.jsx(l,{size:"xl",options:a,placeholder:"XL"}),e.jsx(l,{size:"l",options:a,placeholder:"L"}),e.jsx(l,{size:"m",options:a,placeholder:"M (default)"}),e.jsx(l,{size:"s",options:a,placeholder:"S"}),e.jsx(l,{size:"xs",options:a,placeholder:"XS"})]})};var S,v,m;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: 'Single select',
  render: () => {
    const [val, setVal] = useState<string>('');
    return <div style={{
      width: 320
    }}>
        <Select label="水果" options={FRUITS} value={val} onChange={v => setVal(v as string)} placeholder="請選擇一種水果" helperText={\`目前選擇：\${val || '(無)'}\`} />
      </div>;
  }
}`,...(m=(v=n.parameters)==null?void 0:v.docs)==null?void 0:m.source}}};var g,x,y;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: 'Multi select',
  render: () => {
    const [val, setVal] = useState<string[]>(['apple', 'cherry']);
    return <div style={{
      width: 420
    }}>
        <Select label="喜歡的水果（可多選）" options={FRUITS} value={val} onChange={v => setVal(v as string[])} multiple placeholder="請選擇多種水果" helperText={\`已選 \${val.length} 項\`} />
      </div>;
  }
}`,...(y=(x=i.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var T,f,V;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  name: 'Single + searchable',
  render: () => {
    const [val, setVal] = useState<string>('');
    return <div style={{
      width: 320
    }}>
        <Select label="搜尋選擇" options={FRUITS} value={val} onChange={v => setVal(v as string)} searchable placeholder="輸入文字搜尋" />
      </div>;
  }
}`,...(V=(f=c.parameters)==null?void 0:f.docs)==null?void 0:V.source}}};var j,F,R;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Multi + searchable',
  render: () => {
    const [val, setVal] = useState<string[]>([]);
    return <div style={{
      width: 480
    }}>
        <Select label="搜尋多選" options={FRUITS} value={val} onChange={v => setVal(v as string[])} multiple searchable placeholder="輸入文字搜尋，勾選加入" />
      </div>;
  }
}`,...(R=(F=d.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var w,U,C;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: 'Single + searchable + creatable',
  render: () => {
    const [val, setVal] = useState<string>('');
    return <div style={{
      width: 360
    }}>
        <Select label="分類（可新增）" options={FRUITS} value={val} onChange={v => setVal(v as string)} searchable creatable placeholder="輸入搜尋，或新增新分類" helperText={\`目前選擇：\${val || '(無)'}\`} />
      </div>;
  }
}`,...(C=(U=p.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};var I,M,z;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Multi + searchable + creatable',
  render: () => {
    const [val, setVal] = useState<string[]>(['apple']);
    return <div style={{
      width: 480
    }}>
        <Select label="標籤（可多選 + 新增）" options={FRUITS} value={val} onChange={v => setVal(v as string[])} multiple searchable creatable placeholder="輸入搜尋，或新增新標籤" helperText={\`已選 \${val.length} 項\`} />
      </div>;
  }
}`,...(z=(M=u.parameters)==null?void 0:M.docs)==null?void 0:z.source}}};var E,$,D;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: 'All states',
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: 24,
    width: 720
  }}>
      <Select label="Empty" options={FRUITS} placeholder="請選擇" />
      <Select label="Filled" options={FRUITS} defaultValue="banana" />
      <Select label="Error" options={FRUITS} defaultValue="apple" error="欄位格式不正確" />
      <Select label="Disabled" options={FRUITS} defaultValue="grape" disabled />
      <Select label="Read-only" options={FRUITS} defaultValue="fig" readOnly />
      <Select label="Underline" options={FRUITS} style="underline" defaultValue="cherry" />
    </div>
}`,...(D=($=h.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var L,O,X;b.parameters={...b.parameters,docs:{...(L=b.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    width: 320
  }}>
      <Select size="xl" options={FRUITS} placeholder="XL" />
      <Select size="l" options={FRUITS} placeholder="L" />
      <Select size="m" options={FRUITS} placeholder="M (default)" />
      <Select size="s" options={FRUITS} placeholder="S" />
      <Select size="xs" options={FRUITS} placeholder="XS" />
    </div>
}`,...(X=(O=b.parameters)==null?void 0:O.docs)==null?void 0:X.source}}};const K=["Single","Multiple","SingleSearchable","MultiSearchable","SingleCreatable","MultiCreatable","States","Sizes"];export{u as MultiCreatable,d as MultiSearchable,i as Multiple,n as Single,p as SingleCreatable,c as SingleSearchable,b as Sizes,h as States,K as __namedExportsOrder,H as default};
