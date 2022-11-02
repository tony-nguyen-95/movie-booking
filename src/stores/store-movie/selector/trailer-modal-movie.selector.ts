import { IMovieResponse } from '../../../models';
import { getStore } from '../store';

export const trailerModalMovieSelector = (): IMovieResponse | undefined => {
  return getStore().trailerMovie;
};
