import CitizenLoginResponseData from './CitizenLoginResponseData';
import { FailureMessage, TrailMessage, TrailMessageType } from '@nara-way/accent';


class CitizenLoginResponse extends TrailMessage<CitizenLoginResponseData> {
  //
  failureMessageName: string;
  policyEvaluationResult: string = '';

  constructor(failureMessageName: string = 'failureMessage') {
    super(TrailMessageType.QueryRequest, CitizenLoginResponseData, 'data');
    this.failureMessageName = failureMessageName;
  }

  static fromDomain(domain: any) {
    //
    const model = new CitizenLoginResponse();

    model.setResponseBy(domain);
    return model;
  }

  static fromError(responseData: any) {
    //
    const model = new CitizenLoginResponse();
    const failureMessage = new FailureMessage(responseData.error, responseData.error_description);

    model.setFailureMessage(failureMessage);
    model.policyEvaluationResult = responseData.error_description;
    return model;
  }

  static genResponseNullError() {
    return {
      error: 'response is null',
      error_description: 'response is null',
    };
  }

  get success(): boolean {
    //
    return !this[this.failureMessageName];
  }

  get failed(): boolean {
    //
    return !!this[this.failureMessageName];
  }

  setFailureMessage(failureMessage: FailureMessage): void {
    //
    this[this.failureMessageName] = failureMessage;
  }

  getQueryResult(): CitizenLoginResponseData {
    //
    return super.getNotNullModel();
  }

  getFailureMessage(): FailureMessage {
    //
    return super.getFailureMessage();
  }
}

export default CitizenLoginResponse;
