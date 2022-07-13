import { CommandRequest, CommandType } from '@nara-way/accent';


class ChangeServantUserPasswordCommand extends CommandRequest {
  loginEmailId: string;
  location: string;
  deviceIp: string;
  password: string;
  newPassword: string;

  constructor(loginEmailId: string, location: string, deviceIp: string, password: string, newPassword: string) {
    super(CommandType.UserDefined);
    this.loginEmailId = loginEmailId;
    this.location = location;
    this.deviceIp = deviceIp;
    this.password = password;
    this.newPassword = newPassword;
  }

  static new(loginEmailId: string, location: string, deviceIp: string, password: string, newPassword: string) {
    const command = new ChangeServantUserPasswordCommand(
      loginEmailId,
      location,
      deviceIp,
      password,
      newPassword,
    );

    return command;
  }

}

export default ChangeServantUserPasswordCommand;

