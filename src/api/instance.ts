import axios from 'axios';

const getBaseUrl = () => {
  switch (window.location.hostname) {
    default:
      return 'http://api.openweathermap.org/data/2.5/forecast?lat=40&lon=40&appid=530d4e8348e4adc2839e9c6aa4a74d1b';
  }
};

const instance = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;