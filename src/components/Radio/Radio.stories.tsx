import type { Meta, StoryObj } from '@storybook/react';
import { Radio, RadioProps } from './Radio';

const meta: Meta<RadioProps> = {
  title: 'EventFuzz Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Radio',
  },
};
