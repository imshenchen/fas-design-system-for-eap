import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { SplitDetailView } from './SplitDetailView';
import { DataTable } from '../../components/DataTable/DataTable';
import type { ColumnDef } from '../../components/DataTable/DataTable';
import { Select } from '../../components/Select/Select';
import { Radio } from '../../components/Radio/Radio';
import { StatusChip } from '../../components/Chip/Chip';
import { IconButton } from '../../components/IconButton/IconButton';
import { Tabs, Tab } from '../../components/Tab/Tab';
import { Alert } from '../../components/Alert/Alert';
import { Icon } from '../../components/Icon/Icon';

/**
 * SplitDetailView — 表格 + 嵌入式 detail drawer 的 split layout template。
 *
 * 單選一筆表格項目 → 右側開啟 drawer（`Drawer variant="float"`）顯示該項目的詳細內容。
 * 適合「每個項目內容多層且複雜」的情境（例如部署列表、叢集節點、應用程式實例）。
 *
 * 樣板只管 layout，不管選取邏輯 —— 選取 state 與 `drawerOpen` 的綁定由使用者控制。
 */
const meta: Meta<typeof SplitDetailView> = {
  title: 'Core/Templates/SplitDetailView',
  component: SplitDetailView,
  tags: ['autodocs'],
  parameters: { layout: 'fullscreen' },
};

export default meta;
type Story = StoryObj<typeof SplitDetailView>;

// ---------------------------------------------------------------------------
// Shared types & mock data
// ---------------------------------------------------------------------------

interface Deployment {
  id: string;
  name: string;
  version: string;
  running: string;
  deployedAt: string;
}

const deploymentsBySite: Record<string, Deployment[]> = {
  master: [
    { id: 'd1', name: 'database-service', version: 'v1.2.3', running: '1/2', deployedAt: '2026/03/10 09:24' },
    { id: 'd2', name: 'auth-service',     version: 'v1.2.3', running: '1/4', deployedAt: '2026/03/12 15:40' },
    { id: 'd3', name: 'gateway-service',  version: 'v1.2.3', running: '1/4', deployedAt: '2026/03/14 08:12' },
    { id: 'd4', name: 'worker-service',   version: 'v1.2.3', running: '1/2', deployedAt: '2026/03/15 20:05' },
    { id: 'd5', name: 'metrics-service',  version: 'v1.2.3', running: '1/2', deployedAt: '2026/03/18 03:48' },
    { id: 'd6', name: 'logger-service',   version: 'v1.2.3', running: '1/2', deployedAt: '2026/03/19 11:30' },
  ],
  'node-1': [
    { id: 'n1-1', name: 'edge-proxy',      version: 'v0.9.1', running: '2/2', deployedAt: '2026/04/02 10:15' },
    { id: 'n1-2', name: 'cache-service',   version: 'v1.0.0', running: '1/1', deployedAt: '2026/04/05 18:22' },
    { id: 'n1-3', name: 'telemetry-agent', version: 'v2.1.4', running: '0/1', deployedAt: '2026/04/07 02:08' },
  ],
  'node-2': [
    { id: 'n2-1', name: 'ingest-worker', version: 'v1.5.0', running: '3/3', deployedAt: '2026/04/10 11:42' },
    { id: 'n2-2', name: 'batch-runner',  version: 'v0.8.2', running: '1/2', deployedAt: '2026/04/12 16:30' },
  ],
};

/** 所有站點資料（供 Empty / MediumDrawer 單一資料源使用） */
const mockDeployments: Deployment[] = deploymentsBySite.master;

const siteOptions = [
  { value: 'master', label: 'Master  10.136.217.103' },
  { value: 'node-1', label: 'Node 1  10.136.217.104' },
  { value: 'node-2', label: 'Node 2  10.136.217.105' },
];

const PageFrame: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div
    style={{
      height: '100vh',
      background: 'var(--bg-surface-dim)',
      display: 'flex',
      flexDirection: 'column',
    }}
  >
    {children}
  </div>
);

