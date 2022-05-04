import React, { useContext, useEffect, useState } from 'react';
import styles from './mainPage.module.css';
import { ICharacter } from '../../types/interfaces';
import RickAndMortyAPI from '../../API/RickAndMortyAPI';
import { AppContext } from '../../store/context';
import SearchBar from '../../components/SearchBar/SearchBar';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import StatusSelect from '../../components/StatusSelect/StatusSelect';
import Pagination from '../../components/Pagination/Pagination';

function MainPage(): JSX.Element {
  const [state, dispatch] = useContext(AppContext);
  const [skipComponentDidMount, setSkipComponentDidMount] = useState(true);
  const [isDataLoaded] = useState(state.characterCards !== null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isDataLoaded || !skipComponentDidMount) {
      (async () => {
        setIsLoading(true);

        const characterCards = await RickAndMortyAPI.getAllCharacters({
          name: state.searchBarValue,
          status: state.statusSelectValue,
        });

        dispatch({ type: 'setCharacterCards', payload: characterCards.results });
        setIsLoading(false);
      })();
    }
  }, [state.searchBarValue, state.statusSelectValue]);

  useEffect(() => {
    setSkipComponentDidMount(false);
  }, []);

  const characterCardsElements = state.characterCards?.map((characterCard: ICharacter) => {
    return <CharacterCard key={characterCard.id} characterCardData={characterCard} />;
  });

  return (
    <div className={styles.mainPage}>
      <SearchBar />
      <StatusSelect />
      <Pagination />
      {state.characterCards?.length === 0 && !isLoading && <h2>{'Nothing found :('}</h2>}
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul className={styles.userCards}>{characterCardsElements}</ul>
      )}
      <Pagination />
    </div>
  );
}

export default MainPage;
