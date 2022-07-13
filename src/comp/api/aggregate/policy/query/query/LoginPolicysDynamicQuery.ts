import { DynamicQueryRequest } from '@nara-way/accent';
import { LoginPolicy } from '../../api-model';


class LoginPolicysDynamicQuery extends DynamicQueryRequest<LoginPolicy[]> {
  static fromDomain(domain: LoginPolicysDynamicQuery): LoginPolicysDynamicQuery {
    const query = new LoginPolicysDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default LoginPolicysDynamicQuery;

