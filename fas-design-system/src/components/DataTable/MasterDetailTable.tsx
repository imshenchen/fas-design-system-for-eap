/**
 * MasterDetailTable — FAS Design Kit
 * Master table with expandable rows that reveal a nested detail table.
 */
import React, { useState, useMemo, useRef, useEffect } from 'react';
import { DataTable } from './DataTable';
import type { ColumnDef, PaginationConfig, SortDirection } from './DataTable';
import { DataTableTopBar } from './DataTableTopBar';
import type { DataTableTopBarAction, DataTableTopBarTab } from './DataTableTopBar';

// ── Sticky / frozen column helpers (mirrors DataTable logic) ──────────────────
function mdtToPixels(w: string | number | undefined): number {
  if (typeof w === 'number') return w;
  if (typeof w === 'string' && w.endsWith('px')) return parseFloat(w);
  return 0;
}

interface MdtStickyInfo {
  left?: number;
  right?: number;
  lastLeft?: boolean;
  firstRight?: boolean;
}

function getMdtStickyStyle(sm: MdtStickyInfo | undefined, isHeader: boolean): React.CSSProperties {
  if (!sm || (sm.left === undefined && sm.right === undefined)) return {};
  return { position: 'sticky', left: sm.left, right: sm.right, zIndex: isHeader ? 3 : 2 };
}

function getMdtStickyClasses(sm: MdtStickyInfo | undefined): string {
  if (!sm) return '';
  return [
    sm.left !== undefined && 'fas-datatable__cell--frozen-left',
    sm.right !== undefined && 'fas-datatable__cell--frozen-right',
    sm.lastLeft && 'fas-datatable__cell--frozen-left-last',
    sm.firstRight && 'fas-datatable__cell--frozen-right-first',
  ].filter(Boolean).join(' ');
}

