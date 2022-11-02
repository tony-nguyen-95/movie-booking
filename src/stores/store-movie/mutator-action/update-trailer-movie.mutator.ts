import { mutatorAction } from 'satcheljs';
import { IMovieResponse } from '../../../models';
import { getStore } from '../store';

export const updateTrailerMovieAction = mutatorAction(
  'updateTrailerMovieAction',
  (trailerMovie: IMovieResponse | undefined) => {
    getStore().trailerMovie = trailerMovie;
  },
);
