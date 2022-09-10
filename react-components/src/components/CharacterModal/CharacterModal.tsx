import React from 'react';
import ReactDOM from 'react-dom';
import { ICharacter } from '../../types/interfaces';
import styles from './characterModal.module.css';

const root = document.getElementById('root') as HTMLDivElement;

interface ICharacterModalProps {
  characterCardData: ICharacter;
  closeModal: () => void;
}

class CharacterModal extends React.Component<ICharacterModalProps> {
  wrapper: HTMLElement;

  constructor(props: ICharacterModalProps) {
    super(props);
    this.wrapper = document.createElement('div');
  }

  componentDidMount() {
    root.appendChild(this.wrapper);
  }

  componentWillUnmount() {
    root.removeChild(this.wrapper);
  }

  render() {
    const { image, name, gender, species, status, location } = this.props.characterCardData;
    this.wrapper.id = 'characterModal';

    return ReactDOM.createPortal(
      <div className={styles.backgroundModal} onClick={this.props.closeModal}>
        <div className={styles.characterModal}>
          <button className={styles.closeButton} onClick={this.props.closeModal}>
            &#10006;
          </button>
          <img className={styles.avatar} src={image} alt="avatar" />
          <div>
            <h2 className={styles.name}>{name}</h2>
            <ul className={styles.description}>
              <li>gender: {gender}</li>
              <li>species: {species}</li>
              <li>status: {status}</li>
              <li>location: {location.name}</li>
            </ul>
          </div>
        </div>
      </div>,
      this.wrapper
    );
  }
}

export default CharacterModal;
