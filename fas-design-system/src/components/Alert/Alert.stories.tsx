import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Alert } from './Alert';

const meta: Meta<typeof Alert> = {
  title: 'Core/Feedback/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    severity: { control: 'select', options: ['info', 'success', 'warning', 'error'] },
    variant: { control: 'select', options: ['standard', 'filled', 'outlined'] },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: { severity: 'info', children: 'This is an informational message.' },
};

export const AllSeverities: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Alert severity="info">This is an info message.</Alert>
      <Alert severity="success">Operation completed successfully.</Alert>
      <Alert severity="warning">Please review before continuing.</Alert>
      <Alert severity="error">An error occurred. Please try again.</Alert>
    </div>
  ),
};

export const Filled: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Alert severity="info" variant="filled">Info</Alert>
      <Alert severity="success" variant="filled">Success</Alert>
      <Alert severity="warning" variant="filled">Warning</Alert>
      <Alert severity="error" variant="filled">Error</Alert>
    </div>
  ),
};

export const Outlined: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <Alert severity="info" variant="outlined">Info</Alert>
      <Alert severity="success" variant="outlined">Success</Alert>
      <Alert severity="warning" variant="outlined">Warning</Alert>
      <Alert severity="error" variant="outlined">Error</Alert>
    </div>
  ),
};

export const WithTitle: Story = {
  render: () => (
    <Alert severity="warning" title="Attention Required">
      Your session will expire in 5 minutes. Please save your work.
    </Alert>
  ),
};

export const Closeable: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);
    return visible ? (
      <Alert severity="success" onClose={() => setVisible(false)}>
        File uploaded successfully.
      </Alert>
    ) : (
      <p style={{ fontSize: 12, color: '#727171' }}>Alert closed.</p>
    );
  },
};
