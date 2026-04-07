/**
 * Checkbox — FAS Design Kit
 * @see ../../components.md § Checkbox
 */
import React, { useId } from 'react';
import './Checkbox.css';

export interface CheckboxProps {
  checked?: boolean;
  indeterminate?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  label?: React.ReactNode;
  /** m = 18px box (default), s = 14px box */
  size?: 'm' | 's';
  className?: string;
  style?: React.CSSProperties;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  indeterminate = false,
  disabled = false,
  onChange,
  label,
  size = 'm',
  className,
  style,
}) => {
  const uid = useId();
  const inputRef = React.useRef<HTMLInputElement>(null);

  // Sync the indeterminate DOM property (not an HTML attribute)
  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.checked);
  };

  const rootClasses = [
    'fas-checkbox',
    `fas-checkbox--${size}`,
    checked && !indeterminate && 'fas-checkbox--checked',
    indeterminate && 'fas-checkbox--indeterminate',
    disabled && 'fas-checkbox--disabled',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <label htmlFor={uid} className={rootClasses} style={style}>
      {/* Hidden native input for accessibility */}
      <input
        ref={inputRef}
        id={uid}
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
        className="fas-checkbox__input"
        aria-checked={indeterminate ? 'mixed' : checked}
      />

      {/* Custom visual box */}
      <span className="fas-checkbox__box" aria-hidden>
        {indeterminate && (
          <span className="fas-checkbox__mark fas-checkbox__mark--dash">&#x2013;</span>
        )}
        {!indeterminate && checked && (
          <svg
            className="fas-checkbox__mark fas-checkbox__mark--check"
            viewBox="0 0 12 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5L4.5 8.5L11 1.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </span>

      {label && <span className="fas-checkbox__label">{label}</span>}
    </label>
  );
};

Checkbox.displayName = 'Checkbox';
export default Checkbox;
