import { IMovieResponse } from '../../../models';
import { getStore } from '../store';

export const moviesByCinemaIdSelector = (): IMovieResponse[] | undefined => {
  return getStore().moviesByCinemaId;
};
