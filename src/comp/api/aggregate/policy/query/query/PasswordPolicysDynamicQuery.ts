import { DynamicQueryRequest } from '@nara-way/accent';
import { PasswordPolicy } from '../../api-model';


class PasswordPolicysDynamicQuery extends DynamicQueryRequest<PasswordPolicy[]> {
  static fromDomain(domain: PasswordPolicysDynamicQuery): PasswordPolicysDynamicQuery {
    const query = new PasswordPolicysDynamicQuery();

    query.setResponse(domain);
    return query;
  }

}

export default PasswordPolicysDynamicQuery;

