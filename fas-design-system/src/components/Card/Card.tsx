/**
 * Card — FAS Design Kit
 */
import React from 'react';
import './Card.css';

export type CardVariant = 'elevated' | 'outlined' | 'filled';

export interface CardProps {
  variant?: CardVariant;
  clickable?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  variant = 'elevated',
  clickable = false,
  children,
  className,
  style,
  onClick,
}) => (
  <div
    className={[
      'fas-card',
      `fas-card--${variant}`,
      clickable && 'fas-card--clickable',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    style={style}
    onClick={onClick}
    role={clickable ? 'button' : undefined}
    tabIndex={clickable ? 0 : undefined}
  >
    {children}
  </div>
);

Card.displayName = 'Card';

// ---------------------------------------------------------------------------
// CardHeader
// ---------------------------------------------------------------------------

export interface CardHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  action?: React.ReactNode;
  avatar?: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  action,
  avatar,
  className,
}) => (
  <div className={['fas-card__header', className].filter(Boolean).join(' ')}>
    {avatar && <div className="fas-card__header-avatar">{avatar}</div>}
    <div className="fas-card__header-content">
      <div className="fas-card__header-title">{title}</div>
      {subtitle && <div className="fas-card__header-subtitle">{subtitle}</div>}
    </div>
    {action && <div className="fas-card__header-action">{action}</div>}
  </div>
);

CardHeader.displayName = 'CardHeader';

// ---------------------------------------------------------------------------
// CardBody
// ---------------------------------------------------------------------------

export interface CardBodyProps {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CardBody: React.FC<CardBodyProps> = ({ children, className, style }) => (
  <div className={['fas-card__body', className].filter(Boolean).join(' ')} style={style}>
    {children}
  </div>
);

CardBody.displayName = 'CardBody';

// ---------------------------------------------------------------------------
// CardFooter
// ---------------------------------------------------------------------------

export const CardFooter: React.FC<CardBodyProps> = ({ children, className, style }) => (
  <div className={['fas-card__footer', className].filter(Boolean).join(' ')} style={style}>
    {children}
  </div>
);

CardFooter.displayName = 'CardFooter';

// ---------------------------------------------------------------------------
// CardActions
// ---------------------------------------------------------------------------

export const CardActions: React.FC<CardBodyProps> = ({ children, className, style }) => (
  <div className={['fas-card__actions', className].filter(Boolean).join(' ')} style={style}>
    {children}
  </div>
);

CardActions.displayName = 'CardActions';
