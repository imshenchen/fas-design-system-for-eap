/**
 * AppShell — FAS Design Kit (Template)
 *
 * 頁面最外層的版面樣板，必須包含三大區塊：
 *   1. NavigationBar — 頁面頂端的全寬導覽列（60px、sticky、z-100）
 *   2. SideMenu     — 左側永久導覽選單（展開 280px / 收折 80px）
 *   3. FeatureTitle — NavBar 下方的頁面標題列（含麵包屑與右側 CTA）
 *
 * 結構：
 *   ┌──────────────────────────────────────────────────────┐
 *   │ NavigationBar                                        │  60px
 *   ├──────────┬───────────────────────────────────────────┤
 *   │ SideMenu │ FeatureTitle                              │  56px (sticky)
 *   │          ├───────────────────────────────────────────┤
 *   │  280px   │ Main Content                              │  flex:1
 *   │  / 80px  │  ${children}                              │
 *   │          │                                           │
 *   └──────────┴───────────────────────────────────────────┘
 *
 * NavigationBar 的漢堡按鈕已內建綁定 SideMenu 收折狀態（由 AppShell 管理）。
 * 使用者可透過 `collapsed` / `onCollapsedChange` 改為 controlled 模式。
 */
import React, { useState } from 'react';
import { NavigationBar } from '../../components/NavigationBar/NavigationBar';
import { SideMenu } from '../../components/SideMenu/SideMenu';
import type { SideNavItem, SideMenuProps } from '../../components/SideMenu/SideMenu';
import { FeatureTitle } from '../../components/FeatureTitle/FeatureTitle';
import type { FeatureTitleItem } from '../../components/FeatureTitle/FeatureTitle';
import './AppShell.css';

export interface AppShellProps {
  // ── NavigationBar ────────────────────────────────────────
  /** App 名稱，顯示於 Logo 右側 */
  appName?: string;
  /** 自訂 Logo */
  logo?: React.ReactNode;
  /** Avatar 顯示文字（通常為使用者姓名首字母） */
  userInitial?: string;
  /** 點擊 Avatar 的 callback */
  onUserClick?: () => void;
  /** NavigationBar 右側 Avatar 左方的自訂操作區 */
  navActions?: React.ReactNode;

  // ── SideMenu ─────────────────────────────────────────────
  /** SideMenu 項目結構（群組／模組／功能三層） */
  menuItems: SideNavItem[];
  /** 目前選中的 menu item key */
  activeKey?: string;
  /** 點擊 menu item 的 callback */
  onMenuItemClick?: SideMenuProps['onItemClick'];
  /** SideMenu 底部顯示的版本字串 */
  version?: string;
  /** 受控收折狀態；若未傳則由內部管理（搭配 NavBar 漢堡按鈕） */
  collapsed?: boolean;
  /** 非受控模式下的初始收折狀態，預設 false */
  defaultCollapsed?: boolean;
  /** 收折狀態變更 callback（受控／非受控皆會觸發） */
  onCollapsedChange?: (next: boolean) => void;

  // ── FeatureTitle ─────────────────────────────────────────
  /** 麵包屑導航層級，最多 5 層；最後一項為當前頁面 */
  breadcrumb: FeatureTitleItem[];
  /** FeatureTitle 右側操作按鈕區（通常為 CTA 按鈕） */
  actions?: React.ReactNode;

  // ── Main Content ─────────────────────────────────────────
  /** 主內容（功能畫面） */
  children?: React.ReactNode;
  /** 主內容區 padding，預設 32px。傳 0 可由 children 自行控制留白 */
  contentPadding?: number | string;
  /** 主內容區背景，預設 `var(--bg-surface-dim)` */
  contentBackground?: string;

  className?: string;
  style?: React.CSSProperties;
}

export const AppShell: React.FC<AppShellProps> = ({
  // NavBar
  appName,
  logo,
  userInitial,
  onUserClick,
  navActions,
  // SideMenu
  menuItems,
  activeKey,
  onMenuItemClick,
  version,
  collapsed,
  defaultCollapsed = false,
  onCollapsedChange,
  // FeatureTitle
  breadcrumb,
  actions,
  // Content
  children,
  contentPadding = 32,
  contentBackground,
  className,
  style,
}) => {
  const isControlled = collapsed !== undefined;
  const [internalCollapsed, setInternalCollapsed] = useState(defaultCollapsed);
  const isCollapsed = isControlled ? collapsed! : internalCollapsed;

  const handleToggle = () => {
    const next = !isCollapsed;
    if (!isControlled) setInternalCollapsed(next);
    onCollapsedChange?.(next);
  };

  const padding =
    typeof contentPadding === 'number' ? `${contentPadding}px` : contentPadding;

  return (
    <div
      className={['fas-app-shell', className].filter(Boolean).join(' ')}
      style={style}
    >
      <NavigationBar
        appName={appName}
        logo={logo}
        userInitial={userInitial}
        onUserClick={onUserClick}
        actions={navActions}
        onMenuToggle={handleToggle}
      />

      <div className="fas-app-shell__body">
        <SideMenu
          items={menuItems}
          activeKey={activeKey}
          onItemClick={onMenuItemClick}
          collapsed={isCollapsed}
          version={version}
        />

        <div
          className="fas-app-shell__main"
          style={contentBackground ? { background: contentBackground } : undefined}
        >
          {/* topOffset=0：FeatureTitle sticky 至 main 滾動容器頂端
              （NavBar 已在外層佔位，這裡的滾動上緣即 FeatureTitle 該貼住的位置） */}
          <FeatureTitle items={breadcrumb} actions={actions} topOffset={0} />

          <div className="fas-app-shell__content" style={{ padding }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

AppShell.displayName = 'AppShell';
