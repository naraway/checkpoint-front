import { DomainEntity, NameValueList } from '@nara-way/accent';


class LoginPolicy extends DomainEntity {
  loginRetryCount: number;
  noneLoginPeriod: number;
  sessionTimeoutMinutes: number;
  authPolicyId: string;

  constructor(loginRetryCount: number, noneLoginPeriod: number, sessionTimeoutMinutes: number, authPolicyId: string) {
    super();
    this.loginRetryCount = loginRetryCount;
    this.noneLoginPeriod = noneLoginPeriod;
    this.sessionTimeoutMinutes = sessionTimeoutMinutes;
    this.authPolicyId = authPolicyId;
  }

  static fromDomain(domain: LoginPolicy): LoginPolicy {
    const loginPolicy = new LoginPolicy(
      domain.loginRetryCount,
      domain.noneLoginPeriod,
      domain.sessionTimeoutMinutes,
      domain.authPolicyId,
    );

    loginPolicy.setDomainEntity(domain);
    return loginPolicy;
  }

  static fromDomains(domains: LoginPolicy[]): LoginPolicy[] {
    return domains.map(domain => this.fromDomain(domain));
  }

  static asNameValues(model: LoginPolicy): NameValueList {
    return NameValueList.fromModel(LoginPolicy, model, {
      loginRetryCount: String,
      noneLoginPeriod: String,
      sessionTimeoutMinutes: String,

    });
  }

  static new(): LoginPolicy {
    return new LoginPolicy(0, 0, 0, '');
  }

}

export default LoginPolicy;

