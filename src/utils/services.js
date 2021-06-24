import { apiClient } from './request';

export function setAuthAccessToken(token) {
    localStorage.setItem('access_token', token);
    apiClient.defaults.headers.Authorization = `Bearer ${token}`;
}

export function deleteAuthAccessToken() {
    localStorage.removeItem('access_token');
    delete apiClient.defaults.headers.Authorization;
}
