/**
 * Alert — FAS Design Kit
 */
import React from 'react';
import './Alert.css';

export type AlertSeverity = 'success' | 'warning' | 'error' | 'info';
export type AlertVariant = 'standard' | 'filled' | 'outlined';

export interface AlertProps {
  severity: AlertSeverity;
  variant?: AlertVariant;
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
  action?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const ICONS: Record<AlertSeverity, string> = {
  info: 'info',
  success: 'check_circle',
  warning: 'warning',
  error: 'cancel',
};

export const Alert: React.FC<AlertProps> = ({
  severity,
  variant = 'standard',
  title,
  children,
  onClose,
  action,
  className,
  style,
}) => (
  <div
    role="alert"
    className={[
      'fas-alert',
      `fas-alert--${severity}`,
      `fas-alert--${variant}`,
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    style={style}
  >
    <span className="material-symbols-outlined fas-alert__icon" aria-hidden>{ICONS[severity]}</span>
    <div className="fas-alert__content">
      {title && <div className="fas-alert__title">{title}</div>}
      <div className="fas-alert__message">{children}</div>
    </div>
    {action && <div className="fas-alert__action">{action}</div>}
    {onClose && (
      <button
        type="button"
        className="fas-alert__close"
        onClick={onClose}
        aria-label="Close"
      >
        <span className="material-symbols-outlined" aria-hidden>close</span>
      </button>
    )}
  </div>
);

Alert.displayName = 'Alert';
export default Alert;
