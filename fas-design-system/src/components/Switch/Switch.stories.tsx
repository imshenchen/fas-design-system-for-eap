import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Switch } from './Switch';

const meta: Meta<typeof Switch> = {
  title: 'Data Entry/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: { checked: false },
};

export const AllStates: Story = {
  render: () => {
    const [on, setOn] = useState(false);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <Switch checked={on} onChange={setOn} label={on ? 'On' : 'Off'} />
        <Switch checked={true} label="Always On" />
        <Switch checked={false} label="Always Off" />
        <Switch checked={true} disabled label="Disabled On" />
        <Switch checked={false} disabled label="Disabled Off" />
      </div>
    );
  },
};
