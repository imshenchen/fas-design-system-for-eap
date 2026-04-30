import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DataTableTopBar } from './DataTableTopBar';
import type { DataTableTopBarProps } from './DataTableTopBar';
import { DataTable } from './DataTable';

const meta: Meta<typeof DataTableTopBar> = {
  title: 'Core/Data Display/DataTableTopBar',
  component: DataTableTopBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DataTableTopBar>;

/* ── Title + Counts only ─────────────────────────────────────────────────────── */
export const TitleAndCounts: Story = {
  render: () => (
    <DataTableTopBar
      title="機台清單"
      total={128}
      selectedCount={3}
    />
  ),
};

/* ── Title + Tabs ─────────────────────────────────────────────────────────────── */
export const WithTabs: Story = {
  render: () => {
    const [tab, setTab] = useState('all');
    return (
      <DataTableTopBar
        title="工單管理"
        tabs={[
          { key: 'all', label: '全部', icon: 'table' },
          { key: 'trash', label: '回收桶', icon: 'delete' },
        ]}
        activeTab={tab}
        onTabChange={setTab}
        total={64}
      />
    );
  },
};

/* ── Actions + Search ─────────────────────────────────────────────────────────── */
export const WithActionsAndSearch: Story = {
  render: () => {
    const [search, setSearch] = useState('');
    return (
      <DataTableTopBar
        title="設備列表"
        total={50}
        actions={[
          { key: 'add',    label: '新增', icon: 'add',          variant: 'outlined', color: 'primary', onClick: () => alert('新增') },
          { key: 'delete', label: '刪除', icon: 'delete',        variant: 'text',     color: 'error',   onClick: () => alert('刪除'), disabled: true },
          { key: 'export', label: '匯出', icon: 'file_download', variant: 'text',                       onClick: () => alert('匯出') },
          { key: 'import', label: '匯入', icon: 'file_upload',   variant: 'text',                       onClick: () => alert('匯入') },
        ]}
        showSearch
        searchValue={search}
        onSearch={setSearch}
      />
    );
  },
};

/* ── Full (Tabs + Actions + Search + Counts) ─────────────────────────────────── */
export const Full: Story = {
  render: () => {
    const [tab, setTab] = useState('active');
    const [search, setSearch] = useState('');
    return (
      <DataTableTopBar
        title="Table title"
        tabs={[
          { key: 'active', label: 'Table A', icon: 'table' },
          { key: 'trash',  label: 'Trash',   icon: 'delete' },
        ]}
        activeTab={tab}
        onTabChange={setTab}
        total={0}
        selectedCount={0}
        actions={[
          { key: 'add',       label: '新增',         icon: 'add',             variant: 'outlined', color: 'primary', onClick: () => {} },
          { key: 'delete',    label: '刪除',         icon: 'delete',           variant: 'text',     color: 'error',   onClick: () => {}, disabled: true },
          { key: 'export',    label: '匯出',         icon: 'file_download',    variant: 'text',                       onClick: () => {} },
          { key: 'import',    label: '匯入',         icon: 'file_upload',      variant: 'text',                       onClick: () => {} },
          { key: 'template',  label: 'Template',    icon: 'description',      variant: 'text',                       onClick: () => {} },
          { key: 'colsetting',label: 'Column setting', icon: 'view_column',   variant: 'text',                       onClick: () => {} },
        ]}
        showSearch
        searchPlaceholder="快速搜尋"
        searchValue={search}
        onSearch={setSearch}
      />
    );
  },
};

/* ── Combined with DataTable ─────────────────────────────────────────────────── */
const columns = [
  { key: 'name',   header: '名稱',   width: '30%', sortable: true  },
  { key: 'type',   header: '類型',   width: '20%'                  },
  { key: 'status', header: '狀態',   width: '20%'                  },
  { key: 'date',   header: '更新日期', width: '30%', sortable: true },
];

const sampleData = [
  { name: 'Edge-Node-01', type: 'Gateway', status: 'Online',  date: '2025-04-01' },
  { name: 'Edge-Node-02', type: 'Sensor',  status: 'Offline', date: '2025-04-02' },
  { name: 'Edge-Node-03', type: 'Gateway', status: 'Online',  date: '2025-04-03' },
  { name: 'Edge-Node-04', type: 'Sensor',  status: 'Online',  date: '2025-04-04' },
];

export const WithDataTable: Story = {
  render: () => {
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState<Set<string | number>>(new Set());
    const filtered = sampleData.filter(r =>
      !search || r.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div>
        <DataTableTopBar
          title="節點清單"
          total={sampleData.length}
          selectedCount={selected.size}
          actions={[
            { key: 'add',    label: '新增', icon: 'add',    variant: 'outlined', color: 'primary', onClick: () => {} },
            { key: 'delete', label: '刪除', icon: 'delete', variant: 'text',     color: 'error',   onClick: () => {}, disabled: selected.size === 0 },
          ]}
          showSearch
          searchValue={search}
          onSearch={setSearch}
        />
        <DataTable
          columns={columns}
          data={filtered}
          rowKey={(r) => r.name}
          selectable
          selectedKeys={selected}
          onSelectChange={setSelected}
          striped
        />
      </div>
    );
  },
};
