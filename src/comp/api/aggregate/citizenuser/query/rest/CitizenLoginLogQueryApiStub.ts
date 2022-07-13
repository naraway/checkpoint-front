import { OffsetElementList } from '@nara-way/accent';
import { ApiClient } from '@nara-way/prologue';
import { CitizenLoginLog } from '../../api-model';
import { CitizenLoginLogDynamicQuery, CitizenLoginLogQuery, CitizenLoginLogsDynamicQuery } from '../query';


class CitizenLoginLogQueryApiStub {
  static _instance: CitizenLoginLogQueryApiStub;

  private readonly client = new ApiClient('/api/checkpoint/aggregate/citizenuser', {
    resDataName: 'queryResult',
  });

  static get instance() {
    if (!CitizenLoginLogQueryApiStub._instance) {
      CitizenLoginLogQueryApiStub._instance = new CitizenLoginLogQueryApiStub();
    }
    return CitizenLoginLogQueryApiStub._instance;
  }

  async executeCitizenLoginLogQuery(query: CitizenLoginLogQuery): Promise<CitizenLoginLog> {
    return this.client.postNotNull<CitizenLoginLog>(
      CitizenLoginLog,
      '/citizen-login-log/query',
      query
    );
  }

  async executeCitizenLoginLogDynamicQuery(query: CitizenLoginLogDynamicQuery): Promise<CitizenLoginLog | null> {
    return this.client.postNullable<CitizenLoginLog>(
      CitizenLoginLog,
      '/citizen-login-log/dynamic-single/query',
      query
    );
  }

  async executeCitizenLoginLogsDynamicQuery(query: CitizenLoginLogsDynamicQuery): Promise<CitizenLoginLog[]> {
    return this.client.postArray<CitizenLoginLog>(
      CitizenLoginLog,
      '/citizen-login-log/dynamic-multi/query',
      query
    );
  }

  async executeCitizenLoginLogsPagingDynamicQuery(query: CitizenLoginLogsDynamicQuery): Promise<OffsetElementList<CitizenLoginLog>> {
    return this.client.postOffsetElementList<CitizenLoginLog>(
      CitizenLoginLog,
      '/citizen-login-log/dynamic-multi/query',
      query
    );
  }

}

export default CitizenLoginLogQueryApiStub;

