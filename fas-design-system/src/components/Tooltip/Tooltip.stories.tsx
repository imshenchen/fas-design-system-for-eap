import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Data Display/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: { layout: 'centered' },
  decorators: [(Story) => <div style={{ padding: 64 }}><Story /></div>],
  argTypes: {
    variant:   { control: 'select', options: ['plain', 'rich'] },
    placement: { control: 'select', options: ['top', 'bottom', 'left', 'right'] },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

const IconBtn = ({ label }: { label: string }) => (
  <button
    style={{
      width: 36, height: 36, borderRadius: '50%',
      border: 'none', background: 'transparent', cursor: 'pointer',
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      color: 'var(--secondary)',
    }}
    aria-label={label}
  >
    <span className="material-symbols-outlined" style={{ fontSize: 20 }}>delete</span>
  </button>
);

/* ── Plain ───────────────────────────────────────────────────────────────── */

/** 預設：單行不換行，出現在上方 */
export const PlainDefault: Story = {
  render: () => (
    <Tooltip title="Delete" placement="top">
      <IconBtn label="Delete" />
    </Tooltip>
  ),
};

/** 四個方向 */
export const AllPlacements: Story = {
  render: () => (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, auto)', gap: 48 }}>
      {(['top', 'bottom', 'left', 'right'] as const).map(p => (
        <div key={p} style={{ textAlign: 'center' }}>
          <Tooltip title={`Placement: ${p}`} placement={p}>
            <IconBtn label={p} />
          </Tooltip>
          <p style={{ fontSize: 12, marginTop: 8, color: 'var(--text-medium)' }}>{p}</p>
        </div>
      ))}
    </div>
  ),
};

/** 文字截斷場景：tooltip 顯示完整 email */
export const PlainOnButton: Story = {
  render: () => (
    <Tooltip title="YINGHSIU.CHEN@deltaww.com" placement="top" gap={8}>
      <Button variant="outlined" size="s">YH Chen</Button>
    </Tooltip>
  ),
};

/* ── Rich ────────────────────────────────────────────────────────────────── */

/** Rich：標題 + 內文 + 兩個 action 按鈕 */
export const RichWithActions: Story = {
  render: () => (
    <Tooltip
      variant="rich"
      title="Scan the barcode"
      body="You can scan and decode barcodes on the WIP."
      placement="top"
      actions={{
        secondary: { label: 'Dismiss',    onClick: () => alert('Dismiss') },
        primary:   { label: 'Learn more', onClick: () => alert('Learn more') },
      }}
    >
      <IconBtn label="Scan" />
    </Tooltip>
  ),
};

/** Rich：只有標題 + 內文，不需要按鈕 */
export const RichWithoutActions: Story = {
  render: () => (
    <Tooltip
      variant="rich"
      title="Scan the barcode"
      body="You can scan and decode barcodes on the WIP."
      placement="bottom"
    >
      <IconBtn label="Scan" />
    </Tooltip>
  ),
};

/** Rich：只有標題 */
export const RichTitleOnly: Story = {
  render: () => (
    <Tooltip variant="rich" title="Node Management" placement="right">
      <IconBtn label="Node" />
    </Tooltip>
  ),
};
