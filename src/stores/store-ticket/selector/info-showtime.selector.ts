import { getStore, IInfoShowtime } from '../store';

export const infoShowtimeSelector = (): IInfoShowtime | undefined => {
  return getStore().infoShowtime;
};
