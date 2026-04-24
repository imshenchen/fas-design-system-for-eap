/**
 * SplitDetailView — FAS Design Kit (Template)
 *
 * 左側 master（通常是表格 / 列表）、右側嵌入式 detail drawer 的 split layout。
 * 選取一筆 master 資料 → 開啟 drawer 顯示該項目詳細內容。
 * 業界此 pattern 常稱為 Split View（Apple / Salesforce）、List-Detail（Material Design）。
 *
 * 結構：
 *   ┌────────────────────────┬──────────────────────┐
 *   │ DataTable / List       │ Drawer (variant=     │
 *   │  ○ row 1               │  float, anchor=right)│
 *   │  ● row 2  (selected)   │  ── title ──── [X]   │
 *   │  ○ row 3               │  subtitle            │
 *   │                        │  Tabs / content      │
 *   └────────────────────────┴──────────────────────┘
 *
 * Drawer 以 `variant="float"` 嵌入版面：關閉時不 render、左側自然回填。
 * 不含 AppShell / FeatureTitle，請在外層自行組合。
 *
 * 選取狀態 ↔ drawer 開關的綁定由使用者管理，樣板本身只處理版面。
 */
import React from 'react';
import { Drawer } from '../../components/Drawer/Drawer';
import type { DrawerSize } from '../../components/Drawer/Drawer';
import './SplitDetailView.css';

export interface SplitDetailViewProps {
  /** Drawer 開啟狀態 */
  drawerOpen: boolean;
  /** Drawer 關閉 callback（X 按鈕 / 外部取消選取時觸發） */
  onDrawerClose: () => void;
  /** Drawer 標題（通常是被選取項目的名稱） */
  drawerTitle?: React.ReactNode;
  /** 標題下方的副標（小字、`text-medium`），可放 description、meta 資訊等 */
  drawerSubtitle?: React.ReactNode;
  /** Drawer 內容（通常是 Tabs + 嵌套表格 / 表單） */
  drawerContent?: React.ReactNode;
  /** Drawer 寬度級距，預設 `'l'`（50vw），可傳 `s` / `m` / `l` */
  drawerSize?: DrawerSize;
  /** 自訂 drawer 寬度（px 或任意 CSS 長度值），會覆寫 `drawerSize` */
  drawerWidth?: number | string;
  /** 左側 master 內容（通常是 DataTable；也可自訂 topbar + 表格組合） */
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const SplitDetailView: React.FC<SplitDetailViewProps> = ({
  drawerOpen,
  onDrawerClose,
  drawerTitle,
  drawerSubtitle,
  drawerContent,
  drawerSize = 'l',
  drawerWidth,
  children,
  className,
  style,
}) => (
  <div
    className={['fas-split-detail', className].filter(Boolean).join(' ')}
    style={style}
  >
    <div className="fas-split-detail__master">{children}</div>
    <Drawer
      variant="float"
      anchor="right"
      size={drawerSize}
      width={drawerWidth}
      open={drawerOpen}
      onClose={onDrawerClose}
      title={drawerTitle}
    >
      {drawerSubtitle && (
        <div className="fas-split-detail__subtitle">{drawerSubtitle}</div>
      )}
      {drawerContent}
    </Drawer>
  </div>
);

SplitDetailView.displayName = 'SplitDetailView';
