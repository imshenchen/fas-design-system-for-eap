/**
 * LMQuadrantSelector — LM Tier
 *
 * 田字狀按鈕：使用者可獨立切換 4 個象限（左上/右上/左下/右下）的選取狀態，
 * 中央圓形按鈕可一鍵全選 / 全不選。
 *
 *   ┌────┬────┐  ┌──────┐
 *   │ TL │ TR │  │ Top  │   ← showRowSelectors=true 時，右側出現
 *   ├──┐━┌──┤  ├──────┤   　 「全選上排 / 全選下排」按鈕欄
 *   │ BL │ BR │  │ Bot  │
 *   └────┴────┘  └──────┘
 *
 * 適用情境：選擇設備上 4 個區塊的上料資料 / 4 區感測點 / 拼板區域等。
 */
import React from 'react';
import { cssVars } from '../../../tokens/tokens';

export type LMQuadrantKey = 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight';

export type LMQuadrantLabels = Partial<Record<LMQuadrantKey, React.ReactNode>>;
export type LMQuadrantDisabled = Partial<Record<LMQuadrantKey, boolean>>;

export interface LMQuadrantSelectorProps {
  /** 目前已選的象限（受控） */
  value: LMQuadrantKey[];
  /** 選取變動 callback；回傳新的 keys 陣列 */
  onChange: (next: LMQuadrantKey[]) => void;
  /** 各象限顯示的 label，預設為中文位置名稱 */
  labels?: LMQuadrantLabels;
  /** 各象限是否禁用 */
  disabled?: LMQuadrantDisabled;
  /** 田字 grid 的邊長（正方形），預設 120。row selector 欄寬度由 `rowSelectorWidth` 控制 */
  size?: number;
  /** 中央按鈕 aria-label，預設 "全選" */
  centerAriaLabel?: string;
  /** 是否在田字右側顯示「全選上排 / 全選下排」按鈕欄，預設 `false` */
  showRowSelectors?: boolean;
  /** Row selector 欄寬度，預設 `size * 0.4`（最小 36px） */
  rowSelectorWidth?: number;
  /** 田字 grid 與 row selector 欄之間的間距，預設 4px */
  rowSelectorGap?: number;
  /** Top row 按鈕 aria-label，預設 "全選上排" */
  topRowAriaLabel?: string;
  /** Bottom row 按鈕 aria-label，預設 "全選下排" */
  bottomRowAriaLabel?: string;
  /** 自訂 className */
  className?: string;
}

const QUADRANTS:    LMQuadrantKey[] = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
const TOP_ROW_KEYS: LMQuadrantKey[] = ['topLeft', 'topRight'];
const BOT_ROW_KEYS: LMQuadrantKey[] = ['bottomLeft', 'bottomRight'];

/** 各象限的 aria 文字（給螢幕閱讀器用，視覺由 icon 表達） */
const ARIA_LABELS: Record<LMQuadrantKey, string> = {
  topLeft:     '左上',
  topRight:    '右上',
  bottomLeft:  '左下',
  bottomRight: '右下',
};

/** 各象限的預設 icon —— 對角箭頭指向所代表的角落 */
const DEFAULT_ICONS: Record<LMQuadrantKey, string> = {
  topLeft:     'north_west',
  topRight:    'north_east',
  bottomLeft:  'south_west',
  bottomRight: 'south_east',
};

