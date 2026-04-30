import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { RepeatableList, RepeatableItem } from './RepeatableList';
import { Card } from '../../components/Card/Card';
import { TextField, TextArea } from '../../components/TextField/TextField';
import { Select } from '../../components/Select/Select';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { Icon } from '../../components/Icon/Icon';

/**
 * RepeatableList — 可動態新增 / 刪除的 form 列表樣板。
 *
 * 兩種 UX 模式（由 `itemStyle` 切換）：
 *   - `inline`（預設）— 項目緊密排列、共用一張外層 Card。適合簡單的 Key/Value、path→path 等
 *   - `card` — 每個項目**自成一張獨立 card**，沒有外層容器；空狀態時只剩 Add 按鈕
 *
 * Stories 以 UX 模式命名（`Inline*` / `Cards*`），而非功能名稱。
 */
const meta: Meta<typeof RepeatableList> = {
  title: 'Core/Templates/RepeatableList',
  component: RepeatableList,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
};

export default meta;
type Story = StoryObj<typeof RepeatableList>;

const formCardStyle: React.CSSProperties = { background: 'var(--elevation-02dp)' };

/** inline 模式專用 — 含外層 Card 的 frame */
const InlineFrame: React.FC<{ children: React.ReactNode; width?: number }> = ({ children, width = 720 }) => (
  <div style={{ width, padding: 24, background: 'var(--bg-surface-dim)' }}>
    <Card variant="outlined" style={formCardStyle}>
      <div style={{ padding: 24 }}>{children}</div>
    </Card>
  </div>
);

/** card 模式專用 — 無外層 Card，模擬 FormSection 右欄的背景 */
const CardFrame: React.FC<{ children: React.ReactNode; width?: number }> = ({ children, width = 960 }) => (
  <div style={{ width, padding: 24, background: 'var(--bg-surface-dim)' }}>
    {children}
  </div>
);

let uid = 1;

// ===========================================================================
// Inline 模式 —— 項目間用間距分隔、共用一張外層 Card
// ===========================================================================

// ---------------------------------------------------------------------------
// InlineKeyValue — 最簡單的兩欄：Key / Value
// ---------------------------------------------------------------------------

interface KV { id: number; key: string; value: string; }

const InlineKeyValueDemo: React.FC = () => {
  const [vars, setVars] = useState<KV[]>([
    { id: uid++, key: 'HANDLE_NAMESPACE', value: '' },
    { id: uid++, key: '', value: '' },
  ]);

  return (
    <InlineFrame>
      <RepeatableList
        addLabel="Add"
        onAdd={() => setVars((v) => [...v, { id: uid++, key: '', value: '' }])}
      >
        {vars.map((v) => (
          <RepeatableItem
            key={v.id}
            onRemove={() => setVars((prev) => prev.filter((x) => x.id !== v.id))}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <TextField
                placeholder="Key"
                value={v.key}
                onChange={(val) => setVars((prev) => prev.map((x) => x.id === v.id ? { ...x, key: val } : x))}
              />
              <TextField
                placeholder="Value"
                value={v.value}
                onChange={(val) => setVars((prev) => prev.map((x) => x.id === v.id ? { ...x, value: val } : x))}
              />
            </div>
          </RepeatableItem>
        ))}
      </RepeatableList>
    </InlineFrame>
  );
};

export const InlineKeyValue: Story = { render: () => <InlineKeyValueDemo /> };

// ---------------------------------------------------------------------------
// InlineWithConnector — 兩個欄位之間有 →，示範 children 可自由排版
// ---------------------------------------------------------------------------

interface Mount { id: number; internal: string; host: string; }

const InlineWithConnectorDemo: React.FC = () => {
  const [mounts, setMounts] = useState<Mount[]>([
    { id: uid++, internal: '/mnt/nfs/app/', host: '' },
  ]);

  return (
    <InlineFrame>
      <RepeatableList
        addLabel="Add"
        onAdd={() => setMounts((ms) => [...ms, { id: uid++, internal: '', host: '' }])}
      >
        {mounts.map((m) => (
          <RepeatableItem
            key={m.id}
            onRemove={() => setMounts((prev) => prev.filter((x) => x.id !== m.id))}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto 1fr', alignItems: 'end', gap: 8 }}>
              <TextField
                label="Internal path"
                required
                placeholder="/ a/b/c"
                value={m.internal}
                onChange={(v) => setMounts((prev) => prev.map((x) => x.id === m.id ? { ...x, internal: v } : x))}
              />
              <div style={{ paddingBottom: 10, color: 'var(--text-medium)' }}>
                <Icon name="arrow_forward" />
              </div>
              <TextField
                label="Host path"
                required
                placeholder="/ a/b/c"
                value={m.host}
                onChange={(v) => setMounts((prev) => prev.map((x) => x.id === m.id ? { ...x, host: v } : x))}
              />
            </div>
          </RepeatableItem>
        ))}
      </RepeatableList>
    </InlineFrame>
  );
};

