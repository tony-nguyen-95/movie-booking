import { ICinemaResponse } from '../../models';
import { API } from '../api';

export const fetchCinemasByMovieIdAPI = (movieId: number) => {
  return API.get<ICinemaResponse[]>(`/movies/cinemas/${movieId}`);
};
