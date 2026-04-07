# FAS Design System — 設計準則

> 適用對象：任何為 Delta DIAAuto 系列產品（EAP+等）生成 UI 的 AI 系統。
> 與框架無關，描述視覺與互動的設計決策。

---

## 基礎原則

- 顏色一律使用語意色票，不寫死色碼。
- Dark Mode 透過切換色票實現，元件結構不變
- 間距以 **4px** 為基本單位，常用值：8、12、16、24、32px
- 圓角統一 **4px**（特殊情境 8px，圓形元件 50%）
- 字體：拉丁字母與數字用 Roboto，中文用 Noto Sans TC
- Icon 使用 Google Material Symbols（filled 變體，20px 標準尺寸）

---

## 版面結構

頂端導覽列（60px，sticky）→ 左側選單（展開 280px / 收折 80px，sticky）→ 主內容區（padding 32px，背景略深於白色）

左側選單底部固定版本號，選單項目可滾動。

Z-index 由低至高：一般內容 → Sticky 表頭（10）→ 選單（50）→ 導覽列（100）→ 下拉（200）→ Dialog（300）→ Tooltip（400）→ Snackbar（500）

### 版面 padding 結構

`<main>` 本身設 `padding: 0`、`overflow: auto`，不直接套 padding。

- FeatureTitle 緊貼頂部，直接放在 `<main>` 內，不包在 padding 容器中，確保 sticky 時能貼齊 NavBar
- FeatureTitle 以下的功能內容包在 `padding: 32px` 的 wrapper `<div>` 中

```
<main style="padding: 0; overflow: auto">
  <FeatureTitle ... />
  <div style="padding: 32px">
    {/* 頁面功能內容 */}
  </div>
</main>
```

FeatureTitle 與內容區不共用 padding，兩者結構分離。

---

## 按鈕 Button

三種視覺層級：**實心（Contained）> 外框（Outlined）> 文字（Text）**

- 一個頁面區域只放一個實心按鈕作為主要動作，且只能搭配主色
- 外框為預設通用按鈕；文字按鈕用於工具列或空間緊湊情境
- 危險操作用 Error 色，實心樣式除外（危險操作通常用外框）
- 文字超出不換行，搭配 Tooltip 顯示完整內容

---

## 狀態標籤 Chip

- 只適合顯示**範圍有限的語意狀態**（機台狀態、工單狀態等），不適合顯示任意文字
- 系統狀態（processing / success / warning / error / milestone 等）有對應的語意色，不得自行指定顏色
- 可選取（Selectable）用於過濾器，可移除（Removable）用於表單已選項目

---

## 表單元件

- 輸入框預設使用外框（Outlined）樣式，尺寸預設 M（40px）
- 錯誤狀態在輸入框下方顯示說明文字，顏色用危險色
- Checkbox 支援部分選取（Indeterminate）狀態
- Switch 用於即時生效的開關，Checkbox 用於確認後提交的選項

---

## 通知與反饋

**Alert**：行內訊息嵌入內容區，全頁橫幅則置於頁面頂端。只有錯誤和成功需要明確告知，一般提示勿過度使用。

**Snackbar**：短暫通知，4 秒後自動消失，不要求使用者操作。重要錯誤請用 Alert 或 Dialog，不要用 Snackbar。

**Dialog**：需要使用者確認才繼續的情境，背景加遮罩。危險操作的確認按鈕用 Error 色。

---

## 資料呈現

**DataTable**：標題列背景略深，偶數行可使用斑馬紋增加可讀性，選取行用淡藍色背景。排序圖示在欄位 hover 時才明顯出現。

**Card**：用於工廠看板、儀表板等。深色底（#fafafa）搭配懸浮陰影卡片；白色底改用外框卡片。圓角一律 4px。

---

## 導覽

**麵包屑**：最多 5 層，當前頁面為最後一項且不可點擊，文字顏色較深以示區別。非末層項目必須提供 `onClick` 處理導覽，末層為純文字（current），不傳 `onClick`。

**FeatureTitle**：
- `topOffset` 預設為 NavBar 高度（60px）；若 `<main>` 有 `overflow: auto`，sticky 定位相對於 `<main>`，此時 `topOffset` 應設為 `0`
- 右側 `actions` 最多兩個按鈕：主要動作用 `contained`，次要動作用 `outlined`

**Tab**：頁籤切換用底線指示器標示當前項，不使用背景色切換。

**Stepper**：已完成步驟顯示打勾，當前步驟填滿主色，未來步驟用灰色。

**Pagination**：首頁 / 末頁按鈕在第一頁 / 最後一頁時 disabled。

---

## Dark Mode

透過 `document.documentElement.setAttribute('data-theme', 'dark')` 切換，移除 attribute 回到 light mode。
元件結構不需改變，CSS 變數自動更新，所有顏色即時反映。
切換邏輯由應用程式控制，設計系統不內建切換 UI。

---

## 左側導覽選單

- 章節標題（Section header）不可點擊，文字用主色，字級較大
- L1 項目帶 icon，有子項目時顯示展開箭頭
- L2 子項目縮排，左側有導引線，選中狀態用淡藍色背景
- 收折時只顯示 icon，hover 顯示 Tooltip 補充文字
- 版本號固定在底部，不隨選單捲動
