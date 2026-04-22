# FAS Design System — 元件使用指引

> **引用方式**
> ```tsx
> import { Button, Alert, StatusChip } from '@imshenchen/fas-design-system';
> import '@imshenchen/fas-design-system/styles'; // 在應用程式入口引入一次
> ```
>
> **Icon**：使用 Google Material Symbols
> ```tsx
> <span className="material-symbols-outlined">icon_name</span>
> ```
>
> **顏色**：一律使用 CSS Token（`var(--primary)` 等，定義於 `tokens.css`）。Dark Mode 透過 `[data-theme="dark"]` 控制。

---

## Button
觸發動作。`variant` 決定視覺層級：`contained` > `outlined` > `text`。

```tsx
<Button variant="contained">儲存</Button>
<Button variant="outlined" color="secondary" size="s">取消</Button>
<Button variant="text" iconLeft={<span className="material-symbols-outlined">add</span>}>新增</Button>
<Button loading>處理中</Button>
```

- `contained` 只能搭配 `color="primary"`，一頁面不宜重複
- `text` 用於工具列、空間緊湊情境
- 文字過長時不換行，搭配 Tooltip 顯示完整內容

---

## Icon Button
純圖示按鈕，無文字標籤。滑鼠移入時預設顯示 tooltip（文字取自 `aria-label`）。

```tsx
<IconButton size="l" aria-label="設定">
  <span className="material-symbols-outlined">settings</span>
</IconButton>

{/* 關閉 tooltip */}
<IconButton size="l" aria-label="設定" tooltip={false}>
  <span className="material-symbols-outlined">settings</span>
</IconButton>
```

| Prop | Type | Default | 說明 |
|------|------|---------|------|
| `aria-label` | `string` | — | 必填；同時作為 tooltip 文字 |
| `size` | `l \| m \| s` | `m` | 按鈕尺寸 |
| `selected` | `boolean` | `false` | Toggle 選取狀態 |
| `tooltip` | `boolean` | `true` | 是否顯示 hover tooltip |

---

## Badge
數字或紅點標記，附著於其他元件。

```tsx
<Badge count={5}><IconButton>...</IconButton></Badge>
<Badge dot><IconButton>...</IconButton></Badge>
```

---

## Chip / StatusChip
語意色標籤，用於顯示有限集合的狀態（機台、工單、節點等）。

```tsx
// 狀態顯示
<StatusChip status="processing" label="執行中" />
<StatusChip status="error" label="異常" shape="rectangle" variant="outlined" size="s" />

// 可選取（過濾器）
<SelectableChip label="進行中" selected onToggle={setSelected} />

// 可移除（表單輸入標籤）
<InputChip label="已選標籤" onRemove={handleRemove} />
```

`status` 可選值：`processing | success | warning | emergency | error | milestone | idle | mariner | moss | bronze | salmon | wine | orchid | slate | indigo | turquoise | khaki | cinnamon | pink | violet | aqua`

- 只適合顯示範圍有限的狀態資訊，不適合顯示任意文字

---

## Avatar
使用者或實體識別。

```tsx
<Avatar type="primary" size="m">王</Avatar>
<Avatar type="photo" src="/user.jpg" />
```

`type`: `primary | secondary | photo`；`size`: `l | m | s`

---

## Divider

```tsx
<Divider />
<Divider direction="vertical" />
```

---

## Progress / Spin
進度指示。`Progress` 顯示確定進度，`Spin` 用於不確定等待。

```tsx
<Progress value={70} />
<Progress variant="circular" value={50} />
<Spin />
```

---

## Checkbox

```tsx
<Checkbox checked={val} onChange={setVal} label="同意條款" />
<Checkbox indeterminate />  {/* 部分選取 */}
```

---

## Radio

```tsx
<RadioGroup value={val} onChange={setVal}>
  <Radio value="a" label="選項 A" />
  <Radio value="b" label="選項 B" />
</RadioGroup>
```

---

## Switch

```tsx
<Switch checked={on} onChange={setOn} label="啟用通知" />
```

---

