import{j as e}from"./jsx-runtime-Cf8x2fCZ.js";import{L as t}from"./LMFeatureTitle-B--a7b7I.js";import{B as s}from"./Button-iDd4ESB6.js";import"./index-yBjzXJbu.js";import"./index-BioFo8Zg.js";import"./tokens-tiCIra3T.js";const A={title:"LM/Components/LMFeatureTitle",component:t,tags:["autodocs"],parameters:{layout:"fullscreen",docs:{description:{component:`LMFeatureTitle — LM 版的 FeatureTitle。

與 core \`FeatureTitle\` 同角色（NavBar 下方的頁面標題列），差別在字級小一階：
  - label：20px → 18px（line-height 24px、weight 500 不變）
  - 分隔 icon：24px → 20px

兩者皆在設計系統的字級階梯內（…14, 16, 18, 20, 24…）。

麵包屑規則同 core FeatureTitle：第一層必為當前 SideMenu 選中的功能（active leaf node）。`}}}},r={render:()=>e.jsx(t,{topOffset:0,items:[{label:"Rule Settings",onClick:()=>{}},{label:"Create Rule"}],actions:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"text",color:"secondary",size:"s",children:"Cancel"}),e.jsx(s,{variant:"contained",size:"s",children:"Create"})]})})},i={render:()=>e.jsx(t,{topOffset:0,items:[{label:"Node Management"}]})},l={render:()=>e.jsx(t,{topOffset:0,items:[{label:"Rule Settings",onClick:()=>{}},{label:"Rule Detail",onClick:()=>{}},{label:"Edit"}],actions:e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"text",color:"secondary",size:"s",children:"Cancel"}),e.jsx(s,{variant:"contained",size:"s",children:"Save"})]})})},n={render:()=>e.jsx(t,{topOffset:0,items:[{label:"Alert List",onClick:()=>{}},{label:"Alert Detail"}]})},o={render:()=>e.jsx(t,{topOffset:0,items:[{label:"Storage",onClick:()=>{}},{label:"Bucket List",onClick:()=>{}},{label:"Bucket Detail",onClick:()=>{}},{label:"File List",onClick:()=>{}},{label:"File Detail"}]})},a={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx("div",{style:{padding:"8px 24px",fontSize:12,color:"var(--text-medium)"},children:"core FeatureTitle (20px)"}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:8,minHeight:56,padding:"8px 24px",backgroundColor:"var(--bg-surface)",borderBottom:"1px solid var(--divider)"},children:[e.jsx("span",{style:{fontSize:20,lineHeight:"24px",fontWeight:500,color:"var(--secondary)"},children:"Rule Settings"}),e.jsx("span",{className:"material-symbols-outlined",style:{fontSize:24,color:"var(--secondary)"},children:"navigate_next"}),e.jsx("span",{style:{fontSize:20,lineHeight:"24px",fontWeight:500,color:"var(--text-high)"},children:"Create Rule"})]}),e.jsx("div",{style:{padding:"8px 24px",fontSize:12,color:"var(--text-medium)",marginTop:16},children:"LMFeatureTitle (18px)"}),e.jsx(t,{topOffset:0,items:[{label:"Rule Settings",onClick:()=>{}},{label:"Create Rule"}]})]})};var c,d,p;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <LMFeatureTitle topOffset={0} items={[{
    label: 'Rule Settings',
    onClick: () => {}
  }, {
    label: 'Create Rule'
  }]} actions={<>
          <Button variant="text" color="secondary" size="s">Cancel</Button>
          <Button variant="contained" size="s">Create</Button>
        </>} />
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var u,m,x;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <LMFeatureTitle topOffset={0} items={[{
    label: 'Node Management'
  }]} />
}`,...(x=(m=i.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};var g,f,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <LMFeatureTitle topOffset={0} items={[{
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
}`,...(v=(f=l.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,C,h;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => <LMFeatureTitle topOffset={0} items={[{
    label: 'Alert List',
    onClick: () => {}
  }, {
    label: 'Alert Detail'
  }]} />
}`,...(h=(C=n.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};var S,y,L;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <LMFeatureTitle topOffset={0} items={[{
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
}`,...(L=(y=o.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};var F,k,j,M,T;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column'
  }}>
      <div style={{
      padding: '8px 24px',
      fontSize: 12,
      color: 'var(--text-medium)'
    }}>core FeatureTitle (20px)</div>
      <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      minHeight: 56,
      padding: '8px 24px',
      backgroundColor: 'var(--bg-surface)',
      borderBottom: '1px solid var(--divider)'
    }}>
        <span style={{
        fontSize: 20,
        lineHeight: '24px',
        fontWeight: 500,
        color: 'var(--secondary)'
      }}>Rule Settings</span>
        <span className="material-symbols-outlined" style={{
        fontSize: 24,
        color: 'var(--secondary)'
      }}>navigate_next</span>
        <span style={{
        fontSize: 20,
        lineHeight: '24px',
        fontWeight: 500,
        color: 'var(--text-high)'
      }}>Create Rule</span>
      </div>
      <div style={{
      padding: '8px 24px',
      fontSize: 12,
      color: 'var(--text-medium)',
      marginTop: 16
    }}>LMFeatureTitle (18px)</div>
      <LMFeatureTitle topOffset={0} items={[{
      label: 'Rule Settings',
      onClick: () => {}
    }, {
      label: 'Create Rule'
    }]} />
    </div>
}`,...(j=(k=a.parameters)==null?void 0:k.docs)==null?void 0:j.source},description:{story:"Side-by-side 對照 core FeatureTitle（上：core 20px，下：LM 18px）。",...(T=(M=a.parameters)==null?void 0:M.docs)==null?void 0:T.description}}};const H=["Default","SingleLevel","MultiLevel","WithoutActions","MaxFiveLevels","CompareWithCore"];export{a as CompareWithCore,r as Default,o as MaxFiveLevels,l as MultiLevel,i as SingleLevel,n as WithoutActions,H as __namedExportsOrder,A as default};
