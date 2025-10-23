import { render, screen } from '@testing-library/react';
import { Typography } from '../ui/Typography';

describe('Typography Component', () => {
  it('renders with default variant', () => {
    render(<Typography>Hello World</Typography>);
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('renders heading variants with correct tags', () => {
    const { rerender } = render(<Typography variant="h1">Heading 1</Typography>);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();

    rerender(<Typography variant="h2">Heading 2</Typography>);
    expect(screen.getByRole('heading', { level: 2 })).toBeInTheDocument();
  });

  it('applies color variants', () => {
    const { rerender } = render(<Typography color="primary">Primary</Typography>);
    expect(screen.getByText('Primary')).toHaveStyle('color: rgb(30, 41, 59)');

    rerender(<Typography color="secondary">Secondary</Typography>);
    expect(screen.getByText('Secondary')).toHaveStyle('color: rgb(100, 116, 139)');
  });

  it('applies text alignment', () => {
    render(<Typography align="center">Centered</Typography>);
    expect(screen.getByText('Centered')).toHaveStyle('text-align: center');
  });

  it('applies gutterBottom margin', () => {
    render(<Typography gutterBottom>With margin</Typography>);
    expect(screen.getByText('With margin')).toHaveStyle('margin-bottom: 1rem');
  });

  it('applies noWrap style', () => {
    render(<Typography noWrap>No wrap text</Typography>);
    expect(screen.getByText('No wrap text')).toHaveStyle('white-space: nowrap');
  });

  it('applies maxWidth and margin styles', () => {
    render(
      <Typography maxWidth="500px" mx="auto">
        With constraints
      </Typography>
    );
    const element = screen.getByText('With constraints');
    expect(element).toHaveStyle('max-width: 500px');
    expect(element).toHaveStyle('margin-left: auto');
    expect(element).toHaveStyle('margin-right: auto');
  });

  it('applies opacity', () => {
    render(<Typography opacity={0.5}>Semi transparent</Typography>);
    expect(screen.getByText('Semi transparent')).toHaveStyle('opacity: 0.5');
  });
});
