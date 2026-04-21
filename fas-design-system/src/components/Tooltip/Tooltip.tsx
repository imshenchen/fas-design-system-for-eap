/**
 * Tooltip — FAS Design Kit
 * Variants: plain (single-line label) | rich (title + body + optional actions)
 */
import React, { useState, useRef, useCallback } from 'react';
import './Tooltip.css';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';
export type TooltipVariant = 'plain' | 'rich';

export interface TooltipAction {
  label: string;
  onClick: () => void;
}

export interface TooltipProps {
  /** Tooltip text (plain) or heading (rich) */
  title: React.ReactNode;
  /** 'plain' (default): single-line label; 'rich': heading + body + optional actions */
  variant?: TooltipVariant;
  /** Preferred position relative to the anchor. Default: 'top' */
  placement?: TooltipPlacement;
  /** (Rich only) Body description text */
  body?: React.ReactNode;
  /** (Rich only) Action buttons — primary and/or secondary */
  actions?: {
    primary?: TooltipAction;
    secondary?: TooltipAction;
  };
  /** Gap between anchor and tooltip popup in px. Default: 4 */
  gap?: number;
  children: React.ReactElement;
  /** Set true to suppress the tooltip entirely */
  disabled?: boolean;
  className?: string;
}

export const Tooltip: React.FC<TooltipProps> = ({
  title,
  variant = 'plain',
  placement = 'top',
  body,
  actions,
  gap = 4,
  children,
  disabled = false,
  className,
}) => {
  const [visible, setVisible] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>();

  const show = useCallback(() => {
    clearTimeout(hideTimer.current);
    setVisible(true);
  }, []);

  const hide = useCallback(() => {
    if (variant === 'rich') {
      // Small delay lets users move into the popup without it disappearing
      hideTimer.current = setTimeout(() => setVisible(false), 150);
    } else {
      setVisible(false);
    }
  }, [variant]);

  if (disabled || !title) return children;

  const hasActions = variant === 'rich' && actions && (actions.primary || actions.secondary);

  return (
    <span
      className={['fas-tooltip-root', className].filter(Boolean).join(' ')}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}

      {visible && variant === 'plain' && (
        <span
          className={['fas-tooltip-plain', `fas-tooltip-plain--${placement}`].join(' ')}
          style={{ '--tooltip-gap': `${gap}px` } as React.CSSProperties}
          role="tooltip"
        >
          {title}
        </span>
      )}

      {visible && variant === 'rich' && (
        <span
          className={['fas-tooltip-rich', `fas-tooltip-rich--${placement}`].join(' ')}
          style={{ '--tooltip-gap': `${gap}px` } as React.CSSProperties}
          role="tooltip"
          onMouseEnter={show}
          onMouseLeave={hide}
        >
          <span className="fas-tooltip-rich__content">
            {title && <span className="fas-tooltip-rich__title">{title}</span>}
            {body  && <span className="fas-tooltip-rich__body">{body}</span>}
          </span>
          {hasActions && (
            <span className="fas-tooltip-rich__actions">
              {actions!.secondary && (
                <button
                  type="button"
                  className="fas-tooltip-rich__btn fas-tooltip-rich__btn--secondary"
                  onClick={actions!.secondary.onClick}
                >
                  {actions!.secondary.label}
                </button>
              )}
              {actions!.primary && (
                <button
                  type="button"
                  className="fas-tooltip-rich__btn fas-tooltip-rich__btn--primary"
                  onClick={actions!.primary.onClick}
                >
                  {actions!.primary.label}
                </button>
              )}
            </span>
          )}
        </span>
      )}
    </span>
  );
};

Tooltip.displayName = 'Tooltip';
export default Tooltip;
