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

## Select
以 TextField 樣式為基礎的下拉選擇器。`multiple` × `searchable` × `creatable` 三個 flag 正交組合，涵蓋所有選擇 / 搜尋 / 新增情境。

```tsx
// 1. 單選
<Select options={fruits} value={val} onChange={(v) => setVal(v as string)} />

// 2. 多選（chip 顯示，點欄外才關）
<Select multiple options={fruits} value={arr} onChange={(v) => setArr(v as string[])} />

// 3. 搜尋（focus 後輸入過濾）
<Select searchable options={fruits} value={val} onChange={setVal} />

// 4. 搜尋 + 可新增（下拉出「新增『xxx』」列，Enter 或點擊可新增）
<Select searchable creatable options={fruits} value={val} onChange={setVal} />
<Select multiple searchable creatable options={tags} value={arr} onChange={setArr} />
```

| Prop | Type | Default | 說明 |
|------|------|---------|------|
| `options` | `SelectOption[]` | — | `{ value, label, disabled? }` |
| `value` | `string \| string[]` | — | 單選 string；多選 string[] |
| `multiple` | `boolean` | `false` | 啟用多選 + chip 顯示 |
| `searchable` | `boolean` | `false` | focus 後可輸入文字過濾 |
| `creatable` | `boolean` | `false` | 下拉顯示「新增」列，可建立不在 options 的新值（需搭配 `searchable`） |
| `createLabel` | `string` | `'新增'` | 「新增」列的前綴文字 |
| `clearable` | `boolean` | `true` | focus+有值時顯示 clear（單選清成 `''`、多選清成 `[]`） |
| `style` / `size` / `labelPosition` | 同 TextField | — | TextField 所有視覺／狀態都適用 |
| `disabled` / `readOnly` / `error` / `helperText` | 同 TextField | — | |

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
側邊滑出面板。兩個 variant 對應不同的使用情境：

- **`default`**（預設）— 從邊緣滑出覆蓋頁面，帶 backdrop mask。用於臨時、需要使用者專注的情境（如篩選、表單、詳情查看）。
- **`float`** — 嵌入版面的浮動面板，**無 mask**，開啟時讓主內容縮窄並排共存。用於長時間檢視的輔助資訊（如部署詳情、屬性面板）。

```tsx
// Default — 覆蓋 + mask
<Drawer open={open} anchor="right" title="篩選條件" onClose={handleClose} size="m">
  {/* 表單內容 */}
</Drawer>

// Float — 嵌入版面，需放在 flex 容器中作為 sibling
<div style={{ display: 'flex' }}>
  <main style={{ flex: 1 }}>{/* 主內容 */}</main>
  <Drawer variant="float" open={open} onClose={handleClose} anchor="right" size="m" title="應用程式詳情">
    {/* 詳情內容 */}
  </Drawer>
</div>
```

| Prop | Type | Default | 說明 |
|------|------|---------|------|
| `variant` | `'default' \| 'float'` | `'default'` | 覆蓋 + mask / 嵌入版面無 mask |
| `size` | `'s' \| 'm' \| 'l'` | `'m'` | 寬度用畫面比例：S=25%、M=35%、L=50%（橫向用 vw、縱向用 vh） |
| `anchor` | `'left' \| 'right' \| 'top' \| 'bottom'` | `'right'` | 出現位置 |
| `width` / `height` | `number \| string` | — | 自訂尺寸，會覆蓋 `size` |
| `showBackdrop` | `boolean` | `true` | 僅 `default` variant 有效 |

- `float` 必須放在 `display: flex` 的容器中作為 sibling，關閉時元件不 render，容器會自然回填
- `float` 不會 portal，不會 lock body scroll；`default` 兩者皆會

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
左側永久導覽選單。展開 280px，收折時可選 narrow（80px icon only）或完全隱藏。

```tsx
<SideMenu
  items={navItems}
  activeKey="node-mgmt"
  collapsed={collapsed}
  collapsedMode="narrow"     // 'narrow'（預設，80px icon-only）或 'hidden'（width: 0 完全隱藏）
  version="v1.2.0"
  onItemClick={(key) => navigate(key)}
/>
```

