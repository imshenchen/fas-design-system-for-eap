import type { Meta, StoryObj } from '@storybook/react';
import { Progress } from './Progress';

const meta: Meta<typeof Progress> = {
  title: 'Core/Feedback/Progress',
  component: Progress,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['determinate', 'indeterminate'] },
    color: { control: 'select', options: ['primary', 'success', 'warning', 'error'] },
    value: { control: { type: 'range', min: 0, max: 100 } },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Indeterminate: Story = {
  args: { variant: 'indeterminate', color: 'primary' },
};

export const Determinate: Story = {
  args: { variant: 'determinate', value: 60, color: 'primary' },
};

export const AllValues: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: 300 }}>
      {[0, 25, 50, 75, 100].map((v) => (
        <div key={v}>
          <div style={{ fontSize: 12, marginBottom: 4 }}>{v}%</div>
          <Progress variant="determinate" value={v} />
        </div>
      ))}
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 300 }}>
      {(['primary', 'success', 'warning', 'error'] as const).map((color) => (
        <div key={color}>
          <div style={{ fontSize: 12, marginBottom: 4, textTransform: 'capitalize' }}>{color}</div>
          <Progress variant="determinate" value={65} color={color} />
        </div>
      ))}
    </div>
  ),
};
