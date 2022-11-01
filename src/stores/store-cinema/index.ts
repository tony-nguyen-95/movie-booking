import './orchestrator';

import * as CoreCinemaStore from './export';

if (!CoreCinemaStore.cinemaListSelector()) {
  CoreCinemaStore.fetchCinemaListAction();
}

export { CoreCinemaStore };
