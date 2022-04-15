import React from 'react';
import { ICharacter } from '../../types/interfaces';
import CharacterModal from '../CharacterModal/CharacterModal';
import styles from './characterCard.module.css';

interface ICharacterCardProps {
  characterCardData: ICharacter;
}

interface ICharacterCardState {
  isModalHidden: boolean;
}

class CharacterCard extends React.Component<ICharacterCardProps, ICharacterCardState> {
  constructor(props: ICharacterCardProps) {
    super(props);
    this.state = {
      isModalHidden: true,
    };
  }

  closeModal = () => {
    this.setState({ isModalHidden: true });
  };

  openModal = () => {
    this.setState({ isModalHidden: false });
  };

  render() {
    const { image, name, gender, species } = this.props.characterCardData;

    return (
      <>
        {!this.state.isModalHidden && (
          <CharacterModal
            characterCardData={this.props.characterCardData}
            closeModal={this.closeModal}
          />
        )}

        <li className={styles.characterCard} onClick={this.openModal}>
          <img className={styles.avatar} src={image} alt="avatar" />
          <h2 className={styles.name}>{name}</h2>
          <ul className={styles.description}>
            <li>gender: {gender}</li>
            <li>species: {species}</li>
          </ul>
        </li>
      </>
    );
  }
}

export default CharacterCard;
