import React from 'react';

export interface RadioProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Radio = ({
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: RadioProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <label className="custom-radio flex items-center">
        <input type="radio" name="option" value="1" className="hidden" />
        <span className="radio-checkmark"></span>
        <span className="ml-3 text-shade-4">Option 1</span>
      </label>
      <label className="custom-radio flex items-center">
        <input type="radio" name="option" value="2" className="hidden" />
        <span className="radio-checkmark"></span>
        <span className="ml-3">Option 2</span>
      </label>
      <label className="custom-radio flex items-center">
        <input type="radio" name="option" value="3" className="hidden" />
        <span className="radio-checkmark"></span>
        <span className="ml-3">Option 3</span>
      </label>
    </div>
  );
};
