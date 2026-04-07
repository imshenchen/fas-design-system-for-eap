/**
 * Tooltip — FAS Design Kit
 */
import React, { useState } from 'react';
import './Tooltip.css';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  title: React.ReactNode;
  placement?: TooltipPlacement;
  children: React.ReactElement;
  disabled?: boolean;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  title,
  placement = 'top',
  children,
  disabled = false,
  className,
}) => {
  const [visible, setVisible] = useState(false);

  if (disabled || !title) return children;

  return (
    <span
      className={['fas-tooltip-root', className].filter(Boolean).join(' ')}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
    >
      {children}
      {visible && (
        <span
          className={[
            'fas-tooltip-popup',
            `fas-tooltip-popup--${placement}`,
          ].join(' ')}
          role="tooltip"
        >
          {title}
          <span className="fas-tooltip-popup__arrow" aria-hidden />
        </span>
      )}
    </span>
  );
};

Tooltip.displayName = 'Tooltip';
export default Tooltip;
