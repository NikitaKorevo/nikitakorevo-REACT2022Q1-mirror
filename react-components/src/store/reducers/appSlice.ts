/* import { actionTypes } from '../../types/types'; */
import { IAllCharacters, ICharacter, IDeliveryCard } from '../../types/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllCharactersAPI, getSingleCharacterAPI } from './actionCreators';

/* const { type, payload } = action; */

interface IAppState {
  amountAllPages: number;
  amountItemsPerPage: number;
  currentPage: number;
  searchBarValue: string;
  statusSelectValue: string;
  characterCards: Array<ICharacter> | null;
  deliveryCards: Array<IDeliveryCard>;
  detailedCharacterCard: ICharacter | null;
}

const initialState: IAppState = {
  amountAllPages: 0,
  amountItemsPerPage: 20,
  currentPage: 1,
  searchBarValue: localStorage.getItem('inputValue') || '',
  statusSelectValue: '',
  characterCards: null,
  deliveryCards: [],
  detailedCharacterCard: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAmountAllPages: (state, action: PayloadAction<number>) => {
      state.amountAllPages = action.payload;
    },
    setAmountItemsPerPage: (state, action: PayloadAction<number>) => {
      state.amountItemsPerPage = action.payload;
    },
    setSearchBarValue: (state, action: PayloadAction<string>) => {
      state.searchBarValue = action.payload;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setCharacterCards: (state, action: PayloadAction<Array<ICharacter> | null>) => {
      state.characterCards = action.payload;
    },
    setDeliveryCards: (state, action: PayloadAction<Array<IDeliveryCard>>) => {
      state.deliveryCards = action.payload;
    },
    setStatusSelectValue: (state, action: PayloadAction<string>) => {
      state.statusSelectValue = action.payload;
    },
  },
  extraReducers: {
    [getAllCharactersAPI.fulfilled.type]: (state, action: PayloadAction<Array<IAllCharacters>>) => {
      state.amountAllPages = action.payload[0].info.pages || 0;
      state.characterCards = action.payload.map((el) => el.results).flat();
    },
    [getSingleCharacterAPI.fulfilled.type]: (state, action: PayloadAction<ICharacter>) => {
      state.detailedCharacterCard = action.payload;
    },
  },
});

export default appSlice.reducer;

/* export function appReducer(state: IState, action: actionTypes) {
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
} */
