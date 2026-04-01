import type { Meta, StoryObj } from '@storybook/react';
import { StatusChip, SelectableChip, RemovableChip } from './Chip';
import type { ChipStatus } from './Chip';

const ALL_STATUSES: ChipStatus[] = [
  'processing', 'success', 'warning', 'emergency', 'error', 'milestone', 'idle',
  'mariner', 'moss', 'bronze', 'salmon', 'wine', 'orchid', 'slate',
  'indigo', 'turquoise', 'khaki', 'cinnamon', 'pink', 'violet', 'aqua',
];

const meta: Meta<typeof StatusChip> = {
  title: 'Components/Chip',
  component: StatusChip,
  tags: ['autodocs'],
  argTypes: {
    status:  { control: 'select', options: ALL_STATUSES },
    shape:   { control: 'select', options: ['round', 'rectangle'] },
    variant: { control: 'select', options: ['filled', 'outlined'] },
    size:    { control: 'select', options: ['l', 's'] },
  },
};

export default meta;
type Story = StoryObj<typeof StatusChip>;

export const Default: Story = {
  args: {
    status: 'processing',
    label: 'Processing',
    shape: 'round',
    variant: 'filled',
    size: 'l',
  },
};

export const AllStatusFilled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {ALL_STATUSES.map((s) => (
        <StatusChip key={s} status={s} label={s} shape="round" variant="filled" />
      ))}
    </div>
  ),
};

export const AllStatusOutlined: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {ALL_STATUSES.map((s) => (
        <StatusChip key={s} status={s} label={s} shape="round" variant="outlined" />
      ))}
    </div>
  ),
};

export const RectangleShape: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {ALL_STATUSES.slice(0, 7).map((s) => (
        <StatusChip key={s} status={s} label={s} shape="rectangle" variant="filled" />
      ))}
    </div>
  ),
};

export const SmallSize: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {ALL_STATUSES.slice(0, 7).map((s) => (
        <StatusChip key={s} status={s} label={s} size="s" />
      ))}
    </div>
  ),
};

export const Selectable: Story = {
  render: () => {
    const options = ['全部', 'React', 'Vue', 'Angular', 'Svelte'];
    return (
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        {options.map((opt, i) => (
          <SelectableChip key={opt} label={opt} selected={i === 0} />
        ))}
        <SelectableChip label="停用" disabled />
      </div>
    );
  },
};

export const Removable: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 8 }}>
      <RemovableChip label="React" />
      <RemovableChip label="TypeScript" />
      <RemovableChip label="Vite" />
    </div>
  ),
};
