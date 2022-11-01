import { action } from 'satcheljs';

export const fetchTicketsByShowtimeIdAction = action('fetchTicketsByShowtimeIdAction', (showtimeId: number) => {
  return { showtimeId };
});
