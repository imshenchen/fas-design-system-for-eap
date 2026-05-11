/**
 * LMAppShell — LM Tier (Template)
 *
 * 與 core `AppShell` 同一角色（頁面最外層），但有兩個 LM 專案差異：
 *   1. 由上而下三層 header：NavigationBar → LMFeatureTitle → LMSwitchPanel
 *      （core AppShell 只有 NavBar + FeatureTitle 兩層；LM 多了 scope 切換列）
 *   2. SideMenu 收折時固定為 `'hidden'`（width 0 完全消失），
 *      不保留 narrow icon-only 形態
 *
 * 結構：
 *   ┌──────────────────────────────────────────────────────┐
 *   │ NavigationBar                                        │  60px
 *   ├──────────┬───────────────────────────────────────────┤
 *   │ SideMenu │ LMFeatureTitle (breadcrumb + actions)     │  48px
 *   │ 280px /  ├───────────────────────────────────────────┤
 *   │ hidden   │ LMSwitchPanel (scope tiles)              │  ~68px
 *   │          ├───────────────────────────────────────────┤
 *   │          │ Main Content (${children})  ← scrollable │  flex:1
 *   │          ├───────────────────────────────────────────┤
 *   │          │ footer slot (optional)                    │
 *   └──────────┴───────────────────────────────────────────┘
 */
import React, { useState } from 'react';
import { NavigationBar } from '../../../components/NavigationBar/NavigationBar';
import { SideMenu } from '../../../components/SideMenu/SideMenu';
import type { SideNavItem, SideMenuProps } from '../../../components/SideMenu/SideMenu';
import { IconButton } from '../../../components/IconButton/IconButton';
import { Select } from '../../../components/Select/Select';
import type { SelectOption } from '../../../components/Select/Select';
import { LMFeatureTitle } from '../../components/LMFeatureTitle/LMFeatureTitle';
import type { LMFeatureTitleItem } from '../../components/LMFeatureTitle/LMFeatureTitle';
import { LMSwitchPanel } from '../../components/LMSwitchPanel/LMSwitchPanel';
import type {
  LMSwitchPanelItem,
  LMSwitchPanelProps,
} from '../../components/LMSwitchPanel/LMSwitchPanel';

/**
 * 從 SideMenu 樹找出 `activeKey` 的祖先路徑（含 activeKey 自己）。
 * 用於自動推導 breadcrumb：忽略 `isSection` 群組（純導覽容器，不是「頁面」）。
 */
