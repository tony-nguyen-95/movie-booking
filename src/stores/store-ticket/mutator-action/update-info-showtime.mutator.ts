import { mutatorAction } from 'satcheljs';
import { getStore, IInfoShowtime } from '../store';

export const updateInfoShowtimeAction = mutatorAction('updateInfoShowtimeAction', (infoShowtime: IInfoShowtime) => {
  getStore().infoShowtime = infoShowtime;
});
