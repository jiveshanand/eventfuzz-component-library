import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Callouts, CalloutsProps } from './Callouts';

const meta: Meta<CalloutsProps> = {
  title: 'EventFuzz Components/Callouts',
  component: Callouts,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Your tickets',
    variant: 'cancelation',
    codeLabel: 'Confirmation code:',
    codeValue: 'XMPQKAPZ6D',
    actionStatus: 'CANCELED',
    descName: '2x VIP tickets',
    description: (
      <>
        <span className="text-base font-semibold">This is a rare find.</span>{' '}
        Hope’s place on EventBuzz is usually fully housefull.
      </>
    ),
    className: '',
    iconRight: (
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.99852 3.08002L3.97562 10.6543L16.129 26.2235L28.0368 10.6543L21.8922 3.08002H9.99852Z"
          fill="#58FA80"
        />
        <path
          d="M29.7486 11.4777L16.0041 29.8989L2.25191 11.4775L15.8133 16.0644L16.0043 16.129L16.1952 16.0644L29.7486 11.4777Z"
          stroke="#00878D"
          strokeWidth="1.1916"
        />
        <path
          d="M1.01477 10.6351L9.19507 1.10498H22.4729L30.9977 10.6391"
          stroke="#00878D"
          strokeWidth="1.1916"
        />
        <path
          d="M9.34042 1.29218L16.0111 30.0512L22.668 1.29218"
          stroke="#00878D"
          strokeWidth="1.1916"
        />
      </svg>
    ),
  },
};
