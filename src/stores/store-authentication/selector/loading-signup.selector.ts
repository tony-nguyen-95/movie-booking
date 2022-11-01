import { getStore } from '../store';

export const loadingSignupSelector = () => {
  return getStore().loadingSignup;
};
