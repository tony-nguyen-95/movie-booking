import { IShowtime } from '../../../models';

export interface IShowtimeStore {
  showtimeListByMovieAndCinema: IShowtime[] | undefined;
}