// ── Shared pagination dropdown (same as in DataTable) ─────────────────────────
interface PaginationDropdownProps {
  value: number;
  options: number[];
  onChange: (v: number) => void;
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
        <span className="material-symbols-outlined fas-datatable__pd-arrow" aria-hidden>arrow_drop_down</span>
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

export interface MasterDetailTableProps<
  M = Record<string, unknown>,
  D = Record<string, unknown>,
> {
  // ── Master table ────────────────────────────────────────────────────────────
  columns: ColumnDef<M>[];
  data: M[];
  rowKey: (row: M, index: number) => string | number;

  // ── Top bar ─────────────────────────────────────────────────────────────────
  title?: string;
  /** Show total count badge next to title */
  showCount?: boolean;
  /** Show quick search input */
  showSearch?: boolean;
  searchPlaceholder?: string;
  onSearch?: (value: string) => void;
  /** Tab navigation items in the top bar */
  topBarTabs?: DataTableTopBarTab[];
  activeTab?: string;
  onTabChange?: (key: string) => void;
  /** Action buttons in the top bar (row 2) */
  topBarActions?: DataTableTopBarAction[];
  /** Selected row count — shown in top bar when > 0 */
  selectedCount?: number;

  // ── Detail table ─────────────────────────────────────────────────────────────
  detailColumns: ColumnDef<D>[];
  /** Return detail rows for a given master row */
  getDetailData: (masterRow: M) => D[];
  detailRowKey: (row: D, index: number) => string | number;
  /** Detail sub-table title; can be a string or a function of master row */
  detailTitle?: string | ((masterRow: M) => string);
  /** Per-row detail pagination (optional) */
  getDetailPagination?: (masterRow: M) => PaginationConfig | undefined;

  // ── Master pagination ────────────────────────────────────────────────────────
  pagination?: PaginationConfig;

  striped?: boolean;
  /** 行高規格：l = 48px, m = 40px（預設）, s = 36px */
  size?: 'l' | 'm' | 's';
  className?: string;
}

export function MasterDetailTable<
  M = Record<string, unknown>,
  D = Record<string, unknown>,
>({
  columns,
  data,
  rowKey,
  title,
  showCount = true,
  showSearch = false,
  searchPlaceholder = '搜尋',
  onSearch,
  topBarTabs,
  activeTab,
  onTabChange,
  topBarActions,
  selectedCount,
  detailColumns,
  getDetailData,
  detailRowKey,
  detailTitle,
  getDetailPagination,
  pagination,
  striped = true,
  size = 'm',
  className,
}: MasterDetailTableProps<M, D>) {
  const [expandedKeys, setExpandedKeys] = useState<Set<string | number>>(new Set());
  const [searchValue, setSearchValue] = useState('');
  const [sortKey, setSortKey] = useState<string | undefined>();
  const [sortDirection, setSortDirection] = useState<SortDirection>('none');

  const toggleRow = (key: string | number) => {
    setExpandedKeys((prev) => {
      const next = new Set(prev);
      next.has(key) ? next.delete(key) : next.add(key);
      return next;
    });
  };

  const handleSearch = (value: string) => {
    setSearchValue(value);
    onSearch?.(value);
  };

  const handleSort = (key: string) => {
    let next: SortDirection = 'asc';
    if (sortKey === key) {
      next = sortDirection === 'asc' ? 'desc' : sortDirection === 'desc' ? 'none' : 'asc';
    }
    setSortKey(next === 'none' ? undefined : key);
    setSortDirection(next);
  };

  const sortedData = useMemo(() => {
    if (!sortKey || sortDirection === 'none') return data;
    return [...data].sort((a, b) => {
      const va = String((a as Record<string, unknown>)[sortKey] ?? '');
      const vb = String((b as Record<string, unknown>)[sortKey] ?? '');
      const cmp = va.localeCompare(vb, undefined, { numeric: true, sensitivity: 'base' });
      return sortDirection === 'asc' ? cmp : -cmp;
    });
  }, [data, sortKey, sortDirection]);

  const sortIcon = (colKey: string) => {
    if (sortKey !== colKey) return 'unfold_more';
    return sortDirection === 'asc' ? 'arrow_upward' : sortDirection === 'desc' ? 'arrow_downward' : 'unfold_more';
  };

  // ── Outer table sticky meta ─────────────────────────────────────────────────
  const MDT_EXPAND_WIDTH = 40;

  const mdtStickyMeta = useMemo((): Map<string, MdtStickyInfo> => {
    const map = new Map<string, MdtStickyInfo>();
    const leftCols = columns.filter(c => c.frozen === 'left');
    const rightCols = columns.filter(c => c.frozen === 'right');
    // Only activate if the consumer explicitly uses frozen columns
    if (leftCols.length === 0 && rightCols.length === 0) return map;

    // Left-frozen user columns start after the expand column
    let leftAcc = MDT_EXPAND_WIDTH;
    leftCols.forEach(col => {
      map.set(col.key, { left: leftAcc });
      leftAcc += mdtToPixels(col.width);
    });

    // Right-frozen user columns
    let rightAcc = 0;
    [...rightCols].reverse().forEach(col => {
      map.set(col.key, { right: rightAcc });
      rightAcc += mdtToPixels(col.width);
    });

    // Divider markers
    if (leftCols.length > 0) {
      const key = leftCols[leftCols.length - 1].key;
      map.set(key, { ...map.get(key)!, lastLeft: true });
    }
    if (rightCols.length > 0) {
      map.set(rightCols[0].key, { ...map.get(rightCols[0].key)!, firstRight: true });
    }

    return map;
  }, [columns]);

  // Expand column prepended to master columns
  const allColumns = useMemo<ColumnDef<M>[]>(() => {
    return [
      {
        key: '__expand__',
        header: '',
        width: 40,
        render: (_val, row, rowIndex) => {
          const key = rowKey(row, rowIndex);
          const isExpanded = expandedKeys.has(key);
          return (
            <button
              className={[
                'fas-mdt__expand-btn',
                isExpanded && 'fas-mdt__expand-btn--open',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={(e) => {
                e.stopPropagation();
                toggleRow(key);
              }}
              aria-label={isExpanded ? '收折' : '展開'}
              onMouseDown={(e) => e.preventDefault()}
            >
              <span className="material-symbols-outlined" aria-hidden>
                expand_more
              </span>
            </button>
          );
        },
      },
      ...columns,
    ];
  }, [columns, expandedKeys, rowKey]);

  const resolveDetailTitle = (row: M): string => {
    if (!detailTitle) return '子表格';
    if (typeof detailTitle === 'function') return detailTitle(row);
    return detailTitle;
  };

  return (
    <div className={['fas-mdt', `fas-mdt--size-${size}`, className].filter(Boolean).join(' ')}>
      {/* ── Master Top Bar ─────────────────────────────────────────────────── */}
      <DataTableTopBar
        title={title}
        tabs={topBarTabs}
        activeTab={activeTab}
        onTabChange={onTabChange}
        total={showCount ? data.length : undefined}
        selectedCount={selectedCount}
        actions={topBarActions}
        showSearch={showSearch}
        searchPlaceholder={searchPlaceholder}
        onSearch={handleSearch}
      />

      {/* ── Master Table ───────────────────────────────────────────────────── */}
      <div className="fas-mdt__scroll">
        <table className="fas-mdt__table">
          <thead>
            <tr>
              {allColumns.map((col) => (
                <th
                  key={col.key}
                  className={[
                    'fas-datatable__th',
                    col.sortable && 'fas-datatable__th--sortable',
                    col.align && `fas-datatable__th--${col.align}`,
                    col.key === '__expand__' && 'fas-mdt__th--expand',
                    getMdtStickyClasses(mdtStickyMeta.get(col.key)),
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  style={{ width: col.width, ...getMdtStickyStyle(mdtStickyMeta.get(col.key), true) }}
                  onClick={col.sortable ? () => handleSort(col.key) : undefined}
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
            {sortedData.length === 0 ? (
              <tr>
                <td
                  colSpan={allColumns.length}
                  className="fas-datatable__td fas-datatable__td--empty"
                >
                  目前沒有資料
                </td>
              </tr>
            ) : (
              sortedData.map((row, rowIndex) => {
                const key = rowKey(row, rowIndex);
                const isExpanded = expandedKeys.has(key);
                const detailData = isExpanded ? getDetailData(row) : [];
                const detailPagination = getDetailPagination?.(row);

                return (
                  <React.Fragment key={key}>
                    {/* Master row */}
                    <tr
                      className={[
                        'fas-datatable__row',
                        'fas-mdt__master-row',
                        isExpanded && 'fas-mdt__master-row--expanded',
                        striped && rowIndex % 2 === 1 && 'fas-mdt__master-row--striped',
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      onClick={() => toggleRow(key)}
                    >
                      {allColumns.map((col) => {
                        const rawVal = (row as Record<string, unknown>)[col.key];
                        const cellTitle = col.render || col.key === '__expand__' ? undefined : String(rawVal ?? '');
                        return (
                          <td
                            key={col.key}
                            className={[
                              'fas-datatable__td',
                              col.align && `fas-datatable__td--${col.align}`,
                              col.key === '__expand__' && 'fas-mdt__td--expand',
                              getMdtStickyClasses(mdtStickyMeta.get(col.key)),
                            ]
                              .filter(Boolean)
                              .join(' ')}
                            style={getMdtStickyStyle(mdtStickyMeta.get(col.key), false)}
                            title={cellTitle}
                          >
                            {col.key === '__expand__' ? (
                              col.render!(rawVal, row, rowIndex)
                            ) : (
                              <div className="fas-datatable__cell-content">
                                {col.render ? col.render(rawVal, row, rowIndex) : cellTitle}
                              </div>
                            )}
                          </td>
                        );
                      })}
                    </tr>

                    {/* Detail row */}
                    {isExpanded && (
                      <tr className="fas-mdt__detail-row">
                        <td
                          colSpan={allColumns.length}
                          className="fas-mdt__detail-cell"
                          style={{
                            background:
                              striped && rowIndex % 2 === 1
                                ? 'var(--table-striped)'
                                : 'var(--bg-surface)',
                          }}
                        >
                          <div className="fas-mdt__detail-area">
                            {/* Detail Top Bar */}
                            <div className="fas-mdt__detail-topbar">
                              <span className="fas-mdt__detail-title">
                                {resolveDetailTitle(row)}
                              </span>
                              <span className="fas-mdt__count">
                                筆數 {detailData.length}
                              </span>
                            </div>
                            {/* Detail Table */}
                            <DataTable
                              columns={detailColumns}
                              data={detailData}
                              rowKey={detailRowKey}
                              striped={striped}
                              size={size}
                              pagination={detailPagination}
                              className="fas-mdt__detail-table"
                            />
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })
            )}
          </tbody>
        </table>
      </div>

      {/* ── Master Pagination ─────────────────────────────────────────────── */}
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
                onChange={(n) => pagination.onPageSizeChange?.(n)}
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
    </div>
  );
}

export default MasterDetailTable;
