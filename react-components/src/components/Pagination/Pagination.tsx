import React, { useContext, useEffect, useState } from 'react';
import styles from './pagination.module.css';
import { AppContext } from '../../store/context';
import { AMOUNT_iTEMS_PER_PAGE_RICK_AND_MORTY_API } from '../../constants/constants';

function Pagination() {
  const [state, dispatch] = useContext(AppContext);
  const [fakeAmountPage, setFakeAmountPage] = useState(0);

  const goFirstPage = () => {
    dispatch({ type: 'setCurrentPage', payload: 1 });
  };

  const goPrevPage = () => {
    dispatch({ type: 'setCurrentPage', payload: state.currentPage - 1 });
  };

  const goNextPage = () => {
    dispatch({ type: 'setCurrentPage', payload: state.currentPage + 1 });
  };

  const goLastPage = () => {
    if (typeof fakeAmountPage === 'number') {
      dispatch({ type: 'setCurrentPage', payload: fakeAmountPage });
    }
  };

  const handleChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'setCurrentPage', payload: 1 });
    dispatch({ type: 'setAmountItemsPerPage', payload: +e.target.value });
  };

  useEffect(() => {
    const divider = state.amountItemsPerPage / AMOUNT_iTEMS_PER_PAGE_RICK_AND_MORTY_API;
    const fakeAmountPage = Math.ceil((state.amountAllPages || 0) / divider);

    setFakeAmountPage(fakeAmountPage);
  }, [state.amountItemsPerPage, state.amountAllPages]);

  return (
    <div className={styles.pagination}>
      <button onClick={goFirstPage} disabled={state.currentPage <= 1}>
        {'<<'}
      </button>
      <button onClick={goPrevPage} disabled={state.currentPage <= 1}>
        {'<'}
      </button>
      <output className={styles.output}>
        {state.currentPage} / {fakeAmountPage || '∞'}
      </output>
      <button onClick={goNextPage} disabled={state.currentPage >= fakeAmountPage}>
        {'>'}
      </button>
      <button onClick={goLastPage} disabled={state.currentPage >= fakeAmountPage}>
        {'>>'}
      </button>

      <select
        className={styles.select}
        defaultValue={state.amountItemsPerPage}
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
