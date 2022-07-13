import { CommandRequest, CommandType } from '@nara-way/accent';


class ResetCitizenUserPasswordCommand extends CommandRequest {
  pavilionId: string;
  loginId: string;
  password: string;
  secretCode: string;

  constructor(pavilionId: string, loginId: string, password: string, secretCode: string) {
    super(CommandType.UserDefined);
    this.pavilionId = pavilionId;
    this.loginId = loginId;
    this.password = password;
    this.secretCode = secretCode;
  }

  static new(pavilionId: string, loginId: string, password: string, secretCode: string) {
    const command = new ResetCitizenUserPasswordCommand(
      pavilionId,
      loginId,
      password,
      secretCode,
    );

    return command;
  }

}

export default ResetCitizenUserPasswordCommand;

