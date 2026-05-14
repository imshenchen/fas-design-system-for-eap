/**
 * LMSwitchPanel — LM Tier
 *
 *   ┌────────────────────────────────────────────┐
 *   │ [Tile1] [Tile2] [Tile3] ... → │ rightSlot │
 *   └────────────────────────────────────────────┘
 *
 * - 與 NavBar / SideMenu 貼齊（無外框、無圓角、僅下方 divider）
 * - 水平排列 `LMScopeTile`；過多時整列**水平捲動**
 * - 最右側固定 slot（不受 tile scroll 影響）
 *
 * 頁面標題（feature title）由上游的 `LMFeatureTitle` 負責；本元件不再內含 title 區段。
 */
import React from 'react';
import { Divider } from '../../../components/Divider/Divider';
import { LMScopeTile } from '../LMScopeTile/LMScopeTile';
import './LMSwitchPanel.css';
import type {
  LMScopeTileLocale,
  LMScopeTileStatus,
  LMScopeTileType,
} from '../LMScopeTile/LMScopeTile';
import { cssVars, spacing } from '../../../tokens/tokens';

export type LMSwitchPanelStatus = LMScopeTileStatus;

export interface LMSwitchPanelItem {
  key: string;
  label: string;
  type: LMScopeTileType;
  status: LMSwitchPanelStatus;
  disabled?: boolean;
}

export interface LMSwitchPanelProps {
  items: LMSwitchPanelItem[];
  /** 目前選取的 key（受控） */
  value: string;
  /** 選取變動 callback */
  onChange: (key: string, item: LMSwitchPanelItem) => void;
  /** Tile 之間的水平間距，預設 12px */
  gap?: number | string;
  /** Tile 內 type caption / 狀態文字的語系，預設 `zh` */
  locale?: LMScopeTileLocale;
  /**
   * 最右側 slot —— 固定在 panel 最右、**不受中間 tile 捲動影響**。
   * 通常傳 `<LMQuadrantSelector size={52} ... />` 等控制元件。
   * 注意：傳入元件高度建議 ≤ 52px（panel tile 內容高），否則會撐高 panel。
   */
  rightSlot?: React.ReactNode;
  /** 自訂 className */
  className?: string;
}

// ─── Main component ──────────────────────────────────────────────────────────
export const LMSwitchPanel = React.forwardRef<HTMLDivElement, LMSwitchPanelProps>(
  ({ items, value, onChange, gap = spacing[3], locale = 'zh', rightSlot, className }, ref) => {
    const gapCss = typeof gap === 'number' ? `${gap}px` : gap;

    return (
      <div
        className={['lm-switch-panel', className].filter(Boolean).join(' ')}
        style={{
          // flush 樣式：與 NavBar / SideMenu 貼齊，無圓角、無外框；僅下方 divider
          background:   cssVars.bgSurface,
          borderBottom: `1px solid ${cssVars.divider}`,
          padding:      `${spacing[2]} ${spacing[6]}`, // 8 / 24（匹配 core FeatureTitle）
          boxSizing:    'border-box',
        }}
      >
        <div
          ref={ref}
          role="tablist"
          aria-label="Scope switcher"
          style={{
            display:    'flex',
            alignItems: 'stretch',
            gap:        gapCss,
            minWidth:   0,
          }}
        >
          {/* Tile row（過多時水平捲動）；
              row 高度比 tile 高 4px，讓 tile 上下 border 有 2px 緩衝（避免 overflow 剪掉） */}
          <div
            className="lm-switch-panel__tiles"
            style={{
              display:        'flex',
              alignItems:     'center',
              gap:            gapCss,
              flex:           1,
              minWidth:       0,
              height:         '56px',
              minHeight:      '56px',
              overflowX:      'auto',
              overflowY:      'hidden',
              scrollbarWidth: 'none',
            }}
          >
            {items.map((item) => (
              <LMScopeTile
                key={item.key}
                type={item.type}
                label={item.label}
                status={item.status}
                locale={locale}
                disabled={item.disabled}
                selected={item.key === value}
                onClick={() => onChange(item.key, item)}
              />
            ))}
          </div>

          {/* Right — fixed slot（外層 flex sibling，不受 tile scroll 影響） */}
          {rightSlot && (
            <>
              <Divider orientation="vertical" />
              <div
                className="lm-switch-panel__right-slot"
                style={{
                  display:    'flex',
                  alignItems: 'center',
                  flexShrink: 0,
                  minWidth:   0,
                }}
              >
                {rightSlot}
              </div>
            </>
          )}
        </div>
      </div>
    );
  },
);

LMSwitchPanel.displayName = 'LMSwitchPanel';

export default LMSwitchPanel;
