import axios from 'axios';
import { ApiError } from '.';
import { logOutAction } from '../stores/store-authentication/action';

const API_ENDPOINT = 'http://localhost:5000/api';

const API = axios.create({
  baseURL: `${API_ENDPOINT}`,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
});

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: ApiError) => {
    if (error?.response?.status === 401) {
      logOutAction();
    }
    throw error?.response?.data?.code || 1; // 1: default error code
  },
);

const ThrowApiError = (error: ApiError) => {
  if (error.isAxiosError) throw error.response?.data.code;
  throw error;
};

const setApiAccessToken = (accessToken: string | undefined) => {
  if (accessToken) API.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  else delete API.defaults.headers.common.Authorization;
};

export { API, ThrowApiError, setApiAccessToken };
