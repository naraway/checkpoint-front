import { IdName, NaraException } from '@nara-way/accent';
import { autobind, WebStorage } from '@nara-way/prologue';
import { ServantUser } from '~/comp/api';
import ServantLoginResponse from '../api-model/ServantLoginResponse';
import { ServantUserAuthApiStub } from '../rest';


class ServantAuthStorage {
  private static _instance: ServantAuthStorage;

  static get instance() {
    if (!ServantAuthStorage._instance) {
      ServantAuthStorage._instance = new ServantAuthStorage();
    }
    return ServantAuthStorage._instance;
  }

  private readonly servantUserAuthApi: ServantUserAuthApiStub;

  private loggedIn = WebStorage.newLocal<boolean>('isLogin');
  private servantUser = WebStorage.newLocal<ServantUser>('servantUser');
  private accessToken = WebStorage.newLocal<string>('accessToken', String);
  private refreshToken = WebStorage.newLocal<string>('refreshToken', String);
  private officeServant = WebStorage.newLocal<IdName>('officeServant', IdName.fromDomain);   // {id: officeServantId / name: officeServantType} set to header by setAxiosConfigure
  private officeIds = WebStorage.newLocal<string[]>('officeIds', Array);   // {id: officeServantId / name: officeServantType} set to header by setAxiosConfigure

  constructor(servantUserAuthApi: ServantUserAuthApiStub = ServantUserAuthApiStub.instance) {
    this.servantUserAuthApi = servantUserAuthApi;
    autobind(this);
  }

  clear(): void {
    this.loggedIn.remove();
    this.servantUser.remove();
    this.accessToken.remove();
    this.refreshToken.remove();
    this.officeServant.remove();
    this.officeIds.remove();
  }

  async login(email: string, password: string): Promise<ServantLoginResponse> {
    const response = await this.servantUserAuthApi.login(email, password);

    if (!this.verifyResponse(response)) {
      return response;
    }

    const responseData = response.getQueryResult();
    const { accessToken, refreshToken, displayName, officeIds, publicServantId } = responseData;

    this.setAuth(accessToken, refreshToken, new ServantUser(email, '', displayName, publicServantId, true), officeIds);

    return response;
  }

  async refresh(): Promise<ServantLoginResponse> {
    const token = this.getToken().refresh || '';
    const response = await this.servantUserAuthApi.refresh(token);

    if (!this.verifyResponse(response)) {
      return response;
    }

    const responseData = response.getQueryResult();
    const { accessToken, refreshToken, loginId, displayName, officeIds, publicServantId } = responseData;

    this.setAuth(accessToken, refreshToken, new ServantUser(loginId, '', displayName, publicServantId, true), officeIds);
    return response;
  }

  setAuth(accessToken: string, refreshToken: string, servantUser: ServantUser, officeIds: string[]) {
    this.setToken(accessToken, refreshToken);
    this.setServantUser(servantUser);
    this.setOfficeIds(officeIds);
    this.setLogin();
  }

  isLogin(): boolean {
    return this.loggedIn.load() || false;
  }

  setLogin(): void {
    this.loggedIn.save(true);
  }

  getServantUser(): ServantUser {
    return this.servantUser.load() || ServantUser.new();
  }

  setServantUser(servantUser: ServantUser): void {
    this.servantUser.save(servantUser);
  }

  getOfficeServant(): IdName | null {
    return this.officeServant.load();
  }

  setOfficeServant(officeServant: IdName): void {
    this.officeServant.save(officeServant);
  }

  getOfficeIds(): string[] | null {
    return this.officeIds.load();
  }

  setOfficeIds(officeIds: string[]) {
    this.officeIds.save(officeIds);
  }

  getToken(): { access: string | null; refresh: string | null } {
    return {
      access: this.accessToken.load(),
      refresh: this.refreshToken.load(),
    };
  }

  setToken(accessToken: string, refreshToken: string): void {
    this.accessToken.save(accessToken);
    this.refreshToken.save(refreshToken);
  }

  private verifyResponse(response: ServantLoginResponse): boolean {
    if (!response.success) {
      console.warn(`[ checkpoint.servantuser ] Failed to login.`);
      return false;
    }
    const accessToken = response.getQueryResult().accessToken;
    const refreshToken = response.getQueryResult().refreshToken;

    if (!(accessToken && refreshToken)) {
      throw new NaraException(
        'servantuser',
        `Failed to login. Token is invalid -> { access: ${accessToken}, refresh: ${refreshToken}}`
      );
    }
    return true;
  }
}

export default ServantAuthStorage;
