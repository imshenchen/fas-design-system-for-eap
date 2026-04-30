import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { AppShell } from './AppShell';
import type { SideNavItem } from '../../components/SideMenu/SideMenu';
import { Button } from '../../components/Button/Button';
import { Card } from '../../components/Card/Card';

/**
 * AppShell — 頁面最外層版面樣板。
 *
 * 必含三大區塊：NavigationBar（頂端）、SideMenu（左側）、FeatureTitle（NavBar 下方）。
 * SideMenu 收折狀態由 AppShell 內建管理，點擊 NavBar 漢堡即可切換；
 * 也可改傳 `collapsed` / `onCollapsedChange` 改為受控模式。
 */
const meta: Meta<typeof AppShell> = {
  title: 'Core/Templates/AppShell',
  component: AppShell,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof AppShell>;

// ---------------------------------------------------------------------------
// Mock side menu data
// ---------------------------------------------------------------------------

const demoMenuItems: SideNavItem[] = [
  {
    key: 'dev',
    label: '開發者工具',
    isSection: true,
    children: [
      {
        key: 'nodes',
        label: '節點',
        icon: 'device_hub',
        defaultOpen: true,
        children: [
          { key: 'node-mgmt', label: '節點管理' },
          { key: 'device-templates', label: '設備連線模板' },
        ],
      },
      {
        key: 'apps',
        label: '應用程式',
        icon: 'apps',
        children: [{ key: 'app-list', label: '應用列表' }],
      },
      {
        key: 'alerts',
        label: '告警管理',
        icon: 'notifications_active',
        children: [
          { key: 'alert-rules', label: '告警規則' },
          { key: 'alert-history', label: '告警歷史' },
        ],
      },
      { key: 'images', label: '映像檔', icon: 'note_stack' },
    ],
  },
  {
    key: 'ops',
    label: '維運助手',
    isSection: true,
    children: [
      {
        key: 'monitoring',
        label: '系統監控',
        icon: 'monitoring',
        children: [
          { key: 'machine-status', label: '機台監控' },
          { key: 'service-health', label: '服務健康度' },
        ],
      },
      { key: 'backup', label: '備份還原', icon: 'backup' },
    ],
  },
];

// ---------------------------------------------------------------------------
// Default — 內建 collapsed state、含 FeatureTitle CTA
// ---------------------------------------------------------------------------

const DefaultDemo: React.FC = () => {
  const [activeKey, setActiveKey] = useState('node-mgmt');

  return (
    <AppShell
      appName="APP Name"
      userInitial="K"
      menuItems={demoMenuItems}
      activeKey={activeKey}
      onMenuItemClick={(key) => setActiveKey(key)}
      version="v1.2.0"
      breadcrumb={[
        { label: '節點管理', onClick: () => setActiveKey('node-mgmt') },
        { label: '節點清單' },
      ]}
      actions={
        <>
          <Button variant="text" color="secondary" size="s">
            取消
          </Button>
          <Button variant="contained" size="s">
            創建
          </Button>
        </>
      }
    >
      <Card variant="elevated">
        <h3 style={{ margin: '0 0 12px', color: 'var(--text-high)' }}>主內容區</h3>
        <p style={{ margin: 0, color: 'var(--text-medium)' }}>
          這是 AppShell 的主內容區。當前選中：
          <strong style={{ color: 'var(--primary)' }}>{activeKey}</strong>
        </p>
        <p style={{ color: 'var(--text-medium)', marginTop: 12 }}>
          點擊 NavigationBar 左側的漢堡按鈕可收折／展開 SideMenu。
        </p>
      </Card>
    </AppShell>
  );
};

export const Default: Story = { render: () => <DefaultDemo /> };

// ---------------------------------------------------------------------------
// CollapsedByDefault — 預設收折模式（80px icon-only）
// ---------------------------------------------------------------------------

const CollapsedByDefaultDemo: React.FC = () => {
  const [activeKey, setActiveKey] = useState('app-list');

  return (
    <AppShell
      appName="APP Name"
      menuItems={demoMenuItems}
      activeKey={activeKey}
      onMenuItemClick={(key) => setActiveKey(key)}
      version="v1.2.0"
      defaultCollapsed
      breadcrumb={[{ label: '應用列表' }]}
    >
      <Card variant="elevated">
        <h3 style={{ margin: '0 0 12px', color: 'var(--text-high)' }}>收折模式</h3>
        <p style={{ margin: 0, color: 'var(--text-medium)' }}>
          SideMenu 預設收折成 80px。Hover 模組會浮出 flyout 顯示子項目。
        </p>
      </Card>
    </AppShell>
  );
};

export const CollapsedByDefault: Story = {
  render: () => <CollapsedByDefaultDemo />,
};

// ---------------------------------------------------------------------------
// Controlled — 外部控制 collapsed（可搭配自家 state / route 等）
// ---------------------------------------------------------------------------

const ControlledDemo: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [activeKey, setActiveKey] = useState('alert-rules');

  return (
    <AppShell
      appName="APP Name"
      menuItems={demoMenuItems}
      activeKey={activeKey}
      onMenuItemClick={(key) => setActiveKey(key)}
      version="v1.2.0"
      collapsed={collapsed}
      onCollapsedChange={setCollapsed}
      breadcrumb={[
        { label: '告警管理', onClick: () => setActiveKey('alerts') },
        { label: '告警規則' },
      ]}
      actions={
        <Button variant="contained" size="s">
          新增規則
        </Button>
      }
    >
      <Card variant="elevated">
        <h3 style={{ margin: '0 0 12px', color: 'var(--text-high)' }}>受控 collapsed</h3>
        <p style={{ margin: 0, color: 'var(--text-medium)' }}>
          collapsed = <strong>{String(collapsed)}</strong>
        </p>
        <Button
          variant="outlined"
          size="s"
          style={{ marginTop: 12 }}
          onClick={() => setCollapsed((v) => !v)}
        >
          外部切換 SideMenu
        </Button>
      </Card>
    </AppShell>
  );
};

export const Controlled: Story = { render: () => <ControlledDemo /> };

// ---------------------------------------------------------------------------
// DarkMode
// ---------------------------------------------------------------------------

const DarkModeDemo: React.FC = () => {
  const [activeKey, setActiveKey] = useState('node-mgmt');

  return (
    <div data-theme="dark">
      <AppShell
        appName="APP Name"
        menuItems={demoMenuItems}
        activeKey={activeKey}
        onMenuItemClick={(key) => setActiveKey(key)}
        version="v1.2.0"
        breadcrumb={[{ label: '節點管理' }, { label: '節點清單' }]}
        actions={
          <Button variant="contained" size="s">
            創建節點
          </Button>
        }
      >
        <Card variant="elevated">
          <h3 style={{ margin: '0 0 12px', color: 'var(--text-high)' }}>Dark Mode</h3>
          <p style={{ margin: 0, color: 'var(--text-medium)' }}>
            AppShell 自動套用 `data-theme="dark"` 下的 token 切換。
          </p>
        </Card>
      </AppShell>
    </div>
  );
};

export const DarkMode: Story = { render: () => <DarkModeDemo /> };
