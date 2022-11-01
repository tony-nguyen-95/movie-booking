import { mutatorAction } from 'satcheljs';
import { ICinemaResponse } from '../../../models';
import { getStore } from '../store';

export const updateCinemaListAction = mutatorAction(
  'updateCinemaListAction',
  (cinemaList: ICinemaResponse[] | undefined) => {
    getStore().cinemaList = cinemaList?.sort((a, b) => {
      if (a.cinemaName && b.cinemaName) {
        if (a.cinemaName < b.cinemaName) {
          return -1;
        }
        if (a.cinemaName > b.cinemaName) {
          return 1;
        }
      }
      return 0;
    });
  },
);
