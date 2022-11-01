import { ICinemaResponse } from '../../../models';

export interface ICinemaStore {
  cinemaList: ICinemaResponse[] | undefined;
  cinemasByMovieId: ICinemaResponse[] | undefined;
}
