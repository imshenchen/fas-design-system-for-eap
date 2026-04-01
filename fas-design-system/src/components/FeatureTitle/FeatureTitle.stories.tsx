import type { Meta, StoryObj } from '@storybook/react';
import { FeatureTitle } from './FeatureTitle';
import { Button } from '../Button/Button';

const meta: Meta<typeof FeatureTitle> = {
  title: 'Components/FeatureTitle',
  component: FeatureTitle,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof FeatureTitle>;

export const Default: Story = {
  render: () => (
    <FeatureTitle
      topOffset={0}
      items={[
        { label: '節點管理', onClick: () => {} },
        { label: '新增節點' },
      ]}
      actions={
        <>
          <Button variant="outlined" color="secondary" size="s">取消</Button>
          <Button variant="contained" size="s">建立</Button>
        </>
      }
    />
  ),
};

export const SingleLevel: Story = {
  render: () => (
    <FeatureTitle
      topOffset={0}
      items={[{ label: '節點管理' }]}
      actions={<Button variant="contained" size="s">新增節點</Button>}
    />
  ),
};

export const MultipleLevel: Story = {
  render: () => (
    <FeatureTitle
      topOffset={0}
      items={[
        { label: '首頁', onClick: () => {} },
        { label: '系統設定', onClick: () => {} },
        { label: '使用者管理', onClick: () => {} },
        { label: '編輯使用者' },
      ]}
    />
  ),
};

export const WithoutActions: Story = {
  render: () => (
    <FeatureTitle
      topOffset={0}
      items={[
        { label: '報表', onClick: () => {} },
        { label: '月報' },
      ]}
    />
  ),
};

export const MaxFiveLevels: Story = {
  render: () => (
    <FeatureTitle
      topOffset={0}
      items={[
        { label: 'L1', onClick: () => {} },
        { label: 'L2', onClick: () => {} },
        { label: 'L3', onClick: () => {} },
        { label: 'L4', onClick: () => {} },
        { label: 'L5 (當前頁面)' },
      ]}
    />
  ),
};
