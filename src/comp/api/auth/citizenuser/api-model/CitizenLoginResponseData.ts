import AdditionalInformation from '../../../aggregate/shared/api-model/AdditionalInformation';


class CitizenLoginResponseData {
  //
  accessToken: string;
  refreshToken: string;

  // ==> see Backend: CitizenUser
  pavilionId: string;
  loginId: string;
  email: string;
  displayName: string;
  // strategyResult: string; // deprecated
  additionalInformation: AdditionalInformation = {};

  constructor(
    accessToken: string,
    refreshToken: string,
    pavilionId: string,
    loginId: string,
    email: string,
    displayName: string,
    // strategyResult: string,
  ) {
    //
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.pavilionId = pavilionId;
    this.loginId = loginId;
    this.email = email;
    this.displayName = displayName;
    // this.strategyResult = strategyResult;
  }

  static fromDomain(domain: any) {
    //
    console.log('fromDomain...');
    console.log(domain);
    const {
      access_token,
      refresh_token,
      pavilionId,
      loginId,
      email,
      displayName,
      // strategyResult,
      ...others
    } = domain;

    const loginResponseData = new CitizenLoginResponseData(
      access_token,
      refresh_token,
      pavilionId,
      loginId,
      email,
      displayName,
      // strategyResult
    );

    loginResponseData.additionalInformation = others;

    return loginResponseData;
  }
}

export default CitizenLoginResponseData;
