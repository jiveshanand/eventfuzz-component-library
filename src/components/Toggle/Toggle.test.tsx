import { render, fireEvent, screen } from '@testing-library/react';
import { Toggle } from './Toggle';

// Mock function for testing
const mockOnChange = jest.fn();

describe('Toggle Component', () => {
  it('renders correctly with default props', () => {
    render(<Toggle onChange={mockOnChange} />);

    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('renders label and subtext correctly', () => {
    render(<Toggle label="Toggle Label" subtext="Toggle Subtext" onChange={mockOnChange} />);

    expect(screen.getByText('Toggle Label')).toBeInTheDocument();
    expect(screen.getByText('Toggle Subtext')).toBeInTheDocument();
  });

  it('renders with checked state', () => {
    render(<Toggle checked={true} onChange={mockOnChange} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeChecked();
  });

  it('renders with disabled state and prevents onChange', () => {
    render(<Toggle checked={true} disabled={true} onChange={mockOnChange} />);

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeDisabled();

    // Click the checkbox
    fireEvent.click(checkbox);
    expect(mockOnChange).not.toHaveBeenCalled();
  });

  it('calls onChange callback with correct value', () => {
    render(<Toggle checked={false} onChange={mockOnChange} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(mockOnChange).toHaveBeenCalledWith(true);
  });
});
