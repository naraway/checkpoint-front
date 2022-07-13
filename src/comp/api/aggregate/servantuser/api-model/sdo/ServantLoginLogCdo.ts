import { LoginType } from '~/comp';


class ServantLoginLogCdo {
  dateTime: number;
  login: LoginType;
  location: string;
  deviceIp: string;
  failed: boolean;
  remark: string;
  servantUserId: string;
  
  constructor(dateTime: number, login: LoginType, location: string, deviceIp: string, failed: boolean, remark: string, servantUserId: string) {
    this.dateTime = dateTime;
    this.login = login;
    this.location = location;
    this.deviceIp = deviceIp;
    this.failed = failed;
    this.remark = remark;
    this.servantUserId = servantUserId;
  }

  static new(): ServantLoginLogCdo {
    return new ServantLoginLogCdo(0, Object.values(LoginType)[0], '', '', false, '', '');
  }

}

export default ServantLoginLogCdo;

