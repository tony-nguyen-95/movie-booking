import { IShowtimeReponse } from './showtime-response.model';

export interface IShowtime extends IShowtimeReponse {
  showInDate?: string;
  showInHour?: string;
}
