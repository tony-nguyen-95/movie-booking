import { getStore } from '../store';

export const showtimeIdSelector = (): number | undefined => {
  return getStore().showtimeId;
};
