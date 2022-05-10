import React, { useState } from 'react';
import styles from './formPage.module.css';
import { IDeliveryCard } from '../../types/interfaces';
import DeliveryForm from '../../components/DeliveryForm/DeliveryForm';
import DeliveryCard from '../../components/DeliveryCard/DeliveryCard';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { appSlice } from '../../store/reducers/appSlice';

const FormPage: React.FC = () => {
  const { deliveryCards } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const { setDeliveryCards } = appSlice.actions;
  const [isStatusCardHidden, setIsStatusCardHidden] = useState(true);

  const addDeliveryCard = (deliveryCard: IDeliveryCard): void => {
    dispatch(setDeliveryCards([...deliveryCards, deliveryCard]));
    setIsStatusCardHidden(false);

    setTimeout(() => {
      setIsStatusCardHidden(true);
    }, 2000);
  };

  const deliveryCardsElement = deliveryCards.map((deliveryCard, index) => {
    return <DeliveryCard key={index} deliveryCardData={deliveryCard} />;
  });

  return (
    <div className={styles.formPage}>
      <DeliveryForm addDeliveryCard={addDeliveryCard} />
      <p hidden={isStatusCardHidden}>Card has been added</p>
      <ul className={styles.deliveryCards}>{deliveryCardsElement}</ul>
    </div>
  );
};

export default FormPage;
