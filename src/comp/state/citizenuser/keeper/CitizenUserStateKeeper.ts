import { CommandResponse, NameValueList, NotInstantiatedException } from '@nara-way/accent';
import { set } from 'lodash';
import { makeAutoObservable, runInAction } from 'mobx';
import {
  CitizenUser,
  CitizenUserApiStub,
  CitizenUserCdo,
  CitizenUserQuery,
  CitizenUserQueryApiStub,
} from '~/comp/api';
import { CitizenUserFlowApiStub } from '../../../api';


class CitizenUserStateKeeper {
  private static _instance: CitizenUserStateKeeper;

  private readonly citizenUserApi: CitizenUserApiStub;
  private readonly citizenUserQueryApi: CitizenUserQueryApiStub;
  private readonly citizenUserFlowApi: CitizenUserFlowApiStub;

  citizenUser: CitizenUser | null = null;
  pavilionId: string = '';
  loginId: string = '';
  password: string = '';
  newPassword: string = '';
  email: string = '';

  static get instance() {
    if (!CitizenUserStateKeeper._instance) {
      CitizenUserStateKeeper._instance = new CitizenUserStateKeeper();
    }
    return CitizenUserStateKeeper._instance;
  }

  constructor(
    citizenUserApi: CitizenUserApiStub = CitizenUserApiStub.instance,
    citizenUserQueryApi: CitizenUserQueryApiStub = CitizenUserQueryApiStub.instance,
    citizenUserFlowApi: CitizenUserFlowApiStub = CitizenUserFlowApiStub.instance
  ) {
    this.citizenUserApi = citizenUserApi;
    this.citizenUserQueryApi = citizenUserQueryApi;
    this.citizenUserFlowApi = citizenUserFlowApi;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  init() {
    this.citizenUser = CitizenUser.new();
  }

  setCitizenUserProp(name: string, value: any) {
    if (!this.citizenUser) {
      throw new NotInstantiatedException('CitizenUserStateKeeper.setCitizenUserProp', 'citizenUser is null');
    }
    this.citizenUser = Object.assign(CitizenUser.new(), set(this.citizenUser, name, value));
  }

  clear() {
    this.citizenUser = null;
    this.pavilionId = '';
    this.newPassword = '';
    this.password = '';
    this.loginId = '';
    this.email = '';
  }

  setPavilionId(pavilionId: string) {
    this.pavilionId = pavilionId;
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

  setEmail(email: string) {
    this.email = email;
  }

  async register(citizenUserCdo: CitizenUserCdo): Promise<CommandResponse> {
    return this.citizenUserApi.registerCitizenUser(citizenUserCdo);
  }

  async modify(citizenUserId: string, nameValues: NameValueList): Promise<CommandResponse> {
    return this.citizenUserApi.modifyCitizenUser(citizenUserId, nameValues);
  }

  async remove(citizenUserId: string): Promise<CommandResponse> {
    return this.citizenUserApi.removeCitizenUser(citizenUserId);
  }

  async findCitizenUserById(citizenUserId: string): Promise<CitizenUser> {
    const citizenUserQuery = CitizenUserQuery.by(citizenUserId);
    const citizenUser = await this.citizenUserQueryApi.executeCitizenUserQuery(citizenUserQuery);

    runInAction(() => this.citizenUser = citizenUser);
    return citizenUser;
  }

  async sendMailForResetCitizenUserPassword(pavilionId: string, loginUserId: string, email: string): Promise<CommandResponse> {
    return this.citizenUserFlowApi.sendMailForCitizenUserPassword(pavilionId, loginUserId, email);
  }
}

export default CitizenUserStateKeeper;

