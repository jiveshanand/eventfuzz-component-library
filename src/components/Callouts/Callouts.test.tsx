import { render, screen } from '@testing-library/react';
import { Callouts } from './Callouts';

describe('Callouts Component', () => {
  it('renders the highlight variant correctly', () => {
    render(
      <Callouts
        title="Test Title"
        actionStatus="Active"
        variant="highlight"
        description="This is a highlight description"
      />
    );

    expect(screen.getByText('This is a highlight description')).toBeInTheDocument();
    expect(screen.queryByText('Test Title')).not.toBeInTheDocument(); // 'Test Title' should not be present in highlight variant
  });

  it('renders the default cancelation variant correctly', () => {
    render(
      <Callouts
        title="Test Title"
        actionStatus="Inactive"
        descName="Description Name"
        codeLabel="Code Label:"
        codeValue="123456"
      />
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Inactive')).toBeInTheDocument();
    expect(screen.getByText('Description Name')).toBeInTheDocument();
    expect(screen.getByText('Code Label:')).toBeInTheDocument();
    expect(screen.getByText('123456')).toBeInTheDocument();
  });

  it('renders optional props correctly', () => {
    const iconRight = <span data-testid="icon">Icon</span>;
    const thumbnail = <img src="thumbnail.jpg" alt="thumbnail" />;
    
    render(
      <Callouts
        title="Test Title"
        actionStatus="Active"
        iconRight={iconRight}
        thumbnail={thumbnail}
      />
    );

    expect(screen.getByTestId('icon')).toBeInTheDocument();
    expect(screen.getByAltText('thumbnail')).toBeInTheDocument();
  });

  it('handles missing optional props', () => {
    render(
      <Callouts
        title="Test Title"
        actionStatus="Active"
      />
    );

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.queryByText('Code Label:')).not.toBeInTheDocument();
    expect(screen.queryByText('123456')).not.toBeInTheDocument();
  });

  it('applies custom class names', () => {
    render(
      <Callouts
        title="Test Title"
        actionStatus="Active"
        className="custom-class"
      />
    );

    expect(screen.getByText('Test Title').closest('div')).toHaveClass('custom-class');
  });
});
