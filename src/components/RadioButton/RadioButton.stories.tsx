import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RadioButton, RadioButtonProps } from './RadioButton';

const meta: Meta<RadioButtonProps> = {
  title: 'EventFuzz Components/RadioButton',
  component: RadioButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string | undefined>(undefined); // State for managing selected value

    const handleValueChange = (value: string) => {      
      setSelectedValue(value); // Update state with the selected value
    };

    return (
      <RadioButton
        name="options"
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 2', value: '2' },
          { label: 'Option 3', value: '3' },
          { label: 'Option 4', value: '4' },
        ]}
        defaultValue='1'
        value={selectedValue} // Pass selected value to the component
        onValueChange={handleValueChange} // Pass handler function to the component
      />
    );
  },
};
