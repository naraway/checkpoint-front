import axios from 'axios';

export async function getGeolocationData() {
  const defaultAxios = axios.create({});
  const res = await defaultAxios.get('https://geolocation-db.com/json/');
  console.log(res.data);
  const geoData = res.data;
  const location = geoData.country_name + ':' + geoData.state + ':' + geoData.city;
  const deviceIp = geoData.IPv4;
  return { location, deviceIp };
}
