import { IMovieResponse } from '../../../models';
import { getStore } from '../store';

export const movieListSelector = (): IMovieResponse[] | undefined => {
  return getStore().movieList;
};
