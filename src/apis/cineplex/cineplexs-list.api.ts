import { ICineplexResponse } from '../../models';
import { API } from '../api';

export const fetchListCineplexsAPI = () => {
  return API.get<ICineplexResponse[]>('/cineplexs');
};
