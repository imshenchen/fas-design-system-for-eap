/**
 * Tab / Tabs — FAS Design Kit
 * @see ../../components.md § Tab
 *
 * Variants:
 *   line   → bottom-border indicator on active tab (default)
 *   filled → active tab has solid primary background
 */
import React from 'react';

// ---------------------------------------------------------------------------
// Context
// ---------------------------------------------------------------------------

interface TabsContextValue {
  value: string;
  onChange: (val: string) => void;
  variant: 'line' | 'filled';
  size: 'm' | 's';
}

const TabsContext = React.createContext<TabsContextValue | null>(null);

function useTabsContext(): TabsContextValue {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error('<Tab> must be used inside <Tabs>');
  return ctx;
}

// ---------------------------------------------------------------------------
// Tabs (container)
// ---------------------------------------------------------------------------

export interface TabsProps {
  /** Currently active tab value */
  value: string;
  /** Called when the active tab changes */
  onChange: (value: string) => void;
  children: React.ReactNode;
  /** Visual style — default 'line' */
  variant?: 'line' | 'filled';
  /** Height size — default 'm' */
  size?: 'm' | 's';
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  value,
  onChange,
  children,
  variant = 'line',
  size = 'm',
  className,
}) => {
  const ctxValue: TabsContextValue = { value, onChange, variant, size };

  return (
    <TabsContext.Provider value={ctxValue}>
      <div
        role="tablist"
        className={[
          'fas-tabs',
          `fas-tabs--${variant}`,
          `fas-tabs--${size}`,
          className,
        ]
          .filter(Boolean)
          .join(' ')}
        style={
          {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'stretch',
            borderBottom: variant === 'line' ? '1px solid var(--divider)' : 'none',
            gap: variant === 'filled' ? 4 : 0,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </TabsContext.Provider>
  );
};

Tabs.displayName = 'Tabs';

// ---------------------------------------------------------------------------
// Tab (individual item)
// ---------------------------------------------------------------------------

export interface TabProps {
  /** Unique identifier; compared against Tabs.value */
  value: string;
  /** Tab label content */
  label: React.ReactNode;
  /** Disables interaction */
  disabled?: boolean;
  /** Optional icon rendered before the label */
  icon?: React.ReactNode;
  className?: string;
}

export const Tab: React.FC<TabProps> = ({
  value,
  label,
  disabled = false,
  icon,
  className,
}) => {
  const { value: activeValue, onChange, variant, size } = useTabsContext();
  const isActive = value === activeValue;

  const height = size === 's' ? 36 : 48;
  const padding = size === 's' ? '0 12px' : '0 16px';

  // --- inline style helpers per state / variant ---
  const lineActiveStyle: React.CSSProperties = {
    color: 'var(--primary)',
    borderBottom: '2px solid var(--primary)',
    marginBottom: -1, // overlap container border
    fontWeight: 600,
  };

  const lineInactiveStyle: React.CSSProperties = {
    color: 'var(--text-medium)',
    borderBottom: '2px solid transparent',
    marginBottom: -1,
  };

  const filledActiveStyle: React.CSSProperties = {
    backgroundColor: 'var(--primary)',
    color: '#ffffff',
    borderRadius: 4,
    fontWeight: 600,
  };

  const filledInactiveStyle: React.CSSProperties = {
    backgroundColor: 'var(--bg-container-low)',
    color: 'var(--text-body)',
    borderRadius: 4,
  };

  const disabledStyle: React.CSSProperties = {
    color: 'var(--text-disabled)',
    cursor: 'not-allowed',
    pointerEvents: 'none',
  };

  let variantStyle: React.CSSProperties = {};
  if (disabled) {
    variantStyle = {
      ...disabledStyle,
      ...(variant === 'filled' ? filledInactiveStyle : lineInactiveStyle),
      color: 'var(--text-disabled)',
    };
  } else if (variant === 'line') {
    variantStyle = isActive ? lineActiveStyle : lineInactiveStyle;
  } else {
    variantStyle = isActive ? filledActiveStyle : filledInactiveStyle;
  }

  return (
    <button
      role="tab"
      type="button"
      aria-selected={isActive}
      aria-disabled={disabled}
      disabled={disabled}
      tabIndex={isActive ? 0 : -1}
      onClick={() => !disabled && onChange(value)}
      className={[
        'fas-tab',
        isActive && 'fas-tab--active',
        disabled && 'fas-tab--disabled',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={
        {
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 6,
          height,
          padding,
          fontSize: 14,
          fontFamily: 'inherit',
          border: 'none',
          cursor: disabled ? 'not-allowed' : 'pointer',
          background: 'transparent',
          transition: 'background 0.15s, color 0.15s',
          whiteSpace: 'nowrap',
          // hover handled via CSS class; inline pseudo-states need <style> injection
          ...variantStyle,
        } as React.CSSProperties
      }
      // Provide hover behaviour via onMouseEnter/Leave since we have no CSS file
      onMouseEnter={(e) => {
        if (disabled || isActive) return;
        (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--comp-hover)';
        if (variant === 'line') {
          (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-body)';
        }
      }}
      onMouseLeave={(e) => {
        if (disabled || isActive) return;
        if (variant === 'line') {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
          (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-medium)';
        } else {
          (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--bg-container-low)';
          (e.currentTarget as HTMLButtonElement).style.color = 'var(--text-body)';
        }
      }}
    >
      {icon && <span className="fas-tab__icon" aria-hidden>{icon}</span>}
      <span className="fas-tab__label">{label}</span>
    </button>
  );
};

Tab.displayName = 'Tab';
