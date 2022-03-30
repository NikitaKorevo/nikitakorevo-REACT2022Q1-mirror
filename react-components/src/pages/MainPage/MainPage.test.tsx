import { render, screen } from '@testing-library/react';
import MainPage from './MainPage';

test('All cards are rendered', () => {
  render(<MainPage />);
  const userCards = screen.getAllByRole('img');
  expect(userCards.length).toBe(10);
});
