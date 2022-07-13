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
import { CitizenUser, CitizenUserQueryApiStub, CitizenUsersDynamicQuery } from '~/comp/api';


class CitizenUsersStateKeeper {
  private static _instance: CitizenUsersStateKeeper;

  private readonly citizenUserQueryApi: CitizenUserQueryApiStub;

  citizenUsers: CitizenUser[] = [];

  static get instance() {
    if (!CitizenUsersStateKeeper._instance) {
      CitizenUsersStateKeeper._instance = new CitizenUsersStateKeeper();
    }
    return CitizenUsersStateKeeper._instance;
  }

  constructor(
    citizenUserQueryApi: CitizenUserQueryApiStub = CitizenUserQueryApiStub.instance
  ) {
    this.citizenUserQueryApi = citizenUserQueryApi;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setCitizenUserProp(index: number, name: string, value: any) {
    if (!this.citizenUsers || !this.citizenUsers[index]) {
      throw new NotInstantiatedException('CitizenUsersStateKeeper.setCitizenUserProp', `citizenUsers[${index}] is null`);
    }
    this.citizenUsers[index] = Object.assign(CitizenUser.new(), set(this.citizenUsers[index], name, value));
  }

  clear() {
    this.citizenUsers = [];
  }

  async findCitizenUsersWithFilter(params: any, offset: Offset): Promise<OffsetElementList<CitizenUser>> {
    const citizenUsersDynamicQuery = CitizenUsersDynamicQuery.multiParams<CitizenUser[]>(
      ...params,
    );

    citizenUsersDynamicQuery.offset = offset;

    const offsetElementList = await this.citizenUserQueryApi.executeCitizenUsersPagingDynamicQuery(citizenUsersDynamicQuery);
    runInAction(() => {
      this.citizenUsers = offsetElementList.results;
    });
    return offsetElementList;
  }

  async findCitizenUsers(offset: number, limit: number): Promise<OffsetElementList<CitizenUser>> {
    const citizenUsersDynamicQuery = CitizenUsersDynamicQuery.multiParams<CitizenUser[]>(
      QueryParam.endParam('id', Operator.Equal, '*')
    );
    citizenUsersDynamicQuery.offset = Offset.newAscending(offset, limit);
    citizenUsersDynamicQuery.offset.sortingField = 'id';

    const offsetElementList = await this.citizenUserQueryApi.executeCitizenUsersPagingDynamicQuery(citizenUsersDynamicQuery);
    runInAction(() => {
      this.citizenUsers = offsetElementList.results;
    });
    return offsetElementList;
  }

  async findCitizenUsersWithDynamicQuery(query: DynamicQueryRequest<CitizenUser[]>): Promise<CitizenUser[]> {
    const citizenUsers = await this.citizenUserQueryApi.executeCitizenUsersDynamicQuery(query);
    runInAction(() => this.citizenUsers = citizenUsers);
    return citizenUsers;
  }

  async findCitizenUsersByIds(ids: string[], offset: Offset): Promise<OffsetElementList<CitizenUser>> {
    const citizenUsersDynamicQuery = CitizenUsersDynamicQuery.multiParams<CitizenUser[]>(
      QueryParam.endParam('id', Operator.In, this.arrayToString(ids))
    );
    citizenUsersDynamicQuery.offset = offset;

    const offsetElementList = await this.citizenUserQueryApi.executeCitizenUsersPagingDynamicQuery(citizenUsersDynamicQuery);
    runInAction(() => {
      this.citizenUsers = offsetElementList.results;
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

export default CitizenUsersStateKeeper;

