import{j as a}from"./jsx-runtime-Cf8x2fCZ.js";import"./index-yBjzXJbu.js";const N=({items:o,separator:v=a.jsx("span",{className:"material-symbols-outlined","aria-hidden":!0,style:{fontSize:16},children:"chevron_right"}),className:j})=>a.jsx("nav",{"aria-label":"Breadcrumb",className:["fas-breadcrumbs",j].filter(Boolean).join(" "),children:a.jsx("ol",{className:"fas-breadcrumbs__list",children:o.map((e,t)=>{const c=t===o.length-1,x=!c&&(e.href||e.onClick);return a.jsxs("li",{className:"fas-breadcrumbs__item",children:[x?e.href?a.jsx("a",{href:e.href,className:"fas-breadcrumbs__link",children:e.label}):a.jsx("button",{type:"button",onClick:e.onClick,className:"fas-breadcrumbs__link fas-breadcrumbs__link--btn",children:e.label}):a.jsx("span",{className:"fas-breadcrumbs__current","aria-current":c?"page":void 0,children:e.label}),!c&&a.jsx("span",{className:"fas-breadcrumbs__sep","aria-hidden":!0,children:v})]},t)})})});N.__docgenInfo={description:"",methods:[],displayName:"Breadcrumbs",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:""},separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"分隔符號，預設 chevron_right",defaultValue:{value:'<span className="material-symbols-outlined" aria-hidden style={{ fontSize: 16 }}>chevron_right</span>',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const L={title:"Navigation/Breadcrumbs",component:N,tags:["autodocs"]},s={args:{items:[{label:"首頁",onClick:()=>{}},{label:"節點管理",onClick:()=>{}},{label:"新增節點"}]}},r={args:{items:[{label:"節點管理",onClick:()=>{}},{label:"詳細資訊"}]}},n={args:{items:[{label:"首頁",onClick:()=>{}},{label:"設定",onClick:()=>{}},{label:"系統管理",onClick:()=>{}},{label:"使用者管理",onClick:()=>{}},{label:"編輯使用者"}]}},l={args:{items:[{label:"首頁",href:"/"},{label:"文件",href:"/docs"},{label:"元件",href:"/docs/components"},{label:"Breadcrumbs"}]}};var i,m,d;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    items: [{
      label: '首頁',
      onClick: () => {}
    }, {
      label: '節點管理',
      onClick: () => {}
    }, {
      label: '新增節點'
    }]
  }
}`,...(d=(m=s.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var b,u,p;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    items: [{
      label: '節點管理',
      onClick: () => {}
    }, {
      label: '詳細資訊'
    }]
  }
}`,...(p=(u=r.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var h,f,k;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    items: [{
      label: '首頁',
      onClick: () => {}
    }, {
      label: '設定',
      onClick: () => {}
    }, {
      label: '系統管理',
      onClick: () => {}
    }, {
      label: '使用者管理',
      onClick: () => {}
    }, {
      label: '編輯使用者'
    }]
  }
}`,...(k=(f=n.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var g,_,C;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    items: [{
      label: '首頁',
      href: '/'
    }, {
      label: '文件',
      href: '/docs'
    }, {
      label: '元件',
      href: '/docs/components'
    }, {
      label: 'Breadcrumbs'
    }]
  }
}`,...(C=(_=l.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};const S=["Default","TwoLevels","FiveLevels","WithLinks"];export{s as Default,n as FiveLevels,r as TwoLevels,l as WithLinks,S as __namedExportsOrder,L as default};
