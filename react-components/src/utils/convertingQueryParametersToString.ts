export default function convertingQueryParametersToString<T>(parameters: T): string {
  if (parameters !== undefined && parameters !== Object(parameters)) {
    throw new Error('parameters is not object');
  }

  if (parameters === undefined || Object.keys(parameters).length === 0) {
    return '';
  } else {
    const arrayParameters = Object.entries(parameters);
    return `?${arrayParameters.map((parameter) => parameter.join('=')).join('&')}`;
  }
}
