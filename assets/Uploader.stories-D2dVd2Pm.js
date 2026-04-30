import{j as r}from"./jsx-runtime-Cf8x2fCZ.js";import{R as x}from"./index-BioFo8Zg.js";import"./index-yBjzXJbu.js";const O=({accept:s,maxSize:l,multiple:k=!1,disabled:t=!1,progress:n,error:f,onSelect:S,onDragEnter:g,onDragLeave:o,className:B,children:P})=>{const[h,v]=x.useState(!1),y=x.useRef(null),_=e=>e?Array.from(e).filter(a=>!(l&&a.size>l)):[],$=e=>{if(e.preventDefault(),v(!1),o==null||o(),t)return;const a=_(e.dataTransfer.files);a.length&&S(a)},G=e=>{e.preventDefault(),h||(v(!0),g==null||g())},H=()=>{v(!1),o==null||o()},J=e=>{const a=_(e.target.files);a.length&&S(a),e.target.value=""},K=t?"disabled":f?"error":n!==void 0?"uploading":h?"dragging":"default";return r.jsxs("div",{className:["fas-uploader",`fas-uploader--${K}`,B].filter(Boolean).join(" "),onDrop:$,onDragOver:G,onDragLeave:H,onClick:t?void 0:()=>{var e;return(e=y.current)==null?void 0:e.click()},role:"button",tabIndex:t?-1:0,"aria-disabled":t,children:[r.jsx("input",{ref:y,type:"file",accept:s,multiple:k,disabled:t,onChange:J,className:"fas-uploader__input","aria-hidden":!0}),n!==void 0?r.jsxs("div",{className:"fas-uploader__progress",role:"progressbar","aria-valuenow":n,"aria-valuemin":0,"aria-valuemax":100,children:[r.jsx("div",{className:"fas-uploader__progress-bar",style:{width:`${n}%`}}),r.jsxs("span",{children:[n,"%"]})]}):P??r.jsxs("div",{className:"fas-uploader__placeholder",children:[r.jsx("span",{className:"fas-uploader__icon","aria-hidden":!0}),r.jsx("p",{className:"fas-uploader__title",children:"拖曳檔案至此，或點擊選擇檔案"}),s&&r.jsxs("p",{className:"fas-uploader__meta",children:["接受格式：",s]}),l&&r.jsxs("p",{className:"fas-uploader__meta",children:["最大 ",(l/1024/1024).toFixed(0),"MB"]})]}),f&&r.jsx("p",{className:"fas-uploader__error",role:"alert",children:f})]})};O.__docgenInfo={description:"",methods:[],displayName:"Uploader",props:{accept:{required:!1,tsType:{name:"string"},description:"接受的檔案類型（MIME 或副檔名），如 '.tsv' 或 'image/*'"},maxSize:{required:!1,tsType:{name:"number"},description:"最大檔案大小（bytes）"},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},progress:{required:!1,tsType:{name:"number"},description:"上傳進度 0–100，有值時顯示 progress bar"},error:{required:!1,tsType:{name:"string"},description:"錯誤訊息"},onSelect:{required:!0,tsType:{name:"signature",type:"function",raw:"(files: File[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"files"}],return:{name:"void"}}},description:""},onDragEnter:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"拖曳進入時觸發"},onDragLeave:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"拖曳離開時觸發"},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Z={title:"Core/Data Entry/Uploader",component:O,tags:["autodocs"],argTypes:{disabled:{control:"boolean"},multiple:{control:"boolean"},progress:{control:{type:"range",min:0,max:100}}}},i={args:{onSelect:s=>console.log("Selected:",s)}},c={args:{accept:".tsv,.csv",onSelect:s=>console.log("Selected:",s)}},d={args:{accept:".tsv",maxSize:5*1024*1024,onSelect:s=>console.log("Selected:",s)}},p={args:{progress:65,onSelect:()=>{}}},u={args:{error:"檔案格式不支援，請上傳 .tsv 或 .csv 檔案",onSelect:()=>{}}},m={args:{disabled:!0,onSelect:()=>{}}};var b,T,j;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    onSelect: files => console.log('Selected:', files)
  }
}`,...(j=(T=i.parameters)==null?void 0:T.docs)==null?void 0:j.source}}};var N,q,R;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    accept: '.tsv,.csv',
    onSelect: files => console.log('Selected:', files)
  }
}`,...(R=(q=c.parameters)==null?void 0:q.docs)==null?void 0:R.source}}};var w,M,U;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    accept: '.tsv',
    maxSize: 5 * 1024 * 1024,
    onSelect: files => console.log('Selected:', files)
  }
}`,...(U=(M=d.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var A,C,F;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    progress: 65,
    onSelect: () => {}
  }
}`,...(F=(C=p.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var V,W,z;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    error: '檔案格式不支援，請上傳 .tsv 或 .csv 檔案',
    onSelect: () => {}
  }
}`,...(z=(W=u.parameters)==null?void 0:W.docs)==null?void 0:z.source}}};var D,E,I;m.parameters={...m.parameters,docs:{...(D=m.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    disabled: true,
    onSelect: () => {}
  }
}`,...(I=(E=m.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};const L=["Default","AcceptTSV","WithMaxSize","UploadingProgress","WithError","Disabled"];export{c as AcceptTSV,i as Default,m as Disabled,p as UploadingProgress,u as WithError,d as WithMaxSize,L as __namedExportsOrder,Z as default};
