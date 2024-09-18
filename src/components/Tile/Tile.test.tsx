import { render, screen } from '@testing-library/react';
import { Tile } from './Tile';
import { Wifi } from 'iconsax-react';

describe('Tile Component', () => {
  // Test 1: Renders Tile with icon and text
  test('renders Tile with icon and text', () => {
    render(
      <Tile icon={<Wifi />} isSelected={false}>
        WIFI
      </Tile>,
    );

    // Check if the text is rendered
    expect(screen.getByText('WIFI')).toBeInTheDocument();

    // Check if the icon is rendered
    expect(screen.getByTestId('Wifi')).toBeInTheDocument(); // Use `data-testid` if needed for icon
  });

  // Test 2: Renders Tile with default (unselected) state
  test('renders Tile with unselected state (default)', () => {
    render(
      <Tile icon={<Wifi />} isSelected={false}>
        WIFI
      </Tile>,
    );
    const tile = screen.getByText('WIFI').closest('div');

    // Check if the default border class is applied
    expect(tile).toHaveClass('border-neutral-3');

    // Ensure it does not have selected state classes
    expect(tile).not.toHaveClass('border-shade-4 bg-neutral-1');
  });

  // Test 3: Renders Tile with selected state
  test('renders Tile with selected state', () => {
    render(
      <Tile icon={<Wifi />} isSelected={true}>
        WIFI
      </Tile>,
    );
    const tile = screen.getByText('WIFI').closest('div');

    // Check if the selected state classes are applied
    expect(tile).toHaveClass('border-shade-4 bg-neutral-1');

    // Ensure it does not have the unselected border class
    expect(tile).not.toHaveClass('border-neutral-3');
  });

  // Test 4: Hover, Active, and Focus classes
  test('renders Tile with hover, active, and focus styles in unselected state', () => {
    render(
      <Tile icon={<Wifi />} isSelected={false}>
        WIFI
      </Tile>,
    );
    const tile = screen.getByText('WIFI').closest('div');

    // Check if the hover, active, and focus classes exist for unselected state
    expect(tile).toHaveClass(
      'hover:border-neutral-6 active:border-shade-4 focus:ring-1 focus:ring-shade-4',
    );
  });
});
