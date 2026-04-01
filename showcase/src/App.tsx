import React from 'react';
import { Button } from '../../fas-design-system/src/components/Button/Button';
import { StatusChip, SelectableChip, RemovableChip } from '../../fas-design-system/src/components/Chip/Chip';
import { TextField, TextArea } from '../../fas-design-system/src/components/TextField/TextField';
import { Dialog } from '../../fas-design-system/src/components/Dialog/Dialog';
import { DataTable } from '../../fas-design-system/src/components/DataTable/DataTable';
import { Breadcrumbs } from '../../fas-design-system/src/components/Breadcrumbs/Breadcrumbs';
import { Snackbar, SnackbarProvider, useSnackbar } from '../../fas-design-system/src/components/Snackbar/Snackbar';
import { IconButton } from '../../fas-design-system/src/components/IconButton/IconButton';
import { Uploader } from '../../fas-design-system/src/components/Uploader/Uploader';
import { FeatureTitle } from '../../fas-design-system/src/components/FeatureTitle/FeatureTitle';
import type { ChipStatus } from '../../fas-design-system/src/components/Chip/Chip';
import type { ColumnDef } from '../../fas-design-system/src/components/DataTable/DataTable';

const ALL_STATUSES: ChipStatus[] = [
  'processing', 'success', 'warning', 'emergency', 'error', 'milestone', 'idle',
  'mariner', 'moss', 'bronze', 'salmon', 'wine', 'orchid', 'slate',
  'indigo', 'turquoise', 'khaki', 'cinnamon', 'pink', 'violet', 'aqua',
];

const SECTIONS = [
  { id: 'button',       label: 'Button' },
  { id: 'chip',         label: 'Chip' },
  { id: 'textfield',    label: 'TextField' },
  { id: 'dialog',       label: 'Dialog' },
  { id: 'datatable',    label: 'DataTable' },
  { id: 'breadcrumbs',  label: 'Breadcrumbs' },
  { id: 'snackbar',     label: 'Snackbar' },
  { id: 'iconbutton',   label: 'IconButton' },
  { id: 'uploader',     label: 'Uploader' },
  { id: 'featuretitle', label: 'FeatureTitle' },
];

interface Node {
  id: string;
  name: string;
  ip: string;
  status: ChipStatus;
}

const TABLE_DATA: Node[] = [
  { id: '1', name: 'Edge-Node-01', ip: '192.168.1.101', status: 'success' },
  { id: '2', name: 'Edge-Node-02', ip: '192.168.1.102', status: 'error' },
  { id: '3', name: 'Edge-Node-03', ip: '192.168.1.103', status: 'warning' },
  { id: '4', name: 'Edge-Node-04', ip: '192.168.1.104', status: 'processing' },
  { id: '5', name: 'Edge-Node-05', ip: '192.168.1.105', status: 'idle' },
];

const TABLE_COLS: ColumnDef<Node>[] = [
  { key: 'name', header: '節點名稱', sortable: true },
  { key: 'ip',   header: 'IP 位址' },
  { key: 'status', header: '狀態', render: (val) => (
    <StatusChip status={val as ChipStatus} label={String(val)} size="s" />
  )},
];

const SnackbarButtons = () => {
  const { showSnackbar } = useSnackbar();
  return (
    <div className="demo-row">
      {(['success', 'error', 'warning', 'processing'] as const).map((s) => (
        <Button key={s} variant="outlined" onClick={() => showSnackbar({ message: `${s} 通知訊息`, status: s })}>
          {s}
        </Button>
      ))}
    </div>
  );
};

