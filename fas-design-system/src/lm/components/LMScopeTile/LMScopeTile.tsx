/**
 * LMScopeTile — LM Tier
 *
 * 兩行 chip 樣式，用於選擇整條產線或特定機台。
 *   ┌───────────────────────────┐
 *   │ Yamaha YSM20R #01          │  ← 名稱
 *   │ 設備           ● 正常運行  │  ← 類型 caption + 燈號形狀 + 狀態文字
 *   └───────────────────────────┘
 *
 * 燈號形狀（語意同時透過顏色 + 形狀傳達，符合色盲可讀性）：
 *   normal  → 綠色圓形 ●  正常運行 / Running
 *   warning → 黃色三角 ▲  警告     / Warning
 *   down    → 紅色方形 ■  停機     / Down
 */
import React from 'react';
import { cssVars, spacing } from '../../../tokens/tokens';

export type LMScopeTileType   = 'line' | 'machine';
export type LMScopeTileStatus = 'normal' | 'warning' | 'down';
export type LMScopeTileLocale = 'zh' | 'en';

export interface LMScopeTileProps {
  /** 類型 — 決定 caption 文字（line=產線/Line、machine=設備/Machine） */
  type: LMScopeTileType;
  /** 顯示名稱（產線 / 機台） */
  label: string;
  /** 狀態：決定燈號形狀與顏色 */
  status: LMScopeTileStatus;
  /** 語系 — 決定 type caption 與狀態文字，預設 `zh` */
  locale?: LMScopeTileLocale;
  /** 是否選取中 */
  selected?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 點擊 callback */
  onClick?: () => void;
  /** 自訂 className */
  className?: string;
}

const I18N: Record<LMScopeTileLocale, {
  type:   Record<LMScopeTileType,   string>;
  status: Record<LMScopeTileStatus, string>;
}> = {
  zh: {
    type:   { line: '產線', machine: '設備' },
    status: { normal: '正常運行', warning: '警告', down: '停機' },
  },
  en: {
    type:   { line: 'Line', machine: 'Machine' },
    status: { normal: 'Running', warning: 'Warning', down: 'Down' },
  },
};

const STATUS_COLOR: Record<LMScopeTileStatus, string> = {
  normal:  cssVars.statusSuccess,
  warning: cssVars.statusWarning,
  down:    cssVars.statusError,
};

const INDICATOR_SIZE = 10;

const renderIndicator = (status: LMScopeTileStatus, color: string): React.ReactNode => {
  const common = {
    width:   INDICATOR_SIZE,
    height:  INDICATOR_SIZE,
    viewBox: `0 0 ${INDICATOR_SIZE} ${INDICATOR_SIZE}`,
    'aria-hidden': true,
    style:   { flexShrink: 0, display: 'block' as const },
  };
  if (status === 'warning') {
    return (
      <svg {...common}>
        <polygon points={`${INDICATOR_SIZE / 2},0 ${INDICATOR_SIZE},${INDICATOR_SIZE} 0,${INDICATOR_SIZE}`} fill={color} />
      </svg>
    );
  }
  if (status === 'down') {
    return (
      <svg {...common}>
        <rect width={INDICATOR_SIZE} height={INDICATOR_SIZE} fill={color} />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <circle cx={INDICATOR_SIZE / 2} cy={INDICATOR_SIZE / 2} r={INDICATOR_SIZE / 2} fill={color} />
    </svg>
  );
};

export const LMScopeTile = React.forwardRef<HTMLButtonElement, LMScopeTileProps>(
  ({ type, label, status, locale = 'zh', selected, disabled, onClick, className }, ref) => {
    const indicatorColor = disabled ? cssVars.compDisabledEl : STATUS_COLOR[status];
    const captionColor   = disabled ? cssVars.textDisabled  : cssVars.textMedium;
    const typeLabel      = I18N[locale].type[type];
    const statusLabel    = I18N[locale].status[status];
    const sep            = locale === 'en' ? ' · ' : '・';

    return (
      <button
        ref={ref}
        type="button"
        aria-pressed={!!selected}
        aria-label={`${label}（${typeLabel}${sep}${statusLabel}）`}
        disabled={disabled}
        onClick={onClick}
        className={[
          'lm-scope-tile',
          selected && 'lm-scope-tile--selected',
          disabled && 'lm-scope-tile--disabled',
          className,
        ].filter(Boolean).join(' ')}
        style={{
          height:          '52px',
          minHeight:       '52px',
          minWidth:        '160px',
          maxWidth:        '240px',
          flexShrink:      0,
          padding:         `0 ${spacing[3]}`,
          borderRadius:    '6px',
          boxSizing:       'border-box',

          border:          selected
            ? `2px solid ${cssVars.primary}`
            : `1px solid ${cssVars.divider}`,
          background:      selected ? cssVars.compHover : cssVars.bgSurface,

          display:         'flex',
          flexDirection:   'column',
          justifyContent:  'center',
          gap:             spacing[1],

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

        {/* Row 2: 左 type caption + 右燈號 + 狀態文字 */}
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
            className="lm-scope-tile__type"
            style={{
              fontSize:   '12px',
              lineHeight: '16px',
              fontWeight: 400,
              color:      captionColor,
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {typeLabel}
          </span>
          <span
            className={`lm-scope-tile__status lm-scope-tile__status--${status}`}
            style={{
              display:    'inline-flex',
              alignItems: 'center',
              gap:        spacing[1],
              fontSize:   '12px',
              lineHeight: '16px',
              fontWeight: 400,
              color:      captionColor,
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            {renderIndicator(status, indicatorColor)}
            {statusLabel}
          </span>
        </div>
      </button>
    );
  },
);

LMScopeTile.displayName = 'LMScopeTile';

export default LMScopeTile;
