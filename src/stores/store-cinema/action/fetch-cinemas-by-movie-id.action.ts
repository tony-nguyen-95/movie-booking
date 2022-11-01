import { action } from 'satcheljs';

export const fetchCinemasByMovieIdAction = action('fetchCinemasByMovieId', (movieId: number) => {
  return { movieId };
});
