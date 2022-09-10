import { ICharacterParameters } from '../types/interfaces';

function convertingQueryParametersToString(parameters: ICharacterParameters | void): string {
  if (parameters === undefined || Object.keys(parameters).length === 0) {
    return '';
  } else {
    const arrayParameters = Object.entries(parameters).filter(
      (parameter) => !parameter.includes('')
    );
    return `?${arrayParameters.map((parameter) => parameter.join('=')).join('&')}`;
  }
}

export default convertingQueryParametersToString;
