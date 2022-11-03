import { getStore } from '../store';

export const loadingMovieListSelector = (): boolean => {
  return getStore().loadingMovieList;
};
