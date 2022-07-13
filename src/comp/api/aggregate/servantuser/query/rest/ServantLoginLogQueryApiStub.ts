import { OffsetElementList } from '@nara-way/accent';
import { ApiClient } from '@nara-way/prologue';
import { ServantLoginLog } from '../../api-model';
import { ServantLoginLogDynamicQuery, ServantLoginLogQuery, ServantLoginLogsDynamicQuery } from '../query';


class ServantLoginLogQueryApiStub {
  static _instance: ServantLoginLogQueryApiStub;

  private readonly client = new ApiClient('/api/checkpoint/aggregate/servantuser', {
    resDataName: 'queryResult',
  });

  static get instance() {
    if (!ServantLoginLogQueryApiStub._instance) {
      ServantLoginLogQueryApiStub._instance = new ServantLoginLogQueryApiStub();
    }
    return ServantLoginLogQueryApiStub._instance;
  }

  async executeServantLoginLogQuery(query: ServantLoginLogQuery): Promise<ServantLoginLog> {
    return this.client.postNotNull<ServantLoginLog>(
      ServantLoginLog,
      '/servant-login-log/query',
      query
    );
  }

  async executeServantLoginLogDynamicQuery(query: ServantLoginLogDynamicQuery): Promise<ServantLoginLog | null> {
    return this.client.postNullable<ServantLoginLog>(
      ServantLoginLog,
      '/servant-login-log/dynamic-single/query',
      query
    );
  }

  async executeServantLoginLogsDynamicQuery(query: ServantLoginLogsDynamicQuery): Promise<ServantLoginLog[]> {
    return this.client.postArray<ServantLoginLog>(
      ServantLoginLog,
      '/servant-login-log/dynamic-multi/query',
      query
    );
  }

  async executeServantLoginLogsPagingDynamicQuery(query: ServantLoginLogsDynamicQuery): Promise<OffsetElementList<ServantLoginLog>> {
    return this.client.postOffsetElementList<ServantLoginLog>(
      ServantLoginLog,
      '/servant-login-log/dynamic-multi/query',
      query
    );
  }

}

export default ServantLoginLogQueryApiStub;

