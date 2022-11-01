import './orchestrator';

import * as CoreMovieStore from './export';

if (!CoreMovieStore.movieListSelector()) {
  CoreMovieStore.fetchMovieListAction();
}

export { CoreMovieStore };
