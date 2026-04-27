import{j as t}from"./jsx-runtime-Cf8x2fCZ.js";import{r as k,R as b}from"./index-BioFo8Zg.js";import{S as c}from"./Switch-ahSb4iNx.js";import"./index-yBjzXJbu.js";const O={title:"Data Entry/Switch",component:c,tags:["autodocs"],argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},label:{control:"text"}}},s={args:{checked:!1,disabled:!1,label:"Option"},render:e=>{const[r,n]=k.useState(!!e.checked);return b.useEffect(()=>{n(!!e.checked)},[e.checked]),t.jsx(c,{...e,checked:r,onChange:n})}},a={render:()=>{const[e,r]=k.useState(!1);return t.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[t.jsx(c,{checked:e,onChange:r,label:e?"On":"Off"}),t.jsx(c,{checked:!1,label:"未選取狀態"}),t.jsx(c,{checked:!1,disabled:!0,label:"未選取狀態 / 不可修改"}),t.jsx(c,{checked:!0,label:"選取狀態"}),t.jsx(c,{checked:!0,disabled:!0,label:"選取狀態 / 不可修改"})]})}};var l,o,d,i,h;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    checked: false,
    disabled: false,
    label: 'Option'
  },
  render: args => {
    const [on, setOn] = useState(!!args.checked);
    // Keep story state in sync when the \`checked\` control is flipped
    React.useEffect(() => {
      setOn(!!args.checked);
    }, [args.checked]);
    return <Switch {...args} checked={on} onChange={setOn} />;
  }
}`,...(d=(o=s.parameters)==null?void 0:o.docs)==null?void 0:d.source},description:{story:"Fully interactive: click or use the `checked` control — either toggles the state.",...(h=(i=s.parameters)==null?void 0:i.docs)==null?void 0:h.description}}};var u,p,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => {
    const [on, setOn] = useState(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }}>
        <Switch checked={on} onChange={setOn} label={on ? 'On' : 'Off'} />
        <Switch checked={false} label="未選取狀態" />
        <Switch checked={false} disabled label="未選取狀態 / 不可修改" />
        <Switch checked={true} label="選取狀態" />
        <Switch checked={true} disabled label="選取狀態 / 不可修改" />
      </div>;
  }
}`,...(f=(p=a.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};const y=["Default","AllStates"];export{a as AllStates,s as Default,y as __namedExportsOrder,O as default};
