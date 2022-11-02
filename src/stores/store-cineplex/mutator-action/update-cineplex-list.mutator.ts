import { mutatorAction } from 'satcheljs';
import { ICineplexResponse } from '../../../models';
import { getStore } from '../store';

export const updateCineplexListAction = mutatorAction(
  'updatecineplexListAction',
  (cineplexList: ICineplexResponse[] | undefined) => {
    getStore().cineplexList = cineplexList;
  },
);
