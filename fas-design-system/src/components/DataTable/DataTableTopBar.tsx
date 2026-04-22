/**
 * DataTableTopBar — FAS Design Kit
 * Standalone top bar for DataTable / MasterDetailTable.
 *
 * Layout:
 *   Row 1 (always): title + tabs (optional) | total / selected counts
 *   Row 2 (optional): action buttons (overflow → "更多" dropdown) | search input
 */
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Button } from '../Button/Button';
import type { ButtonVariant, ButtonColor } from '../Button/Button';
import './DataTableTopBar.css';

// ── Types ─────────────────────────────────────────────────────────────────────

export interface DataTableTopBarAction {
  key: string;
  /** Button label text */
  label?: string;
  /** Material Symbols icon name */
  icon?: string;
  variant?: ButtonVariant;
  color?: ButtonColor;
  onClick: () => void;
  disabled?: boolean;
}

export interface DataTableTopBarTab {
  key: string;
  label: React.ReactNode;
  /** Material Symbols icon name */
  icon?: string;
}

export interface DataTableTopBarProps {
  // ── Row 1 ──────────────────────────────────────────────────────────────────
  title?: string;
  /** Tab navigation items rendered next to the title */
  tabs?: DataTableTopBarTab[];
  activeTab?: string;
  onTabChange?: (key: string) => void;
  /** Show total count label: "Total N" */
  total?: number;
  /** Show selected count label (only when > 0): "Selected N" */
  selectedCount?: number;

  // ── Row 2 ──────────────────────────────────────────────────────────────────
  /** Action buttons rendered in the left of row 2 */
  actions?: DataTableTopBarAction[];
  /** Show quick search input in right of row 2 */
  showSearch?: boolean;
  searchPlaceholder?: string;
  /** Controlled search value */
  searchValue?: string;
  onSearch?: (value: string) => void;

  className?: string;
}

// ── Overflow-aware actions bar ────────────────────────────────────────────────

const GAP = 4; // px gap between buttons

interface ActionsBarProps {
  actions: DataTableTopBarAction[];
}

