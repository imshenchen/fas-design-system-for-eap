/**
 * Drawer — FAS Design Kit
 *
 * variant:
 *  - 'default' — overlay with backdrop/mask (portal, position: fixed)
 *  - 'float'   — inline panel that shrinks sibling content, no mask
 *
 * size: 's' | 'm' | 'l'
 *  - horizontal anchor (left/right): 25vw / 35vw / 50vw
 *  - vertical anchor (top/bottom):   25vh / 35vh / 50vh
 *  - override via `width` / `height` props when needed
 */
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { IconButton } from '../IconButton/IconButton';
import './Drawer.css';

export type DrawerAnchor = 'left' | 'right' | 'top' | 'bottom';
export type DrawerVariant = 'default' | 'float';
export type DrawerSize = 's' | 'm' | 'l';

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  variant?: DrawerVariant;
  size?: DrawerSize;
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
  variant = 'default',
  size = 'm',
  anchor = 'right',
  width,
  height,
  children,
  title,
  showBackdrop = true,
  className,
  style,
}) => {
  useEffect(() => {
    if (variant !== 'default') return;
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open, variant]);

  if (!open) return null;

  const overrideSize: React.CSSProperties = {};
  if (width != null) overrideSize.width = typeof width === 'number' ? `${width}px` : width;
  if (height != null) overrideSize.height = typeof height === 'number' ? `${height}px` : height;

  const panelClass = [
    'fas-drawer',
    `fas-drawer--${variant}`,
    `fas-drawer--${anchor}`,
    `fas-drawer--size-${size}`,
    'fas-drawer--open',
    className,
  ].filter(Boolean).join(' ');

  const panel = (
    <div
      className={panelClass}
      style={{ ...overrideSize, ...style }}
      role={variant === 'default' ? 'dialog' : 'complementary'}
      aria-modal={variant === 'default' ? true : undefined}
    >
      {title && (
        <div className="fas-drawer__header">
          <span className="fas-drawer__title">{title}</span>
          <IconButton
            size="l"
            aria-label="Close drawer"
            tooltip={false}
            onClick={onClose}
            icon={<span className="material-symbols-outlined" aria-hidden>close</span>}
          />
        </div>
      )}
      <div className="fas-drawer__body">{children}</div>
    </div>
  );

  if (variant === 'float') {
    return panel;
  }

  return ReactDOM.createPortal(
    <div className="fas-drawer-portal">
      {showBackdrop && (
        <div className="fas-drawer-backdrop" onClick={onClose} aria-hidden />
      )}
      {panel}
    </div>,
    document.body
  );
};

Drawer.displayName = 'Drawer';
export default Drawer;
