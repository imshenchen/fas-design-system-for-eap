/**
 * Divider — FAS Design Kit
 */
import React from 'react';
import './Divider.css';

export interface DividerProps {
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  style?: React.CSSProperties;
}

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  className,
  style,
}) => {
  const classes = [
    'fas-divider',
    `fas-divider--${orientation}`,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (orientation === 'vertical') {
    return <div className={classes} style={style} role="separator" aria-orientation="vertical" />;
  }

  return <hr className={classes} style={style} />;
};

Divider.displayName = 'Divider';
export default Divider;
