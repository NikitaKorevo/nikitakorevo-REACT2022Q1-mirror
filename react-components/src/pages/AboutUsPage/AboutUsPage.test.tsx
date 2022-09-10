import { render, screen } from '@testing-library/react';
import AboutUsPage from './AboutUsPage';

test('AboutUsPage is rendered', () => {
  render(<AboutUsPage />);
  const aboutUsPageElement = screen.getByText('AboutUsPage');
  expect(aboutUsPageElement).toBeInTheDocument();
});
