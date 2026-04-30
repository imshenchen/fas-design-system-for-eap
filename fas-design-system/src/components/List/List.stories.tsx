import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, ListDivider, ListSubheader } from './List';

const meta: Meta<typeof List> = {
  title: 'Core/Data Display/List',
  component: List,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof List>;

export const Basic: Story = {
  render: () => (
    <List style={{ width: 280, border: '1px solid #d9d9d9', borderRadius: 4 }}>
      <ListItem><ListItemText primary="Item one" /></ListItem>
      <ListItem><ListItemText primary="Item two" /></ListItem>
      <ListItem><ListItemText primary="Item three" /></ListItem>
    </List>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <List style={{ width: 280, border: '1px solid #d9d9d9', borderRadius: 4 }}>
      <ListItem onClick={() => {}}>
        <ListItemIcon>📁</ListItemIcon>
        <ListItemText primary="Folder" secondary="12 items" />
      </ListItem>
      <ListItem onClick={() => {}} selected>
        <ListItemIcon>📄</ListItemIcon>
        <ListItemText primary="Document.pdf" secondary="Selected" />
      </ListItem>
      <ListItem onClick={() => {}} disabled>
        <ListItemIcon>🔒</ListItemIcon>
        <ListItemText primary="Locked item" />
      </ListItem>
    </List>
  ),
};

export const WithSubheaders: Story = {
  render: () => (
    <List style={{ width: 280, border: '1px solid #d9d9d9', borderRadius: 4, maxHeight: 300, overflow: 'auto' }}>
      <ListSubheader>Recent</ListSubheader>
      <ListItem onClick={() => {}}><ListItemText primary="File A" /></ListItem>
      <ListItem onClick={() => {}}><ListItemText primary="File B" /></ListItem>
      <ListDivider />
      <ListSubheader>Archived</ListSubheader>
      <ListItem onClick={() => {}}><ListItemText primary="Old file C" /></ListItem>
    </List>
  ),
};

export const Dense: Story = {
  render: () => (
    <List dense style={{ width: 240, border: '1px solid #d9d9d9', borderRadius: 4 }}>
      {['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'].map((item) => (
        <ListItem key={item} onClick={() => {}}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  ),
};
