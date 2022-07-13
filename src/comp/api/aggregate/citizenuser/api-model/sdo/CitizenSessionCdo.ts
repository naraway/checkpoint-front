class CitizenSessionCdo {
  pavilionId: string;
  loginId: string;
  location: string;
  deviceIp: string;
  token: string;
  loginTime: number;
  
  constructor(pavilionId: string, loginId: string, location: string, deviceIp: string, token: string, loginTime: number) {
    this.pavilionId = pavilionId;
    this.loginId = loginId;
    this.location = location;
    this.deviceIp = deviceIp;
    this.token = token;
    this.loginTime = loginTime;
  }

  static new(): CitizenSessionCdo {
    return new CitizenSessionCdo('', '', '', '', '', 0);
  }

}

export default CitizenSessionCdo;