## Slider

```tsx
<Slider value={50} onChange={setVal} min={0} max={100} />
<Slider type="range" value={[20, 80]} onChange={setRange} />
```

---

## TextField

```tsx
<TextField label="名稱" value={val} onChange={setVal} />
<TextField label="密碼" type="password" error helperText="格式不正確" />
<TextField label="說明" readOnly value="唯讀文字" />
```

`style`: `outlined`（預設）、`underline`、`borderless`；`size`: `xl | l | m | s | xs`（預設 `m`）

---

## Stepper
步驟流程指示器。`activeStep` 從 0 開始。

```tsx
<Stepper activeStep={1} orientation="horizontal">
  <Step label="選擇範本" />
  <Step label="設定參數" />
  <Step label="確認送出" />
</Stepper>
```

---

## Alert
訊息通知。`severity` 決定語意色彩，`variant` 決定視覺樣式。

```tsx
<Alert severity="error" title="儲存失敗">請檢查欄位格式。</Alert>
<Alert severity="success" onClose={handleClose}>資料已儲存。</Alert>
<Alert severity="warning" action={<Button size="xs">查看詳情</Button>}>授權即將到期。</Alert>
```

`severity`: `info | success | warning | error`；`variant`: `standard`（預設）、`filled`、`outlined`

---

## Accordion
可折疊內容區塊。

```tsx
<Accordion multiple>
  <AccordionItem title="問題一" defaultExpanded>解答內容</AccordionItem>
  <AccordionItem title="問題二">解答內容</AccordionItem>
</Accordion>
```

---

## Breadcrumbs
頁面層級導航，最多 5 層。

```tsx
<Breadcrumbs>
  <BreadcrumbItem href="/home">首頁</BreadcrumbItem>
  <BreadcrumbItem href="/settings">設定</BreadcrumbItem>
  <BreadcrumbItem>規則設定</BreadcrumbItem>  {/* 最後一項不傳 href */}
</Breadcrumbs>
```

---

## Card
內容容器，用於工廠看板、儀表板卡片等。

```tsx
<Card style="elevated" title="設備狀況" showHeaderBg>
  {/* 圖表、表格、文字 */}
</Card>
```

`style`: `elevated`（預設，用於 `#fafafa` 底色）、`outlined`（用於白色背景）；`radius`: `4`（預設）、`8`

---

## DataTable

```tsx
<DataTable
  columns={[
    { key: 'name', title: '名稱', sortable: true },
    { key: 'status', title: '狀態' },
  ]}
  rows={data}
  selectable
  striped
  loading={isLoading}
  pagination={{ page, pageSize, total, onChange }}
/>
```

---

## Dialog
強制使用者回應的對話框。

```tsx
<Dialog
  open={open}
  title="確認刪除"
  size="sm"
  onClose={handleClose}
  actions={
    <>
      <Button variant="outlined" color="secondary">取消</Button>
      <Button variant="contained" color="error">刪除</Button>
    </>
  }
>
  此操作無法復原，確定要刪除嗎？
</Dialog>
```

`size`: `xs | sm | md | lg | xl`

---

## Drawer
側邊滑出面板。

```tsx
<Drawer open={open} anchor="right" title="篩選條件" onClose={handleClose}>
  {/* 表單內容 */}
</Drawer>
```

---

## List

```tsx
<List>
  <ListItem primary="項目名稱" secondary="說明文字" onClick={handleClick} selected />
</List>
```

---

## Menu

```tsx
<Menu anchorEl={anchor} open={open} onClose={handleClose}>
  <MenuItem onClick={handleEdit}>編輯</MenuItem>
  <Divider />
  <MenuItem onClick={handleDelete}>刪除</MenuItem>
</Menu>
```

---

## Snackbar
短暫全域通知，自動消失。

```tsx
<Snackbar open={open} message="儲存成功" severity="success" onClose={handleClose} />
<Snackbar open={open} message="操作失敗" severity="error" duration={6000} onClose={handleClose} />
```

---

## Tooltip

