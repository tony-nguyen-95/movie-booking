import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const removeAllSelectedTickets = mutatorAction('removeAllSelectedTickets', () => {
  getStore().selectedTickets = [];
});
