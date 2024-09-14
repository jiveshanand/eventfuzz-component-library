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

    const handleTabClick = (index: number) => {
      setActiveTab(index);
      onChange?.(index, options[index].label);
    };

    // Define common styles
    const commonTabStyles = 'cursor-pointer focus:ring-2 focus:ring-primary-4';

    // Variant-specific styles
    const variantStyles = {
      pills: 'p-1 rounded-full bg-neutral-2',
      outlined: 'gap-4',
      default: 'gap-4',
    }[variant];

    const tabStyle = {
      pills: `w-[151px] py-2 px-2.5 flex justify-center text-sm font-semibold rounded-full hover:bg-shade-1 focus:bg-shade-1 focus:z-10 ${commonTabStyles}`,
      outlined: `flex items-center px-3 py-2 gap-2 rounded-lg text-shade-4 border border-neutral-6 hover:bg-shade-2 focus:bg-shade-1 focus:text-primary-4 focus:ring-1 focus:ring-primary-4 focus:border-primary-4 ${commonTabStyles}`,
      default:
        'flex flex-col gap-2 p-2 peer rounded-lg cursor-pointer focus:text-primary-4 focus:ring-2 focus:ring-primary-4',
    }[variant];

    return (
      <div
        className={`flex items-center ${variantStyles} ${className}`}
        role="tabs"
      >
        {options.map((item, index) => (
          <div className="flex flex-col gap-2" key={item.label}>
            <div
              className={tabStyle}
              onClick={() => handleTabClick(index)}
              tabIndex={0}
              role="tab"
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
