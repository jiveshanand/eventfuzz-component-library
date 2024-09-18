import React from 'react';

export interface ButtonProps {
  size: 'default' | 'fullWidth';
  onClick?: () => void;
  disabled: boolean;
  buttonType?: 'primary' | 'secondary' | 'tertiary';
  icon?: string;
}

const Button: React.FC<ButtonProps> = ({
  size,
  disabled,
  buttonType,
  icon,
}) => {
  console.log(size, disabled, icon);
  let buttonClass = '';
  switch (buttonType) {
    case 'secondary':
      buttonClass =
        'bg-shade-4 focus:outline-none focus:ring-2 focus:ring-shade-4 rounded-md text-shade-1 text-center';
      break;
    case 'tertiary':
      buttonClass = 'rounded-lg text-shade-1 text-center';
      break;
    default:
      buttonClass = `${
        disabled
          ? 'disabled:bg-neutral-3'
          : 'bg-gradient-3 focus:outline-none focus:ring-2 focus:ring-shade-4 hover:bg-gradient-2'
      } 
        rounded-lg text-shade-1 text-center`;
      break;
  }
  return (
    <button
      className={`${size === 'default' ? 'px-4 py-2 text-sm' : 'px-6 py-2 text-base'} ${buttonClass}`}
      type="button"
      disabled={disabled}
    >
      {icon && <img src={icon} alt="metamask" className="h-5 w-5 mr-2" />}
      Button
    </button>
  );
};

export { Button };
