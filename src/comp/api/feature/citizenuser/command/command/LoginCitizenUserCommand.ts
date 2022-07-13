import { CommandRequest, CommandType } from '@nara-way/accent';


class LoginCitizenUserCommand extends CommandRequest {
  pavilionId: string;
  loginId: string;
  password: string;
  location: string;
  deviceIp: string;

  constructor(pavilionId: string, loginId: string, password: string, location: string, deviceIp: string) {
    super(CommandType.UserDefined);
    this.pavilionId = pavilionId;
    this.loginId = loginId;
    this.password = password;
    this.location = location;
    this.deviceIp = deviceIp;
  }

  static new(pavilionId: string, loginId: string, password: string, location: string, deviceIp: string) {
    const command = new LoginCitizenUserCommand(
      pavilionId,
      loginId,
      password,
      location,
      deviceIp,
    );

    return command;
  }

}

export default LoginCitizenUserCommand;

