class ServantLoginResponseData {
  accessToken: string;
  refreshToken: string;

  loginId: string;
  displayName: string;
  officeIds: string[];
  publicServantId: string;

  constructor(
    accessToken: string,
    refreshToken: string,
    loginId: string,
    displayName: string,
    officeIds: string[],
    publicServantId: string,
  ) {
    this.accessToken = accessToken;
    this.refreshToken = refreshToken;
    this.loginId = loginId;
    this.displayName = displayName;
    this.officeIds = officeIds;
    this.publicServantId = publicServantId;
  }

  static fromDomain(domain: any) {
    const { loginId, displayName, officeIds, publicServantId } = domain;

    const loginResponseData = new ServantLoginResponseData(
      domain.access_token,
      domain.refresh_token,
      loginId,
      displayName,
      officeIds,
      publicServantId,
    );

    return loginResponseData;
  }
}

export default ServantLoginResponseData;
