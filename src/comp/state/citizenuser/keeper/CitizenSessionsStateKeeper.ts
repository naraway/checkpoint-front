import {
  DynamicQueryRequest,
  NotInstantiatedException,
  Offset,
  OffsetElementList,
  Operator,
  QueryParam,
} from '@nara-way/accent';
import { set } from 'lodash';
import { makeAutoObservable, runInAction } from 'mobx';
import { CitizenSession, CitizenSessionQueryApiStub, CitizenSessionsDynamicQuery } from '~/comp/api';


class CitizenSessionsStateKeeper {
  private static _instance: CitizenSessionsStateKeeper;

  private readonly citizenSessionQueryApi: CitizenSessionQueryApiStub;

  citizenSessions: CitizenSession[] = [];

  static get instance() {
    if (!CitizenSessionsStateKeeper._instance) {
      CitizenSessionsStateKeeper._instance = new CitizenSessionsStateKeeper();
    }
    return CitizenSessionsStateKeeper._instance;
  }

  constructor(
    citizenSessionQueryApi: CitizenSessionQueryApiStub = CitizenSessionQueryApiStub.instance
  ) {
    this.citizenSessionQueryApi = citizenSessionQueryApi;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setCitizenSessionProp(index: number, name: string, value: any) {
    if (!this.citizenSessions || !this.citizenSessions[index]) {
      throw new NotInstantiatedException('CitizenSessionsStateKeeper.setCitizenSessionProp', `citizenSessions[${index}] is null`);
    }
    this.citizenSessions[index] = Object.assign(CitizenSession.new(), set(this.citizenSessions[index], name, value));
  }

  clear() {
    this.citizenSessions = [];
  }

  async findCitizenSessionsWithFilter(params: any, offset: Offset): Promise<OffsetElementList<CitizenSession>> {
    const citizenSessionsDynamicQuery = CitizenSessionsDynamicQuery.multiParams<CitizenSession[]>(
      ...params,
    );

    citizenSessionsDynamicQuery.offset = offset;

    const offsetElementList = await this.citizenSessionQueryApi.executeCitizenSessionsPagingDynamicQuery(citizenSessionsDynamicQuery);
    runInAction(() => {
      this.citizenSessions = offsetElementList.results;
    });
    return offsetElementList;
  }

  async findCitizenSessions(offset: number, limit: number): Promise<OffsetElementList<CitizenSession>> {
    const citizenSessionsDynamicQuery = CitizenSessionsDynamicQuery.multiParams<CitizenSession[]>(
      QueryParam.endParam('id', Operator.Equal, '*')
    );
    citizenSessionsDynamicQuery.offset = Offset.newAscending(offset, limit);
    citizenSessionsDynamicQuery.offset.sortingField = 'id';

    const offsetElementList = await this.citizenSessionQueryApi.executeCitizenSessionsPagingDynamicQuery(citizenSessionsDynamicQuery);
    runInAction(() => {
      this.citizenSessions = offsetElementList.results;
    });
    return offsetElementList;
  }

  async findCitizenSessionsWithDynamicQuery(query: DynamicQueryRequest<CitizenSession[]>): Promise<CitizenSession[]> {
    const citizenSessions = await this.citizenSessionQueryApi.executeCitizenSessionsDynamicQuery(query);
    runInAction(() => this.citizenSessions = citizenSessions);
    return citizenSessions;
  }

  async findCitizenSessionsByIds(ids: string[], offset: Offset): Promise<OffsetElementList<CitizenSession>> {
    const citizenSessionsDynamicQuery = CitizenSessionsDynamicQuery.multiParams<CitizenSession[]>(
      QueryParam.endParam('id', Operator.In, this.arrayToString(ids))
    );
    citizenSessionsDynamicQuery.offset = offset;

    const offsetElementList = await this.citizenSessionQueryApi.executeCitizenSessionsPagingDynamicQuery(citizenSessionsDynamicQuery);
    runInAction(() => {
      this.citizenSessions = offsetElementList.results;
    });
    return offsetElementList;
  }

  private arrayToString(values: string[]): string {
    if (values.length === 0) {
      return '["*"]';
    }
    const valuesString = values.map(value => `${'"'}${value}${'"'}`).toString();
    return `[${valuesString}]`;
  }

}

export default CitizenSessionsStateKeeper;

