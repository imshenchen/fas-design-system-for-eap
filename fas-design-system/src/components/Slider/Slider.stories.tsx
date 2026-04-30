import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Slider } from './Slider';

const meta: Meta<typeof Slider> = {
  title: 'Core/Data Entry/Slider',
  component: Slider,
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100 } },
    disabled: { control: 'boolean' },
    showValue: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Slider>;

export const Default: Story = {
  render: () => {
    const [v, setV] = useState(40);
    return <div style={{ width: 300 }}><Slider value={v} onChange={setV} showValue /></div>;
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ width: 300 }}><Slider value={60} disabled /></div>
  ),
};

export const CustomRange: Story = {
  render: () => {
    const [v, setV] = useState(5);
    return (
      <div style={{ width: 300 }}>
        <Slider value={v} min={0} max={10} step={1} onChange={setV} showValue />
      </div>
    );
  },
};
