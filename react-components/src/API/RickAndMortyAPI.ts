import { BASE_URL_RICK_AND_MORTY_API } from '../constants/constants';
import { ICharacterParameters, IAllCharacters } from '../types/interfaces';
import convertingQueryParametersToString from '../utils/convertingQueryParametersToString';

class RickAndMortyAPI {
  static async getAllCharacters(parameters: ICharacterParameters | void) {
    const stringParameters = convertingQueryParametersToString(parameters);
    const response = await fetch(`${BASE_URL_RICK_AND_MORTY_API}/character${stringParameters}`);
    const data: IAllCharacters = await response.json();

    if (!data.results) {
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
}

export default RickAndMortyAPI;
