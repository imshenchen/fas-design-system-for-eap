import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { OverviewDetailTable } from './OverviewDetailTable';
import { Card, CardBody } from '../../components/Card/Card';
import { Tabs, Tab } from '../../components/Tab/Tab';
import { StatusChip } from '../../components/Chip/Chip';
import { Button } from '../../components/Button/Button';
import { IconButton } from '../../components/IconButton/IconButton';
import { Icon } from '../../components/Icon/Icon';
import { Switch } from '../../components/Switch/Switch';
import { DataTable } from '../../components/DataTable/DataTable';
import { DataTableTopBar } from '../../components/DataTable/DataTableTopBar';
import type { ColumnDef } from '../../components/DataTable/DataTable';

/**
 * OverviewDetailTable — 「實體概覽 + 子項列表」的版面樣板。
 *
 * 上方是當前實體的 overview 摘要卡片（icon、名稱、狀態、meta、actions），
 * 下方是該實體底下的細項清單（toolbar + DataTable）。常見於節點管理、
 * 應用程式管理、機台管理等「主檔頁面」。
 *
 * 樣板只負責版面與間距 —— overview / toolbar / table 內容由使用者組合。
 * Toolbar 建議使用既有的 `DataTableTopBar` 元件以維持一致樣式。
 */
const meta: Meta<typeof OverviewDetailTable> = {
  title: 'Templates/OverviewDetailTable',
  component: OverviewDetailTable,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof OverviewDetailTable>;

// ---------------------------------------------------------------------------
// Mock data
// ---------------------------------------------------------------------------

interface Device {
  id: string;
  name: string;
  type: 'AOI' | 'Loader' | 'SPI';
  protocol: string;
  syncedAt: string;
  status: 'normal' | 'abnormal' | 'low' | 'disabled' | 'starting';
  enabled: boolean;
}

const statusMap: Record<Device['status'], { label: string; color: 'success' | 'error' | 'warning' | 'idle' | 'processing' }> = {
  normal:    { label: '正常',     color: 'success' },
  abnormal:  { label: '異常',     color: 'error' },
  low:       { label: '授權不足', color: 'warning' },
  disabled:  { label: '已停用',   color: 'idle' },
  starting:  { label: '啟動中',   color: 'processing' },
};

const mockDevices: Device[] = [
  { id: '1',  name: '{device name}', type: 'AOI',    protocol: 'Log tailer', syncedAt: '2026-04-12 10:23:18', status: 'low',      enabled: false },
  { id: '2',  name: '{device name}', type: 'Loader', protocol: 'OPCUA',      syncedAt: '2026-04-12 10:21:08', status: 'abnormal', enabled: true  },
  { id: '3',  name: '{device name}', type: 'AOI',    protocol: 'NI9234',     syncedAt: '2026-04-12 10:18:42', status: 'normal',   enabled: true  },
  { id: '4',  name: '{device name}', type: 'Loader', protocol: 'MQTT',       syncedAt: '2026-04-12 09:55:30', status: 'disabled', enabled: false },
  { id: '5',  name: '{device name}', type: 'AOI',    protocol: 'RabbitMQ',   syncedAt: '2026-04-12 09:42:11', status: 'starting', enabled: true  },
  { id: '6',  name: '{device name}', type: 'SPI',    protocol: 'HTTP',       syncedAt: '2026-04-12 09:30:02', status: 'low',      enabled: false },
  { id: '7',  name: '{device name}', type: 'AOI',    protocol: 'Syncthing',  syncedAt: '2026-04-12 09:14:55', status: 'abnormal', enabled: true  },
  { id: '8',  name: '{device name}', type: 'Loader', protocol: 'PLC',        syncedAt: '2026-04-12 08:58:22', status: 'normal',   enabled: true  },
  { id: '9',  name: '{device name}', type: 'AOI',    protocol: 'SECS',       syncedAt: '2026-04-12 08:33:18', status: 'disabled', enabled: false },
  { id: '10', name: '{device name}', type: 'Loader', protocol: 'FTP',        syncedAt: '2026-04-12 08:14:50', status: 'starting', enabled: true  },
];

const PageFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      minHeight: '100vh',
      background: 'var(--bg-surface-dim)',
      padding: 24,
    }}
  >
    {children}
  </div>
);

// Overview meta「label / value」field（套用 .fas-overview-summary__meta-field 樣式）
const MetaField: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
  <div className="fas-overview-summary__meta-field">
    <span className="fas-overview-summary__meta-label">{label}</span>
    <span className="fas-overview-summary__meta-value">{value}</span>
  </div>
);

// ---------------------------------------------------------------------------
// Default — 對應節點管理 > 節點頁面（Tabs + 概覽卡片 + DataTableTopBar + 表格）
// ---------------------------------------------------------------------------

