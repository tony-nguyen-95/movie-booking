import { mutatorAction } from 'satcheljs';
import { ITicket } from '../../../models';
import { getStore } from '../store';

export const updateTicketsByShowtimeIdAction = mutatorAction(
  'updateTicketsByShowtimeIdAction',
  (tickets: ITicket[] | undefined) => {
    const ticketsConvert = tickets?.map((ticket) => {
      if (ticket.seatPosition?.includes('10')) {
        return { ...ticket };
      }
      return {
        ...ticket,
        seatPosition: ticket.seatPosition?.replace(
          ticket.seatPosition?.charAt(1),
          `0${ticket.seatPosition?.charAt(1)}`,
        ),
      };
    });

    getStore().ticketsByShowtimeId = ticketsConvert?.sort((a, b) => {
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
