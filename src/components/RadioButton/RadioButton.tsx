import React from 'react';

export interface RadioButtonProps {
  name?: string;
  value?: string;
  defaultValue?: string;
  options: { label: string; value: string }[];
  onValueChange: (value: string) => void;
  orientation?: 'vertical' | 'horizontal';
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const RadioButton = ({
  name = 'options',
  value,
  defaultValue,
  options,
  onValueChange,
  orientation = 'vertical',
  className = '',
}: RadioButtonProps) => {
  const handleChange = (value: string) => {
    onValueChange(value);
  };

  return (
    <div
      role="radiogroup"
      className={`flex ${orientation === 'horizontal' ? 'flex-row space-x-4' : 'flex-col space-y-4'} ${className}`}
    >
      {options.map((option) => (
        <label
          key={option.value}
          htmlFor={`radio-${option.value}`}
          className="flex items-center cursor-pointer relative pl-4"
          onClick={() => handleChange(option.value)}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value || defaultValue === option.value}
            aria-labelledby={`radio-${option.value}`}
            aria-checked={value === option.value}
            className="hidden peer"
          />
          <span
            className="peer-checked:bg-primary-4 peer-checked:border-primary-4 absolute left-0 w-4 h-4 rounded-full border-2 border-neutral-4 bg-neutral-1 focus:ring-2 focus:ring-primary-4 focus:ring-offset-2 focus:border-primary-4 hover:border-primary-4 focus-visible:outline-primary-4 transition duration-75"
            tabIndex={0}
            role="radio"
            aria-checked={value === option.value}
            id={`radio-${option.value}`}
          >
            <span className="w-2 h-2 absolute left-[30%] top-[30%] bg-neutral-1 rounded-full peer-checked:scale-100 transition-transform duration-75" />
          </span>
          <span className="ml-3 text-shade-4">{option.label}</span>
        </label>
      ))}
    </div>
  );
};
