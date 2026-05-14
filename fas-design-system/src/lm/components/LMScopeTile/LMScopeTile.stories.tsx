import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LMScopeTile } from './LMScopeTile';
import type { LMScopeTileStatus, LMScopeTileType } from './LMScopeTile';

/**
 * LMScopeTile — 方形 tile 按鈕，用於選擇整條產線或特定機台（多為 SMT 貼片機）。
 *
 * 燈號規則（顏色 + 形狀皆帶語意，符合色盲可讀性）：
 *   - 綠色圓形 ●  正常運行 / Running
 *   - 黃色三角 ▲  警告     / Warning
 *   - 紅色方形 ■  停機     / Down
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
    const [selected, setSelected] = useState('yamaha-01');
    return (
      <Frame>
        <LMScopeTile
          type="machine"
          label="Yamaha YSM20R #01"
          status="normal"
          selected={selected === 'yamaha-01'}
          onClick={() => setSelected('yamaha-01')}
        />
        <LMScopeTile
          type="machine"
          label="Panasonic NPM-W2 #02"
          status="warning"
          selected={selected === 'pana-02'}
          onClick={() => setSelected('pana-02')}
        />
        <LMScopeTile
          type="machine"
          label="Fuji NXT III #03"
          status="down"
          selected={selected === 'fuji-03'}
          onClick={() => setSelected('fuji-03')}
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
      <LMScopeTile type="machine" label="Yamaha YSM20R #01" status="normal" />
      <LMScopeTile type="machine" label="Panasonic NPM-W2 #02" status="warning" />
      <LMScopeTile type="machine" label="Fuji NXT III #03" status="down" />
    </Frame>
  ),
};

export const LocaleEn: Story = {
  name: 'Locale — English',
  render: () => (
    <Frame>
      <LMScopeTile type="line"    label="Line A"              status="normal"  locale="en" />
      <LMScopeTile type="machine" label="Yamaha YSM20R #01"   status="normal"  locale="en" />
      <LMScopeTile type="machine" label="Panasonic NPM-W2 #02" status="warning" locale="en" />
      <LMScopeTile type="machine" label="Fuji NXT III #03"    status="down"    locale="en" />
    </Frame>
  ),
};

export const SelectedComparison: Story = {
  name: 'Selected vs unselected',
  render: () => (
    <Frame>
      <LMScopeTile type="machine" label="Yamaha YSM20R #01" status="normal" />
      <LMScopeTile type="machine" label="Yamaha YSM20R #02" status="normal" selected />
    </Frame>
  ),
};

export const DisabledStates: Story = {
  render: () => (
    <Frame>
      <LMScopeTile type="machine" label="Yamaha YSM20R #01"   status="normal"  disabled />
      <LMScopeTile type="machine" label="Panasonic NPM-W2 #02" status="warning" disabled />
      <LMScopeTile type="machine" label="Fuji NXT III #03"    status="down"    disabled />
    </Frame>
  ),
};

export const LongLabelTruncation: Story = {
  name: 'Long label — ellipsis',
  render: () => (
    <Frame>
      <LMScopeTile type="machine" label="ASM SIPLACE SX2 高速貼片機 #001-Production" status="normal" />
      <LMScopeTile type="line"    label="第一電子三廠 SMT 產線 A-12"                   status="warning" selected />
    </Frame>
  ),
};

export const Grid: Story = {
  name: 'Grid layout — 多 tile 並排',
  render: () => {
    const items: { key: string; type: LMScopeTileType; label: string; status: LMScopeTileStatus }[] = [
      { key: 'line-a',   type: 'line',    label: '產線 A',                 status: 'normal'  },
      { key: 'line-b',   type: 'line',    label: '產線 B',                 status: 'warning' },
      { key: 'yamaha-1', type: 'machine', label: 'Yamaha YSM20R #01',      status: 'normal'  },
      { key: 'pana-2',   type: 'machine', label: 'Panasonic NPM-W2 #02',   status: 'warning' },
      { key: 'fuji-3',   type: 'machine', label: 'Fuji NXT III #03',       status: 'down'    },
      { key: 'asm-4',    type: 'machine', label: 'ASM SIPLACE SX2 #04',    status: 'normal'  },
      { key: 'juki-5',   type: 'machine', label: 'Juki RX-7R #05',         status: 'normal'  },
      { key: 'hanwha-6', type: 'machine', label: 'Hanwha SM482 #06',       status: 'down'    },
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
