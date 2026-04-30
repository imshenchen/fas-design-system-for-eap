import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef, useState } from 'react';
import { Menu, MenuItem, MenuDivider } from './Menu';
import { Button } from '../Button/Button';

const meta: Meta<typeof Menu> = {
  title: 'Core/Navigation/Menu',
  component: Menu,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);
    return (
      <div style={{ padding: 16 }}>
        <Button
          ref={anchorRef}
          variant="outlined"
          onClick={() => setOpen((p) => !p)}
        >
          Open Menu
        </Button>
        <Menu
          open={open}
          onClose={() => setOpen(false)}
          anchorEl={anchorRef.current}
        >
          <MenuItem onClick={() => setOpen(false)}>View</MenuItem>
          <MenuItem onClick={() => setOpen(false)}>Edit</MenuItem>
          <MenuItem onClick={() => setOpen(false)}>Duplicate</MenuItem>
          <MenuDivider />
          <MenuItem destructive onClick={() => setOpen(false)}>Delete</MenuItem>
        </Menu>
      </div>
    );
  },
};

export const WithIcons: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);
    return (
      <div style={{ padding: 16 }}>
        <Button ref={anchorRef} variant="outlined" onClick={() => setOpen((p) => !p)}>
          Actions ▾
        </Button>
        <Menu open={open} onClose={() => setOpen(false)} anchorEl={anchorRef.current}>
          <MenuItem icon="✏️" onClick={() => setOpen(false)}>Edit</MenuItem>
          <MenuItem icon="📋" onClick={() => setOpen(false)}>Copy</MenuItem>
          <MenuItem icon="📤" onClick={() => setOpen(false)}>Export</MenuItem>
          <MenuDivider />
          <MenuItem icon="🗑️" destructive onClick={() => setOpen(false)}>Delete</MenuItem>
        </Menu>
      </div>
    );
  },
};
