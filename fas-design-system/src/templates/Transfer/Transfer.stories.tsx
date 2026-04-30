import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Transfer } from './Transfer';
import type { TransferOption } from './Transfer';
import { Dialog } from '../../components/Dialog/Dialog';
import { Button } from '../../components/Button/Button';

/**
 * Transfer — 雙欄選擇器樣板。
 *
 * 兩側可獨立開啟搜尋、可全選；不可選項目以 disabled 狀態顯示但仍出現在列表上；
 * 每個 option 可帶 chip 顯示額外資訊（如同步狀態、版本）；空狀態以插畫提示。
 *
 * 典型情境：
 *   - 「註冊設備」對話框：把可用設備從左側加入右側
 *   - 權限授予：把成員從未授權搬到已授權
 *   - 任何「從候選池中挑選一組值」的場景
 */
const meta: Meta<typeof Transfer> = {
  title: 'Core/Templates/Transfer',
  component: Transfer,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof Transfer>;

const Frame: React.FC<{ children: React.ReactNode; width?: number }> = ({
  children,
  width = 960,
}) => (
  <div style={{ width, padding: 24, background: 'var(--bg-surface-dim-var)' }}>
    {children}
  </div>
);

const deviceOptions: TransferOption[] = [
  { value: 'aoi-002', label: 'AOI檢測機002' },
  { value: 'cnc-002', label: 'CNC切割機002' },
  { value: 'smt-002', label: 'SMT貼片機002' },
  { value: 'laser-001', label: 'LASER雷射雕刻機001' },
  { value: 'laser-002', label: 'LASER雷射雕刻機002', chip: { label: '未啟用同步', status: 'idle' } },
  { value: 'loader-001', label: 'LOADER001' },
  { value: 'loader-002', label: 'LOADER002', chip: { label: '未啟用同步', status: 'idle' } },
  { value: 'dispender-001', label: 'DISPENDER點膠機001' },
  { value: 'aoi-003', label: 'AOI檢測機003' },
  { value: 'cnc-003', label: 'CNC切割機003' },
];

// ───────────────────────────────────────────────────────────────────────────
// Default — 兩側都有搜尋、可全選、含 chip 與 disabled 範例
// ───────────────────────────────────────────────────────────────────────────

const DefaultDemo: React.FC = () => {
  const [value, setValue] = useState<string[]>(['loader-001', 'dispender-001']);
  return (
    <Frame>
      <Transfer
        options={deviceOptions}
        value={value}
        onChange={setValue}
        searchable
        sourceSearchPlaceholder="搜尋設備"
        targetSearchPlaceholder="搜尋已加入"
      />
    </Frame>
  );
};

export const Default: Story = { render: () => <DefaultDemo /> };

// ───────────────────────────────────────────────────────────────────────────
// SearchOnSourceOnly — 僅左欄顯示搜尋
// ───────────────────────────────────────────────────────────────────────────

const SearchOnSourceOnlyDemo: React.FC = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <Frame>
      <Transfer
        options={deviceOptions}
        value={value}
        onChange={setValue}
        searchable={{ source: true, target: false }}
        sourceSearchPlaceholder="搜尋設備"
      />
    </Frame>
  );
};

export const SearchOnSourceOnly: Story = { render: () => <SearchOnSourceOnlyDemo /> };

// ───────────────────────────────────────────────────────────────────────────
// NoSearch — 兩側都關閉搜尋（短列表）
// ───────────────────────────────────────────────────────────────────────────

const NoSearchDemo: React.FC = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <Frame width={720}>
      <Transfer
        options={deviceOptions.slice(0, 5)}
        value={value}
        onChange={setValue}
      />
    </Frame>
  );
};

export const NoSearch: Story = { render: () => <NoSearchDemo /> };

// ───────────────────────────────────────────────────────────────────────────
// EmptyStates — 空狀態（左欄無項目、右欄尚未加入）
// ───────────────────────────────────────────────────────────────────────────

const EmptyStatesDemo: React.FC = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <Frame>
      <Transfer
        options={[]}
        value={value}
        onChange={setValue}
        searchable
      />
    </Frame>
  );
};

export const EmptyStates: Story = { render: () => <EmptyStatesDemo /> };

