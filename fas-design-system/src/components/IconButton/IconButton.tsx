/**
 * IconButton — FAS Design Kit
 * @see ../../components.md § Icon Button
 */
import React from 'react';
import { Tooltip, TooltipPlacement } from '../Tooltip/Tooltip';

export type IconButtonSize = 'l' | 'm' | 's';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Material Icon name 字串，或任意 ReactNode */
  icon: React.ReactNode;
  size?: IconButtonSize;
  /** selected 狀態（用於 Toggle） */
  selected?: boolean;
  /** aria-label 必填，提供無障礙說明；同時作為 tooltip 文字 */
  'aria-label': string;
  /**
   * 滑鼠移入時顯示 tooltip（取自 aria-label）。
   * 預設 true；設為 false 可關閉。
   */
  tooltip?: boolean;
  /** Tooltip 出現的位置。預設 'top' */
  tooltipPlacement?: TooltipPlacement;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, size = 'm', selected = false, tooltip = true, tooltipPlacement = 'top', className, ...rest }, ref) => {
    const btn = (
      <button
        ref={ref}
        type="button"
        className={[
          'fas-icon-btn',
          `fas-icon-btn--${size}`,
          selected && 'fas-icon-btn--selected',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        {...rest}
      >
        {icon}
      </button>
    );

    if (!tooltip) return btn;

    return (
      <Tooltip title={rest['aria-label']} placement={tooltipPlacement}>
        {btn}
      </Tooltip>
    );
  },
);

IconButton.displayName = 'IconButton';
export default IconButton;
