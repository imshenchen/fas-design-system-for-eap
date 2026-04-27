/**
 * SideMenu — FAS Design Kit
 * @see components.md § Layout
 *
 * 固定在左側的導覽選單。展開 280px，收折 80px (icon only)。
 *
 * 三層結構：
 *   群組 (Group)   → 藍色標題；可點擊展開／收合，整個 SideMenu 一次只展開一個群組
 *   模組 (Module)  → L1 帶 icon 的可展開項目（群組下的內容）
 *   功能 (Feature) → L2 葉節點，點擊後右側畫面切換
 */
import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import './SideMenu.css';

export interface SideNavItem {
  /** 唯一識別鍵，用於 activeKey 比對 */
  key: string;
  /** 顯示標籤 */
  label: string;
  /** Material Symbol icon name（模組層使用） */
  icon?: string;
  /** 子選單項目 */
  children?: SideNavItem[];
  /** 群組標題（藍色標題，可點擊展開／收合） */
  isSection?: boolean;
  /** 模組層預設是否展開（有子項目時有效） */
  defaultOpen?: boolean;
  /** 群組預設是否展開；未指定時，內含 activeKey 的群組會自動展開，否則展開第一個群組 */
  defaultExpanded?: boolean;
  /** href（可選，用於路由跳轉） */
  href?: string;
}

export interface SideMenuProps {
  /** 選單項目結構 */
  items: SideNavItem[];
  /** 目前選中的 item key */
  activeKey?: string;
  /** 點擊 item 的回呼 */
  onItemClick?: (key: string, item: SideNavItem) => void;
  /** 收折模式（只顯示 icon，80px 寬） */
  collapsed?: boolean;
  /** 顯示在底部的版本號文字 */
  version?: string;
  className?: string;
  style?: React.CSSProperties;
}

