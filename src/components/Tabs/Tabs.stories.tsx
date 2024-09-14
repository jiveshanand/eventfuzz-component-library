import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Tabs, TabsProps } from './Tabs';

const meta: Meta<TabsProps> = {
  title: 'EventFuzz Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const tabIcon = (
  <svg
    width="25"
    height="24"
    viewBox="0 0 25 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 12.5C20 11.12 21.12 10 22.5 10V9C22.5 5 21.5 4 17.5 4H7.5C3.5 4 2.5 5 2.5 9V9.5C3.88 9.5 5 10.62 5 12C5 13.38 3.88 14.5 2.5 14.5V15C2.5 19 3.5 20 7.5 20H17.5C21.5 20 22.5 19 22.5 15C21.12 15 20 13.88 20 12.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.5 14.75L15.5 8.75"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15.4945 14.75H15.5035"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M9.49451 9.25H9.50349"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const Underlined: Story = {
  args: {
    options: [
      { label: 'Dome', icon: tabIcon },
      { label: 'Dome2', icon: tabIcon },
      { label: 'Dome3', icon: tabIcon },
      { label: 'Dome4', icon: tabIcon },
    ],
    className: '',
    showUnderline: true,
    variant: 'default',
  },
};

export const Outlined: Story = {
  args: {
    options: [
      { label: 'Dome', icon: tabIcon },
      { label: 'Dome2', icon: tabIcon },
      { label: 'Dome3', icon: tabIcon },
      { label: 'Dome4', icon: tabIcon },
    ],
    className: '',
    variant: 'outlined',
  },
};

export const Pills: Story = {
  args: {
    options: [
      { label: 'Dome', icon: tabIcon },
      { label: 'Dome2', icon: tabIcon },
      { label: 'Dome3', icon: tabIcon },
      { label: 'Dome4', icon: tabIcon },
    ],
    className: '',
    variant: 'pills',
  },
};