/** Master 區預設 padding — filter / 表格都放在這層，才能讓 drawer 貼頁面頂端與底部 */
const MasterPad: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16, height: '100%' }}>
    {children}
  </div>
);

// ---------------------------------------------------------------------------
// Default — 表格 + 點選項目後開啟 drawer 顯示詳細內容
// ---------------------------------------------------------------------------

const DefaultDemo: React.FC = () => {
  const [site, setSite] = useState('master');
  const [selectedId, setSelectedId] = useState<string | null>('d3');
  const [tab, setTab] = useState('nodeport');

  const rows = deploymentsBySite[site] ?? [];
  const selected = rows.find((d) => d.id === selectedId);

  const columns: ColumnDef<Deployment>[] = [
    {
      key: 'select',
      header: '',
      width: 48,
      render: (_v, row) => (
        <Radio
          value={row.id}
          checked={selectedId === row.id}
          onChange={() => setSelectedId(row.id)}
        />
      ),
    },
    { key: 'index', header: '#', width: 48, render: (_v, _r, i) => i + 1 },
    { key: 'name', header: '應用程式名稱', render: (_v, r) => r.name },
    {
      key: 'version',
      header: '標籤',
      width: 120,
      render: (_v, r) => <StatusChip status="processing" label={r.version} size="s" />,
    },
    { key: 'running', header: '運行中', width: 100, render: (_v, r) => r.running },
    { key: 'deployedAt', header: '部署時間', width: 180, sortable: true, render: (_v, r) => r.deployedAt },
    {
      key: 'actions',
      header: '操作',
      width: 80,
      align: 'center',
      render: () => (
        <IconButton
          size="s"
          aria-label="Delete"
          tooltip={false}
          icon={<Icon name="delete" />}
        />
      ),
    },
  ];

  return (
    <PageFrame>
      <SplitDetailView
        drawerOpen={selectedId !== null}
        onDrawerClose={() => setSelectedId(null)}
        drawerTitle={selected?.name ?? ''}
        drawerSubtitle="Equipment deployment instance detail"
        drawerContent={
          <>
            <Tabs value={tab} onChange={setTab}>
              <Tab value="instance" label="實例" />
              <Tab value="resource" label="資源" />
              <Tab value="nodeport" label="NodePort" />
            </Tabs>

            <div style={{ marginTop: 16 }}>
              <Alert severity="info" variant="standard">
                NodePort（節點連接埠）是 Kubernetes service 的一種類型，透過在每個節點（Node）上開放一個 30000–32767 範圍內的端口，讓外部流量可以存取應用程式。
              </Alert>
            </div>

            <div style={{ marginTop: 24 }}>
              <DataTable
                columns={[
                  { key: 'idx', header: '#', width: 48, render: (_v, _r, i) => i + 1 },
                  { key: 'service', header: '服務名稱', render: (v) => String(v) },
                  {
                    key: 'port',
                    header: 'NodePort',
                    render: (v) => <StatusChip status="processing" label={String(v)} size="s" />,
                  },
                  {
                    key: 'actions',
                    header: '操作',
                    width: 80,
                    align: 'center',
                    render: () => (
                      <IconButton size="s" aria-label="Edit" tooltip={false} icon={<Icon name="edit" />} />
                    ),
                  },
                ]}
                data={[
                  { idx: 1, service: '{service name}', port: '32164' },
                  { idx: 2, service: '{service name}', port: '32165' },
                  { idx: 3, service: '{service name}', port: '32166' },
                ]}
                rowKey={(r) => r.idx as number}
                size="s"
              />
            </div>
          </>
        }
      >
        <MasterPad>
          {/* Filter 放在 master 內，讓 drawer 能從頁面最頂端撐到最底端 */}
          <div style={{ maxWidth: 360 }}>
            <Select
              label="選擇站點"
              options={siteOptions}
              value={site}
              onChange={(v) => {
                setSite(v as string);
                // 切換站點後取消選取（避免指到舊站點的 id）
                setSelectedId(null);
              }}
              clearable={false}
            />
          </div>
          <DataTable
            columns={columns}
            data={rows}
            rowKey={(r) => r.id}
            size="m"
          />
        </MasterPad>
      </SplitDetailView>
    </PageFrame>
  );
};

