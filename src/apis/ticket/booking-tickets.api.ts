import { API } from '../api';

export const bookingTicketAPI = (listBookTicketIds: string[]) => {
  return API.patch(`/seat-tickets/booking`, listBookTicketIds);
};
