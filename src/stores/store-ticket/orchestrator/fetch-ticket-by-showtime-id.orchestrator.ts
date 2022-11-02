import { orchestrator } from 'satcheljs';
import { getTicketsShowtimeIdAPI } from '../../../apis';
import { fetchTicketsByShowtimeIdAction } from '../action';
import { updateShowtimeIdAction, updateTicketsByShowtimeIdAction } from '../mutator-action';

orchestrator(fetchTicketsByShowtimeIdAction, async (actionMessage: { showtimeId: number }) => {
  const { showtimeId } = actionMessage;

  updateShowtimeIdAction(showtimeId);

  try {
    const { data: showtime } = await getTicketsShowtimeIdAPI(showtimeId);

    updateTicketsByShowtimeIdAction(showtime.seats);
  } catch (error) {
    return error;
  }
});
