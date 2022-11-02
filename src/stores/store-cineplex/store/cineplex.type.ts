import { ICinemaResponse, ICineplexResponse } from '../../../models';

export interface ICineplexStore {
  cineplexList: ICineplexResponse[] | undefined;
  loadingCineplex: boolean;
  cineplexSelected: ICineplexResponse | undefined;
  cinemaSelectedFromCineplex: ICinemaResponse | undefined;
}
