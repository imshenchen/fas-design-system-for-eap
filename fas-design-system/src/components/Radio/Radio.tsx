/**
 * Radio / RadioGroup — FAS Design Kit
 */
import React, { useId } from 'react';
import './Radio.css';

export interface RadioProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  value?: string;
  name?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const Radio: React.FC<RadioProps> = ({
  checked = false,
  disabled = false,
  onChange,
  label,
  value,
  name,
  className,
  style,
}) => {
  const uid = useId();

  return (
    <label
      htmlFor={uid}
      className={[
        'fas-radio',
        checked && 'fas-radio--checked',
        disabled && 'fas-radio--disabled',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      <input
        id={uid}
        type="radio"
        checked={checked}
        disabled={disabled}
        value={value}
        name={name}
        onChange={(e) => onChange?.(e.target.checked)}
        className="fas-radio__input"
      />
      <span className="fas-radio__indicator" aria-hidden>
        {checked && <span className="fas-radio__dot" />}
      </span>
      {label && <span className="fas-radio__label">{label}</span>}
    </label>
  );
};

Radio.displayName = 'Radio';

// ---------------------------------------------------------------------------
// RadioGroup
// ---------------------------------------------------------------------------

export interface RadioGroupOption {
  value: string;
  label: React.ReactNode;
  disabled?: boolean;
}

export interface RadioGroupProps {
  name: string;
  value: string;
  onChange: (value: string) => void;
  options: RadioGroupOption[];
  direction?: 'row' | 'column';
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  name,
  value,
  onChange,
  options,
  direction = 'column',
  disabled = false,
  className,
  style,
}) => (
  <div
    role="radiogroup"
    className={['fas-radio-group', className].filter(Boolean).join(' ')}
    style={{ display: 'flex', flexDirection: direction, gap: direction === 'row' ? 16 : 8, ...style }}
  >
    {options.map((opt) => (
      <Radio
        key={opt.value}
        name={name}
        value={opt.value}
        checked={value === opt.value}
        disabled={disabled || opt.disabled}
        label={opt.label}
        onChange={() => onChange(opt.value)}
      />
    ))}
  </div>
);

RadioGroup.displayName = 'RadioGroup';
export default Radio;
