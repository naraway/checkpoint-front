class LoginPolicyCdo {
  loginRetryCount: number;
  noneLoginPeriod: number;
  sessionTimeoutMinutes: number;
  authPolicyId: string;
  
  constructor(loginRetryCount: number, noneLoginPeriod: number, sessionTimeoutMinutes: number, authPolicyId: string) {
    this.loginRetryCount = loginRetryCount;
    this.noneLoginPeriod = noneLoginPeriod;
    this.sessionTimeoutMinutes = sessionTimeoutMinutes;
    this.authPolicyId = authPolicyId;
  }

  static new(): LoginPolicyCdo {
    return new LoginPolicyCdo(0, 0, 0, '');
  }

}

export default LoginPolicyCdo;

