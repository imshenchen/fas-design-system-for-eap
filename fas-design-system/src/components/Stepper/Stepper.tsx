/**
 * Stepper / Step — FAS Design Kit
 */
import React from 'react';
import './Stepper.css';

// ---------------------------------------------------------------------------
// Step
// ---------------------------------------------------------------------------

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
}

export const Step: React.FC<StepProps> = ({
  label,
  description,
  error = false,
  optional = false,
  _active = false,
  _completed = false,
  _isLast = false,
}) => {
  const state = error ? 'error' : _completed ? 'completed' : _active ? 'active' : 'pending';

  return (
    <div
      className={[
        'fas-step',
        `fas-step--${state}`,
      ].join(' ')}
    >
      <div className="fas-step__indicator-row">
        <div className="fas-step__circle">
          {state === 'completed' && <span className="material-symbols-outlined" aria-hidden>check</span>}
          {state === 'error' && <span className="material-symbols-outlined" aria-hidden>priority_high</span>}
          {(state === 'active' || state === 'pending') && (
            <span className="fas-step__number" />
          )}
        </div>
        {!_isLast && <div className="fas-step__connector" />}
      </div>
      <div className="fas-step__content">
        <div className="fas-step__label">{label}</div>
        {optional && <div className="fas-step__optional">Optional</div>}
        {description && <div className="fas-step__description">{description}</div>}
      </div>
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
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Stepper: React.FC<StepperProps> = ({
  activeStep,
  orientation = 'horizontal',
  children,
  className,
  style,
}) => {
  const steps = React.Children.toArray(children);

  return (
    <div
      className={[
        'fas-stepper',
        `fas-stepper--${orientation}`,
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
        });
      })}
    </div>
  );
};

Stepper.displayName = 'Stepper';
