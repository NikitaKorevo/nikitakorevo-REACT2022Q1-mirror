import React from 'react';
/* import { actionTypes } from '../types/types'; */
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/appSlice';
/* 
export const initialState: IState = {
  amountAllPages: 0,
  amountItemsPerPage: 20,
  currentPage: 1,
  searchBarValue: localStorage.getItem('inputValue') || '',
  characterCards: null,
  deliveryCards: [],
  statusSelectValue: '',
}; */

/* export const AppContext = React.createContext<[IState, React.Dispatch<actionTypes>]>([
  initialState,
  () => {},
]); */

/* const rootReducer = combineReducers({
  app: appReducer,
}); */

export const setupStore = () => {
  return configureStore({
    reducer: appReducer,
  });
};

export type AppStateType = ReturnType<typeof appReducer>;
export type AppStoreType = ReturnType<typeof setupStore>;
export type AppDispatchType = AppStoreType['dispatch'];
