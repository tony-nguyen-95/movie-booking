import { ICinemaResponse } from '../../models';
import { API } from '../api';

export const fetchListCinemasAPI = () => {
  return API.get<ICinemaResponse[]>('/cinemas');
};