// ───────────────────────────────────────────────────────────────────────────
// WithDisabled — 含 disabled 項目（仍顯示但不可勾選）
// ───────────────────────────────────────────────────────────────────────────

const disabledOptions: TransferOption[] = [
  { value: 'usr-001', label: 'Alice Chen' },
  { value: 'usr-002', label: 'Bob Wang', disabled: true, chip: { label: '已停用', status: 'idle' } },
  { value: 'usr-003', label: 'Carol Lin' },
  { value: 'usr-004', label: 'David Liu', disabled: true, chip: { label: '無權限', status: 'error' } },
  { value: 'usr-005', label: 'Eva Hsu' },
  { value: 'usr-006', label: 'Frank Wu' },
];

const WithDisabledDemo: React.FC = () => {
  const [value, setValue] = useState<string[]>(['usr-005']);
  return (
    <Frame>
      <Transfer
        options={disabledOptions}
        value={value}
        onChange={setValue}
        searchable
        sourceTitle="可用成員"
        targetTitle="已選"
        forwardLabel="授權"
        backwardLabel="撤回"
      />
    </Frame>
  );
};

export const WithDisabled: Story = { render: () => <WithDisabledDemo /> };

// ───────────────────────────────────────────────────────────────────────────
// WithChips — option 帶 chip 顯示版本 / 狀態
// ───────────────────────────────────────────────────────────────────────────

const versionOptions: TransferOption[] = [
  { value: 'app-1', label: 'EAP Core', chip: { label: 'v2.1.0', status: 'processing' } },
  { value: 'app-2', label: 'DIA Insight', chip: { label: 'v1.4.2', status: 'success' } },
  { value: 'app-3', label: 'Edge Agent', chip: { label: '需升級', status: 'warning' } },
  { value: 'app-4', label: 'Vision Inspector', chip: { label: 'v3.0.0', status: 'processing' } },
  { value: 'app-5', label: 'Legacy MES', chip: { label: '已停止維護', status: 'error' } },
];

const WithChipsDemo: React.FC = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <Frame>
      <Transfer
        options={versionOptions}
        value={value}
        onChange={setValue}
        searchable
        sourceTitle="可部署應用"
        targetTitle="已選"
      />
    </Frame>
  );
};

export const WithChips: Story = { render: () => <WithChipsDemo /> };

// ───────────────────────────────────────────────────────────────────────────
// HiddenSelectAll — 關閉全選列（純清單）
// ───────────────────────────────────────────────────────────────────────────

const HiddenSelectAllDemo: React.FC = () => {
  const [value, setValue] = useState<string[]>([]);
  return (
    <Frame width={720}>
      <Transfer
        options={deviceOptions.slice(0, 6)}
        value={value}
        onChange={setValue}
        showSelectAll={false}
      />
    </Frame>
  );
};

export const HiddenSelectAll: Story = { render: () => <HiddenSelectAllDemo /> };

// ───────────────────────────────────────────────────────────────────────────
// InDialog — 在 Dialog 中使用（重現 Figma「註冊設備」對話框）
// ───────────────────────────────────────────────────────────────────────────

const InDialogDemo: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string[]>([]);
  const [draft, setDraft] = useState<string[]>([]);

  return (
    <div style={{ padding: 24 }}>
      <Button
        variant="contained"
        onClick={() => {
          setDraft(value);
          setOpen(true);
        }}
      >
        註冊設備
      </Button>
      <div style={{ marginTop: 16, color: 'var(--text-medium)', fontSize: 13 }}>
        已註冊：{value.length === 0 ? '（尚未選擇）' : value.join(', ')}
      </div>
      <Dialog
        open={open}
        title="註冊設備"
        size="lg"
        onClose={() => setOpen(false)}
        actions={
          <>
            <Button variant="text" color="secondary" onClick={() => setOpen(false)}>
              取消
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                setValue(draft);
                setOpen(false);
              }}
            >
              儲存
            </Button>
          </>
        }
      >
        <Transfer
          options={deviceOptions}
          value={draft}
          onChange={setDraft}
          searchable={{ source: true, target: false }}
          sourceSearchPlaceholder="搜尋設備"
        />
      </Dialog>
    </div>
  );
};

export const InDialog: Story = {
  parameters: { layout: 'fullscreen' },
  render: () => <InDialogDemo />,
};
