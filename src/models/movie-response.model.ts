import { IShowtimeReponse } from './showtime-response.model';

export interface IMovieResponse {
  id?: number;
  title?: string;
  trailerUrl?: string;
  verticalBanner?: string;
  releaseDate?: string;
  storyAuthor?: string;
  director?: string;
  description?: string;
  scorePercent?: number;
  category?: string;
  updateDate?: Date;
  showtimes?: IShowtimeReponse[];
}
