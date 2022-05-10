import React, { useEffect, useState } from 'react';
import styles from './mainPage.module.css';
import { ICharacter } from '../../types/interfaces';
import { AMOUNT_iTEMS_PER_PAGE_RICK_AND_MORTY_API } from '../../constants/constants';
import SearchBar from '../../components/SearchBar/SearchBar';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import StatusSelect from '../../components/StatusSelect/StatusSelect';
import Pagination from '../../components/Pagination/Pagination';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { getAllCharactersAPI } from '../../store/reducers/actionCreators';

const MainPage: React.FC = () => {
  const { amountItemsPerPage, currentPage, searchBarValue, characterCards, statusSelectValue } =
    useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [skipComponentDidMount, setSkipComponentDidMount] = useState(true);
  const [isDataLoaded] = useState(characterCards !== null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!isDataLoaded || !skipComponentDidMount) {
      (async () => {
        setIsLoading(true);
        const arrayParameters = [];
        const amountRequests = amountItemsPerPage / AMOUNT_iTEMS_PER_PAGE_RICK_AND_MORTY_API;

        for (let i = 0; i < amountRequests; i++) {
          arrayParameters.unshift({
            page: currentPage * amountRequests - i,
            name: searchBarValue,
            status: statusSelectValue,
          });
        }
        await dispatch(getAllCharactersAPI(arrayParameters));
        setIsLoading(false);
      })();
    }
  }, [amountItemsPerPage, currentPage, searchBarValue, statusSelectValue]);

  useEffect(() => {
    setSkipComponentDidMount(false);
  }, []);

  const characterCardsElements = characterCards?.map((characterCard: ICharacter) => {
    return <CharacterCard key={characterCard.id} characterCardData={characterCard} />;
  });

  return (
    <div className={styles.mainPage}>
      <SearchBar />
      <StatusSelect />
      <Pagination />
      {characterCards?.length === 0 && !isLoading && <h2>{'Nothing found :('}</h2>}
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul className={styles.userCards}>{characterCardsElements}</ul>
      )}
      <Pagination />
    </div>
  );
};

export default MainPage;
