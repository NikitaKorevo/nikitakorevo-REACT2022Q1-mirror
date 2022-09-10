import React from 'react';
import styles from './characterCard.module.css';
import { generatePath, useNavigate } from 'react-router-dom';
import { ICharacter } from '../../types/interfaces';
import ROUTES from '../../constants/routes';

interface ICharacterCardProps {
  characterCardData: ICharacter;
}

const CharacterCard: React.FC<ICharacterCardProps> = ({ characterCardData }) => {
  const { id, image, name, gender, species } = characterCardData;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(generatePath(`${ROUTES.DETAILED_CHARACTER_CARD}/:id`, { id: String(id) }));
  };

  return (
    <li className={styles.characterCard} onClick={handleClick}>
      <img className={styles.avatar} src={image} alt="avatar" />
      <h2 className={styles.name}>{name}</h2>
      <ul className={styles.description}>
        <li>gender: {gender}</li>
        <li>species: {species}</li>
      </ul>
    </li>
  );
};

export default CharacterCard;
