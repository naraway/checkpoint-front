import { PasswordState } from '~/comp';


class PasswordStateLogCdo {
  dateTime: number;
  state: PasswordState;
  remark: string;
  citizenUserId: string;
  
  constructor(dateTime: number, state: PasswordState, remark: string, citizenUserId: string) {
    this.dateTime = dateTime;
    this.state = state;
    this.remark = remark;
    this.citizenUserId = citizenUserId;
  }

  static new(): PasswordStateLogCdo {
    return new PasswordStateLogCdo(0, Object.values(PasswordState)[0], '', '');
  }

}

export default PasswordStateLogCdo;

