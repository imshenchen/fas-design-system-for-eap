/**
 * LMSwitchPanel — LM Tier
 *
 *   ┌────────────────────────────────────────────────┐
 *   │ [FeatureTitle] │ [Tile1] [Tile2] [Tile3] ... → │
 *   └────────────────────────────────────────────────┘
 *
 * - 與 NavBar / SideMenu 貼齊（無外框、無圓角、僅下方 divider）
 * - 最左側：當前頁面（功能）名稱 FeatureTitle
 * - 中間 vertical divider
 * - 右側：水平排列 `LMScopeTile`；過多時整列**水平捲動**
 */
import React from 'react';
import { Divider } from '../../../components/Divider/Divider';
import { LMScopeTile } from '../LMScopeTile/LMScopeTile';
import './LMSwitchPanel.css';
import type {
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
  icon?: React.ReactNode;
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
  /**
   * 最左側 FeatureTitle —— 當前頁面（功能）名稱。
   * 通常傳「左側 SideMenu 中目前選中的功能」名稱（如 "即時數據"）。
   * 未傳則不渲染 title 區段與 divider。
   */
  featureTitle?: React.ReactNode;
  /**
   * 最右側 slot —— 固定在 panel 最右、**不受中間 tile 捲動影響**。
   * 通常傳 `<LMQuadrantSelector size={52} ... />` 等控制元件。
   * 注意：傳入元件高度建議 ≤ 52px（panel tile 內容高），否則會撐高 panel。
   */
  rightSlot?: React.ReactNode;
  /** 自訂 className */
  className?: string;
}

// ─── FeatureTitle (left section) ─────────────────────────────────────────────
const FeatureTitleSection: React.FC<{ title: React.ReactNode }> = ({ title }) => (
  <div
    className="lm-switch-panel__title"
    style={{
      display:       'flex',
      alignItems:    'center',
      paddingInline: spacing[3],
      flexShrink:    0,
      minWidth:      0,
      maxWidth:      '240px',
    }}
  >
    <span
      style={{
        fontSize:     '18px',
        lineHeight:   '24px',
        fontWeight:   500,
        color:        cssVars.textHigh,
        fontFamily:   '"Noto Sans TC", sans-serif',
        whiteSpace:   'nowrap',
        overflow:     'hidden',
        textOverflow: 'ellipsis',
      }}
    >
      {title}
    </span>
  </div>
);

// ─── Main component ──────────────────────────────────────────────────────────
export const LMSwitchPanel = React.forwardRef<HTMLDivElement, LMSwitchPanelProps>(
  ({ items, value, onChange, gap = spacing[3], featureTitle, rightSlot, className }, ref) => {
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
          {/* Left — current feature (page) name */}
          {featureTitle && (
            <>
              <FeatureTitleSection title={featureTitle} />
              <Divider orientation="vertical" />
            </>
          )}

          {/* Middle — tile row（過多時水平捲動）；
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
                icon={item.icon}
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
