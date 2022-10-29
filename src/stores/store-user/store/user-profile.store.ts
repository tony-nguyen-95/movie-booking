import { createStore } from 'satcheljs';
import { IUserProfileStore } from './user-profile.type';

const initStore: IUserProfileStore = {
  userProfile: undefined,
};

export const getStore = createStore('CoreUserStore', initStore);
