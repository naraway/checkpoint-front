import { DynamicQueryRequest } from '@nara-way/accent';
import { LoginPolicy } from '../../api-model';


class LoginPolicyDynamicQuery extends DynamicQueryRequest<LoginPolicy> {
  static fromDomain(domain: LoginPolicyDynamicQuery): LoginPolicyDynamicQuery {
    const query = new LoginPolicyDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default LoginPolicyDynamicQuery;

