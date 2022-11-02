import { action } from 'satcheljs';

export const fetchMovieByCinemaIdWithShowtimesAction = action(
  'fetchMovieByCinemaIdWithShowtimes',
  (cinemaId: string) => {
    return { cinemaId };
  },
);
