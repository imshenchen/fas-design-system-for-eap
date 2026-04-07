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
    anchor: { control: 'select', options: ['left', 'right', 'top', 'bottom'] },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Left: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="outlined" onClick={() => setOpen(true)}>Open Left Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Navigation" anchor="left">
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

export const Right: Story = {
  render: () => {
    const [open, setOpen] = useState(false);
    return (
      <>
        <Button variant="outlined" onClick={() => setOpen(true)}>Open Right Drawer</Button>
        <Drawer open={open} onClose={() => setOpen(false)} title="Details" anchor="right">
          <p style={{ margin: 0, fontSize: 14, color: '#727171' }}>Drawer content on the right side.</p>
        </Drawer>
      </>
    );
  },
};
