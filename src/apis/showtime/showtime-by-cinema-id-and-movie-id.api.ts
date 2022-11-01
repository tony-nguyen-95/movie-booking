import { IShowtimeReponse } from '../../models';
import { API } from '../api';

export const getShowtimeByCinemaIdAndMovieId = (movieId: number, cinemaId: string) => {
  return API.get<IShowtimeReponse[]>(`/showtimes/${movieId}/${cinemaId}/list`);
};
