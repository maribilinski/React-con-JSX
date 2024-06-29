import { render, screen } from '@testing-library/react';
import Primer from './Primer';

test('renders learn react link', () => {
  render(<Primer />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
