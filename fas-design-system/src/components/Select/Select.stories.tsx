import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Select } from './Select';
import type { SelectOption } from './Select';

const meta: Meta<typeof Select> = {
  title: 'Data Entry/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    style:         { control: 'select', options: ['outlined', 'underline'] },
    size:          { control: 'select', options: ['xl', 'l', 'm', 's', 'xs'] },
    labelPosition: { control: 'select', options: ['top', 'inline', 'left'] },
    multiple:      { control: 'boolean' },
    searchable:    { control: 'boolean' },
    disabled:      { control: 'boolean' },
    readOnly:      { control: 'boolean' },
    required:      { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof Select>;

const FRUITS: SelectOption[] = [
  { value: 'apple',      label: '蘋果 Apple' },
  { value: 'banana',     label: '香蕉 Banana' },
  { value: 'cherry',     label: '櫻桃 Cherry' },
  { value: 'durian',     label: '榴槤 Durian' },
  { value: 'elderberry', label: '接骨木 Elderberry' },
  { value: 'fig',        label: '無花果 Fig' },
  { value: 'grape',      label: '葡萄 Grape' },
  { value: 'honeydew',   label: '哈密瓜 Honeydew' },
  { value: 'kiwi',       label: '奇異果 Kiwi',     disabled: true },
  { value: 'lemon',      label: '檸檬 Lemon' },
];

/* ── Single (no search) ─────────────────────────────────────────────────────── */
export const Single: Story = {
  name: 'Single select',
  render: () => {
    const [val, setVal] = useState<string>('');
    return (
      <div style={{ width: 320 }}>
        <Select
          label="水果"
          options={FRUITS}
          value={val}
          onChange={(v) => setVal(v as string)}
          placeholder="請選擇一種水果"
          helperText={`目前選擇：${val || '(無)'}`}
        />
      </div>
    );
  },
};

/* ── Multiple (no search) ───────────────────────────────────────────────────── */
export const Multiple: Story = {
  name: 'Multi select',
  render: () => {
    const [val, setVal] = useState<string[]>(['apple', 'cherry']);
    return (
      <div style={{ width: 420 }}>
        <Select
          label="喜歡的水果（可多選）"
          options={FRUITS}
          value={val}
          onChange={(v) => setVal(v as string[])}
          multiple
          placeholder="請選擇多種水果"
          helperText={`已選 ${val.length} 項`}
        />
      </div>
    );
  },
};

/* ── Single + searchable ────────────────────────────────────────────────────── */
export const SingleSearchable: Story = {
  name: 'Single + searchable',
  render: () => {
    const [val, setVal] = useState<string>('');
    return (
      <div style={{ width: 320 }}>
        <Select
          label="搜尋選擇"
          options={FRUITS}
          value={val}
          onChange={(v) => setVal(v as string)}
          searchable
          placeholder="輸入文字搜尋"
        />
      </div>
    );
  },
};

/* ── Multi + searchable ─────────────────────────────────────────────────────── */
export const MultiSearchable: Story = {
  name: 'Multi + searchable',
  render: () => {
    const [val, setVal] = useState<string[]>([]);
    return (
      <div style={{ width: 480 }}>
        <Select
          label="搜尋多選"
          options={FRUITS}
          value={val}
          onChange={(v) => setVal(v as string[])}
          multiple
          searchable
          placeholder="輸入文字搜尋，勾選加入"
        />
      </div>
    );
  },
};

/* ── Single + searchable + creatable ────────────────────────────────────────── */
export const SingleCreatable: Story = {
  name: 'Single + searchable + creatable',
  render: () => {
    const [val, setVal] = useState<string>('');
    return (
      <div style={{ width: 360 }}>
        <Select
          label="分類（可新增）"
          options={FRUITS}
          value={val}
          onChange={(v) => setVal(v as string)}
          searchable
          creatable
          placeholder="輸入搜尋，或新增新分類"
          helperText={`目前選擇：${val || '(無)'}`}
        />
      </div>
    );
  },
};

/* ── Multi + searchable + creatable ─────────────────────────────────────────── */
export const MultiCreatable: Story = {
  name: 'Multi + searchable + creatable',
  render: () => {
    const [val, setVal] = useState<string[]>(['apple']);
    return (
      <div style={{ width: 480 }}>
        <Select
          label="標籤（可多選 + 新增）"
          options={FRUITS}
          value={val}
          onChange={(v) => setVal(v as string[])}
          multiple
          searchable
          creatable
          placeholder="輸入搜尋，或新增新標籤"
          helperText={`已選 ${val.length} 項`}
        />
      </div>
    );
  },
};

/* ── States ─────────────────────────────────────────────────────────────────── */
export const States: Story = {
  name: 'All states',
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, width: 720 }}>
      <Select label="Empty" options={FRUITS} placeholder="請選擇" />
      <Select label="Filled" options={FRUITS} defaultValue="banana" />
      <Select label="Error" options={FRUITS} defaultValue="apple" error="欄位格式不正確" />
      <Select label="Disabled" options={FRUITS} defaultValue="grape" disabled />
      <Select label="Read-only" options={FRUITS} defaultValue="fig" readOnly />
      <Select label="Underline" options={FRUITS} style="underline" defaultValue="cherry" />
    </div>
  ),
};

/* ── Sizes ──────────────────────────────────────────────────────────────────── */
export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, width: 320 }}>
      <Select size="xl" options={FRUITS} placeholder="XL" />
      <Select size="l"  options={FRUITS} placeholder="L" />
      <Select size="m"  options={FRUITS} placeholder="M (default)" />
      <Select size="s"  options={FRUITS} placeholder="S" />
      <Select size="xs" options={FRUITS} placeholder="XS" />
    </div>
  ),
};
