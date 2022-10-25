import axios from 'axios';

const getBaseUrl = () => {
  switch (window.location.hostname) {
    default:
      return 'https://api.openweathermap.org/data/2.5/forecast?lat=41&lon=69&appid=efa9b2c365ff6d768ba4a6bc188cdff2&units=metric&cnt=5';
  }
};
const instance = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;