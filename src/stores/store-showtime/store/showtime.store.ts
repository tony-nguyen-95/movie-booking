import { createStore } from 'satcheljs';
import { IShowtimeStore } from './showtime.type';

const initStore: IShowtimeStore = {
  showtimeListByMovieAndCinema: undefined,
};

export const getStore = createStore('CoreShotimeStore', initStore);
