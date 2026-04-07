/**
 * NavigationBar — FAS Design Kit
 * @see components.md § Layout
 *
 * 固定在頁面頂端的全寬導覽列。高度 60px，sticky，z-index 100。
 * 左側：漢堡選單按鈕 + Logo + App Name
 * 右側：操作按鈕組 + 使用者 Avatar
 */
import React from 'react';
import './NavigationBar.css';

export interface NavigationBarProps {
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
  className?: string;
  style?: React.CSSProperties;
}

export const NavigationBar: React.FC<NavigationBarProps> = ({
  appName = 'APP Name',
  logo,
  onMenuToggle,
  actions,
  userInitial = 'K',
  onUserClick,
  className,
  style,
}) => (
  <header
    className={['fas-navbar', className].filter(Boolean).join(' ')}
    style={style}
  >
    {/* ── Left ── */}
    <div className="fas-navbar__left">
      <button
        className="fas-navbar__icon-btn"
        onClick={onMenuToggle}
        aria-label="Toggle side menu"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>
      <div className="fas-navbar__brand">
        {logo ? (
          <div className="fas-navbar__logo">{logo}</div>
        ) : (
          <div className="fas-navbar__logo-placeholder" aria-hidden />
        )}
        <span className="fas-navbar__appname">{appName}</span>
      </div>
    </div>

    {/* ── Right ── */}
    <div className="fas-navbar__right">
      {actions}
      <button className="fas-navbar__icon-btn" aria-label="User guide">
        <span className="material-symbols-outlined">help</span>
      </button>
      <button className="fas-navbar__icon-btn" aria-label="Settings">
        <span className="material-symbols-outlined">settings</span>
      </button>
      <button className="fas-navbar__icon-btn" aria-label="Language">
        <span className="fas-navbar__lang">En</span>
      </button>
      <button className="fas-navbar__icon-btn" aria-label="Notifications">
        <span className="material-symbols-outlined">notifications</span>
      </button>
      <button
        className="fas-navbar__avatar"
        onClick={onUserClick}
        aria-label={`User ${userInitial}`}
      >
        {userInitial}
      </button>
    </div>
  </header>
);
