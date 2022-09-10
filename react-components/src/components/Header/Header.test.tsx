import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

test('Header is rendered', () => {
  render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const mainElement = screen.getByText('main');
  const aboutUs = screen.getByText('about us');

  expect(mainElement).toBeInTheDocument();
  expect(aboutUs).toBeInTheDocument();
});
