import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import ROUTES from './constants/routes';

describe('App', () => {
  test('go to AboutUsPage from MainPage', () => {
    render(
      <MemoryRouter initialEntries={[ROUTES.MAIN]}>
        <App />
      </MemoryRouter>
    );

    const searchBarElement = screen.getByRole('searchbox');
    expect(searchBarElement).toBeInTheDocument();

    const aboutUsLinkElement = screen.getByText(/about us/i);
    aboutUsLinkElement.click();

    const aboutUsPageElement = screen.getByText(/AboutUsPage/i);
    expect(aboutUsPageElement).toBeInTheDocument();
  });

  test('go to MainPage from AboutUsPage', () => {
    render(
      <MemoryRouter initialEntries={[ROUTES.ABOUT_US]}>
        <App />
      </MemoryRouter>
    );

    const aboutUsPageElement = screen.getByText(/AboutUsPage/i);
    expect(aboutUsPageElement).toBeInTheDocument();

    const mainLinkElement = screen.getByText(/main/i);
    mainLinkElement.click();

    const searchBarElement = screen.getByRole('searchbox');
    expect(searchBarElement).toBeInTheDocument();
  });

  test('NotFoundPage is rendered', () => {
    render(
      <MemoryRouter initialEntries={['/random-word']}>
        <App />
      </MemoryRouter>
    );

    const errorNumber = screen.getByText('404');
    const errorText = screen.getByText('Page not found');

    expect(errorNumber).toBeInTheDocument();
    expect(errorText).toBeInTheDocument();
  });
});
