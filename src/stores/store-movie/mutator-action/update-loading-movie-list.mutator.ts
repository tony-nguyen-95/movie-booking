import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const updateLoadingMovieListAction = mutatorAction('updateLoadingMovieListAction', (loadingMovie: boolean) => {
  getStore().loadingMovieList = loadingMovie;
});
