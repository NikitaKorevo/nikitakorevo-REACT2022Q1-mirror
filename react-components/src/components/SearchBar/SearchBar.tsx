import React, { useContext, useEffect, useState } from 'react';
import styles from './searchBar.module.css';
import { AppContext } from '../../store/context';

function SearchBar(): JSX.Element {
  const [state, dispatch] = useContext(AppContext);
  const [inputValue, setInputValue] = useState(state.searchBarValue);

  useEffect(() => {
    localStorage.setItem('inputValue', inputValue);
  }, [inputValue]);

  const changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setInputValue(inputValue);
  };

  const handleKeyUpInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      dispatch({ type: 'setSearchBarValue', payload: inputValue });
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
