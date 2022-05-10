import React, { /*  useContext, */ useEffect, useState } from 'react';
import styles from './pagination.module.css';
/* import { AppContext } from '../../store/context'; */
import { AMOUNT_iTEMS_PER_PAGE_RICK_AND_MORTY_API } from '../../constants/constants';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { appSlice } from '../../store/reducers/appSlice';

function Pagination() {
  /* const [state, dispatch] = useContext(AppContext); */
  const { currentPage, amountItemsPerPage, amountAllPages } = useAppSelector((state) => state);
  const dispatch = useAppDispatch();
  const { setCurrentPage, setAmountItemsPerPage } = appSlice.actions;
  const [fakeAmountPage, setFakeAmountPage] = useState(0);

  const goFirstPage = () => {
    /* dispatch({ type: 'setCurrentPage', payload: 1 }); */
    dispatch(setCurrentPage(1));
  };

  const goPrevPage = () => {
    /* dispatch({ type: 'setCurrentPage', payload: currentPage - 1 }); */
    dispatch(setCurrentPage(currentPage - 1));
  };

  const goNextPage = () => {
    /* dispatch({ type: 'setCurrentPage', payload: currentPage + 1 }); */
    dispatch(setCurrentPage(currentPage + 1));
  };

  const goLastPage = () => {
    if (typeof fakeAmountPage === 'number') {
      /* dispatch({ type: 'setCurrentPage', payload: fakeAmountPage }); */
      dispatch(setCurrentPage(fakeAmountPage));
    }
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    /* dispatch({ type: 'setCurrentPage', payload: 1 }); */
    /* dispatch({ type: 'setAmountItemsPerPage', payload: +e.target.value }); */
    dispatch(setCurrentPage(1));
    dispatch(setAmountItemsPerPage(+e.target.value));
  };

  useEffect(() => {
    const divider = amountItemsPerPage / AMOUNT_iTEMS_PER_PAGE_RICK_AND_MORTY_API;
    const fakeAmountPage = Math.ceil((amountAllPages || 0) / divider);

    setFakeAmountPage(fakeAmountPage);
  }, [amountItemsPerPage, amountAllPages]);

  return (
    <div className={styles.pagination}>
      <button onClick={goFirstPage} disabled={currentPage <= 1}>
        {'<<'}
      </button>
      <button onClick={goPrevPage} disabled={currentPage <= 1}>
        {'<'}
      </button>
      <output className={styles.output}>
        {currentPage} / {fakeAmountPage || '∞'}
      </output>
      <button onClick={goNextPage} disabled={currentPage >= fakeAmountPage}>
        {'>'}
      </button>
      <button onClick={goLastPage} disabled={currentPage >= fakeAmountPage}>
        {'>>'}
      </button>

      <select
        className={styles.select}
        defaultValue={amountItemsPerPage}
        name="statusSelect"
        onChange={handleChangeSelect}
      >
        <option value="20">20</option>
        <option value="40">40</option>
        <option value="60">60</option>
      </select>
    </div>
  );
}

export default Pagination;
