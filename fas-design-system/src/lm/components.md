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
┌────────────────────────────────────────────┐
│ [Tile1] [Tile2] [Tile3] ... → │ rightSlot │
└────────────────────────────────────────────┘
```

由左至右排列：
1. **LMScopeTile 列**（兩行 chip，含類型 caption + 燈號形狀 + 狀態文字）；過多時整列**水平捲動**
2. **垂直 Divider**（僅在有 `rightSlot` 時出現）
3. **rightSlot**（固定 slot，不受 tile scroll 影響）

頁面標題（feature title）由上游 `LMFeatureTitle` 負責；本元件不再內含 title 區段。

```tsx
const items: LMSwitchPanelItem[] = [
  { key: 'line-a',   label: '產線 A',               type: 'line',    status: 'normal'  },
  { key: 'yamaha-1', label: 'Yamaha YSM20R #01',    type: 'machine', status: 'warning' },
  { key: 'pana-2',   label: 'Panasonic NPM-W2 #02', type: 'machine', status: 'down'    },
];

<LMSwitchPanel items={items} value={scope} onChange={setScope} />

{/* 英文版 */}
<LMSwitchPanel items={items} value={scope} onChange={setScope} locale="en" />
```

| Prop | Type | Default | 說明 |
|------|------|---------|------|
| `items` | `LMSwitchPanelItem[]` | — | 由左至右排列的切換項 |
| `value` | `string` | — | 目前選取的 `key`（受控） |
| `onChange` | `(key, item) => void` | — | 點擊切換 callback |
| `gap` | `number \| string` | `12` | tile 之間的水平間距 |
| `locale` | `'zh' \| 'en'` | `'zh'` | tile 內 type caption 與狀態文字語系（pass-through 至 LMScopeTile） |
| `rightSlot` | `ReactNode` | — | 最右側固定 slot（不受中間 tile scroll 影響）；通常傳 `<LMQuadrantSelector size={52} />`。若直接是 `LMQuadrantSelector`，會自動帶上 `showRowSelectors`（caller 顯式傳的 prop 仍會勝出） |

`LMSwitchPanelItem`：

| Prop | Type | 說明 |
|------|------|------|
| `key` | `string` | 唯一識別 |
| `label` | `string` | 產線 / 機台名稱 |
| `type` | `'line' \| 'machine'` | LMScopeTile 類型（決定 caption 文字） |
| `status` | `'normal' \| 'warning' \| 'down'` | 狀態（決定燈號形狀 + 顏色） |
| `disabled` | `boolean` | 禁用此項 |

- **Flush 樣式**：與 NavBar / SideMenu 貼齊（無外框、無圓角、僅下方 1px divider，仿 core `FeatureTitle`）
- 通常放在 LMAppShell 內、緊貼 NavBar 下方
- Tile 為兩行 chip（min-height 52px、寬度自適應 160~240px、不換行）
- panel 內 padding 8px / 24px（匹配 core FeatureTitle），整體高度 ≈ 68px
- **Overflow 用水平 scroll**：tile 過多時整列水平捲動（`overflow-x: auto`）
- 所有狀態 token 與 LMScopeTile 一致

---

## LMScopeTile
方形 tile 按鈕，用於選擇整條產線或特定機台（多為 SMT 貼片機）。內含三色三形狀的狀態燈號、類型 caption（產線 / 設備）、名稱；可被選取。常用於 grid layout 的 picker、Dialog 內的設備清單、儀表板等情境。

```tsx
<LMScopeTile
  type="machine"
  label="Yamaha YSM20R #01"
  status="normal"
  selected={picked === 'yamaha-1'}
  onClick={() => setPicked('yamaha-1')}
/>

