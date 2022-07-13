import { DomainEntity, NameValueList } from '@nara-way/accent';
import AdditionalInformation from '../../shared/api-model/AdditionalInformation';

class CitizenUser extends DomainEntity {
  pavilionId: string;
  loginId: string;
  password: string;
  email: string;
  displayName: string;
  additionalInformation: AdditionalInformation | null = null;
  active: boolean;

  constructor(pavilionId: string, loginId: string, password: string, email: string, displayName: string, active: boolean) {
    super();
    this.pavilionId = pavilionId;
    this.loginId = loginId;
    this.password = password;
    this.email = email;
    this.displayName = displayName;
    this.active = active;
  }

  static fromDomain(domain: CitizenUser): CitizenUser {
    const citizenUser = new CitizenUser(
      domain.pavilionId,
      domain.loginId,
      domain.password,
      domain.email,
      domain.displayName,
      domain.active,
    );

    citizenUser.setDomainEntity(domain);
    return citizenUser;
  }

  static fromDomains(domains: CitizenUser[]): CitizenUser[] {
    return domains.map(domain => this.fromDomain(domain));
  }

  static asNameValues(model: CitizenUser): NameValueList {
    return NameValueList.fromModel(CitizenUser, model, {
      additionalInformation: 'Json',
      active: String,

    });
  }

  static new(): CitizenUser {
    return new CitizenUser('', '', '', '', '', false);
  }
}

export default CitizenUser;

