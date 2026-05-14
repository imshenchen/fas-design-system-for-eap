import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FileBrowser } from './FileBrowser';
import { FileBrowserDialog } from './FileBrowserDialog';
import type { FileBrowserNode } from './types';
import { Button } from '../Button/Button';

const meta: Meta<typeof FileBrowser> = {
  title: 'Core/Data Entry/FileBrowser',
  component: FileBrowser,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FileBrowser>;

const sampleNodes: FileBrowserNode[] = [
  {
    id: 'reports',
    name: '報告',
    type: 'folder',
    children: [
      {
        id: 'reports/2024',
        name: '2024',
        type: 'folder',
        children: [
          { id: 'reports/2024/q1.pdf', name: 'Q1 季報.pdf', type: 'file', size: 2_200_000 },
          { id: 'reports/2024/q2.pdf', name: 'Q2 季報.pdf', type: 'file', size: 2_516_000 },
          { id: 'reports/2024/q3.pdf', name: 'Q3 季報.pdf', type: 'file', size: 2_726_000 },
        ],
      },
      {
        id: 'reports/2023',
        name: '2023',
        type: 'folder',
        children: [
          { id: 'reports/2023/annual.pdf', name: '年度總結.pdf', type: 'file', size: 6_082_000 },
          { id: 'reports/2023/legacy.pdf', name: 'Legacy 文件.pdf', type: 'file', disabled: true, caption: '已封存' },
        ],
      },
    ],
  },
  {
    id: 'datasets',
    name: '資料集',
    type: 'folder',
    children: [
      { id: 'datasets/aoi.csv', name: 'AOI 檢測資料.csv', type: 'file', size: 12_894_000 },
      { id: 'datasets/laser.csv', name: '雷射雕刻紀錄.csv', type: 'file', size: 9_122_000 },
      {
        id: 'datasets/archive',
        name: '舊版資料',
        type: 'folder',
        disabled: true,
        children: [
          { id: 'datasets/archive/old.csv', name: '舊版 raw.csv', type: 'file', disabled: true },
        ],
      },
    ],
  },
  {
    id: 'readme.md',
    name: 'README.md',
    type: 'file',
    size: 4_318,
  },
  {
    id: 'empty-folder',
    name: '空資料夾',
    type: 'folder',
    children: [],
  },
];

// ─────────────────────────────────────────────────────────────────────────
export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState<string[]>([]);
    return (
      <div style={{ maxWidth: 640 }}>
        <FileBrowser nodes={sampleNodes} value={value} onChange={setValue} />
        <p style={{ marginTop: 12, color: '#727171', fontSize: 13 }}>
          已選 {value.length} 個檔案：{value.join(', ') || '（無）'}
        </p>
      </div>
    );
  },
};

export const WithDisabled: Story = {
  render: () => {
    const [value, setValue] = React.useState<string[]>([]);
    const nodes: FileBrowserNode[] = [
      ...sampleNodes,
      {
        id: 'locked-folder',
        name: '受限資料夾',
        type: 'folder',
        disabled: true,
        children: [
          { id: 'locked-folder/secret.pdf', name: 'secret.pdf', type: 'file', disabled: true },
        ],
      },
    ];
    return (
      <div style={{ maxWidth: 640 }}>
        <FileBrowser nodes={nodes} value={value} onChange={setValue} />
      </div>
    );
  },
};

// 模擬 backend 載入子節點
const asyncRoot: FileBrowserNode[] = [
  { id: 'remote/projects', name: '專案', type: 'folder', hasChildren: true },
  { id: 'remote/logs', name: '系統紀錄', type: 'folder', hasChildren: true },
  { id: 'remote/notes.txt', name: 'notes.txt', type: 'file', caption: '345 KB' },
];

const remoteData: Record<string, FileBrowserNode[]> = {
  'remote/projects': [
    { id: 'remote/projects/alpha', name: 'Project Alpha', type: 'folder', hasChildren: true },
    { id: 'remote/projects/beta', name: 'Project Beta', type: 'folder', hasChildren: true },
    { id: 'remote/projects/readme.md', name: 'projects-readme.md', type: 'file' },
  ],
  'remote/logs': [
    { id: 'remote/logs/2024-05-12.log', name: '2024-05-12.log', type: 'file', caption: '1.2 MB' },
    { id: 'remote/logs/2024-05-13.log', name: '2024-05-13.log', type: 'file', caption: '900 KB' },
  ],
  'remote/projects/alpha': [
    { id: 'remote/projects/alpha/spec.md', name: 'spec.md', type: 'file' },
    { id: 'remote/projects/alpha/data.csv', name: 'data.csv', type: 'file' },
  ],
  'remote/projects/beta': [
    { id: 'remote/projects/beta/spec.md', name: 'spec.md', type: 'file' },
  ],
};

export const AsyncLoad: Story = {
  render: () => {
    const [value, setValue] = React.useState<string[]>([]);
    const loadChildren = (id: string) =>
      new Promise<FileBrowserNode[]>((resolve, reject) => {
        setTimeout(() => {
          if (id === 'remote/projects/beta') {
            // 演示錯誤狀態：第一次失敗，再次重試成功
            if (Math.random() > 0.5) return reject(new Error('連線逾時'));
          }
          resolve(remoteData[id] ?? []);
        }, 800);
      });
    return (
      <div style={{ maxWidth: 640 }}>
        <FileBrowser
          nodes={asyncRoot}
          value={value}
          onChange={setValue}
          loadChildren={loadChildren}
        />
      </div>
    );
  },
};

export const Empty: Story = {
  render: () => {
    const [value, setValue] = React.useState<string[]>([]);
    return (
      <div style={{ maxWidth: 640 }}>
        <FileBrowser
          nodes={[]}
          value={value}
          onChange={setValue}
          emptyText="尚無檔案，請先建立資料夾或上傳檔案"
        />
      </div>
    );
  },
};

export const InDialog: Story = {
  render: () => {
    const [open, setOpen] = React.useState(false);
    const [picked, setPicked] = React.useState<string[]>([]);
    return (
      <div>
        <Button variant="contained" onClick={() => setOpen(true)}>
          選擇檔案
        </Button>
        <p style={{ marginTop: 12, color: '#727171', fontSize: 13 }}>
          已選：{picked.length === 0 ? '（無）' : picked.join(', ')}
        </p>
        <FileBrowserDialog
          open={open}
          onClose={() => setOpen(false)}
          onConfirm={(ids) => {
            setPicked(ids);
            setOpen(false);
          }}
          nodes={sampleNodes}
          defaultValue={picked}
        />
      </div>
    );
  },
};
