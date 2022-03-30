import React from 'react';
import s from './MainPage.module.css';
import UserCard from '../../components/UserCard/UserCard';
import userData from '../../data/userData';
import IUserCard from '../../types/interfaces';
import SearchBar from '../../components/SearchBar/SearchBar';

class MainPage extends React.Component {
  render(): JSX.Element {
    const userCards = userData.map((userCard: IUserCard) => {
      return <UserCard key={userCard.id} userCard={userCard} />;
    });

    return (
      <div className={s.MainPage}>
        <SearchBar />
        <ul className={s.userCards}>{userCards}</ul>
      </div>
    );
  }
}

export default MainPage;
