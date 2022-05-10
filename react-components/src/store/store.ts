import { configureStore } from '@reduxjs/toolkit';
import appReducer from './reducers/appSlice';

export const setupStore = () => {
  return configureStore({
    reducer: appReducer,
  });
};

export type AppStateType = ReturnType<typeof appReducer>;
export type AppStoreType = ReturnType<typeof setupStore>;
export type AppDispatchType = AppStoreType['dispatch'];
