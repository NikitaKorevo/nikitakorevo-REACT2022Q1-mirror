import React from 'react';
import styles from './searchBar.module.css';

interface ISearchBarState {
  inputValue: string;
}

class SearchBar extends React.Component<object, ISearchBarState> {
  constructor(props: object) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  componentDidMount(): void {
    const initialInputValue = localStorage.getItem('inputValue') || '';
    this.setState({ inputValue: initialInputValue });
  }

  componentDidUpdate(): void {
    localStorage.setItem('inputValue', this.state.inputValue);
  }

  changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    this.setState({ inputValue: inputValue });
  };

  render(): JSX.Element {
    return (
      <input
        className={styles.searchBar}
        type="search"
        value={this.state.inputValue}
        onChange={this.changeInputValue}
      />
    );
  }
}

export default SearchBar;
