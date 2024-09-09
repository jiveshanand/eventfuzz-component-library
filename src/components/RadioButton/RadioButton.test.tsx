import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RadioButton } from './RadioButton';

test('applies primary class when primary prop is true', () => {
  const renderedComponent = render(
    <RadioButton
      options={[{ label: 'Option 1', value: '1' }]}
      name="options"
    />,
  );
});
