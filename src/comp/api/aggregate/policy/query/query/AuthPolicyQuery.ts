import { QueryRequest } from '@nara-way/accent';
import { AuthPolicy } from '../../api-model';


class AuthPolicyQuery extends QueryRequest<AuthPolicy> {
  authPolicyId: string;

  constructor(authPolicyId: string) {
    super(AuthPolicy);
    this.authPolicyId = authPolicyId;
  }

  static fromDomain(domain: AuthPolicyQuery): AuthPolicyQuery {
    const query = new AuthPolicyQuery(domain.authPolicyId);

    query.setResponse(domain);
    return query;
  }

  static by(authPolicyId: string) {
    const query = new AuthPolicyQuery(authPolicyId);

    return query;
  }

}

export default AuthPolicyQuery;

