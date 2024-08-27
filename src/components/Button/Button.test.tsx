import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

test('applies primary class when primary prop is true', () => {
  const renderedComponent = render(
    <Button primary={true} label="Primary Button" />,
  );
  const buttonElement = renderedComponent.getByText(/Primary Button/i);
  expect(buttonElement).toHaveClass('storybook-button--primary');
});

test('applies secondary class when primary prop is false', () => {
  const renderedComponent = render(
    <Button primary={false} label="Secondary Button" />,
  );
  const buttonElement = renderedComponent.getByText(/Secondary Button/i);
  expect(buttonElement).toHaveClass('storybook-button--secondary');
});

test('applies custom background color', () => {
  const renderedComponent = render(
    <Button backgroundColor="green" label="Custom Color Button" />,
  );
  const buttonElement = renderedComponent.getByText(/Custom Color Button/i);
  expect(buttonElement).toHaveStyle({ backgroundColor: 'green' });
});

test('displays the correct label', () => {
  const renderedComponent = render(<Button label="Test Label" />);
  const buttonElement = renderedComponent.getByText(/Test Label/i);
  expect(buttonElement).toBeInTheDocument();
});

test('handles click events', () => {
  const handleClick = jest.fn();
  const renderedComponent = render(
    <Button onClick={handleClick} label="Click Me" />,
  );
  const buttonElement = renderedComponent.getByText(/Click Me/i);
  userEvent.click(buttonElement);
  expect(handleClick).toHaveBeenCalledTimes(1);
});
