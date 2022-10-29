import { createStore } from 'satcheljs';
import { LocalStorageService } from '../../local-storage';
import { IAuthenticationStore } from './authentication.type';

const initStore: IAuthenticationStore = {
  accessToken: LocalStorageService.getItem('accessToken') || undefined,
};

export const getStore = createStore('CoreAuthenticationStore', initStore);