/** 模組層：L1 可展開項目（含功能子項目管理） */
const ModuleItem: React.FC<{
  item: SideNavItem;
  activeKey?: string;
  onItemClick?: SideMenuProps['onItemClick'];
  collapsed?: boolean;
  onFlyoutEnter?: (key: string, anchor: HTMLElement) => void;
  onFlyoutLeave?: () => void;
}> = ({ item, activeKey, onItemClick, collapsed, onFlyoutEnter, onFlyoutLeave }) => {
  // 預設展開：明確的 defaultOpen 優先，其次自動展開含 activeKey 的模組。
  // 之後完全由使用者控制（點擊 chevron 可任意展開／收合）。
  const [open, setOpen] = useState(
    () => item.defaultOpen ?? (item.children?.some((c) => c.key === activeKey) ?? false),
  );
  const hasActiveChild = item.children?.some((c) => c.key === activeKey);
  const isOpen = open;
  const flyoutEnabled = collapsed && (item.children?.length ?? 0) > 0;

  return (
    <div className="fas-sidemenu__group">
      <button
        className={[
          'fas-sidemenu__item',
          'fas-sidemenu__item--l1',
          hasActiveChild ? 'fas-sidemenu__item--parent-active' : '',
        ]
          .filter(Boolean)
          .join(' ')}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={isOpen}
        onMouseEnter={
          flyoutEnabled
            ? (e) => onFlyoutEnter?.(item.key, e.currentTarget)
            : undefined
        }
        onMouseLeave={flyoutEnabled ? onFlyoutLeave : undefined}
      >
        {item.icon && (
          <span className="material-symbols-outlined fas-sidemenu__icon" aria-hidden>
            {item.icon}
          </span>
        )}
        {!collapsed && (
          <>
            <span className="fas-sidemenu__label">{item.label}</span>
            <span
              className={[
                'material-symbols-outlined',
                'fas-sidemenu__chevron',
                isOpen ? 'fas-sidemenu__chevron--open' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              aria-hidden
            >
              expand_more
            </span>
          </>
        )}
      </button>

      {isOpen && !collapsed && item.children && (
        <div className="fas-sidemenu__sub" role="group">
          <div className="fas-sidemenu__sub-guide" aria-hidden />
          {item.children.map((child) => (
            <button
              key={child.key}
              className={[
                'fas-sidemenu__item',
                'fas-sidemenu__item--l2',
                activeKey === child.key ? 'fas-sidemenu__item--active' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => onItemClick?.(child.key, child)}
            >
              <span className="fas-sidemenu__label">{child.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

/** 模組層：L1 葉節點（無子項目） */
const LeafItem: React.FC<{
  item: SideNavItem;
  activeKey?: string;
  onItemClick?: SideMenuProps['onItemClick'];
  collapsed?: boolean;
}> = ({ item, activeKey, onItemClick, collapsed }) => {
  const isActive = activeKey === item.key;

  return (
    <button
      className={[
        'fas-sidemenu__item',
        'fas-sidemenu__item--l1',
        isActive ? 'fas-sidemenu__item--active' : '',
      ]
        .filter(Boolean)
        .join(' ')}
      onClick={() => onItemClick?.(item.key, item)}
      title={collapsed ? item.label : undefined}
    >
      {item.icon && (
        <span className="material-symbols-outlined fas-sidemenu__icon" aria-hidden>
          {item.icon}
        </span>
      )}
      {!collapsed && <span className="fas-sidemenu__label">{item.label}</span>}
    </button>
  );
};

/** 渲染單一模組層項目（有 children 走 ModuleItem，無 children 走 LeafItem） */
const renderModule = (
  item: SideNavItem,
  activeKey: string | undefined,
  onItemClick: SideMenuProps['onItemClick'],
  collapsed: boolean | undefined,
  onFlyoutEnter: (key: string, anchor: HTMLElement) => void,
  onFlyoutLeave: () => void,
) =>
  item.children && item.children.length > 0 ? (
    <ModuleItem
      key={item.key}
      item={item}
      activeKey={activeKey}
      onItemClick={onItemClick}
      collapsed={collapsed}
      onFlyoutEnter={onFlyoutEnter}
      onFlyoutLeave={onFlyoutLeave}
    />
  ) : (
    <LeafItem
      key={item.key}
      item={item}
      activeKey={activeKey}
      onItemClick={onItemClick}
      collapsed={collapsed}
    />
  );

/** 從 items 中尋找指定 key 的模組（用於 flyout 取資料） */
const findModuleByKey = (
  items: SideNavItem[],
  key: string,
): SideNavItem | undefined => {
  for (const it of items) {
    if (it.key === key) return it;
    if (it.children) {
      for (const c of it.children) {
        if (c.key === key) return c;
      }
    }
  }
  return undefined;
};

/** 找出 activeKey 所屬的群組 key（用來決定預設展開哪個群組） */
const findGroupKeyForActive = (
  items: SideNavItem[],
  activeKey?: string,
): string | undefined => {
  if (!activeKey) return undefined;
  for (const it of items) {
    if (!it.isSection || !it.children) continue;
    for (const child of it.children) {
      if (child.key === activeKey) return it.key;
      if (child.children?.some((c) => c.key === activeKey)) return it.key;
    }
  }
  return undefined;
};

export const SideMenu: React.FC<SideMenuProps> = ({
  items,
  activeKey,
  onItemClick,
  collapsed = false,
  version,
  className,
  style,
}) => {
  // 群組層：一次只展開一個。優先順序：defaultExpanded > 含 activeKey 的群組 > 第一個群組
  const groups = items.filter((i) => i.isSection);
  const initialGroupKey =
    groups.find((g) => g.defaultExpanded)?.key ??
    findGroupKeyForActive(items, activeKey) ??
    groups[0]?.key;

  const [openGroupKey, setOpenGroupKey] = useState<string | undefined>(initialGroupKey);

  // 收折模式下，hover 模組會在右側浮出 flyout 顯示模組標題＋功能列表
  const [flyout, setFlyout] = useState<{ key: string; top: number; left: number } | null>(null);
  const closeTimerRef = useRef<number | null>(null);

  const cancelClose = () => {
    if (closeTimerRef.current !== null) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };
  const handleFlyoutEnter = (key: string, anchor: HTMLElement) => {
    cancelClose();
    const rect = anchor.getBoundingClientRect();
    setFlyout({ key, top: rect.top - 4, left: rect.right });
  };
  const handleFlyoutLeave = () => {
    cancelClose();
    closeTimerRef.current = window.setTimeout(() => setFlyout(null), 120);
  };

  const flyoutItem = flyout ? findModuleByKey(items, flyout.key) : undefined;

  return (
    <nav
      className={[
        'fas-sidemenu',
        collapsed ? 'fas-sidemenu--collapsed' : '',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
      aria-label="Side navigation"
    >
      {/* ── Scrollable menu area ── */}
      <div className="fas-sidemenu__scroll">
        {items.map((item) => {
          if (item.isSection) {
            // 收折模式下沒有群組標題可點，直接平鋪所有模組
            if (collapsed) {
              return (
                <div key={item.key} className="fas-sidemenu__section">
                  {item.children?.map((child) =>
                    renderModule(child, activeKey, onItemClick, collapsed, handleFlyoutEnter, handleFlyoutLeave),
                  )}
                </div>
              );
            }

            const isGroupOpen = openGroupKey === item.key;
            return (
              <div key={item.key} className="fas-sidemenu__section">
                <button
                  type="button"
                  className={[
                    'fas-sidemenu__section-header',
                    isGroupOpen ? 'fas-sidemenu__section-header--open' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  aria-expanded={isGroupOpen}
                  onClick={() =>
                    setOpenGroupKey((prev) => (prev === item.key ? undefined : item.key))
                  }
                >
                  <span className="fas-sidemenu__section-label">{item.label}</span>
                </button>
                {isGroupOpen &&
                  item.children?.map((child) =>
                    renderModule(child, activeKey, onItemClick, collapsed, handleFlyoutEnter, handleFlyoutLeave),
                  )}
              </div>
            );
          }

          return renderModule(item, activeKey, onItemClick, collapsed, handleFlyoutEnter, handleFlyoutLeave);
        })}
      </div>

      {/* ── Pinned footer ── */}
      {version && (
        <div className="fas-sidemenu__footer">
          <div className="fas-sidemenu__footer-divider" />
          <button
            className="fas-sidemenu__item fas-sidemenu__item--l1 fas-sidemenu__item--version"
            title={collapsed ? version : undefined}
          >
            <span className="material-symbols-outlined fas-sidemenu__icon" aria-hidden>
              deployed_code
            </span>
            {!collapsed && <span className="fas-sidemenu__label">{version}</span>}
          </button>
        </div>
      )}

      {/* ── Hover flyout (僅收折模式) ── */}
      {collapsed &&
        flyout &&
        flyoutItem &&
        flyoutItem.children &&
        typeof document !== 'undefined' &&
        createPortal(
          <div
            className="fas-sidemenu__flyout"
            style={{ top: flyout.top, left: flyout.left }}
            onMouseEnter={cancelClose}
            onMouseLeave={handleFlyoutLeave}
            role="menu"
          >
            <div className="fas-sidemenu__flyout-header">
              {flyoutItem.icon && (
                <span className="material-symbols-outlined fas-sidemenu__flyout-icon" aria-hidden>
                  {flyoutItem.icon}
                </span>
              )}
              <span className="fas-sidemenu__flyout-title">{flyoutItem.label}</span>
            </div>
            <div className="fas-sidemenu__flyout-children">
              <div className="fas-sidemenu__flyout-guide" aria-hidden />
              {flyoutItem.children.map((child) => (
                <button
                  key={child.key}
                  className={[
                    'fas-sidemenu__flyout-item',
                    activeKey === child.key ? 'fas-sidemenu__flyout-item--active' : '',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => {
                    onItemClick?.(child.key, child);
                    setFlyout(null);
                  }}
                  role="menuitem"
                >
                  {child.label}
                </button>
              ))}
            </div>
          </div>,
          document.body,
        )}
    </nav>
  );
};
