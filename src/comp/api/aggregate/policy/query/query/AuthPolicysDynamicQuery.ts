import { DynamicQueryRequest } from '@nara-way/accent';
import { AuthPolicy } from '../../api-model';


class AuthPolicysDynamicQuery extends DynamicQueryRequest<AuthPolicy[]> {
  static fromDomain(domain: AuthPolicysDynamicQuery): AuthPolicysDynamicQuery {
    const query = new AuthPolicysDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default AuthPolicysDynamicQuery;

