import { DomainEntity, NameValueList } from '@nara-way/accent';
import { LoginType } from '~/comp';


class ServantLoginLog extends DomainEntity {
  dateTime: number;
  login: LoginType | null = null;
  location: string;
  deviceIp: string;
  failed: boolean;
  remark: string;
  servantUserId: string;

  constructor(dateTime: number, location: string, deviceIp: string, failed: boolean, remark: string, servantUserId: string) {
    super();
    this.dateTime = dateTime;
    this.location = location;
    this.deviceIp = deviceIp;
    this.failed = failed;
    this.remark = remark;
    this.servantUserId = servantUserId;
  }

  static fromDomain(domain: ServantLoginLog): ServantLoginLog {
    const servantLoginLog = new ServantLoginLog(
      domain.dateTime,
      domain.location,
      domain.deviceIp,
      domain.failed,
      domain.remark,
      domain.servantUserId,
    );

    servantLoginLog.setDomainEntity(domain);
    servantLoginLog.login = domain.login;
    return servantLoginLog;
  }

  static fromDomains(domains: ServantLoginLog[]): ServantLoginLog[] {
    return domains.map(domain => this.fromDomain(domain));
  }

  static asNameValues(model: ServantLoginLog): NameValueList {
    return NameValueList.fromModel(ServantLoginLog, model, {

    });
  }

  static new(): ServantLoginLog {
    return new ServantLoginLog(0, '', '', false, '', '');
  }

}

export default ServantLoginLog;

