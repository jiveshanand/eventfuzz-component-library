import type { Meta, StoryObj } from '@storybook/react';
import { Tile, TileProps } from './Tile';
import { Wifi } from 'iconsax-react';

// Define the meta configuration for Storybook
const meta: Meta<TileProps> = {
  title: 'EventFuzz Components/Tile',
  component: Tile,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default tile story (Unselected)
export const Default: Story = {
  render: (args) => (
    <Tile icon={<Wifi />} isSelected={false}>
      <div>WIFI</div>
    </Tile>
  ),
};

// Selected tile story
export const Selected: Story = {
  render: (args) => (
    <Tile icon={<Wifi />} isSelected={true}>
      <div>WIFI</div>
    </Tile>
  ),
};
