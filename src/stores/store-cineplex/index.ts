import './orchestrator';

import * as CoreCineplexStore from './export';

if (!CoreCineplexStore.cineplexListSelector()) {
  CoreCineplexStore.fetchCineplexListAction();
}

export { CoreCineplexStore };
