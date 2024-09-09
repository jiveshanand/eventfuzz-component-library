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
  return (
    <div
      role="radiogroup"
      className={`flex space-y-4 ${orientation === 'horizontal' ? 'flex-row' : 'flex-col'} ${className}`}
    >
      {options.map((option) => (
        <label
          key={option.value}
          htmlFor={`label-${option.value}`}
          className="custom-radio flex items-center cursor-pointer relative pl-4"
          onClick={() => onValueChange(option.value)}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value || defaultValue === option.value}
            onChange={(event) => onValueChange(event.target.value)}
            aria-labelledby={`label-${option.value}`}
            aria-checked={value === option.value}
            className="hidden"
          />
          <span
            className="radio-checkmark"
            tabIndex={0}
            role="radio"
            aria-checked={value === option.value}
            id={`label-${option.value}`}
          ></span>
          <span className="ml-3 text-shade-4" aria-label={option.label}>
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
};
