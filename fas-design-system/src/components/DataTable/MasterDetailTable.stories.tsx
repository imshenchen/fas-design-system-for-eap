import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { MasterDetailTable } from './MasterDetailTable';
import { StatusChip } from '../Chip/Chip';
import type { ColumnDef } from './DataTable';

// ── Mock data ──────────────────────────────────────────────────────────────────

interface WorkOrder {
  id: string;
  name: string;
  result: 'OK' | 'NG' | '量測中';
  status: 'success' | 'error' | 'processing';
  total: number;
  ok: number;
  ng: number;
  operator: string;
}

interface WorkOrderItem {
  id: string;
  serialNo: string;
  result: 'OK' | 'NG';
  hasDefect: boolean;
  defectCount: number;
  measurePoints: string;
  operator: string;
}

const MASTER_DATA: WorkOrder[] = [
  { id: '1', name: 'EQP_LEAK',         result: '量測中', status: 'processing', total: 20, ok: 20, ng: 0,  operator: 'Administrator' },
  { id: '2', name: 'ICT PRESSURE ICT', result: '量測中', status: 'processing', total: 18, ok: 18, ng: 0,  operator: 'Administrator' },
  { id: '3', name: 'FUNCTIONAL TEST',  result: 'OK',     status: 'success',    total: 30, ok: 28, ng: 2,  operator: 'Operator A' },
  { id: '4', name: 'VISUAL CHECK',     result: 'NG',     status: 'error',      total: 15, ok: 10, ng: 5,  operator: 'Operator B' },
];

const getDetailData = (masterRow: WorkOrder): WorkOrderItem[] =>
  Array.from({ length: 5 }, (_, i) => ({
    id: `${masterRow.id}-${i + 1}`,
    serialNo: `EN2308000${String(i + 1).padStart(2, '0')}.00`,
    result: i === 4 && masterRow.result === 'NG' ? 'NG' : 'OK',
    hasDefect: false,
    defectCount: 0,
    measurePoints: `量測點1: 5, 量測點2: 5`,
    operator: masterRow.operator,
  }));

// ── Column defs ────────────────────────────────────────────────────────────────

/** 序號欄：header 顯示 #，值從 1 連續到 n */
const masterSeqCol: ColumnDef<WorkOrder> = {
  key: '__seq__',
  header: '#',
  width: 52,
  align: 'center',
  render: (_val, _row, i) => i + 1,
};

const detailSeqCol: ColumnDef<WorkOrderItem> = {
  key: '__seq__',
  header: '#',
  width: 52,
  align: 'center',
  render: (_val, _row, i) => i + 1,
};

const MASTER_COLUMNS: ColumnDef<WorkOrder>[] = [
  masterSeqCol,
  { key: 'name',     header: '檢驗類型',   sortable: true },
  {
    key: 'result',
    header: '檢驗項目結果',
    render: (val, row) => (
      <StatusChip
        status={row.status}
        label={String(val)}
        size="s"
      />
    ),
  },
  { key: 'total',    header: '數量',    align: 'right', width: 80, sortable: true },
  { key: 'ok',       header: 'OK數',   align: 'right', width: 80, sortable: true },
  { key: 'ng',       header: 'NG數',   align: 'right', width: 80, sortable: true },
  { key: 'operator', header: '操作員' },
];

const DETAIL_COLUMNS: ColumnDef<WorkOrderItem>[] = [
  detailSeqCol,
  { key: 'serialNo',      header: '在製品代號' },
  {
    key: 'result',
    header: '檢驗結果',
    render: (val) => (
      <StatusChip
        status={val === 'OK' ? 'success' : 'error'}
        label={String(val)}
        size="s"
      />
    ),
  },
  {
    key: 'hasDefect',
    header: '不良數據',
    render: (val) => (val ? '有' : '無'),
  },
  { key: 'defectCount',   header: '不及數量', align: 'right', width: 80 },
  { key: 'measurePoints', header: '量測結果' },
  { key: 'operator',      header: '操作員' },
];

// ── Stories ────────────────────────────────────────────────────────────────────

const meta: Meta<typeof MasterDetailTable> = {
  title: 'Core/Data Display/MasterDetailTable',
  component: MasterDetailTable,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof MasterDetailTable>;

export const Default: Story = {
  render: () => (
    <div style={{ padding: 24 }}>
      <MasterDetailTable
        title="主表格標題"
        columns={MASTER_COLUMNS}
        data={MASTER_DATA}
        rowKey={(row) => row.id}
        detailColumns={DETAIL_COLUMNS}
        getDetailData={getDetailData}
        detailRowKey={(row) => row.id}
        detailTitle={(masterRow) => `${masterRow.name} — 子項目`}
        striped
      />
    </div>
  ),
};

export const WithSearch: Story = {
  render: () => {
    const [filtered, setFiltered] = useState(MASTER_DATA);
    const handleSearch = (value: string) => {
      setFiltered(
        MASTER_DATA.filter((r) =>
          r.name.toLowerCase().includes(value.toLowerCase()),
        ),
      );
    };
    return (
      <div style={{ padding: 24 }}>
        <MasterDetailTable
          title="主表格標題"
          columns={MASTER_COLUMNS}
          data={filtered}
          rowKey={(row) => row.id}
          showSearch
          onSearch={handleSearch}
          detailColumns={DETAIL_COLUMNS}
          getDetailData={getDetailData}
          detailRowKey={(row) => row.id}
          detailTitle="在製品明細"
          striped
        />
      </div>
    );
  },
};

export const WithPagination: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    const pageSize = 3;
    const paged = MASTER_DATA.slice((page - 1) * pageSize, page * pageSize);
    return (
      <div style={{ padding: 24 }}>
        <MasterDetailTable
          title="主表格標題"
          columns={MASTER_COLUMNS}
          data={paged}
          rowKey={(row) => row.id}
          detailColumns={DETAIL_COLUMNS}
          getDetailData={getDetailData}
          detailRowKey={(row) => row.id}
          detailTitle="在製品明細"
          pagination={{
            page,
            pageSize,
            total: MASTER_DATA.length,
            pageSizeOptions: [3, 5, 10],
            onPageChange: setPage,
          }}
          striped
        />
      </div>
    );
  },
};

export const Empty: Story = {
  render: () => (
    <div style={{ padding: 24 }}>
      <MasterDetailTable
        title="主表格標題"
        columns={MASTER_COLUMNS}
        data={[]}
        rowKey={(row) => (row as WorkOrder).id}
        detailColumns={DETAIL_COLUMNS}
        getDetailData={() => []}
        detailRowKey={(row) => (row as WorkOrderItem).id}
      />
    </div>
  ),
};

export const DarkMode: Story = {
  parameters: { theme: 'dark' },
  render: () => (
    <div style={{ padding: 24 }}>
      <MasterDetailTable
        title="主表格標題"
        columns={MASTER_COLUMNS}
        data={MASTER_DATA}
        rowKey={(row) => row.id}
        showSearch
        detailColumns={DETAIL_COLUMNS}
        getDetailData={getDetailData}
        detailRowKey={(row) => row.id}
        detailTitle="在製品明細"
        striped
      />
    </div>
  ),
};
