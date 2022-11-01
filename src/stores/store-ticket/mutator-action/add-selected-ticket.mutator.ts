import { mutatorAction } from 'satcheljs';
import { ITicket } from '../../../models';
import { getStore } from '../store';

export const addSelectedTicket = mutatorAction('addSelectedTicket', (ticket: ITicket) => {
  const { selectedTickets } = getStore();
  selectedTickets.push(ticket);
  getStore().selectedTickets = selectedTickets;
});
