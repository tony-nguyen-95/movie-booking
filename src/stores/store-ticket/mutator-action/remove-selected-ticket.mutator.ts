import { mutatorAction } from 'satcheljs';
import { ITicket } from '../../../models';
import { getStore } from '../store';

export const removeSelectedTicket = mutatorAction('removeSelectedTicket', (ticket: ITicket) => {
  const { selectedTickets } = getStore();
  getStore().selectedTickets = selectedTickets.filter((_ticket) => _ticket.id !== ticket.id);
});
