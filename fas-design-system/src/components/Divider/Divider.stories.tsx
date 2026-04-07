import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta: Meta<typeof Divider> = {
  title: 'Foundations/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
  },
};

export default meta;
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
  },
  decorators: [
    (Story) => (
      <div style={{ padding: 24 }}>
        <Story />
      </div>
    ),
  ],
};

export const Horizontal: Story = {
  render: () => (
    <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
      <p style={{ margin: 0, color: 'var(--text-body)' }}>Section above</p>
      <Divider orientation="horizontal" />
      <p style={{ margin: 0, color: 'var(--text-body)' }}>Section below</p>
    </div>
  ),
};

export const Vertical: Story = {
  render: () => (
    <div style={{ padding: 24, display: 'flex', alignItems: 'center', height: 48, gap: 16 }}>
      <span style={{ color: 'var(--text-body)' }}>Left</span>
      <Divider orientation="vertical" style={{ height: 24 }} />
      <span style={{ color: 'var(--text-body)' }}>Right</span>
    </div>
  ),
};

export const BothOrientations: Story = {
  render: () => (
    <div style={{ padding: 24 }}>
      <p style={{ marginBottom: 8, fontSize: 12, color: 'var(--text-medium)' }}>Horizontal</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
        <p style={{ margin: 0, color: 'var(--text-body)' }}>Item one</p>
        <Divider orientation="horizontal" />
        <p style={{ margin: 0, color: 'var(--text-body)' }}>Item two</p>
        <Divider orientation="horizontal" />
        <p style={{ margin: 0, color: 'var(--text-body)' }}>Item three</p>
      </div>

      <p style={{ marginBottom: 8, fontSize: 12, color: 'var(--text-medium)' }}>Vertical</p>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, height: 32 }}>
        <span style={{ color: 'var(--text-body)' }}>Home</span>
        <Divider orientation="vertical" style={{ height: 20 }} />
        <span style={{ color: 'var(--text-body)' }}>About</span>
        <Divider orientation="vertical" style={{ height: 20 }} />
        <span style={{ color: 'var(--text-body)' }}>Contact</span>
      </div>
    </div>
  ),
};
