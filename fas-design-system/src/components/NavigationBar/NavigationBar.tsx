/**
 * NavigationBar — FAS Design Kit
 *
 * 固定在頁面頂端的全寬導覽列。高度 60px，sticky，z-index 100。
 * 左側：漢堡選單按鈕 + Logo + App Name
 * 右側：操作按鈕組 + 使用者 Avatar
 */
import React from 'react';
import { IconButton } from '../IconButton/IconButton';
import { DeltaLogo } from '../DeltaLogo/DeltaLogo';
import { CorpIcon } from '../CorpIcon/CorpIcon';
import './NavigationBar.css';

/**
 * NavigationBar 視覺樣式。
 * - `default`：標準導覽列（黑色 App Name、單線下緣分隔）。
 * - `corp`：Delta 企業樣式（App Name 採 Delta 藍、Logo 與 App Name 間加垂直分隔線、
 *   下緣為品牌漸層線 blue → cyan → lime）。
 */
export type NavigationBarVariant = 'default' | 'corp';

export interface NavigationBarProps {
  /** 視覺樣式，預設 `default`；`corp` 為 Delta 企業樣式 */
  variant?: NavigationBarVariant;
  /** 應用程式名稱，顯示於 Logo 右側 */
  appName?: string;
  /** 自訂 Logo，預設顯示占位方塊 */
  logo?: React.ReactNode;
  /** 點擊漢堡選單按鈕的回呼 */
  onMenuToggle?: () => void;
  /** 右側自訂操作區（Icon Buttons 等），放在 Avatar 左側 */
  actions?: React.ReactNode;
  /** 使用者 Avatar 顯示文字（通常為姓名首字母） */
  userInitial?: string;
  /** 點擊 Avatar 的回呼 */
  onUserClick?: () => void;
  /**
   * 是否渲染內建的右側按鈕（help / settings / language / notifications / avatar）。
   * 預設 `true`；傳 `false` 時 NavigationBar 只渲染 `actions` slot 內容，方便消費方
   * （如 LMAppShell）完全自訂右側內容。
   */
  showDefaults?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
  variant = 'default',
  appName = 'APP Name',
  logo,
  onMenuToggle,
  actions,
  userInitial = 'K',
  onUserClick,
  showDefaults = true,
  className,
  style,
}) => {
  // Corp 樣式預設使用 Delta 企業標誌（高度略小於品牌分隔線 24px，等比例 105:28 → 75×20）；
  // 其餘樣式無 logo 時顯示占位方塊
  const resolvedLogo = logo ?? (variant === 'corp' ? <DeltaLogo height={20} width={75} /> : null);

  return (
  <header
    className={['fas-navbar', `fas-navbar--${variant}`, className]
      .filter(Boolean)
      .join(' ')}
    style={style}
  >
    {/* ── Left ── */}
    <div className="fas-navbar__left">
      <IconButton
        size="l"
        tooltipPlacement="bottom"
        aria-label="Toggle menu"
        icon={<span className="material-symbols-outlined">menu</span>}
        onClick={onMenuToggle}
      />
      <div className="fas-navbar__brand">
        {resolvedLogo ? (
          <div className="fas-navbar__logo">{resolvedLogo}</div>
        ) : (
          <div className="fas-navbar__logo-placeholder" aria-hidden />
        )}
        {/* Corp 樣式於 Logo 與 App Name 間顯示垂直分隔線；default 下隱藏 */}
        <span className="fas-navbar__brand-divider" aria-hidden />
        <span className="fas-navbar__appname">{appName}</span>
      </div>
    </div>

    {/* ── Right ── */}
    <div className="fas-navbar__right">
      {actions}
      {showDefaults && (
        <>
          {variant === 'corp' ? (
            // Corp 樣式：information / theme / language / notification（採 Delta 企業圖示）
            <>
              <IconButton
                size="l"
                tooltipPlacement="bottom"
                aria-label="Information"
                icon={<CorpIcon name="information" width={24} height={24} />}
              />
              <IconButton
                size="l"
                tooltipPlacement="bottom"
                aria-label="Theme"
                icon={<CorpIcon name="theme" width={24} height={24} />}
              />
              <IconButton
                size="l"
                tooltipPlacement="bottom"
                aria-label="Language"
                icon={<span className="fas-navbar__lang">En</span>}
              />
              <IconButton
                size="l"
                tooltipPlacement="bottom"
                aria-label="Notifications"
                icon={<CorpIcon name="notification" width={24} height={24} />}
              />
            </>
          ) : (
            <>
              <IconButton
                size="l"
                tooltipPlacement="bottom"
                aria-label="User guide"
                icon={<span className="material-symbols-outlined">help</span>}
              />
              <IconButton
                size="l"
                tooltipPlacement="bottom"
                aria-label="Settings"
                icon={<span className="material-symbols-outlined">settings</span>}
              />
              <IconButton
                size="l"
                tooltipPlacement="bottom"
                aria-label="Language"
                icon={<span className="fas-navbar__lang">En</span>}
              />
              <IconButton
                size="l"
                tooltipPlacement="bottom"
                aria-label="Notifications"
                icon={<span className="material-symbols-outlined">notifications</span>}
              />
            </>
          )}
          <button
            className="fas-navbar__avatar"
            onClick={onUserClick}
            aria-label={`User ${userInitial}`}
          >
            {userInitial}
          </button>
        </>
      )}
    </div>
  </header>
  );
};
