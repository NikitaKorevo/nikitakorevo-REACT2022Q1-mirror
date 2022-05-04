import React from 'react';
import { actionTypes } from '../types/types';
import { IState } from '../types/interfaces';

export const initialState: IState = {
  searchBarValue: localStorage.getItem('inputValue') || '',
  characterCards: null,
  deliveryCards: [],
  statusSelectValue: '',
};

export const AppContext = React.createContext<[IState, React.Dispatch<actionTypes>]>([
  initialState,
  () => {},
]);
