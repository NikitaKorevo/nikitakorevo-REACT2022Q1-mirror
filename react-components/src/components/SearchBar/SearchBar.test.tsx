import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SearchBar from './SearchBar';

describe('SearchBar', () => {
  /* test('SearchBar is rendered', () => {
    render(<SearchBar />);
    const searchBarElement = screen.getByRole('searchbox');
    expect(searchBarElement).toBeInTheDocument();
  });

  test('changing the value in SearchBar', () => {
    render(<SearchBar />);
    const searchBarElement = screen.getByRole('searchbox');
    searchBarElement.focus();
    userEvent.keyboard('test string');
    expect(searchBarElement).toHaveValue('test string');
  }); */
});
