import { OffsetElementList } from '@nara-way/accent';
import { ApiClient } from '@nara-way/prologue';
import { LoginPolicy } from '../../api-model';
import { LoginPolicyDynamicQuery, LoginPolicyQuery, LoginPolicysDynamicQuery } from '../query';


class LoginPolicyQueryApiStub {
  static _instance: LoginPolicyQueryApiStub;

  private readonly client = new ApiClient('/api/checkpoint/aggregate/policy', {
    resDataName: 'queryResult',
  });

  static get instance() {
    if (!LoginPolicyQueryApiStub._instance) {
      LoginPolicyQueryApiStub._instance = new LoginPolicyQueryApiStub();
    }
    return LoginPolicyQueryApiStub._instance;
  }

  async executeLoginPolicyQuery(query: LoginPolicyQuery): Promise<LoginPolicy> {
    return this.client.postNotNull<LoginPolicy>(
      LoginPolicy,
      '/login-policy/query',
      query
    );
  }

  async executeLoginPolicyDynamicQuery(query: LoginPolicyDynamicQuery): Promise<LoginPolicy | null> {
    return this.client.postNullable<LoginPolicy>(
      LoginPolicy,
      '/login-policy/dynamic-single/query',
      query
    );
  }

  async executeLoginPolicysDynamicQuery(query: LoginPolicysDynamicQuery): Promise<LoginPolicy[]> {
    return this.client.postArray<LoginPolicy>(
      LoginPolicy,
      '/login-policy/dynamic-multi/query',
      query
    );
  }

  async executeLoginPolicysPagingDynamicQuery(query: LoginPolicysDynamicQuery): Promise<OffsetElementList<LoginPolicy>> {
    return this.client.postOffsetElementList<LoginPolicy>(
      LoginPolicy,
      '/login-policy/dynamic-multi/query',
      query
    );
  }

}

export default LoginPolicyQueryApiStub;

