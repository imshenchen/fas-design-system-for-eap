import type { Meta, StoryObj } from '@storybook/react';
import { Spin } from './Spin';

const meta: Meta<typeof Spin> = {
  title: 'Feedback/Spin',
  component: Spin,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['s', 'm', 'l'] },
    color: { control: 'select', options: ['primary', 'secondary', 'white'] },
  },
};

export default meta;
type Story = StoryObj<typeof Spin>;

export const Default: Story = {
  args: { size: 'm', color: 'primary' },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Spin size="s" /><div style={{ fontSize: 12, marginTop: 4 }}>S</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spin size="m" /><div style={{ fontSize: 12, marginTop: 4 }}>M</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spin size="l" /><div style={{ fontSize: 12, marginTop: 4 }}>L</div>
      </div>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Spin color="primary" /><div style={{ fontSize: 12, marginTop: 4 }}>Primary</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Spin color="secondary" /><div style={{ fontSize: 12, marginTop: 4 }}>Secondary</div>
      </div>
      <div style={{ textAlign: 'center', background: '#333', padding: 8, borderRadius: 4 }}>
        <Spin color="white" /><div style={{ fontSize: 12, marginTop: 4, color: '#fff' }}>White</div>
      </div>
    </div>
  ),
};
