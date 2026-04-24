/**
 * RepeatableList / RepeatableItem — FAS Design Kit (Template)
 *
 * 可動態新增 / 刪除的 form 項目列表。常見於 Create 頁的 Deployment port /
 * Container mount / Environment variable / ConfigMap 等「重複結構」區塊。
 *
 * 結構：
 *   ┌────┬─────────────────────┬────┐
 *   │ 1  │ …children（自由排版）│ 🗑  │
 *   ├────┼─────────────────────┼────┤
 *   │ 2  │ …                    │ 🗑  │
 *   └────┴─────────────────────┴────┘
 *   + Add xxx
 *
 * 編號由父層 RepeatableList 自動指派（從 1 起算），若需要自訂可在
 * RepeatableItem 傳 `index`。
 */
import React from 'react';
import { IconButton } from '../../components/IconButton/IconButton';
import { Button } from '../../components/Button/Button';
import { Icon } from '../../components/Icon/Icon';
import './RepeatableList.css';

// ---------------------------------------------------------------------------
// RepeatableItem
// ---------------------------------------------------------------------------

export interface RepeatableItemProps {
  /** 顯示於左側的編號。未傳時由父層 RepeatableList 自動從 1 開始編號 */
  index?: number | string;
  /** 刪除 callback；未傳則不顯示刪除按鈕（用於唯一／必要項目） */
  onRemove?: () => void;
  /** 刪除按鈕的 aria-label，預設 "Remove" */
  removeLabel?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const RepeatableItem: React.FC<RepeatableItemProps> = ({
  index,
  onRemove,
  removeLabel = 'Remove',
  children,
  className,
  style,
}) => (
  <div
    className={['fas-repeatable-item', className].filter(Boolean).join(' ')}
    style={style}
  >
    <div className="fas-repeatable-item__index" aria-hidden={index === undefined}>
      {index ?? ''}
    </div>
    <div className="fas-repeatable-item__content">{children}</div>
    <div className="fas-repeatable-item__remove">
      {onRemove && (
        <IconButton
          size="m"
          aria-label={removeLabel}
          onClick={onRemove}
          tooltip={false}
          icon={<Icon name="delete" />}
        />
      )}
    </div>
  </div>
);

RepeatableItem.displayName = 'RepeatableItem';

// ---------------------------------------------------------------------------
// RepeatableList
// ---------------------------------------------------------------------------

export interface RepeatableListProps {
  /** "Add" 按鈕文字，例如 "Add port" / "Add" / "Add endpoint" */
  addLabel: string;
  /** 點擊 Add 按鈕時呼叫，由父層決定如何 append item */
  onAdd: () => void;
  /** Add 按鈕 disabled 狀態（例如達到上限時） */
  addDisabled?: boolean;
  /** 隱藏 Add 按鈕（例如純顯示、不可新增的 read-only 模式） */
  hideAdd?: boolean;
  /** 關閉自動編號（children 為 RepeatableItem 時預設自動填入 1、2、3...） */
  disableAutoIndex?: boolean;
  /**
   * 每個項目的視覺樣式。
   *  - `inline`（預設）：項目間僅用間距分隔。通常搭配**外層 Card** 使用。
   *  - `card`：每個項目自帶 outlined 邊框 + 02dp 背景的 card 樣式，
   *    **不需要外層 Card**；空狀態時只剩 Add 按鈕，沒有卡片。
   */
  itemStyle?: 'inline' | 'card';
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const RepeatableList: React.FC<RepeatableListProps> = ({
  addLabel,
  onAdd,
  addDisabled = false,
  hideAdd = false,
  disableAutoIndex = false,
  itemStyle = 'inline',
  children,
  className,
  style,
}) => {
  // 自動為 RepeatableItem 子元件填入 index（若未手動指定）
  let autoIdx = 0;
  const items = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) return child;
    if (disableAutoIndex) return child;
    if ((child.type as React.FC)?.displayName !== 'RepeatableItem') return child;
    autoIdx += 1;
    const existing = (child.props as RepeatableItemProps).index;
    if (existing !== undefined) return child;
    return React.cloneElement(child as React.ReactElement<RepeatableItemProps>, {
      index: autoIdx,
    });
  });

  return (
    <div
      className={[
        'fas-repeatable-list',
        `fas-repeatable-list--${itemStyle}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      {items}
      {!hideAdd && (
        <div className="fas-repeatable-list__add">
          <Button
            variant="text"
            size="s"
            onClick={onAdd}
            disabled={addDisabled}
            iconLeft={<Icon name="add" />}
          >
            {addLabel}
          </Button>
        </div>
      )}
    </div>
  );
};

RepeatableList.displayName = 'RepeatableList';
