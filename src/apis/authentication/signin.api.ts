import { ISignInResponseData } from '../../models';
import { API } from '../api';

export const signinAPI = (username: string, password: string) => {
  const formData = new URLSearchParams();
  formData.append('username', username);
  formData.append('password', password);

  return API.post<ISignInResponseData>('/auth/signin', formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'clean-request': 'no-clean',
    },
  });
};