三層結構：**群組（Group）→ 模組（Module）→ 功能（Feature）**

```ts
{ key, label, icon?,        // Material Symbol name（模組層使用）
  children?,                // 模組下的功能；或群組下的模組
  isSection?,               // true → 群組（藍色標題，可點擊展開／收合）
  defaultOpen?,             // 模組層預設展開
  defaultExpanded? }        // 群組預設展開
```

- **群組**（`isSection: true`）：藍色標題，整列可點擊展開／收合該群組內的模組。**整個 SideMenu 一次只展開一個群組**，點擊另一個群組會收合先前展開的；其 `children` 為該群組下的模組。
- **模組**（L1，帶 icon）：可展開的二級項目；有 `children` 時顯示 chevron，無 `children` 時為葉節點直接觸發。
- **功能**（L2，葉節點）：點擊後右側畫面切換到對應功能，受 `activeKey` 控制。
- 群組預設展開順序：`defaultExpanded` > 含 `activeKey` 的群組 > 第一個群組。
- `collapsedMode='narrow'`（80px）下隱藏群組標題，模組 icon 平鋪顯示；hover 模組會在右側浮出 flyout。
- `collapsedMode='hidden'` 下 SideMenu 寬度為 0、視覺上完全消失（`visibility: hidden`），用於需要將整個版面讓出來的情境。
- `version` 字串固定顯示在底部，不隨選單捲動。

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

## Templates

> 頁面級版面樣板。除 `AppShell` 為頁面最外層的整體框架外，其餘樣板只包主內容，由 `AppShell` 在外層提供 NavigationBar / SideMenu / FeatureTitle。

### AppShell
頁面最外層的版面樣板，**必須包含三大區塊**：

- **NavigationBar** — 頂端 60px 導覽列
- **SideMenu** — 左側永久選單（展開 280px / 收折 80px）
- **FeatureTitle** — NavBar 下方的頁面標題列（含麵包屑與右側 CTA）

`children` 即主內容區（FeatureTitle 下方的可滾動區）。SideMenu 收折狀態由 AppShell 內建管理，點擊 NavBar 的漢堡按鈕即可切換；也可改傳 `collapsed` / `onCollapsedChange` 改為受控模式。

```tsx
import { AppShell, Button, Card } from '@imshenchen/fas-design-system';

<AppShell
  appName="APP Name"
  userInitial="K"
  menuItems={menuItems}             // SideNavItem[]（群組／模組／功能三層）
  activeKey={activeKey}
  onMenuItemClick={(key) => navigate(key)}
  version="v1.2.0"
  breadcrumb={[
    { label: '節點管理', onClick: () => navigate('/nodes') },
    { label: '節點清單' },           // 最後一項當前頁面
  ]}
  actions={
    <>
      <Button variant="text" color="secondary" size="s">取消</Button>
      <Button variant="contained" size="s">創建</Button>
    </>
  }
>
  <Card variant="elevated">{/* 功能畫面 */}</Card>
</AppShell>
```

| Prop | Type | Default | 說明 |
|------|------|---------|------|
| `appName` | `string` | `'APP Name'` | NavBar 顯示的 App 名稱 |
| `logo` | `ReactNode` | 占位方塊 | 自訂 Logo |
| `userInitial` | `string` | `'K'` | NavBar Avatar 顯示文字 |
| `onUserClick` | `() => void` | — | 點擊 Avatar callback |
| `navActions` | `ReactNode` | — | NavBar 右側 Avatar 左方的自訂操作區 |
| `menuItems` | `SideNavItem[]` | — | **必填**；SideMenu 結構（同 SideMenu `items`） |
| `activeKey` | `string` | — | 目前選中的 menu item key |
| `onMenuItemClick` | `(key, item) => void` | — | menu item 點擊 callback |
| `version` | `string` | — | SideMenu 底部版本字串 |
| `collapsed` | `boolean` | — | 受控收折狀態（傳此值即進入 controlled 模式） |
| `defaultCollapsed` | `boolean` | `false` | 非受控模式的初始收折狀態 |
| `onCollapsedChange` | `(next) => void` | — | 收折狀態變更 callback |
| `collapsedMode` | `'narrow' \| 'hidden'` | `'narrow'` | `collapsed=true` 時的呈現方式：narrow（80px icon-only）或 hidden（width 0，完全隱藏） |
| `breadcrumb` | `FeatureTitleItem[]` | — | **必填**；麵包屑層級（最多 5 層；最後一項當前頁面） |
| `actions` | `ReactNode` | — | FeatureTitle 右側 CTA 按鈕區 |
| `contentPadding` | `number \| string` | `32` | 主內容區 padding；傳 `0` 由 children 自行控制 |
| `contentBackground` | `string` | `var(--bg-surface-dim)` | 主內容區背景色 |

