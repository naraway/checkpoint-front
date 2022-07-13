import { FailureMessage, TrailMessage, TrailMessageType } from '@nara-way/accent';
import ServantLoginResponseData from './ServantLoginResponseData';


class ServantLoginResponse extends TrailMessage<ServantLoginResponseData> {
  failureMessageName: string;

  constructor(failureMessageName: string = 'failureMessage') {
    super(TrailMessageType.QueryRequest, ServantLoginResponseData, 'data');
    this.failureMessageName = failureMessageName;
  }

  static fromDomain(domain: any) {
    const model = new ServantLoginResponse();

    model.setResponseBy(domain);
    return model;
  }

  static fromError(responseData: any) {
    const model = new ServantLoginResponse();
    const failureMessage = new FailureMessage(responseData.error, responseData.error_description);

    model.setFailureMessage(failureMessage);
    return model;
  }

  get success(): boolean {
    return !this[this.failureMessageName];
  }

  get failed(): boolean {
    return !!this[this.failureMessageName];
  }

  setFailureMessage(failureMessage: FailureMessage): void {
    this[this.failureMessageName] = failureMessage;
  }

  getQueryResult(): ServantLoginResponseData {
    return super.getNotNullModel();
  }

  getFailureMessage(): FailureMessage {
    return super.getFailureMessage();
  }
}

export default ServantLoginResponse;
