import { DomainEntity, NameValueList } from '@nara-way/accent';
import { UserState } from '~/comp';


class ServantStateLog extends DomainEntity {
  dateTime: number;
  state: UserState | null = null;
  reason: string;
  remark: string;
  servantUserId: string;

  constructor(dateTime: number, reason: string, remark: string, servantUserId: string) {
    super();
    this.dateTime = dateTime;
    this.reason = reason;
    this.remark = remark;
    this.servantUserId = servantUserId;
  }

  static fromDomain(domain: ServantStateLog): ServantStateLog {
    const servantStateLog = new ServantStateLog(
      domain.dateTime,
      domain.reason,
      domain.remark,
      domain.servantUserId,
    );

    servantStateLog.setDomainEntity(domain);
    servantStateLog.state = domain.state;
    return servantStateLog;
  }

  static fromDomains(domains: ServantStateLog[]): ServantStateLog[] {
    return domains.map(domain => this.fromDomain(domain));
  }

  static asNameValues(model: ServantStateLog): NameValueList {
    return NameValueList.fromModel(ServantStateLog, model, {

    });
  }

  static new(): ServantStateLog {
    return new ServantStateLog(0, '', '', '');
  }

}

export default ServantStateLog;

