import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
    baseURL: process.env.API_PATH,
    headers: {
        Accept: 'application/json',
        'Content-Type':
            'application/json;multipart/form-data;application/x-www-form-urlencoded',
    },
    withCredentials: false,
};

const $apiClient: AxiosInstance = axios.create(config);

export { $apiClient };
