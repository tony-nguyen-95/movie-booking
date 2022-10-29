// import { setApiAccessToken } from '../../apis';
import './orchestrator';
import * as CoreAuthenticationStore from './export';
import { setApiAccessToken } from '../../apis';
import { CoreUserStore } from '../store-user';

if (CoreAuthenticationStore.isLoginSelector()) {
  setApiAccessToken(CoreAuthenticationStore.accessTokenSelector());
  CoreUserStore.fetchUserProfileAction();
}

export { CoreAuthenticationStore };
