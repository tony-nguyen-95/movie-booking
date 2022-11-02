import { orchestrator } from 'satcheljs';
import { fetchListMoviesAPI } from '../../../apis';
import { fetchMovieListAction } from '../action';
import { updateLoadingMovieAction, updateMovieListAction } from '../mutator-action';

orchestrator(fetchMovieListAction, async () => {
  updateLoadingMovieAction(true);

  try {
    const { data: listMovie } = await fetchListMoviesAPI();

    updateMovieListAction(listMovie);

    updateLoadingMovieAction(false);
  } catch (error) {
    return error;
  }
});
