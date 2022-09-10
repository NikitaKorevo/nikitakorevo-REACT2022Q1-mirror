import React from 'react';
import styles from './notFoundPage.module.css';

class NotFoundPage extends React.Component {
  render(): JSX.Element {
    return (
      <div className={styles.notFoundPage}>
        <h2 className={styles.errorNumber}>404</h2>
        <h1 className={styles.errorText}>Page not found</h1>
      </div>
    );
  }
}

export default NotFoundPage;
