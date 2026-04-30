import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Stepper, Step } from './Stepper';
import { Button } from '../Button/Button';

const meta: Meta<typeof Stepper> = {
  title: 'Core/Navigation/Stepper',
  component: Stepper,
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: 'select', options: ['horizontal', 'vertical'] },
    activeStep: { control: { type: 'range', min: 0, max: 3 } },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

export const Horizontal: Story = {
  render: () => {
    const [active, setActive] = useState(1);
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <Stepper activeStep={active}>
          <Step label="Select template" />
          <Step label="Configure settings" />
          <Step label="Review & submit" />
          <Step label="Done" />
        </Stepper>
        <div style={{ display: 'flex', gap: 8 }}>
          <Button size="s" variant="outlined" onClick={() => setActive((p) => Math.max(0, p - 1))}>Back</Button>
          <Button size="s" variant="contained" onClick={() => setActive((p) => Math.min(4, p + 1))}>Next</Button>
        </div>
      </div>
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const [active, setActive] = useState(1);
    return (
      <div style={{ display: 'flex', gap: 24 }}>
        <Stepper activeStep={active} orientation="vertical" style={{ width: 220 }}>
          <Step label="Upload file" description="Select CSV or Excel" />
          <Step label="Map columns" description="Match data fields" />
          <Step label="Validate" optional />
          <Step label="Import" />
        </Stepper>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <Button size="s" variant="outlined" onClick={() => setActive((p) => Math.max(0, p - 1))}>Back</Button>
          <Button size="s" variant="contained" onClick={() => setActive((p) => Math.min(4, p + 1))}>Next</Button>
        </div>
      </div>
    );
  },
};

export const WithError: Story = {
  render: () => (
    <Stepper activeStep={2}>
      <Step label="Step 1" />
      <Step label="Step 2 — Error" error />
      <Step label="Step 3" />
    </Stepper>
  ),
};
