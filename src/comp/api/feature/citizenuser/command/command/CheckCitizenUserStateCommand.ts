import { CommandRequest, CommandType } from '@nara-way/accent';


class CheckCitizenUserStateCommand extends CommandRequest {
  pavilionId: string;
  loginId: string;

  constructor(pavilionId: string, loginId: string) {
    super(CommandType.UserDefined);
    this.pavilionId = pavilionId;
    this.loginId = loginId;
  }

  static new(pavilionId: string, loginId: string) {
    const command = new CheckCitizenUserStateCommand(
      pavilionId,
      loginId,
    );

    return command;
  }

}

export default CheckCitizenUserStateCommand;

