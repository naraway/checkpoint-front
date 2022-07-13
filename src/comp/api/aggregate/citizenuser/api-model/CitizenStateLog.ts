import { DomainEntity, NameValueList } from '@nara-way/accent';
import { UserState } from '~/comp';


class CitizenStateLog extends DomainEntity {
  dateTime: number;
  state: UserState | null = null;
  reason: string;
  remark: string;
  citizenUserId: string;

  constructor(dateTime: number, reason: string, remark: string, citizenUserId: string) {
    super();
    this.dateTime = dateTime;
    this.reason = reason;
    this.remark = remark;
    this.citizenUserId = citizenUserId;
  }

  static fromDomain(domain: CitizenStateLog): CitizenStateLog {
    const citizenStateLog = new CitizenStateLog(
      domain.dateTime,
      domain.reason,
      domain.remark,
      domain.citizenUserId,
    );

    citizenStateLog.setDomainEntity(domain);
    citizenStateLog.state = domain.state;
    return citizenStateLog;
  }

  static fromDomains(domains: CitizenStateLog[]): CitizenStateLog[] {
    return domains.map(domain => this.fromDomain(domain));
  }

  static asNameValues(model: CitizenStateLog): NameValueList {
    return NameValueList.fromModel(CitizenStateLog, model, {

    });
  }

  static new(): CitizenStateLog {
    return new CitizenStateLog(0, '', '', '');
  }

}

export default CitizenStateLog;

