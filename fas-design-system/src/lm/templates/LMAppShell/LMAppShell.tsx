/**
 * LMAppShell — LM Tier (Template)
 *
 * 與 core `AppShell` 同一角色（頁面最外層），但有兩個 LM 專案差異：
 *   1. 無 FeatureTitle —— 改放 `LMSwitchPanel` 在主內容頂部，
 *      與 NavigationBar / SideMenu 之間保留 padding（不貼齊）
 *   2. SideMenu 收折時固定為 `'hidden'`（width 0 完全消失），
 *      不保留 narrow icon-only 形態
 *
 * 結構：
 *   ┌──────────────────────────────────────────────────────┐
 *   │ NavigationBar                                        │  60px
 *   ├──────────┬───────────────────────────────────────────┤
 *   │ SideMenu │  ↕padding                                 │
 *   │ 280px /  │  ┌─────────────────────────────────────┐  │
 *   │ hidden   │  │ LMSwitchPanel                       │  │
 *   │          │  └─────────────────────────────────────┘  │
 *   │          │  ↕gap                                     │
 *   │          │  Main Content (${children})              │
 *   └──────────┴───────────────────────────────────────────┘
 */
import React, { useState } from 'react';
import { NavigationBar } from '../../../components/NavigationBar/NavigationBar';
import { SideMenu } from '../../../components/SideMenu/SideMenu';
import type { SideNavItem, SideMenuProps } from '../../../components/SideMenu/SideMenu';
import { LMSwitchPanel } from '../../components/LMSwitchPanel/LMSwitchPanel';
import type {
  LMSwitchPanelItem,
  LMSwitchPanelProps,
} from '../../components/LMSwitchPanel/LMSwitchPanel';

/** 從 SideMenu 三層結構（群組 → 模組 → 功能）裡找到指定 key 的 label */
function findMenuLabel(items: SideNavItem[] | undefined, key: string): string | undefined {
  if (!items) return undefined;
  for (const item of items) {
    if (item.key === key) return item.label;
    const found = findMenuLabel(item.children, key);
    if (found) return found;
  }
  return undefined;
}

export interface LMAppShellProps {
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

  // ── LMSwitchPanel（取代 FeatureTitle） ───────────────────
  /** Switch panel 項目 */
  switchItems: LMSwitchPanelItem[];
  /** 目前選取的 scope key（受控） */
  switchValue: string;
  /** 切換 scope 時的 callback */
  onSwitchChange: LMSwitchPanelProps['onChange'];
  /**
   * SwitchPanel 最左側的 FeatureTitle —— 當前功能名稱。
   * 預設自動從 `menuItems` 中尋找 `activeKey` 對應的 label；
   * 傳此 prop 可手動覆寫（e.g., 做 i18n、加自訂層級）。
   */
  featureTitle?: React.ReactNode;

  // ── Main Content ─────────────────────────────────────────
  /** 主內容（功能畫面） */
  children?: React.ReactNode;
  /**
   * LMSwitchPanel 外距（與 NavBar / SideMenu 之間的留白）。預設 16px。
   * 同時套用於 panel 的 top / left / right。
   */
  switchPadding?: number | string;
  /**
   * 真正功能 content 範圍的 padding（圍繞 children）。預設 32px。
   * 同時套用於 left / right / bottom；top 由 `switchGap` 控制。
   */
  contentPadding?: number | string;
  /**
   * LMSwitchPanel 與 children content 之間的垂直間距。
   * 預設等於 `switchPadding`（兩者垂直留白對稱）。
   */
  switchGap?: number | string;
  /** 主內容區背景，預設沿用 css token `var(--bg-surface-dim)` */
  contentBackground?: string;

  /**
   * 底部 footer slot（通常傳 `<LMFooter />`，但可放任意 ReactNode）。
   *
   * 行為：
   *  - **未傳 / null** → 不渲染、不佔空間
   *  - **有傳** → 貼齊主內容區左 / 右 / 底邊；
   *    SideMenu 收合時自動跟著變寬（footer 是 Main column 的最後一個 flex item）；
   *    content-region 變成唯一 scroll 容器，footer 永遠可見
   *
   * Footer 的 button 行為與資料狀態由 page 控制；shell 只負責放置位置。
   */
  footer?: React.ReactNode;

  className?: string;
  style?: React.CSSProperties;
}

export const LMAppShell: React.FC<LMAppShellProps> = ({
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
  // Switch panel
  switchItems,
  switchValue,
  onSwitchChange,
  featureTitle,
  // Content
  children,
  switchPadding = 16,
  contentPadding = 32,
  switchGap,
  contentBackground,
  footer,
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

  const toCss = (v: number | string) => (typeof v === 'number' ? `${v}px` : v);
  const switchPad   = toCss(switchPadding);
  const contentPad  = toCss(contentPadding);
  const gap         = toCss(switchGap ?? switchPadding);

  return (
    <div
      className={['lm-app-shell', className].filter(Boolean).join(' ')}
      style={{
        display:        'flex',
        flexDirection:  'column',
        height:         '100vh',
        width:          '100%',
        minWidth:       0,
        background:     'var(--bg-surface)',
        ...style,
      }}
    >
      <NavigationBar
        appName={appName}
        logo={logo}
        userInitial={userInitial}
        onUserClick={onUserClick}
        actions={navActions}
        onMenuToggle={handleToggle}
      />

      <div
        className="lm-app-shell__body"
        style={{
          display:   'flex',
          flex:      1,
          minHeight: 0,
          // 不可設 overflow:hidden —— 會剪掉子元件的 hover tooltip
          // 內部捲動由 __main → __content 的 overflow-y: auto 處理
        }}
      >
        <SideMenu
          items={menuItems}
          activeKey={activeKey}
          onItemClick={onMenuItemClick}
          collapsed={isCollapsed}
          collapsedMode="hidden"
          version={version}
        />

        <div
          className="lm-app-shell__main"
          style={{
            flex:           1,
            minWidth:       0,
            display:        'flex',
            flexDirection:  'column',
            // 不可設 overflow:hidden —— 會剪掉 LMScopeTile / 其他子元件的 hover tooltip
            // content-region 自身有 overflow-y: auto 處理長內容捲動
            minHeight:      0,
            background:     contentBackground ?? 'var(--bg-surface-dim)',
          }}
        >
          {/* Switch panel region — 窄外距，永遠貼頂 */}
          <div
            className="lm-app-shell__switch-region"
            style={{
              paddingTop:    switchPad,
              paddingLeft:   switchPad,
              paddingRight:  switchPad,
              boxSizing:     'border-box',
              flexShrink:    0,
            }}
          >
            <LMSwitchPanel
              items={switchItems}
              value={switchValue}
              onChange={onSwitchChange}
              featureTitle={
                featureTitle ??
                (activeKey ? findMenuLabel(menuItems, activeKey) : undefined)
              }
            />
          </div>

          {/* True content region — 主功能畫面，唯一滾動容器 */}
          <div
            className="lm-app-shell__content"
            style={{
              flex:          1,
              minWidth:      0,
              minHeight:     0,
              paddingTop:    gap,
              paddingLeft:   contentPad,
              paddingRight:  contentPad,
              paddingBottom: contentPad,
              boxSizing:     'border-box',
              overflowY:     'auto',
            }}
          >
            {children}
          </div>

          {/* Footer slot — 貼齊左 / 右 / 底邊，只在有傳時 render */}
          {footer && (
            <div
              className="lm-app-shell__footer"
              style={{
                flexShrink: 0,
                minWidth:   0,
              }}
            >
              {footer}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

LMAppShell.displayName = 'LMAppShell';

export default LMAppShell;
