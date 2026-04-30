import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, Tab } from './Tab';

const meta: Meta<typeof Tabs> = {
  title: 'Core/Navigation/Tab',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['line', 'filled'] },
    size: { control: 'select', options: ['m', 's'] },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

// ---------------------------------------------------------------------------
// Controlled wrapper for interactive stories
// ---------------------------------------------------------------------------

function ControlledTabs(props: React.ComponentProps<typeof Tabs>) {
  const [active, setActive] = useState(props.value ?? 'tab1');
  return (
    <Tabs {...props} value={active} onChange={setActive}>
      {props.children}
    </Tabs>
  );
}

// ---------------------------------------------------------------------------
// Stories
// ---------------------------------------------------------------------------

export const LineVariant: Story = {
  render: () => (
    <ControlledTabs value="tab1" onChange={() => {}} variant="line" size="m">
      <Tab value="tab1" label="Overview" />
      <Tab value="tab2" label="Details" />
      <Tab value="tab3" label="History" />
      <Tab value="tab4" label="Settings" disabled />
    </ControlledTabs>
  ),
};

export const FilledVariant: Story = {
  render: () => (
    <ControlledTabs value="tab1" onChange={() => {}} variant="filled" size="m">
      <Tab value="tab1" label="Overview" />
      <Tab value="tab2" label="Details" />
      <Tab value="tab3" label="History" />
      <Tab value="tab4" label="Settings" disabled />
    </ControlledTabs>
  ),
};

export const SmallSize: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#727171' }}>Line — size s</p>
        <ControlledTabs value="tab1" onChange={() => {}} variant="line" size="s">
          <Tab value="tab1" label="Overview" />
          <Tab value="tab2" label="Details" />
          <Tab value="tab3" label="History" />
        </ControlledTabs>
      </div>
      <div>
        <p style={{ marginBottom: 8, fontSize: 12, color: '#727171' }}>Filled — size s</p>
        <ControlledTabs value="tab1" onChange={() => {}} variant="filled" size="s">
          <Tab value="tab1" label="Overview" />
          <Tab value="tab2" label="Details" />
          <Tab value="tab3" label="History" />
        </ControlledTabs>
      </div>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <ControlledTabs value="tab1" onChange={() => {}} variant="line" size="m">
      <Tab value="tab1" label="Dashboard" icon="📊" />
      <Tab value="tab2" label="Reports" icon="📄" />
      <Tab value="tab3" label="Users" icon="👥" />
      <Tab value="tab4" label="Locked" icon="🔒" disabled />
    </ControlledTabs>
  ),
};
