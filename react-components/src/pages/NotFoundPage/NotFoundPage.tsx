import React from 'react';
import s from './NotFoundPage.module.css';

class NotFoundPage extends React.Component {
  render(): JSX.Element {
    return (
      <div className={s.NotFoundPage}>
        <h2 className={s.errorNumber}>404</h2>
        <h1 className={s.errorText}>Page not found</h1>
      </div>
    );
  }
}

export default NotFoundPage;