export const InlineWithConnector: Story = { render: () => <InlineWithConnectorDemo /> };

// ---------------------------------------------------------------------------
// InlineEmpty — 列表為空時只顯示 Add 按鈕（inline 模式）
// ---------------------------------------------------------------------------

const InlineEmptyDemo: React.FC = () => {
  const [items, setItems] = useState<number[]>([]);
  return (
    <InlineFrame>
      <RepeatableList
        addLabel="Add"
        onAdd={() => setItems((xs) => [...xs, uid++])}
      >
        {items.map((id) => (
          <RepeatableItem key={id} onRemove={() => setItems((xs) => xs.filter((x) => x !== id))}>
            <TextField placeholder="Enter value" />
          </RepeatableItem>
        ))}
      </RepeatableList>
    </InlineFrame>
  );
};

export const InlineEmpty: Story = { render: () => <InlineEmptyDemo /> };

// ===========================================================================
// Cards 模式 —— 每個 item 自帶 card 樣式，空狀態無卡片
// ===========================================================================

// ---------------------------------------------------------------------------
// CardsHorizontal — 每張卡片內多個欄位水平排列（密集 form）
// ---------------------------------------------------------------------------

interface Port { id: number; name: string; protocol: string; internalPort: string; externalPort: string; }

const protocolOpts = [
  { value: 'tcp', label: 'TCP' },
  { value: 'udp', label: 'UDP' },
  { value: 'http', label: 'HTTP' },
];

const CardsHorizontalDemo: React.FC = () => {
  const [ports, setPorts] = useState<Port[]>([]);

  const addPort = () => setPorts((ps) => [
    ...ps,
    { id: uid++, name: '', protocol: '', internalPort: '', externalPort: '' },
  ]);
  const removePort = (id: number) => setPorts((ps) => ps.filter((p) => p.id !== id));
  const updatePort = (id: number, patch: Partial<Port>) =>
    setPorts((ps) => ps.map((p) => p.id === id ? { ...p, ...patch } : p));

  return (
    <CardFrame>
      <RepeatableList addLabel="Add port" onAdd={addPort} itemStyle="card">
        {ports.map((p) => (
          <RepeatableItem
            key={p.id}
            onRemove={() => removePort(p.id)}
            removeLabel="Remove port"
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 12 }}>
              <TextField
                label="Port name"
                required
                placeholder="Please enter"
                value={p.name}
                onChange={(v) => updatePort(p.id, { name: v })}
                helperText="Only lowercase letters, numbers, and hyphens (-) are allowed."
              />
              <Select
                label="Protocol"
                required
                placeholder="Please select"
                options={protocolOpts}
                value={p.protocol}
                onChange={(v) => updatePort(p.id, { protocol: v as string })}
              />
              <TextField
                label="Internal port"
                required
                placeholder="Please enter"
                value={p.internalPort}
                onChange={(v) => updatePort(p.id, { internalPort: v })}
              />
              <TextField
                label="External port"
                required
                placeholder="Please enter"
                value={p.externalPort}
                onChange={(v) => updatePort(p.id, { externalPort: v })}
              />
            </div>
          </RepeatableItem>
        ))}
      </RepeatableList>
    </CardFrame>
  );
};

export const CardsHorizontal: Story = { render: () => <CardsHorizontalDemo /> };

// ---------------------------------------------------------------------------
// CardsStacked — 每張卡片內欄位垂直堆疊（複雜 form，含 TextArea 等）
// ---------------------------------------------------------------------------

interface ConfigItem { id: number; path: string; value: string; readOnly: boolean; }

const CardsStackedDemo: React.FC = () => {
  const [items, setItems] = useState<ConfigItem[]>([]);

  const update = (id: number, patch: Partial<ConfigItem>) =>
    setItems((prev) => prev.map((x) => x.id === id ? { ...x, ...patch } : x));

  return (
    <CardFrame>
      <RepeatableList
        addLabel="Add"
        onAdd={() => setItems((xs) => [...xs, { id: uid++, path: '', value: '', readOnly: false }])}
        itemStyle="card"
      >
        {items.map((it) => (
          <RepeatableItem
            key={it.id}
            onRemove={() => setItems((prev) => prev.filter((x) => x.id !== it.id))}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 16, alignItems: 'center' }}>
                <TextField
                  label="Document full path"
                  required
                  placeholder="/ abc/def/xyz"
                  value={it.path}
                  onChange={(v) => update(it.id, { path: v })}
                />
                <div style={{ paddingTop: 22 }}>
                  <Checkbox
                    label="Read only"
                    checked={it.readOnly}
                    onChange={(v) => update(it.id, { readOnly: v })}
                  />
                </div>
              </div>
              <TextArea
                label="Value"
                required
                placeholder="請輸入"
                value={it.value}
                onChange={(v) => update(it.id, { value: v })}
                rows={6}
              />
            </div>
          </RepeatableItem>
        ))}
      </RepeatableList>
    </CardFrame>
  );
};

export const CardsStacked: Story = { render: () => <CardsStackedDemo /> };
