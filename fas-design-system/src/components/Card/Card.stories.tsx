import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, CardActions } from './Card';
import { Button } from '../Button/Button';
import { Avatar } from '../Avatar/Avatar';

const meta: Meta<typeof Card> = {
  title: 'Data Display/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['elevated', 'outlined', 'filled'] },
    clickable: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: { variant: 'elevated' },
  render: (args) => (
    <Card {...args} style={{ width: 280 }}>
      <CardHeader title="Card Title" subtitle="Secondary text" />
      <CardBody>Card body content goes here.</CardBody>
    </Card>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
      {(['elevated', 'outlined', 'filled'] as const).map((variant) => (
        <Card key={variant} variant={variant} style={{ width: 200 }}>
          <CardBody>
            <div style={{ fontWeight: 600, marginBottom: 4, textTransform: 'capitalize' }}>{variant}</div>
            <div style={{ fontSize: 12, color: '#727171' }}>Card variant example</div>
          </CardBody>
        </Card>
      ))}
    </div>
  ),
};

export const FullCard: Story = {
  render: () => (
    <Card style={{ width: 320 }}>
      <CardHeader
        avatar={<Avatar type="primary" size="m" initials="JD" />}
        title="John Doe"
        subtitle="Software Engineer"
        action={<Button variant="text" size="xs">Edit</Button>}
      />
      <CardBody>
        <p style={{ margin: 0, fontSize: 14, color: '#727171', lineHeight: 1.5 }}>
          A brief description about this person or content item.
        </p>
      </CardBody>
      <CardActions>
        <Button variant="outlined" size="s">Cancel</Button>
        <Button variant="contained" size="s">Confirm</Button>
      </CardActions>
    </Card>
  ),
};

export const Clickable: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <Card clickable variant="elevated" style={{ width: 160, padding: 0 }} onClick={() => alert('Clicked!')}>
        <CardBody>Click me</CardBody>
      </Card>
      <Card clickable variant="outlined" style={{ width: 160, padding: 0 }}>
        <CardBody>Outlined clickable</CardBody>
      </Card>
    </div>
  ),
};
