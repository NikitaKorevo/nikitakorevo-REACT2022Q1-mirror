import React, { useEffect, useState } from 'react';
import styles from './detailedCharacterCard.module.css';
import { useParams } from 'react-router-dom';
import { getSingleCharacterAPI } from '../../store/reducers/actionCreators';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';

const DetailedCharacterCard: React.FC = () => {
  const { detailedCharacterCard } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      await dispatch(getSingleCharacterAPI(id ? +id : 1));
      setIsLoading(false);
    })();
  }, [id, dispatch]);

  if (isLoading) {
    return (
      <div className={styles.detailedCharacterCard}>
        <span>Loading...</span>
      </div>
    );
  }

  return (
    <div className={styles.detailedCharacterCard}>
      <img className={styles.avatar} src={detailedCharacterCard?.image} alt="avatar" />
      <div>
        <h2 className={styles.name}>{detailedCharacterCard?.name}</h2>
        <ul className={styles.description}>
          <li>gender: {detailedCharacterCard?.gender}</li>
          <li>species: {detailedCharacterCard?.species}</li>
          <li>status: {detailedCharacterCard?.status}</li>
          <li>location: {detailedCharacterCard?.location.name}</li>
        </ul>
      </div>
    </div>
  );
};

export default DetailedCharacterCard;
