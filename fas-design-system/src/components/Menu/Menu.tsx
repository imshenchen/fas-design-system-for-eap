/**
 * Menu / MenuItem — FAS Design Kit
 */
import React, { useEffect, useRef } from 'react';
import './Menu.css';

// ---------------------------------------------------------------------------
// Menu
// ---------------------------------------------------------------------------

export interface MenuProps {
  open: boolean;
  onClose: () => void;
  anchorEl?: HTMLElement | null;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Menu: React.FC<MenuProps> = ({
  open,
  onClose,
  anchorEl,
  children,
  className,
  style,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        anchorEl !== e.target
      ) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open, onClose, anchorEl]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open, onClose]);

  // Compute position
  let posStyle: React.CSSProperties = { position: 'absolute' };
  if (anchorEl) {
    const rect = anchorEl.getBoundingClientRect();
    posStyle = {
      position: 'fixed',
      top: rect.bottom + 4,
      left: rect.left,
    };
  }

  if (!open) return null;

  return (
    <div
      ref={menuRef}
      className={['fas-menu', className].filter(Boolean).join(' ')}
      style={{ ...posStyle, ...style }}
      role="menu"
    >
      <ul className="fas-menu__list">{children}</ul>
    </div>
  );
};

Menu.displayName = 'Menu';

// ---------------------------------------------------------------------------
// MenuItem
// ---------------------------------------------------------------------------

export interface MenuItemProps {
  children: React.ReactNode;
  onClick?: () => void;
  selected?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  destructive?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  children,
  onClick,
  selected = false,
  disabled = false,
  icon,
  destructive = false,
  className,
  style,
}) => (
  <li
    role="menuitem"
    className={[
      'fas-menu-item',
      selected && 'fas-menu-item--selected',
      disabled && 'fas-menu-item--disabled',
      destructive && 'fas-menu-item--destructive',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    style={style}
    onClick={disabled ? undefined : onClick}
    tabIndex={disabled ? -1 : 0}
    aria-disabled={disabled}
  >
    {icon && <span className="fas-menu-item__icon" aria-hidden>{icon}</span>}
    <span className="fas-menu-item__label">{children}</span>
  </li>
);

MenuItem.displayName = 'MenuItem';

// ---------------------------------------------------------------------------
// MenuDivider
// ---------------------------------------------------------------------------

export const MenuDivider: React.FC<{ className?: string }> = ({ className }) => (
  <li
    role="separator"
    className={['fas-menu-divider', className].filter(Boolean).join(' ')}
  />
);

MenuDivider.displayName = 'MenuDivider';
