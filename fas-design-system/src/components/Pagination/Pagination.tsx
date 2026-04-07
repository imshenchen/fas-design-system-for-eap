/**
 * Pagination — FAS Design Kit
 */
import React from 'react';
import './Pagination.css';

export interface PaginationProps {
  page: number;
  count: number;
  onChange: (page: number) => void;
  siblingCount?: number;
  showFirstLast?: boolean;
  disabled?: boolean;
  size?: 'm' | 's';
  className?: string;
  style?: React.CSSProperties;
}

function buildRange(page: number, count: number, siblings: number): (number | '...')[] {
  const totalShown = siblings * 2 + 5; // first + last + current + 2 ellipses + siblings
  if (count <= totalShown) return Array.from({ length: count }, (_, i) => i + 1);

  const left = Math.max(page - siblings, 2);
  const right = Math.min(page + siblings, count - 1);

  const showLeftEllipsis = left > 2;
  const showRightEllipsis = right < count - 1;

  const items: (number | '...')[] = [1];
  if (showLeftEllipsis) items.push('...');
  for (let i = left; i <= right; i++) items.push(i);
  if (showRightEllipsis) items.push('...');
  items.push(count);
  return items;
}

export const Pagination: React.FC<PaginationProps> = ({
  page,
  count,
  onChange,
  siblingCount = 1,
  showFirstLast = true,
  disabled = false,
  size = 'm',
  className,
  style,
}) => {
  const items = buildRange(page, count, siblingCount);

  const go = (p: number) => {
    if (disabled || p < 1 || p > count || p === page) return;
    onChange(p);
  };

  return (
    <nav
      aria-label="Pagination"
      className={[
        'fas-pagination',
        `fas-pagination--${size}`,
        disabled && 'fas-pagination--disabled',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      {showFirstLast && (
        <button
          type="button"
          className="fas-pagination__item fas-pagination__item--nav"
          onClick={() => go(1)}
          disabled={disabled || page === 1}
          aria-label="First page"
        >
          <span className="material-symbols-outlined" aria-hidden>first_page</span>
        </button>
      )}
      <button
        type="button"
        className="fas-pagination__item fas-pagination__item--nav"
        onClick={() => go(page - 1)}
        disabled={disabled || page === 1}
        aria-label="Previous page"
      >
        <span className="material-symbols-outlined" aria-hidden>chevron_left</span>
      </button>

      {items.map((item, i) =>
        item === '...' ? (
          <span key={`ellipsis-${i}`} className="fas-pagination__item fas-pagination__item--ellipsis">
            …
          </span>
        ) : (
          <button
            key={item}
            type="button"
            className={[
              'fas-pagination__item',
              page === item && 'fas-pagination__item--active',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => go(item)}
            disabled={disabled}
            aria-current={page === item ? 'page' : undefined}
          >
            {item}
          </button>
        )
      )}

      <button
        type="button"
        className="fas-pagination__item fas-pagination__item--nav"
        onClick={() => go(page + 1)}
        disabled={disabled || page === count}
        aria-label="Next page"
      >
        <span className="material-symbols-outlined" aria-hidden>chevron_right</span>
      </button>
      {showFirstLast && (
        <button
          type="button"
          className="fas-pagination__item fas-pagination__item--nav"
          onClick={() => go(count)}
          disabled={disabled || page === count}
          aria-label="Last page"
        >
          <span className="material-symbols-outlined" aria-hidden>last_page</span>
        </button>
      )}
    </nav>
  );
};

Pagination.displayName = 'Pagination';
export default Pagination;
