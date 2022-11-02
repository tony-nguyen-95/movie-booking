import { IMovieResponse } from '../../../models';

export interface IMovieStore {
  movieList: IMovieResponse[] | undefined;
  moviesByCinemaId: IMovieResponse[] | undefined;
  loadingMovie: boolean;
  trailerMovie: IMovieResponse | undefined;
}
