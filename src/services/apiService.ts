import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7229/',
    timeout: 10000,
});

export default api;
