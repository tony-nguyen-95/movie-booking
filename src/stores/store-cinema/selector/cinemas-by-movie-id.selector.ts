import { ICinemaResponse } from '../../../models';
import { getStore } from '../store';

export const cinemasByMovieIdSelector = (): ICinemaResponse[] | undefined => {
  return getStore().cinemasByMovieId;
};
