import React, { useContext, useEffect, useReducer, useState } from 'react';
import styles from './mainPage.module.css';
import { ICharacter } from '../../types/interfaces';
import RickAndMortyAPI from '../../API/RickAndMortyAPI';
import SearchBar from '../../components/SearchBar/SearchBar';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import { appReducer } from '../../store/reducer';
import { AppContext, initialState } from '../../store/context';

/* interface IState {
  searchBarValue: string;
}

const initialState: IState = {
  searchBarValue: 'zxcv',
};

type ActionTypes = { type: 'increment'; payload: string } | { type: 'decrement'; payload: string };

const AppContext = React.createContext<[IState, React.Dispatch<ActionTypes>]>([
  initialState,
  () => {},
]);

function reducer(state: IState, action: ActionTypes) {
  switch (action.type) {
    case 'increment':
      return {
        ...state,
        searchBarValue: action.payload,
      };
    case 'decrement':
      return {
        ...state,
        searchBarValue: action.payload,
      };
    default:
      return state;
  }
} */

function MainPage(): JSX.Element {
  const [state, dispatch] = useContext(AppContext);
  const [isLoading, setIsLoading] = useState(true);
  const [searchBarValue, setSearchBarValue] = useState('');
  const [characterCards, setCharacterCards] = useState<Array<ICharacter>>([]);

  /* const [state, dispatch] = useReducer(reducer, initialState); */

  const updateSearchBarValue = async (searchBarValue: string) => {
    setIsLoading(true);
    const characterCards = await RickAndMortyAPI.getAllCharacters({ name: searchBarValue });
    setIsLoading(false);
    setSearchBarValue(searchBarValue);
    setCharacterCards(characterCards.results);
  };

  useEffect(() => {
    updateSearchBarValue(state.searchBarValue);
  }, [state.searchBarValue]);

  const characterCardsElements = characterCards.map((characterCard: ICharacter) => {
    return <CharacterCard key={characterCard.id} characterCardData={characterCard} />;
  });

  return (
    <div className={styles.mainPage}>
      {/* <h2>{state.searchBarValue}</h2>
      <button onClick={() => dispatch({ type: 'increment', payload: 'nikita' })}>+++</button> */}
      <SearchBar />
      {characterCards.length === 0 && !isLoading && <h2>{'Nothing found :('}</h2>}
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul className={styles.userCards}>{characterCardsElements}</ul>
      )}
    </div>
  );
}

export default MainPage;
