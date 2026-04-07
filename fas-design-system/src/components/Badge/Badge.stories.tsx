import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta: Meta<typeof Badge> = {
  title: 'Foundations/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['standard', 'dot'] },
    color:   { control: 'select', options: ['error', 'processing', 'success', 'warning'] },
    content: { control: 'text' },
    max:     { control: 'number' },
    showZero:{ control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

const BellIcon = () => (
  <span style={{ fontSize: 24, lineHeight: 1 }}>🔔</span>
);

export const Default: Story = {
  args: {
    content: 4,
    color: 'error',
    variant: 'standard',
  },
  render: (args) => (
    <Badge {...args}>
      <BellIcon />
    </Badge>
  ),
};

export const StandardVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32, alignItems: 'center', padding: 24 }}>
      <Badge content={4} color="error"><BellIcon /></Badge>
      <Badge content={12} color="processing"><BellIcon /></Badge>
      <Badge content={99} color="success"><BellIcon /></Badge>
      <Badge content={100} color="warning"><BellIcon /></Badge>
      <Badge content={0} showZero color="error"><BellIcon /></Badge>
    </div>
  ),
};

export const DotVariant: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32, alignItems: 'center', padding: 24 }}>
      <Badge variant="dot" color="error"><BellIcon /></Badge>
      <Badge variant="dot" color="processing"><BellIcon /></Badge>
      <Badge variant="dot" color="success"><BellIcon /></Badge>
      <Badge variant="dot" color="warning"><BellIcon /></Badge>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div style={{ padding: 24 }}>
      <p style={{ marginBottom: 16, fontSize: 12, color: 'var(--text-medium)' }}>Standard — all colors</p>
      <div style={{ display: 'flex', gap: 32, marginBottom: 32 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Badge content={5} color="error"><BellIcon /></Badge>
          <span style={{ fontSize: 12, color: 'var(--text-medium)' }}>error</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Badge content={5} color="processing"><BellIcon /></Badge>
          <span style={{ fontSize: 12, color: 'var(--text-medium)' }}>processing</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Badge content={5} color="success"><BellIcon /></Badge>
          <span style={{ fontSize: 12, color: 'var(--text-medium)' }}>success</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Badge content={5} color="warning"><BellIcon /></Badge>
          <span style={{ fontSize: 12, color: 'var(--text-medium)' }}>warning</span>
        </div>
      </div>

      <p style={{ marginBottom: 16, fontSize: 12, color: 'var(--text-medium)' }}>Dot — all colors</p>
      <div style={{ display: 'flex', gap: 32 }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Badge variant="dot" color="error"><BellIcon /></Badge>
          <span style={{ fontSize: 12, color: 'var(--text-medium)' }}>error</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Badge variant="dot" color="processing"><BellIcon /></Badge>
          <span style={{ fontSize: 12, color: 'var(--text-medium)' }}>processing</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Badge variant="dot" color="success"><BellIcon /></Badge>
          <span style={{ fontSize: 12, color: 'var(--text-medium)' }}>success</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <Badge variant="dot" color="warning"><BellIcon /></Badge>
          <span style={{ fontSize: 12, color: 'var(--text-medium)' }}>warning</span>
        </div>
      </div>
    </div>
  ),
};

export const MaxValue: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32, alignItems: 'center', padding: 24 }}>
      <Badge content={99} max={99}><BellIcon /></Badge>
      <Badge content={100} max={99}><BellIcon /></Badge>
      <Badge content={999} max={99}><BellIcon /></Badge>
      <Badge content={5} max={3}><BellIcon /></Badge>
    </div>
  ),
};
