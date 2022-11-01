import { IMovieResponse } from '../../models';
import { API } from '../api';

export const fetchListMoviesAPI = (search?: string) => {
  return API.get<IMovieResponse[]>('/movies');
};
