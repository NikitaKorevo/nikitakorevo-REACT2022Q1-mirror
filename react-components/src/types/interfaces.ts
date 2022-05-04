export interface IUserCard {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IDeliveryCard {
  name: string;
  date: string;
  state: string;
  photo: File | string;
  shares: boolean;
}

export interface ICharacterParameters {
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: 'female' | 'male' | 'genderless' | 'unknown';
}

export interface ICharacter {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}

export interface IAllCharacters {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: null;
  };
  results: Array<ICharacter>;
}

export interface IDeliveryFormValues extends IDeliveryCard {
  dataProcessing: boolean;
}

export interface IState {
  searchBarValue: string;
  characterCards: Array<ICharacter> | null;
  deliveryCards: Array<IDeliveryCard>;
  statusSelectValue: string;
}
