import { actionTypes } from '../types/types';
import { IState } from '../types/interfaces';

export function appReducer(state: IState, action: actionTypes) {
  const { type, payload } = action;

  switch (type) {
    case 'changeSearchBarValue':
      return {
        ...state,
        searchBarValue: payload,
      };
    default:
      return state;
  }
}
