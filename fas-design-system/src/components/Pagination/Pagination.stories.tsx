import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Pagination } from './Pagination';

const meta: Meta<typeof Pagination> = {
  title: 'Navigation/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['m', 's'] },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(3);
    return <Pagination page={page} count={10} onChange={setPage} />;
  },
};

export const ManyPages: Story = {
  render: () => {
    const [page, setPage] = useState(5);
    return <Pagination page={page} count={20} onChange={setPage} siblingCount={1} />;
  },
};

export const Small: Story = {
  render: () => {
    const [page, setPage] = useState(2);
    return <Pagination page={page} count={8} onChange={setPage} size="s" />;
  },
};

export const Disabled: Story = {
  render: () => <Pagination page={3} count={10} onChange={() => {}} disabled />,
};
