import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toggle, ToggleProps } from './Toggle';

const meta: Meta<ToggleProps> = {
  title: 'EventFuzz Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [selectedValue, setSelectedValue] = useState<boolean>(false); // State for managing selected value

    const handleValueChange = (value: boolean) => {
      setSelectedValue(value); // Update state with the selected value
    };

    return (
      <Toggle
        {...args}
        checked={selectedValue} // Pass selected value to the component
        onChange={handleValueChange} // Pass handler function to the component
      />
    );
  },
  args: {
    label: 'Terms & Conditions',
    subtext: 'Read terms and conditions for more information',
    value: 'tc',
    className: '',
  },
};
