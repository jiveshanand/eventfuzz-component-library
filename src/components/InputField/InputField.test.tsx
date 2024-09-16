import { render, screen, fireEvent } from '@testing-library/react';
import { InputField } from './InputField'; // Adjust the import path as needed

describe('InputField Component', () => {
  // Test if the component renders correctly with required props
  it('should render input field with placeholder', () => {
    render(
      <InputField placeholder="Enter text" value="" onChange={() => {}} />,
    );
    expect(screen.getByPlaceholderText('Enter text')).toBeInTheDocument();
  });

  // Test if label is displayed when provided
  it('should render a label if provided', () => {
    render(
      <InputField
        label="Name"
        placeholder="Enter your name"
        value=""
        onChange={() => {}}
      />,
    );
    expect(screen.getByText('Name')).toBeInTheDocument();
  });

  // Test if input field changes value correctly
  it('should call onChange handler with the correct value', () => {
    const handleChange = jest.fn();
    render(
      <InputField placeholder="Enter text" value="" onChange={handleChange} />,
    );

    fireEvent.change(screen.getByPlaceholderText('Enter text'), {
      target: { value: 'New value' },
    });
    expect(handleChange).toHaveBeenCalledWith('New value');
  });

  // Test if error styling is applied when hasError is true
  it('should apply error styles when hasError is true', () => {
    const { container } = render(
      <InputField
        placeholder="Enter text"
        value=""
        onChange={() => {}}
        hasError={true}
      />,
    );
    const inputElement = container.querySelector('input');
    expect(inputElement).toHaveClass('bg-support-error-3');
    expect(inputElement).toHaveClass('border-support-error-1');
  });

  // Test if input type changes correctly
  it('should render input with type "password" when inputType is password', () => {
    render(
      <InputField
        placeholder="Enter password"
        value=""
        onChange={() => {}}
        inputType="password"
      />,
    );
    expect(screen.getByPlaceholderText('Enter password')).toHaveAttribute(
      'type',
      'password',
    );
  });

  // Test if rightIcon is displayed when provided
  it('should render rightIcon if provided', () => {
    render(
      <InputField
        placeholder="Enter text"
        value=""
        onChange={() => {}}
        rightIcon={<span data-testid="icon">Icon</span>}
      />,
    );
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  // Test if subtext is displayed when provided
  it('should render subtext if provided', () => {
    render(
      <InputField
        placeholder="Enter text"
        value=""
        onChange={() => {}}
        subtext="This is a subtext"
      />,
    );
    expect(screen.getByText('This is a subtext')).toBeInTheDocument();
  });
});
