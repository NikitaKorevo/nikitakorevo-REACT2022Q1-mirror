import React, { useContext, useEffect, useState } from 'react';
import styles from './mainPage.module.css';
import { ICharacter } from '../../types/interfaces';
import RickAndMortyAPI from '../../API/RickAndMortyAPI';
import { AMOUNT_iTEMS_PER_PAGE_RICK_AND_MORTY_API } from '../../constants/constants';
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

        const arrayRequests = [];
        const amountRequests = state.amountItemsPerPage / AMOUNT_iTEMS_PER_PAGE_RICK_AND_MORTY_API;

        for (let i = 0; i < amountRequests; i++) {
          arrayRequests.unshift(
            RickAndMortyAPI.getAllCharacters({
              page: state.currentPage * amountRequests - i,
              name: state.searchBarValue,
              status: state.statusSelectValue,
            })
          );
        }
        const response = await Promise.all(arrayRequests);
        const amountAllPages = response[0].info.pages || 0;
        const characterCards = response.map((el) => el.results).flat();

        dispatch({ type: 'setAmountAllPages', payload: amountAllPages });
        dispatch({ type: 'setCharacterCards', payload: characterCards });
        setIsLoading(false);
      })();
    }
  }, [state.amountItemsPerPage, state.currentPage, state.searchBarValue, state.statusSelectValue]);

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
