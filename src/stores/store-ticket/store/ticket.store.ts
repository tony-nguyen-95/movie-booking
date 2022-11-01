import { createStore } from 'satcheljs';
import { ITicketStore } from './ticket.type';

const initStore: ITicketStore = {
  ticketsByShowtimeId: undefined,
  infoShowtime: undefined,
  selectedTickets: [],
};

export const getStore = createStore('CoreTickettore', initStore);
