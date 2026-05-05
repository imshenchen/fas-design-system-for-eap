/**
 * LMMobileInstallButton — LM Tier
 *
 * 安裝 Mobile 版本的 trigger 按鈕。點擊後在按鈕附近浮出一個 popover
 * 顯示 QR Code，使用者用手機掃描後安裝。
 *
 * 通常放在 LMAppShell 的 SideMenu 版本號右側（透過 LMAppShell 的 `versionAction` prop）。
 */
import React, { useState, useRef, useEffect } from 'react';
import { cssVars, spacing, zIndex } from '../../../tokens/tokens';

export interface LMMobileInstallButtonProps {
  /**
   * QR Code 內容 —— 通常是 `<img src="...qr.png" />` 或 SVG。
   * 設計系統不負責產生 QR Code，由 caller 提供。
   */
  qrCode: React.ReactNode;
  /** 彈出 popover 的標題；預設 "安裝 Mobile 版本" */
  title?: React.ReactNode;
  /** 補充說明文字；預設掃描提示 */
  description?: React.ReactNode;
  /** Trigger button 的 aria-label */
  ariaLabel?: string;
  /** 自訂 className 套到 trigger button */
  className?: string;
}

export const LMMobileInstallButton: React.FC<LMMobileInstallButtonProps> = ({
  qrCode,
  title = '安裝 Mobile 版本',
  description = '使用手機掃描 QR Code 下載並安裝',
  ariaLabel = '安裝 Mobile 版本',
  className,
}) => {
  const [open, setOpen]   = useState(false);
  const [pos, setPos]     = useState<{ top: number; left: number } | null>(null);
  const triggerRef        = useRef<HTMLButtonElement>(null);
  const popoverRef        = useRef<HTMLDivElement>(null);

  const POPOVER_WIDTH = 240;

  // Compute popover position when opening
  useEffect(() => {
    if (!open || !triggerRef.current) return;
    const r = triggerRef.current.getBoundingClientRect();
    // Popover 高度約 280–320px（QR + title + desc）；置於 trigger 上方右側
    const POPOVER_H_EST = 320;
    setPos({
      top:  Math.max(8, r.top - POPOVER_H_EST - 8),
      // SideMenu 在左邊，trigger 是 footer 最右；popover 從 trigger 右緣稍微向左偏移
      left: r.left - POPOVER_WIDTH + r.width,
    });
  }, [open]);

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        popoverRef.current && !popoverRef.current.contains(target) &&
        triggerRef.current && !triggerRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        aria-label={ariaLabel}
        aria-expanded={open}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((o) => !o);
        }}
        className={['lm-mobile-install-trigger', className].filter(Boolean).join(' ')}
        style={{
          width:           '32px',
          height:          '32px',
          padding:         0,
          border:          'none',
          background:      open ? cssVars.compHover : 'transparent',
          color:           cssVars.textBody,
          cursor:          'pointer',
          display:         'inline-flex',
          alignItems:      'center',
          justifyContent:  'center',
          borderRadius:    '4px',
          transition:      'background 0.15s ease',
          outline:         'none',
        }}
      >
        <span
          className="material-symbols-outlined"
          aria-hidden="true"
          style={{ fontSize: '20px', lineHeight: 1 }}
        >
          smartphone
        </span>
      </button>

      {open && pos && (
        <div
          ref={popoverRef}
          role="dialog"
          aria-label={typeof title === 'string' ? title : ariaLabel}
          style={{
            position:     'fixed',
            top:          `${pos.top}px`,
            left:         `${pos.left}px`,
            width:        `${POPOVER_WIDTH}px`,
            background:   cssVars.bgSurface,
            border:       `1px solid ${cssVars.divider}`,
            borderRadius: '8px',
            boxShadow:    '0 8px 24px rgba(0, 0, 0, 0.16), 0 2px 4px rgba(0, 0, 0, 0.08)',
            padding:      spacing[4],   // 16
            zIndex:       zIndex.dropdown,
            boxSizing:    'border-box',
          }}
        >
          {title && (
            <div
              style={{
                fontSize:   '14px',
                lineHeight: '20px',
                fontWeight: 600,
                color:      cssVars.textHigh,
                fontFamily: '"Noto Sans TC", sans-serif',
                marginBottom: spacing[3],   // 12
              }}
            >
              {title}
            </div>
          )}

          <div
            style={{
              display:        'flex',
              alignItems:     'center',
              justifyContent: 'center',
              padding:        spacing[3],  // 12
              border:         `1px solid ${cssVars.divider}`,
              borderRadius:   '6px',
              background:     cssVars.bgSurface,
              marginBottom:   description ? spacing[3] : 0,
            }}
          >
            {qrCode}
          </div>

          {description && (
            <div
              style={{
                fontSize:   '12px',
                lineHeight: '16px',
                color:      cssVars.textMedium,
                fontFamily: '"Noto Sans TC", sans-serif',
                textAlign:  'center',
              }}
            >
              {description}
            </div>
          )}
        </div>
      )}
    </>
  );
};

LMMobileInstallButton.displayName = 'LMMobileInstallButton';

export default LMMobileInstallButton;