export default function App() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  const [activeSection, setActiveSection] = React.useState('button');
  const [dialogOpen, setDialogOpen] = React.useState(false);

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : '');
  }, [theme]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <SnackbarProvider>
      <div className="showcase-app">
        {/* Sidebar */}
        <aside className="showcase-sidebar">
          <div className="showcase-sidebar__header">
            <p className="showcase-sidebar__logo">FAS Design System</p>
            <p className="showcase-sidebar__version">v0.1.0 · Showcase</p>
            <div className="showcase-sidebar__theme-toggle">
              <button
                className={theme === 'light' ? 'active' : ''}
                onClick={() => setTheme('light')}
              >
                Light
              </button>
              <button
                className={theme === 'dark' ? 'active' : ''}
                onClick={() => setTheme('dark')}
              >
                Dark
              </button>
            </div>
          </div>
          <nav className="showcase-sidebar__nav">
            <p className="showcase-sidebar__section">Components</p>
            {SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                className={`showcase-sidebar__link${activeSection === id ? ' active' : ''}`}
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main */}
        <main className="showcase-main">

          {/* ── Button ── */}
          <section id="button" className="showcase-section">
            <h2 className="showcase-section__title">Button</h2>
            <p className="showcase-section__desc">三種樣式 × 三種色彩 × 五種尺寸</p>

            <div className="demo-box">
              <p className="demo-box__label">Contained</p>
              <div className="demo-row">
                <Button variant="contained">Primary</Button>
                <Button variant="contained" loading>Loading</Button>
                <Button variant="contained" disabled>Disabled</Button>
                <Button variant="contained" color="error">Error</Button>
              </div>
            </div>

            <div className="demo-box">
              <p className="demo-box__label">Outlined</p>
              <div className="demo-row">
                <Button variant="outlined">Primary</Button>
                <Button variant="outlined" color="secondary">Secondary</Button>
                <Button variant="outlined" color="error">Error</Button>
                <Button variant="outlined" disabled>Disabled</Button>
              </div>
            </div>

            <div className="demo-box">
              <p className="demo-box__label">Text</p>
              <div className="demo-row">
                <Button variant="text">Primary</Button>
                <Button variant="text" color="secondary">Secondary</Button>
                <Button variant="text" color="error">Error</Button>
                <Button variant="text" disabled>Disabled</Button>
              </div>
            </div>

            <div className="demo-box">
              <p className="demo-box__label">Sizes</p>
              <div className="demo-row" style={{ alignItems: 'center' }}>
                <Button variant="contained" size="xl">XL</Button>
                <Button variant="contained" size="l">L</Button>
                <Button variant="contained" size="m">M</Button>
                <Button variant="contained" size="s">S</Button>
                <Button variant="contained" size="xs">XS</Button>
              </div>
            </div>
          </section>

          {/* ── Chip ── */}
          <section id="chip" className="showcase-section">
            <h2 className="showcase-section__title">Chip</h2>
            <p className="showcase-section__desc">21 種狀態 × Filled / Outlined × Round / Rectangle</p>

            <div className="demo-box">
              <p className="demo-box__label">Status Chips — Filled Round</p>
              <div className="demo-chip-grid">
                {ALL_STATUSES.map((s) => (
                  <StatusChip key={s} status={s} label={s} />
                ))}
              </div>
            </div>

            <div className="demo-box">
              <p className="demo-box__label">Status Chips — Outlined Round</p>
              <div className="demo-chip-grid">
                {ALL_STATUSES.map((s) => (
                  <StatusChip key={s} status={s} label={s} variant="outlined" />
                ))}
              </div>
            </div>

            <div className="demo-box">
              <p className="demo-box__label">Rectangle / Small</p>
              <div className="demo-row">
                <StatusChip status="success" label="success" shape="rectangle" />
                <StatusChip status="error" label="error" shape="rectangle" />
                <StatusChip status="warning" label="warning" size="s" />
                <StatusChip status="processing" label="processing" size="s" />
              </div>
            </div>

            <div className="demo-box">
              <p className="demo-box__label">Selectable / Removable</p>
              <div className="demo-row">
                <SelectableChip label="未選取" />
                <SelectableChip label="已選取" selected />
                <SelectableChip label="停用" disabled />
                <RemovableChip label="React" />
                <RemovableChip label="TypeScript" />
              </div>
            </div>
          </section>

          {/* ── TextField ── */}
          <section id="textfield" className="showcase-section">
            <h2 className="showcase-section__title">TextField</h2>
            <p className="showcase-section__desc">Outlined / Underline / Borderless × 各種狀態</p>

            <div className="demo-box" style={{ maxWidth: 480 }}>
              <p className="demo-box__label">States</p>
              <div className="demo-col">
                <TextField label="預設" placeholder="請輸入文字" />
                <TextField label="有值" defaultValue="已填入的文字" />
                <TextField label="必填" required placeholder="必填欄位" />
                <TextField label="錯誤" error="此欄位格式不正確" defaultValue="錯誤的輸入" />
                <TextField label="停用" disabled placeholder="停用狀態" />
              </div>
            </div>

            <div className="demo-box" style={{ maxWidth: 480 }}>
              <p className="demo-box__label">Styles</p>
              <div className="demo-col">
                <TextField label="Outlined" style="outlined" placeholder="外框樣式" />
                <TextField label="Underline" style="underline" placeholder="底線樣式" />
                <TextField label="Borderless" style="borderless" placeholder="無框樣式" />
              </div>
            </div>

            <div className="demo-box" style={{ maxWidth: 480 }}>
              <p className="demo-box__label">TextArea</p>
              <TextArea label="備註" placeholder="請輸入備註內容" rows={3} maxLength={200} showCount />
            </div>
          </section>

          {/* ── Dialog ── */}
          <section id="dialog" className="showcase-section">
            <h2 className="showcase-section__title">Dialog</h2>
            <p className="showcase-section__desc">XS / SM / MD / LG / XL × 支援 Escape 關閉</p>

            <div className="demo-box">
              <p className="demo-box__label">開啟 Dialog</p>
              <div className="demo-row">
                <Button variant="outlined" onClick={() => setDialogOpen(true)}>開啟 Dialog (MD)</Button>
              </div>
            </div>

            <Dialog
              open={dialogOpen}
              onClose={() => setDialogOpen(false)}
              title="新增節點"
              size="md"
              actions={
                <>
                  <Button variant="outlined" color="secondary" size="s" onClick={() => setDialogOpen(false)}>取消</Button>
                  <Button variant="contained" size="s" onClick={() => setDialogOpen(false)}>建立</Button>
                </>
              }
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                <TextField label="節點名稱" placeholder="請輸入名稱" required />
                <TextField label="IP 位址" placeholder="例：192.168.1.1" />
                <TextField label="Port" placeholder="例：8080" />
              </div>
            </Dialog>
          </section>

          {/* ── DataTable ── */}
          <section id="datatable" className="showcase-section">
            <h2 className="showcase-section__title">DataTable</h2>
            <p className="showcase-section__desc">排序 · 斑馬紋 · 分頁 · 多選</p>

            <div className="demo-box" style={{ padding: 0 }}>
              <DataTable
                columns={TABLE_COLS}
                data={TABLE_DATA}
                rowKey={(row) => row.id}
                striped
              />
            </div>
          </section>

          {/* ── Breadcrumbs ── */}
          <section id="breadcrumbs" className="showcase-section">
            <h2 className="showcase-section__title">Breadcrumbs</h2>
            <p className="showcase-section__desc">最多 5 層，最後一層為當前頁面</p>

            <div className="demo-box demo-col">
              <Breadcrumbs items={[{ label: '首頁', onClick: () => {} }, { label: '節點管理' }]} />
              <Breadcrumbs items={[
                { label: '首頁', onClick: () => {} },
                { label: '設定', onClick: () => {} },
                { label: '使用者管理', onClick: () => {} },
                { label: '編輯使用者' },
              ]} />
            </div>
          </section>

          {/* ── Snackbar ── */}
          <section id="snackbar" className="showcase-section">
            <h2 className="showcase-section__title">Snackbar</h2>
            <p className="showcase-section__desc">點擊按鈕觸發通知，支援 4 種狀態</p>

            <div className="demo-box">
              <p className="demo-box__label">觸發通知</p>
              <SnackbarButtons />
            </div>

            <div className="demo-box">
              <p className="demo-box__label">靜態展示</p>
              <div className="demo-col">
                <Snackbar open message="操作已成功完成" status="success" autoHideDuration={0} />
                <Snackbar open message="操作失敗，請稍後再試" status="error" autoHideDuration={0} />
                <Snackbar open message="注意：此操作可能影響設定" status="warning" autoHideDuration={0} />
                <Snackbar open message="正在處理中，請稍候…" status="processing" autoHideDuration={0} />
              </div>
            </div>
          </section>

          {/* ── IconButton ── */}
          <section id="iconbutton" className="showcase-section">
            <h2 className="showcase-section__title">IconButton</h2>
            <p className="showcase-section__desc">L / M / S × 預設 / 選取 / 停用</p>

            <div className="demo-box">
              <p className="demo-box__label">Sizes</p>
              <div className="demo-row" style={{ alignItems: 'center' }}>
                <IconButton aria-label="L" size="l" icon={<span style={{ fontSize: 20 }}>⚙</span>} />
                <IconButton aria-label="M" size="m" icon={<span style={{ fontSize: 18 }}>⚙</span>} />
                <IconButton aria-label="S" size="s" icon={<span style={{ fontSize: 16 }}>⚙</span>} />
              </div>
            </div>

            <div className="demo-box">
              <p className="demo-box__label">States</p>
              <div className="demo-row">
                <IconButton aria-label="預設" icon={<span style={{ fontSize: 18 }}>✕</span>} />
                <IconButton aria-label="選取" icon={<span style={{ fontSize: 18 }}>★</span>} selected />
                <IconButton aria-label="停用" icon={<span style={{ fontSize: 18 }}>✕</span>} disabled />
              </div>
            </div>
          </section>

          {/* ── Uploader ── */}
          <section id="uploader" className="showcase-section">
            <h2 className="showcase-section__title">Uploader</h2>
            <p className="showcase-section__desc">拖曳上傳 · 進度條 · 錯誤狀態</p>

            <div className="demo-box" style={{ maxWidth: 480 }}>
              <p className="demo-box__label">預設</p>
              <Uploader accept=".tsv,.csv" onSelect={(f) => console.log(f)} />
            </div>

            <div className="demo-box" style={{ maxWidth: 480 }}>
              <p className="demo-box__label">上傳中 (65%)</p>
              <Uploader progress={65} onSelect={() => {}} />
            </div>

            <div className="demo-box" style={{ maxWidth: 480 }}>
              <p className="demo-box__label">錯誤狀態</p>
              <Uploader error="檔案格式不支援，請上傳 .tsv 格式" onSelect={() => {}} />
            </div>
          </section>

          {/* ── FeatureTitle ── */}
          <section id="featuretitle" className="showcase-section">
            <h2 className="showcase-section__title">FeatureTitle</h2>
            <p className="showcase-section__desc">頁面標題列：麵包屑 + CTA 按鈕區</p>

            <div className="demo-box" style={{ padding: 0 }}>
              <FeatureTitle
                topOffset={0}
                items={[
                  { label: '節點管理', onClick: () => {} },
                  { label: '新增節點' },
                ]}
                actions={
                  <>
                    <Button variant="outlined" color="secondary" size="s">取消</Button>
                    <Button variant="contained" size="s">建立</Button>
                  </>
                }
              />
            </div>

            <div className="demo-box" style={{ padding: 0, marginTop: 8 }}>
              <FeatureTitle
                topOffset={0}
                items={[
                  { label: '首頁', onClick: () => {} },
                  { label: '設定', onClick: () => {} },
                  { label: '使用者管理', onClick: () => {} },
                  { label: '編輯使用者' },
                ]}
              />
            </div>
          </section>

        </main>
      </div>
    </SnackbarProvider>
  );
}
