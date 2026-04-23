/**
 * Select — FAS Design Kit
 *
 * Reuses TextField visuals (.fas-textfield, --outlined/--underline, sizes,
 * states). Supports single / multiple / searchable modes.
 *
 *   Single:       click trigger → menu opens → click item → fill + close
 *   Multiple:     click trigger → menu opens → toggle items → chips in field
 *                 → menu closes only on outside click / Escape
 *   Searchable:   when `searchable` is true, focus + type filters the options
 *                 (off by default)
 */
import React, { useEffect, useId, useMemo, useRef, useState } from 'react';
import { Checkbox } from '../Checkbox/Checkbox';
import { RemovableChip } from '../Chip/Chip';
import './Select.css';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  /** Controlled value. `string` for single, `string[]` for multiple. */
  value?: string | string[];
  defaultValue?: string | string[];
  onChange?: (value: string | string[]) => void;
  multiple?: boolean;
  /** 預設 false；開啟時 focus 狀態可輸入內容過濾選項 */
  searchable?: boolean;
  /** 預設 false；開啟後若輸入內容不在 options 中，下拉最上方會出現「新增」列，可建立新值（需搭配 searchable 使用） */
  creatable?: boolean;
  /** 新增列的前綴文字，預設 "新增" */
  createLabel?: string;

  // Layout / label
  label?: string;
  labelPosition?: 'top' | 'inline' | 'left';
  style?: 'outlined' | 'underline';
  size?: 'xl' | 'l' | 'm' | 's' | 'xs';
  placeholder?: string;

  // States
  disabled?: boolean;
  readOnly?: boolean;
  required?: boolean;
  error?: string;
  helperText?: string;

  /** 單選模式：focus + 有值時顯示 clear 圖示，預設 true */
  clearable?: boolean;

  // Misc
  className?: string;
  id?: string;
  name?: string;
  /** 搜尋無結果時顯示的文字 */
  emptyText?: string;
}

