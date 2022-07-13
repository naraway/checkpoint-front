import { DomainEntity, NameValueList } from '@nara-way/accent';


class CitizenSession extends DomainEntity {
  pavilionId: string;
  loginId: string;
  location: string;
  deviceIp: string;
  token: string;
  loginTime: number;
  latestSyncTime: number;
  expired: boolean;

  constructor(pavilionId: string, loginId: string, location: string, deviceIp: string, token: string, loginTime: number, latestSyncTime: number, expired: boolean) {
    super();
    this.pavilionId = pavilionId;
    this.loginId = loginId;
    this.location = location;
    this.deviceIp = deviceIp;
    this.token = token;
    this.loginTime = loginTime;
    this.latestSyncTime = latestSyncTime;
    this.expired = expired;
  }

  static fromDomain(domain: CitizenSession): CitizenSession {
    const citizenSession = new CitizenSession(
      domain.pavilionId,
      domain.loginId,
      domain.location,
      domain.deviceIp,
      domain.token,
      domain.loginTime,
      domain.latestSyncTime,
      domain.expired,
    );

    citizenSession.setDomainEntity(domain);
    return citizenSession;
  }

  static fromDomains(domains: CitizenSession[]): CitizenSession[] {
    return domains.map(domain => this.fromDomain(domain));
  }

  static asNameValues(model: CitizenSession): NameValueList {
    return NameValueList.fromModel(CitizenSession, model, {
      latestSyncTime: String,
      expired: String,

    });
  }

  static new(): CitizenSession {
    return new CitizenSession('', '', '', '', '', 0, 0, false);
  }

}

export default CitizenSession;

