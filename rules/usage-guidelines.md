# FAS Design System — AI 使用規範

此資料夾存放供 AI 工具（Claude、Cursor、GitHub Copilot 等）使用的設計規範文件。
將這些 `.md` 檔案加入 AI 工具的 context，讓 AI 在生成程式碼時遵循 FAS Design System 的規範。

## 檔案說明

| 檔案 | 說明 |
|------|------|
| `usage-guidelines.md` | 安裝、引入、命名規則、給 AI 的核心規則（本檔） |
| `components-usage.md` | 設計準則：視覺層級、互動規則、版面結構 |

---

## 如何在 AI 工具中載入

### Claude Code
在你的專案根目錄建立 `CLAUDE.md`，加入：
```
@path/to/fas-design-system/rules/usage-guidelines.md
@path/to/fas-design-system/rules/components-usage.md
```

### Cursor
在 `.cursorrules` 或 Cursor 設定的 `Rules for AI` 中貼入各 `.md` 檔案內容。

### GitHub Copilot
建立 `.github/copilot-instructions.md`，貼入各 `.md` 檔案內容。

---

## 安裝

```bash
npm install @delta/fas-design-system
```

## 引入樣式

在應用程式入口（如 `main.tsx`）引入一次：

```tsx
import '@delta/fas-design-system/styles';
```

## 引入元件

```tsx
import { Button, TextField, DataTable } from '@delta/fas-design-system';
```

## Design Tokens

Token 定義於 `fas-design-system/src/tokens/tokens.ts`，提供三組匯出：

- `cssVars` — CSS 變數參照，用於 React inline style 或 styled-components（如 `cssVars.primary` = `'var(--primary)'`）
- `rawTokens` — 原始色碼，用於 JS 邏輯、圖表配色等
- `spacing` — 間距比例（4px 基礎單位，`spacing[4]` = `'16px'`）
- `zIndex` — Z-index 層級（`zIndex.dialog` = `300`）

```tsx
import { cssVars, rawTokens, spacing, zIndex } from '@delta/fas-design-system';
```

## 主題（Light / Dark）

使用 `data-theme` attribute 切換：

```tsx
document.documentElement.setAttribute('data-theme', 'dark');
document.documentElement.removeAttribute('data-theme'); // 回到 light
```

## 命名規則

- 元件 class 前綴：`fas-`（例：`fas-btn`、`fas-chip`）
- BEM 結構：`fas-[component]__[element]--[modifier]`
- CSS 變數無前綴（例：`var(--primary)`、`var(--text-body)`、`var(--divider)`）

---

## 核心規則（給 AI）

1. **禁止硬編碼顏色**：所有顏色使用 CSS 變數（`var(--primary)` 等），或透過 `cssVars` / `rawTokens` 引用
2. **禁止硬編碼間距**：使用 `spacing` 或 4px 倍數
3. **遵循 BEM 命名**：class 名稱使用 `fas-` 前綴
4. **不創造新變體**：只使用 `components-usage.md` 中描述的視覺樣式與行為
5. **Dark Mode 必須支援**：元件 CSS 需處理 `[data-theme="dark"]` 狀態
6. **Token 異動需同步**：Token 更新後，所有使用該 Token 的元件同步更新
