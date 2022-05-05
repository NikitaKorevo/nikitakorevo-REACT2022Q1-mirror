import React, { useContext } from 'react';
import styles from './statusSelect.module.css';
import { AppContext } from '../../store/context';

function StatusSelect() {
  const [state, dispatch] = useContext(AppContext);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'setCurrentPage', payload: 1 });
    dispatch({ type: 'setStatusSelectValue', payload: e.target.value });
  };

  return (
    <div className={styles.statusSelect}>
      <span className={styles.title}>Status:</span>
      <select
        className={styles.select}
        value={state.statusSelectValue}
        name="statusSelect"
        onChange={handleChange}
      >
        <option value="">all</option>
        <option value="alive">alive</option>
        <option value="dead">dead</option>
        <option value="unknown">unknown</option>
      </select>
    </div>
  );
}

export default StatusSelect;
