import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { TextField, TextArea } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Core/Data Entry/TextField',
  component: TextField,
  tags: ['autodocs'],
  argTypes: {
    style:         { control: 'select', options: ['outlined', 'underline', 'borderless'] },
    size:          { control: 'select', options: ['xl', 'l', 'm', 's', 'xs'] },
    labelPosition: { control: 'select', options: ['top', 'inline', 'left'] },
    disabled:      { control: 'boolean' },
    readOnly:      { control: 'boolean' },
    required:      { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Default: Story = {
  args: {
    label: '欄位名稱',
    placeholder: '請輸入文字',
    style: 'outlined',
    size: 'm',
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
      <TextField label="預設" placeholder="請輸入文字" />
      <TextField label="有值" defaultValue="已填入的文字" />
      <TextField label="必填" required placeholder="必填欄位" />
      <TextField label="錯誤" error="此欄位格式不正確" defaultValue="錯誤的輸入" />
      <TextField label="提示文字" helperText="請輸入 6–20 個字元" />
      <TextField label="停用" disabled placeholder="停用狀態" />
      <TextField label="唯讀" readOnly defaultValue="唯讀文字" />
    </div>
  ),
};

/**
 * State matrix matching Figma 7185:55633 — every row shows outlined + underline
 * side by side. Click into a field to see focus state + clear icon.
 */
export const StateMatrix: Story = {
  name: 'States (Figma spec)',
  render: () => {
    const row = (
      label: string,
      props: React.ComponentProps<typeof TextField>,
    ) => (
      <div style={{ display: 'grid', gridTemplateColumns: '160px 260px 260px', alignItems: 'start', gap: 24 }}>
        <div style={{ fontSize: 14, color: 'var(--text-medium)', paddingTop: 32 }}>{label}</div>
        <TextField style="outlined"  label="欄位名稱" {...props} />
        <TextField style="underline" label="欄位名稱" {...props} />
      </div>
    );
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        {row('Empty',           { placeholder: '請輸入' })}
        {row('Filled',          { defaultValue: '輸入值' })}
        {row('Focus (點擊)',    { defaultValue: '輸入值' })}
        {row('Error',           { defaultValue: '輸入值', error: '錯誤訊息' })}
        {row('Disabled',        { defaultValue: '輸入值', disabled: true })}
        {row('Read-only',       { defaultValue: '輸入值', readOnly: true })}
      </div>
    );
  },
};

export const AllStyles: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
      <TextField label="Outlined" style="outlined" placeholder="外框樣式" />
      <TextField label="Underline" style="underline" placeholder="底線樣式" />
      <TextField label="Borderless" style="borderless" placeholder="無框樣式" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 400 }}>
      <TextField size="xl" placeholder="XL – 48px" />
      <TextField size="l"  placeholder="L – 44px" />
      <TextField size="m"  placeholder="M – 40px（預設）" />
      <TextField size="s"  placeholder="S – 36px" />
      <TextField size="xs" placeholder="XS – 32px" />
    </div>
  ),
};

export const WithLabelPositions: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 500 }}>
      <TextField label="Top Label" labelPosition="top" placeholder="label 在上方" />
      <TextField label="Left Label" labelPosition="left" placeholder="label 在左側" />
    </div>
  ),
};

export const TextAreaStory: Story = {
  name: 'TextArea',
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 400 }}>
      <TextArea label="備註" placeholder="請輸入備註內容" rows={4} />
      <TextArea label="限制字數" placeholder="最多 200 字" maxLength={200} showCount rows={3} />
      <TextArea label="錯誤狀態" error="內容不得為空" rows={3} />
    </div>
  ),
};

export const WithCharCount: Story = {
  args: {
    label: '描述',
    placeholder: '請輸入描述',
    maxLength: 100,
    showCount: true,
  },
};
