import { orchestrator } from 'satcheljs';
import { fetchMoviesByCinemaIdAPI } from '../../../apis';
import { fetchMovieByCinemaIdAction } from '../action';
import { updateLoadingMovieAction, updateMoviesByCinemaIdAction } from '../mutator-action';

orchestrator(fetchMovieByCinemaIdAction, async (actionMessage: { cinemaId: string }) => {
  const { cinemaId } = actionMessage;

  updateLoadingMovieAction(true);

  try {
    const { data: moviesByCinemaId } = await fetchMoviesByCinemaIdAPI(cinemaId);

    updateMoviesByCinemaIdAction(moviesByCinemaId);

    updateLoadingMovieAction(false);
  } catch (error) {
    return error;
  }
});
