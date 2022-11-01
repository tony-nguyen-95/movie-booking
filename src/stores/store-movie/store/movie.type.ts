import { IMovieResponse } from '../../../models';

export interface IMovieStore {
  movieList: IMovieResponse[] | undefined;
  moviesByCinemaId: IMovieResponse[] | undefined;
}
