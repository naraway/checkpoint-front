import { QueryRequest } from '@nara-way/accent';
import { LoginIdPolicy } from '../../api-model';


class LoginIdPolicyQuery extends QueryRequest<LoginIdPolicy> {
  loginIdPolicyId: string;

  constructor(loginIdPolicyId: string) {
    super(LoginIdPolicy);
    this.loginIdPolicyId = loginIdPolicyId;
  }

  static fromDomain(domain: LoginIdPolicyQuery): LoginIdPolicyQuery {
    const query = new LoginIdPolicyQuery(domain.loginIdPolicyId);

    query.setResponse(domain);
    return query;
  }

  static by(loginIdPolicyId: string) {
    const query = new LoginIdPolicyQuery(loginIdPolicyId);

    return query;
  }

}

export default LoginIdPolicyQuery;

