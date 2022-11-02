import { ITicket } from '../../../models';

export interface ITicketStore {
  showtimeId: number | undefined;
  ticketsByShowtimeId: ITicket[] | undefined;
  infoShowtime: IInfoShowtime | undefined;
  selectedTickets: ITicket[];
  loadingBookTicket: boolean;
}

export interface IInfoShowtime {
  movieName: string;
  cinemaName: string;
  showtime: string;
}
