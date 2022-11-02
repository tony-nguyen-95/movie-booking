import { createStore } from 'satcheljs';
import { ITicketStore } from './ticket.type';

const initStore: ITicketStore = {
  showtimeId: undefined,
  ticketsByShowtimeId: undefined,
  infoShowtime: undefined,
  selectedTickets: [],
  loadingBookTicket: false,
};

export const getStore = createStore('CoreTickettore', initStore);
