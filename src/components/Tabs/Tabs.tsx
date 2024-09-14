import React, { useState } from 'react';

export interface TabsProps {
  options: { label: string; icon?: React.ReactNode }[];
  onChange: (index: number, label?:string) => void;
  className?: string;
  showUnderline?: boolean;
  variant?: 'default' | 'outlined' | 'pills';
}

/**
 * A custom Tabs component.
 */
export const Tabs = ({
  options = [],
  onChange,
  showUnderline,
  className = '',
  variant,
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    onChange(index, options[index].label);
  };

  if (variant === 'pills') {
    return (
      <div className={`flex items-center p-1 rounded-full bg-neutral-2 ${className}`}>
        {options.map((item, index) => (
          <div
            className={`w-[151px] cursor-pointer rounded-full hover:bg-shade-1 focus:ring-2 focus:ring-primary-4 focus:bg-shade-1 focus:z-10 ${activeTab === index ? 'bg-shade-1' : ''}`}
            tabIndex={0}
            key={item.label}
            onClick={() => handleTabClick(index)}
            role='tab'
          >
            <div className="py-2 px-2.5 flex justify-center text-sm font-semibold">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (variant === 'outlined') {
    return (
      <div className={`flex items-center gap-4 ${className}`}>
        {options.map((item, index) => (
          <div
            className="flex items-center px-3 py-2 gap-2 rounded-lg cursor-pointer text-shade-4 border border-neutral-6 hover:bg-shade-2 focus:bg-shade-1 focus:text-primary-4 focus:ring-1 focus:ring-primary-4 focus:border-primary-4"
            tabIndex={0}
            key={item.label}
            onClick={() => handleTabClick(index)}
            role='tab'
          >
            {item.icon && (
              <div className="flex justify-center">{item.icon}</div>
            )}
            <div className="text-sm font-regular">{item.label}</div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {options.map((item, index) => (
        <div
          className="flex flex-col gap-2"
          onClick={() => handleTabClick(index)}
        >
          <div
            className="flex flex-col gap-2 p-2 peer rounded-lg cursor-pointer focus:text-primary-4 focus:ring-2 focus:ring-primary-4"
            tabIndex={0}
            key={item.label}
            role='tab'
          >
            {item.icon && (
              <div className="flex justify-center">{item.icon}</div>
            )}
            <div className="text-sm font-semibold">{item.label}</div>
          </div>
          {showUnderline && (
            <div className="w-6 border-b-2 m-auto peer-focus:border-primary-4 peer-hover:border-neutral-5"></div>
          )}
        </div>
      ))}
    </div>
  );
};
