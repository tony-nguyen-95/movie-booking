import { getStore } from '../store';

export const loadingMovieSelector = (): boolean => {
  return getStore().loadingMovie;
};
