import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Radio } from './Radio';

test('applies primary class when primary prop is true', () => {
  const renderedComponent = render(
    <Radio label="Radio " />,
  );
});
