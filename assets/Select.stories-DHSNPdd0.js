import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import{r}from"./index-BioFo8Zg.js";import{C as Xe}from"./Checkbox-DACd6qjG.js";import{R as Ke}from"./Chip-CxPBUIB_.js";import"./index-yBjzXJbu.js";const t=({options:s,value:i,defaultValue:c,onChange:E,multiple:n=!1,searchable:d=!1,creatable:je=!1,createLabel:we="新增",label:O,labelPosition:Te="top",style:Ve="outlined",size:Ce="m",placeholder:L="請選擇",disabled:p=!1,readOnly:h=!1,required:Re=!1,error:T,helperText:P,clearable:qe=!0,className:Ne,id:Fe,name:k,emptyText:Ie="沒有符合的項目"})=>{var Y;const Me=r.useId(),V=Fe??Me,X=i!==void 0,Ue=c??(n?[]:""),[De,Ee]=r.useState(Ue),b=X?i:De,[u,f]=r.useState(!1),[K,z]=r.useState(!1),[y,v]=r.useState(""),$=r.useRef(null),Q=r.useRef(null),S=r.useRef(null),m=r.useMemo(()=>n?Array.isArray(b)?b:[]:b?[b]:[],[b,n]),_=r.useMemo(()=>m.map(e=>s.find(l=>l.value===e)??{value:e,label:e}),[m,s]),j=m.length>0,A=r.useMemo(()=>{if(!d||!y)return s;const e=y.toLowerCase();return s.filter(l=>l.label.toLowerCase().includes(e)||l.value.toLowerCase().includes(e))},[s,y,d]),g=e=>{X||Ee(e),E==null||E(e)},G=e=>{var l;if(!e.disabled)if(n){const x=m,Oe=x.includes(e.value)?x.filter(Pe=>Pe!==e.value):[...x,e.value];g(Oe),d&&((l=S.current)==null||l.focus())}else g(e.value),f(!1),v("")},Le=e=>{p||h||n&&g(m.filter(l=>l!==e))},ke=()=>{var e,l;p||h||(g(n?[]:""),v(""),d?(e=S.current)==null||e.focus():(l=Q.current)==null||l.focus())},w=y.trim(),B=w.toLowerCase(),ze=s.some(e=>e.value.toLowerCase()===B||e.label.toLowerCase()===B),$e=m.some(e=>e.toLowerCase()===B),C=je&&d&&!!w&&!ze&&!$e,H=()=>{var e;C&&(n?(g([...m,w]),v(""),(e=S.current)==null||e.focus()):(g(w),v(""),f(!1)))},J=()=>{if(p||h)return;const e=!u;f(e),e&&d&&setTimeout(()=>{var l;return(l=S.current)==null?void 0:l.focus()},0)};r.useEffect(()=>{if(!u)return;const e=l=>{var x;(x=$.current)!=null&&x.contains(l.target)||(f(!1),z(!1),v(""))};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[u]),r.useEffect(()=>{if(!u)return;const e=l=>{l.key==="Escape"&&(f(!1),v(""))};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[u]);const Ae=qe&&K&&j&&!p&&!h,Be=[K&&"fas-textfield--focus",j&&"fas-textfield--filled",!!T&&"fas-textfield--error",p&&"fas-textfield--disabled",h&&"fas-textfield--readonly"].filter(Boolean).join(" "),W=n||(Y=_[0])==null?void 0:Y.label;return a.jsxs("div",{ref:$,className:["fas-textfield","fas-select",`fas-textfield--${Ve}`,`fas-textfield--${Ce}`,`fas-textfield--label-${Te}`,n&&"fas-select--multiple",u&&"fas-select--open",Be,Ne].filter(Boolean).join(" "),onFocus:()=>z(!0),onBlur:e=>{var l;(l=$.current)!=null&&l.contains(e.relatedTarget)||z(!1)},children:[O&&a.jsxs("label",{htmlFor:V,className:"fas-textfield__label",children:[O,Re&&a.jsx("span",{className:"fas-textfield__required","aria-hidden":!0,children:"*"})]}),a.jsxs("div",{className:"fas-textfield__control",children:[a.jsxs("div",{ref:Q,id:V,role:"combobox","aria-expanded":u,"aria-haspopup":"listbox","aria-disabled":p,"aria-readonly":h,tabIndex:p?-1:0,className:"fas-textfield__input fas-select__trigger",onMouseDown:e=>{const l=e.target;l.closest(".fas-chip__remove, .fas-textfield__clear")||l.closest(".fas-select__search")||J()},onKeyDown:e=>{p||h||(e.key==="Enter"||e.key===" "&&!d?(e.preventDefault(),J()):e.key==="ArrowDown"&&!u&&(e.preventDefault(),f(!0)))},children:[n&&_.length>0&&a.jsx("div",{className:"fas-select__chips",children:_.map(e=>a.jsx(Ke,{label:e.label,size:"s",onRemove:()=>Le(e.value)},e.value))}),d?a.jsx("input",{ref:S,className:"fas-select__search",value:y,placeholder:j&&!n?W??"":_.length?"":L,disabled:p,readOnly:h,"aria-autocomplete":"list","aria-controls":`${V}-listbox`,onChange:e=>{v(e.target.value),u||f(!0)},onFocus:()=>{u||f(!0)},onClick:()=>{u||f(!0)},onKeyDown:e=>{e.key==="Enter"&&C&&(e.preventDefault(),e.stopPropagation(),H())},onMouseDown:e=>e.stopPropagation()}):!n&&a.jsx("span",{className:["fas-select__value",!j&&"fas-select__value--placeholder"].filter(Boolean).join(" "),children:j?W:L}),n&&!d&&_.length===0&&a.jsx("span",{className:"fas-select__value fas-select__value--placeholder",children:L}),a.jsx("span",{className:["material-symbols-outlined fas-select__arrow",u&&"fas-select__arrow--open"].filter(Boolean).join(" "),"aria-hidden":!0,children:"arrow_drop_down"})]}),Ae&&a.jsx("button",{type:"button",className:"fas-textfield__clear fas-select__clear","aria-label":"清除選擇",onMouseDown:e=>e.preventDefault(),onClick:e=>{e.stopPropagation(),ke()},children:a.jsx("span",{className:"material-symbols-outlined","aria-hidden":!0,children:"cancel"})}),u&&a.jsx("div",{className:"fas-menu fas-select__menu",role:"listbox",id:`${V}-listbox`,"aria-multiselectable":n,onMouseDown:e=>e.preventDefault(),children:a.jsxs("ul",{className:"fas-menu__list",children:[C&&a.jsxs("li",{role:"option","aria-selected":!1,className:"fas-menu-item fas-select__create",onClick:H,children:[a.jsx("span",{className:"material-symbols-outlined fas-select__create-icon","aria-hidden":!0,children:"add"}),a.jsxs("span",{className:"fas-menu-item__label",children:[we,a.jsxs("span",{className:"fas-select__create-query",children:["「",w,"」"]})]})]}),A.length===0&&!C?a.jsx("li",{className:"fas-menu-item fas-menu-item--disabled fas-select__empty",children:Ie}):A.length===0?null:A.map(e=>{const l=m.includes(e.value);return a.jsxs("li",{role:"option","aria-selected":l,className:["fas-menu-item fas-select__option",l&&!n&&"fas-menu-item--selected",e.disabled&&"fas-menu-item--disabled"].filter(Boolean).join(" "),onClick:()=>G(e),children:[n&&a.jsx(Xe,{checked:l,onChange:()=>G(e),size:"s"}),a.jsx("span",{className:"fas-menu-item__label",children:e.label}),!n&&l&&a.jsx("span",{className:"material-symbols-outlined fas-select__check","aria-hidden":!0,children:"check"})]},e.value)})]})})]}),T&&a.jsx("p",{className:"fas-textfield__error",role:"alert",children:T}),!T&&P&&a.jsx("p",{className:"fas-textfield__helper",children:P}),k&&(n?m.map(e=>a.jsx("input",{type:"hidden",name:k,value:e},e)):a.jsx("input",{type:"hidden",name:k,value:b??""}))]})};t.displayName="Select";t.__docgenInfo={description:"",methods:[],displayName:"Select",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"SelectOption"}],raw:"SelectOption[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Controlled value. `string` for single, `string[]` for multiple."},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"預設 false；開啟時 focus 狀態可輸入內容過濾選項",defaultValue:{value:"false",computed:!1}},creatable:{required:!1,tsType:{name:"boolean"},description:"預設 false；開啟後若輸入內容不在 options 中，下拉最上方會出現「新增」列，可建立新值（需搭配 searchable 使用）",defaultValue:{value:"false",computed:!1}},createLabel:{required:!1,tsType:{name:"string"},description:'新增列的前綴文字，預設 "新增"',defaultValue:{value:"'新增'",computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},labelPosition:{required:!1,tsType:{name:"union",raw:"'top' | 'inline' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'inline'"},{name:"literal",value:"'left'"}]},description:"",defaultValue:{value:"'top'",computed:!1}},style:{required:!1,tsType:{name:"union",raw:"'outlined' | 'underline'",elements:[{name:"literal",value:"'outlined'"},{name:"literal",value:"'underline'"}]},description:"",defaultValue:{value:"'outlined'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'xl' | 'l' | 'm' | 's' | 'xs'",elements:[{name:"literal",value:"'xl'"},{name:"literal",value:"'l'"},{name:"literal",value:"'m'"},{name:"literal",value:"'s'"},{name:"literal",value:"'xs'"}]},description:"",defaultValue:{value:"'m'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'請選擇'",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},readOnly:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},error:{required:!1,tsType:{name:"string"},description:""},helperText:{required:!1,tsType:{name:"string"},description:""},clearable:{required:!1,tsType:{name:"boolean"},description:"單選模式：focus + 有值時顯示 clear 圖示，預設 true",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},id:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},emptyText:{required:!1,tsType:{name:"string"},description:"搜尋無結果時顯示的文字",defaultValue:{value:"'沒有符合的項目'",computed:!1}}}};const Ye={title:"Data Entry/Select",component:t,tags:["autodocs"],argTypes:{style:{control:"select",options:["outlined","underline"]},size:{control:"select",options:["xl","l","m","s","xs"]},labelPosition:{control:"select",options:["top","inline","left"]},multiple:{control:"boolean"},searchable:{control:"boolean"},disabled:{control:"boolean"},readOnly:{control:"boolean"},required:{control:"boolean"}}},o=[{value:"apple",label:"蘋果 Apple"},{value:"banana",label:"香蕉 Banana"},{value:"cherry",label:"櫻桃 Cherry"},{value:"durian",label:"榴槤 Durian"},{value:"elderberry",label:"接骨木 Elderberry"},{value:"fig",label:"無花果 Fig"},{value:"grape",label:"葡萄 Grape"},{value:"honeydew",label:"哈密瓜 Honeydew"},{value:"kiwi",label:"奇異果 Kiwi",disabled:!0},{value:"lemon",label:"檸檬 Lemon"}],R={name:"Single select",render:()=>{const[s,i]=r.useState("");return a.jsx("div",{style:{width:320},children:a.jsx(t,{label:"水果",options:o,value:s,onChange:c=>i(c),placeholder:"請選擇一種水果",helperText:`目前選擇：${s||"(無)"}`})})}},q={name:"Multi select",render:()=>{const[s,i]=r.useState(["apple","cherry"]);return a.jsx("div",{style:{width:420},children:a.jsx(t,{label:"喜歡的水果（可多選）",options:o,value:s,onChange:c=>i(c),multiple:!0,placeholder:"請選擇多種水果",helperText:`已選 ${s.length} 項`})})}},N={name:"Single + searchable",render:()=>{const[s,i]=r.useState("");return a.jsx("div",{style:{width:320},children:a.jsx(t,{label:"搜尋選擇",options:o,value:s,onChange:c=>i(c),searchable:!0,placeholder:"輸入文字搜尋"})})}},F={name:"Multi + searchable",render:()=>{const[s,i]=r.useState([]);return a.jsx("div",{style:{width:480},children:a.jsx(t,{label:"搜尋多選",options:o,value:s,onChange:c=>i(c),multiple:!0,searchable:!0,placeholder:"輸入文字搜尋，勾選加入"})})}},I={name:"Single + searchable + creatable",render:()=>{const[s,i]=r.useState("");return a.jsx("div",{style:{width:360},children:a.jsx(t,{label:"分類（可新增）",options:o,value:s,onChange:c=>i(c),searchable:!0,creatable:!0,placeholder:"輸入搜尋，或新增新分類",helperText:`目前選擇：${s||"(無)"}`})})}},M={name:"Multi + searchable + creatable",render:()=>{const[s,i]=r.useState(["apple"]);return a.jsx("div",{style:{width:480},children:a.jsx(t,{label:"標籤（可多選 + 新增）",options:o,value:s,onChange:c=>i(c),multiple:!0,searchable:!0,creatable:!0,placeholder:"輸入搜尋，或新增新標籤",helperText:`已選 ${s.length} 項`})})}},U={name:"All states",render:()=>a.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:24,width:720},children:[a.jsx(t,{label:"Empty",options:o,placeholder:"請選擇"}),a.jsx(t,{label:"Filled",options:o,defaultValue:"banana"}),a.jsx(t,{label:"Error",options:o,defaultValue:"apple",error:"欄位格式不正確"}),a.jsx(t,{label:"Disabled",options:o,defaultValue:"grape",disabled:!0}),a.jsx(t,{label:"Read-only",options:o,defaultValue:"fig",readOnly:!0}),a.jsx(t,{label:"Underline",options:o,style:"underline",defaultValue:"cherry"})]})},D={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12,width:320},children:[a.jsx(t,{size:"xl",options:o,placeholder:"XL"}),a.jsx(t,{size:"l",options:o,placeholder:"L"}),a.jsx(t,{size:"m",options:o,placeholder:"M (default)"}),a.jsx(t,{size:"s",options:o,placeholder:"S"}),a.jsx(t,{size:"xs",options:o,placeholder:"XS"})]})};var Z,ee,ae;R.parameters={...R.parameters,docs:{...(Z=R.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  name: 'Single select',
  render: () => {
    const [val, setVal] = useState<string>('');
    return <div style={{
      width: 320
    }}>
        <Select label="水果" options={FRUITS} value={val} onChange={v => setVal(v as string)} placeholder="請選擇一種水果" helperText={\`目前選擇：\${val || '(無)'}\`} />
      </div>;
  }
}`,...(ae=(ee=R.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var le,se,te;q.parameters={...q.parameters,docs:{...(le=q.parameters)==null?void 0:le.docs,source:{originalSource:`{
  name: 'Multi select',
  render: () => {
    const [val, setVal] = useState<string[]>(['apple', 'cherry']);
    return <div style={{
      width: 420
    }}>
        <Select label="喜歡的水果（可多選）" options={FRUITS} value={val} onChange={v => setVal(v as string[])} multiple placeholder="請選擇多種水果" helperText={\`已選 \${val.length} 項\`} />
      </div>;
  }
}`,...(te=(se=q.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var re,ne,oe;N.parameters={...N.parameters,docs:{...(re=N.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Single + searchable',
  render: () => {
    const [val, setVal] = useState<string>('');
    return <div style={{
      width: 320
    }}>
        <Select label="搜尋選擇" options={FRUITS} value={val} onChange={v => setVal(v as string)} searchable placeholder="輸入文字搜尋" />
      </div>;
  }
}`,...(oe=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var ie,ce,ue;F.parameters={...F.parameters,docs:{...(ie=F.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  name: 'Multi + searchable',
  render: () => {
    const [val, setVal] = useState<string[]>([]);
    return <div style={{
      width: 480
    }}>
        <Select label="搜尋多選" options={FRUITS} value={val} onChange={v => setVal(v as string[])} multiple searchable placeholder="輸入文字搜尋，勾選加入" />
      </div>;
  }
}`,...(ue=(ce=F.parameters)==null?void 0:ce.docs)==null?void 0:ue.source}}};var de,pe,fe;I.parameters={...I.parameters,docs:{...(de=I.parameters)==null?void 0:de.docs,source:{originalSource:`{
  name: 'Single + searchable + creatable',
  render: () => {
    const [val, setVal] = useState<string>('');
    return <div style={{
      width: 360
    }}>
        <Select label="分類（可新增）" options={FRUITS} value={val} onChange={v => setVal(v as string)} searchable creatable placeholder="輸入搜尋，或新增新分類" helperText={\`目前選擇：\${val || '(無)'}\`} />
      </div>;
  }
}`,...(fe=(pe=I.parameters)==null?void 0:pe.docs)==null?void 0:fe.source}}};var me,he,ve;M.parameters={...M.parameters,docs:{...(me=M.parameters)==null?void 0:me.docs,source:{originalSource:`{
  name: 'Multi + searchable + creatable',
  render: () => {
    const [val, setVal] = useState<string[]>(['apple']);
    return <div style={{
      width: 480
    }}>
        <Select label="標籤（可多選 + 新增）" options={FRUITS} value={val} onChange={v => setVal(v as string[])} multiple searchable creatable placeholder="輸入搜尋，或新增新標籤" helperText={\`已選 \${val.length} 項\`} />
      </div>;
  }
}`,...(ve=(he=M.parameters)==null?void 0:he.docs)==null?void 0:ve.source}}};var be,ge,xe;U.parameters={...U.parameters,docs:{...(be=U.parameters)==null?void 0:be.docs,source:{originalSource:`{
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
}`,...(xe=(ge=U.parameters)==null?void 0:ge.docs)==null?void 0:xe.source}}};var ye,Se,_e;D.parameters={...D.parameters,docs:{...(ye=D.parameters)==null?void 0:ye.docs,source:{originalSource:`{
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
}`,...(_e=(Se=D.parameters)==null?void 0:Se.docs)==null?void 0:_e.source}}};const Ze=["Single","Multiple","SingleSearchable","MultiSearchable","SingleCreatable","MultiCreatable","States","Sizes"];export{M as MultiCreatable,F as MultiSearchable,q as Multiple,R as Single,I as SingleCreatable,N as SingleSearchable,D as Sizes,U as States,Ze as __namedExportsOrder,Ye as default};
