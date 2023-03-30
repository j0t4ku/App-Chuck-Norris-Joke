import APIRequest from '../utils/axios.config';

export function getRandomJoke() {
  return APIRequest.get('/random', {
    validateStatus: function (status) {
      return status < 500;
    },
  });
}
