# @delta/fas-design-system

FAS Design System 是 Delta 共用的 React 元件庫，提供一致的設計語言、設計 Token 與可複用元件，供 EAP+、DIAWorks 等各產品線使用。

## 安裝

```bash
npm install @delta/fas-design-system
```

## 快速開始

**1. 引入全域樣式**

在你的應用程式入口（`main.tsx` 或 `index.tsx`）加入：

```tsx
import '@delta/fas-design-system/styles';
```

**2. 使用元件**

```tsx
import { Button, TextField, StatusChip } from '@delta/fas-design-system';

function App() {
  return (
    <div>
      <Button variant="contained" color="primary">送出</Button>
      <TextField label="帳號" placeholder="請輸入帳號" />
      <StatusChip status="success">已完成</StatusChip>
    </div>
  );
}
```

## 主題切換

FAS Design System 支援 Light / Dark 主題，透過 `data-theme` attribute 控制：

```tsx
// 切換至 Dark mode
document.documentElement.setAttribute('data-theme', 'dark');

// 切換回 Light mode
document.documentElement.removeAttribute('data-theme');
```

## 可用元件

| 分類 | 元件 |
|------|------|
| **Foundations** | Avatar, Badge, Divider |
| **Data Entry** | Button, IconButton, Checkbox, Radio, Switch, Slider, TextField, Uploader |
| **Data Display** | Chip, DataTable, List, Card, FeatureTitle |
| **Feedback** | Alert, Snackbar, Tooltip, Progress, Spin |
| **Navigation** | Breadcrumbs, Tab, Pagination, Stepper, Menu |
| **Layout** | Accordion, Dialog, Drawer |

## Storybook

完整的元件文件與互動展示請參考 Storybook：

👉 [FAS Design System Storybook](https://your-org.github.io/fas-design-system-for-eap/)

## Peer Dependencies

此套件需要以下 peer dependencies：

```json
{
  "react": ">=18",
  "react-dom": ">=18"
}
```

## License

MIT
