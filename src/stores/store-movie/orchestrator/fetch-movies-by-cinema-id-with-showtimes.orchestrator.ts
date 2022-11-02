import { orchestrator } from 'satcheljs';
import { fetchMoviesByCinemaIdIncludeShowtimesAPI } from '../../../apis';
import { fetchMovieByCinemaIdWithShowtimesAction } from '../action';
import { updateLoadingMovieAction, updateMoviesByCinemaIdWithShowtimesAction } from '../mutator-action';

orchestrator(fetchMovieByCinemaIdWithShowtimesAction, async (actionMessage: { cinemaId: string }) => {
  const { cinemaId } = actionMessage;

  updateLoadingMovieAction(true);

  try {
    const { data: moviesByCinemaIdWithShowtimes } = await fetchMoviesByCinemaIdIncludeShowtimesAPI(cinemaId);

    updateMoviesByCinemaIdWithShowtimesAction(moviesByCinemaIdWithShowtimes);

    updateLoadingMovieAction(false);
  } catch (error) {
    return error;
  }
});
