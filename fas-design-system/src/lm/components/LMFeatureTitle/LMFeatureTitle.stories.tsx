import type { Meta, StoryObj } from '@storybook/react';
import { LMFeatureTitle } from './LMFeatureTitle';
import { Button } from '../../../components/Button/Button';

/**
 * LMFeatureTitle — LM 版的 FeatureTitle。
 *
 * 與 core `FeatureTitle` 同角色（NavBar 下方的頁面標題列），差別在字級小一階：
 *   - label：20px → 18px（line-height 24px、weight 500 不變）
 *   - 分隔 icon：24px → 20px
 *
 * 兩者皆在設計系統的字級階梯內（…14, 16, 18, 20, 24…）。
 *
 * 麵包屑規則同 core FeatureTitle：第一層必為當前 SideMenu 選中的功能（active leaf node）。
 */
const meta: Meta<typeof LMFeatureTitle> = {
  title: 'LM/Components/LMFeatureTitle',
  component: LMFeatureTitle,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof LMFeatureTitle>;

export const Default: Story = {
  render: () => (
    <LMFeatureTitle
      topOffset={0}
      items={[
        { label: 'Rule Settings', onClick: () => {} },
        { label: 'Create Rule' },
      ]}
      actions={
        <>
          <Button variant="text" color="secondary" size="s">Cancel</Button>
          <Button variant="contained" size="s">Create</Button>
        </>
      }
    />
  ),
};

export const SingleLevel: Story = {
  render: () => (
    <LMFeatureTitle topOffset={0} items={[{ label: 'Node Management' }]} />
  ),
};

export const MultiLevel: Story = {
  render: () => (
    <LMFeatureTitle
      topOffset={0}
      items={[
        { label: 'Rule Settings', onClick: () => {} },
        { label: 'Rule Detail', onClick: () => {} },
        { label: 'Edit' },
      ]}
      actions={
        <>
          <Button variant="text" color="secondary" size="s">Cancel</Button>
          <Button variant="contained" size="s">Save</Button>
        </>
      }
    />
  ),
};

export const WithoutActions: Story = {
  render: () => (
    <LMFeatureTitle
      topOffset={0}
      items={[
        { label: 'Alert List', onClick: () => {} },
        { label: 'Alert Detail' },
      ]}
    />
  ),
};

export const MaxFiveLevels: Story = {
  render: () => (
    <LMFeatureTitle
      topOffset={0}
      items={[
        { label: 'Storage', onClick: () => {} },
        { label: 'Bucket List', onClick: () => {} },
        { label: 'Bucket Detail', onClick: () => {} },
        { label: 'File List', onClick: () => {} },
        { label: 'File Detail' },
      ]}
    />
  ),
};

/**
 * Side-by-side 對照 core FeatureTitle（上：core 20px，下：LM 18px）。
 */
export const CompareWithCore: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '8px 24px', fontSize: 12, color: 'var(--text-medium)' }}>core FeatureTitle (20px)</div>
      <div
        style={{
          display: 'flex', alignItems: 'center', gap: 8, minHeight: 56,
          padding: '8px 24px',
          backgroundColor: 'var(--bg-surface)',
          borderBottom: '1px solid var(--divider)',
        }}
      >
        <span style={{ fontSize: 20, lineHeight: '24px', fontWeight: 500, color: 'var(--secondary)' }}>Rule Settings</span>
        <span className="material-symbols-outlined" style={{ fontSize: 24, color: 'var(--secondary)' }}>navigate_next</span>
        <span style={{ fontSize: 20, lineHeight: '24px', fontWeight: 500, color: 'var(--text-high)' }}>Create Rule</span>
      </div>
      <div style={{ padding: '8px 24px', fontSize: 12, color: 'var(--text-medium)', marginTop: 16 }}>LMFeatureTitle (18px)</div>
      <LMFeatureTitle
        topOffset={0}
        items={[
          { label: 'Rule Settings', onClick: () => {} },
          { label: 'Create Rule' },
        ]}
      />
    </div>
  ),
};
