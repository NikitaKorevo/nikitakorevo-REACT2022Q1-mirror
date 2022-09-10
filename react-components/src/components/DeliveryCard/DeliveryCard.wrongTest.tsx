import { render, screen } from '@testing-library/react';
import DeliveryCard from './DeliveryCard';
import { IDeliveryCard } from '../../types/interfaces';
import userEvent from '@testing-library/user-event';

test('correct display of props', () => {
  const inputFile = document.createElement('input');
  inputFile.type = 'file';
  const file = new File(['img'], 'img.png', { type: 'image/png' });
  userEvent.upload(inputFile, file);
  const img = inputFile.files![0];

  const deliveryCardData: IDeliveryCard = {
    name: 'Michael',
    date: '2022-04-15',
    state: 'Nevada',
    photo: img,
    shares: true,
  };

  render(<DeliveryCard deliveryCardData={deliveryCardData} />);

  const nameElement = screen.getByText(/Michael/i);
  const dateElement = screen.getByText(/2022-04-15/i);
  const stateElement = screen.getByText(/Nevada/i);
  const sharesElement = screen.getByText(/yes/i);

  expect(nameElement).toBeInTheDocument();
  expect(dateElement).toBeInTheDocument();
  expect(stateElement).toBeInTheDocument();
  expect(sharesElement).toBeInTheDocument();
});
