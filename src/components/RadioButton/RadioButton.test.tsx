import { render, screen, fireEvent } from '@testing-library/react';
import { RadioButton, RadioButtonProps } from './RadioButton';

describe('RadioButton Component', () => {
  const defaultProps: RadioButtonProps = {
    options: [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2' },
      { label: 'Option 3', value: '3' },
      { label: 'Option 4', value: '4' },
    ],
    onValueChange: jest.fn(),
  };

  test('renders with correct options', () => {
    render(<RadioButton {...defaultProps} />);
    
    defaultProps.options.forEach(option => {
      expect(screen.getByLabelText(option.label)).toBeInTheDocument();
    });
  });

  test('selects the correct option when a radio button is clicked', () => {
    render(<RadioButton {...defaultProps} value="2" />);
    
    expect(screen.getByLabelText('Option 2')).toBeChecked();
  });

  test('calls onValueChange with the correct value when a radio button is clicked', () => {
    const onValueChangeMock = jest.fn();
    const props = { ...defaultProps, onValueChange: onValueChangeMock };
    render(<RadioButton {...props} />);
    
    fireEvent.click(screen.getByLabelText('Option 3'));
    
    expect(onValueChangeMock).toHaveBeenCalledWith('3');
  });

  test('applies custom class names', () => {
    render(<RadioButton {...defaultProps} className="custom-class" />);
    
    expect(screen.getByRole('radiogroup')).toHaveClass('custom-class');
  });
});
