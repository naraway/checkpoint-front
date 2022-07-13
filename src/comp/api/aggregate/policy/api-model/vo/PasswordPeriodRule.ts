import { PasswordPeriodUnit } from '~/comp';


class PasswordPeriodRule {
  periodUnit: PasswordPeriodUnit | null = null;
  validPeriod: number;
  
  constructor(validPeriod: number) {
    this.validPeriod = validPeriod;
  }

  static fromDomains(domains: PasswordPeriodRule[]): PasswordPeriodRule[] {
    return domains.map(domain => this.fromDomain(domain));
  }

  static fromDomain(domain: PasswordPeriodRule): PasswordPeriodRule {
    const passwordPeriodRule = new PasswordPeriodRule(
      domain.validPeriod,
    );
    
    passwordPeriodRule.periodUnit = domain.periodUnit;
    return passwordPeriodRule;
  }

  static new(): PasswordPeriodRule {
    return new PasswordPeriodRule(0);
  }

}

export default PasswordPeriodRule;

