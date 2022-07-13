import { QueryRequest } from '@nara-way/accent';
import { LoginPolicy } from '../../api-model';


class LoginPolicyQuery extends QueryRequest<LoginPolicy> {
  loginPolicyId: string;

  constructor(loginPolicyId: string) {
    super(LoginPolicy);
    this.loginPolicyId = loginPolicyId;
  }

  static fromDomain(domain: LoginPolicyQuery): LoginPolicyQuery {
    const query = new LoginPolicyQuery(domain.loginPolicyId);

    query.setResponse(domain);
    return query;
  }

  static by(loginPolicyId: string) {
    const query = new LoginPolicyQuery(loginPolicyId);

    return query;
  }

}

export default LoginPolicyQuery;

