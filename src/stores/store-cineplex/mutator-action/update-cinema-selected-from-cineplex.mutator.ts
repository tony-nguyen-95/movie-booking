import { mutatorAction } from 'satcheljs';
import { ICinemaResponse } from '../../../models';
import { getStore } from '../store';

export const updateCinemaSelectedFromCineplexAction = mutatorAction(
  'updateCinemaSelectedFromCineplexAction',
  (cinemaSelectedFromCineplex: ICinemaResponse | undefined) => {
    getStore().cinemaSelectedFromCineplex = cinemaSelectedFromCineplex;
  },
);
