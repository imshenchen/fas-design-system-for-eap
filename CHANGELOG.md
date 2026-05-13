# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

<!-- Changes will be documented here before the next release -->

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
