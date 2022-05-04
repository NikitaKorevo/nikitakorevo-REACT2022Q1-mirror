import React from 'react';
import styles from './pagination.module.css';

function Pagination() {
  return (
    <div className={styles.pagination}>
      <button>{'<<'}</button>
      <button>{'<'}</button>
      <output className={styles.output}> 3 / 5 </output>
      <button>{'>'}</button>
      <button>{'>>'}</button>

      <select className={styles.select} defaultValue="20" name="statusSelect">
        <option value="10">10</option>
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
      </select>
    </div>
  );
}

export default Pagination;
