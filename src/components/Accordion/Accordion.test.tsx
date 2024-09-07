import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Accordion } from './Accordion';

describe('Accordion Component', () => {
  const items = [
    { title: 'Item 1', content: 'Content 1' },
    { title: 'Item 2', content: 'Content 2' },
    { title: 'Item 3', content: 'Content 3' },
  ];

  test('renders Accordion component with given items', () => {
    const { getByText } = render(<Accordion items={items} />);
    items.forEach((item) => {
      expect(getByText(item.title)).toBeInTheDocument();
    });
  });

  test('toggles AccordionItem open/close state', () => {
    const { getByText, queryByText } = render(<Accordion items={items} />);
    const firstItemTitle = getByText('Item 1');
    fireEvent.click(firstItemTitle);
    const firstItemContent = getByText('Content 1');
    expect(firstItemContent).toBeVisible();
    fireEvent.click(firstItemTitle);
    expect(firstItemContent).not.toBeVisible();
  });
  test('allows multiple items to be opened when multiple is true', () => {
    const { getByText } = render(<Accordion items={items} multiple />);
    const firstItemTitle = getByText('Item 1');
    const secondItemTitle = getByText('Item 2');
    fireEvent.click(firstItemTitle);
    fireEvent.click(secondItemTitle);
    expect(getByText('Content 1')).toBeInTheDocument();
    expect(getByText('Content 2')).toBeInTheDocument();
  });

  test('allows only one item to be opened when multiple is false', () => {
    const { getByText, queryByText } = render(<Accordion items={items} />);
    const firstItemTitle = getByText('Item 1');
    const secondItemTitle = getByText('Item 2');
    fireEvent.click(firstItemTitle);
    fireEvent.click(secondItemTitle);
    expect(queryByText('Content 1')).not.toBeInTheDocument();
    expect(getByText('Content 2')).toBeInTheDocument();
  });

  test('sets content height correctly when AccordionItem is opened', () => {
    const { getByText, getByRole } = render(<Accordion items={items} />);
    const firstItemTitle = getByText('Item 1');
    fireEvent.click(firstItemTitle);
    const contentDiv = getByRole('region');
    expect(contentDiv).toHaveStyle('max-height: 0px');
    fireEvent.click(firstItemTitle);
    expect(contentDiv).toHaveStyle('max-height: 0px');
  });
});