const ActionsBar: React.FC<ActionsBarProps> = ({ actions }) => {
  const [visibleCount, setVisibleCount] = useState<number | null>(null);
  const [moreOpen, setMoreOpen] = useState(false);

  // Container that is measured
  const containerRef = useRef<HTMLDivElement>(null);
  // Hidden row used to measure real button widths
  const measureRef = useRef<HTMLDivElement>(null);
  // The "更多" wrapper (for outside-click detection)
  const moreRef = useRef<HTMLDivElement>(null);

  const recalculate = useCallback(() => {
    const container = containerRef.current;
    const measure = measureRef.current;
    if (!container || !measure) return;

    const containerWidth = container.offsetWidth;
    const btns = Array.from(
      measure.querySelectorAll<HTMLElement>('[data-action-btn]'),
    );
    if (btns.length === 0) return;

    // Measure the "更多" button width from the measurement layer
    const moreBtnEl = measure.querySelector<HTMLElement>('[data-more-btn]');
    const moreBtnWidth = moreBtnEl ? moreBtnEl.offsetWidth + GAP : 80;

    let used = 0;
    let count = 0;

    for (let i = 0; i < btns.length; i++) {
      const w = btns[i].offsetWidth + GAP;
      // Reserve space for the "更多" button if this isn't the last action
      const reserve = i < btns.length - 1 ? moreBtnWidth : 0;
      if (used + w + reserve > containerWidth) break;
      used += w;
      count++;
    }

    setVisibleCount(count >= actions.length ? null : count);
  }, [actions.length]);

  // Recalculate on mount and whenever actions change
  useEffect(() => {
    recalculate();
    const container = containerRef.current;
    if (!container) return;
    const ro = new ResizeObserver(recalculate);
    ro.observe(container);
    return () => ro.disconnect();
  }, [recalculate]);

  // Close dropdown on outside click
  useEffect(() => {
    if (!moreOpen) return;
    const handler = (e: MouseEvent) => {
      if (moreRef.current && !moreRef.current.contains(e.target as Node)) {
        setMoreOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [moreOpen]);

  const visibleActions =
    visibleCount === null ? actions : actions.slice(0, visibleCount);
  const overflowActions =
    visibleCount === null ? [] : actions.slice(visibleCount);

  const renderButton = (action: DataTableTopBarAction, extraProps?: React.HTMLAttributes<HTMLElement>) => {
    const variant = action.variant ?? 'text';
    // Text buttons default to secondary; contained/outlined keep the primary default.
    const defaultColor: ButtonColor = variant === 'text' ? 'secondary' : 'primary';
    return (
      <Button
        key={action.key}
        size="s"
        variant={variant}
        color={action.color ?? defaultColor}
        disabled={action.disabled}
        onClick={action.onClick}
        iconLeft={
          action.icon
            ? <span className="material-symbols-outlined" aria-hidden>{action.icon}</span>
            : undefined
        }
        {...(extraProps as any)}
      >
        {action.label}
      </Button>
    );
  };

  return (
    // Wrapper: the real container that ResizeObserver watches
    <div ref={containerRef} className="fas-dt-topbar__actions">
      {/* ── Hidden measurement row ──────────────────────────────────────── */}
      <div
        ref={measureRef}
        aria-hidden
        className="fas-dt-topbar__actions-measure"
      >
        {actions.map((action) => (
          <span key={action.key} data-action-btn>
            {renderButton(action)}
          </span>
        ))}
        {/* Also measure the "更多" button */}
        <span data-more-btn>
          <Button
            size="s"
            variant="text"
            color="secondary"
            iconLeft={<span className="material-symbols-outlined" aria-hidden>more_horiz</span>}
          >
            更多
          </Button>
        </span>
      </div>

      {/* ── Visible actions ─────────────────────────────────────────────── */}
      {visibleActions.map((action) => renderButton(action))}

      {/* ── "更多" dropdown ─────────────────────────────────────────────── */}
      {overflowActions.length > 0 && (
        <div ref={moreRef} className="fas-dt-topbar__more">
          <Button
            size="s"
            variant="text"
            color="secondary"
            onClick={() => setMoreOpen((v) => !v)}
            iconLeft={<span className="material-symbols-outlined" aria-hidden>more_horiz</span>}
          >
            更多
          </Button>

          {moreOpen && (
            <div className="fas-dt-topbar__more-menu" role="menu">
              {overflowActions.map((action) => (
                <button
                  key={action.key}
                  type="button"
                  role="menuitem"
                  className="fas-dt-topbar__more-item"
                  disabled={action.disabled}
                  onClick={() => {
                    action.onClick();
                    setMoreOpen(false);
                  }}
                >
                  {action.icon && (
                    <span className="material-symbols-outlined fas-dt-topbar__more-item-icon" aria-hidden>
                      {action.icon}
                    </span>
                  )}
                  {action.label}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ── Main component ─────────────────────────────────────────────────────────────

export const DataTableTopBar: React.FC<DataTableTopBarProps> = ({
  title,
  tabs,
  activeTab,
  onTabChange,
  total,
  selectedCount,
  actions,
  showSearch = false,
  searchPlaceholder = '快速搜尋',
  searchValue,
  onSearch,
  className,
}) => {
  const [internalSearch, setInternalSearch] = useState('');
  const searchVal = searchValue !== undefined ? searchValue : internalSearch;

  const handleSearch = (v: string) => {
    if (searchValue === undefined) setInternalSearch(v);
    onSearch?.(v);
  };

  const hasRow2 = (actions && actions.length > 0) || showSearch;
  const showTitleRow =
    title !== undefined ||
    (tabs && tabs.length > 0) ||
    total !== undefined ||
    (selectedCount !== undefined && selectedCount > 0);

  return (
    <div className={['fas-dt-topbar', className].filter(Boolean).join(' ')}>
      {/* ── Row 1: title + tabs + counts ─────────────────────────────── */}
      {showTitleRow && (
        <div className="fas-dt-topbar__title-row">
          {title && <span className="fas-dt-topbar__title">{title}</span>}

          {tabs && tabs.length > 0 && (
            <div className="fas-dt-topbar__tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  className={[
                    'fas-dt-topbar__tab',
                    tab.key === activeTab && 'fas-dt-topbar__tab--active',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => onTabChange?.(tab.key)}
                >
                  {tab.icon && (
                    <span
                      className="material-symbols-outlined fas-dt-topbar__tab-icon"
                      aria-hidden
                    >
                      {tab.icon}
                    </span>
                  )}
                  {tab.label}
                </button>
              ))}
            </div>
          )}

          {(total !== undefined ||
            (selectedCount !== undefined && selectedCount > 0)) && (
            <div className="fas-dt-topbar__counts">
              {total !== undefined && (
                <span className="fas-dt-topbar__count">
                  Total{' '}
                  <span className="fas-dt-topbar__count-value">{total}</span>
                </span>
              )}
              {selectedCount !== undefined && selectedCount > 0 && (
                <span className="fas-dt-topbar__count">
                  Selected{' '}
                  <span className="fas-dt-topbar__count-value">
                    {selectedCount}
                  </span>
                </span>
              )}
            </div>
          )}
        </div>
      )}

      {/* ── Row 2: actions + search ───────────────────────────────────── */}
      {hasRow2 && (
        <div className="fas-dt-topbar__action-row">
          {actions && actions.length > 0 && (
            <ActionsBar actions={actions} />
          )}

          {showSearch && (
            <div className="fas-dt-topbar__search">
              <span
                className="material-symbols-outlined fas-dt-topbar__search-icon"
                aria-hidden
              >
                search
              </span>
              <input
                className="fas-dt-topbar__search-input"
                type="text"
                placeholder={searchPlaceholder}
                value={searchVal}
                onChange={(e) => handleSearch(e.target.value)}
              />
              {searchVal && (
                <button
                  type="button"
                  className="fas-dt-topbar__search-clear"
                  onClick={() => handleSearch('')}
                  aria-label="清除搜尋"
                >
                  <span className="material-symbols-outlined" aria-hidden>
                    close
                  </span>
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

DataTableTopBar.displayName = 'DataTableTopBar';
export default DataTableTopBar;
