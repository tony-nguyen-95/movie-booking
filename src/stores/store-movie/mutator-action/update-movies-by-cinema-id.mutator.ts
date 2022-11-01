import { mutatorAction } from 'satcheljs';
import { IMovieResponse } from '../../../models';
import { getStore } from '../store';

export const updateMoviesByCinemaIdAction = mutatorAction(
  'updateMoviesByCinemaIdAction',
  (movieList: IMovieResponse[] | undefined) => {
    getStore().moviesByCinemaId = movieList;
  },
);
