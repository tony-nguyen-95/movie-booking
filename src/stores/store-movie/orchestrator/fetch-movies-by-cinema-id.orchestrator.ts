import { orchestrator } from 'satcheljs';
import { fetchMoviesByCinemaIdAPI } from '../../../apis';
import { fetchMovieByCinemaIdAction } from '../action';
import { updateMoviesByCinemaIdAction } from '../mutator-action';

orchestrator(fetchMovieByCinemaIdAction, async (actionMessage: { cinemaId: string }) => {
  const { cinemaId } = actionMessage;

  try {
    const { data: moviesByCinemaId } = await fetchMoviesByCinemaIdAPI(cinemaId);

    updateMoviesByCinemaIdAction(moviesByCinemaId);

    // updateMovieListAction(data);
  } catch (error) {
    // updateFetchProfileError(error);
  } finally {
    // updateIsFetchingBalance(false);
  }
});
