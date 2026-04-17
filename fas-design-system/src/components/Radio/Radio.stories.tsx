import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Radio, RadioGroup } from './Radio';

const meta: Meta<typeof Radio> = {
  title: 'Data Entry/Radio',
  component: Radio,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: { checked: false, label: 'Option A' },
  render: (args) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(args.checked ?? false);
    return <Radio {...args} checked={checked} onChange={setChecked} />;
  },
};

export const Checked: Story = {
  args: { checked: true, label: 'Selected option' },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Radio checked={false} disabled label="Disabled unchecked" />
      <Radio checked={true} disabled label="Disabled checked" />
    </div>
  ),
};

export const Group: Story = {
  render: () => {
    const [val, setVal] = useState('a');
    return (
      <RadioGroup
        name="demo"
        value={val}
        onChange={setVal}
        options={[
          { value: 'a', label: 'Option A' },
          { value: 'b', label: 'Option B' },
          { value: 'c', label: 'Option C (disabled)', disabled: true },
        ]}
      />
    );
  },
};

export const HorizontalGroup: Story = {
  render: () => {
    const [val, setVal] = useState('x');
    return (
      <RadioGroup
        name="horizontal"
        value={val}
        onChange={setVal}
        direction="row"
        options={[
          { value: 'x', label: 'X' },
          { value: 'y', label: 'Y' },
          { value: 'z', label: 'Z' },
        ]}
      />
    );
  },
};
