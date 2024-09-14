import React from 'react';

export interface ToggleProps {
  label: string;
  subtext?: string;
  value?: string;
  checked?: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
  disabled?: boolean;
}

/**
 * A custom toggle switch component.
 */
export const Toggle = ({
  label,
  subtext,
  value,
  checked = false,
  onChange,
  className = '',
  disabled = false,
}: ToggleProps) => {
  return (
    <div className={`flex items-center justify-between gap-3 min-w-[160px] ${className}`}>
      <label htmlFor="switch-component-desc">
        <div className="flex flex-col gap-2">
          <p className="text-2xl text-shade-4 font-regular">{label}</p>
          {subtext && <p className="text-xl text-neutral-8 font-regular">{subtext}</p>}
        </div>
      </label>

      <div className="relative inline-flex items-center">
        <input
          id="switch-component-desc"
          type="checkbox"
          checked={checked}
          value={value}
          onChange={(event) => !disabled && onChange(event.target.checked)}
          className="peer appearance-none w-6 h-5 rounded-full bg-neutral-5 hover:bg-neutral-7 checked:bg-gradient-3 cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-neutral-7 focus:checked:ring-primary-3"
        />
        <span className="absolute pointer-events-none top-0 left-0 w-5 h-5 bg-shade-1 rounded-full border-2 border-neutral-5 peer-hover:border-neutral-7 transition-transform duration-300 peer-checked:translate-x-3 peer-checked:border-primary-3 peer-hover:peer-checked:border-primary-3 cursor-pointer">
          {checked && (
            <span className="inline-flex absolute inset-0 justify-center items-center transition duration-150">
              <svg
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 7.78L2.22 5L1.27333 5.94L5 9.66667L13 1.66667L12.06 0.726669L5 7.78Z"
                  fill="url(#paint0_linear_858_880)"
                  stroke="url(#paint1_linear_858_880)"
                  strokeWidth="0.5"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_858_880"
                    x1="1.60408"
                    y1="1.52016"
                    x2="14.0302"
                    y2="3.64668"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00B195" />
                    <stop offset="0.985" stopColor="#00878D" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_858_880"
                    x1="1.60408"
                    y1="1.52016"
                    x2="14.0302"
                    y2="3.64668"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00B195" />
                    <stop offset="0.985" stopColor="#00878D" />
                  </linearGradient>
                </defs>
              </svg>
            </span>
          )}
        </span>
      </div>
    </div>
  );
};
