class CitizenUserCdo {
  pavilionId: string;
  loginId: string;
  password: string;
  
  constructor(pavilionId: string, loginId: string, password: string) {
    this.pavilionId = pavilionId;
    this.loginId = loginId;
    this.password = password;
  }

  static new(): CitizenUserCdo {
    return new CitizenUserCdo('', '', '');
  }

}

export default CitizenUserCdo;