{/* 英文版 */}
<LMScopeTile type="machine" label="Yamaha YSM20R #01" status="normal" locale="en" />
```

| Prop | Type | Default | 說明 |
|------|------|---------|------|
| `type` | `'line' \| 'machine'` | — | 類型 caption：line→產線/Line、machine→設備/Machine |
| `label` | `string` | — | 產線 / 機台名稱（過長自動 ellipsis；HTML `title` 顯示完整名稱） |
| `status` | `'normal' \| 'warning' \| 'down'` | — | 狀態：決定燈號形狀 + 顏色 |
| `locale` | `'zh' \| 'en'` | `'zh'` | type caption 與狀態文字的語系 |
| `selected` | `boolean` | — | 選取中 → 2px primary 邊框 + 微底色 + label 加粗 |
| `disabled` | `boolean` | — | 禁用 → 燈號 / 文字變灰、`not-allowed` 游標 |
| `onClick` | `() => void` | — | 點擊 callback |

**燈號形狀 / 顏色 / 文字**（顏色 + 形狀同時帶語意，符合色盲可讀性）：

| status | 形狀 | 顏色 | zh | en |
|--------|------|------|----|----|
| `normal`  | ● 圓形 | `--status-success`（綠） | 正常運行 | Running |
| `warning` | ▲ 三角 | `--status-warning`（黃） | 警告     | Warning |
| `down`    | ■ 方形 | `--status-error`（紅）   | 停機     | Down    |

**Type caption（左下角小字，皆為 `--text-medium` 灰）**：

| type | zh | en |
|------|----|----|
| `line`    | 產線 | Line    |
| `machine` | 設備 | Machine |

- 兩行 chip 樣式：min-height 52px、寬度自適應（min 160 / max 240）、圓角 6px、橫向 padding 12px
- Layout：
  - **Row 1**：名稱（`textHigh`，過長 ellipsis）
  - **Row 2**：左側 type caption（12px，gray）／右側燈號形狀（10px，狀態色）+ 狀態文字（12px，gray）
- 與 `LMSwitchPanel` 的差異：本元件是**單顆 chip tile**（適合 grid / picker），`LMSwitchPanel` 是包好的水平切換列（含 FeatureTitle + 捲動）

---

## LMQuadrantSelector
田字四象限多選按鈕。4 個象限可獨立切換、中央圓形按鈕一鍵全選 / 全不選；可選開啟右側「全選上排 / 全選下排」按鈕欄。適用於「選擇設備上 4 區塊的上料資料 / 感測點 / 拼板區域」等情境。

```
┌─────┬─────┐  ┌──────┐
│ 左上 │ 右上 │  │ Top  │   ← showRowSelectors=true 時
├──┐━┌──┤  ├──────┤    　 右側出現此欄
│ 左下 │ 右下 │  │ Bot  │
└─────┴─────┘  └──────┘
```

```tsx
const [zones, setZones] = useState<LMQuadrantKey[]>(['topLeft']);

<LMQuadrantSelector
  value={zones}
  onChange={setZones}
  labels={{ topLeft: '區 1', topRight: '區 2', bottomLeft: '區 3', bottomRight: '區 4' }}
/>

{/* 開啟「全選上排 / 全選下排」按鈕欄 */}
<LMQuadrantSelector value={zones} onChange={setZones} showRowSelectors />
```

| Prop | Type | Default | 說明 |
|------|------|---------|------|
| `value` | `LMQuadrantKey[]` | — | 已選象限（受控）；`LMQuadrantKey = 'topLeft' \| 'topRight' \| 'bottomLeft' \| 'bottomRight'` |
| `onChange` | `(next: LMQuadrantKey[]) => void` | — | 選取變動 callback |
| `labels` | `Partial<Record<LMQuadrantKey, ReactNode>>` | — | 各象限自訂內容，預設為對角箭頭 icon（`north_west` / `north_east` / `south_west` / `south_east`） |
| `disabled` | `Partial<Record<LMQuadrantKey, boolean>>` | — | 禁用單一象限；全選 / 全選上排 / 全選下排按鈕只切換可用象限 |
| `size` | `number` | `120` | 田字 grid 邊長（正方形）。row selector 欄寬度另由 `rowSelectorWidth` 控制 |
| `centerAriaLabel` | `string` | `'全選'` | 中央按鈕 aria-label |
| `showRowSelectors` | `boolean` | `false` | 在田字右側顯示「全選上排 / 全選下排」按鈕欄 |
| `rowSelectorWidth` | `number` | `size * 0.4`（最小 36） | Row selector 欄寬度 |
| `rowSelectorGap` | `number` | `4` | 田字 grid 與 row selector 欄之間的水平間距 |
| `topRowAriaLabel` | `string` | `'全選上排'` | 上排按鈕 aria-label |
| `bottomRowAriaLabel` | `string` | `'全選下排'` | 下排按鈕 aria-label |

- 預設**全 icon**呈現（無文字），對角箭頭直觀指出每個象限位置；如需顯示文字（編號 / 名稱）請用 `labels` 覆寫
- 中央按鈕在「全部選取」時用 primary 邊框 + filled bg 表示；icon 切換為 `select_all`
- 任一象限選取會把該格背景換成 primary、icon 變白色（強對比）
- Disabled 象限：灰底、`not-allowed`，不會被全選 / 全選上下排按鈕影響
- Row selector 按鈕為 toggle：若該排可用象限全部已選 → 一鍵清掉；否則 → 一鍵補滿。Icon 是雙橫條，當前對應的那排為實心，另一排為描邊

---

## LMFeatureTitle
LM 版的 `FeatureTitle`：與 core `FeatureTitle` 同角色（NavBar 下方的頁面標題列、含麵包屑與右側 CTA），但字級小一階以維持 LM 較緊湊的視覺密度。

```tsx
<LMFeatureTitle
  items={[
    { label: '即時數據', onClick: () => navigate('/realtime') },
    { label: '產線 A' },
  ]}
  actions={
    <>
      <Button variant="text" color="secondary" size="s">取消</Button>
      <Button variant="contained" size="s">儲存</Button>
    </>
  }
