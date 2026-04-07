# FAS Design System — Claude Code 全局設定

## 設計系統文件
> 所有生成任務開始前，載入以下文件。

@src/components/components.md

---

## 專案概覽

- **產品**：FAS Design System（Delta 共用設計系統）
- **用途**：提供設計 Token、元件規格與展示，供各產品（EAP+、DIAWorks 等）引用
- **主要消費方**：EAP+、DIAWorks 等 Delta 產品線

---

## 專案結構

```
fas-design-system-for-eap/
├── fas-design-system/           ← 元件庫（本目錄）
│   ├── CLAUDE.md                ← 本檔（AI 全局設定）
│   ├── .storybook/              ← Storybook 設定
│   └── src/
│       ├── tokens/
│       │   ├── tokens.css       ← CSS 自訂屬性（Light / Dark mode，Token 唯一來源）
│       │   └── tokens.ts        ← Token JS/TS 引用（cssVars、rawTokens、spacing、zIndex）
│       ├── styles/
│       │   └── index.css        ← 全域樣式入口（引入所有元件 CSS）
│       └── components/
│           ├── components.md    ← 元件使用指引（AI 參照）
│           └── */               ← 各元件（.tsx + .css + .stories.tsx）
```

---

## 核心規則

### Token 管理
- `src/tokens/tokens.css` 是所有 Token 值的**唯一來源**（Light Mode `:root`，Dark Mode `[data-theme="dark"]`）
- `src/tokens/tokens.ts` 提供 `cssVars`、`rawTokens`、`spacing`、`zIndex` 等 JS 引用
- 所有顏色、間距數值皆須引用 Token，禁止硬編碼
- Token 異動必須同步更新 Figma Variables，兩者保持一致

### 元件規格
- `src/components/components.md` 說明各元件的用途與使用方式
- 消費方產品不得自行創造與此規格衝突的替代元件
- 新元件加入前需在 `components.md` 補充說明

### 生成行為
- 無法判斷的規格標記 `⚠️ 需確認`，不自行假設

---

## 團隊協作規則

- 修改 `src/` 內任何文件前，需告知團隊並同步 Figma
- Token 新增 / 修改後，通知所有消費方產品更新對應的 CSS 變數

---

## 消費方引用路徑

```
../fas-design-system/src/components/components.md
```
