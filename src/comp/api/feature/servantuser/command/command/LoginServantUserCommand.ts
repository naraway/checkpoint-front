import { CommandRequest, CommandType } from '@nara-way/accent';


class LoginServantUserCommand extends CommandRequest {
  loginEmailId: string;
  password: string;
  location: string;
  deviceIp: string;

  constructor(loginEmailId: string, password: string, location: string, deviceIp: string) {
    super(CommandType.UserDefined);
    this.loginEmailId = loginEmailId;
    this.password = password;
    this.location = location;
    this.deviceIp = deviceIp;
  }

  static new(loginEmailId: string, password: string, location: string, deviceIp: string) {
    const command = new LoginServantUserCommand(
      loginEmailId,
      password,
      location,
      deviceIp,
    );

    return command;
  }

}

export default LoginServantUserCommand;