- 整體高度為 `100vh`，主內容欄為唯一滾動容器（FeatureTitle sticky 至頂）
- 不需也不該再額外手動組合 NavBar / SideMenu / FeatureTitle —— 那違背 AppShell 的角色
- 主內容若是表格 + drawer 的版面（如 `SplitDetailView`），直接傳入即可，會自動撐滿剩餘高度

---

### SplitDetailView
表格 + 嵌入式 detail drawer 的 split layout。單選一筆表格資料 → 右側開啟 `Drawer variant="float"`（嵌入版面、無 backdrop）顯示該項目詳細內容。適合「每筆資料內容多層且複雜」的情境。

```tsx
import { SplitDetailView, DataTable, Radio } from '@imshenchen/fas-design-system';

const [selectedId, setSelectedId] = useState<string | null>(null);
const selected = rows.find((r) => r.id === selectedId);

<SplitDetailView
  drawerOpen={selectedId !== null}
  onDrawerClose={() => setSelectedId(null)}
  drawerTitle={selected?.name ?? ''}
  drawerSubtitle="Instance detail"
  drawerContent={<>{/* Tabs / 嵌套表格 / 表單 */}</>}
>
  <DataTable
    columns={[
      {
        key: 'select',
        header: '',
        render: (_v, row) => (
          <Radio checked={selectedId === row.id} onChange={() => setSelectedId(row.id)} />
        ),
      },
      /* ...其他欄位 */
    ]}
    data={rows}
    rowKey={(r) => r.id}
  />
</SplitDetailView>
```

| Prop | Type | Default | 說明 |
|------|------|---------|------|
| `drawerOpen` | `boolean` | — | drawer 開關 |
| `onDrawerClose` | `() => void` | — | X 按鈕 / 外部取消選取時呼叫 |
| `drawerTitle` | `ReactNode` | — | drawer 大標題（通常是被選取項目名稱） |
| `drawerSubtitle` | `ReactNode` | — | 標題下方小字副標（`text-medium`），可放描述、meta 資訊 |
| `drawerContent` | `ReactNode` | — | drawer 主內容（Tabs / 嵌套表格 / 表單等） |
| `drawerSize` | `'s' \| 'm' \| 'l'` | `'l'` | drawer 寬度級距（25 / 35 / 50 vw）|
| `drawerWidth` | `number \| string` | — | 自訂寬度，會覆寫 `drawerSize` |
| `children` | `ReactNode` | — | 左側內容（通常是 `DataTable`）|

- Drawer 用 `variant="float"`：關閉時不 render、左側自然回填整個寬度
- 選取狀態 ↔ drawer 開關的綁定由使用者控制；通常用 `drawerOpen={selectedId !== null}`
- 不含 AppShell / FeatureTitle，請在外層自行組合

---

### RepeatableList / RepeatableItem
動態可新增 / 刪除的 form 列表。常見於 Create 頁的 Deployment port / Container mount / Environment variable / ConfigMap 等「重複結構」區塊。自動編號 1、2、3…，Add 按鈕置於底部。

