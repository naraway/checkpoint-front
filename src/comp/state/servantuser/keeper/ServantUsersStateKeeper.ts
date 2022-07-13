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
import { ServantUser, ServantUserQueryApiStub, ServantUsersDynamicQuery } from '~/comp/api';


class ServantUsersStateKeeper {
  private static _instance: ServantUsersStateKeeper;

  private readonly servantUserQueryApi: ServantUserQueryApiStub;

  servantUsers: ServantUser[] = [];

  static get instance() {
    if (!ServantUsersStateKeeper._instance) {
      ServantUsersStateKeeper._instance = new ServantUsersStateKeeper();
    }
    return ServantUsersStateKeeper._instance;
  }

  constructor(
    servantUserQueryApi: ServantUserQueryApiStub = ServantUserQueryApiStub.instance
  ) {
    this.servantUserQueryApi = servantUserQueryApi;
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setServantUserProp(index: number, name: string, value: any) {
    if (!this.servantUsers || !this.servantUsers[index]) {
      throw new NotInstantiatedException('ServantUsersStateKeeper.setServantUserProp', `servantUsers[${index}] is null`);
    }
    this.servantUsers[index] = Object.assign(ServantUser.new(), set(this.servantUsers[index], name, value));
  }

  clear() {
    this.servantUsers = [];
  }

  async findServantUsersWithFilter(params: any, offset: Offset): Promise<OffsetElementList<ServantUser>> {
    const servantUsersDynamicQuery = ServantUsersDynamicQuery.multiParams<ServantUser[]>(
      ...params,
    );

    servantUsersDynamicQuery.offset = offset;

    const offsetElementList = await this.servantUserQueryApi.executeServantUsersPagingDynamicQuery(servantUsersDynamicQuery);
    runInAction(() => {
      this.servantUsers = offsetElementList.results;
    });
    return offsetElementList;
  }

  async findServantUsers(offset: number, limit: number): Promise<OffsetElementList<ServantUser>> {
    const servantUsersDynamicQuery = ServantUsersDynamicQuery.multiParams<ServantUser[]>(
      QueryParam.endParam('id', Operator.Equal, '*')
    );
    servantUsersDynamicQuery.offset = Offset.newAscending(offset, limit);
    servantUsersDynamicQuery.offset.sortingField = 'id';

    const offsetElementList = await this.servantUserQueryApi.executeServantUsersPagingDynamicQuery(servantUsersDynamicQuery);
    runInAction(() => {
      this.servantUsers = offsetElementList.results;
    });
    return offsetElementList;
  }

  async findServantUsersWithDynamicQuery(query: DynamicQueryRequest<ServantUser[]>): Promise<ServantUser[]> {
    const servantUsers = await this.servantUserQueryApi.executeServantUsersDynamicQuery(query);
    runInAction(() => this.servantUsers = servantUsers);
    return servantUsers;
  }

  async findServantUsersByIds(ids: string[], offset: Offset): Promise<OffsetElementList<ServantUser>> {
    const servantUsersDynamicQuery = ServantUsersDynamicQuery.multiParams<ServantUser[]>(
      QueryParam.endParam('id', Operator.In, this.arrayToString(ids))
    );
    servantUsersDynamicQuery.offset = offset;

    const offsetElementList = await this.servantUserQueryApi.executeServantUsersPagingDynamicQuery(servantUsersDynamicQuery);
    runInAction(() => {
      this.servantUsers = offsetElementList.results;
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

export default ServantUsersStateKeeper;

