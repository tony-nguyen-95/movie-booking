import { orchestrator } from 'satcheljs';
import { CoreUserStore } from '../../store-user';
import { logOutAction, updateAccessTokenAction } from '../action';

orchestrator(logOutAction, () => {
  // * clear data
  updateAccessTokenAction(undefined);
  CoreUserStore.updateProfileAction(undefined);
});
