import { ICineplexResponse } from '../../../models';
import { getStore } from '../store';

export const cineplexSelectedSelector = (): ICineplexResponse | undefined => {
  return getStore().cineplexSelected;
};
