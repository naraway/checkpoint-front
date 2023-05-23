import _axios from 'axios';
import { AuthorizationGrantType, AuthorizationResponse, AuthorizationScopeType } from '../../models';
import { GeoLocationApi } from '../feature';

const url = (path: string) => `/api/checkpoint/oauth${path}`;
const auth = 'nara:narasecret';

const issueToken = async ({
  username,
  password,
  pavilionId,
  location,
  deviceIp,
}: {
  username: string;
  password: string;
  pavilionId: string;
  location?: string;
  deviceIp?: string;
}) => {
  const axios = _axios.create({ timeout: 10000 });

  const grantType = AuthorizationGrantType.PASSWORD;
  const scope = AuthorizationScopeType.CITIZEN;
  if (!location || !deviceIp) {
    try {
      const geoLocation = await GeoLocationApi.getGeoLocation();
      if (!location) {
        location = geoLocation.location;
      }
      if (!deviceIp) {
        deviceIp = geoLocation.deviceIp;
      }
    } catch (e) {
      // skip error
    }
  }

  const form = new FormData();
  form.append('grant_type', grantType);
  form.append('scope', scope);
  form.append('username', username);
  form.append('password', password);
  form.append('pavilion_id', pavilionId);
  form.append('location', location || '');
  form.append('device_ip', deviceIp || '');
  if (window) {
    form.append('domain_url', window.location.hostname);
  }

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(auth),
    },
    noAuth: true,
    noCatch: true,
  };

  return axios.post<AuthorizationResponse>(url('/token'), form, config);
};

const refreshToken = ({ refreshToken }: { refreshToken: string }) => {
  const axios = _axios.create({ timeout: 10000 });

  const grantType = AuthorizationGrantType.REFRESH_TOKEN;

  const form = new FormData();
  form.append('grant_type', grantType);
  form.append('refresh_token', refreshToken);

  const config = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: 'Basic ' + btoa(auth),
    },
    noAuth: true,
    noCatch: true,
  };

  return axios.post<AuthorizationResponse>(url('/token'), form, config);
};

export default {
  issueToken,
  refreshToken,
};
