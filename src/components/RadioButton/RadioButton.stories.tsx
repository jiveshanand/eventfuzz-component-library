import type { Meta, StoryObj } from '@storybook/react';
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
  args: {
    name: 'options',
  },
};
