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
  args: {
    label: 'Keypad',
    subtext: "Guests can open the door with a code"
  },
};
