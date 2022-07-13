import { UserState } from '~/comp';


class CitizenStateLogCdo {
  dateTime: number;
  state: UserState;
  reason: string;
  remark: string;
  citizenUserId: string;
  
  constructor(dateTime: number, state: UserState, reason: string, remark: string, citizenUserId: string) {
    this.dateTime = dateTime;
    this.state = state;
    this.reason = reason;
    this.remark = remark;
    this.citizenUserId = citizenUserId;
  }

  static new(): CitizenStateLogCdo {
    return new CitizenStateLogCdo(0, Object.values(UserState)[0], '', '', '');
  }

}

export default CitizenStateLogCdo;

