import { OffsetElementList } from '@nara-way/accent';
import { ApiClient } from '@nara-way/prologue';
import { ServantUser } from '../../api-model';
import { ServantUserDynamicQuery, ServantUserQuery, ServantUsersDynamicQuery } from '../query';


class ServantUserQueryApiStub {
  static _instance: ServantUserQueryApiStub;

  private readonly client = new ApiClient('/api/checkpoint/aggregate/servantuser', {
    resDataName: 'queryResult',
  });

  static get instance() {
    if (!ServantUserQueryApiStub._instance) {
      ServantUserQueryApiStub._instance = new ServantUserQueryApiStub();
    }
    return ServantUserQueryApiStub._instance;
  }

  async executeServantUserQuery(query: ServantUserQuery): Promise<ServantUser> {
    return this.client.postNotNull<ServantUser>(
      ServantUser,
      '/servant-user/query',
      query
    );
  }

  async executeServantUserDynamicQuery(query: ServantUserDynamicQuery): Promise<ServantUser | null> {
    return this.client.postNullable<ServantUser>(
      ServantUser,
      '/servant-user/dynamic-single/query',
      query
    );
  }

  async executeServantUsersDynamicQuery(query: ServantUsersDynamicQuery): Promise<ServantUser[]> {
    return this.client.postArray<ServantUser>(
      ServantUser,
      '/servant-user/dynamic-multi/query',
      query
    );
  }

  async executeServantUsersPagingDynamicQuery(query: ServantUsersDynamicQuery): Promise<OffsetElementList<ServantUser>> {
    return this.client.postOffsetElementList<ServantUser>(
      ServantUser,
      '/servant-user/dynamic-multi/query',
      query
    );
  }

}

export default ServantUserQueryApiStub;

