# FileBrowser — 設計規格

> **2026-05-13 update**：改為**單層顯示**——一次只列當前資料夾的內容，不 inline 展開。`leadingLine` prop 已移除。

## 目的
提供一個 core tier 的檔案瀏覽元件，讓使用者瀏覽資料夾、進入子層、回上一層或回根目錄，並以 checkbox 多選檔案。另外提供 dialog 變體 `FileBrowserDialog`，用於在對話框中選檔。

視覺參考 Figma `Navigation list` 的 Tree 樣式（row 結構）。

## Tier 與命名
- core（`src/components/FileBrowser/`）
- Exports：`FileBrowser`、`FileBrowserDialog`、type `FileBrowserNode`

## 導覽模式（單層）
頂部 toolbar：home（回根目錄）、back（回上一層）、breadcrumb（顯示當前 path，可點任一層回去）。
下方列表：當前 path 末端 folder 的直接子項（不 inline 展開）。
進入下一層：點 folder 列右側 → 箭頭、或在 folder 上雙擊；單擊只 focus。
「回根目錄」= 將 current path 清空；「回上一層」= path 退一層；皆會重置列表顯示但保留已選 file ids。

## 資料模型
```ts
type FileBrowserNode = {
  id: string;
  name: string;
  type: 'folder' | 'file';
  children?: FileBrowserNode[];   // 預載
  hasChildren?: boolean;          // folder 用；true 且無 children → lazy load
  disabled?: boolean;
  icon?: ReactNode;               // 覆寫預設 icon
  caption?: string;               // 第二行小字
};
```

## `FileBrowser` props
```ts
type FileBrowserProps = {
  nodes: FileBrowserNode[];                              // root 層
  value: string[];                                       // 已選 file id（受控）
  onChange: (next: string[]) => void;
  loadChildren?: (folderId: string) => Promise<FileBrowserNode[]>;
  emptyText?: string;                                    // 預設「此資料夾為空」
  height?: number | string;                              // 列表滾動高度；預設 400
  className?: string;
};
```

## 選擇行為
- 多選，checkbox 樣式（沿用 core `Checkbox`）
- 只有 `type='file'` 可選；folder 不顯示 checkbox
- `disabled=true` 的 file → checkbox 不可點、列灰化；disabled folder → 可展開/進入但不影響選擇
- 不支援過濾（呼叫者自己過濾 nodes）

## Lazy load
進入 folder 時，若 `children` 未提供且 `hasChildren=true` 且 `loadChildren` 有傳：
- 觸發 `loadChildren(id)`、列表區顯示置中 `Spin`
- 成功 → 將回傳 children 內存於元件 state，後續不重複呼叫（cache by id）
- 失敗 → 列表區顯示錯誤訊息 + 「重試」按鈕
- 元件不主動 invalidate cache；呼叫者若需要重新 fetch，需 remount

## 視覺/Token
| 元素 | 值 |
|------|----|
| Row height | 48px |
| Row padding | 0 12px |
| Row hover bg | `var(--comp-hover)` |
| Row selected bg | `var(--table-selected)` |
| Row text | `var(--text-high)` |
| Disabled text/icon | `var(--text-disabled)` |
| Caption | 12px、`var(--text-medium)` |
| Folder icon | Material Symbols `folder`、色 `var(--primary)` |
| File icon | Material Symbols `description`、色 `var(--text-medium)` |
| Toolbar | 高度 48px、下方 1px `var(--divider)`；左→右：home / back / breadcrumb |
| Toolbar buttons | core `IconButton size="m"` |
| Breadcrumb | core `Breadcrumbs` |
| Trailing → 箭頭 | Material Symbols `arrow_forward`，hover 顯示底色 |
| Empty / loading / error | 置中、`var(--text-medium)` |
| Loading | core `Spin` |

## A11y / 鍵盤
- 列表：`role="tree"`、每列 `role="treeitem"`，附 `aria-selected` / `aria-level` / `aria-disabled`
- 鍵盤：↑↓ 移動 focus；→ 進入 folder；← / Backspace 回上一層；Enter（folder 進入 / file 切換選取）；Space（folder 進入 / file 切換選取）

## `FileBrowserDialog` props
```ts
type FileBrowserDialogProps = {
  open: boolean;
  onClose: () => void;
  onConfirm: (selectedFileIds: string[]) => void;
  title?: ReactNode;             // 預設「選擇檔案」
  confirmLabel?: string;         // 預設「確認」
  cancelLabel?: string;          // 預設「取消」
  defaultValue?: string[];
  // pass-through to FileBrowser:
  nodes: FileBrowserNode[];
  loadChildren?: (folderId: string) => Promise<FileBrowserNode[]>;
  emptyText?: string;
};
```
- 固定 `Dialog size="lg"`
- 內部維護 selection state；onConfirm 時才將最終值回呼
- onClose（X / 取消 / backdrop）不觸發 onConfirm
- 未選任何 file → 確認鈕 disabled
- 每次 `open: false → true` 時 reset selection 為 `defaultValue ?? []`、path 回 root

## 檔案結構
```
src/components/FileBrowser/
├── FileBrowser.tsx
├── FileBrowserDialog.tsx
├── FileBrowserNode.tsx       (internal row component)
├── FileBrowser.css
├── FileBrowser.stories.tsx   (6 stories: basic / leadingLineOff / disabled / async / dialog / empty)
└── types.ts
```
- `src/components/index.ts` re-export：`FileBrowser`、`FileBrowserDialog`、type `FileBrowserNode`
- `src/styles/index.css` 加入 `@import './components/FileBrowser/FileBrowser.css'`
- `src/components/components.md` 加 `FileBrowser` 區段（含 `FileBrowserDialog` 子段）

## Out of scope
- Drag & drop reorder
- Add / rename / delete folder（Figma 有，但本元件聚焦在 browse + select）
- 右側 toolbar slot（preserves for future, 不在本版開放）
- 檔案類型過濾（後端處理）
