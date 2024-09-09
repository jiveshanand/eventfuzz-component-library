export interface RadioButtonProps {
  name?: string;
  value?: string;
  defaultValue?: string;
  options: { label: string; value: string }[];
  onValueChange?: () => void;
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
  options=[],
  onValueChange,
  orientation = 'vertical',
  className = '',
}: RadioButtonProps) => {
  return (
    <div
      role="radiogroup"
      className={`flex space-y-4 ${orientation === 'horizontal' ? 'flex-row' : 'flex-col'} ${className}`}
    >
      {options.map((option) => (
        <label
          htmlFor={`label-${option.value}`}
          className="custom-radio flex items-center cursor-pointer relative pl-4"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value || defaultValue === option.value}
            onChange={onValueChange}
            aria-labelledby={`label-${option.value}`}
            className="hidden"
          />
          <span
            className="radio-checkmark"
            tabIndex={0}
            role="radio"
            aria-checked={value === option.value}
            id={`label-${option.value}`}
          ></span>
          <span className="ml-3 text-shade-4">Option 1</span>
        </label>
      ))}
    </div>
  );
};
