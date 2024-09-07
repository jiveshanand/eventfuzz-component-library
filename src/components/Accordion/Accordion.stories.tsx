import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionProps } from './Accordion';

const meta: Meta<AccordionProps> = {
  title: 'EventFuzz Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

const accordionItems = [
  {
    title: 'What is  EventFuzz?',
    content: (
      <p>
        EventFuzz is comprehensive protection included for free with every
        booking. It includes protection from Host cancellations, listing
        inaccuracies, and other issues like trouble checking in, as well as a
        24-hour safety line. Learn more about how AirCover protects your booking
      </p>
    ),
  },
  {
    title: 'Event fuzz Accordion Item 2',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Dummy Accordion Item 3',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];

export const SingleAccordion: Story = {
  args: {
    items: accordionItems,
  },
  parameters: {
    docs: {
      description: {
        story: 'This accordion only allows one item to be expanded at a time.',
      },
    },
  },
};

export const MultipleAccordion: Story = {
  args: {
    items: accordionItems,
    multiple: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'This accordion allows multiple items to be expanded simultaneously.',
      },
    },
  },
};
