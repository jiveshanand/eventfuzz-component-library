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
      className={`flex  ${orientation === 'horizontal' ? 'flex-row space-x-4' : 'flex-col space-y-4'} ${className}`}
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
            aria-labelledby={`label-${option.value}`}
            aria-checked={value === option.value}
            className="hidden peer"
          />
          <span
            className="radio-checkmark peer-checked:bg-primary-4 peer-checked:border-primary-4 before:peer-checked:scale-100 absolute left-0 w-4 h-4 rounded-full border-2 border-neutral-4 bg-neutral-1 focus:ring-2 focus:ring-primary-4 focus:ring-offset-2 focus:border-primary-4 hover:border-primary-4 before:w-2 before:h-2 before:top-[30%] before:left-[30%] before:content-[''] before:absolute before:bg-neutral-1 before:rounded-full transition duration-75"
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
