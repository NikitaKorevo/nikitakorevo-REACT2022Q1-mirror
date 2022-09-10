import React, { useState } from 'react';
import styles from './mainPage.module.css';
import { ICharacter } from '../../types/interfaces';
import RickAndMortyAPI from '../../API/RickAndMortyAPI';
import SearchBar from '../../components/SearchBar/SearchBar';
import CharacterCard from '../../components/CharacterCard/CharacterCard';

const MainPage: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [characterCards, setCharacterCards] = useState<Array<ICharacter>>([]);

  const updateSearchBarValue = async (searchBarValue: string) => {
    setIsLoading(true);
    const characterCards = await RickAndMortyAPI.getAllCharacters({ name: searchBarValue });
    setIsLoading(false);
    setCharacterCards(characterCards.results);
  };

  const characterCardsElements = characterCards.map((characterCard: ICharacter) => {
    return <CharacterCard key={characterCard.id} characterCardData={characterCard} />;
  });

  return (
    <div className={styles.mainPage}>
      <SearchBar updateSearchBarValue={updateSearchBarValue} />
      {characterCards.length === 0 && !isLoading && <h2>{'Nothing found :('}</h2>}
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul className={styles.userCards}>{characterCardsElements}</ul>
      )}
    </div>
  );
};

export default MainPage;
