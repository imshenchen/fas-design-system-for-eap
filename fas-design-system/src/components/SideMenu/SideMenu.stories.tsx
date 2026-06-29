import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SideMenu, SideNavItem } from './SideMenu';
import { NavigationBar } from '../NavigationBar/NavigationBar';

const meta: Meta<typeof SideMenu> = {
  title: 'Core/Layout/SideMenu',
  component: SideMenu,
  parameters: {
    layout: 'fullscreen',
  },
};
export default meta;
type Story = StoryObj<typeof SideMenu>;

const demoItems: SideNavItem[] = [
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
        key: 'data-processing',
        label: '數據處理',
        icon: 'analytics',
        children: [
          { key: 'pipelines', label: '資料管線' },
          { key: 'transforms', label: '資料轉換' },
        ],
      },
      {
        key: 'low-code',
        label: '低代碼工具',
        icon: 'code',
        children: [
          { key: 'flows', label: '流程設計' },
        ],
      },
      {
        key: 'apps',
        label: '應用程式',
        icon: 'apps',
        children: [
          { key: 'app-list', label: '應用列表' },
        ],
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
      {
        key: 'ai-service',
        label: 'AI服務',
        icon: 'auto_awesome',
        children: [
          { key: 'ai-models', label: '模型管理' },
        ],
      },
      {
        key: 'logs',
        label: '日誌',
        icon: 'description',
        children: [
          { key: 'system-logs', label: '系統日誌' },
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
      {
        key: 'tickets',
        label: '工單管理',
        icon: 'assignment',
        children: [
          { key: 'ticket-list', label: '工單列表' },
          { key: 'maintenance-schedule', label: '維修排程' },
        ],
      },
      { key: 'backup', label: '備份還原', icon: 'backup' },
    ],
  },
];

export const Default: Story = {
  args: {
    items: demoItems,
    activeKey: 'node-mgmt',
    version: 'v1.2.0',
  },
  render: (args) => {
    const [activeKey, setActiveKey] = useState(args.activeKey);
    return (
      <div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
        <NavigationBar appName="APP Name" />
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          <SideMenu
            {...args}
            activeKey={activeKey}
            onItemClick={(key) => setActiveKey(key)}
          />
          <main
            style={{
              flex: 1,
              padding: 32,
              background: 'var(--bg-surface-dim)',
              overflow: 'auto',
            }}
          >
            <p style={{ color: 'var(--text-medium)', fontFamily: 'Roboto, sans-serif' }}>
              Active: <strong style={{ color: 'var(--primary)' }}>{activeKey}</strong>
            </p>
          </main>
        </div>
      </div>
    );
  },
};

export const Collapsed: Story = {
  args: {
    items: demoItems,
    activeKey: 'node-mgmt',
    collapsed: true,
    version: 'v1.2.0',
  },
  render: (args) => (
    <div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
      <NavigationBar appName="APP Name" />
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <SideMenu {...args} />
        <main
          style={{
            flex: 1,
            padding: 32,
            background: 'var(--bg-surface-dim)',
          }}
        />
      </div>
    </div>
  ),
};

