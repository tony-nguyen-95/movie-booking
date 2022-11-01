import { orchestrator } from 'satcheljs';
import { fetchCinemasByMovieIdAPI } from '../../../apis';
import { fetchCinemasByMovieIdAction } from '../action';
import { updateCinemasByMovieIdAction } from '../mutator-action';

orchestrator(fetchCinemasByMovieIdAction, async (actionMessage: { movieId: number }) => {
  const { movieId } = actionMessage;

  try {
    const { data: cinemasByMovieId } = await fetchCinemasByMovieIdAPI(movieId);

    updateCinemasByMovieIdAction(cinemasByMovieId);

    // updateMovieListAction(data);
  } catch (error) {
    // updateFetchProfileError(error);
  } finally {
    // updateIsFetchingBalance(false);
  }
});
