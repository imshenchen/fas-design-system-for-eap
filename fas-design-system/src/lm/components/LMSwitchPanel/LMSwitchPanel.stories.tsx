import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { LMSwitchPanel } from './LMSwitchPanel';
import type { LMSwitchPanelItem } from './LMSwitchPanel';
import { LMQuadrantSelector } from '../LMQuadrantSelector/LMQuadrantSelector';
import type { LMQuadrantKey } from '../LMQuadrantSelector/LMQuadrantSelector';

/**
 * LMSwitchPanel — 內容區塊頂部的 scope 切換列。
 *
 * - 由左至右排列 `LMScopeTile`，點選切換 scope
 * - 每顆 tile：三色三形狀燈號 + 類型 caption（產線 / 設備）+ 名稱
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
  { key: 'line-a',   label: '產線 A',               type: 'line',    status: 'normal'  },
  { key: 'yamaha-1', label: 'Yamaha YSM20R #01',    type: 'machine', status: 'normal'  },
  { key: 'pana-2',   label: 'Panasonic NPM-W2 #02', type: 'machine', status: 'warning' },
  { key: 'fuji-3',   label: 'Fuji NXT III #03',     type: 'machine', status: 'down'    },
];

const Frame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ padding: 32, background: 'var(--bg-surface-dim)', minHeight: '100vh' }}>
    {children}
    <div style={{ marginTop: 24, color: 'var(--text-medium)' }}>
      （示意：下方為主內容；切換上方 tile 會帶動主內容載入對應 scope 的資料）
    </div>
  </div>
);

const QuadrantDemo: React.FC = () => {
  const [zones, setZones] = useState<LMQuadrantKey[]>(['topLeft']);
  return <LMQuadrantSelector value={zones} onChange={setZones} size={52} />;
};

export const Default: Story = {
  render: () => {
    const [scope, setScope] = useState('line-a');
    return (
      <Frame>
        <LMSwitchPanel
          items={SAMPLE_ITEMS}
          value={scope}
          onChange={setScope}
          rightSlot={<QuadrantDemo />}
        />
      </Frame>
    );
  },
};

export const NoRightSlot: Story = {
  name: 'No rightSlot — without quadrant',
  render: () => {
    const [scope, setScope] = useState('line-a');
    return (
      <Frame>
        <LMSwitchPanel
          items={SAMPLE_ITEMS}
          value={scope}
          onChange={setScope}
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
      { key: 'asm-4',     label: 'ASM SIPLACE SX2 #04', type: 'machine', status: 'normal'  },
      { key: 'juki-5',    label: 'Juki RX-7R #05',      type: 'machine', status: 'warning' },
      { key: 'hanwha-6',  label: 'Hanwha SM482 #06',    type: 'machine', status: 'normal'  },
      { key: 'yamaha-7',  label: 'Yamaha YS12 #07',     type: 'machine', status: 'down'    },
      { key: 'pana-8',    label: 'Panasonic NPM-D3 #08', type: 'machine', status: 'normal'  },
      { key: 'fuji-9',    label: 'Fuji AIMEX III #09',  type: 'machine', status: 'down'    },
    ];
    const [scope, setScope] = useState('line-a');
    return (
      <Frame>
        <LMSwitchPanel items={items} value={scope} onChange={setScope} />
      </Frame>
    );
  },
};

export const NarrowContainer: Story = {
  name: 'Narrow container — overflow into More menu',
  render: () => {
    const items: LMSwitchPanelItem[] = [
      ...SAMPLE_ITEMS,
      { key: 'asm-4',    label: 'ASM SIPLACE SX2 #04', type: 'machine', status: 'normal'  },
      { key: 'juki-5',   label: 'Juki RX-7R #05',      type: 'machine', status: 'warning' },
      { key: 'hanwha-6', label: 'Hanwha SM482 #06',    type: 'machine', status: 'normal'  },
      { key: 'yamaha-7', label: 'Yamaha YS12 #07',     type: 'machine', status: 'down'    },
    ];
    const [scope, setScope] = useState('line-a');
    return (
      <div style={{ padding: 32, background: 'var(--bg-surface-dim)', minHeight: '100vh' }}>
        <div style={{ width: 720, maxWidth: '100%' }}>
          <LMSwitchPanel items={items} value={scope} onChange={setScope} />
        </div>
        <div style={{ marginTop: 24, color: 'var(--text-medium)' }}>
          （容器寬 720px，無法放下所有 8 顆 tile → tail-end 自動收進 More 按鈕）
        </div>
      </div>
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
      { key: 'a', label: 'Yamaha YSM20R #01',    type: 'machine', status: 'normal'  },
      { key: 'b', label: 'Panasonic NPM-W2 #02', type: 'machine', status: 'warning' },
      { key: 'c', label: 'Fuji NXT III #03',     type: 'machine', status: 'down'    },
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
      { key: 'line-a',   label: '產線 A',               type: 'line',    status: 'normal'  },
      { key: 'line-b',   label: '產線 B',               type: 'line',    status: 'warning' },
      { key: 'yamaha-1', label: 'Yamaha YSM20R #01',    type: 'machine', status: 'normal'  },
      { key: 'pana-2',   label: 'Panasonic NPM-W2 #02', type: 'machine', status: 'down'    },
    ];
    const [scope, setScope] = useState('line-a');
    return (
      <Frame>
        <LMSwitchPanel items={items} value={scope} onChange={setScope} />
      </Frame>
    );
  },
};

export const LocaleEn: Story = {
  name: 'Locale — English',
  render: () => {
    const items: LMSwitchPanelItem[] = [
      { key: 'line-a',   label: 'Line A',               type: 'line',    status: 'normal'  },
      { key: 'yamaha-1', label: 'Yamaha YSM20R #01',    type: 'machine', status: 'normal'  },
      { key: 'pana-2',   label: 'Panasonic NPM-W2 #02', type: 'machine', status: 'warning' },
      { key: 'fuji-3',   label: 'Fuji NXT III #03',     type: 'machine', status: 'down'    },
    ];
    const [scope, setScope] = useState('line-a');
    return (
      <Frame>
        <LMSwitchPanel items={items} value={scope} onChange={setScope} locale="en" />
      </Frame>
    );
  },
};
