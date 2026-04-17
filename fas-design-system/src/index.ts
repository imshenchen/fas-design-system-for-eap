/**
 * FAS Design System — Package Entry Point
 *
 * 引用範例：
 *   import { Button, StatusChip, cssVars, spacing } from '@imshenchen/fas-design-system';
 */

// Global styles (tokens + all component CSS)
import './styles/index.css';

// Components
export * from './components';

// Tokens
export { cssVars, rawTokens, spacing, zIndex } from './tokens/tokens';
export type { CssVar, SpacingKey } from './tokens/tokens';
