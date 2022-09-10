import React from 'react';
import styles from './deliveryCard.module.css';
import { IDeliveryCard } from '../../types/interfaces';

interface IDeliveryCardProps {
  deliveryCardData: IDeliveryCard;
}

class DeliveryCard extends React.Component<IDeliveryCardProps> {
  render(): JSX.Element {
    const { name, date, state, photo, shares } = this.props.deliveryCardData;
    const photoUrl = URL.createObjectURL(photo as File);

    return (
      <li className={styles.deliveryCard}>
        <img className={styles.photo} src={photoUrl} alt="" />
        <ul>
          <li>Name: {name}</li>
          <li>Date: {date}</li>
          <li>state: {state}</li>
          <li>agree to receive shares: {`${shares}`}</li>
        </ul>
      </li>
    );
  }
}

export default DeliveryCard;
