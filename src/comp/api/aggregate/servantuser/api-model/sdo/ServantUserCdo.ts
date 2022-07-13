class ServantUserCdo {
  loginEmailId: string;
  password: string;
  
  constructor(loginEmailId: string, password: string) {
    this.loginEmailId = loginEmailId;
    this.password = password;
  }

  static new(): ServantUserCdo {
    return new ServantUserCdo('', '');
  }

}

export default ServantUserCdo;

