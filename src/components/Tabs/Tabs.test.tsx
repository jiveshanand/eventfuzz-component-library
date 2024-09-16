import { render, fireEvent, screen } from '@testing-library/react';
import { Tabs } from './Tabs';

describe('Tabs Component', () => {
  const options = [
    { label: 'Tab 1', icon: <span>🔍</span> },
    { label: 'Tab 2' },
    { label: 'Tab 3', icon: <span>⚙️</span> },
  ];

  it('should render all tab options correctly', () => {
    render(<Tabs options={options} onChange={() => {}} />);

    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
      if (option.icon) {
        expect(
          screen.getByText(option.icon.props.children),
        ).toBeInTheDocument();
      }
    });
  });

  it('should apply correct styles based on variant prop', () => {
    const { container } = render(
      <Tabs options={options} variant="pills" onChange={() => {}} />,
    );
    const tabs = container.querySelectorAll('div[role="tab"]');

    tabs.forEach((tab) => {
      expect(tab).toHaveClass('rounded-full');
    });

    // Testing "default" variant
    const { container: defaultContainer } = render(
      <Tabs options={options} variant="default" onChange={() => {}} />,
    );
    const defaultTabs = defaultContainer.querySelectorAll('div[role="tab"]');

    defaultTabs.forEach((tab) => {
      expect(tab).toHaveClass('rounded-lg');
    });
  });

  it('should highlight the active tab', () => {
    render(<Tabs options={options} onChange={() => {}} variant="pills" />);
    const firstTab = screen.getByText('Tab 1');
    const secondTab = screen.getByText('Tab 2');

    fireEvent.click(firstTab);
    expect(firstTab).toHaveClass('bg-shade-1');
    expect(secondTab).not.toHaveClass('bg-shade-1');
  });

  it('should call onChange with correct parameters when a tab is clicked', () => {
    const handleChange = jest.fn();
    render(<Tabs options={options} onChange={handleChange} />);

    const firstTab = screen.getByText('Tab 1');
    fireEvent.click(firstTab);

    expect(handleChange).toHaveBeenCalledWith(0, 'Tab 1');
  });

  it('should conditionally render underline based on showUnderline prop', () => {
    const { container: withUnderline } = render(
      <Tabs options={options} showUnderline={true} variant="default" />,
    );
    expect(withUnderline.querySelector('div.w-6')).toBeInTheDocument();

    const { container: withoutUnderline } = render(
      <Tabs options={options} showUnderline={false} variant="default" />,
    );
    expect(withoutUnderline.querySelector('div.w-6')).not.toBeInTheDocument();
  });
});
