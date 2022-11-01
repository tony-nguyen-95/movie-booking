import { ITicket } from '../../../models';
import { getStore } from '../store';

export const ticketsByShowtimeIdSelector = (): ITicket[] | undefined => {
  return getStore().ticketsByShowtimeId;
};
