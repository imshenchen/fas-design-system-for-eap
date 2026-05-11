import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { LMAppShell } from './LMAppShell';
import { LMFooter } from '../../components/LMFooter/LMFooter';
import { LMQuadrantSelector } from '../../components/LMQuadrantSelector/LMQuadrantSelector';
import type { LMQuadrantKey } from '../../components/LMQuadrantSelector/LMQuadrantSelector';
import { LMMobileInstallButton } from '../../components/LMMobileInstallButton/LMMobileInstallButton';
import type { LMSwitchPanelItem } from '../../components/LMSwitchPanel/LMSwitchPanel';
import type { SideNavItem } from '../../../components/SideMenu/SideMenu';
import { Card } from '../../../components/Card/Card';
import { Button } from '../../../components/Button/Button';

/**
 * LMAppShell — LM 專案頁面最外層版面樣板。
 *
 * 與 core `AppShell` 同一角色，但有兩處差異：
 *   1. Header 由上至下三層：NavBar → LMFeatureTitle → LMSwitchPanel
 *      （core AppShell 只有 NavBar + FeatureTitle 兩層）
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

const LINE_OPTIONS = [
  { value: 'line-a', label: '產線 A' },
  { value: 'line-b', label: '產線 B' },
  { value: 'line-c', label: '產線 C' },
];

/** 機台 tiles 與 line 無關，固定常駐 */
const MACHINE_TILES: LMSwitchPanelItem[] = [
  { key: 'aoi-001',   label: 'AOI檢測機 001',   type: 'machine', status: 'warning' },
  { key: 'laser-002', label: 'LASER雷雕機 002', type: 'machine', status: 'down'    },
  { key: 'smt-003',   label: 'SMT貼片機 003',   type: 'machine', status: 'normal'  },
];

/** 由當前 line 構造 switchItems：第一顆 tile 隨 line 變動 */
const buildSwitchItems = (lineValue: string): LMSwitchPanelItem[] => {
  const lineLabel = LINE_OPTIONS.find((l) => l.value === lineValue)?.label ?? lineValue;
  return [
    { key: lineValue, label: lineLabel, type: 'line', status: 'normal' },
    ...MACHINE_TILES,
  ];
};

type DemoProps = {
  defaultCollapsed?: boolean;
  footer?: React.ReactNode;
  /** 渲染長內容以驗證 footer 貼底時 content 內部捲動 */
  longContent?: boolean;
  switchRightSlot?: React.ReactNode;
  versionAction?: React.ReactNode;
  actions?: React.ReactNode;
};

const PlaceholderQR: React.FC = () => (
  <div
    style={{
      width:        160,
      height:       160,
      background:   `repeating-linear-gradient(45deg, var(--text-high), var(--text-high) 4px, var(--bg-surface) 4px, var(--bg-surface) 8px)`,
      borderRadius: 4,
    }}
    role="img"
    aria-label="QR Code 範例"
  />
);

const Demo: React.FC<DemoProps> = ({
  defaultCollapsed, footer, longContent, switchRightSlot, versionAction, actions,
}) => {
  const [activeKey, setActiveKey] = useState('realtime');
  const [line,      setLine]      = useState('line-a');
  const [scope,     setScope]     = useState<string>('line-a');

  const switchItems = buildSwitchItems(line);
  // 若當前 scope 是舊 line key，line 切換時需同步把 scope 移到新 line tile
  const effectiveScope = switchItems.some((t) => t.key === scope) ? scope : line;

  const handleLineChange = (next: string) => {
    setLine(next);
    setScope(next);
  };

  return (
    <LMAppShell
      appName="LM Console"
      userInitial="L"
      menuItems={demoMenuItems}
      activeKey={activeKey}
      onMenuItemClick={(key) => setActiveKey(key)}
      version="v1.0.0"
      defaultCollapsed={defaultCollapsed}
      lineOptions={LINE_OPTIONS}
      lineValue={line}
      onLineChange={handleLineChange}
      actions={actions}
      switchItems={switchItems}
      switchValue={effectiveScope}
      onSwitchChange={(key) => setScope(key)}
      switchRightSlot={switchRightSlot}
      versionAction={versionAction}
      footer={footer}
    >
      <Card variant="elevated">
        <h3 style={{ margin: '0 0 12px', color: 'var(--text-high)' }}>主內容區</h3>
        <p style={{ margin: 0, color: 'var(--text-medium)' }}>
          當前產線：<strong style={{ color: 'var(--primary)' }}>{line}</strong>
          ；當前 scope：<strong style={{ color: 'var(--primary)' }}>{effectiveScope}</strong>
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

const QuadrantDemo: React.FC = () => {
  const [zones, setZones] = useState<LMQuadrantKey[]>(['topLeft']);
  return <LMQuadrantSelector value={zones} onChange={setZones} size={52} />;
};

export const Default: Story = {
  render: () => (
    <Demo
      switchRightSlot={<QuadrantDemo />}
      versionAction={<LMMobileInstallButton qrCode={<PlaceholderQR />} />}
    />
  ),
};

export const WithFeatureTitleActions: Story = {
  name: 'With LMFeatureTitle actions (CTA)',
  render: () => (
    <Demo
      switchRightSlot={<QuadrantDemo />}
      actions={
        <>
          <Button variant="text" color="secondary" size="s">取消</Button>
          <Button variant="contained" size="s">儲存</Button>
        </>
      }
    />
  ),
};

export const WithoutQuadrant: Story = {
  name: 'Without quadrant — no rightSlot',
  render: () => <Demo />,
};

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
