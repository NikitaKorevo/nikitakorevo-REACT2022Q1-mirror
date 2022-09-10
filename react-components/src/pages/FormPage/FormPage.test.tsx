import { render, screen } from '@testing-library/react';
import FormPage from './FormPage';

test('FormPage is rendered', () => {
  render(<FormPage />);
  const titleDeliveryForm = screen.getByText(/Delivery data/i);
  expect(titleDeliveryForm).toBeInTheDocument();
});
