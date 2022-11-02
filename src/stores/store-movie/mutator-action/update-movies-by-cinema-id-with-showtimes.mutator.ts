import { mutatorAction } from 'satcheljs';
import { IMovieResponse } from '../../../models';
import { getStore } from '../store';

export const updateMoviesByCinemaIdWithShowtimesAction = mutatorAction(
  'updateMoviesByCinemaIdWithShowtimesAction',
  (movieList: IMovieResponse[] | undefined) => {
    getStore().moviesWithShowtimes = movieList;
  },
);
