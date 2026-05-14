# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

<!-- Changes will be documented here before the next release -->

## [0.16.0] - 2026-05-14

### Changed
- `LMSwitchPanel` — 點選 line tile 時，從該 line 到下一條 line（或結尾）之間的所有 machine tile 也會視覺標記為 selected（scope highlight）。`value` 仍為單一字串、`onChange` 仍回傳被點到的單一 tile，API 沒變動，consumer 不需管理多選 state。

## [0.15.0] - 2026-05-14

### Added
- `LMScopeTile` 新增 `locale: 'zh' | 'en'` 屬性（預設 `'zh'`）：
  - type caption — `產線 / Line`、`設備 / Machine`
  - status text — `正常運行 / Running`、`警告 / Warning`、`停機 / Down`
- `LMSwitchPanel` / `LMAppShell` 透傳 `locale` / `switchLocale`，可由上層一次切換所有 tile 的語系。
- `LMQuadrantSelector` 新增 `showRowSelectors` 屬性 — 在田字右側顯示「全選上排 / 全選下排」按鈕欄；可選 `rowSelectorWidth` / `rowSelectorGap` / `topRowAriaLabel` / `bottomRowAriaLabel`。
- `FileBrowserNode` 新增 `size?: number | string` 屬性 — `number` 視為 bytes 自動格式化（B/KB/MB/GB），`string` 直接顯示；提供時優先取代 `caption`。

### Changed
- `LMScopeTile` 視覺重新設計：
  - 移除類型 icon（conveyor_belt / precision_manufacturing），改顯示灰色 caption 文字。
  - **狀態燈號**改為三色三形狀：綠色圓形（正常運行）／黃色三角（警告）／紅色方形（停機），同時透過顏色 + 形狀傳達語意（符合色盲可讀性）。
- `LMSwitchPanel` 偵測 `rightSlot` 是 `LMQuadrantSelector` 時，自動啟用 `showRowSelectors`（caller 顯式傳入仍勝出）。
- `FileBrowser` 檔案 row 的小字優先顯示 `size`（自動格式化）；name 與 caption 皆有 `title` 屬性，hover 時 tooltip 顯示完整內容。
- `FileTransfer` 右側 row 的小字改為顯示**該檔案的原始路徑**（例：`根目錄 / 報告 / 2024`；root 層檔案顯示 rootLabel）；元件內部會在初始 walk 與 lazy-load 時記錄每個 folder 的完整路徑。

### Removed
- **Breaking**：`LMScopeTile` 不再支援 `icon` 屬性（類型 icon 已改為文字 caption）。
- **Breaking**：`LMSwitchPanelItem` 移除 `icon` 屬性（同上）。

## [0.14.0] - 2026-05-14

### Added
- `FileTransfer` 中央新增 **Reset** 按鈕（`text secondary size=s`），一鍵清空整個 `value` 與內部 pending／removeChecked。
- `FileBrowser` 與 `FileTransfer` 所有顯示字串皆可透過 props 客製化（i18n / English 翻譯需求）。`FileTransfer` 提供 `fileBrowserLabels` 物件透傳到內部 FileBrowser。

### Changed
- `FileBrowser` folder icon 顏色從 `var(--primary)` 改為 `var(--text-medium)`，與 file icon 同色（避免顏色暗示「資料夾較重要」）。

## [0.13.1] - 2026-05-13

### Changed
- `FileTransfer` 右側改為 checkbox + 全選 + 中央「移除」按鈕（取代原本 per-row × 與「全部清除」），與 `Transfer` template 的雙向移動模式一致。

## [0.13.0] - 2026-05-13

### Added
- `FileTransfer` template — 左側 `FileBrowser` + 中央加入按鈕 + 右側已選清單，用於從多層資料夾中挑出一組檔案。支援去重、移除、全部清除、lazy load、響應式堆疊。

### Fixed
- `FileBrowser` 選取列拿掉藍色 outline（改為純背景色變化，符合設計系統慣例）。
- `FileBrowser` 麵包屑 `>` 分隔符與文字基線對齊。
- `FileBrowser` 列右側 → 按鈕大小對齊 leading folder icon（覆寫 Google Fonts 預設 24px）。
- `FileBrowser` 內 IconButton 的 tooltip 改用 `aria-label`，避免被 `overflow:hidden` 容器切掉。

## [0.12.2] - 2026-05-13

### Added
- `FileBrowser` 列表頂端新增「全選」列（含 `(N / total)` 計數、indeterminate 狀態），範圍為當前 folder 內的可選 files。

### Changed
- `FileBrowser` folder 列的 trailing 進入 → 改用 core `IconButton`。
- `FileBrowser` 錯誤狀態的「重試」改用 core `Button`（text 變體）。

## [0.12.1] - 2026-05-13

### Changed
- `FileBrowser` 改為**單層顯示**：移除 inline 展開、移除 `leadingLine` prop。
- 進入下一層：點 folder 列右側 → 箭頭、或在 folder 上雙擊（單擊不再展開）。
- 鍵盤：→ 進入 folder（原本展開）、← 回上一層、Enter / Space 仍對 file 切換選取、對 folder 進入。

## [0.12.0] - 2026-05-13

### Added
- `FileBrowser` — 檔案瀏覽器（toolbar + tree row），多選 file checkbox、lazy load 支援、disabled 狀態。
- `FileBrowserDialog` — `FileBrowser` 的 Dialog 變體（固定 size=lg），含取消／確認流程。
