

class PasswordRule {
  static fromDomains(domains: PasswordRule[]): PasswordRule[] {
    return domains.map(domain => this.fromDomain(domain));
  }

  static fromDomain(domain: PasswordRule): PasswordRule {
    const passwordRule = new PasswordRule(
    );

    return passwordRule;
  }

}

export default PasswordRule;
