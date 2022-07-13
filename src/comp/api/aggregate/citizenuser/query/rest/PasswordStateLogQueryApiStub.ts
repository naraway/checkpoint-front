import { OffsetElementList } from '@nara-way/accent';
import { ApiClient } from '@nara-way/prologue';
import { PasswordStateLog } from '../../api-model';
import { PasswordStateLogDynamicQuery, PasswordStateLogQuery, PasswordStateLogsDynamicQuery } from '../query';


class PasswordStateLogQueryApiStub {
  static _instance: PasswordStateLogQueryApiStub;

  private readonly client = new ApiClient('/api/checkpoint/aggregate/citizenuser', {
    resDataName: 'queryResult',
  });

  static get instance() {
    if (!PasswordStateLogQueryApiStub._instance) {
      PasswordStateLogQueryApiStub._instance = new PasswordStateLogQueryApiStub();
    }
    return PasswordStateLogQueryApiStub._instance;
  }

  async executePasswordStateLogQuery(query: PasswordStateLogQuery): Promise<PasswordStateLog> {
    return this.client.postNotNull<PasswordStateLog>(
      PasswordStateLog,
      '/password-state-log/query',
      query
    );
  }

  async executePasswordStateLogDynamicQuery(query: PasswordStateLogDynamicQuery): Promise<PasswordStateLog | null> {
    return this.client.postNullable<PasswordStateLog>(
      PasswordStateLog,
      '/password-state-log/dynamic-single/query',
      query
    );
  }

  async executePasswordStateLogsDynamicQuery(query: PasswordStateLogsDynamicQuery): Promise<PasswordStateLog[]> {
    return this.client.postArray<PasswordStateLog>(
      PasswordStateLog,
      '/password-state-log/dynamic-multi/query',
      query
    );
  }

  async executePasswordStateLogsPagingDynamicQuery(query: PasswordStateLogsDynamicQuery): Promise<OffsetElementList<PasswordStateLog>> {
    return this.client.postOffsetElementList<PasswordStateLog>(
      PasswordStateLog,
      '/password-state-log/dynamic-multi/query',
      query
    );
  }

}

export default PasswordStateLogQueryApiStub;

