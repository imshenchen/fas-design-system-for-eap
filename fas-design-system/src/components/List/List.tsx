/**
 * List — FAS Design Kit
 */
import React from 'react';
import './List.css';

// ---------------------------------------------------------------------------
// List
// ---------------------------------------------------------------------------

export interface ListProps {
  children: React.ReactNode;
  dense?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const List: React.FC<ListProps> = ({ children, dense = false, className, style }) => (
  <ul
    className={[
      'fas-list',
      dense && 'fas-list--dense',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    style={style}
  >
    {children}
  </ul>
);

List.displayName = 'List';

// ---------------------------------------------------------------------------
// ListItem
// ---------------------------------------------------------------------------

export interface ListItemProps {
  children: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  divider?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  selected = false,
  disabled = false,
  onClick,
  divider = false,
  className,
  style,
}) => (
  <li
    className={[
      'fas-list-item',
      selected && 'fas-list-item--selected',
      disabled && 'fas-list-item--disabled',
      divider && 'fas-list-item--divider',
      onClick && 'fas-list-item--clickable',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    style={style}
    onClick={disabled ? undefined : onClick}
    role={onClick ? 'button' : undefined}
    tabIndex={onClick && !disabled ? 0 : undefined}
  >
    {children}
  </li>
);

ListItem.displayName = 'ListItem';

// ---------------------------------------------------------------------------
// ListItemIcon
// ---------------------------------------------------------------------------

export const ListItemIcon: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => (
  <span className={['fas-list-item__icon', className].filter(Boolean).join(' ')}>
    {children}
  </span>
);

ListItemIcon.displayName = 'ListItemIcon';

// ---------------------------------------------------------------------------
// ListItemText
// ---------------------------------------------------------------------------

export interface ListItemTextProps {
  primary: React.ReactNode;
  secondary?: React.ReactNode;
  className?: string;
}

export const ListItemText: React.FC<ListItemTextProps> = ({ primary, secondary, className }) => (
  <span className={['fas-list-item__text', className].filter(Boolean).join(' ')}>
    <span className="fas-list-item__primary">{primary}</span>
    {secondary && <span className="fas-list-item__secondary">{secondary}</span>}
  </span>
);

ListItemText.displayName = 'ListItemText';

// ---------------------------------------------------------------------------
// ListDivider
// ---------------------------------------------------------------------------

export const ListDivider: React.FC<{ inset?: boolean; className?: string }> = ({
  inset = false,
  className,
}) => (
  <li
    role="separator"
    className={[
      'fas-list-divider',
      inset && 'fas-list-divider--inset',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
  />
);

ListDivider.displayName = 'ListDivider';

// ---------------------------------------------------------------------------
// ListSubheader
// ---------------------------------------------------------------------------

export const ListSubheader: React.FC<{ children: React.ReactNode; sticky?: boolean; className?: string }> = ({
  children,
  sticky = true,
  className,
}) => (
  <li
    className={[
      'fas-list-subheader',
      sticky && 'fas-list-subheader--sticky',
      className,
    ]
      .filter(Boolean)
      .join(' ')}
  >
    {children}
  </li>
);

ListSubheader.displayName = 'ListSubheader';
