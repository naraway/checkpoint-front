import { OffsetElementList } from '@nara-way/accent';
import { ApiClient } from '@nara-way/prologue';
import { ServantStateLog } from '../../api-model';
import { ServantStateLogDynamicQuery, ServantStateLogQuery, ServantStateLogsDynamicQuery } from '../query';


class ServantStateLogQueryApiStub {
  static _instance: ServantStateLogQueryApiStub;

  private readonly client = new ApiClient('/api/checkpoint/aggregate/servantuser', {
    resDataName: 'queryResult',
  });

  static get instance() {
    if (!ServantStateLogQueryApiStub._instance) {
      ServantStateLogQueryApiStub._instance = new ServantStateLogQueryApiStub();
    }
    return ServantStateLogQueryApiStub._instance;
  }

  async executeServantStateLogQuery(query: ServantStateLogQuery): Promise<ServantStateLog> {
    return this.client.postNotNull<ServantStateLog>(
      ServantStateLog,
      '/servant-state-log/query',
      query
    );
  }

  async executeServantStateLogDynamicQuery(query: ServantStateLogDynamicQuery): Promise<ServantStateLog | null> {
    return this.client.postNullable<ServantStateLog>(
      ServantStateLog,
      '/servant-state-log/dynamic-single/query',
      query
    );
  }

  async executeServantStateLogsDynamicQuery(query: ServantStateLogsDynamicQuery): Promise<ServantStateLog[]> {
    return this.client.postArray<ServantStateLog>(
      ServantStateLog,
      '/servant-state-log/dynamic-multi/query',
      query
    );
  }

  async executeServantStateLogsPagingDynamicQuery(query: ServantStateLogsDynamicQuery): Promise<OffsetElementList<ServantStateLog>> {
    return this.client.postOffsetElementList<ServantStateLog>(
      ServantStateLog,
      '/servant-state-log/dynamic-multi/query',
      query
    );
  }

}

export default ServantStateLogQueryApiStub;

