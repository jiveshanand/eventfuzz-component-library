export interface CheckboxProps {
  label: string;
  value: string;
  subtext?: string;
  checked?: boolean;
  onChange: (value: string) => void;
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Checkbox = ({
  label,
  subtext,
  value,
  checked,
  onChange,
  className = '',
}: CheckboxProps) => {
  const checkboxId = `checkbox-${value}`;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex items-center relative">
        <input
          id={checkboxId}
          aria-describedby={subtext ? `checkbox-${subtext}` : undefined}
          type="checkbox"
          value={value}
          checked={checked}
          onChange={handleChange}
          className="peer appearance-none w-4 h-4 rounded border accent-primary-4 bg-shade-1 border-neutral-5 checked:border-primary-4 checked:bg-primary-4 hover:border-primary-4 focus:ring-2 focus:ring-offset-2 focus:ring-primary-4 focus:border-primary-4 focus-visible:outline-none transition duration-75"
        />
        <svg
          className="absolute inset-0 m-auto pointer-events-none z-10 hidden peer-checked:block text-shade-1"
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="10"
          viewBox="0 0 12 10"
          fill="none"
        >
          <path
            d="M4 7.28L1.22 4.5L0.273334 5.44L4 9.16667L12 1.16667L11.06 0.226667L4 7.28Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div className="ms-2 flex flex-col gap-1">
        <label
          htmlFor={checkboxId}
          className="text-2xl font-regular text-shade-4"
        >
          {label}
        </label>
        {subtext && (
          <p
            id={`${checkboxId}-text`}
            className="text-xl font-regular text-neutral-8"
          >
            {subtext}
          </p>
        )}
      </div>
    </div>
  );
};
