import { DomainEntity, NameValueList } from '@nara-way/accent';
import { PasswordState } from '~/comp';


class PasswordStateLog extends DomainEntity {
  state: PasswordState | null = null;
  dateTime: number;
  remark: string;
  citizenUserId: string;

  constructor(dateTime: number, remark: string, citizenUserId: string) {
    super();
    this.dateTime = dateTime;
    this.remark = remark;
    this.citizenUserId = citizenUserId;
  }

  static fromDomain(domain: PasswordStateLog): PasswordStateLog {
    const passwordStateLog = new PasswordStateLog(
      domain.dateTime,
      domain.remark,
      domain.citizenUserId,
    );

    passwordStateLog.setDomainEntity(domain);
    passwordStateLog.state = domain.state;
    return passwordStateLog;
  }

  static fromDomains(domains: PasswordStateLog[]): PasswordStateLog[] {
    return domains.map(domain => this.fromDomain(domain));
  }

  static asNameValues(model: PasswordStateLog): NameValueList {
    return NameValueList.fromModel(PasswordStateLog, model, {

    });
  }

  static new(): PasswordStateLog {
    return new PasswordStateLog(0, '', '');
  }

}

export default PasswordStateLog;

