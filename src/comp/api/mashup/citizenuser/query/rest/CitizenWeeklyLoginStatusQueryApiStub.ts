import { OffsetElementList } from '@nara-way/accent';
import { ApiClient } from '@nara-way/prologue';
import {
  CitizenWeeklyLoginStatusDynamicQuery,
  CitizenWeeklyLoginStatusQuery,
  CitizenWeeklyLoginStatussDynamicQuery
} from '../query';
import { CitizenWeeklyLoginStatus } from '../../api-model';


class CitizenWeeklyLoginStatusQueryApiStub {
  static _instance: CitizenWeeklyLoginStatusQueryApiStub;

  private readonly client = new ApiClient('/api/checkpoint/mashup/citizenuser', {
    resDataName: 'queryResult',
  });

  static get instance() {
    if (!CitizenWeeklyLoginStatusQueryApiStub._instance) {
      CitizenWeeklyLoginStatusQueryApiStub._instance = new CitizenWeeklyLoginStatusQueryApiStub();
    }
    return CitizenWeeklyLoginStatusQueryApiStub._instance;
  }

  async executeCitizenWeeklyLoginStatusQuery(query: CitizenWeeklyLoginStatusQuery): Promise<CitizenWeeklyLoginStatus> {
    return this.client.postNotNull<CitizenWeeklyLoginStatus>(
      CitizenWeeklyLoginStatus,
      '/citizen-weekly-login-status/query',
      query
    );
  }

  async executeCitizenWeeklyLoginStatusDynamicQuery(query: CitizenWeeklyLoginStatusDynamicQuery): Promise<CitizenWeeklyLoginStatus | null> {
    return this.client.postNullable<CitizenWeeklyLoginStatus>(
      CitizenWeeklyLoginStatus,
      '/citizen-weekly-login-status/dynamic-single/query',
      query
    );
  }

  async executeCitizenWeeklyLoginStatussDynamicQuery(query: CitizenWeeklyLoginStatussDynamicQuery): Promise<CitizenWeeklyLoginStatus[]> {
    return this.client.postArray<CitizenWeeklyLoginStatus>(
      CitizenWeeklyLoginStatus,
      '/citizen-weekly-login-status/dynamic-multi/query',
      query
    );
  }

  async executeCitizenWeeklyLoginStatussPagingDynamicQuery(query: CitizenWeeklyLoginStatussDynamicQuery): Promise<OffsetElementList<CitizenWeeklyLoginStatus>> {
    return this.client.postOffsetElementList<CitizenWeeklyLoginStatus>(
      CitizenWeeklyLoginStatus,
      '/citizen-weekly-login-status/dynamic-multi/query',
      query
    );
  }

}

export default CitizenWeeklyLoginStatusQueryApiStub;

