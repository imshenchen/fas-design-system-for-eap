/**
 * Progress — FAS Design Kit
 * Linear progress bar (determinate & indeterminate).
 */
import React from 'react';
import './Progress.css';

export type ProgressVariant = 'determinate' | 'indeterminate';
export type ProgressColor = 'primary' | 'success' | 'warning' | 'error';

export interface ProgressProps {
  value?: number;
  variant?: ProgressVariant;
  color?: ProgressColor;
  thickness?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const Progress: React.FC<ProgressProps> = ({
  value = 0,
  variant = 'indeterminate',
  color = 'primary',
  thickness = 4,
  className,
  style,
}) => {
  const clampedValue = Math.min(100, Math.max(0, value));

  return (
    <div
      role="progressbar"
      aria-valuenow={variant === 'determinate' ? clampedValue : undefined}
      aria-valuemin={0}
      aria-valuemax={100}
      className={[
        'fas-progress',
        `fas-progress--${variant}`,
        `fas-progress--${color}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ height: thickness, ...style }}
    >
      <span
        className="fas-progress__bar"
        style={
          variant === 'determinate'
            ? { width: `${clampedValue}%` }
            : undefined
        }
      />
    </div>
  );
};

Progress.displayName = 'Progress';
export default Progress;
