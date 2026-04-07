import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Data Entry/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    size:     { control: 'select', options: ['l', 'm', 's'] },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

const CloseIcon = () => <span style={{ fontSize: '18px', fontWeight: 400 }}>✕</span>;
const SettingsIcon = () => <span style={{ fontSize: '18px' }}>⚙</span>;
const FilterIcon = () => <span style={{ fontSize: '18px' }}>⚡</span>;
const SearchIcon = () => <span style={{ fontSize: '18px' }}>🔍</span>;

export const Default: Story = {
  args: {
    icon: <CloseIcon />,
    'aria-label': '關閉',
    size: 'm',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <IconButton aria-label="L size" size="l" icon={<SettingsIcon />} />
      <IconButton aria-label="M size" size="m" icon={<SettingsIcon />} />
      <IconButton aria-label="S size" size="s" icon={<SettingsIcon />} />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <IconButton aria-label="預設" icon={<FilterIcon />} />
        <p style={{ fontSize: 12, marginTop: 4, color: 'var(--text-medium)' }}>預設</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconButton aria-label="選取" icon={<FilterIcon />} selected />
        <p style={{ fontSize: 12, marginTop: 4, color: 'var(--text-medium)' }}>Selected</p>
      </div>
      <div style={{ textAlign: 'center' }}>
        <IconButton aria-label="停用" icon={<FilterIcon />} disabled />
        <p style={{ fontSize: 12, marginTop: 4, color: 'var(--text-medium)' }}>Disabled</p>
      </div>
    </div>
  ),
};

export const VariousIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <IconButton aria-label="關閉" icon={<CloseIcon />} />
      <IconButton aria-label="設定" icon={<SettingsIcon />} />
      <IconButton aria-label="篩選" icon={<FilterIcon />} />
      <IconButton aria-label="搜尋" icon={<SearchIcon />} />
    </div>
  ),
};
