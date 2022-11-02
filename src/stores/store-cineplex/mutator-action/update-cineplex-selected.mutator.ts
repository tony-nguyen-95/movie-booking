import { mutatorAction } from 'satcheljs';
import { ICineplexResponse } from '../../../models';
import { getStore } from '../store';

export const updateCineplexSelectedAction = mutatorAction(
  'updateCineplexSelectedAction',
  (cineplexSelected: ICineplexResponse | undefined) => {
    getStore().cineplexSelected = cineplexSelected;
  },
);
