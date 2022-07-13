import { OffsetElementList } from '@nara-way/accent';
import { ApiClient } from '@nara-way/prologue';
import { AuthPolicy } from '../../api-model';
import { AuthPolicyDynamicQuery, AuthPolicyQuery, AuthPolicysDynamicQuery } from '../query';


class AuthPolicyQueryApiStub {
  static _instance: AuthPolicyQueryApiStub;

  private readonly client = new ApiClient('/api/checkpoint/aggregate/policy', {
    resDataName: 'queryResult',
  });

  static get instance() {
    if (!AuthPolicyQueryApiStub._instance) {
      AuthPolicyQueryApiStub._instance = new AuthPolicyQueryApiStub();
    }
    return AuthPolicyQueryApiStub._instance;
  }

  async executeAuthPolicyQuery(query: AuthPolicyQuery): Promise<AuthPolicy> {
    return this.client.postNotNull<AuthPolicy>(
      AuthPolicy,
      '/auth-policy/query',
      query
    );
  }

  async executeAuthPolicyDynamicQuery(query: AuthPolicyDynamicQuery): Promise<AuthPolicy | null> {
    return this.client.postNullable<AuthPolicy>(
      AuthPolicy,
      '/auth-policy/dynamic-single/query',
      query
    );
  }

  async executeAuthPolicysDynamicQuery(query: AuthPolicysDynamicQuery): Promise<AuthPolicy[]> {
    return this.client.postArray<AuthPolicy>(
      AuthPolicy,
      '/auth-policy/dynamic-multi/query',
      query
    );
  }

  async executeAuthPolicysPagingDynamicQuery(query: AuthPolicysDynamicQuery): Promise<OffsetElementList<AuthPolicy>> {
    return this.client.postOffsetElementList<AuthPolicy>(
      AuthPolicy,
      '/auth-policy/dynamic-multi/query',
      query
    );
  }

}

export default AuthPolicyQueryApiStub;