```tsx
import { RepeatableList, RepeatableItem, TextField } from '@imshenchen/fas-design-system';

<RepeatableList addLabel="Add port" onAdd={addPort}>
  {ports.map((p) => (
    <RepeatableItem key={p.id} onRemove={() => removePort(p.id)}>
      <TextField label="Port name" value={p.name} onChange={...} />
      {/* ...其他欄位、Switch、甚至巢狀 RepeatableList 都可以 */}
    </RepeatableItem>
  ))}
</RepeatableList>
```

| Prop | Type | 說明 |
|------|------|------|
| `addLabel` | `string` | "Add" 按鈕文字，例如 "Add port" |
| `onAdd` | `() => void` | 點擊 Add 時呼叫 |
| `itemStyle` | `'inline' \| 'card'` | `inline`（預設）項目間用間距分隔，搭配外層 Card；`card` 每個項目自帶 outlined + 02dp 卡片樣式，**空狀態時只剩 Add 按鈕無卡片**（適合 Deployment port 這種「一項一卡片」情境） |
| `addDisabled` | `boolean` | 達到上限時 disable |
| `hideAdd` | `boolean` | 隱藏 Add 按鈕（read-only 模式） |
| `disableAutoIndex` | `boolean` | 關閉自動編號（預設為子項自動填 1、2、3...） |

`RepeatableItem`：

| Prop | Type | 說明 |
|------|------|------|
| `index` | `number \| string` | 自訂編號；未傳時由父層自動指派 |
| `onRemove` | `() => void` | 未傳則不顯示刪除按鈕（唯一項用） |
| `removeLabel` | `string` | 刪除鈕 aria-label，預設 "Remove" |

---

### Transfer
雙欄選擇器：左側「可選」、右側「已選」，使用者透過 checkbox + 中央按鈕在兩側搬移項目。常見於「註冊設備」、「成員授權」等「從候選池挑選一組值」的情境。

```tsx
import { Transfer } from '@imshenchen/fas-design-system';

const [value, setValue] = useState<string[]>([]);

<Transfer
  options={[
    { value: 'aoi-002', label: 'AOI檢測機002' },
    { value: 'laser-002', label: 'LASER雷射雕刻機002', chip: { label: '未啟用同步', status: 'idle' } },
    { value: 'old-mes', label: 'Legacy MES', disabled: true, chip: { label: '已停用', status: 'idle' } },
  ]}
  value={value}
  onChange={setValue}
  searchable                            // 兩側都顯示搜尋
  sourceSearchPlaceholder="搜尋設備"
  forwardLabel="加入"
  backwardLabel="移除"
/>
```

| Prop | Type | Default | 說明 |
|------|------|---------|------|
| `options` | `TransferOption[]` | — | `{ value, label, disabled?, chip? }` |
| `value` | `string[]` | — | 已選 values（右欄內容），controlled |
| `onChange` | `(next: string[]) => void` | — | value 變動 callback |
| `searchable` | `boolean \| { source?, target? }` | `false` | 兩側統一或分別控制是否顯示搜尋 |
| `sourceSearchPlaceholder` / `targetSearchPlaceholder` | `string` | — | 搜尋欄 placeholder |
| `filterOption` | `(keyword, opt) => boolean` | 預設以 label 文字包含比對 | 自訂搜尋邏輯（label 為 ReactNode 時建議自訂） |
| `sourceTitle` / `targetTitle` | `string` | `'全部'` | 全選列標題前綴；自動帶上 `(N)` 計數 |
| `showSelectAll` | `boolean` | `true` | 是否顯示全選列 |
| `sourceEmpty` / `targetEmpty` | `ReactNode` | 預設插畫 + 「尚無項目／請加入項目」 | 空狀態自訂內容 |
| `forwardLabel` / `backwardLabel` | `string` | `'加入'` / `'移除'` | 中央按鈕文字 |
| `listHeight` | `number \| string` | `320` | 列表區高度（不含 search bar / select-all） |