export const LMQuadrantSelector = React.forwardRef<HTMLDivElement, LMQuadrantSelectorProps>(
  (
    {
      value,
      onChange,
      labels,
      disabled,
      size = 120,
      centerAriaLabel = '全選',
      showRowSelectors = false,
      rowSelectorWidth,
      rowSelectorGap = 4,
      topRowAriaLabel = '全選上排',
      bottomRowAriaLabel = '全選下排',
      className,
    },
    ref,
  ) => {
    const isSelected   = (q: LMQuadrantKey) => value.includes(q);
    const isQDisabled  = (q: LMQuadrantKey) => !!disabled?.[q];

    const enabledKeys  = QUADRANTS.filter((q) => !isQDisabled(q));
    const allSelected  = enabledKeys.length > 0 && enabledKeys.every(isSelected);
    const someSelected = enabledKeys.some(isSelected);

    const toggle = (q: LMQuadrantKey) => {
      if (isQDisabled(q)) return;
      if (isSelected(q)) {
        onChange(value.filter((k) => k !== q));
      } else {
        onChange([...value, q]);
      }
    };

    const toggleAll = () => {
      if (allSelected) {
        // 清掉所有 enabled 象限（保留 disabled 的選取狀態，避免改到 caller 不能控的位置）
        onChange(value.filter((k) => isQDisabled(k)));
      } else {
        // 加上所有 enabled 象限
        const next = new Set<LMQuadrantKey>(value);
        for (const k of enabledKeys) next.add(k);
        onChange([...next]);
      }
    };

    const toggleRow = (rowKeys: LMQuadrantKey[]) => {
      const enabledRowKeys = rowKeys.filter((k) => !isQDisabled(k));
      if (enabledRowKeys.length === 0) return;
      const allSel = enabledRowKeys.every(isSelected);
      if (allSel) {
        onChange(value.filter((k) => !enabledRowKeys.includes(k)));
      } else {
        const next = new Set<LMQuadrantKey>(value);
        for (const k of enabledRowKeys) next.add(k);
        onChange([...next]);
      }
    };

    const topEnabled    = TOP_ROW_KEYS.filter((k) => !isQDisabled(k));
    const botEnabled    = BOT_ROW_KEYS.filter((k) => !isQDisabled(k));
    const allTopSelected = topEnabled.length > 0 && topEnabled.every(isSelected);
    const allBotSelected = botEnabled.length > 0 && botEnabled.every(isSelected);
    const topRowDisabled = topEnabled.length === 0;
    const botRowDisabled = botEnabled.length === 0;

    // 中央按鈕 = 32% 邊長，最小 24px（保留可點擊面積）
    const centerSize    = Math.max(24, Math.round(size * 0.32));
    // 象限 icon 隨尺寸縮放，最小 12px 仍可辨識
    const cellIconSize  = Math.max(12, Math.round(size * 0.20));
    // 中央 icon = 中央按鈕 55%
    const centerIconSize = Math.max(12, Math.round(centerSize * 0.55));

    const rowColWidth = Math.max(36, rowSelectorWidth ?? Math.round(size * 0.4));

    const renderRowButton = (
      row: 'top' | 'bottom',
      sel: boolean,
      dis: boolean,
      ariaLabel: string,
      onClick: () => void,
    ) => (
      <button
        type="button"
        aria-pressed={sel}
        aria-label={ariaLabel}
        disabled={dis}
        onClick={onClick}
        className={[
          'lm-quadrant-selector__row',
          `lm-quadrant-selector__row--${row}`,
          sel && 'lm-quadrant-selector__row--selected',
          dis && 'lm-quadrant-selector__row--disabled',
        ].filter(Boolean).join(' ')}
        style={{
          flex:           1,
          minHeight:      0,
          borderTop:      row === 'bottom' ? `1px solid ${cssVars.divider}` : 'none',
          borderRight:    'none',
          borderBottom:   'none',
          borderLeft:     'none',
          borderTopLeftRadius:     row === 'top'    ? '5px' : 0,
          borderTopRightRadius:    row === 'top'    ? '5px' : 0,
          borderBottomLeftRadius:  row === 'bottom' ? '5px' : 0,
          borderBottomRightRadius: row === 'bottom' ? '5px' : 0,
          background:     dis
            ? cssVars.compDisabledCon
            : sel
              ? cssVars.primary
              : cssVars.bgSurface,
          color:          dis
            ? cssVars.textDisabled
            : sel
              ? cssVars.textWhite
              : cssVars.textHigh,
          cursor:         dis ? 'not-allowed' : 'pointer',
          display:        'flex',
          alignItems:     'center',
          justifyContent: 'center',
          transition:     'background 0.15s ease, color 0.15s ease',
          outline:        'none',
          padding:        0,
          boxSizing:      'border-box',
        }}
      >
        <svg
          aria-hidden="true"
          width="20"
          height="14"
          viewBox="0 0 20 14"
          style={{ display: 'block' }}
        >
          {/* Top bar */}
          <rect
            x="1" y="1" width="18" height="5"
            rx="1.5"
            fill={row === 'top'    ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth={row === 'top' ? 0 : 1.25}
          />
          {/* Bottom bar */}
          <rect
            x="1" y="8" width="18" height="5"
            rx="1.5"
            fill={row === 'bottom' ? 'currentColor' : 'none'}
            stroke="currentColor"
            strokeWidth={row === 'bottom' ? 0 : 1.25}
          />
        </svg>
      </button>
    );

    return (
      <div
        ref={ref}
        role="group"
        aria-label="象限選擇器"
        className={['lm-quadrant-selector', className].filter(Boolean).join(' ')}
        style={{
          display:    'inline-flex',
          alignItems: 'stretch',
          gap:        showRowSelectors ? `${rowSelectorGap}px` : 0,
          height:     `${size}px`,
          flexShrink: 0,
        }}
      >
        {/* 田字 grid + 中央按鈕（原樣，包在自己的相對定位容器） */}
        <div
          className="lm-quadrant-selector__grid-wrap"
          style={{
            position:   'relative',
            width:      `${size}px`,
            height:     `${size}px`,
            flexShrink: 0,
          }}
        >
        {/* 2x2 grid — 4 個象限 */}
        <div
          style={{
            display:           'grid',
            gridTemplateColumns: '1fr 1fr',
            gridTemplateRows:    '1fr 1fr',
            width:             '100%',
            height:            '100%',
            borderRadius:      '6px',
            overflow:          'hidden',
            border:            `1px solid ${cssVars.divider}`,
            boxSizing:         'border-box',
          }}
        >
          {QUADRANTS.map((q) => {
            const sel = isSelected(q);
            const dis = isQDisabled(q);

            // Cross divider — TL / TR 加底線；TL / BL 加右線（形成田字）
            const borderRight  = (q === 'topLeft' || q === 'bottomLeft')
              ? `1px solid ${cssVars.divider}` : 'none';
            const borderBottom = (q === 'topLeft' || q === 'topRight')
              ? `1px solid ${cssVars.divider}` : 'none';

            // 圓角依據位置（讓四角弧度延續外框）
            const radiusKey =
              q === 'topLeft'     ? { borderTopLeftRadius:     '5px' } :
              q === 'topRight'    ? { borderTopRightRadius:    '5px' } :
              q === 'bottomLeft'  ? { borderBottomLeftRadius:  '5px' } :
                                    { borderBottomRightRadius: '5px' };

            return (
              <button
                key={q}
                type="button"
                aria-pressed={sel}
                aria-label={`${ARIA_LABELS[q]}${sel ? '（已選）' : ''}`}
                disabled={dis}
                onClick={() => toggle(q)}
                className={[
                  'lm-quadrant-selector__cell',
                  `lm-quadrant-selector__cell--${q}`,
                  sel && 'lm-quadrant-selector__cell--selected',
                  dis && 'lm-quadrant-selector__cell--disabled',
                ].filter(Boolean).join(' ')}
                style={{
                  borderRight,
                  borderBottom,
                  borderTop:    'none',
                  borderLeft:   'none',
                  ...radiusKey,
                  background:   dis
                    ? cssVars.compDisabledCon
                    : sel
                      ? cssVars.primary
                      : cssVars.bgSurface,
                  color:        dis
                    ? cssVars.textDisabled
                    : sel
                      ? cssVars.textWhite
                      : cssVars.textHigh,
                  cursor:       dis ? 'not-allowed' : 'pointer',
                  fontFamily:   '"Noto Sans TC", sans-serif',
                  fontSize:     '13px',
                  lineHeight:   '18px',
                  fontWeight:   sel ? 600 : 500,
                  display:      'flex',
                  alignItems:   'center',
                  justifyContent: 'center',
                  transition:   'background 0.15s ease, color 0.15s ease',
                  outline:      'none',
                  padding:      0,
                  boxSizing:    'border-box',
                }}
              >
                {labels?.[q] ?? (
                  <span
                    className="material-symbols-outlined"
                    aria-hidden="true"
                    style={{ fontSize: `${cellIconSize}px`, lineHeight: 1 }}
                  >
                    {DEFAULT_ICONS[q]}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* 中央按鈕 — 全選 / 全不選 */}
        <button
          type="button"
          aria-label={centerAriaLabel}
          aria-pressed={allSelected}
          onClick={toggleAll}
          className={[
            'lm-quadrant-selector__center',
            allSelected && 'lm-quadrant-selector__center--all',
            someSelected && !allSelected && 'lm-quadrant-selector__center--some',
          ].filter(Boolean).join(' ')}
          style={{
            position:        'absolute',
            top:             '50%',
            left:            '50%',
            transform:       'translate(-50%, -50%)',
            width:           `${centerSize}px`,
            height:          `${centerSize}px`,
            borderRadius:    '50%',
            border:          allSelected
              ? `2px solid ${cssVars.primary}`
              : `1px solid ${cssVars.divider}`,
            background:      allSelected ? cssVars.primary : cssVars.bgSurface,
            color:           allSelected ? cssVars.textWhite : cssVars.textBody,
            cursor:          'pointer',
            display:         'flex',
            alignItems:      'center',
            justifyContent:  'center',
            transition:      'background 0.15s ease, color 0.15s ease, border-color 0.15s ease',
            // 微陰影做出「浮在十字交點上」的視覺
            boxShadow:       '0 1px 2px rgba(0, 0, 0, 0.08)',
            outline:         'none',
            padding:         0,
          }}
        >
          <span
            className="material-symbols-outlined"
            aria-hidden="true"
            style={{ fontSize: `${centerIconSize}px`, lineHeight: 1 }}
          >
            {allSelected ? 'select_all' : 'apps'}
          </span>
        </button>
        </div>

        {showRowSelectors && (
          <div
            className="lm-quadrant-selector__row-col"
            style={{
              display:        'flex',
              flexDirection:  'column',
              width:          `${rowColWidth}px`,
              height:         '100%',
              flexShrink:     0,
              borderRadius:   '6px',
              border:         `1px solid ${cssVars.divider}`,
              overflow:       'hidden',
              boxSizing:      'border-box',
            }}
          >
            {renderRowButton('top',    allTopSelected, topRowDisabled, topRowAriaLabel,    () => toggleRow(TOP_ROW_KEYS))}
            {renderRowButton('bottom', allBotSelected, botRowDisabled, bottomRowAriaLabel, () => toggleRow(BOT_ROW_KEYS))}
          </div>
        )}
      </div>
    );
  },
);

LMQuadrantSelector.displayName = 'LMQuadrantSelector';

export default LMQuadrantSelector;
