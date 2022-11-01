import { IMovieResponse } from '../../models';
import { API } from '../api';

export const fetchMoviesByCinemaIdAPI = (cinemaId: string) => {
  return API.get<IMovieResponse[]>(`/cinemas/movies/${cinemaId}`);
};
