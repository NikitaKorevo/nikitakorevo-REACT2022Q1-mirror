import { render, screen } from '@testing-library/react';
import MainPage from './MainPage';

test('All cards are rendered', async () => {
  render(<MainPage />);
  const userCards = await screen.findAllByRole('img');
  expect(userCards.length).toBe(20);
});
