import { useSelector, useDispatch } from 'react-redux';
import { TypedUseSelectorHook } from 'react-redux';
import { AppDispatchType, AppStateType } from '../store/store';

export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatchType>();
