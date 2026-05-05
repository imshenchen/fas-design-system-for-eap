/**
 * LMScopeTile — LM Tier
 *
 * 兩行 chip 樣式，用於選擇整條產線或特定機台。
 *   ┌───────────────────────────┐
 *   │ AOI檢測機 001              │  ← 名稱
 *   │ 🏭             正常運行    │  ← icon + 狀態文字（同色）
 *   └───────────────────────────┘
 *
 * 狀態色（icon 與狀態文字共用）：
 *   normal  → 綠色（statusSuccess）正常運行
 *   warning → 黃色（statusWarning）警告
 *   down    → 紅色（statusError）  停機
 */
import React from 'react';
import { cssVars, spacing } from '../../../tokens/tokens';

export type LMScopeTileType   = 'line' | 'machine';
export type LMScopeTileStatus = 'normal' | 'warning' | 'down';

export interface LMScopeTileProps {
  /** 類型 — 決定預設 icon（line=conveyor_belt、machine=precision_manufacturing） */
  type: LMScopeTileType;
  /** 顯示名稱（產線 / 機台） */
  label: string;
  /** 狀態：icon 與狀態文字都依此上色 */
  status: LMScopeTileStatus;
  /** 是否選取中 */
  selected?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 點擊 callback */
  onClick?: () => void;
  /** 自訂 icon（覆寫 type 預設）—— 建議仍用 Material Symbol */
  icon?: React.ReactNode;
  /** 自訂 className */
  className?: string;
}

const TYPE_ICON: Record<LMScopeTileType, string> = {
  line:    'conveyor_belt',
  machine: 'precision_manufacturing',
};

const STATUS_COLOR: Record<LMScopeTileStatus, string> = {
  normal:  cssVars.statusSuccess,
  warning: cssVars.statusWarning,
  down:    cssVars.statusError,
};

const STATUS_LABEL: Record<LMScopeTileStatus, string> = {
  normal:  '正常運行',
  warning: '警告',
  down:    '停機',
};

export const LMScopeTile = React.forwardRef<HTMLButtonElement, LMScopeTileProps>(
  ({ type, label, status, selected, disabled, onClick, icon, className }, ref) => {
    const iconNode = icon ?? (
      <span className="material-symbols-outlined">{TYPE_ICON[type]}</span>
    );

    const statusColor = disabled ? cssVars.compDisabledEl : STATUS_COLOR[status];

    return (
      <button
        ref={ref}
        type="button"
        aria-pressed={!!selected}
        aria-label={`${label}（${STATUS_LABEL[status]}）`}
        disabled={disabled}
        onClick={onClick}
        className={[
          'lm-scope-tile',
          selected && 'lm-scope-tile--selected',
          disabled && 'lm-scope-tile--disabled',
          className,
        ].filter(Boolean).join(' ')}
        style={{
          // shape & size — 兩行 chip，高度固定 52px、寬度自適應
          height:          '52px',
          minHeight:       '52px',
          minWidth:        '160px',
          maxWidth:        '240px',
          flexShrink:      0,
          // 只有水平 padding；垂直由 flex 置中以避免 box-sizing 把內容空間壓得太緊
          padding:         `0 ${spacing[3]}`,
          borderRadius:    '6px',
          boxSizing:       'border-box',

          // border / background
          border:          selected
            ? `2px solid ${cssVars.primary}`
            : `1px solid ${cssVars.divider}`,
          background:      selected ? cssVars.compHover : cssVars.bgSurface,

          // layout — 兩行 column
          display:         'flex',
          flexDirection:   'column',
          justifyContent:  'center',
          gap:             spacing[1],

          // text / interaction
          color:           disabled ? cssVars.textDisabled : cssVars.textHigh,
          cursor:          disabled ? 'not-allowed' : 'pointer',
          fontFamily:      '"Noto Sans TC", sans-serif',
          transition:      'background 0.15s ease, border-color 0.15s ease',
          outline:         'none',
          textAlign:       'left',
        }}
      >
        {/* Row 1: 名稱 */}
        <span
          className="lm-scope-tile__label"
          title={label}
          style={{
            width:        '100%',
            fontSize:     '13px',
            lineHeight:   '18px',
            fontWeight:   selected ? 600 : 500,
            color:        disabled ? cssVars.textDisabled : cssVars.textHigh,
            whiteSpace:   'nowrap',
            overflow:     'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {label}
        </span>

        {/* Row 2: 左 icon + 右狀態文字（同色） */}
        <div
          className="lm-scope-tile__status-row"
          style={{
            width:          '100%',
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'space-between',
            gap:            spacing[2],
          }}
        >
          <span
            className="lm-scope-tile__icon"
            aria-hidden="true"
            style={{
              display:    'inline-flex',
              alignItems: 'center',
              fontSize:   '18px',
              lineHeight: 1,
              color:      statusColor,
              flexShrink: 0,
            }}
          >
            {iconNode}
          </span>
          <span
            className={`lm-scope-tile__status-text lm-scope-tile__status-text--${status}`}
            style={{
              fontSize:   '12px',
              lineHeight: '16px',
              fontWeight: 500,
              color:      statusColor,
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {STATUS_LABEL[status]}
          </span>
        </div>
      </button>
    );
  },
);

LMScopeTile.displayName = 'LMScopeTile';

export default LMScopeTile;
