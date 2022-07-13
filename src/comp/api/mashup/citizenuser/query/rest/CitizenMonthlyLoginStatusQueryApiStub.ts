import { OffsetElementList } from '@nara-way/accent';
import { ApiClient } from '@nara-way/prologue';
import {
  CitizenMonthlyLoginStatusDynamicQuery,
  CitizenMonthlyLoginStatusQuery,
  CitizenMonthlyLoginStatussDynamicQuery
} from '../query';
import { CitizenMonthlyLoginStatus } from '../../api-model';


class CitizenMonthlyLoginStatusQueryApiStub {
  static _instance: CitizenMonthlyLoginStatusQueryApiStub;

  private readonly client = new ApiClient('/api/checkpoint/mashup/citizenuser', {
    resDataName: 'queryResult',
  });

  static get instance() {
    if (!CitizenMonthlyLoginStatusQueryApiStub._instance) {
      CitizenMonthlyLoginStatusQueryApiStub._instance = new CitizenMonthlyLoginStatusQueryApiStub();
    }
    return CitizenMonthlyLoginStatusQueryApiStub._instance;
  }

  async executeCitizenMonthlyLoginStatusQuery(query: CitizenMonthlyLoginStatusQuery): Promise<CitizenMonthlyLoginStatus> {
    return this.client.postNotNull<CitizenMonthlyLoginStatus>(
      CitizenMonthlyLoginStatus,
      '/citizen-monthly-login-status/query',
      query
    );
  }

  async executeCitizenMonthlyLoginStatusDynamicQuery(query: CitizenMonthlyLoginStatusDynamicQuery): Promise<CitizenMonthlyLoginStatus | null> {
    return this.client.postNullable<CitizenMonthlyLoginStatus>(
      CitizenMonthlyLoginStatus,
      '/citizen-monthly-login-status/dynamic-single/query',
      query
    );
  }

  async executeCitizenMonthlyLoginStatussDynamicQuery(query: CitizenMonthlyLoginStatussDynamicQuery): Promise<CitizenMonthlyLoginStatus[]> {
    return this.client.postArray<CitizenMonthlyLoginStatus>(
      CitizenMonthlyLoginStatus,
      '/citizen-monthly-login-status/dynamic-multi/query',
      query
    );
  }

  async executeCitizenMonthlyLoginStatussPagingDynamicQuery(query: CitizenMonthlyLoginStatussDynamicQuery): Promise<OffsetElementList<CitizenMonthlyLoginStatus>> {
    return this.client.postOffsetElementList<CitizenMonthlyLoginStatus>(
      CitizenMonthlyLoginStatus,
      '/citizen-monthly-login-status/dynamic-multi/query',
      query
    );
  }

}

export default CitizenMonthlyLoginStatusQueryApiStub;

