/**
 * Spin — FAS Design Kit
 * Standalone loading spinner.
 */
import React from 'react';
import './Spin.css';

export type SpinSize = 's' | 'm' | 'l';
export type SpinColor = 'primary' | 'secondary' | 'white';

export interface SpinProps {
  size?: SpinSize;
  color?: SpinColor;
  className?: string;
  style?: React.CSSProperties;
}

export const Spin: React.FC<SpinProps> = ({
  size = 'm',
  color = 'primary',
  className,
  style,
}) => (
  <span
    className={[
      'fas-spin',
      `fas-spin--${size}`,
      `fas-spin--${color}`,
      className,
    ]
      .filter(Boolean)
      .join(' ')}
    style={style}
    role="status"
    aria-label="Loading"
  />
);

Spin.displayName = 'Spin';
export default Spin;
