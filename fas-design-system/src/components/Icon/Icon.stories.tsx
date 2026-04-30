import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Core/Foundations/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    size: { control: 'number' },
    filled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'check_circle',
    size: 24,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <Icon name="star" size={16} />
      <Icon name="star" size={20} />
      <Icon name="star" size={24} />
      <Icon name="star" size={32} />
      <Icon name="star" size={48} />
    </div>
  ),
};

export const FilledVsOutlined: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <Icon name="star" size={32} filled={false} />
        <p style={{ fontSize: 11, marginTop: 4 }}>Outlined</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Icon name="star" size={32} filled />
        <p style={{ fontSize: 11, marginTop: 4 }}>Filled</p>
      </div>
    </div>
  ),
};

const COMMON_ICONS = [
  'close', 'check', 'check_circle', 'cancel', 'info', 'warning',
  'error', 'add', 'remove', 'expand_more', 'expand_less',
  'chevron_right', 'chevron_left', 'first_page', 'last_page',
  'arrow_back', 'arrow_forward', 'unfold_more', 'more_horiz',
  'search', 'settings', 'delete', 'edit', 'visibility', 'download',
  'upload', 'refresh', 'priority_high', 'done',
];

export const CommonIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      {COMMON_ICONS.map((name) => (
        <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, width: 80 }}>
          <Icon name={name} size={24} />
          <span style={{ fontSize: 10, color: '#727171', textAlign: 'center', wordBreak: 'break-all' }}>{name}</span>
        </div>
      ))}
    </div>
  ),
};
