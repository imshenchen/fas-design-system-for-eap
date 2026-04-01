import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Snackbar, SnackbarProvider, useSnackbar } from './Snackbar';
import { Button } from '../Button/Button';

const meta: Meta<typeof Snackbar> = {
  title: 'Components/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
  argTypes: {
    status: { control: 'select', options: ['success', 'error', 'warning', 'processing'] },
    open:   { control: 'boolean' },
    autoHideDuration: { control: 'number' },
  },
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {
  args: {
    open: true,
    message: '操作已成功完成',
    status: 'success',
    autoHideDuration: 0,
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Snackbar open message="正在處理中，請稍候…" status="processing" autoHideDuration={0} />
      <Snackbar open message="操作已成功完成" status="success" autoHideDuration={0} />
      <Snackbar open message="注意：此操作可能影響系統設定" status="warning" autoHideDuration={0} />
      <Snackbar open message="操作失敗，請稍後再試" status="error" autoHideDuration={0} />
      <Snackbar open message="沒有狀態圖示的通知訊息" autoHideDuration={0} />
    </div>
  ),
};

export const WithAction: Story = {
  args: {
    open: true,
    message: '節點已刪除',
    autoHideDuration: 0,
    action: { label: '復原', onClick: () => alert('已復原') },
  },
};

export const Interactive: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    return (
      <div style={{ height: 200, position: 'relative' }}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          顯示通知
        </Button>
        <Snackbar
          open={open}
          message="操作已成功完成！"
          status="success"
          autoHideDuration={3000}
          onClose={() => setOpen(false)}
          action={{ label: '查看', onClick: () => {} }}
        />
      </div>
    );
  },
};

const SnackbarTrigger = () => {
  const { showSnackbar } = useSnackbar();
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
      <Button variant="contained" color="primary" onClick={() => showSnackbar({ message: '成功！', status: 'success' })}>
        Success
      </Button>
      <Button variant="outlined" color="error" onClick={() => showSnackbar({ message: '操作失敗', status: 'error' })}>
        Error
      </Button>
      <Button variant="outlined" onClick={() => showSnackbar({ message: '請注意此操作', status: 'warning' })}>
        Warning
      </Button>
      <Button variant="outlined" onClick={() => showSnackbar({ message: '正在處理中…', status: 'processing' })}>
        Processing
      </Button>
    </div>
  );
};

export const WithProvider: Story = {
  render: () => (
    <SnackbarProvider>
      <SnackbarTrigger />
    </SnackbarProvider>
  ),
};