- **disabled option**：仍會顯示於列表，但 checkbox 不可勾且不受全選影響；游標顯示 `not-allowed`
- **chip**：每個 option 可帶 `{ label, status? }`，使用 StatusChip 顯示在 label 右側（同步狀態、版本、權限提示等）
- **全選列**：勾選範圍受目前 search 過濾結果限制；indeterminate 自動處理
- **空狀態**：`options` 為空 → 顯示 `sourceEmpty / targetEmpty`；search 無結果 → 統一顯示「找不到符合的項目」
- 通常放在 Dialog（重現 Figma「註冊設備」對話框）或 SectionedForm 的 right column 中

---

### OverviewDetailTable
「實體概覽 + 子項列表」的版面樣板。常見於節點管理、應用程式管理、機台管理等「主檔頁面」：上方是當前實體的 overview 摘要卡片（icon、名稱、狀態、meta、actions），下方是該實體底下的細項清單（toolbar + DataTable）。

```tsx
import { OverviewDetailTable, Card, Tabs, Tab, DataTable, Button, Select, TextField } from '@imshenchen/fas-design-system';

<OverviewDetailTable
  tabs={
    <Tabs value={tab} onChange={setTab}>
      <Tab value="overview" label="概覽" />
      <Tab value="dashboard" label="儀表板" />
    </Tabs>
  }
  overview={
    <Card variant="outlined">{/* icon ＋ 名稱 ＋ 狀態 ＋ meta ＋ actions */}</Card>
  }
  toolbar={
    <>
      <span>設備列表</span>
      {/* counts、主操作、篩選、搜尋 */}
    </>
  }
>
  <DataTable columns={columns} data={rows} rowKey={(r) => r.id} />
</OverviewDetailTable>
```

| Prop | Type | Default | 說明 |
|------|------|---------|------|
| `tabs` | `ReactNode` | — | 頁面層級 Tabs（如「概覽 / 儀表板」），顯示在 overview 上方 |
| `overview` | `ReactNode` | — | Overview 區塊內容（通常是一張帶 icon、名稱、狀態、meta 的 `Card`） |
| `toolbar` | `ReactNode` | — | 表格上方工具列：清單標題 + 計數 + 主操作 + 篩選 + 搜尋 |
| `children` | `ReactNode` | — | 主內容（通常是 `DataTable`） |
| `gap` | `number \| string` | `24` | 區塊之間的垂直間距（px） |

- 樣板只負責版面與間距，overview / toolbar 內容皆由使用者組合
- 不含 AppShell / FeatureTitle，請在外層自行組合
- 對比 `SplitDetailView`：本樣板強調「一個實體的摘要 + 它的子項列表」（垂直堆疊）；`SplitDetailView` 是「列表 + 點選項目開 detail drawer」（水平 split）

---

### SectionedForm / FormSection
Create / Edit 頁的分段式表單主內容。每個 `FormSection` 是一列兩欄 grid：左欄放 section 標題與說明，右欄放表單內容（通常是 `Card`）。

```tsx
import { SectionedForm, FormSection, Card, TextField, Select } from '@imshenchen/fas-design-system';

<SectionedForm>
  <FormSection title="Basic settings">
    <Card><TextField label="App name" required /></Card>
  </FormSection>

  <FormSection
    title="Image setting"
    description="Configure the container image and tag."
  >
    <Card><Select label="Image" options={imageOptions} /></Card>
  </FormSection>
</SectionedForm>
```

| Prop | Type | Default | 說明 |
|------|------|---------|------|
| `columns` | `string` | `'1fr 2.5fr'` | CSS `grid-template-columns`，左右欄比例。以 fr 為單位、不寫死寬度 |
| `columnGap` | `number \| string` | `32` | 左右欄間距（px） |
| `sectionPadding` | `number \| string` | `32` | 每個 section 上下 padding（px） |
| `divider` | `boolean` | `true` | 是否在 section 之間顯示分隔線 |

- **何時用**：Create / Edit 類型、欄位分組明確的長表單頁
- **何時不用**：Wizard 類型的多步驟表單（請用 `Stepper`）、短表單（直接用 `Card` 包即可）
- 視窗 < 768px 時自動堆疊為單欄
- `FormSection` 可個別傳 `columns` 覆寫父層比例

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
