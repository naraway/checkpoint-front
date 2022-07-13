import { OffsetElementList } from '@nara-way/accent';
import { ApiClient } from '@nara-way/prologue';
import {
  CitizenDailyLoginStatusDynamicQuery,
  CitizenDailyLoginStatusQuery,
  CitizenDailyLoginStatussDynamicQuery
} from '../query';
import { CitizenDailyLoginStatus } from '../../api-model';


class CitizenDailyLoginStatusQueryApiStub {
  static _instance: CitizenDailyLoginStatusQueryApiStub;

  private readonly client = new ApiClient('/api/checkpoint/mashup/citizenuser', {
    resDataName: 'queryResult',
  });

  static get instance() {
    if (!CitizenDailyLoginStatusQueryApiStub._instance) {
      CitizenDailyLoginStatusQueryApiStub._instance = new CitizenDailyLoginStatusQueryApiStub();
    }
    return CitizenDailyLoginStatusQueryApiStub._instance;
  }

  async executeCitizenDailyLoginStatusQuery(query: CitizenDailyLoginStatusQuery): Promise<CitizenDailyLoginStatus> {
    return this.client.postNotNull<CitizenDailyLoginStatus>(
      CitizenDailyLoginStatus,
      '/citizen-daily-login-status/query',
      query
    );
  }

  async executeCitizenDailyLoginStatusDynamicQuery(query: CitizenDailyLoginStatusDynamicQuery): Promise<CitizenDailyLoginStatus | null> {
    return this.client.postNullable<CitizenDailyLoginStatus>(
      CitizenDailyLoginStatus,
      '/citizen-daily-login-status/dynamic-single/query',
      query
    );
  }

  async executeCitizenDailyLoginStatussDynamicQuery(query: CitizenDailyLoginStatussDynamicQuery): Promise<CitizenDailyLoginStatus[]> {
    return this.client.postArray<CitizenDailyLoginStatus>(
      CitizenDailyLoginStatus,
      '/citizen-daily-login-status/dynamic-multi/query',
      query
    );
  }

  async executeCitizenDailyLoginStatussPagingDynamicQuery(query: CitizenDailyLoginStatussDynamicQuery): Promise<OffsetElementList<CitizenDailyLoginStatus>> {
    return this.client.postOffsetElementList<CitizenDailyLoginStatus>(
      CitizenDailyLoginStatus,
      '/citizen-daily-login-status/dynamic-multi/query',
      query
    );
  }

}

export default CitizenDailyLoginStatusQueryApiStub;

