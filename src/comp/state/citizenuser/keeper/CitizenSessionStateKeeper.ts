import { CommandResponse, NameValueList, NotInstantiatedException } from '@nara-way/accent';
import { set } from 'lodash';
import { makeAutoObservable, runInAction } from 'mobx';
import {
  CitizenSession,
  CitizenSessionCdo,
  CitizenSessionQuery,
  CitizenSessionQueryApiStub,
  CitizenUserApiStub,
} from '~/comp/api';


class CitizenSessionStateKeeper {
  private static _instance: CitizenSessionStateKeeper;

  private readonly citizenSessionApi: CitizenUserApiStub;
  private readonly citizenSessionQueryApi: CitizenSessionQueryApiStub;

  citizenSession: CitizenSession | null = null;

  static get instance() {
    if (!CitizenSessionStateKeeper._instance) {
      CitizenSessionStateKeeper._instance = new CitizenSessionStateKeeper();
    }
    return CitizenSessionStateKeeper._instance;
  }

  constructor(
    citizenSessionApi: CitizenUserApiStub = CitizenUserApiStub.instance,
    citizenSessionQueryApi: CitizenSessionQueryApiStub = CitizenSessionQueryApiStub.instance
  ) {
    this.citizenSessionApi = citizenSessionApi;
    this.citizenSessionQueryApi = citizenSessionQueryApi;
    makeAutoObservable(this, {}, { autoBind:true });
  }

  init() {
    this.citizenSession = CitizenSession.new();
  }

  setCitizenSessionProp(name: string, value: any) {
    if (!this.citizenSession) {
      throw new NotInstantiatedException('CitizenSessionStateKeeper.setCitizenSessionProp', 'citizenSession is null');
    }
    this.citizenSession = Object.assign(CitizenSession.new(), set(this.citizenSession, name, value));
  }

  clear() {
    this.citizenSession = null;
  }

  async register(citizenSessionCdo: CitizenSessionCdo): Promise<CommandResponse> {
    return this.citizenSessionApi.registerCitizenSession(citizenSessionCdo);
  }

  async modify(citizenSessionId: string, nameValues: NameValueList): Promise<CommandResponse> {
    return this.citizenSessionApi.modifyCitizenSession(citizenSessionId, nameValues);
  }

  async remove(citizenSessionId: string): Promise<CommandResponse> {
    return this.citizenSessionApi.removeCitizenSession(citizenSessionId);
  }

  async findCitizenSessionById(citizenSessionId: string): Promise<CitizenSession> {
    const citizenSessionQuery = CitizenSessionQuery.by(citizenSessionId);
    const citizenSession = await this.citizenSessionQueryApi.executeCitizenSessionQuery(citizenSessionQuery);

    runInAction(() => this.citizenSession = citizenSession);
    return citizenSession;
  }

}

export default CitizenSessionStateKeeper;