/>
```

| Prop | Type | Default | 說明 |
|------|------|---------|------|
| `items` | `LMFeatureTitleItem[]` | — | 麵包屑層級（最多 5 層；最後一項當前頁面不傳 `onClick`） |
| `actions` | `ReactNode` | — | 右側 CTA 按鈕區 |
| `topOffset` | `number` | `56` | sticky 偏移量，預設為 NavBar 高度 |

**與 core `FeatureTitle` 差異**：
- label：`20px` → `18px`（line-height `24px`、weight `500` 不變）
- 分隔 icon：`24px` → `20px`
- min-height：`56px` → `48px`、vertical padding：`8px` → `4px`（橫向 `24px` 不變）
- 顏色、麵包屑規則（第一層必為 SideMenu 選中功能）皆相同
- 字級與間距值皆在設計系統階梯內（字級 14/16/18/20/24；spacing 4/8/24）

---

## LMMobileInstallButton
SideMenu 版本號右側的「安裝 Mobile 版本」trigger 按鈕。點擊後在按鈕上方浮出 popover，顯示 QR Code 供使用者掃描下載。

```tsx
<LMMobileInstallButton
  qrCode={<img src="/qr/lm-mobile.png" alt="Install LM Mobile" width={160} height={160} />}
  title="下載 LM Mobile"
  description="使用手機相機掃描 QR Code 安裝 iOS / Android 版本"
/>
```

| Prop | Type | 說明 |
|------|------|------|
| `qrCode` | `ReactNode` | **必填**；通常是 `<img>` 或 SVG（設計系統不負責產 QR） |
| `title` | `ReactNode` | popover 標題，預設 "安裝 Mobile 版本" |
| `description` | `ReactNode` | 補充說明，預設掃描提示 |
| `ariaLabel` | `string` | trigger button aria-label |

- Trigger 是 32×32 圖示按鈕（`smartphone` icon），整合進 SideMenu 版本列右側不佔太多寬度
- Popover 240px 寬，固定 position（不受 SideMenu 邊界限制），點外面 / Esc 自動關閉
- 通常透過 `LMAppShell` 的 `versionAction` prop 注入，不需要直接組到 SideMenu 上

---

## Templates

### LMAppShell
LM 專案頁面最外層版面樣板。與 core `AppShell` 同一角色，但有三處差異：

1. **Header 由上至下三層**：NavigationBar → LMFeatureTitle → LMSwitchPanel
   （core AppShell 只有 NavBar + FeatureTitle 兩層；LM 多了 scope 切換列）
2. **NavBar 右側精簡**：只保留 Avatar 與語系切換按鈕，並可加入產線下拉選單（`lineOptions`）。
   help / settings / notifications 等內建按鈕一律不渲染。
3. **SideMenu 收折時固定為 `'hidden'`** —— 整個隱藏（width 0），不保留 narrow icon-only 形態

```tsx
<LMAppShell
  appName="LM Console"
  userInitial="L"
  menuItems={menuItems}
  activeKey={activeKey}
  onMenuItemClick={setActiveKey}
  version="v1.0.0"
  breadcrumb={[
    { label: '產線監控', onClick: () => navigate('/monitor') },
    { label: '即時數據' },           // 最後一項當前頁面
  ]}
  actions={
    <>
      <Button variant="text" color="secondary" size="s">取消</Button>
      <Button variant="contained" size="s">儲存</Button>
    </>
  }
  switchItems={switchItems}        // LMSwitchPanelItem[]
  switchValue={scope}
  onSwitchChange={setScope}
