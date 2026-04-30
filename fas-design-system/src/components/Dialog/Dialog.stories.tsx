import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Dialog, DialogSection, DialogDivider } from './Dialog';
import { Button } from '../Button/Button';
import { TextField } from '../TextField/TextField';

const meta: Meta<typeof Dialog> = {
  title: 'Core/Layout/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    size: { control: 'select', options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    open: { control: 'boolean' },
    closeOnOverlay: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Dialog>;

const DialogDemo = ({ size = 'md' as const, title = '對話框標題', children }: {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  title?: string;
  children?: React.ReactNode;
}) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        開啟 {size.toUpperCase()} Dialog
      </Button>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        size={size}
        actions={
          <>
            <Button variant="outlined" color="secondary" size="s" onClick={() => setOpen(false)}>
              取消
            </Button>
            <Button variant="contained" size="s" onClick={() => setOpen(false)}>
              確認
            </Button>
          </>
        }
      >
        {children ?? (
          <p style={{ margin: 0, color: 'var(--text-body)' }}>
            這是 Dialog 的內容區域。可以放置表單、資訊或其他元件。
          </p>
        )}
      </Dialog>
    </>
  );
};

export const Default: Story = {
  render: () => <DialogDemo />,
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
      {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
        <DialogDemo key={size} size={size} />
      ))}
    </div>
  ),
};

export const WithForm: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button variant="outlined" onClick={() => setOpen(true)}>開啟表單 Dialog</Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="新增節點"
          size="md"
          actions={
            <>
              <Button variant="outlined" color="secondary" size="s" onClick={() => setOpen(false)}>取消</Button>
              <Button variant="contained" size="s" onClick={() => setOpen(false)}>建立</Button>
            </>
          }
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <DialogSection label="基本資訊">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <TextField label="節點名稱" placeholder="請輸入名稱" required />
                <TextField label="IP 位址" placeholder="例：192.168.1.1" />
                <TextField label="Port" placeholder="例：8080" />
              </div>
            </DialogSection>
            <DialogDivider />
            <DialogSection label="描述">
              <TextField label="備註" placeholder="選填" />
            </DialogSection>
          </div>
        </Dialog>
      </>
    );
  },
};

export const ConfirmDelete: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <>
        <Button variant="outlined" color="error" onClick={() => setOpen(true)}>刪除節點</Button>
        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          title="確認刪除"
          size="xs"
          closeOnOverlay={false}
          actions={
            <>
              <Button variant="outlined" color="secondary" size="s" onClick={() => setOpen(false)}>取消</Button>
              <Button variant="contained" color="error" size="s" onClick={() => setOpen(false)}>確認刪除</Button>
            </>
          }
        >
          <p style={{ margin: 0, color: 'var(--text-body)' }}>
            此操作無法復原。確定要刪除這個節點嗎？
          </p>
        </Dialog>
      </>
    );
  },
};
