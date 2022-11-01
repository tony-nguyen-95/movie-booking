import { IShowtimeReponse } from '../../models';
import { API } from '../api';

export const getTicketsShowtimeIdAPI = (showtimeId: number) => {
  return API.get<IShowtimeReponse>(`/showtimes/${showtimeId}`);
};
