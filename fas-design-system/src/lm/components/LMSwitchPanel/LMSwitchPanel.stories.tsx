import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LMSwitchPanel } from './LMSwitchPanel';
import type { LMSwitchPanelItem } from './LMSwitchPanel';

/**
 * LMSwitchPanel — 內容區塊頂部的 scope 切換列。
 *
 * - 由左至右排列 `LMScopeTile`（128 × 128 方形），點選切換 scope
 * - 每顆 tile：三色三形狀燈號 + 產線/機台 icon + 名稱
 * - 同時只有一顆被選取
 */
const meta: Meta<typeof LMSwitchPanel> = {
  title: 'LM/Components/LMSwitchPanel',
  component: LMSwitchPanel,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof LMSwitchPanel>;

const SAMPLE_ITEMS: LMSwitchPanelItem[] = [
  { key: 'line-a',    label: '產線 A',          type: 'line',    status: 'normal'  },
  { key: 'aoi-001',   label: 'AOI檢測機 001',   type: 'machine', status: 'warning' },
  { key: 'laser-002', label: 'LASER雷雕機 002', type: 'machine', status: 'down'    },
  { key: 'smt-003',   label: 'SMT貼片機 003',   type: 'machine', status: 'normal'  },
];

const Frame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ padding: 32, background: 'var(--bg-surface-dim)', minHeight: '100vh' }}>
    {children}
    <div style={{ marginTop: 24, color: 'var(--text-medium)' }}>
      （示意：下方為主內容；切換上方 tile 會帶動主內容載入對應 scope 的資料）
    </div>
  </div>
);

export const Default: Story = {
  render: () => {
    const [scope, setScope] = useState('line-a');
    return (
      <Frame>
        <LMSwitchPanel
          items={SAMPLE_ITEMS}
          value={scope}
          onChange={setScope}
          featureTitle="即時數據"
        />
      </Frame>
    );
  },
};

export const ManyItemsOverflow: Story = {
  name: 'Many items — More button overflow',
  render: () => {
    const items: LMSwitchPanelItem[] = [
      ...SAMPLE_ITEMS,
      { key: 'aoi-002',   label: 'AOI檢測機 002', type: 'machine', status: 'normal'  },
      { key: 'aoi-003',   label: 'AOI檢測機 003', type: 'machine', status: 'warning' },
      { key: 'oven-001',  label: '回焊爐 001',    type: 'machine', status: 'normal'  },
      { key: 'pcb-tester', label: 'PCB 測試機',    type: 'machine', status: 'down'    },
      { key: 'smt-005',   label: 'SMT貼片機 005', type: 'machine', status: 'normal'  },
      { key: 'oven-002',  label: '回焊爐 002',    type: 'machine', status: 'down'    },
    ];
    const [scope, setScope] = useState('line-a');
    return (
      <Frame>
        <LMSwitchPanel items={items} value={scope} onChange={setScope} featureTitle="即時數據" />
      </Frame>
    );
  },
};

export const NarrowContainer: Story = {
  name: 'Narrow container — overflow into More menu',
  render: () => {
    const items: LMSwitchPanelItem[] = [
      ...SAMPLE_ITEMS,
      { key: 'aoi-002',   label: 'AOI檢測機 002', type: 'machine', status: 'normal'  },
      { key: 'aoi-003',   label: 'AOI檢測機 003', type: 'machine', status: 'warning' },
      { key: 'oven-001',  label: '回焊爐 001',    type: 'machine', status: 'normal'  },
      { key: 'pcb-tester', label: 'PCB 測試機',    type: 'machine', status: 'down'    },
    ];
    const [scope, setScope] = useState('line-a');
    return (
      <div style={{ padding: 32, background: 'var(--bg-surface-dim)', minHeight: '100vh' }}>
        <div style={{ width: 720, maxWidth: '100%' }}>
          <LMSwitchPanel items={items} value={scope} onChange={setScope} featureTitle="即時數據" />
        </div>
        <div style={{ marginTop: 24, color: 'var(--text-medium)' }}>
          （容器寬 720px，無法放下所有 8 顆 tile → tail-end 自動收進 More 按鈕）
        </div>
      </div>
    );
  },
};

export const NoFeatureTitle: Story = {
  name: 'No featureTitle — title section omitted',
  render: () => {
    const [scope, setScope] = useState('line-a');
    return (
      <Frame>
        <LMSwitchPanel items={SAMPLE_ITEMS} value={scope} onChange={setScope} />
      </Frame>
    );
  },
};

export const WithDisabled: Story = {
  render: () => {
    const items: LMSwitchPanelItem[] = [
      ...SAMPLE_ITEMS,
      { key: 'old-mes', label: 'Legacy MES', type: 'machine', status: 'down', disabled: true },
    ];
    const [scope, setScope] = useState('line-a');
    return (
      <Frame>
        <LMSwitchPanel items={items} value={scope} onChange={setScope} />
      </Frame>
    );
  },
};

export const AllStatuses: Story = {
  name: 'Status legend',
  render: () => {
    const items: LMSwitchPanelItem[] = [
      { key: 'a', label: '正常運行中', type: 'machine', status: 'normal'  },
      { key: 'b', label: '警告',       type: 'machine', status: 'warning' },
      { key: 'c', label: '停機',       type: 'machine', status: 'down'    },
    ];
    const [scope, setScope] = useState('a');
    return (
      <Frame>
        <LMSwitchPanel items={items} value={scope} onChange={setScope} />
      </Frame>
    );
  },
};

export const MixedLineAndMachine: Story = {
  name: 'Mixed — line + machine',
  render: () => {
    const items: LMSwitchPanelItem[] = [
      { key: 'line-a',    label: '產線 A',         type: 'line',    status: 'normal'  },
      { key: 'line-b',    label: '產線 B',         type: 'line',    status: 'warning' },
      { key: 'aoi-001',   label: 'AOI檢測機 001',  type: 'machine', status: 'normal'  },
      { key: 'laser-002', label: 'LASER雷雕機 002', type: 'machine', status: 'down'    },
    ];
    const [scope, setScope] = useState('line-a');
    return (
      <Frame>
        <LMSwitchPanel items={items} value={scope} onChange={setScope} />
      </Frame>
    );
  },
};
