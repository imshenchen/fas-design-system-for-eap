/**
 * MasterDetailTable — FAS Design Kit
 * Master table with expandable rows that reveal a nested detail table.
 */
import React, { useState, useMemo } from 'react';
import { DataTable } from './DataTable';
import type { ColumnDef, PaginationConfig, SortDirection } from './DataTable';

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
  detailColumns,
  getDetailData,
  detailRowKey,
  detailTitle,
  getDetailPagination,
  pagination,
  striped = true,
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
            >
              <span className="material-symbols-outlined" aria-hidden>
                chevron_right
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
    <div className={['fas-mdt', className].filter(Boolean).join(' ')}>
      {/* ── Master Top Bar ─────────────────────────────────────────────────── */}
      <div className="fas-mdt__topbar">
        <div className="fas-mdt__topbar-left">
          {title && <span className="fas-mdt__title">{title}</span>}
          {showCount && (
            <span className="fas-mdt__count">
              筆數 {data.length}
            </span>
          )}
        </div>
        <div className="fas-mdt__topbar-right">
          {showSearch && (
            <div className="fas-mdt__search">
              <span className="material-symbols-outlined fas-mdt__search-icon" aria-hidden>
                search
              </span>
              <input
                className="fas-mdt__search-input"
                type="text"
                placeholder={searchPlaceholder}
                value={searchValue}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          )}
        </div>
      </div>

      {/* ── Master Table ───────────────────────────────────────────────────── */}
      <div className="fas-mdt__scroll">
        <table className={['fas-mdt__table', striped && 'fas-datatable--striped'].filter(Boolean).join(' ')}>
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
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  style={{ width: col.width }}
                  onClick={col.sortable ? () => handleSort(col.key) : undefined}
                >
                  {col.header}
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
                      ]
                        .filter(Boolean)
                        .join(' ')}
                      onClick={() => toggleRow(key)}
                    >
                      {allColumns.map((col) => (
                        <td
                          key={col.key}
                          className={[
                            'fas-datatable__td',
                            col.align && `fas-datatable__td--${col.align}`,
                            col.key === '__expand__' && 'fas-mdt__td--expand',
                          ]
                            .filter(Boolean)
                            .join(' ')}
                        >
                          {col.render
                            ? col.render(
                                (row as Record<string, unknown>)[col.key],
                                row,
                                rowIndex,
                              )
                            : String(
                                (row as Record<string, unknown>)[col.key] ?? '',
                              )}
                        </td>
                      ))}
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
              <select
                className="fas-datatable__pagination-select"
                value={pagination.pageSize}
                onChange={(e) => pagination.onPageSizeChange?.(Number(e.target.value))}
              >
                {(pagination.pageSizeOptions ?? [10, 20, 50]).map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>
            <div className="fas-datatable__page-nav">
              <button onClick={() => pagination.onPageChange(1)} disabled={isFirst} className="fas-datatable__page-btn">
                <span className="material-symbols-outlined" aria-hidden>first_page</span>
              </button>
              <button onClick={() => pagination.onPageChange(pagination.page - 1)} disabled={isFirst} className="fas-datatable__page-btn">
                <span className="material-symbols-outlined" aria-hidden>chevron_left</span>
              </button>
              <select
                className="fas-datatable__pagination-select fas-datatable__pagination-select--page"
                value={pagination.page}
                onChange={(e) => pagination.onPageChange(Number(e.target.value))}
              >
                {Array.from({ length: totalPages }, (_, i) => (
                  <option key={i + 1} value={i + 1}>{i + 1}</option>
                ))}
              </select>
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
