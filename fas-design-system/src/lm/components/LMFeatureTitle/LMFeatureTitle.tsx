/**
 * LMFeatureTitle — LM Tier
 *
 * LM 版的 FeatureTitle：與 core FeatureTitle 同角色（NavBar 下方的頁面標題列），
 * 字級小一階以維持 LM 介面整體較緊湊的視覺密度。
 *
 * 字級：label 18px / lineHeight 24px / weight 500（core: 20 / 24 / 500），
 *      分隔 icon 20px（core: 24px）；皆在原設計系統的字級階梯內。
 */
import React from 'react';
import { cssVars, spacing, zIndex } from '../../../tokens/tokens';

// ─── Types ──────────────────────────────────────────────────────────────────

export interface LMFeatureTitleItem {
  label: string;
  /** 有 onClick 時渲染為可點擊連結，否則為純文字（current） */
  onClick?: () => void;
}

export interface LMFeatureTitleProps {
  /**
   * 麵包屑導航層級，最多 5 層。
   * 最後一項為當前頁面（不可點擊），其餘項目需提供 onClick。
   */
  items: LMFeatureTitleItem[];
  /**
   * 右側操作按鈕區，傳入 <Button> 元件即可。
   * 建議最多放 2 個按鈕。
   */
  actions?: React.ReactNode;
  /** 自訂 className */
  className?: string;
  /**
   * 距離頂部的偏移量（px），預設 56（NavBar 高度）。
   * 若 NavBar 高度不同，請依實際值調整。
   */
  topOffset?: number;
}

// ─── Component ──────────────────────────────────────────────────────────────

export const LMFeatureTitle = React.forwardRef<HTMLDivElement, LMFeatureTitleProps>(
  ({ items, actions, className, topOffset = 56 }, ref) => {
    const visibleItems = items.slice(0, 5);

    return (
      <div
        ref={ref}
        className={['lm-feature-title', className].filter(Boolean).join(' ')}
        style={{
          position:        'sticky',
          top:             topOffset,
          zIndex:          zIndex.sticky,
          display:         'flex',
          alignItems:      'center',
          gap:             spacing[4],
          minHeight:       '48px',
          padding:         `${spacing[1]} ${spacing[6]}`,
          backgroundColor: cssVars.bgSurface,
          borderBottom:    `1px solid ${cssVars.divider}`,
          boxSizing:       'border-box',
        }}
      >
        {/* ── Left: Breadcrumb Navigation ── */}
        <nav
          aria-label="Page breadcrumb"
          className="lm-feature-title__nav"
          style={{ display: 'flex', alignItems: 'center', gap: spacing[2], flex: 1, minWidth: 0 }}
        >
          {visibleItems.map((item, idx) => {
            const isLast  = idx === visibleItems.length - 1;
            const isLink  = !isLast && !!item.onClick;

            return (
              <React.Fragment key={idx}>
                {isLink ? (
                  <button
                    type="button"
                    onClick={item.onClick}
                    className="lm-feature-title__crumb lm-feature-title__crumb--link"
                    style={{
                      font:            'inherit',
                      fontSize:        '18px',
                      lineHeight:      '24px',
                      fontWeight:      500,
                      fontFamily:      '"Noto Sans TC", sans-serif',
                      color:           cssVars.secondary,
                      background:      'none',
                      border:          'none',
                      padding:         0,
                      cursor:          'pointer',
                      whiteSpace:      'nowrap',
                      textDecoration:  'none',
                    }}
                  >
                    {item.label}
                  </button>
                ) : (
                  <span
                    className={`lm-feature-title__crumb${isLast ? ' lm-feature-title__crumb--current' : ''}`}
                    aria-current={isLast ? 'page' : undefined}
                    style={{
                      fontSize:     '18px',
                      lineHeight:   '24px',
                      fontWeight:   500,
                      fontFamily:   '"Noto Sans TC", sans-serif',
                      color:        isLast ? cssVars.textHigh : cssVars.secondary,
                      whiteSpace:   'nowrap',
                      overflow:     isLast ? 'hidden' : undefined,
                      textOverflow: isLast ? 'ellipsis' : undefined,
                    }}
                  >
                    {item.label}
                  </span>
                )}

                {!isLast && (
                  <span
                    className="material-symbols-outlined lm-feature-title__sep"
                    aria-hidden="true"
                    style={{
                      fontSize:   '20px',
                      lineHeight: '24px',
                      color:      cssVars.secondary,
                      userSelect: 'none',
                      flexShrink: 0,
                    }}
                  >
                    navigate_next
                  </span>
                )}
              </React.Fragment>
            );
          })}
        </nav>

        {/* ── Right: Action Buttons ── */}
        {actions && (
          <div
            className="lm-feature-title__actions"
            style={{
              display:    'flex',
              alignItems: 'center',
              gap:        spacing[4],
              flexShrink: 0,
            }}
          >
            {actions}
          </div>
        )}
      </div>
    );
  }
);

LMFeatureTitle.displayName = 'LMFeatureTitle';

export default LMFeatureTitle;
