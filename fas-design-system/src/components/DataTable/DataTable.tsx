/**
 * DataTable — FAS Design Kit
 * @see ../../components.md § Data Table
 */
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Checkbox } from '../Checkbox/Checkbox';
import { DataTableTopBar } from './DataTableTopBar';
import type { DataTableTopBarProps } from './DataTableTopBar';

// ── Internal dropdown used by pagination ──────────────────────────────────────
interface PaginationDropdownProps {
  value: number;
  options: number[];
  onChange: (v: number) => void;
  /** No border, primary-colored trigger text (used for page number) */
  ghost?: boolean;
}

function PaginationDropdown({ value, options, onChange, ghost = false }: PaginationDropdownProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  return (
    <div ref={ref} className="fas-datatable__pd-wrap">
      <button
        className={['fas-datatable__pd-trigger', ghost && 'fas-datatable__pd-trigger--ghost'].filter(Boolean).join(' ')}
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        <span className={ghost ? 'fas-datatable__pd-value--primary' : ''}>{value}</span>
        <span className="material-symbols-outlined fas-datatable__pd-arrow" aria-hidden>
          arrow_drop_down
        </span>
      </button>
      {open && (
        <div className="fas-menu fas-datatable__pd-menu">
          <ul className="fas-menu__list">
            {options.map((opt) => (
              <li
                key={opt}
                className={['fas-menu-item', opt === value && 'fas-menu-item--selected'].filter(Boolean).join(' ')}
                onClick={() => { onChange(opt); setOpen(false); }}
              >
                {opt}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export type SortDirection = 'asc' | 'desc' | 'none';

export interface ColumnDef<T = Record<string, unknown>> {
  /** 欄位唯一識別 */
  key: string;
  /** 表頭標籤 */
  header: string;
  /** 欄位寬度（px 或 %） */
  width?: string | number;
  /** 是否可排序 */
  sortable?: boolean;
  /** 自訂 render，回傳 ReactNode */
  render?: (value: unknown, row: T, rowIndex: number) => React.ReactNode;
  /** 文字對齊 */
  align?: 'left' | 'center' | 'right';
  /** 凍結欄位：left = 左側固定，right = 右側固定 */
  frozen?: 'left' | 'right';
}

// ── Frozen column helpers ─────────────────────────────────────────────────────
function toPixels(w: string | number | undefined): number {
  if (typeof w === 'number') return w;
  if (typeof w === 'string' && w.endsWith('px')) return parseFloat(w);
  return 0;
}

interface StickyInfo {
  left?: number;
  right?: number;
  lastLeft?: boolean;
  firstRight?: boolean;
}

export interface PaginationConfig {
  page: number;
  pageSize: number;
  total: number;
  pageSizeOptions?: number[];
  onPageChange: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
}

export interface DataTableProps<T = Record<string, unknown>> {
  columns: ColumnDef<T>[];
  data: T[];
  /** row 的唯一 key 取得函式 */
  rowKey: (row: T, index: number) => string | number;
  pagination?: PaginationConfig;
  /** 排序狀態（受控，搭配 onSort 使用） */
  sortKey?: string;
  sortDirection?: SortDirection;
  onSort?: (key: string, direction: SortDirection) => void;
  /** 選取（checkbox） */
  selectable?: boolean;
  selectedKeys?: Set<string | number>;
  onSelectChange?: (keys: Set<string | number>) => void;
  /** loading 狀態：顯示 Spin overlay */
  loading?: boolean;
  /** empty state 顯示 */
  emptyText?: string;
  /** 斑馬紋 */
  striped?: boolean;
  /** 行高規格：l = 48px, m = 40px（預設）, s = 36px */
  size?: 'l' | 'm' | 's';
  /** TopBar 設定，傳入後自動渲染在表格上方 */
  topBarProps?: DataTableTopBarProps;
  className?: string;
}

export function DataTable<T = Record<string, unknown>>({
  columns,
  data,
  rowKey,
  pagination,
  sortKey: controlledSortKey,
  sortDirection: controlledSortDir = 'none',
  onSort,
  selectable = false,
  selectedKeys,
  onSelectChange,
  loading = false,
  emptyText = '目前沒有資料',
  striped = true,
  size = 'm',
  topBarProps,
  className,
}: DataTableProps<T>) {
  // Internal sort state (used when onSort is not provided)
  const [internalSortKey, setInternalSortKey] = useState<string | undefined>();
  const [internalSortDir, setInternalSortDir] = useState<SortDirection>('none');

  const isControlled = Boolean(onSort);
  const sortKey = isControlled ? controlledSortKey : internalSortKey;
  const sortDirection = isControlled ? controlledSortDir : internalSortDir;

  const handleSort = (key: string) => {
    let next: SortDirection = 'asc';
    if (sortKey === key) {
      next = sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? 'none' : 'asc';
    }
    if (isControlled) {
      onSort!(key, next);
    } else {
      setInternalSortKey(next === 'none' ? undefined : key);
      setInternalSortDir(next);
    }
  };

  // Internal sort: sort data when not controlled
  const displayData = useMemo(() => {
    if (isControlled || !internalSortKey || internalSortDir === 'none') return data;
    return [...data].sort((a, b) => {
      const va = String((a as Record<string, unknown>)[internalSortKey] ?? '');
      const vb = String((b as Record<string, unknown>)[internalSortKey] ?? '');
      const cmp = va.localeCompare(vb, undefined, { numeric: true, sensitivity: 'base' });
      return internalSortDir === 'asc' ? cmp : -cmp;
    });
  }, [data, isControlled, internalSortKey, internalSortDir]);

  const allSelected =
    selectable &&
    data.length > 0 &&
    data.every((row, i) => selectedKeys?.has(rowKey(row, i)));

  const someSelected =
    selectable &&
    !!selectedKeys &&
    selectedKeys.size > 0 &&
    !allSelected;

  const toggleAll = () => {
    if (!onSelectChange) return;
    const keys = data.map((row, i) => rowKey(row, i));
    onSelectChange(allSelected ? new Set() : new Set(keys));
  };

  const toggleRow = (key: string | number) => {
    if (!onSelectChange || !selectedKeys) return;
    const next = new Set(selectedKeys);
    next.has(key) ? next.delete(key) : next.add(key);
    onSelectChange(next);
  };

  const sortIcon = (colKey: string) => {
    if (sortKey !== colKey) return 'unfold_more';
    return sortDirection === 'asc' ? 'arrow_upward' : sortDirection === 'desc' ? 'arrow_downward' : 'unfold_more';
  };

  // ── Scroll restoration on checkbox focus ────────────────────────────────────
  // When the hidden <input> inside a sticky checkbox cell receives focus via the
  // label-click mechanism, the browser calls scrollIntoView and may shift the
  // scroll container. We save the scroll position on mousedown and restore it.
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const savedScrollRef = useRef<{ x: number; y: number } | null>(null);

  const handleScrollMouseDown = () => {
    savedScrollRef.current = {
      x: scrollContainerRef.current?.scrollLeft ?? 0,
      y: window.scrollY,
    };
  };

  const handleScrollFocus = (e: React.FocusEvent<HTMLDivElement>) => {
    if (
      e.target instanceof HTMLInputElement &&
      e.target.classList.contains('fas-checkbox__input') &&
      savedScrollRef.current !== null
    ) {
      const { x, y } = savedScrollRef.current;
      savedScrollRef.current = null;
      requestAnimationFrame(() => {
        if (scrollContainerRef.current) scrollContainerRef.current.scrollLeft = x;
        if (window.scrollY !== y) window.scrollTo({ left: window.scrollX, top: y, behavior: 'instant' });
      });
    }
  };

  // ── Frozen / sticky columns ─────────────────────────────────────────────────
  const CHECKBOX_COL_WIDTH = 48;

  const stickyMeta = useMemo((): Map<string, StickyInfo> => {
    const map = new Map<string, StickyInfo>();
    const leftCols = columns.filter(c => c.frozen === 'left');
    const rightCols = columns.filter(c => c.frozen === 'right');
    if (!selectable && leftCols.length === 0 && rightCols.length === 0) return map;

    // Checkbox is always sticky-left when selectable
    if (selectable) {
      map.set('__checkbox__', { left: 0 });
    }

    // Left-frozen user columns
    let leftAcc = selectable ? CHECKBOX_COL_WIDTH : 0;
    leftCols.forEach(col => {
      map.set(col.key, { left: leftAcc });
      leftAcc += toPixels(col.width);
    });

    // Right-frozen user columns (iterate right-to-left for offset)
    let rightAcc = 0;
    [...rightCols].reverse().forEach(col => {
      map.set(col.key, { right: rightAcc });
      rightAcc += toPixels(col.width);
    });

    // Mark last-left for divider
    if (leftCols.length > 0) {
      const key = leftCols[leftCols.length - 1].key;
      map.set(key, { ...map.get(key)!, lastLeft: true });
    } else if (selectable) {
      map.set('__checkbox__', { ...map.get('__checkbox__')!, lastLeft: true });
    }

    // Mark first-right for divider
    if (rightCols.length > 0) {
      map.set(rightCols[0].key, { ...map.get(rightCols[0].key)!, firstRight: true });
    }

    return map;
  }, [columns, selectable]);

  const getStickyStyle = (key: string, isHeader: boolean): React.CSSProperties => {
    const sm = stickyMeta.get(key);
    if (!sm) return {};
    return {
      position: 'sticky',
      left: sm.left,
      right: sm.right,
      zIndex: isHeader ? 3 : 2,
    };
  };

  const getStickyClasses = (key: string): string => {
    const sm = stickyMeta.get(key);
    if (!sm) return '';
    return [
      sm.left !== undefined && 'fas-datatable__cell--frozen-left',
      sm.right !== undefined && 'fas-datatable__cell--frozen-right',
      sm.lastLeft && 'fas-datatable__cell--frozen-left-last',
      sm.firstRight && 'fas-datatable__cell--frozen-right-first',
    ].filter(Boolean).join(' ');
  };

  return (
    <div className={['fas-datatable__wrapper', className].filter(Boolean).join(' ')}>
      {/* TopBar — outside the bordered box, transparent bg */}
      {topBarProps && <DataTableTopBar {...topBarProps} />}
      {/* Bordered box: scroll + pagination */}
      <div className="fas-datatable__box">
      <div
        className="fas-datatable__scroll"
        ref={scrollContainerRef}
        onMouseDown={handleScrollMouseDown}
        onFocus={handleScrollFocus}
      >
        <table className={['fas-datatable', `fas-datatable--size-${size}`, striped && 'fas-datatable--striped', loading && 'fas-datatable--loading'].filter(Boolean).join(' ')}>
          <thead>
            <tr>
              {selectable && (
                <th
                  className={['fas-datatable__th fas-datatable__th--checkbox', getStickyClasses('__checkbox__')].filter(Boolean).join(' ')}
                  style={getStickyStyle('__checkbox__', true)}
                >
                  <Checkbox
                    checked={!!allSelected}
                    indeterminate={someSelected}
                    onChange={toggleAll}
                    size="s"
                  />
                </th>
              )}
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={[
                    'fas-datatable__th',
                    col.sortable && 'fas-datatable__th--sortable',
                    col.align && `fas-datatable__th--${col.align}`,
                    getStickyClasses(col.key),
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  style={{ width: col.width, ...getStickyStyle(col.key, true) }}
                  onClick={col.sortable ? () => handleSort(col.key) : undefined}
                  aria-sort={
                    sortKey === col.key
                      ? sortDirection === 'asc'
                        ? 'ascending'
                        : sortDirection === 'desc'
                        ? 'descending'
                        : 'none'
                      : undefined
                  }
                >
                  <span className="fas-datatable__th-content">
                    <span className="fas-datatable__th-label" title={col.header}>{col.header}</span>
                    {col.sortable && (
                      <span
                        className={[
                          'material-symbols-outlined fas-datatable__sort-icon',
                          sortKey === col.key && sortDirection !== 'none' && 'fas-datatable__sort-icon--active',
                        ]
                          .filter(Boolean)
                          .join(' ')}
                        aria-hidden
                      >
                        {sortIcon(col.key)}
                      </span>
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan={columns.length + (selectable ? 1 : 0)} className="fas-datatable__td fas-datatable__td--loading">
                  <span className="fas-spin" aria-label="載入中" />
                </td>
              </tr>
            ) : displayData.length === 0 ? (
              <tr>
                <td colSpan={columns.length + (selectable ? 1 : 0)} className="fas-datatable__td fas-datatable__td--empty">
                  {emptyText}
                </td>
              </tr>
            ) : (
              displayData.map((row, rowIndex) => {
                const key = rowKey(row, rowIndex);
                const isSelected = selectedKeys?.has(key) ?? false;
                return (
                  <tr
                    key={key}
                    className={['fas-datatable__row', isSelected && 'fas-datatable__row--selected'].filter(Boolean).join(' ')}
                  >
                    {selectable && (
                      <td
                        className={['fas-datatable__td fas-datatable__td--checkbox', getStickyClasses('__checkbox__')].filter(Boolean).join(' ')}
                        style={getStickyStyle('__checkbox__', false)}
                      >
                        <Checkbox
                          checked={isSelected}
                          onChange={() => toggleRow(key)}
                          size="s"
                        />
                      </td>
                    )}
                    {columns.map((col) => {
                      const rawVal = (row as Record<string, unknown>)[col.key];
                      const cellTitle = col.render ? undefined : String(rawVal ?? '');
                      return (
                        <td
                          key={col.key}
                          className={['fas-datatable__td', col.align && `fas-datatable__td--${col.align}`, getStickyClasses(col.key)].filter(Boolean).join(' ')}
                          style={getStickyStyle(col.key, false)}
                          title={cellTitle}
                        >
                          <div className="fas-datatable__cell-content">
                            {col.render ? col.render(rawVal, row, rowIndex) : cellTitle}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {pagination && (() => {
        const totalPages = Math.max(1, Math.ceil(pagination.total / pagination.pageSize));
        const isFirst = pagination.page === 1;
        const isLast = pagination.page >= totalPages;
        return (
          <div className="fas-datatable__pagination">
            <div className="fas-datatable__page-size">
              <span className="fas-datatable__pagination-label">Items per page</span>
              <PaginationDropdown
                value={pagination.pageSize}
                options={pagination.pageSizeOptions ?? [10, 20, 50]}
                onChange={(n) => { pagination.onPageSizeChange?.(n); }}
                ghost
              />
            </div>
            <div className="fas-datatable__page-nav">
              <button onClick={() => pagination.onPageChange(1)} disabled={isFirst} className="fas-datatable__page-btn">
                <span className="material-symbols-outlined" aria-hidden>first_page</span>
              </button>
              <button onClick={() => pagination.onPageChange(pagination.page - 1)} disabled={isFirst} className="fas-datatable__page-btn">
                <span className="material-symbols-outlined" aria-hidden>chevron_left</span>
              </button>
              <PaginationDropdown
                value={pagination.page}
                options={Array.from({ length: totalPages }, (_, i) => i + 1)}
                onChange={pagination.onPageChange}
                ghost
              />
              <button onClick={() => pagination.onPageChange(pagination.page + 1)} disabled={isLast} className="fas-datatable__page-btn">
                <span className="material-symbols-outlined" aria-hidden>chevron_right</span>
              </button>
              <button onClick={() => pagination.onPageChange(totalPages)} disabled={isLast} className="fas-datatable__page-btn">
                <span className="material-symbols-outlined" aria-hidden>last_page</span>
              </button>
            </div>
          </div>
        );
      })()}
      </div>{/* /fas-datatable__box */}
    </div>
  );
}

export default DataTable;
