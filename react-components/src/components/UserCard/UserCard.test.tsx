import { render, screen } from '@testing-library/react';
import UserCard from './UserCard';
import IUserCard from '../../types/interfaces';

test('correct display of props', () => {
  const userData: IUserCard = {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  };

  render(<UserCard userCard={userData} />);

  const nameElement = screen.getByText(/Leanne Graham/i);
  const emailElement = screen.getByText(/Sincere@april.biz/i);
  const phoneElement = screen.getByText(/1-770-736-8031 x56442/i);
  const cityElement = screen.getByText(/Gwenborough/i);

  expect(nameElement).toBeInTheDocument();
  expect(emailElement).toBeInTheDocument();
  expect(phoneElement).toBeInTheDocument();
  expect(cityElement).toBeInTheDocument();
});
