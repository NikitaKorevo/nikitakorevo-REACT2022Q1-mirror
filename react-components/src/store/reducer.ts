import { actionTypes } from '../types/types';
import { IState } from '../types/interfaces';

export function appReducer(state: IState, action: actionTypes) {
  const { type, payload } = action;

  switch (type) {
    case 'setAmountAllPages':
      return {
        ...state,
        amountAllPages: payload,
      };
    case 'setAmountItemsPerPage':
      return {
        ...state,
        amountItemsPerPage: payload,
      };

    case 'setSearchBarValue':
      return {
        ...state,
        searchBarValue: payload,
      };

    case 'setCurrentPage':
      return {
        ...state,
        currentPage: payload,
      };

    case 'setCharacterCards':
      return {
        ...state,
        characterCards: payload,
      };

    case 'setDeliveryCards':
      return {
        ...state,
        deliveryCards: payload,
      };

    case 'setStatusSelectValue':
      return {
        ...state,
        statusSelectValue: payload,
      };

    default:
      return state;
  }
}
