import { OffsetElementList } from '@nara-way/accent';
import { ApiClient } from '@nara-way/prologue';
import { CitizenSession } from '../../api-model';
import { CitizenSessionDynamicQuery, CitizenSessionQuery, CitizenSessionsDynamicQuery } from '../query';


class CitizenSessionQueryApiStub {
  static _instance: CitizenSessionQueryApiStub;

  private readonly client = new ApiClient('/api/checkpoint/aggregate/citizenuser', {
    resDataName: 'queryResult',
  });

  static get instance() {
    if (!CitizenSessionQueryApiStub._instance) {
      CitizenSessionQueryApiStub._instance = new CitizenSessionQueryApiStub();
    }
    return CitizenSessionQueryApiStub._instance;
  }

  async executeCitizenSessionQuery(query: CitizenSessionQuery): Promise<CitizenSession> {
    return this.client.postNotNull<CitizenSession>(
      CitizenSession,
      '/citizen-session/query',
      query
    );
  }

  async executeCitizenSessionDynamicQuery(query: CitizenSessionDynamicQuery): Promise<CitizenSession | null> {
    return this.client.postNullable<CitizenSession>(
      CitizenSession,
      '/citizen-session/dynamic-single/query',
      query
    );
  }

  async executeCitizenSessionsDynamicQuery(query: CitizenSessionsDynamicQuery): Promise<CitizenSession[]> {
    return this.client.postArray<CitizenSession>(
      CitizenSession,
      '/citizen-session/dynamic-multi/query',
      query
    );
  }

  async executeCitizenSessionsPagingDynamicQuery(query: CitizenSessionsDynamicQuery): Promise<OffsetElementList<CitizenSession>> {
    return this.client.postOffsetElementList<CitizenSession>(
      CitizenSession,
      '/citizen-session/dynamic-multi/query',
      query
    );
  }

}

export default CitizenSessionQueryApiStub;

