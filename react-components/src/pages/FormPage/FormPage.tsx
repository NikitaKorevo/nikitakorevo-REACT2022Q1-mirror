import React, { useContext, useState } from 'react';
import styles from './formPage.module.css';
import { IDeliveryCard } from '../../types/interfaces';
import DeliveryForm from '../../components/DeliveryForm/DeliveryForm';
import DeliveryCard from '../../components/DeliveryCard/DeliveryCard';
import { AppContext } from '../../store/context';

function FormPage() {
  const [state, dispatch] = useContext(AppContext);
  const [isStatusCardHidden, setIsStatusCardHidden] = useState(true);

  const addDeliveryCard = (deliveryCard: IDeliveryCard): void => {
    dispatch({ type: 'setDeliveryCards', payload: [...state.deliveryCards, deliveryCard] });
    setIsStatusCardHidden(false);

    setTimeout(() => {
      setIsStatusCardHidden(true);
    }, 2000);
  };

  const deliveryCardsElement = state.deliveryCards.map((deliveryCard, index) => {
    return <DeliveryCard key={index} deliveryCardData={deliveryCard} />;
  });

  return (
    <div className={styles.formPage}>
      <DeliveryForm addDeliveryCard={addDeliveryCard} />
      <p hidden={isStatusCardHidden}>Card has been added</p>
      <ul className={styles.deliveryCards}>{deliveryCardsElement}</ul>
    </div>
  );
}

export default FormPage;
