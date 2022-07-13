import { QueryRequest } from '@nara-way/accent';
import { PasswordPolicy } from '../../api-model';


class PasswordPolicyQuery extends QueryRequest<PasswordPolicy> {
  passwordPolicyId: string;

  constructor(passwordPolicyId: string) {
    super(PasswordPolicy);
    this.passwordPolicyId = passwordPolicyId;
  }

  static fromDomain(domain: PasswordPolicyQuery): PasswordPolicyQuery {
    const query = new PasswordPolicyQuery(domain.passwordPolicyId);

    query.setResponse(domain);
    return query;
  }

  static by(passwordPolicyId: string) {
    const query = new PasswordPolicyQuery(passwordPolicyId);

    return query;
  }

}

export default PasswordPolicyQuery;

