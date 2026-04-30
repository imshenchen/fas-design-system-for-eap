import type { Meta, StoryObj } from '@storybook/react';
import { IconButton } from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Core/Data Entry/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  argTypes: {
    size:     { control: 'select', options: ['l', 'm', 's'] },
    selected: { control: 'boolean' },
    disabled: { control: 'boolean' },
    tooltip:  { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof IconButton>;

const Icon = ({ name }: { name: string }) => (
  <span className="material-symbols-outlined" style={{ fontSize: 20 }}>{name}</span>
);

/** Default — tooltip 預設開啟，hover 可看見 */
export const Default: Story = {
  args: {
    icon: <Icon name="settings" />,
    'aria-label': 'Settings',
    size: 'l',
  },
};

/** tooltip={false} — 關閉 tooltip */
export const NoTooltip: Story = {
  args: {
    icon: <Icon name="settings" />,
    'aria-label': 'Settings',
    size: 'l',
    tooltip: false,
  },
};

/** 三種尺寸 — 全部預設顯示 tooltip */
export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 24, alignItems: 'center', padding: 40 }}>
      <IconButton aria-label="Large" size="l" icon={<Icon name="delete" />} />
      <IconButton aria-label="Medium" size="m" icon={<Icon name="delete" />} />
      <IconButton aria-label="Small"  size="s" icon={<Icon name="delete" />} />
    </div>
  ),
};

/** 各狀態 — Default / Hover（滑鼠移入可看 tooltip）/ Disabled / Selected / Selected hover */
export const States: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 32, alignItems: 'flex-end', padding: 48 }}>
      {[
        { label: 'Default',        props: {} },
        { label: 'Disabled',       props: { disabled: true } },
        { label: 'Selected',       props: { selected: true } },
        { label: 'Tooltip off',    props: { tooltip: false as const } },
      ].map(({ label, props }) => (
        <div key={label} style={{ textAlign: 'center' }}>
          <IconButton
            aria-label={label}
            icon={<Icon name="delete" />}
            size="l"
            {...props}
          />
          <p style={{ fontSize: 12, marginTop: 8, color: 'var(--text-medium)' }}>{label}</p>
        </div>
      ))}
    </div>
  ),
};
