import { mutatorAction } from 'satcheljs';
import { ITicket } from '../../../models';
import { getStore } from '../store';

export const updateTicketsByShowtimeIdAction = mutatorAction(
  'updateTicketsByShowtimeIdAction',
  (tickets: ITicket[] | undefined) => {
    getStore().ticketsByShowtimeId = tickets?.sort((a, b) => {
      if (a.seatPosition && b.seatPosition) {
        if (a.seatPosition < b.seatPosition) {
          return -1;
        }
        if (a.seatPosition > b.seatPosition) {
          return 1;
        }
      }
      return 0;
    });
  },
);
