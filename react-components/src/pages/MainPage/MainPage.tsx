import React from 'react';
import styles from './mainPage.module.css';
import { ICharacter } from '../../types/interfaces';
import RickAndMortyAPI from '../../API/RickAndMortyAPI';
import SearchBar from '../../components/SearchBar/SearchBar';
import CharacterCard from '../../components/CharacterCard/CharacterCard';

interface IMainPageProps {
  [key: string]: undefined;
}

interface IMainPageState {
  isLoading: boolean;
  name: string;
  characterCards: Array<ICharacter>;
}

class MainPage extends React.Component<IMainPageProps, IMainPageState> {
  constructor(props: IMainPageProps) {
    super(props);
    this.state = {
      isLoading: true,
      name: '',
      characterCards: [],
    };
  }

  setSearchBarValue = async (searchBarValue: string) => {
    this.setState({ isLoading: true });
    const characterCards = await RickAndMortyAPI.getAllCharacters({ name: searchBarValue });
    this.setState({
      isLoading: false,
      name: searchBarValue,
      characterCards: characterCards.results,
    });
  };

  render(): JSX.Element {
    const characterCards = this.state.characterCards.map((characterCard: ICharacter) => {
      return <CharacterCard key={characterCard.id} characterCardData={characterCard} />;
    });

    return (
      <div className={styles.mainPage}>
        <SearchBar setSearchBarValue={this.setSearchBarValue} />

        {this.state.isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <ul className={styles.userCards}>{characterCards}</ul>
        )}
        {!characterCards.length && !this.state.isLoading && <h2>{'Nothing found :('}</h2>}
      </div>
    );
  }
}

export default MainPage;
