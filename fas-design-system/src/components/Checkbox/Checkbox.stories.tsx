import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Data Entry/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked:       { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled:      { control: 'boolean' },
    size:          { control: 'select', options: ['m', 's'] },
    label:         { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

/* ─── Playground ─────────────────────────────────────────────────────────────── */
export const Default: Story = {
  args: {
    label: 'Checkbox',
    checked: false,
    size: 'm',
  },
};

/* ─── All states ─────────────────────────────────────────────────────────────── */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <Checkbox label="Unchecked" checked={false} />
      <Checkbox label="Checked" checked={true} />
      <Checkbox label="Indeterminate" indeterminate={true} />
      <Checkbox label="Disabled unchecked" disabled={true} />
      <Checkbox label="Disabled checked" checked={true} disabled={true} />
      <Checkbox label="Disabled indeterminate" indeterminate={true} disabled={true} />
    </div>
  ),
};

/* ─── Without label ──────────────────────────────────────────────────────────── */
export const NoLabel: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
      <Checkbox checked={false} />
      <Checkbox checked={true} />
      <Checkbox indeterminate={true} />
      <Checkbox disabled={true} />
    </div>
  ),
};

/* ─── Sizes ──────────────────────────────────────────────────────────────────── */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#727171' }}>Size m (18px — default)</p>
        <div style={{ display: 'flex', gap: 16 }}>
          <Checkbox size="m" label="Unchecked" />
          <Checkbox size="m" checked label="Checked" />
          <Checkbox size="m" indeterminate label="Indeterminate" />
        </div>
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#727171' }}>Size s (14px)</p>
        <div style={{ display: 'flex', gap: 16 }}>
          <Checkbox size="s" label="Unchecked" />
          <Checkbox size="s" checked label="Checked" />
          <Checkbox size="s" indeterminate label="Indeterminate" />
        </div>
      </div>
    </div>
  ),
};

/* ─── Interactive (controlled) ───────────────────────────────────────────────── */
export const Interactive: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        label={`Click me (${checked ? 'checked' : 'unchecked'})`}
        checked={checked}
        onChange={setChecked}
      />
    );
  },
};
