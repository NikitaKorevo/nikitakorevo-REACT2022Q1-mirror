import React from 'react';
import styles from './formPage.module.css';
import { IDeliveryCard } from '../../types/interfaces';
import DeliveryForm from '../../components/DeliveryForm/DeliveryForm';
import DeliveryCard from '../../components/DeliveryCard/DeliveryCard';

interface IFormPageProps {
  [key: string]: null;
}

interface IFormPageState {
  deliveryCards: IDeliveryCard[];
  isStatusCardHidden: boolean;
}

class FormPage extends React.Component<IFormPageProps, IFormPageState> {
  constructor(props: IFormPageProps) {
    super(props);
    this.state = {
      deliveryCards: [],
      isStatusCardHidden: true,
    };
  }

  addDeliveryCard = (deliveryCard: IDeliveryCard): void => {
    const deliveryCards = [...this.state.deliveryCards, deliveryCard];
    this.setState({ deliveryCards: deliveryCards, isStatusCardHidden: false });
    setTimeout(() => {
      this.setState({ isStatusCardHidden: true });
    }, 2000);
  };

  render(): JSX.Element {
    const deliveryCardsElement = this.state.deliveryCards.map((deliveryCard, index) => {
      return <DeliveryCard key={index} deliveryCardData={deliveryCard} />;
    });

    return (
      <div className={styles.formPage}>
        <DeliveryForm addDeliveryCard={this.addDeliveryCard} />
        <p hidden={this.state.isStatusCardHidden}>Card has been added</p>
        <ul className={styles.deliveryCards}>{deliveryCardsElement}</ul>
      </div>
    );
  }
}

export default FormPage;
