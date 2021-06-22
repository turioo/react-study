import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type':'application/json;multipart/form-data;application/x-www-form-urlencoded',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    },
    withCredentials: false,
};

const $apiClient: AxiosInstance = axios.create(config);

const configResource: AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_RESOURCES_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type':
            'application/json;multipart/form-data;application/x-www-form-urlencoded',
        'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    },
    withCredentials: false,
};

const $apiResourcesClient: AxiosInstance = axios.create(configResource);

export { $apiClient, $apiResourcesClient };
