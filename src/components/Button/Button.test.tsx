import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Button } from './Button';

// Test to ensure the button renders correctly
describe('Button Component', () => {
  it('renders the button with correct text', () => {
    render(<Button size="default" disabled={false} buttonType="primary" />);
    const buttonElement = screen.getByText('Button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders the button with the correct type: primary', () => {
    render(<Button size="default" disabled={false} buttonType="primary" />);
    const buttonElement = screen.getByText('Button');
    expect(buttonElement).toHaveClass('bg-gradient-3');
  });

  it('renders a disabled button when the disabled prop is true', () => {
    render(<Button size="default" disabled={true} buttonType="primary" />);
    const buttonElement = screen.getByText('Button');
    expect(buttonElement).toBeDisabled();
  });

  it('fires the onClick event when clicked', () => {
    const handleClick = jest.fn();
    render(
      <Button
        size="default"
        disabled={false}
        buttonType="primary"
        onClick={handleClick}
      />,
    );
    const buttonElement = screen.getByText('Button');
    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders the button with an icon if provided', () => {
    render(
      <Button
        size="default"
        disabled={false}
        buttonType="primary"
        icon="https://upload.wikimedia.org/wikipedia/commons/3/36/MetaMask_Fox.svg"
      />,
    );
    const iconElement = screen.getByAltText('metamask');
    expect(iconElement).toBeInTheDocument();
  });
});
