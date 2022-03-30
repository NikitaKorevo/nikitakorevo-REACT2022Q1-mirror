import React from 'react';
import s from './UserCard.module.css';
import IUserCard from '../../types/interfaces';
import avatar from '../../assets/svg/user-avatar.svg';

interface IUserCardProps {
  userCard: IUserCard;
}

class UserCard extends React.Component<IUserCardProps> {
  render(): JSX.Element {
    const {
      name,
      email,
      phone,
      address: { city },
    } = this.props.userCard;

    return (
      <li className={s.UserCard}>
        <img className={s.avatar} src={avatar} alt="avatar" />
        <h2 className={s.name}>{name}</h2>
        <ul className={s.contacts}>
          <li>email: {email}</li>
          <li>phone: {phone}</li>
          <li>city: {city}</li>
        </ul>
      </li>
    );
  }
}

export default UserCard;