export const CollapsedHidden: Story = {
  args: {
    items: demoItems,
    activeKey: 'node-mgmt',
    collapsed: true,
    collapsedMode: 'hidden',
    version: 'v1.2.0',
  },
  render: (args) => (
    <div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
      <NavigationBar appName="APP Name" />
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <SideMenu {...args} />
        <main
          style={{
            flex: 1,
            padding: 32,
            background: 'var(--bg-surface-dim)',
            color: 'var(--text-medium)',
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          SideMenu is fully hidden (width: 0). Toggle <code>collapsedMode</code>{' '}
          to <code>'narrow'</code> in the Controls panel to switch to icon-only mode.
        </main>
      </div>
    </div>
  ),
};

export const WithToggle: Story = {
  args: {
    items: demoItems,
    activeKey: 'node-mgmt',
    version: 'v1.2.0',
  },
  render: (args) => {
    const [collapsed, setCollapsed] = useState(false);
    const [activeKey, setActiveKey] = useState(args.activeKey);
    return (
      <div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
        <NavigationBar
          appName="APP Name"
          onMenuToggle={() => setCollapsed((v) => !v)}
        />
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          <SideMenu
            {...args}
            collapsed={collapsed}
            activeKey={activeKey}
            onItemClick={(key) => setActiveKey(key)}
          />
          <main
            style={{
              flex: 1,
              padding: 32,
              background: 'var(--bg-surface-dim)',
              overflow: 'auto',
            }}
          >
            <p style={{ color: 'var(--text-medium)', fontFamily: 'Roboto, sans-serif' }}>
              Click the <strong>☰ hamburger</strong> button in the NavBar to toggle the side menu.
              <br />
              Active: <strong style={{ color: 'var(--primary)' }}>{activeKey}</strong>
            </p>
          </main>
        </div>
      </div>
    );
  },
};

export const DarkMode: Story = {
  args: {
    items: demoItems,
    activeKey: 'node-mgmt',
    version: 'v1.2.0',
  },
  render: (args) => {
    const [activeKey, setActiveKey] = useState(args.activeKey);
    return (
      <div data-theme="dark" style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
        <NavigationBar appName="APP Name" />
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          <SideMenu
            {...args}
            activeKey={activeKey}
            onItemClick={(key) => setActiveKey(key)}
          />
          <main
            style={{
              flex: 1,
              padding: 32,
              background: 'var(--bg-surface-dim)',
            }}
          />
        </div>
      </div>
    );
  },
};

/**
 * Corp 樣式：模組 `icon` 改用 Delta 企業圖示集（CorpIcon）。`icon` 值為 CorpIcon 名稱。
 * 版面與互動行為與 default 完全相同。
 */
const corpItems: SideNavItem[] = [
  {
    key: 'dev',
    label: '開發者工具',
    isSection: true,
    children: [
      {
        key: 'nodes',
        label: '節點',
        icon: 'node',
        defaultOpen: true,
        children: [
          { key: 'node-mgmt', label: '節點管理' },
          { key: 'device-templates', label: '設備連線模板' },
        ],
      },
      {
        key: 'data-processing',
        label: '數據處理',
        icon: 'data_processing',
        children: [
          { key: 'pipelines', label: '資料管線' },
          { key: 'transforms', label: '資料轉換' },
        ],
      },
      {
        key: 'low-code',
        label: '低代碼工具',
        icon: 'low_code_tool',
        children: [{ key: 'flows', label: '流程設計' }],
      },
      {
        key: 'apps',
        label: '應用程式',
        icon: 'application',
        children: [{ key: 'app-list', label: '應用列表' }],
      },
      {
        key: 'alerts',
        label: '告警管理',
        icon: 'alert_management',
        children: [
          { key: 'alert-rules', label: '告警規則' },
          { key: 'alert-history', label: '告警歷史' },
        ],
      },
      {
        key: 'ai-service',
        label: 'AI服務',
        icon: 'ai_service',
        children: [{ key: 'ai-models', label: '模型管理' }],
      },
      {
        key: 'logs',
        label: '日誌',
        icon: 'log',
        children: [{ key: 'system-logs', label: '系統日誌' }],
      },
      { key: 'images', label: '映像檔', icon: 'image_file' },
      { key: 'modules', label: '模組管理', icon: 'module' },
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
        icon: 'system_monitoring',
        children: [
          { key: 'machine-status', label: '機台監控' },
          { key: 'service-health', label: '服務健康度' },
        ],
      },
      { key: 'storage', label: '儲存空間', icon: 'storage_space' },
      { key: 'settings', label: '系統設定', icon: 'settings' },
    ],
  },
];

export const Corp: Story = {
  args: {
    variant: 'corp',
    items: corpItems,
    activeKey: 'node-mgmt',
    version: 'v1.2.0',
  },
  render: (args) => {
    const [activeKey, setActiveKey] = useState(args.activeKey);
    return (
      <div style={{ display: 'flex', height: '100vh', flexDirection: 'column' }}>
        <NavigationBar variant="corp" appName="設備自動化控制系統控制台" />
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          <SideMenu
            {...args}
            activeKey={activeKey}
            onItemClick={(key) => setActiveKey(key)}
          />
          <main
            style={{
              flex: 1,
              padding: 32,
              background: 'var(--bg-surface-dim)',
              overflow: 'auto',
            }}
          >
            <p style={{ color: 'var(--text-medium)', fontFamily: 'Roboto, sans-serif' }}>
              Active: <strong style={{ color: 'var(--primary)' }}>{activeKey}</strong>
            </p>
          </main>
        </div>
      </div>
    );
  },
};
