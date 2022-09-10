import { ICharacter, IDeliveryCard } from './interfaces';

export type actionTypes =
  | { type: 'setAmountAllPages'; payload: number }
  | { type: 'setAmountItemsPerPage'; payload: number }
  | { type: 'setSearchBarValue'; payload: string }
  | { type: 'setCurrentPage'; payload: number }
  | { type: 'setCharacterCards'; payload: Array<ICharacter> }
  | { type: 'setDeliveryCards'; payload: Array<IDeliveryCard> }
  | { type: 'setStatusSelectValue'; payload: string };
