/**
 * TextField — FAS Design Kit
 * @see ../../components.md § Text Field
 *
 * States are derived from props + internal focus tracking:
 *   - disabled / readOnly       → explicit prop
 *   - error                     → set when `error` prop has a value
 *   - focus                     → tracked internally
 *   - filled                    → derived from `value`
 * States can combine (e.g. error + focus). Clear icon appears when
 * focus && filled && !disabled && !readOnly (per Figma 7205:83445 notes).
 */
import React from 'react';

export type TextFieldStyle = 'outlined' | 'underline' | 'borderless';
export type TextFieldSize  = 'xl' | 'l' | 'm' | 's' | 'xs';

export interface TextFieldProps {
  /** 欄位標籤 */
  label?: string;
  /** Label 位置 */
  labelPosition?: 'top' | 'inline' | 'left';
  style?:    TextFieldStyle;
  size?:     TextFieldSize;
  value?:    string;
  defaultValue?: string;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?:   React.FocusEventHandler<HTMLInputElement>;
  onFocus?:  React.FocusEventHandler<HTMLInputElement>;
  placeholder?: string;
  /** 錯誤訊息：有值時欄位進入 error state */
  error?: string;
  /** 輔助說明文字（無錯誤時顯示） */
  helperText?: string;
  disabled?:  boolean;
  readOnly?:  boolean;
  required?:  boolean;
  maxLength?: number;
  /** 顯示字元計數器（配合 maxLength） */
  showCount?: boolean;
  leadingIcon?:  React.ReactNode;
  trailingIcon?: React.ReactNode;
  /** 顯示 clear 按鈕（只在 focus + 有值 時出現），預設 true */
  clearable?: boolean;
  type?: React.HTMLInputTypeAttribute;
  id?: string;
  name?: string;
  className?: string;
  inputRef?: React.Ref<HTMLInputElement>;
}

