# FAS Design System — LM 元件使用指引

> **層級**：LM Tier（LM 專案專用元件）
>
> **引用方式**
> ```tsx
> import '@imshenchen/fas-design-system/styles';      // core tokens + 元件 CSS
> import '@imshenchen/fas-design-system/lm/styles';   // lm tokens
>
> import { Button } from '@imshenchen/fas-design-system';        // core 共用
> import { LMFooter } from '@imshenchen/fas-design-system/lm';   // LM 專屬
> ```
>
> **規範**
> - LM 元件可自由 import core 元件；core 元件**禁止** import LM。
> - LM 元件命名一律加 `LM` 前綴（檔名與 export 同名），CSS class 前綴 `lm-`。
> - LM 可於 `src/lm/tokens/tokens.css` 擴充 `--lm-*` 變數，**禁止覆寫** core 既有 token。

---

## LMFooter
功能內容區塊底部的固定操作列。透過 `position:sticky; bottom:0` 釘在 scroll 容器底部。

```tsx
<LMFooter
  onHelp={() => openHelp()}
  onPrev={() => goPrev()}
  onNext={() => goNext()}
/>

{/* Wizard 第一步：省略 onPrev */}
<LMFooter onHelp={openHelp} onNext={goNext} />

{/* 最後一步：改寫 nextLabel */}
<LMFooter onHelp={openHelp} onPrev={goPrev} onNext={submit} nextLabel="完成" />
```

| Prop | Type | Default | 說明 |
|------|------|---------|------|
| `helpLabel` | `string` | `'Help'` | Help 按鈕文字 |
| `prevLabel` | `string` | `'上一步'` | 上一步按鈕文字 |
| `nextLabel` | `string` | `'下一步'` | 下一步按鈕文字 |
| `onHelp` | `() => void` | — | 未傳則不顯示 Help |
| `onPrev` | `() => void` | — | 未傳則不顯示上一步（如 wizard 第一步） |
| `onNext` | `() => void` | — | 未傳則不顯示下一步 |
| `prevDisabled` / `nextDisabled` | `boolean` | — | 對應按鈕 disabled |
| `nextLoading` | `boolean` | — | 下一步 loading 狀態 |

- 左側固定為 Help（`Button variant="text" color="secondary"`）；右側為 上一步（`outlined`）+ 下一步（`contained primary`）
- 須放在 scroll 容器內、且容器需有明確高度（如 `AppShell` 的主內容區）

---

## LMSwitchPanel
內容區塊頂部的 scope 切換列。

```
┌────────────────────────────────────────────────────────┐
│ [當前選擇 Title] │ [Tile1] [Tile2] [Tile3] [More ⋯ +N] │
└────────────────────────────────────────────────────────┘
```

由左至右排列：
1. **FeatureTitle** — 顯示**當前頁面（功能）名稱**，通常 = 左側 SideMenu 中目前選中的功能（如 "即時數據"）
2. **垂直 Divider**
3. **LMScopeTile 列**（72 × 72 方形 tile，含三色三形狀燈號）
4. **More 按鈕**（自動）— 容器寬度不夠放下所有 tile 時，溢出項目收進 More 下拉選單

```tsx
const items: LMSwitchPanelItem[] = [
  { key: 'line-a',    label: '產線 A',          type: 'line',    status: 'normal'  },
  { key: 'aoi-001',   label: 'AOI檢測機 001',   type: 'machine', status: 'warning' },
  { key: 'laser-002', label: 'LASER雷雕機 002', type: 'machine', status: 'down'    },
];

<LMSwitchPanel items={items} value={scope} onChange={setScope} />
```

| Prop | Type | 說明 |
|------|------|------|
| `items` | `LMSwitchPanelItem[]` | 由左至右排列的切換項 |
| `value` | `string` | 目前選取的 `key`（受控） |
| `onChange` | `(key, item) => void` | 點擊切換 callback |
| `gap` | `number \| string` | tile 之間的水平間距，預設 12 |
| `featureTitle` | `ReactNode` | 最左側 FeatureTitle —— 當前功能名稱（通常為 SideMenu activeKey 的 label）；未傳則不渲染 title 區段與 divider |

