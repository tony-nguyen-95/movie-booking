import { ITicket } from './ticket.model';

export interface IShowtimeReponse {
  cinemaId?: string;
  movieId?: number;
  id?: number;
  showDate?: string;
  seats?: ITicket[];
}
