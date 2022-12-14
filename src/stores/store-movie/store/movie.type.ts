import { IMovieResponse } from '../../../models';

export interface IMovieStore {
  movieList: IMovieResponse[] | undefined;
  moviesByCinemaId: IMovieResponse[] | undefined;
  loadingMovie: boolean;
  loadingMovieList: boolean;
  trailerMovie: IMovieResponse | undefined;
  moviesWithShowtimes: IMovieResponse[] | undefined;
}
