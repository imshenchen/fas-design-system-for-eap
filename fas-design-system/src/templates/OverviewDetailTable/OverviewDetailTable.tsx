/**
 * OverviewDetailTable — FAS Design Kit (Template)
 *
 * 「實體概覽 + 子項列表」的版面樣板。常見於節點管理、應用程式管理、
 * 機台管理等「主檔頁面」：上方一張 overview 卡片摘要當前實體，下方
 * 一個資料表列出其底下的細項清單（設備、實例、規則…）。
 *
 *   ┌──────────────────────────────────────────────────────────┐
 *   │ Tabs（可選）                                              │
 *   ├──────────────────────────────────────────────────────────┤
 *   │ ┌──────────────────────────────────────────────────────┐ │
 *   │ │ Overview：icon ＋ 名稱 ＋ 狀態 chip ＋ meta ＋ actions  │ │
 *   │ └──────────────────────────────────────────────────────┘ │
 *   ├──────────────────────────────────────────────────────────┤
 *   │ Toolbar：清單標題 + 計數 + 主操作 + 篩選 + 搜尋             │
 *   │                                                          │
 *   │ DataTable                                                │
 *   └──────────────────────────────────────────────────────────┘
 *
 * 樣板只負責版面與間距，不規定 overview / toolbar 的結構 ——
 * 由使用者自行組合 Card / Tabs / DataTable 等元件。
 *
 * 不含 AppShell / FeatureTitle，請在外層自行組合。
 */
import React from 'react';
import './OverviewDetailTable.css';

export interface OverviewDetailTableProps {
  /** 頁面層級的 Tabs（如「概覽 / 儀表板」），顯示在 overview 上方 */
  tabs?: React.ReactNode;
  /** Overview 區塊內容（通常是一張帶 icon、名稱、狀態、meta 的卡片） */
  overview?: React.ReactNode;
  /** 表格上方的工具列：清單標題、計數、主操作（新建 / 上傳）、篩選、搜尋 */
  toolbar?: React.ReactNode;
  /** 主內容（通常是 DataTable） */
  children?: React.ReactNode;
  /** 區塊之間的垂直間距（px），預設 24 */
  gap?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

export const OverviewDetailTable: React.FC<OverviewDetailTableProps> = ({
  tabs,
  overview,
  toolbar,
  children,
  gap = 24,
  className,
  style,
}) => {
  const cssVars = {
    '--fas-odt-gap': typeof gap === 'number' ? `${gap}px` : gap,
  } as React.CSSProperties;

  return (
    <div
      className={['fas-overview-detail-table', className].filter(Boolean).join(' ')}
      style={{ ...cssVars, ...style }}
    >
      {tabs && <div className="fas-overview-detail-table__tabs">{tabs}</div>}
      {overview && (
        <div className="fas-overview-detail-table__overview">{overview}</div>
      )}
      <div className="fas-overview-detail-table__list">
        {toolbar && (
          <div className="fas-overview-detail-table__toolbar">{toolbar}</div>
        )}
        <div className="fas-overview-detail-table__table">{children}</div>
      </div>
    </div>
  );
};

OverviewDetailTable.displayName = 'OverviewDetailTable';
