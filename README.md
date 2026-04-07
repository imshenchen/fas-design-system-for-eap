# FAS Design System

Delta 共用設計系統，提供 React 元件庫、設計 Token 與 Storybook 文件。

## 專案結構

```
fas-design-system-for-eap/
├── fas-design-system/          # npm 元件庫（@delta/fas-design-system）
│   ├── .storybook/             # Storybook 設定
│   ├── src/
│   │   ├── components/         # 元件（.tsx + .css + .stories.tsx）
│   │   ├── styles/             # 全域樣式入口
│   │   └── tokens/             # 設計 Token（CSS 變數 + JS 引用）
│   ├── vite.config.ts          # Library build 設定
│   └── package.json
├── rules/                      # AI 工具用設計規範文件
│   ├── README.md               # 使用說明
│   ├── design-tokens.md        # Token 完整定義
│   ├── components.md           # 元件規格
│   └── usage-guidelines.md     # 使用規範
├── CHANGELOG.md                # 版本異動記錄
└── README.md                   # 本檔案
```

## 使用元件庫

```bash
npm install @delta/fas-design-system
```

詳細安裝與使用說明請參考 [fas-design-system/README.md](./fas-design-system/README.md)。

## Storybook

在線上預覽所有元件：

👉 [FAS Design System Storybook](https://your-org.github.io/fas-design-system-for-eap/)

本機啟動：

```bash
npm run storybook
```

## 開發

```bash
# 安裝依賴
npm install

# 啟動 Storybook（開發模式）
npm run storybook

# 打包元件庫（輸出至 fas-design-system/dist/）
npm run build
```

## 發布

### 發布 Storybook 到 GitHub Pages

推送到 `main` branch 後，GitHub Actions 會自動建置並部署 Storybook。

### 發布 npm 套件

建立版本 tag 後自動發布：

```bash
# 更新版本號
npm version patch -w fas-design-system   # or minor / major

# 推送 tag 觸發發布流程
git push origin main --tags
```

發布前請先在 GitHub Secrets 設定 `NPM_TOKEN`。

## AI 規範文件

`rules/` 資料夾包含供 AI 工具使用的設計規範，幫助 AI 在生成程式碼時遵循 FAS Design System 的設計語言。詳見 [rules/README.md](./rules/README.md)。
