import { mutatorAction } from 'satcheljs';
import { IShowtime } from '../../../models';
import { getStore } from '../store';

export const updateShowtimeListByMovieAndCinemaAction = mutatorAction(
  'updateShowtimeListByMovieAndCinemaAction',
  (showtimeList: IShowtime[] | undefined) => {
    getStore().showtimeListByMovieAndCinema = showtimeList;
  },
);