>
  {/* 功能畫面內容 */}
</LMAppShell>
```

| Prop | Type | Default | 說明 |
|------|------|---------|------|
| `appName` / `logo` / `userInitial` / `onUserClick` / `navActions` | — | — | NavigationBar 區段。內建右側按鈕已關閉，只保留 Avatar 與語系切換 |
| `lineOptions` | `SelectOption[]` | — | NavBar 產線下拉選單的選項；傳入後 NavBar 右側會出現 Select |
| `lineValue` / `onLineChange` | `string` / `(v) => void` | — | 受控的產線選擇值與切換 callback |
| `linePlaceholder` | `string` | `'選擇產線'` | 產線下拉的 placeholder |
| `onLanguageClick` | `() => void` | — | 點擊語系按鈕 callback（未傳 button 仍渲染） |
| `menuItems` | `SideNavItem[]` | — | **必填**；同 `AppShell` |
| `activeKey` / `onMenuItemClick` / `version` | — | — | 同 `AppShell` |
| `collapsed` / `defaultCollapsed` / `onCollapsedChange` | — | — | 同 `AppShell`（受控 / 非受控收折） |
| `breadcrumb` | `LMFeatureTitleItem[]` | 自動依 `menuItems` + `activeKey` 推導 | LMFeatureTitle 麵包屑（最多 5 層；最後一項當前頁面）。預設隨 SideMenu 選擇變動；傳入則完全覆寫 |
| `actions` | `ReactNode` | — | LMFeatureTitle 右側 CTA 按鈕區 |
| `switchItems` | `LMSwitchPanelItem[]` | — | **必填**；交給內建 `LMSwitchPanel` |
| `switchValue` | `string` | — | **必填**；目前選取的 scope key |
| `onSwitchChange` | `(key, item) => void` | — | **必填**；切換 scope callback |
| `switchRightSlot` | `ReactNode` | — | LMSwitchPanel 最右側 slot（pass-through 到 LMSwitchPanel `rightSlot`）；建議用 `<LMQuadrantSelector size={52} />` 控制不撐高 panel |
| `switchLocale` | `'zh' \| 'en'` | `'zh'` | LMSwitchPanel 內 tile 的 type caption / 狀態文字語系（pass-through 到 LMSwitchPanel `locale`） |
| `versionAction` | `ReactNode` | — | SideMenu 版本號右側 action slot（pass-through 到 core SideMenu）；通常傳 `<LMMobileInstallButton ... />`。SideMenu 收折時自動隱藏 |
| `switchPadding` | `number \| string` | `0` | LMSwitchPanel 外距（與 NavBar / SideMenu 之間的留白）。預設 0 → flush 貼齊；可手動加大 |
| `contentPadding` | `number \| string` | `32` | **真正功能 content 範圍**的 padding（圍繞 children；套用於左 / 右 / 下） |
| `switchGap` | `number \| string` | `32` | LMSwitchPanel 與 children 之間的垂直間距。對應「32px Section: card vs. card / major page divisions」 |
| `contentBackground` | `string` | `var(--bg-surface-dim)` | 主內容區背景 |
| `footer` | `ReactNode` | — | 底部 footer slot（通常傳 `<LMFooter />`）；未傳則不渲染、不佔空間 |

- 不需也不該再額外組合 NavBar / SideMenu / LMFeatureTitle / LMSwitchPanel —— 那違背 LMAppShell 的角色
- 收折狀態鎖死 `collapsedMode='hidden'`（不暴露 prop）—— 若需要 narrow 形態請改用 core `AppShell`

**版面結構與滾動行為**：

```
┌──────────────────────────────────────────────────┐
│ NavigationBar                            60px    │
├──────────┬───────────────────────────────────────┤
│          │  LMFeatureTitle (breadcrumb + actions) │ 48px ← 永遠貼頂
│          ├───────────────────────────────────────┤
│ SideMenu │  switch-region（padding switchPadding）│  ← 永遠貼頂
│  280 /   │  ┌─────────────────────────────┐      │
│  hidden  │  │ content-region              │      │
│          │  │  padding contentPadding     │      │  ← 唯一 scroll 容器
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