`LMSwitchPanelItem`：

| Prop | Type | 說明 |
|------|------|------|
| `key` | `string` | 唯一識別 |
| `label` | `string` | 產線 / 機台名稱 |
| `type` | `'line' \| 'machine'` | LMScopeTile 類型（決定預設 icon） |
| `status` | `'normal' \| 'warning' \| 'down'` | 三色三形狀燈號（同 LMScopeTile） |
| `icon` | `ReactNode` | 自訂 icon，覆寫 `type` 預設 |
| `disabled` | `boolean` | 禁用此項 |

- 外層為 core `Card`（outlined）作為視覺容器，內部水平排列 `LMScopeTile`
- 通常放在功能內容區塊頂部（FeatureTitle / LMSwitchPanel 區段、主資料卡片之上）
- Tile 本身**不縮放、不換行**（鎖死 72 × 72 方形）
- Card 內 padding 8px，整體高度 ≈ 88px
- **Overflow 改用 More 按鈕**：以 ResizeObserver 動態量測，放不下時 tail-end 的 tiles 收進 More 下拉選單（同樣使用 `LMScopeTile` 的狀態燈號於 menu item icon 位）。**不使用 `overflow:auto`** —— 否則會剪掉 LMScopeTile 的 hover tooltip。
- 若選取項落在 overflow，More 按鈕會以 primary 邊框 highlight；左側「當前選擇」仍正常顯示該項。
- 所有狀態 token 與 LMScopeTile 一致

---

## LMScopeTile
方形 tile 按鈕，用於選擇整條產線或特定機台。內含三色三形狀的狀態燈號、產線/機台 icon、名稱；可被選取。常用於 grid layout 的 picker、Dialog 內的設備清單、儀表板等情境。

```tsx
<LMScopeTile
  type="machine"
  label="AOI檢測機 001"
  status="normal"
  selected={picked === 'aoi-001'}
  onClick={() => setPicked('aoi-001')}
/>
```

| Prop | Type | 說明 |
|------|------|------|
| `type` | `'line' \| 'machine'` | 預設 icon：line→`conveyor_belt`、machine→`precision_manufacturing` |
| `label` | `string` | 產線 / 機台名稱（過長自動 ellipsis） |
| `status` | `'normal' \| 'warning' \| 'down'` | 燈號狀態，**顏色 + 形狀**雙重編碼 |
| `selected` | `boolean` | 選取中 → 2px primary 邊框 + 微底色 + icon 上色 + label 加粗 |
| `disabled` | `boolean` | 禁用 → 燈號變灰、`not-allowed` 游標 |
| `onClick` | `() => void` | 點擊 callback |
| `icon` | `ReactNode` | 自訂 icon，覆寫 `type` 預設 |

**燈號規則**（顏色 + 形狀都帶語意，符合色盲可讀性）：

| 形狀 | 顏色 | 語意 |
|------|------|------|
| ● 圓形 | `--status-success`（綠） | `normal` 正常運行中 |
| ▲ 三角 | `--status-warning`（黃） | `warning` 警告 |
| ■ 方形 | `--status-error`（紅） | `down` 停機 |

- 尺寸固定 72 × 72 px、圓角 6px、padding 6px、icon 22px、label 11px
- Hover 時透過 core `Tooltip` 顯示完整名稱（label 過長 ellipsis 時尤其有用）
- 與 `LMSwitchPanel` 的差異：本元件是**單顆方形 tile**（適合 grid / picker），`LMSwitchPanel` 是橫向長條切換列（適合內容區頂部 scope 切換）
- 兩者狀態 token 相同，可互換資料來源

---

## Templates

### LMAppShell
LM 專案頁面最外層版面樣板。與 core `AppShell` 同一角色，但有兩處差異：

1. **無 FeatureTitle** —— 改放 `LMSwitchPanel` 在主內容頂部，與 NavBar / SideMenu **保留 padding**（不貼齊）
2. **SideMenu 收折時固定為 `'hidden'`** —— 整個隱藏（width 0），不保留 narrow icon-only 形態