export const Select: React.FC<SelectProps> = ({
  options,
  value,
  defaultValue,
  onChange,
  multiple = false,
  searchable = false,
  creatable = false,
  createLabel = '新增',
  label,
  labelPosition = 'top',
  style = 'outlined',
  size = 'm',
  placeholder = '請選擇',
  disabled = false,
  readOnly = false,
  required = false,
  error,
  helperText,
  clearable = true,
  className,
  id,
  name,
  emptyText = '沒有符合的項目',
}) => {
  const autoId = useId();
  const fieldId = id ?? autoId;

  const isControlled = value !== undefined;
  const defaultVal: string | string[] = defaultValue ?? (multiple ? [] : '');
  const [internalValue, setInternalValue] = useState<string | string[]>(defaultVal);
  const currentValue = (isControlled ? value : internalValue) as string | string[];

  const [open, setOpen] = useState(false);
  const [focused, setFocused] = useState(false);
  const [search, setSearch] = useState('');

  const wrapperRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const selectedValues = useMemo<string[]>(() => {
    if (multiple) return Array.isArray(currentValue) ? currentValue : [];
    return currentValue ? [currentValue as string] : [];
  }, [currentValue, multiple]);

  // Fallback: if a value isn't in `options` (e.g. created on the fly via
  // `creatable`), surface it with `label === value` so the chip / trigger
  // still shows something meaningful.
  const selectedOptions = useMemo<SelectOption[]>(
    () =>
      selectedValues.map(
        (v) => options.find((o) => o.value === v) ?? { value: v, label: v },
      ),
    [selectedValues, options],
  );

  const hasValue = selectedValues.length > 0;

  const filteredOptions = useMemo(() => {
    if (!searchable || !search) return options;
    const q = search.toLowerCase();
    return options.filter(
      (o) =>
        o.label.toLowerCase().includes(q) ||
        o.value.toLowerCase().includes(q),
    );
  }, [options, search, searchable]);

  const commit = (next: string | string[]) => {
    if (!isControlled) setInternalValue(next);
    onChange?.(next);
  };

  const handleSelect = (opt: SelectOption) => {
    if (opt.disabled) return;
    if (multiple) {
      const cur = selectedValues;
      const next = cur.includes(opt.value)
        ? cur.filter((v) => v !== opt.value)
        : [...cur, opt.value];
      commit(next);
      // Multi: keep menu open and return focus to search (if any)
      if (searchable) searchInputRef.current?.focus();
    } else {
      commit(opt.value);
      setOpen(false);
      setSearch('');
    }
  };

  const handleRemoveChip = (val: string) => {
    if (disabled || readOnly) return;
    if (multiple) commit(selectedValues.filter((v) => v !== val));
  };

  const handleClear = () => {
    if (disabled || readOnly) return;
    commit(multiple ? [] : '');
    setSearch('');
    if (searchable) searchInputRef.current?.focus();
    else triggerRef.current?.focus();
  };

  // ── creatable: surface a "新增「xxx」" row when the query is a new value ──
  const trimmedQuery = search.trim();
  const lowerQuery = trimmedQuery.toLowerCase();
  const exactOptionMatch = options.some(
    (o) =>
      o.value.toLowerCase() === lowerQuery ||
      o.label.toLowerCase() === lowerQuery,
  );
  const alreadySelected = selectedValues.some(
    (v) => v.toLowerCase() === lowerQuery,
  );
  const showCreate =
    creatable && searchable && !!trimmedQuery && !exactOptionMatch && !alreadySelected;

  const handleCreate = () => {
    if (!showCreate) return;
    if (multiple) {
      commit([...selectedValues, trimmedQuery]);
      setSearch('');
      searchInputRef.current?.focus();
    } else {
      commit(trimmedQuery);
      setSearch('');
      setOpen(false);
    }
  };

  const toggleOpen = () => {
    if (disabled || readOnly) return;
    const next = !open;
    setOpen(next);
    if (next && searchable) {
      // Defer so the search input exists in the DOM
      setTimeout(() => searchInputRef.current?.focus(), 0);
    }
  };

  // Outside click → close menu + blur
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) {
        setOpen(false);
        setFocused(false);
        setSearch('');
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Escape closes
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setSearch('');
      }
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open]);

  // Clear works in both single and multi modes: single → '', multi → []
  const showClear =
    clearable && focused && hasValue && !disabled && !readOnly;

  const stateClasses = [
    focused && 'fas-textfield--focus',
    hasValue && 'fas-textfield--filled',
    !!error && 'fas-textfield--error',
    disabled && 'fas-textfield--disabled',
    readOnly && 'fas-textfield--readonly',
  ]
    .filter(Boolean)
    .join(' ');

  const singleLabel = !multiple ? selectedOptions[0]?.label : undefined;

  return (
    <div
      ref={wrapperRef}
      className={[
        'fas-textfield',
        'fas-select',
        `fas-textfield--${style}`,
        `fas-textfield--${size}`,
        `fas-textfield--label-${labelPosition}`,
        multiple && 'fas-select--multiple',
        open && 'fas-select--open',
        stateClasses,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      // Focus bubbles: trigger any child (trigger div / search input / chip X) gaining focus sets focused=true.
      onFocus={() => setFocused(true)}
      onBlur={(e) => {
        if (!wrapperRef.current?.contains(e.relatedTarget as Node)) {
          setFocused(false);
        }
      }}
    >
      {label && (
        <label htmlFor={fieldId} className="fas-textfield__label">
          {label}
          {required && (
            <span className="fas-textfield__required" aria-hidden>*</span>
          )}
        </label>
      )}

      <div className="fas-textfield__control">
        <div
          ref={triggerRef}
          id={fieldId}
          role="combobox"
          aria-expanded={open}
          aria-haspopup="listbox"
          aria-disabled={disabled}
          aria-readonly={readOnly}
          tabIndex={disabled ? -1 : 0}
          className="fas-textfield__input fas-select__trigger"
          onMouseDown={(e) => {
            const t = e.target as HTMLElement;
            // Nested interactive children handle their own click / focus
            if (t.closest('.fas-chip__remove, .fas-textfield__clear')) return;
            if (t.closest('.fas-select__search')) return;
            // Toggle the menu; focus will land on the trigger naturally
            toggleOpen();
          }}
          onKeyDown={(e) => {
            if (disabled || readOnly) return;
            if (e.key === 'Enter' || (e.key === ' ' && !searchable)) {
              e.preventDefault();
              toggleOpen();
            } else if (e.key === 'ArrowDown' && !open) {
              e.preventDefault();
              setOpen(true);
            }
          }}
        >
          {/* Chips (multi only) */}
          {multiple && selectedOptions.length > 0 && (
            <div className="fas-select__chips">
              {selectedOptions.map((opt) => (
                <RemovableChip
                  key={opt.value}
                  label={opt.label}
                  size="s"
                  onRemove={() => handleRemoveChip(opt.value)}
                />
              ))}
            </div>
          )}

          {/* Search input OR static display */}
          {searchable ? (
            <input
              ref={searchInputRef}
              className="fas-select__search"
              value={search}
              placeholder={
                hasValue && !multiple
                  ? (singleLabel ?? '')
                  : selectedOptions.length
                  ? ''
                  : placeholder
              }
              disabled={disabled}
              readOnly={readOnly}
              aria-autocomplete="list"
              aria-controls={`${fieldId}-listbox`}
              onChange={(e) => {
                setSearch(e.target.value);
                if (!open) setOpen(true);
              }}
              // Open the menu as soon as the user interacts with the search input
              onFocus={() => { if (!open) setOpen(true); }}
              onClick={() => { if (!open) setOpen(true); }}
              onKeyDown={(e) => {
                // creatable: Enter commits the create row (if visible) and
                // stops the trigger from toggling the menu closed.
                if (e.key === 'Enter' && showCreate) {
                  e.preventDefault();
                  e.stopPropagation();
                  handleCreate();
                }
              }}
              onMouseDown={(e) => e.stopPropagation()}
            />
          ) : (
            !multiple && (
              <span
                className={[
                  'fas-select__value',
                  !hasValue && 'fas-select__value--placeholder',
                ]
                  .filter(Boolean)
                  .join(' ')}
              >
                {hasValue ? singleLabel : placeholder}
              </span>
            )
          )}

          {/* Multi + no search: empty space when no selection, placeholder inline */}
          {multiple && !searchable && selectedOptions.length === 0 && (
            <span className="fas-select__value fas-select__value--placeholder">
              {placeholder}
            </span>
          )}

          {/* Arrow */}
          <span
            className={[
              'material-symbols-outlined fas-select__arrow',
              open && 'fas-select__arrow--open',
            ]
              .filter(Boolean)
              .join(' ')}
            aria-hidden
          >
            arrow_drop_down
          </span>
        </div>

        {/* Clear button (single only) */}
        {showClear && (
          <button
            type="button"
            className="fas-textfield__clear fas-select__clear"
            aria-label="清除選擇"
            onMouseDown={(e) => e.preventDefault()}
            onClick={(e) => {
              e.stopPropagation();
              handleClear();
            }}
          >
            <span className="material-symbols-outlined" aria-hidden>
              cancel
            </span>
          </button>
        )}

        {/* Dropdown menu */}
        {open && (
          <div
            className="fas-menu fas-select__menu"
            role="listbox"
            id={`${fieldId}-listbox`}
            aria-multiselectable={multiple}
            onMouseDown={(e) => e.preventDefault()} /* keep focus */
          >
            <ul className="fas-menu__list">
              {/* "新增" create row — only when `creatable` is on and the query
                  is a new value. Placed at the top so it's always visible. */}
              {showCreate && (
                <li
                  role="option"
                  aria-selected={false}
                  className="fas-menu-item fas-select__create"
                  onClick={handleCreate}
                >
                  <span
                    className="material-symbols-outlined fas-select__create-icon"
                    aria-hidden
                  >
                    add
                  </span>
                  <span className="fas-menu-item__label">
                    {createLabel}
                    <span className="fas-select__create-query">
                      「{trimmedQuery}」
                    </span>
                  </span>
                </li>
              )}

              {filteredOptions.length === 0 && !showCreate ? (
                <li className="fas-menu-item fas-menu-item--disabled fas-select__empty">
                  {emptyText}
                </li>
              ) : filteredOptions.length === 0 ? null : (
                filteredOptions.map((opt) => {
                  const selected = selectedValues.includes(opt.value);
                  return (
                    <li
                      key={opt.value}
                      role="option"
                      aria-selected={selected}
                      className={[
                        'fas-menu-item fas-select__option',
                        selected && !multiple && 'fas-menu-item--selected',
                        opt.disabled && 'fas-menu-item--disabled',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      onClick={() => handleSelect(opt)}
                    >
                      {multiple && (
                        <Checkbox
                          checked={selected}
                          onChange={() => handleSelect(opt)}
                          size="s"
                        />
                      )}
                      <span className="fas-menu-item__label">{opt.label}</span>
                      {!multiple && selected && (
                        <span
                          className="material-symbols-outlined fas-select__check"
                          aria-hidden
                        >
                          check
                        </span>
                      )}
                    </li>
                  );
                })
              )}
            </ul>
          </div>
        )}
      </div>

      {error && (
        <p className="fas-textfield__error" role="alert">
          {error}
        </p>
      )}
      {!error && helperText && (
        <p className="fas-textfield__helper">{helperText}</p>
      )}

      {/* Hidden inputs for native form submission */}
      {name &&
        (multiple
          ? (selectedValues as string[]).map((v) => (
              <input key={v} type="hidden" name={name} value={v} />
            ))
          : (
              <input
                type="hidden"
                name={name}
                value={(currentValue as string) ?? ''}
              />
            ))}
    </div>
  );
};

Select.displayName = 'Select';
export default Select;