const DefaultDemo: React.FC = () => {
  const [tab, setTab] = useState('overview');
  const [search, setSearch] = useState('');
  const [devices, setDevices] = useState(mockDevices);

  const total = devices.length;

  const toggle = (id: string) =>
    setDevices((prev) => prev.map((d) => (d.id === id ? { ...d, enabled: !d.enabled } : d)));

  const filtered = search
    ? devices.filter((d) =>
        (d.name + d.type + d.protocol).toLowerCase().includes(search.toLowerCase()),
      )
    : devices;

  const columns: ColumnDef<Device>[] = [
    { key: 'index', header: '#', width: 56, render: (_v, _r, i) => i + 1 },
    { key: 'name', header: '設備名稱', sortable: true, render: (_v, r) => r.name },
    {
      key: 'type',
      header: '設備類型',
      width: 120,
      render: (_v, r) => <StatusChip status="processing" label={r.type} size="s" variant="outlined" />,
    },
    { key: 'protocol', header: '同步模式', width: 140, render: (_v, r) => r.protocol },
    { key: 'syncedAt', header: '最近同步時間', width: 200, sortable: true, render: (_v, r) => r.syncedAt },
    {
      key: 'status',
      header: '狀態',
      width: 120,
      render: (_v, r) => {
        const s = statusMap[r.status];
        return <StatusChip status={s.color} label={s.label} size="s" />;
      },
    },
    {
      key: 'enabled',
      header: '啟用同步',
      width: 100,
      align: 'center',
      render: (_v, r) => <Switch checked={r.enabled} onChange={() => toggle(r.id)} />,
    },
    {
      key: 'edit',
      header: '操作',
      width: 96,
      align: 'center',
      render: () => (
        <div className="fas-overview-detail-table__row-actions">
          <IconButton size="s" aria-label="編輯" tooltip={false} icon={<Icon name="edit" />} />
          <IconButton size="s" aria-label="更多" tooltip={false} icon={<Icon name="more_vert" />} />
        </div>
      ),
    },
  ];

  return (
    <PageFrame>
      <OverviewDetailTable
        tabs={
          <Tabs value={tab} onChange={setTab}>
            <Tab value="overview" label="概覽" />
            <Tab value="dashboard" label="儀表板" />
          </Tabs>
        }
        overview={
          <Card variant="outlined">
            <CardBody>
              <div className="fas-overview-summary">
                <div className="fas-overview-summary__identity">
                  <div className="fas-overview-summary__icon">
                    <Icon name="dns" />
                  </div>
                  <div className="fas-overview-summary__title-block">
                    <div className="fas-overview-summary__title">{'{Node alias}'}</div>
                    <StatusChip status="processing" label="連接中" size="s" />
                  </div>
                </div>

                <div className="fas-overview-summary__meta">
                  <MetaField label="位址" value="{port}" />
                  <MetaField label="通訊埠" value="{address}" />
                  <MetaField label="說明" value="{description}" />
                </div>

                <div className="fas-overview-summary__actions">
                  <Button variant="text" color="secondary" size="s" iconLeft={<Icon name="favorite" />}>
                    健康訊息
                  </Button>
                  <Button variant="text" color="secondary" size="s" iconLeft={<Icon name="edit" />}>
                    編輯
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        }
        toolbar={
          <DataTableTopBar
            title="設備列表"
            total={total}
            actions={[
              { key: 'add',    label: '新建', icon: 'add',         variant: 'contained', onClick: () => {} },
              { key: 'upload', label: '上傳', icon: 'file_upload', variant: 'outlined',  onClick: () => {} },
            ]}
            showSearch
            searchPlaceholder="搜尋名稱或設備"
            searchValue={search}
            onSearch={setSearch}
          />
        }
      >
        <DataTable columns={columns} data={filtered} rowKey={(r) => r.id} size="m" />
      </OverviewDetailTable>
    </PageFrame>
  );
};

export const Default: Story = { render: () => <DefaultDemo /> };

// ---------------------------------------------------------------------------
// NoTabs — 不需要分頁的簡化版
// ---------------------------------------------------------------------------

const NoTabsDemo: React.FC = () => {
  const columns: ColumnDef<Device>[] = [
    { key: 'index', header: '#', width: 56, render: (_v, _r, i) => i + 1 },
    { key: 'name', header: '設備名稱', render: (_v, r) => r.name },
    { key: 'protocol', header: '同步模式', width: 140, render: (_v, r) => r.protocol },
    {
      key: 'status',
      header: '狀態',
      width: 120,
      render: (_v, r) => {
        const s = statusMap[r.status];
        return <StatusChip status={s.color} label={s.label} size="s" />;
      },
    },
  ];

  return (
    <PageFrame>
      <OverviewDetailTable
        overview={
          <Card variant="outlined">
            <CardBody>
              <div className="fas-overview-summary">
                <div className="fas-overview-summary__identity">
                  <div className="fas-overview-summary__icon">
                    <Icon name="memory" />
                  </div>
                  <div className="fas-overview-summary__title-block">
                    <div className="fas-overview-summary__title">Edge Node 01</div>
                    <StatusChip status="success" label="運行中" size="s" />
                  </div>
                </div>
                <div className="fas-overview-summary__actions">
                  <Button variant="text" color="secondary" size="s" iconLeft={<Icon name="edit" />}>
                    編輯
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        }
        toolbar={
          <DataTableTopBar
            title="設備列表"
            total={5}
            actions={[
              { key: 'add', label: '新建', icon: 'add', variant: 'contained', onClick: () => {} },
            ]}
          />
        }
      >
        <DataTable columns={columns} data={mockDevices.slice(0, 5)} rowKey={(r) => r.id} size="m" />
      </OverviewDetailTable>
    </PageFrame>
  );
};

export const NoTabs: Story = { render: () => <NoTabsDemo /> };
