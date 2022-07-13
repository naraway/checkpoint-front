import { LoginType } from '~/comp';


class CitizenLoginLogCdo {
  dateTime: number;
  login: LoginType;
  location: string;
  deviceIp: string;
  failed: boolean;
  remark: string;
  citizenUserId: string;
  
  constructor(dateTime: number, login: LoginType, location: string, deviceIp: string, failed: boolean, remark: string, citizenUserId: string) {
    this.dateTime = dateTime;
    this.login = login;
    this.location = location;
    this.deviceIp = deviceIp;
    this.failed = failed;
    this.remark = remark;
    this.citizenUserId = citizenUserId;
  }

  static new(): CitizenLoginLogCdo {
    return new CitizenLoginLogCdo(0, Object.values(LoginType)[0], '', '', false, '', '');
  }

}

export default CitizenLoginLogCdo;

