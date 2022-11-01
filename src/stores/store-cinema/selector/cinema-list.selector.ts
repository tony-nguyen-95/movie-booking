import { ICinemaResponse } from '../../../models';
import { getStore } from '../store';

export const cinemaListSelector = (): ICinemaResponse[] | undefined => {
  return getStore().cinemaList;
};
