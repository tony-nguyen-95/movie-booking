import { orchestrator } from 'satcheljs';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { CoreTicketStore } from '..';
import { bookingTicketAPI } from '../../../apis';
import { CoreCinemaStore } from '../../store-cinema';
import { CoreMovieStore } from '../../store-movie';
import { CoreShowtimeStore } from '../../store-showtime';
import { CoreUserStore } from '../../store-user';
import { bookTicketsAction } from '../action';
import { removeAllSelectedTickets, updateLoadingBookTicketAction } from '../mutator-action';

orchestrator(bookTicketsAction, async (actionMessage: { ticketIds: string[] }) => {
  const { ticketIds } = actionMessage;

  updateLoadingBookTicketAction(true);

  try {
    await bookingTicketAPI(ticketIds);

    await withReactContent(Swal).fire({
      position: 'top-end',
      icon: 'success',
      title: '<h5 style="font-size: 24px">Booking successfully</h5>',
      width: 300,
      iconColor: 'var(--secondary)',
      color: 'var(--secondary)',
      showConfirmButton: false,
      timer: 1000,
      iconHtml: `<i class="fa-solid fa-check" style="font-size: 32px"></i>`,
    });

    // Reset movie, cinema and showtime store
    CoreMovieStore.updateMoviesByCinemaIdAction(undefined);
    CoreCinemaStore.updateCinemasByMovieIdAction(undefined);
    CoreShowtimeStore.updateShowtimeListByMovieAndCinemaAction(undefined);

    const showtimeId = CoreTicketStore.showtimeIdSelector();

    // Fetch tickets again and reset
    if (showtimeId) {
      CoreTicketStore.fetchTicketsByShowtimeIdAction(showtimeId);
    }

    removeAllSelectedTickets();

    CoreUserStore.fetchUserProfileAction();
  } catch (error) {
    return error;
  } finally {
    updateLoadingBookTicketAction(false);
  }
});
