import { IMovieResponse } from '../../models';
import { API } from '../api';

export const fetchMoviesByCinemaIdIncludeShowtimesAPI = (cinemaId: string) => {
  return API.get<IMovieResponse[]>(`/cinemas/movies/${cinemaId}/showtime`);
};
