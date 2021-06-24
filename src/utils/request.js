import axios from 'axios';

const config = {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        Accept: 'application/json',
        'Content-Type':'application/json;multipart/form-data;application/x-www-form-urlencoded',
    },
    withCredentials: false,
};

const apiClient = axios.create(config);

export { apiClient };
