import { CommandRequest, CommandType } from '@nara-way/accent';


class LogoutServantUserCommand extends CommandRequest {
  loginEmailId: string;
  location: string;
  deviceIp: string;

  constructor(loginEmailId: string, location: string, deviceIp: string) {
    super(CommandType.UserDefined);
    this.loginEmailId = loginEmailId;
    this.location = location;
    this.deviceIp = deviceIp;
  }

  static new(loginEmailId: string, location: string, deviceIp: string) {
    const command = new LogoutServantUserCommand(
      loginEmailId,
      location,
      deviceIp,
    );

    return command;
  }

}

export default LogoutServantUserCommand;

