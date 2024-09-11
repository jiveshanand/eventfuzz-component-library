// Checkbox.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Checkbox } from './Checkbox';

describe('Checkbox Component', () => {
  // Test case to render the Checkbox with props
  test('renders Checkbox with label and subtext', () => {
    render(
      <Checkbox
        label="Test Label"
        subtext="Test Subtext"
        value="test"
        onChange={() => {}}
      />,
    );

    // Check if the label and subtext are rendered correctly
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
    expect(screen.getByText('Test Subtext')).toBeInTheDocument();
  });

  // Test case to check if the Checkbox is checked
  test('renders Checkbox as checked when checked prop is true', () => {
    render(
      <Checkbox
        label="Test Label"
        checked={true}
        value="test"
        onChange={() => {}}
      />,
    );

    // Check if the checkbox is in checked state
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  // Test case to check if the Checkbox is unchecked
  test('renders Checkbox as unchecked when checked prop is false', () => {
    render(
      <Checkbox
        label="Test Label"
        checked={false}
        value="test"
        onChange={() => {}}
      />,
    );

    // Check if the checkbox is not checked
    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).not.toBeChecked();
  });

  // Test case to simulate user clicking the Checkbox
  test('calls onChange with the correct value when Checkbox is clicked', () => {
    const handleChange = jest.fn();
    render(
      <Checkbox label="Test Label" value="test" onChange={handleChange} />,
    );

    // Simulate clicking the checkbox
    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    // Verify if the onChange handler was called with the correct value
    expect(handleChange).toHaveBeenCalledWith('test');
  });

  // Test case to verify conditional rendering of SVG icon
  test('renders SVG icon when Checkbox is checked', () => {
    render(
      <Checkbox
        label="Test Label"
        checked={true}
        value="test"
        onChange={() => {}}
      />,
    );

    // Check if the SVG icon is visible
    const svgIcon = screen.getByRole('svg'); // Adjust role or method based on actual implementation
    expect(svgIcon).toBeVisible();
  });

  // Test case for conditional className
  test('applies additional className', () => {
    render(
      <Checkbox
        label="Test Label"
        className="bg-blue-500"
        value="test"
        onChange={() => {}}
      />,
    );

    // Check if the custom class is applied
    const checkboxContainer = screen.getByText('Test Label').closest('div');
    expect(checkboxContainer).toHaveClass('bg-blue-500');
  });
});
