import { createStore } from 'satcheljs';
import { IMovieStore } from './movie.type';

const initStore: IMovieStore = {
  movieList: undefined,
  moviesByCinemaId: undefined,
  loadingMovie: false,
  trailerMovie: undefined,
  moviesWithShowtimes: undefined,
  loadingMovieList: false,
};

export const getStore = createStore('CoreMovieStore', initStore);
