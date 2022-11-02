import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const updateLoadingCineplexAction = mutatorAction('updateloadingCineplexAction', (loadingCineplex: boolean) => {
  getStore().loadingCineplex = loadingCineplex;
});
