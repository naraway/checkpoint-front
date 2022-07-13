import { ApiClient, autobind } from '@nara-way/prologue';
import { getGeolocationData } from '../../../feature/shared/util/GeolocationUtil';
import { ServantLoginResponse } from '../api-model';

class ServantUserAuthApiStub {
  private static _instance: ServantUserAuthApiStub;

  static get instance() {
    if (!ServantUserAuthApiStub._instance) {
      ServantUserAuthApiStub._instance = new ServantUserAuthApiStub();
    }
    return ServantUserAuthApiStub._instance;
  }

  private readonly client = new ApiClient('/api/checkpoint');

  constructor() {
    autobind(this);
  }

  async login(loginEmailId: string, password: string): Promise<ServantLoginResponse> {
    const geoData = await getGeolocationData();
    const postData = new FormData();

    postData.append('grant_type', 'password');
    postData.append('scope', 'servant');
    postData.append('username', loginEmailId);
    postData.append('password', password);
    postData.append('location', geoData.location);
    postData.append('deviceIp', geoData.deviceIp);
    if (window) {
      postData.append('pavilion-domain-url', window.location.hostname);
    }

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa('nara:narasecret'),
      },
      noAuth: true,
      noCatch: true,
    };

    return this.client.postNotNull<ServantLoginResponse>(ServantLoginResponse, '/oauth/token', postData, config)
      .catch(e => ServantLoginResponse.fromError(e.response.data));
  }

  async refresh(refreshToken: string): Promise<ServantLoginResponse> {
    //
    const postData = new FormData();

    postData.append('grant_type', 'refresh_token');
    postData.append('scope', 'servant');
    postData.append('refresh_token', refreshToken);

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa('nara:narasecret'),
      },
      noAuth: true,
      noCatch: true,
    };

    return this.client.postNotNull<ServantLoginResponse>(ServantLoginResponse, '/oauth/token', postData, config)
      .catch(e => ServantLoginResponse.fromError(e.response.data));
  }
}

export default ServantUserAuthApiStub;
