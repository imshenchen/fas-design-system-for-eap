import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LMScopeTile } from './LMScopeTile';
import type { LMScopeTileStatus, LMScopeTileType } from './LMScopeTile';

/**
 * LMScopeTile — 方形 tile 按鈕，用於選擇整條產線或特定機台。
 *
 * 燈號規則（顏色 + 形狀皆帶語意，符合色盲可讀性）：
 *   - 綠色圓形 ●  正常運行中
 *   - 黃色三角 ▲  警告
 *   - 紅色方形 ■  停機
 */
const meta: Meta<typeof LMScopeTile> = {
  title: 'LM/Components/LMScopeTile',
  component: LMScopeTile,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof LMScopeTile>;

const Frame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ display: 'flex', gap: 16, padding: 24, background: 'var(--bg-surface-dim)' }}>
    {children}
  </div>
);

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState('aoi-001');
    return (
      <Frame>
        <LMScopeTile
          type="machine"
          label="AOI檢測機 001"
          status="normal"
          selected={selected === 'aoi-001'}
          onClick={() => setSelected('aoi-001')}
        />
        <LMScopeTile
          type="machine"
          label="LASER雷雕機 002"
          status="warning"
          selected={selected === 'laser-002'}
          onClick={() => setSelected('laser-002')}
        />
        <LMScopeTile
          type="machine"
          label="SMT貼片機 003"
          status="down"
          selected={selected === 'smt-003'}
          onClick={() => setSelected('smt-003')}
        />
      </Frame>
    );
  },
};

export const TypeLine: Story = {
  name: 'Type — line',
  render: () => (
    <Frame>
      <LMScopeTile type="line" label="產線 A" status="normal" />
      <LMScopeTile type="line" label="產線 B" status="warning" selected />
      <LMScopeTile type="line" label="產線 C（測試）" status="down" />
    </Frame>
  ),
};

export const StatusLegend: Story = {
  name: 'Status — 三色三形狀',
  render: () => (
    <Frame>
      <LMScopeTile type="machine" label="正常運行中" status="normal" />
      <LMScopeTile type="machine" label="警告"       status="warning" />
      <LMScopeTile type="machine" label="停機"       status="down" />
    </Frame>
  ),
};

export const SelectedComparison: Story = {
  name: 'Selected vs unselected',
  render: () => (
    <Frame>
      <LMScopeTile type="machine" label="未選取" status="normal" />
      <LMScopeTile type="machine" label="選取中" status="normal" selected />
    </Frame>
  ),
};

export const DisabledStates: Story = {
  render: () => (
    <Frame>
      <LMScopeTile type="machine" label="Disabled normal"  status="normal"  disabled />
      <LMScopeTile type="machine" label="Disabled warning" status="warning" disabled />
      <LMScopeTile type="machine" label="Disabled down"    status="down"    disabled />
    </Frame>
  ),
};

export const LongLabelTruncation: Story = {
  name: 'Long label — ellipsis',
  render: () => (
    <Frame>
      <LMScopeTile type="machine" label="AOI高解析度檢測機 #001-Production" status="normal" />
      <LMScopeTile type="line"    label="第一電子三廠SMT產線 A-12"           status="warning" selected />
    </Frame>
  ),
};

export const Grid: Story = {
  name: 'Grid layout — 多 tile 並排',
  render: () => {
    const items: { key: string; type: LMScopeTileType; label: string; status: LMScopeTileStatus }[] = [
      { key: 'line-a',    type: 'line',    label: '產線 A',          status: 'normal'  },
      { key: 'line-b',    type: 'line',    label: '產線 B',          status: 'warning' },
      { key: 'aoi-001',   type: 'machine', label: 'AOI檢測機 001',   status: 'normal'  },
      { key: 'aoi-002',   type: 'machine', label: 'AOI檢測機 002',   status: 'warning' },
      { key: 'laser-002', type: 'machine', label: 'LASER雷雕機 002', status: 'down'    },
      { key: 'smt-003',   type: 'machine', label: 'SMT貼片機 003',   status: 'normal'  },
      { key: 'oven-001',  type: 'machine', label: '回焊爐 001',      status: 'normal'  },
      { key: 'pcb-test',  type: 'machine', label: 'PCB 測試機',       status: 'down'    },
    ];
    const [selected, setSelected] = useState('line-a');
    return (
      <div
        style={{
          display:             'grid',
          gridTemplateColumns: 'repeat(4, 128px)',
          gap:                 16,
          padding:             24,
          background:          'var(--bg-surface-dim)',
        }}
      >
        {items.map((it) => (
          <LMScopeTile
            key={it.key}
            type={it.type}
            label={it.label}
            status={it.status}
            selected={selected === it.key}
            onClick={() => setSelected(it.key)}
          />
        ))}
      </div>
    );
  },
};