```tsx
<Tooltip content="詳細說明文字">
  <IconButton>...</IconButton>
</Tooltip>
```

---

## Tab

```tsx
<TabGroup value={tab} onChange={setTab}>
  <Tab value="overview">總覽</Tab>
  <Tab value="detail" disabled>明細</Tab>
</TabGroup>
```

---

## Pagination
分頁導航，通常搭配 DataTable 使用（DataTable 內建）。

```tsx
<Pagination page={1} pageSize={20} total={200} onChange={handlePageChange} />
```

---

## Uploader

```tsx
<Uploader onUpload={handleFiles} accept=".pdf,.xlsx" multiple />
<Uploader type="button" onUpload={handleFiles} />
```

---

## NavigationBar
固定在頁面頂端的全寬導覽列（高度 60px，sticky，z-index 100）。

```tsx
<NavigationBar
  appName="APP Name"
  logo={<img src="/logo.svg" />}
  userInitial="K"
  onMenuToggle={() => setCollapsed(v => !v)}
  onUserClick={handleUserMenu}
/>
```

| Prop | Type | Default |
|------|------|---------|
| `appName` | `string` | `'APP Name'` |
| `logo` | `ReactNode` | 藍色占位方塊 |
| `onMenuToggle` | `() => void` | — |
| `actions` | `ReactNode` | — |
| `userInitial` | `string` | `'K'` |
| `onUserClick` | `() => void` | — |

---

## SideMenu
左側永久導覽選單。展開 280px，收折 80px（icon only）。

```tsx
<SideMenu
  items={navItems}
  activeKey="node-mgmt"
  collapsed={collapsed}
  version="v1.2.0"
  onItemClick={(key) => navigate(key)}
/>
```

`SideNavItem` 結構：
```ts
{ key, label, icon?,        // Material Symbol name
  children?,                // L2 子項目
  isSection?,               // true → 不可點擊的章節標題
  defaultOpen? }
```

- `isSection: true` 的項目作為章節標題（如「開發者工具」），其 `children` 為該章節下的 L1 項目
- L1 項目有 `children` 時顯示展開箭頭；無 `children` 時為葉節點
- `version` 字串固定顯示在底部，不隨選單捲動

---

## FeatureTitle
固定在 NavigationBar 下方的頁面標題列（高度 56px），包含麵包屑導航與右側 CTA 按鈕。

```tsx
<FeatureTitle
  items={[
    { label: '規則設定', onClick: () => navigate('/rules') },
    { label: '創建' },  // 最後一項不傳 onClick（當前頁面）
  ]}
  actions={
    <>
      <Button variant="text" color="secondary" size="s" onClick={handleCancel}>取消</Button>
      <Button variant="contained" size="s" onClick={handleCreate}>創建</Button>
    </>
  }
/>
```

- 最多 5 層 `items`
- `topOffset` 預設 `56`（NavBar 高度），NavBar 高度異動時同步調整
- **Action button 慣例**：主按鈕 `variant="contained"`（primary）；次按鈕 `variant="text" color="secondary"`（不使用 outlined，以減少視覺噪音）

---

## Layout

### 版面結構
```
Navigation Bar (60px, sticky, z-100)
├── Side Menu (280px / 80px collapsed, sticky top:60px)
└── Main Content (flex:1, padding:32px, background: var(--bg-surface-dim))
```

### Z-index 層級

| 元素 | z-index |
|------|---------|
| Sticky Header | 10 |
| Side Menu (overlay) | 50 |
| Navigation Bar | 100 |
| Dropdown / Picker | 200 |
| Dialog | 300 |
| Tooltip | 400 |
| Snackbar | 500 |

### Breakpoints

| 名稱 | 寬度 | 行為 |
|------|------|------|
| XS | < 768px | 單欄，Side Menu 隱藏 |
| SM | 768–1023px | Side Menu Narrow (80px) |
| MD | 1024–1279px | Side Menu Narrow (80px) |
| LG | 1280–1919px | Side Menu 展開 (280px) |
| XL | ≥ 1920px | 內容區最大 1640px |
