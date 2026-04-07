/**
 * Badge — FAS Design Kit
 */
import React from 'react';
import './Badge.css';

export type BadgeVariant = 'standard' | 'dot';
export type BadgeColor = 'error' | 'processing' | 'success' | 'warning';

export interface BadgeProps {
  content?: number | string;
  variant?: BadgeVariant;
  color?: BadgeColor;
  max?: number;
  showZero?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Badge: React.FC<BadgeProps> = ({
  content,
  variant = 'standard',
  color = 'error',
  max = 99,
  showZero = false,
  children,
  className,
  style,
}) => {
  const shouldHide =
    variant === 'standard' &&
    (content === undefined ||
      (content === 0 && !showZero));

  const displayContent = (): string => {
    if (variant === 'dot') return '';
    if (typeof content === 'number' && content > max) return `${max}+`;
    return String(content ?? '');
  };

  const badgeClasses = [
    'fas-badge',
    `fas-badge--${variant}`,
    `fas-badge--${color}`,
    shouldHide && 'fas-badge--hidden',
  ]
    .filter(Boolean)
    .join(' ');

  const rootClasses = ['fas-badge-root', className].filter(Boolean).join(' ');

  return (
    <span className={rootClasses} style={style}>
      {children}
      <span className={badgeClasses} aria-label={variant === 'dot' ? 'badge' : undefined}>
        {displayContent()}
      </span>
    </span>
  );
};

Badge.displayName = 'Badge';
export default Badge;
