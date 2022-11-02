import { orchestrator } from 'satcheljs';
import { fetchListCineplexsAPI } from '../../../apis';
import { fetchCineplexListAction } from '../action';
import {
  updateCinemaSelectedFromCineplexAction,
  updateCineplexListAction,
  updateCineplexSelectedAction,
  updateLoadingCineplexAction,
} from '../mutator-action';

orchestrator(fetchCineplexListAction, async () => {
  updateLoadingCineplexAction(true);

  try {
    const { data: listCineplex } = await fetchListCineplexsAPI();

    updateCineplexListAction(listCineplex);

    updateCineplexSelectedAction(listCineplex[0]);

    updateCinemaSelectedFromCineplexAction(listCineplex[0].cinemas[0]);

    updateLoadingCineplexAction(false);
  } catch (error) {
    return error;
  }
});
