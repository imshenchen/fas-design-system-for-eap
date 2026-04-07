# FAS Design System

Delta 共用 React 元件庫，提供設計 Token、元件與 Dark Mode 支援。

## 安裝

```bash
npm install @imshenchen/fas-design-system
```

## 快速開始

在應用程式入口（`main.tsx`）引入樣式：

```tsx
import '@imshenchen/fas-design-system/styles';
```

引入元件：

```tsx
import { Button, TextField, StatusChip } from '@imshenchen/fas-design-system';
```

## Dark Mode

透過根元素的 `data-theme` attribute 切換：

```tsx
document.documentElement.setAttribute('data-theme', 'dark');
document.documentElement.removeAttribute('data-theme'); // 回到 Light
```

## 元件文件

完整元件展示請參考 Storybook：

👉 [FAS Design System Storybook](https://imshenchen.github.io/fas-design-system-for-eap/)

## AI 規範文件

`rules/` 資料夾包含供 Claude、Cursor、GitHub Copilot 等 AI 工具使用的設計規範，幫助 AI 在生成程式碼時遵循 FAS Design System 的設計語言。詳見 [rules/usage-guidelines.md](./rules/usage-guidelines.md)。
