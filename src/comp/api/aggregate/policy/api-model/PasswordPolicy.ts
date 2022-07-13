import { DomainEntity, NameValueList } from '@nara-way/accent';
import { PasswordLetterRule, PasswordPeriodRule, PasswordSimilarityRule } from '~/comp';


class PasswordPolicy extends DomainEntity {
  passwordLetterRule: PasswordLetterRule | null = null;
  passwordSimilarityRule: PasswordSimilarityRule | null = null;
  passwordPeriodRule: PasswordPeriodRule | null = null;
  authPolicyId: string;

  constructor(authPolicyId: string) {
    super();
    this.authPolicyId = authPolicyId;
  }

  static fromDomain(domain: PasswordPolicy): PasswordPolicy {
    const passwordPolicy = new PasswordPolicy(
      domain.authPolicyId,
    );

    passwordPolicy.setDomainEntity(domain);
    passwordPolicy.passwordLetterRule = domain.passwordLetterRule ? PasswordLetterRule.fromDomain(domain.passwordLetterRule) : null;
    passwordPolicy.passwordSimilarityRule = domain.passwordSimilarityRule ? PasswordSimilarityRule.fromDomain(domain.passwordSimilarityRule) : null;
    passwordPolicy.passwordPeriodRule = domain.passwordPeriodRule ? PasswordPeriodRule.fromDomain(domain.passwordPeriodRule) : null;
    return passwordPolicy;
  }

  static fromDomains(domains: PasswordPolicy[]): PasswordPolicy[] {
    return domains.map(domain => this.fromDomain(domain));
  }

  static asNameValues(model: PasswordPolicy): NameValueList {
    return NameValueList.fromModel(PasswordPolicy, model, {
      passwordLetterRule: 'Json',
      passwordSimilarityRule: 'Json',
      passwordPeriodRule: 'Json',

    });
  }

  static new(): PasswordPolicy {
    return new PasswordPolicy('');
  }

}

export default PasswordPolicy;

