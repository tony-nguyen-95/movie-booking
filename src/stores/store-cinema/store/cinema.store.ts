import { createStore } from 'satcheljs';
import { ICinemaStore } from './cinema.type';

const initStore: ICinemaStore = {
  cinemaList: undefined,
  cinemasByMovieId: undefined,
};

export const getStore = createStore('CoreCinemaStore', initStore);
