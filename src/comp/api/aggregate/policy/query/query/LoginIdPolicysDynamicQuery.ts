import { DynamicQueryRequest } from '@nara-way/accent';
import { LoginIdPolicy } from '../../api-model';


class LoginIdPolicysDynamicQuery extends DynamicQueryRequest<LoginIdPolicy[]> {
  static fromDomain(domain: LoginIdPolicysDynamicQuery): LoginIdPolicysDynamicQuery {
    const query = new LoginIdPolicysDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default LoginIdPolicysDynamicQuery;

