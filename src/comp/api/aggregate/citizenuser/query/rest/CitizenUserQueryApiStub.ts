import { OffsetElementList } from '@nara-way/accent';
import { ApiClient } from '@nara-way/prologue';
import { CitizenUser } from '../../api-model';
import { CitizenUserDynamicQuery, CitizenUserQuery, CitizenUsersDynamicQuery } from '../query';


class CitizenUserQueryApiStub {
  static _instance: CitizenUserQueryApiStub;

  private readonly client = new ApiClient('/api/checkpoint/aggregate/citizenuser', {
    resDataName: 'queryResult',
  });

  static get instance() {
    if (!CitizenUserQueryApiStub._instance) {
      CitizenUserQueryApiStub._instance = new CitizenUserQueryApiStub();
    }
    return CitizenUserQueryApiStub._instance;
  }

  async executeCitizenUserQuery(query: CitizenUserQuery): Promise<CitizenUser> {
    return this.client.postNotNull<CitizenUser>(
      CitizenUser,
      '/citizen-user/query',
      query
    );
  }

  async executeCitizenUserDynamicQuery(query: CitizenUserDynamicQuery): Promise<CitizenUser | null> {
    return this.client.postNullable<CitizenUser>(
      CitizenUser,
      '/citizen-user/dynamic-single/query',
      query
    );
  }

  async executeCitizenUsersDynamicQuery(query: CitizenUsersDynamicQuery): Promise<CitizenUser[]> {
    return this.client.postArray<CitizenUser>(
      CitizenUser,
      '/citizen-user/dynamic-multi/query',
      query
    );
  }

  async executeCitizenUsersPagingDynamicQuery(query: CitizenUsersDynamicQuery): Promise<OffsetElementList<CitizenUser>> {
    return this.client.postOffsetElementList<CitizenUser>(
      CitizenUser,
      '/citizen-user/dynamic-multi/query',
      query
    );
  }

}

export default CitizenUserQueryApiStub;

