import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL_RICK_AND_MORTY_API } from '../../constants/constants';
import { IAllCharacters, ICharacter, ICharacterParameters } from '../../types/interfaces';
import convertingQueryParametersToString from '../../utils/convertingQueryParametersToString';

export const getAllCharactersAPI = createAsyncThunk(
  'app/getAllCharactersAPI',
  async (arrayParameters: Array<ICharacterParameters>) => {
    async function getAllCharacters(parameters: ICharacterParameters) {
      const stringParameters = convertingQueryParametersToString(parameters);
      const response = await fetch(`${BASE_URL_RICK_AND_MORTY_API}/character${stringParameters}`);
      const data: IAllCharacters = await response.json();

      if (response.status === 200) {
        return data;
      }

      if (response.status === 404) {
        return {
          info: {
            count: null,
            next: null,
            pages: null,
            prev: null,
          },
          results: [],
        };
      }

      return data;
    }

    const arrayRequests = [];
    for (let i = 0; i < arrayParameters.length; i++) {
      arrayRequests.unshift(getAllCharacters(arrayParameters[i]));
    }
    const data = await Promise.all(arrayRequests);
    return data;
  }
);

export const getSingleCharacterAPI = createAsyncThunk(
  'app/getSingleCharacterAPI',
  async (id: number) => {
    const response = await fetch(`${BASE_URL_RICK_AND_MORTY_API}/character/${id}`);
    const data: ICharacter = await response.json();
    return data;
  }
);
