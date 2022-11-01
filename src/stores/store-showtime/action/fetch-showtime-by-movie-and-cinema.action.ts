import { action } from 'satcheljs';

export const fetchShowtimeByMovieAndCinemaAction = action(
  'fetchShowtimeByMovieAndCinemaAction',
  (movieId: number, cinemaId: string) => {
    return { movieId, cinemaId };
  },
);
