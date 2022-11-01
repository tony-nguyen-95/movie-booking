import { mutatorAction } from 'satcheljs';
import { ICinemaResponse } from '../../../models';
import { getStore } from '../store';

export const updateCinemasByMovieIdAction = mutatorAction(
  'updateCinemasByMovieIdAction',
  (cinemaList: ICinemaResponse[] | undefined) => {
    getStore().cinemasByMovieId = cinemaList?.sort((a, b) => {
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
