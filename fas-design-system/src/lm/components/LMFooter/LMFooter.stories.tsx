import type { Meta, StoryObj } from '@storybook/react';
import { LMFooter } from './LMFooter';

/**
 * LMFooter — LM 專案功能內容區塊底部的固定操作列。
 *
 * - 左側：Help（text button），點擊開啟說明 / 文件
 * - 右側：上一步（outlined）+ 下一步（contained primary）
 * - 透過 `position:sticky; bottom:0` 釘在 scroll 容器底部
 *
 * Wizard 第一步可省略 `onPrev`，最後一步可把 `nextLabel` 改成「完成」/「送出」。
 */
const meta: Meta<typeof LMFooter> = {
  title: 'LM/Components/LMFooter',
  component: LMFooter,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof LMFooter>;

const Frame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      height: '360px',
      background: 'var(--bg-surface-dim)',
    }}
  >
    <div style={{ flex: 1, padding: 32, overflow: 'auto' }}>
      <p style={{ color: 'var(--text-medium)' }}>
        （示意：功能內容區塊。LMFooter 釘在 scroll 容器底部）
      </p>
    </div>
    {children}
  </div>
);

export const Default: Story = {
  render: () => (
    <Frame>
      <LMFooter
        onHelp={() => alert('open help')}
        onPrev={() => alert('prev')}
        onNext={() => alert('next')}
      />
    </Frame>
  ),
};

export const FirstStep: Story = {
  name: 'Wizard — first step (no prev)',
  render: () => (
    <Frame>
      <LMFooter onHelp={() => {}} onNext={() => {}} />
    </Frame>
  ),
};

export const LastStep: Story = {
  name: 'Wizard — last step (submit)',
  render: () => (
    <Frame>
      <LMFooter
        onHelp={() => {}}
        onPrev={() => {}}
        onNext={() => {}}
        nextLabel="完成"
      />
    </Frame>
  ),
};

export const NextLoading: Story = {
  render: () => (
    <Frame>
      <LMFooter onHelp={() => {}} onPrev={() => {}} onNext={() => {}} nextLoading />
    </Frame>
  ),
};

export const NextDisabled: Story = {
  render: () => (
    <Frame>
      <LMFooter onHelp={() => {}} onPrev={() => {}} onNext={() => {}} nextDisabled />
    </Frame>
  ),
};
