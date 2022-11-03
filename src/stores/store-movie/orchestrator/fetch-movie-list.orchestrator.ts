import { orchestrator } from 'satcheljs';
import { fetchListMoviesAPI } from '../../../apis';
import { fetchMovieListAction } from '../action';
import { updateLoadingMovieListAction, updateMovieListAction } from '../mutator-action';

orchestrator(fetchMovieListAction, async () => {
  updateLoadingMovieListAction(true);

  try {
    const { data: listMovie } = await fetchListMoviesAPI();

    updateMovieListAction(listMovie);

    updateLoadingMovieListAction(false);
  } catch (error) {
    return error;
  }
});
