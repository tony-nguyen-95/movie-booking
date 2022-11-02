import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const updateLoadingMovieAction = mutatorAction('updateLoadingMovieAction', (loadingMovie: boolean) => {
  getStore().loadingMovie = loadingMovie;
});
