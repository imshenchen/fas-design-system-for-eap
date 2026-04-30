import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Core/Data Entry/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['contained', 'outlined', 'text'] },
    color:   { control: 'select', options: ['primary', 'secondary', 'error'] },
    size:    { control: 'select', options: ['xl', 'l', 'm', 's', 'xs'] },
    loading: { control: 'boolean' },
    disabled:{ control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: 'Button',
    variant: 'outlined',
    color: 'primary',
    size: 'm',
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      {/* Contained */}
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#727171' }}>Contained</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button variant="contained" color="primary">Primary</Button>
          <Button variant="contained" color="primary" loading>Loading</Button>
          <Button variant="contained" color="primary" disabled>Disabled</Button>
          <Button variant="contained" color="error">Error</Button>
        </div>
      </div>

      {/* Outlined */}
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#727171' }}>Outlined</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button variant="outlined" color="primary">Primary</Button>
          <Button variant="outlined" color="secondary">Secondary</Button>
          <Button variant="outlined" color="error">Error</Button>
          <Button variant="outlined" color="primary" disabled>Disabled</Button>
        </div>
      </div>

      {/* Text */}
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#727171' }}>Text</p>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button variant="text" color="primary">Primary</Button>
          <Button variant="text" color="secondary">Secondary</Button>
          <Button variant="text" color="error">Error</Button>
          <Button variant="text" color="primary" disabled>Disabled</Button>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#727171' }}>Sizes</p>
        <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <Button variant="contained" size="xl">XL – 48px</Button>
          <Button variant="contained" size="l">L – 44px</Button>
          <Button variant="contained" size="m">M – 40px</Button>
          <Button variant="contained" size="s">S – 36px</Button>
          <Button variant="contained" size="xs">XS – 32px</Button>
        </div>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      <Button variant="contained" iconLeft="＋">新增</Button>
      <Button variant="outlined" iconRight="→">繼續</Button>
      <Button variant="text" iconLeft="⬆">匯出</Button>
    </div>
  ),
};

export const Loading: Story = {
  args: {
    children: '儲存中',
    variant: 'contained',
    loading: true,
  },
};
