import { IShowtime } from '../../../models';
import { getStore } from '../store';

export const showtimeListByMovieAndCinemaSelector = (): IShowtime[] | undefined => {
  return getStore().showtimeListByMovieAndCinema;
};
