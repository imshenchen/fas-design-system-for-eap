/**
 * Transfer — FAS Design Kit (Template)
 *
 * 雙欄選擇器：左側「可選」、右側「已選」，使用者透過 checkbox + 中間
 * 轉移按鈕在兩側搬移項目。Material / Ant Design 慣稱 Transfer / Shuttle。
 *
 * 結構：
 *   ┌──────────────┐  ┌────┐  ┌──────────────┐
 *   │ 🔍 search    │  │  > │  │ 🔍 search    │
 *   │──────────────│  │  < │  │──────────────│
 *   │ ☐ 全部 (N)   │  └────┘  │ ☐ 全部 (M)   │
 *   │──────────────│          │──────────────│
 *   │ ☐ Item A     │          │ ☐ Item X     │
 *   │ ☐ Item B 🏷  │          │ (empty)      │
 *   │ ☐ Item C     │          │              │
 *   └──────────────┘          └──────────────┘
 *
 * 重點：
 *  - `searchable` 可分別為左右兩側開關搜尋欄
 *  - `disabled` option 仍會顯示，但無法被勾選或全選
 *  - 每個 option 可選擇性帶 `chip` 顯示額外資訊（如「未啟用同步」）
 *  - 含 select-all（受目前 search 過濾結果限制；indeterminate 自動處理）
 *  - 空狀態（沒有任何 option 或搜尋無結果）顯示插畫 + 文字
 */
import React, { useId, useMemo, useState } from 'react';
import { Checkbox } from '../../components/Checkbox/Checkbox';
import { TextField } from '../../components/TextField/TextField';
import { Button } from '../../components/Button/Button';
import { Icon } from '../../components/Icon/Icon';
import { StatusChip } from '../../components/Chip/Chip';
import type { ChipStatus } from '../../components/Chip/Chip';
import './Transfer.css';

export interface TransferOption {
  /** 唯一識別值 */
  value: string;
  /** 顯示文字 */
  label: React.ReactNode;
  /** 不可選；仍會顯示於列表，但 checkbox disabled 不受全選影響 */
  disabled?: boolean;
  /** 額外資訊 chip（顯示於 label 右側） */
  chip?: {
    label: string;
    status?: ChipStatus;
  };
}

type SearchFlag = boolean | { source?: boolean; target?: boolean };

export interface TransferProps {
  /** 全部 options（順序即顯示順序） */
  options: TransferOption[];
  /** 已選 values（右欄內容）— controlled */
  value: string[];
  /** value 變動 callback */
  onChange: (next: string[]) => void;

  // ── 搜尋 ──────────────────────────────────────────
  /**
   * 是否顯示搜尋欄。
   * - `true` / `false`（預設 `false`）：兩側統一
   * - `{ source, target }`：分別控制
   */
  searchable?: SearchFlag;
  sourceSearchPlaceholder?: string;
  targetSearchPlaceholder?: string;
  /**
   * 自訂過濾邏輯。預設以 option.label（string 部分）做大小寫不敏感包含比對。
   * 若 label 是 ReactNode，建議自行傳入 filterOption。
   */
  filterOption?: (keyword: string, option: TransferOption) => boolean;

  // ── 標題 / 計數 ─────────────────────────────────────
  /** 左欄標題前綴（會自動帶上計數），預設「全部」 */
  sourceTitle?: string;
  /** 右欄標題前綴（會自動帶上計數），預設「全部」 */
  targetTitle?: string;
  /** 是否顯示 select-all 列（預設 true） */
  showSelectAll?: boolean;

  // ── 空狀態 ──────────────────────────────────────────
  sourceEmpty?: React.ReactNode;
  targetEmpty?: React.ReactNode;

  // ── Transfer 按鈕 ───────────────────────────────────
  /** 中央 → 按鈕的文字（移到右欄），預設「加入」 */
  forwardLabel?: string;
  /** 中央 ← 按鈕的文字（移回左欄），預設「移除」 */
  backwardLabel?: string;

  // ── Layout ─────────────────────────────────────────
  /** 列表區高度（不含 search bar / select-all），預設 320 */
  listHeight?: number | string;
  className?: string;
  style?: React.CSSProperties;
}

// ─── Helpers ──────────────────────────────────────────────────────────────

