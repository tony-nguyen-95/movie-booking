import { orchestrator } from 'satcheljs';
import { fetchUserProfileApi } from '../../../apis';
import { fetchUserProfileAction } from '../action';
import { updateProfileAction } from '../mutator-action';

let isFetching = false;

orchestrator(fetchUserProfileAction, async () => {
  if (isFetching) return;
  isFetching = true;
  try {
    const profile = await fetchUserProfileApi();

    updateProfileAction(profile);
  } catch (error) {
    // updateFetchProfileError(error);
  } finally {
    // updateIsFetchingBalance(false);
  }
  isFetching = false;
});
