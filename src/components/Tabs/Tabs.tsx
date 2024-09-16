import React, { useState } from 'react';

export interface TabsProps {
  options: { label: string; icon?: React.ReactNode }[];
  onChange?: (index: number, label?: string) => void;
  className?: string;
  showUnderline?: boolean;
  variant?: 'default' | 'outlined' | 'pills';
}

/**
 * A custom Tabs component.
 */
export const Tabs: React.FC<TabsProps> = React.memo(
  ({
    options = [],
    onChange,
    showUnderline,
    className = '',
    variant = 'default',
  }: TabsProps) => {
    const [activeTab, setActiveTab] = useState(0);

    // Handler for tab click
    const handleTabClick = (index: number) => {
      setActiveTab(index);
      onChange?.(index, options[index].label);
    };

    // Define common styles
    const commonTabStyles =
      'cursor-pointer focus:ring-primary-4 focus-visible:outline-none';

    // Variant-specific styles
    const variantStyles = {
      pills: 'p-1 rounded-full bg-neutral-2',
      outlined: 'gap-4',
      default: 'gap-4',
    }[variant];

    const tabStyle = {
      pills: `w-[151px] py-2 px-2.5 flex justify-center text-sm font-semibold rounded-full hover:bg-shade-1 focus:bg-shade-1 focus:ring-2 ${commonTabStyles}`,
      outlined: `flex items-center px-3 py-2 gap-2 rounded-lg text-shade-4 border border-neutral-6 hover:bg-shade-2 focus:bg-shade-1 focus:text-primary-4 focus:border-primary-4 focus:ring-1 ${commonTabStyles}`,
      default:
        'peer flex flex-col gap-2 p-2 rounded-lg cursor-pointer focus:text-primary-4 focus:ring-2 focus:ring-primary-4',
    }[variant];

    return (
      <div
        className={`flex items-center ${variantStyles} ${className}`}
        role="tablist"
      >
        {options.map((item, index) => (
          <div key={item.label} className="flex flex-col gap-2">
            <div
              className={`${tabStyle} ${variant === 'pills' ? (activeTab === index ? 'bg-shade-1 shadow-sm' : '') : ''}`}
              onClick={() => handleTabClick(index)}
              tabIndex={0}
              role="tab"
              aria-selected={activeTab === index}
            >
              {item.icon && (
                <div className="flex justify-center">{item.icon}</div>
              )}
              <div
                className={`text-sm flex justify-center ${variant === 'pills' ? 'font-semibold' : 'font-regular'}`}
              >
                {item.label}
              </div>
            </div>
            {variant === 'default' && showUnderline && (
              <div className="w-6 border-b-2 m-auto peer-focus:border-primary-4 peer-hover:border-neutral-5"></div>
            )}
          </div>
        ))}
      </div>
    );
  },
);
