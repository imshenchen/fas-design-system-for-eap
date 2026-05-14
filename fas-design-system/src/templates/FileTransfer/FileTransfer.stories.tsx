import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { FileTransfer } from './FileTransfer';
import type { FileBrowserNode } from '../../components/FileBrowser/types';

const meta: Meta<typeof FileTransfer> = {
  title: 'Core/Templates/FileTransfer',
  component: FileTransfer,
  tags: ['autodocs'],
  parameters: { layout: 'padded' },
};

export default meta;
type Story = StoryObj<typeof FileTransfer>;

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
    ],
  },
  { id: 'readme.md', name: 'README.md', type: 'file', size: 4_318 },
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState<string[]>([]);
    return (
      <div style={{ maxWidth: 1080 }}>
        <FileTransfer nodes={sampleNodes} value={value} onChange={setValue} />
        <p style={{ marginTop: 12, color: '#727171', fontSize: 13 }}>
          已加入：{value.length === 0 ? '（無）' : value.join(', ')}
        </p>
      </div>
    );
  },
};

export const WithInitialValue: Story = {
  render: () => {
    const [value, setValue] = React.useState<string[]>([
      'reports/2024/q1.pdf',
      'datasets/aoi.csv',
    ]);
    return (
      <div style={{ maxWidth: 1080 }}>
        <FileTransfer nodes={sampleNodes} value={value} onChange={setValue} />
      </div>
    );
  },
};

const asyncRoot: FileBrowserNode[] = [
  { id: 'remote/projects', name: '專案', type: 'folder', hasChildren: true },
  { id: 'remote/logs', name: '系統紀錄', type: 'folder', hasChildren: true },
];

const remoteData: Record<string, FileBrowserNode[]> = {
  'remote/projects': [
    { id: 'remote/projects/alpha', name: 'Project Alpha', type: 'folder', hasChildren: true },
    { id: 'remote/projects/readme.md', name: 'projects-readme.md', type: 'file' },
  ],
  'remote/logs': [
    { id: 'remote/logs/2024-05-12.log', name: '2024-05-12.log', type: 'file', size: 1_258_000 },
    { id: 'remote/logs/2024-05-13.log', name: '2024-05-13.log', type: 'file', size: 921_600 },
  ],
  'remote/projects/alpha': [
    { id: 'remote/projects/alpha/spec.md', name: 'spec.md', type: 'file' },
    { id: 'remote/projects/alpha/data.csv', name: 'data.csv', type: 'file' },
  ],
};

export const English: Story = {
  render: () => {
    const [value, setValue] = React.useState<string[]>([]);
    return (
      <div style={{ maxWidth: 1080 }}>
        <FileTransfer
          nodes={sampleNodes}
          value={value}
          onChange={setValue}
          addLabel="Add"
          removeLabel="Remove"
          resetLabel="Reset"
          selectAllLabel="Select all"
          targetTitle="Selected files"
          targetEmptyText="No files added yet"
          emptyText="This folder is empty"
          fileBrowserLabels={{
            rootLabel: 'Root',
            homeAriaLabel: 'Go to root',
            backAriaLabel: 'Go back',
            treeAriaLabel: 'File browser',
            selectAllLabel: 'Select all',
            enterAriaLabel: (name) => `Open ${name}`,
            loadFailedText: 'Failed to load',
            retryLabel: 'Retry',
          }}
        />
      </div>
    );
  },
};

export const AsyncLoad: Story = {
  render: () => {
    const [value, setValue] = React.useState<string[]>([]);
    const loadChildren = (id: string) =>
      new Promise<FileBrowserNode[]>((resolve) => {
        setTimeout(() => resolve(remoteData[id] ?? []), 600);
      });
    return (
      <div style={{ maxWidth: 1080 }}>
        <FileTransfer
          nodes={asyncRoot}
          value={value}
          onChange={setValue}
          loadChildren={loadChildren}
        />
      </div>
    );
  },
};
