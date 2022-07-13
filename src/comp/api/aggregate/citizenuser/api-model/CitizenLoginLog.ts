import { DomainEntity, NameValueList } from '@nara-way/accent';
import { LoginType } from '~/comp';


class CitizenLoginLog extends DomainEntity {
  dateTime: number;
  login: LoginType | null = null;
  location: string;
  deviceIp: string;
  failed: boolean;
  remark: string;
  citizenUserId: string;

  constructor(dateTime: number, location: string, deviceIp: string, failed: boolean, remark: string, citizenUserId: string) {
    super();
    this.dateTime = dateTime;
    this.location = location;
    this.deviceIp = deviceIp;
    this.failed = failed;
    this.remark = remark;
    this.citizenUserId = citizenUserId;
  }

  static fromDomain(domain: CitizenLoginLog): CitizenLoginLog {
    const citizenLoginLog = new CitizenLoginLog(
      domain.dateTime,
      domain.location,
      domain.deviceIp,
      domain.failed,
      domain.remark,
      domain.citizenUserId,
    );

    citizenLoginLog.setDomainEntity(domain);
    citizenLoginLog.login = domain.login;
    return citizenLoginLog;
  }

  static fromDomains(domains: CitizenLoginLog[]): CitizenLoginLog[] {
    return domains.map(domain => this.fromDomain(domain));
  }

  static asNameValues(model: CitizenLoginLog): NameValueList {
    return NameValueList.fromModel(CitizenLoginLog, model, {

    });
  }

  static new(): CitizenLoginLog {
    return new CitizenLoginLog(0, '', '', false, '', '');
  }

}

export default CitizenLoginLog;

