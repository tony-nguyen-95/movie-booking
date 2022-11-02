import { createStore } from 'satcheljs';
import { ICineplexStore } from './cineplex.type';

const initStore: ICineplexStore = {
  cineplexList: undefined,
  loadingCineplex: false,
  cineplexSelected: undefined,
  cinemaSelectedFromCineplex: undefined,
};

export const getStore = createStore('CoreCineplexStore', initStore);
