import axios from 'axios';

const ApiToolKit = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
  headers: {
    'Content-Type': 'application/json',
  },
});
export default ApiToolKit;
