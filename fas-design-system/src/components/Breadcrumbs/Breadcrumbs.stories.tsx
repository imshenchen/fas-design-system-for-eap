import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from './Breadcrumbs';

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Navigation/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Default: Story = {
  args: {
    items: [
      { label: '首頁', onClick: () => {} },
      { label: '節點管理', onClick: () => {} },
      { label: '新增節點' },
    ],
  },
};

export const TwoLevels: Story = {
  args: {
    items: [
      { label: '節點管理', onClick: () => {} },
      { label: '詳細資訊' },
    ],
  },
};

export const FiveLevels: Story = {
  args: {
    items: [
      { label: '首頁', onClick: () => {} },
      { label: '設定', onClick: () => {} },
      { label: '系統管理', onClick: () => {} },
      { label: '使用者管理', onClick: () => {} },
      { label: '編輯使用者' },
    ],
  },
};

export const WithLinks: Story = {
  args: {
    items: [
      { label: '首頁', href: '/' },
      { label: '文件', href: '/docs' },
      { label: '元件', href: '/docs/components' },
      { label: 'Breadcrumbs' },
    ],
  },
};