```tsx
<LMAppShell
  appName="LM Console"
  userInitial="L"
  menuItems={menuItems}
  activeKey={activeKey}
  onMenuItemClick={setActiveKey}
  version="v1.0.0"
  switchItems={switchItems}        // LMSwitchPanelItem[]
  switchValue={scope}
  onSwitchChange={setScope}
>
  {/* 功能畫面內容 */}
</LMAppShell>
```

| Prop | Type | Default | 說明 |
|------|------|---------|------|
| `appName` / `logo` / `userInitial` / `onUserClick` / `navActions` | — | — | 同 `AppShell`（NavigationBar 區段） |
| `menuItems` | `SideNavItem[]` | — | **必填**；同 `AppShell` |
| `activeKey` / `onMenuItemClick` / `version` | — | — | 同 `AppShell` |
| `collapsed` / `defaultCollapsed` / `onCollapsedChange` | — | — | 同 `AppShell`（受控 / 非受控收折） |
| `switchItems` | `LMSwitchPanelItem[]` | — | **必填**；交給內建 `LMSwitchPanel` |
| `switchValue` | `string` | — | **必填**；目前選取的 scope key |
| `onSwitchChange` | `(key, item) => void` | — | **必填**；切換 scope callback |
| `featureTitle` | `ReactNode` | 自動從 `menuItems` 找 `activeKey` 對應的 label | LMSwitchPanel 最左側顯示的功能名稱；可手動覆寫 |
| `switchPadding` | `number \| string` | `16` | LMSwitchPanel 外距（與 NavBar / SideMenu 之間的留白；套用於 panel 上 / 左 / 右） |
| `contentPadding` | `number \| string` | `32` | **真正功能 content 範圍**的 padding（圍繞 children；套用於左 / 右 / 下） |
| `switchGap` | `number \| string` | `= switchPadding` | LMSwitchPanel 與 children 之間的垂直間距 |
| `contentBackground` | `string` | `var(--bg-surface-dim)` | 主內容區背景 |
| `footer` | `ReactNode` | — | 底部 footer slot（通常傳 `<LMFooter />`）；未傳則不渲染、不佔空間 |

- 不需也不該再額外組合 NavBar / SideMenu / LMSwitchPanel —— 那違背 LMAppShell 的角色
- 收折狀態鎖死 `collapsedMode='hidden'`（不暴露 prop）—— 若需要 narrow 形態請改用 core `AppShell`

**版面結構與滾動行為**：

```
┌──────────────────────────────────────────────────┐
│ NavigationBar                            60px    │
├──────────┬───────────────────────────────────────┤
│          │  switch-region（padding switchPadding）│  ← 永遠貼頂
│ SideMenu │  ┌─────────────────────────────┐      │
│  280 /   │  │ content-region              │      │
│  hidden  │  │  padding contentPadding     │      │  ← 唯一 scroll 容器
│          │  │  {children}                 │      │
│          │  └─────────────────────────────┘      │
│          │  footer slot（左/右/底貼齊）           │  ← 永遠貼底，未傳則不存在
└──────────┴───────────────────────────────────────┘
```

- **footer slot**：傳什麼都行（`<LMFooter />` 為最常用），左 / 右 / 底貼齊主內容區邊緣；SideMenu 收合時自動跟著變寬。Page 完全不需要關心位置。

```tsx
// Wizard 中段
<LMAppShell ... footer={<LMFooter onHelp={openHelp} onPrev={prev} onNext={next} />}>
  <EditForm />
</LMAppShell>

// 看板 / 唯讀頁：不傳 footer
<LMAppShell ...>
  <Dashboard />
</LMAppShell>

// 條件性
<LMAppShell ... footer={isEditable ? <LMFooter ... /> : null}>...</LMAppShell>

// 完全自訂的 footer 內容
<LMAppShell ... footer={<MyCustomBar />}>...</LMAppShell>
```
