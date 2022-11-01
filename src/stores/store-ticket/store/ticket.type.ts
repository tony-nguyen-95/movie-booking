import { ITicket } from '../../../models';

export interface ITicketStore {
  ticketsByShowtimeId: ITicket[] | undefined;
  infoShowtime: IInfoShowtime | undefined;
  selectedTickets: ITicket[];
}

export interface IInfoShowtime {
  movieName: string;
  cinemaName: string;
  showtime: string;
}
