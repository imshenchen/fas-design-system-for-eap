import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Drawer } from './Drawer';
import { Button } from '../Button/Button';
import { List, ListItem, ListItemIcon, ListItemText } from '../List/List';

const meta: Meta<typeof Drawer> = {
  title: 'Layout/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['default', 'float'] },
    size: { control: 'select', options: ['s', 'm', 'l'] },
    anchor: { control: 'select', options: ['left', 'right', 'top', 'bottom'] },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

/* ─────────────────────────────────────────────────────────────────────────
 * Default variant — overlay with backdrop/mask
 * ───────────────────────────────────────────────────────────────────────── */

export const DefaultLeft: Story = {
  name: 'Default / Left',
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="outlined" onClick={() => setOpen(true)}>Open Left Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Navigation" anchor="left" size="s">
          <List>
            <ListItem><ListItemIcon>📊</ListItemIcon><ListItemText primary="Dashboard" /></ListItem>
            <ListItem><ListItemIcon>📋</ListItemIcon><ListItemText primary="Reports" /></ListItem>
            <ListItem><ListItemIcon>⚙️</ListItemIcon><ListItemText primary="Settings" /></ListItem>
          </List>
        </Drawer>
      </>
    );
  },
};

export const DefaultRight: Story = {
  name: 'Default / Right',
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="outlined" onClick={() => setOpen(true)}>Open Right Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Details" anchor="right" size="m">
          <p style={{ margin: 0, fontSize: 14, color: 'var(--text-medium)' }}>
            Default drawer — overlays the page with a backdrop mask.
          </p>
        </Drawer>
      </>
    );
  },
};

export const DefaultSizes: Story = {
  name: 'Default / All Sizes',
  render: () => {
    const [size, setSize] = useState<'s' | 'm' | 'l' | null>(null);
    return (
      <div style={{ display: 'flex', gap: 8 }}>
        <Button variant="outlined" onClick={() => setSize('s')}>Open S (25vw)</Button>
        <Button variant="outlined" onClick={() => setSize('m')}>Open M (35vw)</Button>
        <Button variant="outlined" onClick={() => setSize('l')}>Open L (50vw)</Button>
        {size && (
          <Drawer open onClose={() => setSize(null)} title={`Size: ${size.toUpperCase()}`} anchor="right" size={size}>
            <p style={{ margin: 0, fontSize: 14 }}>Width = {size === 's' ? '25vw' : size === 'm' ? '35vw' : '50vw'}</p>
          </Drawer>
        )}
      </div>
    );
  },
};

/* ─────────────────────────────────────────────────────────────────────────
 * Float variant — inline, no mask, pushes sibling content
 * ───────────────────────────────────────────────────────────────────────── */

const FloatFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{
    display: 'flex',
    height: 520,
    border: '1px solid var(--divider)',
    background: 'var(--bg-surface-dim-var)',
    overflow: 'hidden',
  }}>
    {children}
  </div>
);

export const FloatRight: Story = {
  name: 'Float / Right',
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <FloatFrame>
        <div style={{ flex: 1, padding: 24, overflow: 'auto' }}>
          <Button variant="outlined" onClick={() => setOpen(v => !v)}>
            {open ? 'Close' : 'Open'} Float Drawer
          </Button>
          <p style={{ marginTop: 16, color: 'var(--text-medium)' }}>
            Main content area — shrinks when the float drawer opens. No mask overlay.
          </p>
        </div>
        <Drawer
          variant="float"
          open={open}
          onClose={() => setOpen(false)}
          title="{app name}"
          anchor="right"
          size="m"
        >
          <p style={{ margin: 0, fontSize: 14, color: 'var(--text-medium)' }}>
            Float drawer content — coexists with main content.
          </p>
        </Drawer>
      </FloatFrame>
    );
  },
};

export const FloatSizes: Story = {
  name: 'Float / All Sizes',
  render: () => {
    const [size, setSize] = useState<'s' | 'm' | 'l'>('m');
    return (
      <div>
        <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
          <Button variant={size === 's' ? 'contained' : 'outlined'} size="s" onClick={() => setSize('s')}>S · 25vw</Button>
          <Button variant={size === 'm' ? 'contained' : 'outlined'} size="s" onClick={() => setSize('m')}>M · 35vw</Button>
          <Button variant={size === 'l' ? 'contained' : 'outlined'} size="s" onClick={() => setSize('l')}>L · 50vw</Button>
        </div>
        <FloatFrame>
          <div style={{ flex: 1, padding: 24 }}>
            <p style={{ margin: 0, color: 'var(--text-medium)' }}>
              Main content — current drawer size: <b>{size.toUpperCase()}</b>
            </p>
          </div>
          <Drawer
            variant="float"
            open
            onClose={() => {}}
            title={`Float · ${size.toUpperCase()}`}
            anchor="right"
            size={size}
          >
            <p style={{ margin: 0, fontSize: 14 }}>
              Width = {size === 's' ? '25vw' : size === 'm' ? '35vw' : '50vw'}
            </p>
          </Drawer>
        </FloatFrame>
      </div>
    );
  },
};

export const FloatLeft: Story = {
  name: 'Float / Left',
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <FloatFrame>
        <Drawer
          variant="float"
          open={open}
          onClose={() => setOpen(false)}
          title="Navigation"
          anchor="left"
          size="s"
        >
          <List>
            <ListItem><ListItemIcon>📊</ListItemIcon><ListItemText primary="Dashboard" /></ListItem>
            <ListItem><ListItemIcon>📋</ListItemIcon><ListItemText primary="Reports" /></ListItem>
          </List>
        </Drawer>
        <div style={{ flex: 1, padding: 24 }}>
          <Button variant="outlined" onClick={() => setOpen(v => !v)}>
            {open ? 'Close' : 'Open'} Left Drawer
          </Button>
        </div>
      </FloatFrame>
    );
  },
};
