import { ICinemaResponse } from './cinema-response.model';

export interface ICineplexResponse {
  id?: string;
  cineplexName?: string;
  logo?: string;
  updateDate?: string;
  cinemas: ICinemaResponse[];
}
