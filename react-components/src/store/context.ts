import React from 'react';
import { actionTypes } from '../types/types';

interface IState {
  searchBarValue: string;
}

export const initialState: IState = {
  searchBarValue: localStorage.getItem('inputValue') || '',
};

export const AppContext = React.createContext<[IState, React.Dispatch<actionTypes>]>([
  initialState,
  () => {},
]);
