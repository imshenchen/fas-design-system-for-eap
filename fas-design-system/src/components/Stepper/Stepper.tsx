/**
 * Stepper / Step — FAS Design Kit
 */
import React from 'react';
import './Stepper.css';

// ---------------------------------------------------------------------------
// Step
// ---------------------------------------------------------------------------

export type StepLabelPosition = 'right' | 'bottom';

export interface StepProps {
  label: string;
  description?: string;
  error?: boolean;
  optional?: boolean;
  /** Controlled completed state; otherwise inferred from Stepper.activeStep */
  completed?: boolean;
  /** Injected by Stepper */
  _index?: number;
  _active?: boolean;
  _completed?: boolean;
  _isLast?: boolean;
  _labelPosition?: StepLabelPosition;
}

export const Step: React.FC<StepProps> = ({
  label,
  description,
  error = false,
  optional = false,
  _active = false,
  _completed = false,
  _isLast = false,
  _labelPosition = 'bottom',
}) => {
  const state = error ? 'error' : _completed ? 'completed' : _active ? 'active' : 'pending';

  const circle = (
    <div className="fas-step__circle">
      {state === 'completed' && <span className="material-symbols-outlined" aria-hidden>check</span>}
      {state === 'error' && <span className="material-symbols-outlined" aria-hidden>priority_high</span>}
      {(state === 'active' || state === 'pending') && (
        <span className="fas-step__number" />
      )}
    </div>
  );

  const content = (
    <div className="fas-step__content">
      <div className="fas-step__label">{label}</div>
      {optional && <div className="fas-step__optional">Optional</div>}
      {description && <div className="fas-step__description">{description}</div>}
    </div>
  );

  const stepClass = [
    'fas-step',
    `fas-step--${state}`,
    `fas-step--label-${_labelPosition}`,
  ].join(' ');

  if (_labelPosition === 'right') {
    // [circle] [label] ─── [next circle] [next label] ...
    return (
      <div className={stepClass}>
        {circle}
        {content}
        {!_isLast && <div className="fas-step__connector" />}
      </div>
    );
  }

  // Default (label below): [circle on top, label below it], connector through circle row
  return (
    <div className={stepClass}>
      <div className="fas-step__indicator-row">
        {circle}
        {!_isLast && <div className="fas-step__connector" />}
      </div>
      {content}
    </div>
  );
};

Step.displayName = 'Step';

// ---------------------------------------------------------------------------
// Stepper
// ---------------------------------------------------------------------------

export interface StepperProps {
  activeStep: number;
  orientation?: 'horizontal' | 'vertical';
  /**
   * Label 相對於圓圈的位置（horizontal orientation 下生效）。
   * - `'bottom'`（預設）— 圓圈在上，label 在下，連接線從圓圈穿過
   * - `'right'` — 圓圈在左、label 在右、連接線從 label 後面延伸到下一個圓圈，整列水平流動
   */
  labelPosition?: StepLabelPosition;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Stepper: React.FC<StepperProps> = ({
  activeStep,
  orientation = 'horizontal',
  labelPosition = 'bottom',
  children,
  className,
  style,
}) => {
  const steps = React.Children.toArray(children);
  // Vertical 模式維持原本（label 在右）邏輯，labelPosition 只作用於 horizontal
  const effectiveLabelPos: StepLabelPosition =
    orientation === 'horizontal' ? labelPosition : 'bottom';

  return (
    <div
      className={[
        'fas-stepper',
        `fas-stepper--${orientation}`,
        `fas-stepper--label-${effectiveLabelPos}`,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    >
      {steps.map((child, index) => {
        if (!React.isValidElement(child)) return child;
        return React.cloneElement(child as React.ReactElement<StepProps>, {
          _index: index,
          _active: index === activeStep,
          _completed: index < activeStep,
          _isLast: index === steps.length - 1,
          _labelPosition: effectiveLabelPos,
        });
      })}
    </div>
  );
};

Stepper.displayName = 'Stepper';
