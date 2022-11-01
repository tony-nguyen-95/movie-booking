import { getStore } from '../store';

export const signupErrorSelector = () => {
  return getStore().signupError;
};
