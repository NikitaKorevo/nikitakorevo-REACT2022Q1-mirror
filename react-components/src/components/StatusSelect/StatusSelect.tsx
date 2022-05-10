import React, { useContext } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { appSlice } from '../../store/reducers/appSlice';
import styles from './statusSelect.module.css';
/* import { AppContext } from '../../store/context'; */

function StatusSelect() {
  /* const [state, dispatch] = useContext(AppContext); */
  const { statusSelectValue } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const { setCurrentPage, setStatusSelectValue } = appSlice.actions;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    /* dispatch({ type: 'setCurrentPage', payload: 1 });
    dispatch({ type: 'setStatusSelectValue', payload: e.target.value }); */
    dispatch(setCurrentPage(1));
    dispatch(setStatusSelectValue(e.target.value));
  };

  return (
    <div className={styles.statusSelect}>
      <span className={styles.title}>Status:</span>
      <select
        className={styles.select}
        value={statusSelectValue}
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
