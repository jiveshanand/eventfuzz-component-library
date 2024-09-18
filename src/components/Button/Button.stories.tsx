import type { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from './Button';

// Define the meta configuration for Storybook
const meta: Meta<ButtonProps> = {
  title: 'EventFuzz Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  render: (args) => <Button size="default" disabled buttonType="primary" />,
};

export const FullWidth: Story = {
  render: (args) => (
    <Button
      size="fullWidth"
      disabled={false}
      //icon="https://docs.material-tailwind.com/icons/google.svg"
      buttonType="secondary"
    />
  ),
};
