import { action } from 'satcheljs';

export const bookTicketsAction = action('bookTicketsAction', (ticketIds: Array<string>) => {
  return { ticketIds };
});
