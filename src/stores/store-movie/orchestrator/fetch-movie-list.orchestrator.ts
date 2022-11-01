import { orchestrator } from 'satcheljs';
import { fetchListMoviesAPI } from '../../../apis';
import { fetchMovieListAction } from '../action';
import { updateMovieListAction } from '../mutator-action';
// import { updateMovieListAction, updateProfileAction } from '../mutator-action';

orchestrator(fetchMovieListAction, async () => {
  try {
    const { data: listMovie } = await fetchListMoviesAPI();

    updateMovieListAction(listMovie);

    // updateMovieListAction(data);
  } catch (error) {
    // updateFetchProfileError(error);
  } finally {
    // updateIsFetchingBalance(false);
  }
});
