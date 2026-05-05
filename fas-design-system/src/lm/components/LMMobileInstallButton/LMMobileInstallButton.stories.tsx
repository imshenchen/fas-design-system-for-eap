import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LMMobileInstallButton } from './LMMobileInstallButton';

/**
 * LMMobileInstallButton — 安裝 Mobile 版本的 trigger 按鈕。
 *
 * - 點擊浮出 popover 顯示 QR Code
 * - QR Code 由 caller 提供（`<img>` 或 SVG）
 * - 通常放在 LMAppShell 的 SideMenu 版本號右側
 */
const meta: Meta<typeof LMMobileInstallButton> = {
  title: 'LM/Components/LMMobileInstallButton',
  component: LMMobileInstallButton,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof LMMobileInstallButton>;

// 範例 QR Code 圖（純占位，實際由 caller 帶入真實 QR）
const PlaceholderQR: React.FC = () => (
  <div
    style={{
      width:           '160px',
      height:          '160px',
      background:      `repeating-linear-gradient(
        45deg,
        var(--text-high),
        var(--text-high) 4px,
        var(--bg-surface) 4px,
        var(--bg-surface) 8px
      )`,
      borderRadius:    '4px',
    }}
    role="img"
    aria-label="範例 QR Code"
  />
);

export const Default: Story = {
  render: () => (
    <div style={{ padding: 80, background: 'var(--bg-surface-dim)' }}>
      <LMMobileInstallButton qrCode={<PlaceholderQR />} />
    </div>
  ),
};

export const CustomTitleAndDescription: Story = {
  name: 'Custom title + description',
  render: () => (
    <div style={{ padding: 80, background: 'var(--bg-surface-dim)' }}>
      <LMMobileInstallButton
        qrCode={<PlaceholderQR />}
        title="下載 Delta LM Mobile"
        description="使用裝置內建相機掃描 QR Code，即可下載 iOS / Android 版本"
      />
    </div>
  ),
};

export const InSideMenuFooter: Story = {
  name: 'In SideMenu footer (visual context)',
  render: () => (
    <div style={{
      width:        280,
      background:   'var(--bg-surface)',
      border:       '1px solid var(--card-outlined)',
      borderRadius: 8,
      padding:      8,
      marginTop:    400,  // push down so popover (above trigger) is visible in canvas
    }}>
      <div style={{ height: 1, background: 'var(--divider)', marginBottom: 4 }} />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <div style={{
          flex:           1,
          display:        'flex',
          alignItems:     'center',
          gap:            12,
          padding:        '8px 12px',
          color:          'var(--primary)',
          fontSize:       13,
          fontFamily:     '"Noto Sans TC", sans-serif',
        }}>
          <span className="material-symbols-outlined">deployed_code</span>
          v1.2.0
        </div>
        <span style={{ paddingRight: 8 }}>
          <LMMobileInstallButton qrCode={<PlaceholderQR />} />
        </span>
      </div>
    </div>
  ),
};
