import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Checkbox, CheckboxProps } from './Checkbox';

const meta: Meta<CheckboxProps> = {
  title: 'EventFuzz Components/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string>(''); // State for managing selected value

    const handleValueChange = (value: string) => {
      setSelectedValue(value); // Update state with the selected value
    };

    return (
      <Checkbox
        label="Terms & Conditions"
        subtext="Read terms and conditions for more information"
        value={selectedValue} // Pass selected value to the component
        onChange={handleValueChange} // Pass handler function to the component
      />
    );
  },
};
