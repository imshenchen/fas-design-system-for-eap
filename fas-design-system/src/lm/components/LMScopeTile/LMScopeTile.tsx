/**
 * LMScopeTile — LM Tier
 *
 * 方形 tile 按鈕，用於選擇整條產線或特定機台。
 * 內含三色三形狀的狀態燈號、產線/機台 icon、名稱。可被選取。
 *
 * 燈號規則（顏色 + 形狀都帶語意，符合色盲可讀性）：
 *   normal  → 綠色圓形 ● （正常運行中）
 *   warning → 黃色三角 ▲ （警告）
 *   down    → 紅色方形 ■ （停機）
 */
import React from 'react';
import { Tooltip } from '../../../components/Tooltip/Tooltip';
import { cssVars, spacing } from '../../../tokens/tokens';

export type LMScopeTileType   = 'line' | 'machine';
export type LMScopeTileStatus = 'normal' | 'warning' | 'down';

export interface LMScopeTileProps {
  /** 類型 — 決定預設 icon（line=conveyor_belt、machine=precision_manufacturing） */
  type: LMScopeTileType;
  /** 顯示名稱（產線 / 設備） */
  label: string;
  /** 狀態：燈號顏色 + 形狀皆受控 */
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
  normal:  '正常運行中',
  warning: '警告',
  down:    '停機',
};

/** 三色三形狀燈號 */
const StatusLight: React.FC<{ status: LMScopeTileStatus; disabled?: boolean }> = ({
  status,
  disabled,
}) => {
  const color = disabled ? cssVars.compDisabledEl : STATUS_COLOR[status];

  if (status === 'normal') {
    // 綠色圓形
    return (
      <span
        aria-hidden="true"
        style={{
          display:         'inline-block',
          width:           '10px',
          height:          '10px',
          borderRadius:    '50%',
          backgroundColor: color,
        }}
      />
    );
  }

  if (status === 'warning') {
    // 黃色三角形（CSS borders trick）
    return (
      <span
        aria-hidden="true"
        style={{
          display:      'inline-block',
          width:        0,
          height:       0,
          borderLeft:   '5px solid transparent',
          borderRight:  '5px solid transparent',
          borderBottom: `9px solid ${color}`,
        }}
      />
    );
  }

  // 紅色方形（down）
  return (
    <span
      aria-hidden="true"
      style={{
        display:         'inline-block',
        width:           '10px',
        height:          '10px',
        backgroundColor: color,
      }}
    />
  );
};

export const LMScopeTile = React.forwardRef<HTMLButtonElement, LMScopeTileProps>(
  ({ type, label, status, selected, disabled, onClick, icon, className }, ref) => {
    const iconNode = icon ?? (
      <span className="material-symbols-outlined">{TYPE_ICON[type]}</span>
    );

    return (
      <Tooltip title={label} placement="top">
      <button
        ref={ref}
        type="button"
        role="button"
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
          // shape & size — 鎖死方形，flex 容器中不縮
          width:           '72px',
          height:          '72px',
          minWidth:        '72px',
          minHeight:       '72px',
          flexShrink:      0,
          padding:         '6px',
          borderRadius:    '6px',
          boxSizing:       'border-box',

          // border / background — selected 用 2px primary，未選用 1px divider
          border:          selected
            ? `2px solid ${cssVars.primary}`
            : `1px solid ${cssVars.divider}`,
          background:      selected ? cssVars.compHover : cssVars.bgSurface,

          // layout
          display:         'flex',
          flexDirection:   'column',
          alignItems:      'center',
          justifyContent:  'space-between',

          // text / interaction
          color:           disabled ? cssVars.textDisabled : cssVars.textHigh,
          cursor:          disabled ? 'not-allowed' : 'pointer',
          fontFamily:      '"Noto Sans TC", sans-serif',
          transition:      'background 0.15s ease, border-color 0.15s ease',
          outline:         'none',
        }}
      >
        {/* Top row — status light at the top-left */}
        <div
          className="lm-scope-tile__status"
          style={{
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'flex-start',
            width:          '100%',
            height:         '10px',
          }}
        >
          <StatusLight status={status} disabled={disabled} />
        </div>

        {/* Middle — type icon */}
        <span
          className="lm-scope-tile__icon"
          aria-hidden="true"
          style={{
            fontSize:    '22px',
            lineHeight:  1,
            color:       disabled
              ? cssVars.textDisabled
              : selected
                ? cssVars.primary
                : cssVars.textBody,
          }}
        >
          {iconNode}
        </span>

        {/* Bottom — label（單行 ellipsis） */}
        <span
          className="lm-scope-tile__label"
          style={{
            width:        '100%',
            fontSize:     '11px',
            lineHeight:   '14px',
            fontWeight:   selected ? 600 : 500,
            textAlign:    'center',
            whiteSpace:   'nowrap',
            overflow:     'hidden',
            textOverflow: 'ellipsis',
          }}
        >
          {label}
        </span>
      </button>
      </Tooltip>
    );
  },
);

LMScopeTile.displayName = 'LMScopeTile';

export default LMScopeTile;
