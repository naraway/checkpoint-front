import { DomainEntity, NameValueList } from '@nara-way/accent';


class CitizenMonthlyLoginStatus extends DomainEntity {
  citizenUserId: string;
  yearMon: string; // [year]_[month]
  loginCount: number;
  failCount: number;

  constructor(
    citizenUserId: string,
    yearMon: string,
    loginCount: number,
    failCount: number,
  ) {
    super();
    this.citizenUserId = citizenUserId;
    this.yearMon = yearMon;
    this.loginCount = loginCount;
    this.failCount = failCount;
  }

  static fromDomain(domain: CitizenMonthlyLoginStatus): CitizenMonthlyLoginStatus {
    const citizenDailyLoginStatus = new CitizenMonthlyLoginStatus(
      domain.citizenUserId,
      domain.yearMon,
      domain.loginCount,
      domain.failCount,
    );
    return citizenDailyLoginStatus;
  }

  static fromDomains(domains: CitizenMonthlyLoginStatus[]): CitizenMonthlyLoginStatus[] {
    return domains.map(domain => this.fromDomain(domain));
  }

  static asNameValues(model: CitizenMonthlyLoginStatus): NameValueList {
    return NameValueList.fromModel(CitizenMonthlyLoginStatus, model, {});
  }

  static new(): CitizenMonthlyLoginStatus {
    return new CitizenMonthlyLoginStatus('', '', 0, 0);
  }
}

export default CitizenMonthlyLoginStatus;

