import { DynamicQueryRequest } from '@nara-way/accent';
import { LoginIdPolicy } from '../../api-model';


class LoginIdPolicyDynamicQuery extends DynamicQueryRequest<LoginIdPolicy> {
  static fromDomain(domain: LoginIdPolicyDynamicQuery): LoginIdPolicyDynamicQuery {
    const query = new LoginIdPolicyDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default LoginIdPolicyDynamicQuery;