export const Default: Story = { render: () => <DefaultDemo /> };

// ---------------------------------------------------------------------------
// Empty — 尚未選取任何項目，drawer 收起、表格佔滿整個寬度
// ---------------------------------------------------------------------------

const EmptyDemo: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const columns: ColumnDef<Deployment>[] = [
    {
      key: 'select',
      header: '',
      width: 48,
      render: (_v, row) => (
        <Radio
          value={row.id}
          checked={selectedId === row.id}
          onChange={() => setSelectedId(row.id)}
        />
      ),
    },
    { key: 'index', header: '#', width: 48, render: (_v, _r, i) => i + 1 },
    { key: 'name', header: '應用程式名稱', render: (_v, r) => r.name },
    {
      key: 'version',
      header: '標籤',
      width: 120,
      render: (_v, r) => <StatusChip status="processing" label={r.version} size="s" />,
    },
    { key: 'running', header: '運行中', width: 100, render: (_v, r) => r.running },
    { key: 'deployedAt', header: '部署時間', width: 180, sortable: true, render: (_v, r) => r.deployedAt },
  ];

  const selected = mockDeployments.find((d) => d.id === selectedId);

  return (
    <PageFrame>
      <SplitDetailView
        drawerOpen={selectedId !== null}
        onDrawerClose={() => setSelectedId(null)}
        drawerTitle={selected?.name ?? ''}
        drawerSubtitle="Equipment deployment instance detail"
        drawerContent={<p style={{ color: 'var(--text-medium)' }}>（詳細內容示意）</p>}
      >
        <MasterPad>
          <DataTable
            columns={columns}
            data={mockDeployments}
            rowKey={(r) => r.id}
            size="m"
          />
        </MasterPad>
      </SplitDetailView>
    </PageFrame>
  );
};

export const Empty: Story = { render: () => <EmptyDemo /> };

// ---------------------------------------------------------------------------
// MediumDrawer — 使用 drawerSize="m"（35vw）顯示較窄的 drawer
// ---------------------------------------------------------------------------

const MediumDrawerDemo: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string | null>('d1');

  const columns: ColumnDef<Deployment>[] = [
    {
      key: 'select',
      header: '',
      width: 48,
      render: (_v, row) => (
        <Radio
          value={row.id}
          checked={selectedId === row.id}
          onChange={() => setSelectedId(row.id)}
        />
      ),
    },
    { key: 'name', header: '名稱', render: (_v, r) => r.name },
    {
      key: 'version',
      header: '標籤',
      width: 120,
      render: (_v, r) => <StatusChip status="processing" label={r.version} size="s" />,
    },
    { key: 'deployedAt', header: '部署時間', width: 180, render: (_v, r) => r.deployedAt },
  ];

  const selected = mockDeployments.find((d) => d.id === selectedId);

  return (
    <PageFrame>
      <SplitDetailView
        drawerOpen={selectedId !== null}
        onDrawerClose={() => setSelectedId(null)}
        drawerTitle={selected?.name ?? ''}
        drawerSubtitle={`version ${selected?.version ?? ''}`}
        drawerSize="m"
        drawerContent={
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <div>
              <div style={{ fontSize: 12, color: 'var(--text-medium)' }}>狀態</div>
              <div style={{ fontSize: 14 }}>{selected?.running} 運行中</div>
            </div>
            <div>
              <div style={{ fontSize: 12, color: 'var(--text-medium)' }}>部署時間</div>
              <div style={{ fontSize: 14 }}>{selected?.deployedAt}</div>
            </div>
          </div>
        }
      >
        <MasterPad>
          <DataTable
            columns={columns}
            data={mockDeployments}
            rowKey={(r) => r.id}
            size="m"
          />
        </MasterPad>
      </SplitDetailView>
    </PageFrame>
  );
};

export const MediumDrawer: Story = { render: () => <MediumDrawerDemo /> };
