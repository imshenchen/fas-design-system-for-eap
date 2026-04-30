import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Accordion, AccordionItem } from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Core/Layout/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <Accordion>
        <AccordionItem title="Panel 1 — What is FAS Design System?">
          FAS Design System is a component library for Delta EAP applications, providing
          consistent UI components with light and dark mode support.
        </AccordionItem>
        <AccordionItem title="Panel 2 — How to use components?" defaultExpanded>
          Import components from the package and use them in your React application.
          All components support theming via CSS custom properties.
        </AccordionItem>
        <AccordionItem title="Panel 3 — Disabled example" disabled>
          This content is not accessible because the item is disabled.
        </AccordionItem>
      </Accordion>
    </div>
  ),
};

export const Multiple: Story = {
  render: () => (
    <div style={{ width: 400 }}>
      <Accordion multiple>
        <AccordionItem title="Section A">Content A</AccordionItem>
        <AccordionItem title="Section B">Content B</AccordionItem>
        <AccordionItem title="Section C">Content C</AccordionItem>
      </Accordion>
    </div>
  ),
};
