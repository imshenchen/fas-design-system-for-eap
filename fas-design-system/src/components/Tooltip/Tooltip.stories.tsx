import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Feedback/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    placement: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <div style={{ padding: 60, display: 'inline-block' }}>
      <Tooltip title="This is a tooltip">
        <Button variant="outlined">Hover me</Button>
      </Tooltip>
    </div>
  ),
};

export const AllPlacements: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, padding: 80 }}>
      {(['top', 'bottom', 'left', 'right'] as const).map((placement) => (
        <div key={placement} style={{ display: 'flex', justifyContent: 'center' }}>
          <Tooltip title={`Placement: ${placement}`} placement={placement}>
            <Button variant="outlined" size="s">{placement}</Button>
          </Tooltip>
        </div>
      ))}
    </div>
  ),
};

export const LongText: Story = {
  render: () => (
    <div style={{ padding: 80, display: 'inline-block' }}>
      <Tooltip title="This is a much longer tooltip text that will wrap onto multiple lines when it exceeds the max width.">
        <Button variant="outlined">Long tooltip</Button>
      </Tooltip>
    </div>
  ),
};
