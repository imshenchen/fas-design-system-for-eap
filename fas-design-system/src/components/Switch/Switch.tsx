/**
 * Switch — FAS Design Kit
 */
import React, { useId } from 'react';
import './Switch.css';

export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Switch: React.FC<SwitchProps> = ({
  checked = false,
  disabled = false,
  onChange,
  label,
  className,
  style,
}) => {
  const uid = useId();

  return (
    <label
      htmlFor={uid}
      className={[
        'fas-switch',
        checked && 'fas-switch--on',
        disabled && 'fas-switch--disabled',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      <input
        id={uid}
        type="checkbox"
        role="switch"
        checked={checked}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.checked)}
        className="fas-switch__input"
        aria-checked={checked}
      />
      <span className="fas-switch__track" aria-hidden>
        <span className="fas-switch__thumb" />
      </span>
      {label && <span className="fas-switch__label">{label}</span>}
    </label>
  );
};

Switch.displayName = 'Switch';
export default Switch;
