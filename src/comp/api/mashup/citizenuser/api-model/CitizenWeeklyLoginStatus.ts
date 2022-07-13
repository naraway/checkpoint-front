import { DomainEntity, NameValueList } from '@nara-way/accent';


class CitizenWeeklyLoginStatus extends DomainEntity {
  citizenUserId: string;
  yearWeek: string; // [year]_[weekOfYear]
  loginCount: number;
  failCount: number;

  constructor(
    citizenUserId: string,
    yearWeek: string,
    loginCount: number,
    failCount: number,
  ) {
    super();
    this.citizenUserId = citizenUserId;
    this.yearWeek = yearWeek;
    this.loginCount = loginCount;
    this.failCount = failCount;
  }

  static fromDomain(domain: CitizenWeeklyLoginStatus): CitizenWeeklyLoginStatus {
    const citizenDailyLoginStatus = new CitizenWeeklyLoginStatus(
      domain.citizenUserId,
      domain.yearWeek,
      domain.loginCount,
      domain.failCount,
    );
    return citizenDailyLoginStatus;
  }

  static fromDomains(domains: CitizenWeeklyLoginStatus[]): CitizenWeeklyLoginStatus[] {
    return domains.map(domain => this.fromDomain(domain));
  }

  static asNameValues(model: CitizenWeeklyLoginStatus): NameValueList {
    return NameValueList.fromModel(CitizenWeeklyLoginStatus, model, {});
  }

  static new(): CitizenWeeklyLoginStatus {
    return new CitizenWeeklyLoginStatus('', '', 0, 0);
  }
}

export default CitizenWeeklyLoginStatus;

