import { render, screen } from '@testing-library/react';
import NotFoundPage from './NotFoundPage';

test('NotFoundPage is rendered', () => {
  render(<NotFoundPage />);

  const errorNumber = screen.getByText('404');
  const errorText = screen.getByText('Page not found');

  expect(errorNumber).toBeInTheDocument();
  expect(errorText).toBeInTheDocument();
});
