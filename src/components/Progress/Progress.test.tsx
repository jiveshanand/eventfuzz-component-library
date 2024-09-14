import { render } from '@testing-library/react';
import { Progress, ProgressProps } from './Progress';

describe('Progress Component', () => {
  it('renders correctly', () => {
    const { container } = render(<Progress percents={50} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it('renders the progress bar with correct width', () => {
    const { getByRole } = render(<Progress percents={75} />);
    const progressBar = getByRole('progressbar'); // Assuming the role is set; otherwise use another query.
    expect(progressBar).toHaveStyle('width: 75%');
  });

  it('caps the percent value at 100%', () => {
    const { getByRole } = render(<Progress percents={150} />);
    const progressBar = getByRole('progressbar');
    expect(progressBar).toHaveStyle('width: 100%');
  });

  it('applies the correct height for "small" size', () => {
    const { container } = render(<Progress percents={50} size="small" />);
    const outerBar = container.querySelector('div');
    expect(outerBar).toHaveClass('h-2');
  });

  it('applies the correct height for "default" size', () => {
    const { container } = render(<Progress percents={50} size="default" />);
    const outerBar = container.querySelector('div');
    expect(outerBar).toHaveClass('h-3');
  });
});
