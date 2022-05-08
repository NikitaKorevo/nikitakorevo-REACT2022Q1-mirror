import React, { useEffect, useState } from 'react';
import styles from './detailedCharacterCard.module.css';
import { useParams } from 'react-router-dom';
import RickAndMortyAPI from '../../API/RickAndMortyAPI';
import { ICharacter } from '../../types/interfaces';

function DetailedCharacterCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [cardData, setCardData] = useState<ICharacter>();
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      setCardData(await RickAndMortyAPI.getSingleCharacter(id ? +id : 1));
      setIsLoading(false);
    })();
  }, [id]);

  if (isLoading) {
    return (
      <div className={styles.detailedCharacterCard}>
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className={styles.detailedCharacterCard}>
      <img className={styles.avatar} src={cardData?.image} alt="avatar" />
      <div>
        <h2 className={styles.name}>{cardData?.name}</h2>
        <ul className={styles.description}>
          <li>gender: {cardData?.gender}</li>
          <li>species: {cardData?.species}</li>
          <li>status: {cardData?.status}</li>
          <li>location: {cardData?.location.name}</li>
        </ul>
      </div>
    </div>
  );
}

export default DetailedCharacterCard;
