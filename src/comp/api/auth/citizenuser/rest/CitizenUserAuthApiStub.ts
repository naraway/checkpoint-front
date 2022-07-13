import { ApiClient, autobind } from '@nara-way/prologue';
import { CitizenLoginResponse } from '../api-model';
import { getGeolocationData } from '../../../feature/shared/util/GeolocationUtil';

class CitizenUserAuthApiStub {
  private static _instance: CitizenUserAuthApiStub;

  static get instance() {
    if (!CitizenUserAuthApiStub._instance) {
      CitizenUserAuthApiStub._instance = new CitizenUserAuthApiStub();
    }
    return CitizenUserAuthApiStub._instance;
  }

  private readonly client = new ApiClient('/api/checkpoint');

  constructor() {
    autobind(this);
  }

  async login(email: string, password: string, pavilionId: string): Promise<CitizenLoginResponse> {
    const geoData = await getGeolocationData();
    const postData = new FormData();

    postData.append('grant_type', 'password');
    postData.append('username', email);
    postData.append('password', password);
    postData.append('pavilion-id', pavilionId);
    postData.append('scope', 'citizen');
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

    return this.client.postNotNull<CitizenLoginResponse>(CitizenLoginResponse, '/oauth/token', postData, config)
      .catch((e) => CitizenLoginResponse.fromError(e.response ? e.response.data : CitizenLoginResponse.genResponseNullError()));
  }

  async refresh(refreshToken: string): Promise<CitizenLoginResponse> {
    //
    const postData = new FormData();

    postData.append('grant_type', 'refresh_token');
    postData.append('scope', 'citizen');
    postData.append('refresh_token', refreshToken);

    const config = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + btoa('nara:narasecret'),
      },
      noAuth: true,
      noCatch: true,
    };

    return this.client.postNotNull<CitizenLoginResponse>(CitizenLoginResponse, '/oauth/token', postData, config)
      .catch(e => CitizenLoginResponse.fromError(e.response.data));
  }
}

export default CitizenUserAuthApiStub;
