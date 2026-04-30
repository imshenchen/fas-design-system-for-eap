import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{F as t}from"./FeatureTitle-BVXT0lcy.js";import{B as l}from"./Button-iDd4ESB6.js";import"./index-yBjzXJbu.js";import"./index-BioFo8Zg.js";import"./tokens-DAmOzuQn.js";const _={title:"Core/Data Display/FeatureTitle",component:t,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`FeatureTitle — sticky page-title bar beneath the NavigationBar.

Breadcrumb rule:
  The FIRST level must always be the currently selected item in the SideMenu
  (the active leaf node). Never skip it or replace it with a parent section label.

  ✅  Rule Settings > Create Rule          (SideMenu active: "Rule Settings")
  ❌  Alert Mgmt > Rule Settings > Create  (parent section — not the selected item)`}}}},a={render:()=>e.jsx(t,{topOffset:0,items:[{label:"Rule Settings",onClick:()=>{}},{label:"Create Rule"}],actions:e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"text",color:"secondary",size:"s",children:"Cancel"}),e.jsx(l,{variant:"contained",size:"s",children:"Create"})]})})},r={render:()=>e.jsx(t,{topOffset:0,items:[{label:"Node Management"}]})},i={render:()=>e.jsx(t,{topOffset:0,items:[{label:"Rule Settings",onClick:()=>{}},{label:"Rule Detail",onClick:()=>{}},{label:"Edit"}],actions:e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"text",color:"secondary",size:"s",children:"Cancel"}),e.jsx(l,{variant:"contained",size:"s",children:"Save"})]})})},n={render:()=>e.jsx(t,{topOffset:0,items:[{label:"Alert List",onClick:()=>{}},{label:"Alert Detail"}]})},s={render:()=>e.jsx(t,{topOffset:0,items:[{label:"Storage",onClick:()=>{}},{label:"Bucket List",onClick:()=>{}},{label:"Bucket Detail",onClick:()=>{}},{label:"File List",onClick:()=>{}},{label:"File Detail"}]})};var o,c,d,u,p;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <FeatureTitle topOffset={0} items={[{
    label: 'Rule Settings',
    onClick: () => {}
  }, {
    label: 'Create Rule'
  }]} actions={<>
          <Button variant="text" color="secondary" size="s">Cancel</Button>
          <Button variant="contained" size="s">Create</Button>
        </>} />
}`,...(d=(c=a.parameters)==null?void 0:c.docs)==null?void 0:d.source},description:{story:`Create / edit page — actions placed in FeatureTitle (edit pages only).
SideMenu active item: "Rule Settings" → first breadcrumb level.`,...(p=(u=a.parameters)==null?void 0:u.docs)==null?void 0:p.description}}};var m,b,g,v,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <FeatureTitle topOffset={0} items={[{
    label: 'Node Management'
  }]} />
}`,...(g=(b=r.parameters)==null?void 0:b.docs)==null?void 0:g.source},description:{story:`List page — single level, no sub-page context.
SideMenu active item: "Node Management" → first (and only) breadcrumb level.
On list pages, action buttons belong inside the page content area, not here.`,...(f=(v=r.parameters)==null?void 0:v.docs)==null?void 0:f.description}}};var S,C,x,k,h;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <FeatureTitle topOffset={0} items={[{
    label: 'Rule Settings',
    onClick: () => {}
  }, {
    label: 'Rule Detail',
    onClick: () => {}
  }, {
    label: 'Edit'
  }]} actions={<>
          <Button variant="text" color="secondary" size="s">Cancel</Button>
          <Button variant="contained" size="s">Save</Button>
        </>} />
}`,...(x=(C=i.parameters)==null?void 0:C.docs)==null?void 0:x.source},description:{story:`Nested edit page — three levels deep.
SideMenu active item: "Rule Settings" → first breadcrumb level.`,...(h=(k=i.parameters)==null?void 0:k.docs)==null?void 0:h.description}}};var F,y,B,M,R;n.parameters={...n.parameters,docs:{...(F=n.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <FeatureTitle topOffset={0} items={[{
    label: 'Alert List',
    onClick: () => {}
  }, {
    label: 'Alert Detail'
  }]} />
}`,...(B=(y=n.parameters)==null?void 0:y.docs)==null?void 0:B.source},description:{story:`Detail / read-only page — no actions in FeatureTitle.
SideMenu active item: "Alert List" → first breadcrumb level.`,...(R=(M=n.parameters)==null?void 0:M.docs)==null?void 0:R.description}}};var L,j,D,O,T;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <FeatureTitle topOffset={0} items={[{
    label: 'Storage',
    onClick: () => {}
  }, {
    label: 'Bucket List',
    onClick: () => {}
  }, {
    label: 'Bucket Detail',
    onClick: () => {}
  }, {
    label: 'File List',
    onClick: () => {}
  }, {
    label: 'File Detail'
  }]} />
}`,...(D=(j=s.parameters)==null?void 0:j.docs)==null?void 0:D.source},description:{story:`Maximum depth: 5 levels.
SideMenu active item: "Storage" → first breadcrumb level.`,...(T=(O=s.parameters)==null?void 0:O.docs)==null?void 0:T.description}}};const I=["Default","SingleLevel","MultiLevel","WithoutActions","MaxFiveLevels"];export{a as Default,s as MaxFiveLevels,i as MultiLevel,r as SingleLevel,n as WithoutActions,I as __namedExportsOrder,_ as default};
