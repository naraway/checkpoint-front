import { IdName, NaraException } from '@nara-way/accent';
import { autobind, WebStorage } from '@nara-way/prologue';
import { CitizenUser } from '~/comp/api';
import { CitizenLoginResponse } from '../api-model';
import { CitizenUserAuthApiStub } from '../rest';


class CitizenAuthStorage {
  private static _instance: CitizenAuthStorage;

  static get instance() {
    if (!CitizenAuthStorage._instance) {
      CitizenAuthStorage._instance = new CitizenAuthStorage();
    }
    return CitizenAuthStorage._instance;
  }

  private readonly citizenUserAuthApi: CitizenUserAuthApiStub;

  private loggedIn = WebStorage.newLocal<boolean>('isLogin');
  private citizenUser = WebStorage.newLocal<CitizenUser>('citizenUser');
  private accessToken = WebStorage.newLocal<string>('accessToken', String);
  private refreshToken = WebStorage.newLocal<string>('refreshToken', String);
  private citizenSessionId = WebStorage.newLocal<string>('citizenSessionId', String);

  private audience = WebStorage.newLocal<IdName>('audience', IdName.fromDomain);
  private cineroomIds = WebStorage.newLocal<string[]>('cineroomIds', Array);
  private actor = WebStorage.newLocal<IdName>('actor', IdName.fromDomain);
  private stage = WebStorage.newLocal<IdName>('stage', IdName.fromDomain);

  private rememberMe = WebStorage.newCookie<string>('citizen.rememberMe', String);

  constructor(citizenUserAuthApi: CitizenUserAuthApiStub = CitizenUserAuthApiStub.instance) {
    this.citizenUserAuthApi = citizenUserAuthApi;
    autobind(this);
  }

  clear(): void {
    this.loggedIn.remove();
    this.citizenUser.remove();
    this.accessToken.remove();
    this.refreshToken.remove();
    this.citizenSessionId.remove();
    this.audience.remove();
    this.cineroomIds.remove();
    this.stage.remove();
    this.actor.remove();
  }

  async login(loginId: string, password: string, input_pavilionId: string): Promise<CitizenLoginResponse> {
    const response = await this.citizenUserAuthApi.login(loginId, password, input_pavilionId);

    if (!this.verifyResponse(response)) {
      return response;
    }

    const responseData = response.getQueryResult();
    console.log("*** CitizenLoginResponse ***");
    console.log(responseData);
    const { accessToken, refreshToken, pavilionId, displayName, email, additionalInformation } = responseData;
    const citizenSessionId = responseData.additionalInformation['citizenSessionId'];

    const citizenUser = new CitizenUser(pavilionId, loginId, '', email, displayName, false);
    citizenUser.additionalInformation = responseData.additionalInformation;
    this.setAuth(accessToken, refreshToken, citizenUser, citizenSessionId);

    return response;
  }

  async refresh(currentRefreshToken?: string): Promise<CitizenLoginResponse> {
    const token = currentRefreshToken || this.getToken().refresh || '';
    const response = await this.citizenUserAuthApi.refresh(token);

    if (!this.verifyResponse(response)) {
      return response;
    }

    const responseData = response.getQueryResult();
    const { loginId, accessToken, refreshToken, pavilionId, displayName, email, additionalInformation } = responseData;
    const citizenSessionId = responseData.additionalInformation['citizenSessionId'];

    const citizenUser = new CitizenUser(pavilionId, loginId, '', email, displayName, false);
    citizenUser.additionalInformation = responseData.additionalInformation;
    this.setAuth(accessToken, refreshToken, citizenUser, citizenSessionId);
    return response;
  }

  setAuth(accessToken: string, refreshToken: string, citizenUser: CitizenUser, citizenSessionId: string) {
    const cineroomIds = citizenUser.additionalInformation ? (citizenUser.additionalInformation['cineroomIds'] as string[]) || [] : [];

    this.setToken(accessToken, refreshToken);
    this.setCitizenUser(citizenUser);
    this.setCitizenSessionId(citizenSessionId);
    this.setCineroomIds(cineroomIds);
    this.setLogin();
  }

  isLogin(): boolean {
    return this.loggedIn.load() || false;
  }

  setLogin(): void {
    this.loggedIn.save(true);
  }

  getCitizenUser(): CitizenUser {
    return this.citizenUser.load() || CitizenUser.new();
  }

  setCitizenUser(citizenUser: CitizenUser): void {
    this.citizenUser.save(citizenUser);
  }

  getAudience(): IdName | null {
    return this.audience.load();
  }

  setAudience(tenant: IdName): void {
    this.audience.save(tenant);
  }

  getActor(): IdName | null {
    return this.actor.load();
  }

  setActor(tenant: IdName): void {
    this.actor.save(tenant);
  }

  getCineroomIds(): string[] | null {
    return this.cineroomIds.load();
  }

  setCineroomIds(cineroomIds: string[]) {
    this.cineroomIds.save(cineroomIds);
  }

  getStage(): IdName | null {
    return this.stage.load();
  }

  setStage(stage: IdName) {
    this.stage.save(stage);
  }

  setCitizenSessionId(citizenSessionId: string) {
    this.citizenSessionId.save(citizenSessionId);
  }

  getCitizenSessionId() {
    return this.citizenSessionId.load();
  }

  getToken(): { access: string | null; refresh: string | null } {
    return {
      access: this.accessToken.load(),
      refresh: this.refreshToken.load(),
    };
  }

  setToken(accesToken: string, refreshToken: string): void {
    this.accessToken.save(accesToken);
    this.refreshToken.save(refreshToken);
  }

  setRememberMe(): void {
    const token = this.getToken().refresh as string;
    this.rememberMe.save(token);
  }

  getRememberMe(): string {
    return this.rememberMe.load() || '';
  }

  removeRememberMe() {
    this.rememberMe.remove();
  }

  private verifyResponse(response: CitizenLoginResponse): boolean {
    if (!response.success) {
      console.warn(`[ checkpoint.citizenuser ] Failed to login.`);
      return false;
    }
    const accessToken = response.getQueryResult().accessToken;
    const refreshToken = response.getQueryResult().refreshToken;

    if (!(accessToken && refreshToken)) {
      throw new NaraException(
        'citizenuser',
        `Failed to login. Token is invalid -> { access: ${accessToken}, refresh: ${refreshToken}}`
      );
    }
    return true;
  }
}

export default CitizenAuthStorage;
