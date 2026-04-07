/**
 * Drawer — FAS Design Kit
 */
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './Drawer.css';

export type DrawerAnchor = 'left' | 'right' | 'top' | 'bottom';

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  anchor?: DrawerAnchor;
  width?: number | string;
  height?: number | string;
  children: React.ReactNode;
  title?: React.ReactNode;
  showBackdrop?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  anchor = 'left',
  width = 280,
  height = 280,
  children,
  title,
  showBackdrop = true,
  className,
  style,
}) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  if (!open) return null;

  const isHorizontal = anchor === 'left' || anchor === 'right';
  const sizeStyle = isHorizontal
    ? { width: typeof width === 'number' ? `${width}px` : width }
    : { height: typeof height === 'number' ? `${height}px` : height };

  return ReactDOM.createPortal(
    <div className="fas-drawer-portal">
      {showBackdrop && (
        <div className="fas-drawer-backdrop" onClick={onClose} aria-hidden />
      )}
      <div
        className={[
          'fas-drawer',
          `fas-drawer--${anchor}`,
          'fas-drawer--open',
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        style={{ ...sizeStyle, ...style }}
        role="dialog"
        aria-modal="true"
      >
        {title && (
          <div className="fas-drawer__header">
            <span className="fas-drawer__title">{title}</span>
            <button
              type="button"
              className="fas-drawer__close"
              onClick={onClose}
              aria-label="Close drawer"
            >
              <span className="material-symbols-outlined" aria-hidden>close</span>
            </button>
          </div>
        )}
        <div className="fas-drawer__body">{children}</div>
      </div>
    </div>,
    document.body
  );
};

Drawer.displayName = 'Drawer';
export default Drawer;
