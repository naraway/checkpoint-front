import { OffsetElementList } from '@nara-way/accent';
import { ApiClient } from '@nara-way/prologue';
import { PasswordPolicy } from '../../api-model';
import { PasswordPolicyDynamicQuery, PasswordPolicyQuery, PasswordPolicysDynamicQuery } from '../query';


class PasswordPolicyQueryApiStub {
  static _instance: PasswordPolicyQueryApiStub;

  private readonly client = new ApiClient('/api/checkpoint/aggregate/policy', {
    resDataName: 'queryResult',
  });

  static get instance() {
    if (!PasswordPolicyQueryApiStub._instance) {
      PasswordPolicyQueryApiStub._instance = new PasswordPolicyQueryApiStub();
    }
    return PasswordPolicyQueryApiStub._instance;
  }

  async executePasswordPolicyQuery(query: PasswordPolicyQuery): Promise<PasswordPolicy> {
    return this.client.postNotNull<PasswordPolicy>(
      PasswordPolicy,
      '/password-policy/query',
      query
    );
  }

  async executePasswordPolicyDynamicQuery(query: PasswordPolicyDynamicQuery): Promise<PasswordPolicy | null> {
    return this.client.postNullable<PasswordPolicy>(
      PasswordPolicy,
      '/password-policy/dynamic-single/query',
      query
    );
  }

  async executePasswordPolicysDynamicQuery(query: PasswordPolicysDynamicQuery): Promise<PasswordPolicy[]> {
    return this.client.postArray<PasswordPolicy>(
      PasswordPolicy,
      '/password-policy/dynamic-multi/query',
      query
    );
  }

  async executePasswordPolicysPagingDynamicQuery(query: PasswordPolicysDynamicQuery): Promise<OffsetElementList<PasswordPolicy>> {
    return this.client.postOffsetElementList<PasswordPolicy>(
      PasswordPolicy,
      '/password-policy/dynamic-multi/query',
      query
    );
  }

}

export default PasswordPolicyQueryApiStub;

