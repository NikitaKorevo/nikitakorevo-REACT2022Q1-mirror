import { ICharacter, IDeliveryCard } from './interfaces';

export type actionTypes =
  | { type: 'setSearchBarValue'; payload: string }
  | { type: 'setCharacterCards'; payload: Array<ICharacter> }
  | { type: 'setDeliveryCards'; payload: Array<IDeliveryCard> }
  | { type: 'setStatusSelectValue'; payload: string };
