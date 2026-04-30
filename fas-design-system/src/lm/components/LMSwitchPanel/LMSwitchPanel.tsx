/**
 * LMSwitchPanel — LM Tier
 *
 * 內容區塊頂部的 scope 切換列。
 *   ┌───────────────────────────────────────────────────────────┐
 *   │ [Current Title] │ [Tile1] [Tile2] [Tile3] ... [More ⋯ +N] │
 *   └───────────────────────────────────────────────────────────┘
 *
 * - 最左側：當前選擇項的「FeatureTitle 標題」（label + 狀態副標）
 * - 中間 vertical divider
 * - 右側：水平排列 `LMScopeTile`；寬度不夠時自動收進 More 下拉選單
 *
 * 不內建 overflow:auto（會剪 LMScopeTile 的 hover tooltip）；改以 More 按鈕處理 overflow。
 */
import React, { useState, useRef, useLayoutEffect } from 'react';
import { Card } from '../../../components/Card/Card';
import { Divider } from '../../../components/Divider/Divider';
import { Menu, MenuItem } from '../../../components/Menu/Menu';
import { LMScopeTile } from '../LMScopeTile/LMScopeTile';
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
   * 最左側顯示的 FeatureTitle —— 當前頁面（功能）名稱。
   * 通常傳入「左側 SideMenu 中目前選中的功能」名稱（如 "即時數據"）。
   * 未傳則不渲染 title 區段與 divider。
   */
  featureTitle?: React.ReactNode;
  /** 自訂 className */
  className?: string;
}

const TILE_SIZE = 72;
const STATUS_COLOR: Record<LMScopeTileStatus, string> = {
  normal:  cssVars.statusSuccess,
  warning: cssVars.statusWarning,
  down:    cssVars.statusError,
};

// ─── FeatureTitle (left section) — current feature/page name ─────────────────
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

// ─── More button (overflow trigger) ──────────────────────────────────────────
const MoreButton = React.forwardRef<
  HTMLButtonElement,
  { count: number; selectedInOverflow: boolean; onClick: () => void }
>(({ count, selectedInOverflow, onClick }, ref) => (
  <button
    ref={ref}
    type="button"
    aria-label={`更多項目（${count}）`}
    onClick={onClick}
    className="lm-switch-panel__more"
    style={{
      width:           `${TILE_SIZE}px`,
      height:          `${TILE_SIZE}px`,
      minWidth:        `${TILE_SIZE}px`,
      minHeight:       `${TILE_SIZE}px`,
      flexShrink:      0,
      padding:         '6px',
      borderRadius:    '6px',
      border:          selectedInOverflow
        ? `2px solid ${cssVars.primary}`
        : `1px dashed ${cssVars.divider}`,
      background:      selectedInOverflow ? cssVars.compHover : cssVars.bgSurface,
      color:           cssVars.textBody,
      cursor:          'pointer',
      display:         'flex',
      flexDirection:   'column',
      alignItems:      'center',
      justifyContent:  'center',
      gap:             '4px',
      fontFamily:      '"Noto Sans TC", sans-serif',
      transition:      'background 0.15s ease, border-color 0.15s ease',
    }}
  >
    <span className="material-symbols-outlined" aria-hidden="true" style={{ fontSize: '22px', lineHeight: 1 }}>
      more_horiz
    </span>
    <span style={{ fontSize: '11px', lineHeight: '14px', fontWeight: 500 }}>
      更多 +{count}
    </span>
  </button>
));
MoreButton.displayName = 'MoreButton';

// ─── Main component ──────────────────────────────────────────────────────────
export const LMSwitchPanel = React.forwardRef<HTMLDivElement, LMSwitchPanelProps>(
  ({ items, value, onChange, gap = spacing[3], featureTitle, className }, ref) => {
    const gapPx     = typeof gap === 'number' ? gap : parseInt(String(gap), 10) || 12;
    const gapCss    = `${gapPx}px`;

    const rowRef       = useRef<HTMLDivElement>(null);
    const moreBtnRef   = useRef<HTMLButtonElement>(null);
    const [visibleCount, setVisibleCount] = useState(items.length);
    const [moreOpen,     setMoreOpen]     = useState(false);

    useLayoutEffect(() => {
      const row = rowRef.current;
      if (!row) return;

      const calc = () => {
        const rowWidth = row.clientWidth;
        if (rowWidth <= 0) return;

        const allTilesWidth = items.length * TILE_SIZE + Math.max(0, items.length - 1) * gapPx;

        if (allTilesWidth <= rowWidth) {
          setVisibleCount(items.length);
          return;
        }

        // Need More button: reserve TILE_SIZE + gap
        const availableMinusMore = rowWidth - TILE_SIZE - gapPx;
        const fittable = Math.max(
          0,
          Math.floor((availableMinusMore + gapPx) / (TILE_SIZE + gapPx)),
        );
        setVisibleCount(fittable);
      };

      calc();
      const observer = new ResizeObserver(calc);
      observer.observe(row);
      return () => observer.disconnect();
    }, [items.length, gapPx]);

    const visibleItems  = items.slice(0, visibleCount);
    const overflowItems = items.slice(visibleCount);
    const hasOverflow   = overflowItems.length > 0;
    const selectedInOverflow = hasOverflow && overflowItems.some((i) => i.key === value);

    return (
      <Card
        variant="outlined"
        className={['lm-switch-panel', className].filter(Boolean).join(' ')}
        // 不可加 overflow:hidden —— 會剪掉 LMScopeTile 的 hover tooltip
        style={{ padding: spacing[2] }}
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
          {/* Left — current feature (page) name from SideMenu activeKey */}
          {featureTitle && (
            <>
              <FeatureTitleSection title={featureTitle} />
              <Divider orientation="vertical" />
            </>
          )}

          {/* Right — tile row */}
          <div
            ref={rowRef}
            className="lm-switch-panel__tiles"
            style={{
              display:    'flex',
              alignItems: 'flex-start',
              gap:        gapCss,
              flex:       1,
              minWidth:   0,
              // 不可加 overflow —— overflow 會讓兩軸都 clip、剪掉 hover tooltip
              // overflow 由 More 按鈕邏輯處理
            }}
          >
            {visibleItems.map((item) => (
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

            {hasOverflow && (
              <>
                <MoreButton
                  ref={moreBtnRef}
                  count={overflowItems.length}
                  selectedInOverflow={selectedInOverflow}
                  onClick={() => setMoreOpen((o) => !o)}
                />
                <Menu
                  anchorEl={moreBtnRef.current}
                  open={moreOpen}
                  onClose={() => setMoreOpen(false)}
                >
                  {overflowItems.map((item) => (
                    <MenuItem
                      key={item.key}
                      selected={item.key === value}
                      disabled={item.disabled}
                      onClick={() => {
                        onChange(item.key, item);
                        setMoreOpen(false);
                      }}
                      icon={
                        <span
                          aria-hidden="true"
                          style={{
                            display:         'inline-block',
                            width:           '10px',
                            height:          '10px',
                            borderRadius:    '50%',
                            backgroundColor: item.disabled
                              ? cssVars.compDisabledEl
                              : STATUS_COLOR[item.status],
                          }}
                        />
                      }
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}
          </div>
        </div>
      </Card>
    );
  },
);

LMSwitchPanel.displayName = 'LMSwitchPanel';

export default LMSwitchPanel;
