import { getStore } from '../store';

export const loadingCineplexSelector = (): boolean => {
  return getStore().loadingCineplex;
};
