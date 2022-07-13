import { DomainEntity, NameValueList } from '@nara-way/accent';


class AuthPolicy extends DomainEntity {
  pavilionId: string;
  updateDate: Date | null = null;
  validThru: Date | null = null;

  constructor(pavilionId: string) {
    super();
    this.pavilionId = pavilionId;
  }

  static fromDomain(domain: AuthPolicy): AuthPolicy {
    const authPolicy = new AuthPolicy(
      domain.pavilionId
    );

    authPolicy.setDomainEntity(domain);
    authPolicy.updateDate = domain.updateDate || null;
    authPolicy.validThru = domain.validThru || null;
    return authPolicy;
  }

  static fromDomains(domains: AuthPolicy[]): AuthPolicy[] {
    return domains.map(domain => this.fromDomain(domain));
  }

  static asNameValues(model: AuthPolicy): NameValueList {
    return NameValueList.fromModel(AuthPolicy, model, {});
  }

  static new(): AuthPolicy {
    return new AuthPolicy('');
  }

}

export default AuthPolicy;

