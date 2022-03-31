import './header.css';
import React from 'react';
import { NavLink } from 'react-router-dom';
import ROUTES from '../../constants/routes';

class Header extends React.Component {
  render(): JSX.Element {
    return (
      <header className="header">
        <nav className="header__nav">
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink className="nav__link" to={ROUTES.MAIN}>
                main
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink className="nav__link" to={ROUTES.ABOUT_US}>
                about us
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
