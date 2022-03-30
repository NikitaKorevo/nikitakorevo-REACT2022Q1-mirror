import React from 'react';
import s from './SearchBar.module.css';

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

  componentWillUnmount(): void {
    localStorage.setItem('inputValue', this.state.inputValue);
  }

  changeInputValue(e: React.ChangeEvent<HTMLInputElement>): void {
    const inputValue = e.target.value;
    this.setState({ inputValue: inputValue });
  }

  render(): JSX.Element {
    return (
      <input
        className={s.SearchBar}
        type="search"
        value={this.state.inputValue}
        onChange={(e) => this.changeInputValue(e)}
      />
    );
  }
}

export default SearchBar;
