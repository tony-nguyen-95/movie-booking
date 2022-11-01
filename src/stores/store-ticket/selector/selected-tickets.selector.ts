import { ITicket } from '../../../models';
import { getStore } from '../store';

export const selectedTicketsSelector = (): ITicket[] => {
  return getStore().selectedTickets;
};