function findMenuPath(
  items: SideNavItem[] | undefined,
  key: string,
  path: SideNavItem[] = [],
): SideNavItem[] | undefined {
  if (!items) return undefined;
  for (const item of items) {
    const next = [...path, item];
    if (item.key === key) return next;
    if (item.children) {
      const found = findMenuPath(item.children, key, next);
      if (found) return found;
    }
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
  /** NavigationBar 右側自訂操作區（顯示在內建語系切換按鈕左側） */
  navActions?: React.ReactNode;
  /**
   * NavBar 產線下拉選單的選項。傳入後 NavBar 右側會顯示 Select；
   * 切換時呼叫 `onLineChange`。通常與下方 LMSwitchPanel 的「產線」tile 連動
   * （由 page 自行管理：當 line 切換時更新 `switchItems`）。
   */
  lineOptions?: SelectOption[];
  /** 目前選取的產線 value（受控） */
  lineValue?: string;
  /** 產線切換 callback */
  onLineChange?: (value: string) => void;
  /** 產線下拉選單的 placeholder，預設「選擇產線」 */
  linePlaceholder?: string;
  /** 點擊語系切換按鈕的 callback；未傳則 button 仍渲染但無動作（保留 hover tooltip） */
  onLanguageClick?: () => void;

  // ── SideMenu ─────────────────────────────────────────────
  /** SideMenu 項目結構（群組／模組／功能三層） */
  menuItems: SideNavItem[];
  /** 目前選中的 menu item key */
  activeKey?: string;
  /** 點擊 menu item 的 callback */
  onMenuItemClick?: SideMenuProps['onItemClick'];
  /** SideMenu 底部顯示的版本字串 */
  version?: string;
  /**
   * 版本號右側 action slot —— 通常傳 `<LMMobileInstallButton ... />`
   * 提供 QR Code 安裝引導。SideMenu 收折時自動隱藏。
   */
  versionAction?: React.ReactNode;
  /** 受控收折狀態；若未傳則由內部管理（搭配 NavBar 漢堡按鈕） */
  collapsed?: boolean;
  /** 非受控模式下的初始收折狀態，預設 false */
  defaultCollapsed?: boolean;
  /** 收折狀態變更 callback（受控／非受控皆會觸發） */
  onCollapsedChange?: (next: boolean) => void;

  // ── LMFeatureTitle ───────────────────────────────────────
  /**
   * 麵包屑導航層級，最多 5 層；最後一項為當前頁面。
   *
   * 未傳時自動依 `menuItems` + `activeKey` 推導路徑（忽略 `isSection` 群組），
   * 並隨 SideMenu 切換而更新。需要客製化（例如多加層級、跨樹節點）時可手動傳入覆寫。
   */
  breadcrumb?: LMFeatureTitleItem[];
  /** LMFeatureTitle 右側操作按鈕區（通常為 CTA 按鈕） */
  actions?: React.ReactNode;

  // ── LMSwitchPanel ────────────────────────────────────────
  /** Switch panel 項目 */
  switchItems: LMSwitchPanelItem[];
  /** 目前選取的 scope key（受控） */
  switchValue: string;
  /** 切換 scope 時的 callback */
  onSwitchChange: LMSwitchPanelProps['onChange'];
  /**
   * SwitchPanel 最右側 slot —— 固定在 panel 最右、不受 tile scroll 影響。
   * 通常傳 `<LMQuadrantSelector size={52} ... />`。
   */
  switchRightSlot?: React.ReactNode;

  // ── Main Content ─────────────────────────────────────────
  /** 主內容（功能畫面） */
  children?: React.ReactNode;
  /**
   * LMSwitchPanel 外距（與 NavBar / SideMenu 之間的留白）。預設 `0`
   * （flush 樣式：panel 貼齊 NavBar / SideMenu，仿 core FeatureTitle）。
   */
  switchPadding?: number | string;
  /**
   * 真正功能 content 範圍的 padding（圍繞 children）。預設 32px。
   * 同時套用於 left / right / bottom；top 由 `switchGap` 控制。
   */
  contentPadding?: number | string;
  /**
   * LMSwitchPanel 與 children content 之間的垂直間距。預設 32px
   * （對應 design system「32px Section: card vs. card / major page divisions」）。
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
  userInitial = 'K',
  onUserClick,
  navActions,
  lineOptions,
  lineValue,
  onLineChange,
  linePlaceholder = '選擇產線',
  onLanguageClick,
  // SideMenu
  menuItems,
  activeKey,
  onMenuItemClick,
  version,
  versionAction,
  collapsed,
  defaultCollapsed = false,
  onCollapsedChange,
  // FeatureTitle
  breadcrumb,
  actions,
  // Switch panel
  switchItems,
  switchValue,
  onSwitchChange,
  switchRightSlot,
  // Content
  children,
  switchPadding = 0,
  contentPadding = 32,
  switchGap = 32,
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
  const gap         = toCss(switchGap);

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
        showDefaults={false}
        onMenuToggle={handleToggle}
        actions={
          <div
            className="lm-app-shell__nav-actions"
            style={{ display: 'flex', alignItems: 'center', gap: 12 }}
          >
            {navActions}
            {lineOptions && (
              <div style={{ minWidth: 160 }}>
                <Select
                  options={lineOptions}
                  value={lineValue}
                  onChange={(v) => onLineChange?.(v as string)}
                  size="s"
                  placeholder={linePlaceholder}
                  clearable={false}
                />
              </div>
            )}
            <IconButton
              size="l"
              tooltipPlacement="bottom"
              aria-label="Language"
              onClick={onLanguageClick}
              icon={<span className="fas-navbar__lang">En</span>}
            />
            <button
              type="button"
              className="fas-navbar__avatar"
              onClick={onUserClick}
              aria-label={`User ${userInitial}`}
            >
              {userInitial}
            </button>
          </div>
        }
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
          versionAction={versionAction}
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
          {/* FeatureTitle region — 永遠貼頂 */}
          <div
            className="lm-app-shell__feature-title-region"
            style={{ flexShrink: 0, minWidth: 0 }}
          >
            <LMFeatureTitle
              items={
                breadcrumb ??
                (activeKey
                  ? (findMenuPath(menuItems, activeKey) ?? [])
                      .filter((n) => !n.isSection)
                      .map((node) => ({ label: node.label }))
                  : [])
              }
              actions={actions}
              topOffset={0}
            />
          </div>

          {/* Switch panel region — 窄外距，貼在 FeatureTitle 下方 */}
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
              rightSlot={switchRightSlot}
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
