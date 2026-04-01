import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { DataTable } from './DataTable';
import { StatusChip } from '../Chip/Chip';
import type { ColumnDef } from './DataTable';

interface Node {
  id: string;
  name: string;
  ip: string;
  status: 'success' | 'error' | 'warning' | 'processing' | 'idle';
  lastSeen: string;
}

const MOCK_DATA: Node[] = [
  { id: '1', name: 'Edge-Node-01', ip: '192.168.1.101', status: 'success',    lastSeen: '2026-04-01 09:00' },
  { id: '2', name: 'Edge-Node-02', ip: '192.168.1.102', status: 'error',      lastSeen: '2026-04-01 08:45' },
  { id: '3', name: 'Edge-Node-03', ip: '192.168.1.103', status: 'warning',    lastSeen: '2026-04-01 08:30' },
  { id: '4', name: 'Edge-Node-04', ip: '192.168.1.104', status: 'processing', lastSeen: '2026-04-01 09:05' },
  { id: '5', name: 'Edge-Node-05', ip: '192.168.1.105', status: 'idle',       lastSeen: '2026-03-31 18:00' },
  { id: '6', name: 'Edge-Node-06', ip: '192.168.1.106', status: 'success',    lastSeen: '2026-04-01 09:10' },
];

const COLUMNS: ColumnDef<Node>[] = [
  { key: 'name', header: '節點名稱', sortable: true },
  { key: 'ip',   header: 'IP 位址' },
  {
    key: 'status',
    header: '狀態',
    render: (val) => (
      <StatusChip status={val as Node['status']} label={String(val)} size="s" />
    ),
  },
  { key: 'lastSeen', header: '最後上線', sortable: true },
];

const meta: Meta<typeof DataTable> = {
  title: 'Components/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
  argTypes: {
    striped:   { control: 'boolean' },
    loading:   { control: 'boolean' },
    selectable:{ control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof DataTable>;

export const Default: Story = {
  render: () => (
    <div style={{ padding: 24 }}>
      <DataTable
        columns={COLUMNS}
        data={MOCK_DATA}
        rowKey={(row) => row.id}
        striped
      />
    </div>
  ),
};

export const WithPagination: Story = {
  render: () => {
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(3);
    const paged = MOCK_DATA.slice((page - 1) * pageSize, page * pageSize);
    return (
      <div style={{ padding: 24 }}>
        <DataTable
          columns={COLUMNS}
          data={paged}
          rowKey={(row) => row.id}
          striped
          pagination={{
            page,
            pageSize,
            total: MOCK_DATA.length,
            pageSizeOptions: [3, 5, 10],
            onPageChange: setPage,
            onPageSizeChange: (s) => { setPageSize(s); setPage(1); },
          }}
        />
      </div>
    );
  },
};

export const WithSelection: Story = {
  render: () => {
    const [selected, setSelected] = React.useState<Set<string | number>>(new Set());
    return (
      <div style={{ padding: 24 }}>
        <p style={{ marginBottom: 8, color: 'var(--text-medium)', fontSize: 14 }}>
          已選取：{selected.size} 筆
        </p>
        <DataTable
          columns={COLUMNS}
          data={MOCK_DATA}
          rowKey={(row) => row.id}
          selectable
          selectedKeys={selected}
          onSelectChange={setSelected}
          striped
        />
      </div>
    );
  },
};

export const Loading: Story = {
  render: () => (
    <div style={{ padding: 24 }}>
      <DataTable
        columns={COLUMNS}
        data={[]}
        rowKey={(row) => (row as Node).id}
        loading
      />
    </div>
  ),
};

export const Empty: Story = {
  render: () => (
    <div style={{ padding: 24 }}>
      <DataTable
        columns={COLUMNS}
        data={[]}
        rowKey={(row) => (row as Node).id}
        emptyText="目前沒有節點資料"
      />
    </div>
  ),
};
