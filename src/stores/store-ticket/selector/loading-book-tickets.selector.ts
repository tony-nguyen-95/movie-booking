import { getStore } from '../store';

export const loadingBookTicketSelector = (): boolean => {
  return getStore().loadingBookTicket;
};
