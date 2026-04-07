import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { NavigationBar } from './NavigationBar';

const meta: Meta<typeof NavigationBar> = {
  title: 'Layout/NavigationBar',
  component: NavigationBar,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<typeof NavigationBar>;

export const Default: Story = {
  args: {
    appName: 'APP Name',
    userInitial: 'K',
  },
};

export const WithLogo: Story = {
  args: {
    appName: 'DIAWorks',
    userInitial: 'A',
    logo: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect width="32" height="32" rx="4" fill="#0087dc" />
        <text x="16" y="22" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold" fontFamily="Roboto">D</text>
      </svg>
    ),
  },
};

export const WithCustomActions: Story = {
  args: {
    appName: 'APP Name',
    userInitial: 'K',
    actions: (
      <button
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: 'none',
          background: 'transparent',
          cursor: 'pointer',
          color: 'var(--secondary)',
        }}
        aria-label="Dashboard"
      >
        <span className="material-symbols-outlined" style={{ fontSize: 22 }}>dashboard</span>
      </button>
    ),
  },
};

export const DarkMode: Story = {
  args: {
    appName: 'APP Name',
    userInitial: 'K',
  },
  decorators: [
    (Story) => (
      <div data-theme="dark">
        <Story />
      </div>
    ),
  ],
};
