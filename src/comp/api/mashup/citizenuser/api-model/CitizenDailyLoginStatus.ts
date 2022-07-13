import { DomainEntity, NameValueList } from '@nara-way/accent';


class CitizenDailyLoginStatus extends DomainEntity {
  citizenUserId: string;
  date: Date;
  loginCount: number;
  failCount: number;

  constructor(
    citizenUserId: string,
    date: Date,
    loginCount: number,
    failCount: number,
  ) {
    super();
    this.citizenUserId = citizenUserId;
    this.date = date;
    this.loginCount = loginCount;
    this.failCount = failCount;
  }

  static fromDomain(domain: CitizenDailyLoginStatus): CitizenDailyLoginStatus {
    const citizenDailyLoginStatus = new CitizenDailyLoginStatus(
      domain.citizenUserId,
      domain.date,
      domain.loginCount,
      domain.failCount,
    );
    return citizenDailyLoginStatus;
  }

  static fromDomains(domains: CitizenDailyLoginStatus[]): CitizenDailyLoginStatus[] {
    return domains.map(domain => this.fromDomain(domain));
  }

  static asNameValues(model: CitizenDailyLoginStatus): NameValueList {
    return NameValueList.fromModel(CitizenDailyLoginStatus, model, {});
  }

  static new(): CitizenDailyLoginStatus {
    return new CitizenDailyLoginStatus('', new Date(), 0, 0);
  }

  getDateString() {
    return this.date[0] + '-' + this.date[1] + '-' + this.date[2];
  }

  addCount(other: CitizenDailyLoginStatus) {
    this.loginCount += other.loginCount;
    this.failCount += other.failCount;
  }

  show() {
    // console.log(this.getDateString() + ': ' + this.loginCount + ', ' + this.failCount);
  }

  static findByDateString(arr: CitizenDailyLoginStatus[], dateString: string): CitizenDailyLoginStatus | null {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].getDateString() === dateString) {
        return arr[i];
      }
    }
    return null;
  }
}

export default CitizenDailyLoginStatus;

