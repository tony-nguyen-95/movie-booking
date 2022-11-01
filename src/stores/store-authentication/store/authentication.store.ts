import { createStore } from 'satcheljs';
import { LocalStorageService } from '../../local-storage';
import { IAuthenticationStore } from './authentication.type';

const initStore: IAuthenticationStore = {
  accessToken: LocalStorageService.getItem('accessToken') || undefined,
  signinError: undefined,
  loadingSignin: false,
  signupError: undefined,
  loadingSignup: false,
  isRegisterSuccess: false,
};

export const getStore = createStore('CoreAuthenticationStore', initStore);
