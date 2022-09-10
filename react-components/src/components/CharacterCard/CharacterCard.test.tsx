import { render, screen } from '@testing-library/react';
import CharacterCard from './CharacterCard';
import { ICharacter } from '../../types/interfaces';

test('correct display of props', () => {
  const characterData: ICharacter = {
    created: '2017-11-04T18:48:46.250Z',
    episode: [
      'https://rickandmortyapi.com/api/episode/1',
      'https://rickandmortyapi.com/api/episode/2',
      'https://rickandmortyapi.com/api/episode/3',
      'https://rickandmortyapi.com/api/episode/4',
    ],
    gender: 'Male',
    id: 1,
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    location: {
      name: 'Citadel of Ricks',
      url: 'https://rickandmortyapi.com/api/location/3',
    },
    name: 'Rick Sanchez',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    species: 'Human',
    status: 'Alive',
    type: '',
    url: 'https://rickandmortyapi.com/api/character/1',
  };

  render(<CharacterCard characterCardData={characterData} />);

  expect(screen.getByText(/Rick Sanchez/i)).toBeInTheDocument();
  expect(screen.getByText(/Male/i)).toBeInTheDocument();
  expect(screen.getByText(/Human/i)).toBeInTheDocument();
});
