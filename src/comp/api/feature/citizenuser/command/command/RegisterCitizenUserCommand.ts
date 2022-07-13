import { CommandRequest, CommandType } from '@nara-way/accent';
import AdditionalInformation from '../../../../aggregate/shared/api-model/AdditionalInformation';


class RegisterCitizenUserCommand extends CommandRequest {
  pavilionId: string;
  loginId: string;
  password: string;
  email: string;
  displayName: string;
  additionalInformation: AdditionalInformation;

  constructor(pavilionId: string, loginId: string, password: string, email: string, displayName: string, additionalInformation: AdditionalInformation) {
    super(CommandType.UserDefined);
    this.pavilionId = pavilionId;
    this.loginId = loginId;
    this.password = password;
    this.email = email;
    this.displayName = displayName;
    this.additionalInformation = additionalInformation;
  }

  static new(pavilionId: string, loginId: string, password: string, email: string, displayName: string, additionalInformation: AdditionalInformation) {
    const command = new RegisterCitizenUserCommand(
      pavilionId,
      loginId,
      password,
      email,
      displayName,
      additionalInformation,
    );

    return command;
  }

}

export default RegisterCitizenUserCommand;

