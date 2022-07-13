import { CommandRequest, CommandType } from '@nara-way/accent';
import AdditionalInformation from '../../../../aggregate/shared/api-model/AdditionalInformation';


class ModifyCitizenUserInfoCommand extends CommandRequest {
  citizenUserId: string;
  password: string;
  email: string;
  displayName: string;
  additionalInformation: AdditionalInformation;

  constructor(citizenUserId: string, password: string, email: string, displayName: string, additionalInformation: AdditionalInformation) {
    super(CommandType.UserDefined);
    this.citizenUserId = citizenUserId;
    this.password = password;
    this.email = email;
    this.displayName = displayName;
    this.additionalInformation = additionalInformation;
  }

  static new(citizenUserId: string, password: string, email: string, displayName: string, additionalInformation: AdditionalInformation) {
    const command = new ModifyCitizenUserInfoCommand(
      citizenUserId,
      password,
      email,
      displayName,
      additionalInformation,
    );

    return command;
  }

}

export default ModifyCitizenUserInfoCommand;

