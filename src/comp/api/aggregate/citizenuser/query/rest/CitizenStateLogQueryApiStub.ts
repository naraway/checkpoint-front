import { OffsetElementList } from '@nara-way/accent';
import { ApiClient } from '@nara-way/prologue';
import { CitizenStateLog } from '../../api-model';
import { CitizenStateLogDynamicQuery, CitizenStateLogQuery, CitizenStateLogsDynamicQuery } from '../query';


class CitizenStateLogQueryApiStub {
  static _instance: CitizenStateLogQueryApiStub;

  private readonly client = new ApiClient('/api/checkpoint/aggregate/citizenuser', {
    resDataName: 'queryResult',
  });

  static get instance() {
    if (!CitizenStateLogQueryApiStub._instance) {
      CitizenStateLogQueryApiStub._instance = new CitizenStateLogQueryApiStub();
    }
    return CitizenStateLogQueryApiStub._instance;
  }

  async executeCitizenStateLogQuery(query: CitizenStateLogQuery): Promise<CitizenStateLog> {
    return this.client.postNotNull<CitizenStateLog>(
      CitizenStateLog,
      '/citizen-state-log/query',
      query
    );
  }

  async executeCitizenStateLogDynamicQuery(query: CitizenStateLogDynamicQuery): Promise<CitizenStateLog | null> {
    return this.client.postNullable<CitizenStateLog>(
      CitizenStateLog,
      '/citizen-state-log/dynamic-single/query',
      query
    );
  }

  async executeCitizenStateLogsDynamicQuery(query: CitizenStateLogsDynamicQuery): Promise<CitizenStateLog[]> {
    return this.client.postArray<CitizenStateLog>(
      CitizenStateLog,
      '/citizen-state-log/dynamic-multi/query',
      query
    );
  }

  async executeCitizenStateLogsPagingDynamicQuery(query: CitizenStateLogsDynamicQuery): Promise<OffsetElementList<CitizenStateLog>> {
    return this.client.postOffsetElementList<CitizenStateLog>(
      CitizenStateLog,
      '/citizen-state-log/dynamic-multi/query',
      query
    );
  }

}

export default CitizenStateLogQueryApiStub;

