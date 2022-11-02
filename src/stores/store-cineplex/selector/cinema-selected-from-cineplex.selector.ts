import { ICinemaResponse } from '../../../models';
import { getStore } from '../store';

export const cinemaSelectedFromCineplexSelector = (): ICinemaResponse | undefined => {
  return getStore().cinemaSelectedFromCineplex;
};
