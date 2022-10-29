import { API } from '..';
import { IUserProfile } from '../../models';

export const fetchUserProfileApi = () => {
  return new Promise<IUserProfile>((resolve, reject) => {
    API.get<IUserProfile>('/users/user-profile')
      .then((res) => {
        resolve(res.data);
      })
      .catch(reject);
  });
};
