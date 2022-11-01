import { mutatorAction } from 'satcheljs';
import { IMovieResponse } from '../../../models';
import { getStore } from '../store';

export const updateMovieListAction = mutatorAction(
  'updateMovieListAction',
  (movieList: IMovieResponse[] | undefined) => {
    getStore().movieList = movieList;
  },
);
