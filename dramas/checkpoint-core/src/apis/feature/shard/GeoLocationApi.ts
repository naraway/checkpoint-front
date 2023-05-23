import _axios from 'axios';
import { GeoLocation } from './GeoLocationResponse';

const getGeoLocation = async () => {
  const axios = _axios.create({ timeout: 5000 });

  const response = await axios.get<GeoLocation>('https://geolocation-db.com/json/');
  const { country_name, state, city, IPv4 } = response.data;
  const location = `${country_name}:${state}:${city}`;

  return { location, deviceIp: IPv4 };
};

export default {
  getGeoLocation,
};
