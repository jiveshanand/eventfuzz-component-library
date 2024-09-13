import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { InputField, InputFieldProps } from './InputField';

const meta: Meta<InputFieldProps> = {
  title: 'EventFuzz Components/InputField',
  component: InputField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [inputValue, setInputValue] = useState<string>(''); // State for managing value

    const handleValueChange = (value: string) => {
      setInputValue(value); // Update state with the value
    };

    return (
      <InputField
        {...args}
        value={inputValue} // Pass value to the component
        onChange={handleValueChange} // Pass handler function to the component
      />
    );
  },
  args: {
    placeholder: "Placeholder",
    label: 'Label',
    subtext: 'Optional helper text',
    className: 'w-[520px]',
    value: "",
    hasError: false,
    rightIcon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 1.5V3.75"
          stroke="#222222"
          stroke-width="1.125"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 1.5V3.75"
          stroke="#222222"
          stroke-width="1.125"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M2.625 6.8175H15.375"
          stroke="#222222"
          stroke-width="1.125"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M15.75 6.375V12.75C15.75 15 14.625 16.5 12 16.5H6C3.375 16.5 2.25 15 2.25 12.75V6.375C2.25 4.125 3.375 2.625 6 2.625H12C14.625 2.625 15.75 4.125 15.75 6.375Z"
          stroke="#222222"
          stroke-width="1.125"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M8.99637 10.275H9.00311"
          stroke="#222222"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.22049 10.275H6.22723"
          stroke="#222222"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.22049 12.525H6.22723"
          stroke="#222222"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  },
};
