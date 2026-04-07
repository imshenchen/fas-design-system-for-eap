/**
 * SideMenu — FAS Design Kit
 * @see components.md § Layout
 *
 * 固定在左側的導覽選單。展開 280px，收折 80px (icon only)。
 * 支援兩層結構：L1 parent items（含 icon + expand/collapse）和 L2 sub-items。
 */
import React, { useState } from 'react';
import './SideMenu.css';

export interface SideNavItem {
  /** 唯一識別鍵，用於 activeKey 比對 */
  key: string;
  /** 顯示標籤 */
  label: string;
  /** Material Symbol icon name（L1 使用），section header 不需要 */
  icon?: string;
  /** 子選單項目（L2） */
  children?: SideNavItem[];
  /** 章節標題（不可點擊的分類標籤） */
  isSection?: boolean;
  /** 預設是否展開（有子項目時有效） */
  defaultOpen?: boolean;
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

/** 單一 L1 可展開項目（含子項目管理） */
const ParentItem: React.FC<{
  item: SideNavItem;
  activeKey?: string;
  onItemClick?: SideMenuProps['onItemClick'];
  collapsed?: boolean;
}> = ({ item, activeKey, onItemClick, collapsed }) => {
  const [open, setOpen] = useState(item.defaultOpen ?? false);

  const hasActiveChild = item.children?.some((c) => c.key === activeKey);
  const isOpen = open || hasActiveChild;

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

/** 單一 L1 葉節點（無子項目） */
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

export const SideMenu: React.FC<SideMenuProps> = ({
  items,
  activeKey,
  onItemClick,
  collapsed = false,
  version,
  className,
  style,
}) => (
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
          return (
            <div key={item.key} className="fas-sidemenu__section">
              {!collapsed && (
                <span className="fas-sidemenu__section-label">{item.label}</span>
              )}
              {item.children?.map((child) =>
                child.children && child.children.length > 0 ? (
                  <ParentItem
                    key={child.key}
                    item={child}
                    activeKey={activeKey}
                    onItemClick={onItemClick}
                    collapsed={collapsed}
                  />
                ) : (
                  <LeafItem
                    key={child.key}
                    item={child}
                    activeKey={activeKey}
                    onItemClick={onItemClick}
                    collapsed={collapsed}
                  />
                ),
              )}
            </div>
          );
        }

        return item.children && item.children.length > 0 ? (
          <ParentItem
            key={item.key}
            item={item}
            activeKey={activeKey}
            onItemClick={onItemClick}
            collapsed={collapsed}
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
  </nav>
);
