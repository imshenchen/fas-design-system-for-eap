/**
 * Accordion / AccordionItem — FAS Design Kit
 */
import React, { useState, useRef, useEffect } from 'react';
import './Accordion.css';

// ---------------------------------------------------------------------------
// AccordionItem
// ---------------------------------------------------------------------------

export interface AccordionItemProps {
  title: React.ReactNode;
  children: React.ReactNode;
  defaultExpanded?: boolean;
  disabled?: boolean;
  expanded?: boolean;
  onChange?: (expanded: boolean) => void;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  defaultExpanded = false,
  disabled = false,
  expanded: controlledExpanded,
  onChange,
  className,
}) => {
  const isControlled = controlledExpanded !== undefined;
  const [internalExpanded, setInternalExpanded] = useState(defaultExpanded);
  const expanded = isControlled ? controlledExpanded : internalExpanded;

  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(expanded ? undefined : 0);

  useEffect(() => {
    if (!contentRef.current) return;
    if (expanded) {
      setHeight(contentRef.current.scrollHeight);
      const t = setTimeout(() => setHeight(undefined), 250);
      return () => clearTimeout(t);
    } else {
      setHeight(contentRef.current.scrollHeight);
      requestAnimationFrame(() => setHeight(0));
    }
  }, [expanded]);

  const toggle = () => {
    if (disabled) return;
    const next = !expanded;
    if (!isControlled) setInternalExpanded(next);
    onChange?.(next);
  };

  return (
    <div
      className={[
        'fas-accordion-item',
        expanded && 'fas-accordion-item--expanded',
        disabled && 'fas-accordion-item--disabled',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      <button
        type="button"
        className="fas-accordion-item__header"
        onClick={toggle}
        disabled={disabled}
        aria-expanded={expanded}
      >
        <span className="fas-accordion-item__title">{title}</span>
        <span className="material-symbols-outlined fas-accordion-item__chevron" aria-hidden>
          {expanded ? 'expand_less' : 'expand_more'}
        </span>
      </button>
      <div
        className="fas-accordion-item__content-wrapper"
        style={{ height: height === undefined ? 'auto' : height, overflow: 'hidden' }}
      >
        <div
          ref={contentRef}
          className="fas-accordion-item__content"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

AccordionItem.displayName = 'AccordionItem';

// ---------------------------------------------------------------------------
// Accordion (group)
// ---------------------------------------------------------------------------

export interface AccordionProps {
  children: React.ReactNode;
  multiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  multiple = false,
  className,
}) => {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const items = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) return child;
    return React.cloneElement(child as React.ReactElement<AccordionItemProps>, {
      expanded: openItems.has(index),
      onChange: (expanded: boolean) => {
        setOpenItems((prev) => {
          const next = multiple ? new Set(prev) : new Set<number>();
          if (expanded) {
            next.add(index);
          } else {
            next.delete(index);
          }
          return next;
        });
      },
    });
  });

  return (
    <div className={['fas-accordion', className].filter(Boolean).join(' ')}>
      {items}
    </div>
  );
};

Accordion.displayName = 'Accordion';
