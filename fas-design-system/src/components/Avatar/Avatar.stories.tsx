import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Foundations/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'select', options: ['primary', 'secondary', 'photo'] },
    size: { control: 'select', options: ['l', 'm', 's'] },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: { type: 'primary', size: 'm', initials: 'AB' },
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {(['l', 'm', 's'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
          <span style={{ width: 60, fontSize: 12, color: '#727171' }}>{size.toUpperCase()}</span>
          <Avatar type="primary" size={size} initials="AB" />
          <Avatar type="secondary" size={size} initials="CD" />
          <Avatar type="photo" size={size} src="https://i.pravatar.cc/150?img=3" alt="User" />
          <Avatar type="photo" size={size} alt="No photo" />
        </div>
      ))}
    </div>
  ),
};
