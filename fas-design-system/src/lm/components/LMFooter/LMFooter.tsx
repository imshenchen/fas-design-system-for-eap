/**
 * LMFooter — LM Tier
 *
 * 功能內容區塊底部的固定操作列。
 * 左側 Help（text button），右側 上一步（outlined）+ 下一步（contained）。
 * 透過 position:sticky; bottom:0 釘在 scroll 容器底部。
 */
import React from 'react';
import { Button } from '../../../components/Button/Button';
import { cssVars, spacing, zIndex } from '../../../tokens/tokens';

export interface LMFooterProps {
  /** Help 按鈕文字，預設 'Help' */
  helpLabel?: string;
  /** 上一步按鈕文字，預設 '上一步' */
  prevLabel?: string;
  /** 下一步按鈕文字，預設 '下一步' */
  nextLabel?: string;
  /** Help 按鈕 callback；未傳則不顯示 Help */
  onHelp?: () => void;
  /** 上一步 callback；未傳則不顯示上一步（如 wizard 第一步） */
  onPrev?: () => void;
  /** 下一步 callback；未傳則不顯示下一步 */
  onNext?: () => void;
  /** 上一步 disabled */
  prevDisabled?: boolean;
  /** 下一步 disabled */
  nextDisabled?: boolean;
  /** 下一步 loading */
  nextLoading?: boolean;
  /** 自訂 className */
  className?: string;
}

export const LMFooter = React.forwardRef<HTMLDivElement, LMFooterProps>(
  (
    {
      helpLabel = 'Help',
      prevLabel = '上一步',
      nextLabel = '下一步',
      onHelp,
      onPrev,
      onNext,
      prevDisabled,
      nextDisabled,
      nextLoading,
      className,
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={['lm-footer', className].filter(Boolean).join(' ')}
        style={{
          position:        'sticky',
          bottom:          0,
          zIndex:          zIndex.sticky,
          display:         'flex',
          alignItems:      'center',
          gap:             spacing[4],
          minHeight:       '64px',
          padding:         `${spacing[3]} ${spacing[6]}`,
          backgroundColor: cssVars.bgSurface,
          borderTop:       `1px solid ${cssVars.divider}`,
          boxSizing:       'border-box',
        }}
      >
        {/* Left: Help */}
        <div className="lm-footer__left" style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
          {onHelp && (
            <Button
              variant="text"
              color="secondary"
              size="s"
              onClick={onHelp}
              iconLeft={<span className="material-symbols-outlined">help</span>}
            >
              {helpLabel}
            </Button>
          )}
        </div>

        {/* Right: Prev / Next */}
        <div
          className="lm-footer__right"
          style={{ display: 'flex', alignItems: 'center', gap: spacing[3], flexShrink: 0 }}
        >
          {onPrev && (
            <Button variant="outlined" color="primary" onClick={onPrev} disabled={prevDisabled}>
              {prevLabel}
            </Button>
          )}
          {onNext && (
            <Button
              variant="contained"
              color="primary"
              onClick={onNext}
              disabled={nextDisabled}
              loading={nextLoading}
            >
              {nextLabel}
            </Button>
          )}
        </div>
      </div>
    );
  },
);

LMFooter.displayName = 'LMFooter';

export default LMFooter;
