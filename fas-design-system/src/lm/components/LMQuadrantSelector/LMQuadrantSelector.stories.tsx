import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LMQuadrantSelector } from './LMQuadrantSelector';
import type { LMQuadrantKey } from './LMQuadrantSelector';

/**
 * LMQuadrantSelector — 田字四象限多選按鈕。
 *
 * - 4 個象限可獨立切換選取狀態（多選）
 * - 中央圓形按鈕：點擊一鍵全選 / 全不選
 * - 適用情境：選擇設備上 4 區塊的上料資料、感測點、拼板等
 */
const meta: Meta<typeof LMQuadrantSelector> = {
  title: 'LM/Components/LMQuadrantSelector',
  component: LMQuadrantSelector,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof LMQuadrantSelector>;

const Frame: React.FC<{ children: React.ReactNode; status?: React.ReactNode }> = ({
  children,
  status,
}) => (
  <div
    style={{
      display:        'flex',
      flexDirection:  'column',
      alignItems:     'center',
      gap:            16,
      padding:        24,
      background:     'var(--bg-surface-dim)',
    }}
  >
    {children}
    {status && (
      <div style={{ color: 'var(--text-medium)', fontSize: 13 }}>{status}</div>
    )}
  </div>
);

export const Default: Story = {
  render: () => {
    const [val, setVal] = useState<LMQuadrantKey[]>(['topLeft']);
    return (
      <Frame status={`已選：${val.length === 0 ? '無' : val.join(', ')}`}>
        <LMQuadrantSelector value={val} onChange={setVal} />
      </Frame>
    );
  },
};

export const AllSelected: Story = {
  name: 'All selected — center button highlighted',
  render: () => {
    const [val, setVal] = useState<LMQuadrantKey[]>([
      'topLeft', 'topRight', 'bottomLeft', 'bottomRight',
    ]);
    return (
      <Frame status="全部選取 → 中央按鈕變 primary，icon 變 select_all">
        <LMQuadrantSelector value={val} onChange={setVal} />
      </Frame>
    );
  },
};

export const Empty: Story = {
  render: () => {
    const [val, setVal] = useState<LMQuadrantKey[]>([]);
    return (
      <Frame status="未選取任何象限">
        <LMQuadrantSelector value={val} onChange={setVal} />
      </Frame>
    );
  },
};

export const CustomLabels: Story = {
  name: 'Custom labels — 區1/區2/區3/區4',
  render: () => {
    const [val, setVal] = useState<LMQuadrantKey[]>(['topLeft', 'bottomRight']);
    return (
      <Frame status={`已選區塊：${val.length}/4`}>
        <LMQuadrantSelector
          value={val}
          onChange={setVal}
          labels={{
            topLeft:     '區 1',
            topRight:    '區 2',
            bottomLeft:  '區 3',
            bottomRight: '區 4',
          }}
        />
      </Frame>
    );
  },
};

export const WithDisabled: Story = {
  name: 'Disabled — 右下無法操作',
  render: () => {
    const [val, setVal] = useState<LMQuadrantKey[]>(['topLeft']);
    return (
      <Frame status="右下象限禁用，全選按鈕只會切換可用象限">
        <LMQuadrantSelector
          value={val}
          onChange={setVal}
          disabled={{ bottomRight: true }}
        />
      </Frame>
    );
  },
};

export const SizeLarge: Story = {
  name: 'Size 160',
  render: () => {
    const [val, setVal] = useState<LMQuadrantKey[]>(['topRight', 'bottomLeft']);
    return (
      <Frame>
        <LMQuadrantSelector value={val} onChange={setVal} size={160} />
      </Frame>
    );
  },
};

export const SizeSmall: Story = {
  name: 'Size 96',
  render: () => {
    const [val, setVal] = useState<LMQuadrantKey[]>([]);
    return (
      <Frame>
        <LMQuadrantSelector value={val} onChange={setVal} size={96} />
      </Frame>
    );
  },
};

export const InContext: Story = {
  name: 'In context — 上料資料 picker',
  render: () => {
    const [val, setVal] = useState<LMQuadrantKey[]>(['topLeft', 'topRight']);
    return (
      <div style={{ padding: 24, background: 'var(--bg-surface-dim)' }}>
        <div style={{
          display:       'flex',
          gap:           24,
          alignItems:    'center',
          padding:       16,
          background:    'var(--bg-surface)',
          border:        '1px solid var(--card-outlined)',
          borderRadius:  8,
        }}>
          <LMQuadrantSelector value={val} onChange={setVal} size={120} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text-high)' }}>
              選擇要查看上料資料的區塊
            </div>
            <div style={{ fontSize: 13, color: 'var(--text-medium)' }}>
              已選：{val.length === 0 ? '尚未選擇任何區塊' : val.length === 4 ? '全部 4 區' : val.join(' / ')}
            </div>
            <div style={{ fontSize: 12, color: 'var(--text-medium)', marginTop: 4 }}>
              點擊正中央可一鍵全選 / 全不選
            </div>
          </div>
        </div>
      </div>
    );
  },
};