const normalizeSearch = (flag: SearchFlag | undefined): { source: boolean; target: boolean } => {
  if (typeof flag === 'boolean') return { source: flag, target: flag };
  if (!flag) return { source: false, target: false };
  return { source: !!flag.source, target: !!flag.target };
};

const defaultFilter = (keyword: string, opt: TransferOption): boolean => {
  if (!keyword) return true;
  const k = keyword.toLowerCase();
  if (typeof opt.label === 'string') return opt.label.toLowerCase().includes(k);
  if (typeof opt.label === 'number') return String(opt.label).includes(k);
  return true;
};

const DefaultEmpty: React.FC<{ text: string }> = ({ text }) => (
  <div className="fas-transfer__empty">
    <div className="fas-transfer__empty-illu" aria-hidden="true">
      <Icon name="inbox" size={56} />
    </div>
    <div className="fas-transfer__empty-text">{text}</div>
  </div>
);

// ─── Pane (single side) ───────────────────────────────────────────────────

interface PaneProps {
  paneId: string;
  options: TransferOption[];                 // 全部屬於本欄的 options
  checked: Set<string>;                       // 本欄已勾選（待轉移）
  onCheckedChange: (next: Set<string>) => void;
  search: boolean;
  searchPlaceholder?: string;
  filterOption: (keyword: string, opt: TransferOption) => boolean;
  title: string;
  showSelectAll: boolean;
  empty: React.ReactNode;
  listHeight: number | string;
}

