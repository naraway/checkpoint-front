import { CommandRequest, CommandType } from '@nara-way/accent';


class ChangeCitizenUserPasswordCommand extends CommandRequest {
  pavilionId: string;
  loginId: string;
  location: string;
  deviceIp: string;
  password: string;
  newPassword: string;

  constructor(pavilionId: string, loginId: string, location: string, deviceIp: string, password: string, newPassword: string) {
    super(CommandType.UserDefined);
    this.pavilionId = pavilionId;
    this.loginId = loginId;
    this.location = location;
    this.deviceIp = deviceIp;
    this.password = password;
    this.newPassword = newPassword;
  }

  static new(pavilionId: string, loginId: string, location: string, deviceIp: string, password: string, newPassword: string) {
    const command = new ChangeCitizenUserPasswordCommand(
      pavilionId,
      loginId,
      location,
      deviceIp,
      password,
      newPassword,
    );

    return command;
  }

}

export default ChangeCitizenUserPasswordCommand;