export const TextField: React.FC<TextFieldProps> = ({
  label,
  labelPosition = 'top',
  style    = 'outlined',
  size     = 'm',
  value,
  defaultValue,
  onChange,
  onBlur,
  onFocus,
  placeholder,
  error,
  helperText,
  disabled  = false,
  readOnly  = false,
  required  = false,
  maxLength,
  showCount = false,
  leadingIcon,
  trailingIcon,
  clearable = true,
  type = 'text',
  id,
  name,
  className,
  inputRef,
}) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? '');
  const [focused, setFocused] = React.useState(false);
  const innerRef = React.useRef<HTMLInputElement | null>(null);

  const currentValue = value !== undefined ? value : internalValue;
  const filled = currentValue.length > 0;

  // Compose refs so we can also focus from the clear button
  const setRef = (el: HTMLInputElement | null) => {
    innerRef.current = el;
    if (typeof inputRef === 'function') inputRef(el);
    else if (inputRef && 'current' in inputRef) (inputRef as React.MutableRefObject<HTMLInputElement | null>).current = el;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (value === undefined) setInternalValue(e.target.value);
    onChange?.(e.target.value, e);
  };

  const handleFocus: React.FocusEventHandler<HTMLInputElement> = (e) => {
    setFocused(true);
    onFocus?.(e);
  };

  const handleBlur: React.FocusEventHandler<HTMLInputElement> = (e) => {
    // Defer so a click on the clear button (mousedown prevented) can run first
    setFocused(false);
    onBlur?.(e);
  };

  const handleClear = () => {
    const el = innerRef.current;
    // Uncontrolled: reset internal state → React re-renders with empty value.
    if (value === undefined) setInternalValue('');
    // Notify consumers so controlled inputs can update their state to ''.
    if (onChange && el) {
      const fakeEvent = {
        target: el,
        currentTarget: el,
        type: 'change',
      } as unknown as React.ChangeEvent<HTMLInputElement>;
      onChange('', fakeEvent);
    }
    el?.focus();
  };

  const showClear =
    clearable && focused && filled && !disabled && !readOnly;

  // State classes (can combine)
  const stateClasses = [
    focused   && 'fas-textfield--focus',
    filled    && 'fas-textfield--filled',
    !!error   && 'fas-textfield--error',
    disabled  && 'fas-textfield--disabled',
    readOnly  && 'fas-textfield--readonly',
  ].filter(Boolean).join(' ');

  return (
    <div
      className={[
        'fas-textfield',
        `fas-textfield--${style}`,
        `fas-textfield--${size}`,
        `fas-textfield--label-${labelPosition}`,
        stateClasses,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {label && (
        <label htmlFor={id} className="fas-textfield__label">
          {label}
          {required && <span className="fas-textfield__required" aria-hidden>*</span>}
        </label>
      )}
      <div className="fas-textfield__control">
        {leadingIcon && (
          <span className="fas-textfield__icon fas-textfield__icon--leading">{leadingIcon}</span>
        )}
        <input
          ref={setRef}
          id={id}
          name={name}
          type={type}
          value={currentValue}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
          required={required}
          maxLength={maxLength}
          aria-invalid={!!error}
          aria-describedby={
            error ? `${id}-error` : helperText ? `${id}-helper` : undefined
          }
          className="fas-textfield__input"
        />
        {/* Clear button (focus + filled only). Takes precedence over trailing icon. */}
        {showClear ? (
          <button
            type="button"
            className="fas-textfield__clear"
            aria-label="清除輸入"
            onMouseDown={(e) => e.preventDefault()} /* keep focus on input */
            onClick={handleClear}
          >
            <span className="material-symbols-outlined" aria-hidden>cancel</span>
          </button>
        ) : (
          trailingIcon && (
            <span className="fas-textfield__icon fas-textfield__icon--trailing">
              {trailingIcon}
            </span>
          )
        )}
      </div>
      {showCount && maxLength && (
        <span className="fas-textfield__count" aria-live="polite">
          {currentValue.length} / {maxLength}
        </span>
      )}
      {error && (
        <p id={`${id}-error`} className="fas-textfield__error" role="alert">
          {error}
        </p>
      )}
      {!error && helperText && (
        <p id={`${id}-helper`} className="fas-textfield__helper">
          {helperText}
        </p>
      )}
    </div>
  );
};

// ─── Textarea variant ────────────────────────────────────────────────────────
export interface TextAreaProps extends Omit<TextFieldProps, 'type' | 'leadingIcon' | 'trailingIcon' | 'inputRef' | 'onBlur' | 'onFocus' | 'clearable'> {
  rows?: number;
  textareaRef?: React.Ref<HTMLTextAreaElement>;
  onBlur?:  React.FocusEventHandler<HTMLTextAreaElement>;
  onFocus?: React.FocusEventHandler<HTMLTextAreaElement>;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label, labelPosition = 'top', style = 'outlined', size = 'm',
  value, defaultValue, onChange, onBlur, onFocus, placeholder, error, helperText,
  disabled = false, readOnly = false, required = false,
  maxLength, showCount = false, id, name, className, textareaRef,
  rows = 3,
}) => {
  const [internalValue, setInternalValue] = React.useState(defaultValue ?? '');
  const [focused, setFocused] = React.useState(false);
  const currentValue = value !== undefined ? value : internalValue;
  const filled = currentValue.length > 0;

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (value === undefined) setInternalValue(e.target.value);
    (onChange as any)?.(e.target.value, e);
  };

  const stateClasses = [
    focused   && 'fas-textfield--focus',
    filled    && 'fas-textfield--filled',
    !!error   && 'fas-textfield--error',
    disabled  && 'fas-textfield--disabled',
    readOnly  && 'fas-textfield--readonly',
  ].filter(Boolean).join(' ');

  return (
    <div className={[
      'fas-textfield', 'fas-textfield--textarea',
      `fas-textfield--${style}`,
      `fas-textfield--${size}`,
      `fas-textfield--label-${labelPosition}`,
      stateClasses,
      className,
    ].filter(Boolean).join(' ')}>
      {label && (
        <label htmlFor={id} className="fas-textfield__label">
          {label}
          {required && <span className="fas-textfield__required" aria-hidden>*</span>}
        </label>
      )}
      <textarea
        ref={textareaRef}
        id={id} name={name} rows={rows}
        value={currentValue} onChange={handleChange}
        onFocus={(e) => { setFocused(true); onFocus?.(e); }}
        onBlur={(e) => { setFocused(false); onBlur?.(e); }}
        placeholder={placeholder} disabled={disabled} readOnly={readOnly}
        required={required} maxLength={maxLength}
        aria-invalid={!!error}
        className="fas-textfield__input fas-textfield__textarea"
      />
      {showCount && maxLength && (
        <span className="fas-textfield__count">{currentValue.length} / {maxLength}</span>
      )}
      {error && <p className="fas-textfield__error" role="alert">{error}</p>}
      {!error && helperText && <p className="fas-textfield__helper">{helperText}</p>}
    </div>
  );
};

export default TextField;