const Pane: React.FC<PaneProps> = ({
  paneId,
  options,
  checked,
  onCheckedChange,
  search,
  searchPlaceholder,
  filterOption,
  title,
  showSelectAll,
  empty,
  listHeight,
}) => {
  const [keyword, setKeyword] = useState('');

  const visible = useMemo(
    () => (keyword ? options.filter((o) => filterOption(keyword, o)) : options),
    [options, keyword, filterOption],
  );

  // 可被選取（visible + 非 disabled）
  const selectable = useMemo(() => visible.filter((o) => !o.disabled), [visible]);
  const selectableCheckedCount = selectable.reduce((n, o) => n + (checked.has(o.value) ? 1 : 0), 0);
  const allChecked = selectable.length > 0 && selectableCheckedCount === selectable.length;
  const someChecked = selectableCheckedCount > 0 && !allChecked;

  const toggleAll = (next: boolean) => {
    const newSet = new Set(checked);
    if (next) selectable.forEach((o) => newSet.add(o.value));
    else selectable.forEach((o) => newSet.delete(o.value));
    onCheckedChange(newSet);
  };

  const toggleOne = (val: string, next: boolean) => {
    const newSet = new Set(checked);
    if (next) newSet.add(val);
    else newSet.delete(val);
    onCheckedChange(newSet);
  };

  const isEmpty = options.length === 0;
  const isFilteredEmpty = !isEmpty && visible.length === 0;

  return (
    <div className="fas-transfer__pane" data-pane-id={paneId}>
      {search && (
        <div className="fas-transfer__search">
          <TextField
            size="m"
            value={keyword}
            onChange={setKeyword}
            placeholder={searchPlaceholder ?? '搜尋'}
            leadingIcon={<Icon name="search" />}
            clearable
          />
        </div>
      )}

      {showSelectAll && !isEmpty && (
        <>
          <div className="fas-transfer__select-all">
            <Checkbox
              checked={allChecked}
              indeterminate={someChecked}
              disabled={selectable.length === 0}
              onChange={toggleAll}
              label={
                <span className="fas-transfer__select-all-label">
                  {title} ({visible.length})
                </span>
              }
            />
          </div>
          <div className="fas-transfer__pane-divider" />
        </>
      )}

      <div
        className="fas-transfer__list"
        style={{ height: typeof listHeight === 'number' ? `${listHeight}px` : listHeight }}
      >
        {isEmpty || isFilteredEmpty ? (
          <div className="fas-transfer__empty-wrapper">
            {isFilteredEmpty ? <DefaultEmpty text="找不到符合的項目" /> : empty}
          </div>
        ) : (
          <ul className="fas-transfer__items" role="listbox" aria-multiselectable="true">
            {visible.map((opt) => {
              const isChecked = checked.has(opt.value);
              return (
                <li
                  key={opt.value}
                  className={[
                    'fas-transfer__item',
                    opt.disabled && 'fas-transfer__item--disabled',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  role="option"
                  aria-selected={isChecked}
                  aria-disabled={opt.disabled || undefined}
                  onClick={(e) => {
                    // Skip if the click originated inside the Checkbox (label/input
                    // already handled the toggle) — otherwise we'd double-fire.
                    if (opt.disabled) return;
                    if ((e.target as HTMLElement).closest('.fas-checkbox')) return;
                    toggleOne(opt.value, !isChecked);
                  }}
                >
                  <Checkbox
                    checked={isChecked}
                    disabled={opt.disabled}
                    onChange={(next) => toggleOne(opt.value, next)}
                  />
                  <span className="fas-transfer__item-label">{opt.label}</span>
                  {opt.chip && (
                    <StatusChip
                      size="s"
                      shape="rectangle"
                      status={opt.chip.status ?? 'idle'}
                      label={opt.chip.label}
                    />
                  )}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

// ─── Transfer ─────────────────────────────────────────────────────────────

export const Transfer: React.FC<TransferProps> = ({
  options,
  value,
  onChange,
  searchable = false,
  sourceSearchPlaceholder,
  targetSearchPlaceholder,
  filterOption = defaultFilter,
  sourceTitle = '全部',
  targetTitle = '全部',
  showSelectAll = true,
  sourceEmpty,
  targetEmpty,
  forwardLabel = '加入',
  backwardLabel = '移除',
  listHeight = 320,
  className,
  style,
}) => {
  const uid = useId();
  const search = normalizeSearch(searchable);

  const valueSet = useMemo(() => new Set(value), [value]);

  const sourceOptions = useMemo(() => options.filter((o) => !valueSet.has(o.value)), [options, valueSet]);
  const targetOptions = useMemo(() => options.filter((o) => valueSet.has(o.value)), [options, valueSet]);

  const [sourceChecked, setSourceChecked] = useState<Set<string>>(new Set());
  const [targetChecked, setTargetChecked] = useState<Set<string>>(new Set());

  // 當 options / value 變動，清除已不存在於對應欄的勾選
  React.useEffect(() => {
    setSourceChecked((prev) => {
      const next = new Set<string>();
      sourceOptions.forEach((o) => {
        if (prev.has(o.value)) next.add(o.value);
      });
      return next.size === prev.size ? prev : next;
    });
    setTargetChecked((prev) => {
      const next = new Set<string>();
      targetOptions.forEach((o) => {
        if (prev.has(o.value)) next.add(o.value);
      });
      return next.size === prev.size ? prev : next;
    });
  }, [sourceOptions, targetOptions]);

  const moveForward = () => {
    if (sourceChecked.size === 0) return;
    const additions = Array.from(sourceChecked);
    onChange([...value, ...additions]);
    setSourceChecked(new Set());
  };

  const moveBackward = () => {
    if (targetChecked.size === 0) return;
    onChange(value.filter((v) => !targetChecked.has(v)));
    setTargetChecked(new Set());
  };

  return (
    <div
      className={['fas-transfer', className].filter(Boolean).join(' ')}
      style={style}
    >
      <Pane
        paneId={`${uid}-source`}
        options={sourceOptions}
        checked={sourceChecked}
        onCheckedChange={setSourceChecked}
        search={search.source}
        searchPlaceholder={sourceSearchPlaceholder}
        filterOption={filterOption}
        title={sourceTitle}
        showSelectAll={showSelectAll}
        empty={sourceEmpty ?? <DefaultEmpty text="尚無項目" />}
        listHeight={listHeight}
      />

      <div className="fas-transfer__actions">
        <Button
          variant="outlined"
          color="secondary"
          size="s"
          disabled={sourceChecked.size === 0}
          onClick={moveForward}
          iconRight={<Icon name="navigate_next" />}
        >
          {forwardLabel}
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="s"
          disabled={targetChecked.size === 0}
          onClick={moveBackward}
          iconLeft={<Icon name="navigate_before" />}
        >
          {backwardLabel}
        </Button>
      </div>

      <Pane
        paneId={`${uid}-target`}
        options={targetOptions}
        checked={targetChecked}
        onCheckedChange={setTargetChecked}
        search={search.target}
        searchPlaceholder={targetSearchPlaceholder}
        filterOption={filterOption}
        title={targetTitle}
        showSelectAll={showSelectAll}
        empty={targetEmpty ?? <DefaultEmpty text="請加入項目" />}
        listHeight={listHeight}
      />
    </div>
  );
};

Transfer.displayName = 'Transfer';
