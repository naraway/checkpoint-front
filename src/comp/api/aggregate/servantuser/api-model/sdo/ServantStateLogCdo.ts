import { UserState } from '~/comp';


class ServantStateLogCdo {
  dateTime: number;
  state: UserState;
  reason: string;
  remark: string;
  servantUserId: string;
  
  constructor(dateTime: number, state: UserState, reason: string, remark: string, servantUserId: string) {
    this.dateTime = dateTime;
    this.state = state;
    this.reason = reason;
    this.remark = remark;
    this.servantUserId = servantUserId;
  }

  static new(): ServantStateLogCdo {
    return new ServantStateLogCdo(0, Object.values(UserState)[0], '', '', '');
  }

}

export default ServantStateLogCdo;

