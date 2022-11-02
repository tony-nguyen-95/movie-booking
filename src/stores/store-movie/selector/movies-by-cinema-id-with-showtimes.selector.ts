import { IMovieResponse } from '../../../models';
import { getStore } from '../store';

export const moviesWithShowtimesSelector = (): IMovieResponse[] | undefined => {
  return getStore().moviesWithShowtimes;
};
