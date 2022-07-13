import { CommandResponse, NameValueList, NotInstantiatedException } from '@nara-way/accent';
import { set } from 'lodash';
import { makeAutoObservable, runInAction } from 'mobx';
import {
  getGeolocationData,
  ServantUser,
  ServantUserApiStub,
  ServantUserCdo,
  ServantUserQuery,
  ServantUserQueryApiStub,
} from '~/comp/api';
import { ServantUserFlowApiStub } from '../../../api';


class ServantUserStateKeeper {
  private static _instance: ServantUserStateKeeper;

  private readonly servantUserApi: ServantUserApiStub;
  private readonly servantUserQueryApi: ServantUserQueryApiStub;
  private readonly servantUserFlowApi: ServantUserFlowApiStub;

  servantUser: ServantUser | null = null;
  newPassword: string = '';
  password: string = '';
  loginId: string = '';

  static get instance() {
    if (!ServantUserStateKeeper._instance) {
      ServantUserStateKeeper._instance = new ServantUserStateKeeper();
    }
    return ServantUserStateKeeper._instance;
  }

  constructor(
    servantUserApi: ServantUserApiStub = ServantUserApiStub.instance,
    servantUserQueryApi: ServantUserQueryApiStub = ServantUserQueryApiStub.instance,
    servantUserFlowApi: ServantUserFlowApiStub = ServantUserFlowApiStub.instance,
  ) {
    this.servantUserApi = servantUserApi;
    this.servantUserQueryApi = servantUserQueryApi;
    this.servantUserFlowApi = servantUserFlowApi;
    makeAutoObservable(this, {}, { autoBind:true });
  }

  init() {
    this.servantUser = ServantUser.new();
  }

  setServantUserProp(name: string, value: any) {
    if (!this.servantUser) {
      throw new NotInstantiatedException('ServantUserStateKeeper.setServantUserProp', 'servantUser is null');
    }
    this.servantUser = Object.assign(ServantUser.new(), set(this.servantUser, name, value));
  }

  clear() {
    this.servantUser = null;
    this.newPassword = '';
    this.password = '';
    this.loginId = '';
  }

  setNewPassword(newPassword: string) {
    this.newPassword = newPassword;
  }

  setPassword(password: string) {
    this.password = password;
  }

  setLoginId(loginId: string) {
    this.loginId = loginId;
  }

  async register(servantUserCdo: ServantUserCdo): Promise<CommandResponse> {
    return this.servantUserApi.registerServantUser(servantUserCdo);
  }

  async modify(servantUserId: string, nameValues: NameValueList): Promise<CommandResponse> {
    return this.servantUserApi.modifyServantUser(servantUserId, nameValues);
  }

  async remove(servantUserId: string): Promise<CommandResponse> {
    return this.servantUserApi.removeServantUser(servantUserId);
  }

  async findServantUserById(servantUserId: string): Promise<ServantUser> {
    const servantUserQuery = ServantUserQuery.by(servantUserId);
    const servantUser = await this.servantUserQueryApi.executeServantUserQuery(servantUserQuery);

    runInAction(() => this.servantUser = servantUser);
    return servantUser;
  }

  async changeServantUserPassword(loginEmailId: string, password: string, newPassword: string): Promise<CommandResponse> {
    const geoData = await getGeolocationData();
    return this.servantUserFlowApi.changeServantUserPassword(loginEmailId, geoData.location, geoData.deviceIp, password, newPassword);
  }
}

export default ServantUserStateKeeper;

