import React from 'react';
import styles from './searchBar.module.css';

interface ISearchBarProps {
  updateSearchBarValue: (key: string) => void;
}

interface ISearchBarState {
  inputValue: string;
}

class SearchBar extends React.Component<ISearchBarProps, ISearchBarState> {
  constructor(props: ISearchBarProps) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  componentDidMount(): void {
    const initialInputValue = localStorage.getItem('inputValue') || '';
    this.setState({ inputValue: initialInputValue });
    this.props.updateSearchBarValue(initialInputValue);
  }

  componentDidUpdate(): void {
    localStorage.setItem('inputValue', this.state.inputValue);
  }

  changeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    this.setState({ inputValue: inputValue });
  };

  handleKeyUpInput = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter') {
      this.props.updateSearchBarValue(this.state.inputValue);
    }
  };

  render(): JSX.Element {
    return (
      <input
        className={styles.searchBar}
        type="search"
        value={this.state.inputValue}
        onChange={this.changeInputValue}
        placeholder="Morty Smith"
        onKeyUp={this.handleKeyUpInput}
      />
    );
  }
}

export default SearchBar;
