import React, { useContext, useEffect, useState } from 'react';
import styles from './searchBar.module.css';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { appSlice } from '../../store/reducers/appSlice';
/* import { AppContext } from '../../store/context'; */

function SearchBar(): JSX.Element {
  /* const [state, dispatch] = useContext(AppContext); */
  const { searchBarValue } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const { setCurrentPage, setSearchBarValue } = appSlice.actions;
  const [inputValue, setInputValue] = useState(searchBarValue);

  useEffect(() => {
    localStorage.setItem('inputValue', inputValue);
  }, [inputValue]);

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  };

  const handleKeyUpInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      /* dispatch({ type: 'setCurrentPage', payload: 1 });
      dispatch({ type: 'setSearchBarValue', payload: inputValue }); */
      dispatch(setCurrentPage(1));
      dispatch(setSearchBarValue(inputValue));
    }
  };

  return (
    <input
      className={styles.searchBar}
      type="search"
      value={inputValue}
      onChange={changeInputValue}
      placeholder="Morty Smith"
      onKeyUp={handleKeyUpInput}
    />
  );
}

export default SearchBar;
