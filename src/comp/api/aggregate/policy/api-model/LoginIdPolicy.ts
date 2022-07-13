import { DomainEntity, NameValueList } from '@nara-way/accent';


class LoginIdPolicy extends DomainEntity {
  minimumLength: number;
  maximumLength: number;
  maximumDigitLetterCount: number;
  noSpace: boolean;
  noSpecialCharacters: boolean;
  regularExpression: string;
  authPolicyId: string;

  constructor(minimumLength: number, maximumLength: number, maximumDigitLetterCount: number, noSpace: boolean, noSpecialCharacters: boolean, regularExpression: string, authPolicyId: string) {
    super();
    this.minimumLength = minimumLength;
    this.maximumLength = maximumLength;
    this.maximumDigitLetterCount = maximumDigitLetterCount;
    this.noSpace = noSpace;
    this.noSpecialCharacters = noSpecialCharacters;
    this.regularExpression = regularExpression;
    this.authPolicyId = authPolicyId;
  }

  static fromDomain(domain: LoginIdPolicy): LoginIdPolicy {
    const loginIdPolicy = new LoginIdPolicy(
      domain.minimumLength,
      domain.maximumLength,
      domain.maximumDigitLetterCount,
      domain.noSpace,
      domain.noSpecialCharacters,
      domain.regularExpression,
      domain.authPolicyId,
    );

    loginIdPolicy.setDomainEntity(domain);
    return loginIdPolicy;
  }

  static fromDomains(domains: LoginIdPolicy[]): LoginIdPolicy[] {
    return domains.map(domain => this.fromDomain(domain));
  }

  static asNameValues(model: LoginIdPolicy): NameValueList {
    return NameValueList.fromModel(LoginIdPolicy, model, {

    });
  }

  static new(): LoginIdPolicy {
    return new LoginIdPolicy(0, 0, 0, false, false, '', '');
  }

}

export default LoginIdPolicy;

