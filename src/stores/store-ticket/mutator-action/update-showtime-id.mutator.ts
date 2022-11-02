import { mutatorAction } from 'satcheljs';
import { getStore } from '../store';

export const updateShowtimeIdAction = mutatorAction('updateShowtimeIdAction', (showtimeId: number | undefined) => {
  getStore().showtimeId = showtimeId;
});
