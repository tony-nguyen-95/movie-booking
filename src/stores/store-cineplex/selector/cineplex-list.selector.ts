import { ICineplexResponse } from '../../../models';
import { getStore } from '../store';

export const cineplexListSelector = (): ICineplexResponse[] | undefined => {
  return getStore().cineplexList;
};
