import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const updateLoadingBookTicketAction = mutatorAction(
  'updateLoadingBookTicketAction',
  (loadingBookTicket: boolean) => {
    getStore().loadingBookTicket = loadingBookTicket;
  },
);
