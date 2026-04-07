/**
 * Slider — FAS Design Kit
 */
import React, { useId } from 'react';
import './Slider.css';

export interface SliderProps {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  disabled?: boolean;
  onChange?: (value: number) => void;
  showValue?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const Slider: React.FC<SliderProps> = ({
  value = 0,
  min = 0,
  max = 100,
  step = 1,
  disabled = false,
  onChange,
  showValue = false,
  className,
  style,
}) => {
  const uid = useId();
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div
      className={[
        'fas-slider',
        disabled && 'fas-slider--disabled',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      {showValue && (
        <span className="fas-slider__value">{value}</span>
      )}
      <div className="fas-slider__track-wrapper">
        <div className="fas-slider__track">
          <div
            className="fas-slider__fill"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <input
          id={uid}
          type="range"
          className="fas-slider__input"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={disabled}
          onChange={(e) => onChange?.(Number(e.target.value))}
          style={{ '--slider-fill': `${percentage}%` } as React.CSSProperties}
        />
      </div>
    </div>
  );
};

Slider.displayName = 'Slider';
export default Slider;
