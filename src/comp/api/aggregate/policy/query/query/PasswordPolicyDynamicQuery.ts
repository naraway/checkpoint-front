import { DynamicQueryRequest } from '@nara-way/accent';
import { PasswordPolicy } from '../../api-model';


class PasswordPolicyDynamicQuery extends DynamicQueryRequest<PasswordPolicy> {
  static fromDomain(domain: PasswordPolicyDynamicQuery): PasswordPolicyDynamicQuery {
    const query = new PasswordPolicyDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default PasswordPolicyDynamicQuery;

