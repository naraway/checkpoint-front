import { OffsetElementList } from '@nara-way/accent';
import { ApiClient } from '@nara-way/prologue';
import { LoginIdPolicy } from '../../api-model';
import { LoginIdPolicyDynamicQuery, LoginIdPolicyQuery, LoginIdPolicysDynamicQuery } from '../query';


class LoginIdPolicyQueryApiStub {
  static _instance: LoginIdPolicyQueryApiStub;

  private readonly client = new ApiClient('/api/checkpoint/aggregate/policy', {
    resDataName: 'queryResult',
  });

  static get instance() {
    if (!LoginIdPolicyQueryApiStub._instance) {
      LoginIdPolicyQueryApiStub._instance = new LoginIdPolicyQueryApiStub();
    }
    return LoginIdPolicyQueryApiStub._instance;
  }

  async executeLoginIdPolicyQuery(query: LoginIdPolicyQuery): Promise<LoginIdPolicy> {
    return this.client.postNotNull<LoginIdPolicy>(
      LoginIdPolicy,
      '/login-id-policy/query',
      query
    );
  }

  async executeLoginIdPolicyDynamicQuery(query: LoginIdPolicyDynamicQuery): Promise<LoginIdPolicy | null> {
    return this.client.postNullable<LoginIdPolicy>(
      LoginIdPolicy,
      '/login-id-policy/dynamic-single/query',
      query
    );
  }

  async executeLoginIdPolicysDynamicQuery(query: LoginIdPolicysDynamicQuery): Promise<LoginIdPolicy[]> {
    return this.client.postArray<LoginIdPolicy>(
      LoginIdPolicy,
      '/login-id-policy/dynamic-multi/query',
      query
    );
  }

  async executeLoginIdPolicysPagingDynamicQuery(query: LoginIdPolicysDynamicQuery): Promise<OffsetElementList<LoginIdPolicy>> {
    return this.client.postOffsetElementList<LoginIdPolicy>(
      LoginIdPolicy,
      '/login-id-policy/dynamic-multi/query',
      query
    );
  }

}

export default LoginIdPolicyQueryApiStub;

