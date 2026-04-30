import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { LMAppShell } from './LMAppShell';
import { LMFooter } from '../../components/LMFooter/LMFooter';
import type { LMSwitchPanelItem } from '../../components/LMSwitchPanel/LMSwitchPanel';
import type { SideNavItem } from '../../../components/SideMenu/SideMenu';
import { Card } from '../../../components/Card/Card';

/**
 * LMAppShell — LM 專案頁面最外層版面樣板。
 *
 * 與 core `AppShell` 同一角色，但有兩處差異：
 *   1. 無 FeatureTitle，改放 `LMSwitchPanel` 在主內容頂部，與 NavBar / SideMenu 之間有 padding（不貼齊）
 *   2. SideMenu 收折時固定為 `'hidden'`（width 0 完全消失），不保留 narrow 形態
 */
const meta: Meta<typeof LMAppShell> = {
  title: 'LM/Templates/LMAppShell',
  component: LMAppShell,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof LMAppShell>;

const demoMenuItems: SideNavItem[] = [
  {
    key: 'lm',
    label: 'LM 工具',
    isSection: true,
    children: [
      {
        key: 'monitor',
        label: '產線監控',
        icon: 'monitoring',
        defaultOpen: true,
        children: [
          { key: 'realtime', label: '即時數據' },
          { key: 'history',  label: '歷史趨勢' },
        ],
      },
      { key: 'devices', label: '設備管理', icon: 'precision_manufacturing' },
    ],
  },
];

const switchItems: LMSwitchPanelItem[] = [
  { key: 'line-a',    label: '產線 A',          type: 'line',    status: 'normal'  },
  { key: 'aoi-001',   label: 'AOI檢測機 001',   type: 'machine', status: 'warning' },
  { key: 'laser-002', label: 'LASER雷雕機 002', type: 'machine', status: 'down'    },
  { key: 'smt-003',   label: 'SMT貼片機 003',   type: 'machine', status: 'normal'  },
];

type DemoProps = {
  defaultCollapsed?: boolean;
  footer?: React.ReactNode;
  /** 渲染長內容以驗證 footer 貼底時 content 內部捲動 */
  longContent?: boolean;
};

const Demo: React.FC<DemoProps> = ({ defaultCollapsed, footer, longContent }) => {
  const [activeKey, setActiveKey] = useState('realtime');
  const [scope,     setScope]     = useState('line-a');

  return (
    <LMAppShell
      appName="LM Console"
      userInitial="L"
      menuItems={demoMenuItems}
      activeKey={activeKey}
      onMenuItemClick={(key) => setActiveKey(key)}
      version="v1.0.0"
      defaultCollapsed={defaultCollapsed}
      switchItems={switchItems}
      switchValue={scope}
      onSwitchChange={(key) => setScope(key)}
      footer={footer}
    >
      <Card variant="elevated">
        <h3 style={{ margin: '0 0 12px', color: 'var(--text-high)' }}>主內容區</h3>
        <p style={{ margin: 0, color: 'var(--text-medium)' }}>
          當前 scope：<strong style={{ color: 'var(--primary)' }}>{scope}</strong>
          ；當前選單：<strong style={{ color: 'var(--primary)' }}>{activeKey}</strong>
        </p>
        {longContent && (
          <div style={{ marginTop: 16 }}>
            {Array.from({ length: 30 }).map((_, i) => (
              <p key={i} style={{ color: 'var(--text-medium)' }}>
                Row {i + 1}：模擬長內容 — 滾動時 footer 應永遠貼底、switch panel 應永遠貼頂。
              </p>
            ))}
          </div>
        )}
      </Card>
    </LMAppShell>
  );
};

export const Default: Story = { render: () => <Demo /> };

export const SideMenuHidden: Story = {
  name: 'SideMenu hidden — full-width content',
  render: () => <Demo defaultCollapsed />,
};

export const WithFooter: Story = {
  name: 'With LMFooter slot',
  render: () => (
    <Demo
      footer={
        <LMFooter
          onHelp={() => alert('open help')}
          onPrev={() => alert('prev')}
          onNext={() => alert('next')}
        />
      }
    />
  ),
};

export const WithFooterAndLongContent: Story = {
  name: 'Footer + long scrolling content',
  render: () => (
    <Demo
      longContent
      footer={
        <LMFooter
          onHelp={() => {}}
          onPrev={() => {}}
          onNext={() => {}}
        />
      }
    />
  ),
};

export const CustomFooter: Story = {
  name: 'Custom footer node (not LMFooter)',
  render: () => (
    <Demo
      footer={
        <div
          style={{
            display:         'flex',
            justifyContent:  'flex-end',
            alignItems:      'center',
            gap:             12,
            padding:         '12px 24px',
            minHeight:       64,
            background:      'var(--bg-surface)',
            borderTop:       '1px solid var(--divider)',
          }}
        >
          <span style={{ color: 'var(--text-medium)', marginRight: 'auto' }}>
            Footer slot 接受任意 ReactNode（不一定要 LMFooter）
          </span>
          <button>自訂 A</button>
          <button>自訂 B</button>
        </div>
      }
    />
  ),
};
