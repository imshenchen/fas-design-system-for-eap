/**
 * Icon — FAS Design Kit
 * Google Material Symbols Outlined wrapper
 *
 * 使用方式：
 *   <Icon name="close" />
 *   <Icon name="check_circle" size={24} />
 *   <Icon name="warning" aria-label="警告" />
 */

export interface IconProps {
  /** Material Symbols 名稱，例如 "close", "check_circle", "arrow_back" */
  name: string;
  /** 圖示大小（px），預設 20 */
  size?: number;
  /** CSS class */
  className?: string;
  style?: React.CSSProperties;
  /** 預設 true（裝飾性圖示），若圖示有語意請設為 false 並提供 aria-label */
  'aria-hidden'?: boolean;
  'aria-label'?: string;
  /** 是否填滿（filled variant），預設 false */
  filled?: boolean;
}

export function Icon({
  name,
  size = 20,
  className,
  style,
  'aria-hidden': ariaHidden = true,
  'aria-label': ariaLabel,
  filled = false,
}: IconProps) {
  return (
    <span
      className={['material-symbols-outlined', className].filter(Boolean).join(' ')}
      style={{
        fontSize: size,
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' ${size}`,
        ...style,
      }}
      aria-hidden={ariaHidden || undefined}
      aria-label={ariaLabel}
      role={ariaLabel ? 'img' : undefined}
    >
      {name}
    </span>
  );
}

export default Icon;
