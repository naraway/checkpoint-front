import { DynamicQueryRequest } from '@nara-way/accent';
import { AuthPolicy } from '../../api-model';


class AuthPolicyDynamicQuery extends DynamicQueryRequest<AuthPolicy> {
  static fromDomain(domain: AuthPolicyDynamicQuery): AuthPolicyDynamicQuery {
    const query = new AuthPolicyDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default AuthPolicyDynamicQuery;

