import { action } from 'satcheljs';

export const fetchMovieByCinemaIdAction = action('fetchMovieByCinemaId', (cinemaId: string) => {
  return { cinemaId };
});
