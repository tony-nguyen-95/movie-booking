import { IMovieResponse } from '../../../models';
import { getStore } from '../store';

export const selectedMovieSelector = (id: number): IMovieResponse | undefined => {
  return getStore().movieList?.find((item) => item.id === id);
};
