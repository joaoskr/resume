import axios from 'axios';

const api = axios.create({
  baseURL: 'https://joaov-api.herokuapp.com',
});

export default api;
