import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Core/Data Entry/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

/** Fully interactive: click or use the `checked` control — either toggles the state. */
export const Default: Story = {
  args: { checked: false, disabled: false, label: 'Option' },
  render: (args) => {
    const [on, setOn] = useState(!!args.checked);
    // Keep story state in sync when the `checked` control is flipped
    React.useEffect(() => { setOn(!!args.checked); }, [args.checked]);
    return <Switch {...args} checked={on} onChange={setOn} />;
  },
};

export const AllStates: Story = {
  render: () => {
    const [on, setOn] = useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Switch checked={on} onChange={setOn} label={on ? 'On' : 'Off'} />
        <Switch checked={false} label="未選取狀態" />
        <Switch checked={false} disabled label="未選取狀態 / 不可修改" />
        <Switch checked={true} label="選取狀態" />
        <Switch checked={true} disabled label="選取狀態 / 不可修改" />
      </div>
    );
  },
};
