import { CommandRequest, CommandType } from '@nara-way/accent';


class ResetCitizenUserPasswordCommand extends CommandRequest {
  pavilionId: string;
  loginId: string;
  email: string;

  constructor(pavilionId: string, loginId: string, email: string) {
    super(CommandType.UserDefined);
    this.pavilionId = pavilionId;
    this.loginId = loginId;
    this.email = email;
  }

  static new(pavilionId: string, loginId: string, email: string) {
    const command = new ResetCitizenUserPasswordCommand(
      pavilionId,
      loginId,
      email,
    );

    return command;
  }

}

export default ResetCitizenUserPasswordCommand;

