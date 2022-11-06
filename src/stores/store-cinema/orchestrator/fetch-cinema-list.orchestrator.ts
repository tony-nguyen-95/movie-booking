import { orchestrator } from 'satcheljs';
import { fetchListCinemasAPI } from '../../../apis';
import { fetchCinemaListAction } from '../action';
import { updateCinemaListAction } from '../mutator-action';

orchestrator(fetchCinemaListAction, async () => {
  try {
    const { data: listCinemas } = await fetchListCinemasAPI();

    updateCinemaListAction(listCinemas);
  } catch (error) {
    return error;
  }
});
