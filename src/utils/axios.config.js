import axios from 'axios';

// Default Config For Axios

export default axios.create({
  baseURL: 'https://api.chucknorris.io/jokes',
  responseType: 'json',
  timeout: 5000,
});