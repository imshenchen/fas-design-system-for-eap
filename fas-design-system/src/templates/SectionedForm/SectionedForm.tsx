/**
 * SectionedForm / FormSection — FAS Design Kit (Template)
 *
 * 分段式表單的主內容版面。每個 FormSection 為兩欄 grid：
 *   左欄：section 標題 + 說明
 *   右欄：表單內容（通常是 Card）
 *
 * 欄位比例由 CSS Grid 的 `columns` 控制（預設 "1fr 2.5fr"）。
 * 樣板不包含 NavigationBar / SideMenu / FeatureTitle，請在外層自行組合。
 */
import React from 'react';
import './SectionedForm.css';

// ---------------------------------------------------------------------------
// SectionedForm (container)
// ---------------------------------------------------------------------------

export interface SectionedFormProps {
  /** CSS grid-template-columns；預設 `1fr 2.5fr`。傳 `1fr 1fr` 即 1:1，`1fr 3fr` 即 1:3 */
  columns?: string;
  /** 左右欄之間的水平間距（px），預設 32 */
  columnGap?: number | string;
  /** 每個 FormSection 上下 padding（px），預設 32 */
  sectionPadding?: number | string;
  /** 是否在 section 之間顯示分隔線，預設 true */
  divider?: boolean;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const SectionedForm: React.FC<SectionedFormProps> = ({
  columns = '1fr 2.5fr',
  columnGap = 32,
  sectionPadding = 32,
  divider = true,
  children,
  className,
  style,
}) => {
  const cssVars = {
    '--fas-sf-columns': columns,
    '--fas-sf-col-gap': typeof columnGap === 'number' ? `${columnGap}px` : columnGap,
    '--fas-sf-section-pad':
      typeof sectionPadding === 'number' ? `${sectionPadding}px` : sectionPadding,
  } as React.CSSProperties;

  return (
    <div
      className={[
        'fas-sectioned-form',
        divider && 'fas-sectioned-form--divided',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={{ ...cssVars, ...style }}
    >
      {children}
    </div>
  );
};

SectionedForm.displayName = 'SectionedForm';

// ---------------------------------------------------------------------------
// FormSection (item)
// ---------------------------------------------------------------------------

export interface FormSectionProps {
  title: React.ReactNode;
  description?: React.ReactNode;
  /** 覆寫父層 SectionedForm 的 `columns`，僅此 section 生效 */
  columns?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const FormSection: React.FC<FormSectionProps> = ({
  title,
  description,
  columns,
  children,
  className,
  style,
}) => {
  const override = columns ? ({ '--fas-sf-columns': columns } as React.CSSProperties) : undefined;
  return (
    <section
      className={['fas-form-section', className].filter(Boolean).join(' ')}
      style={{ ...override, ...style }}
    >
      <header className="fas-form-section__header">
        <h3 className="fas-form-section__title">{title}</h3>
        {description && (
          <p className="fas-form-section__description">{description}</p>
        )}
      </header>
      <div className="fas-form-section__content">{children}</div>
    </section>
  );
};

FormSection.displayName = 'FormSection';
