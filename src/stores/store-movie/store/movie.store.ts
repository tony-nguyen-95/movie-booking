import { createStore } from 'satcheljs';
import { IMovieStore } from './movie.type';

const initStore: IMovieStore = {
  movieList: undefined,
  moviesByCinemaId: undefined,
};

export const getStore = createStore('CoreMovieStore', initStore);
