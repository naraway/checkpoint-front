import { CommandRequest, CommandType } from '@nara-way/accent';


class LogoutCitizenUserCommand extends CommandRequest {
  pavilionId: string;
  loginId: string;
  citizenSessionId: string;
  location: string;
  deviceIp: string;

  constructor(pavilionId: string, loginId: string, citizenSessionId: string, location: string, deviceIp: string) {
    super(CommandType.UserDefined);
    this.pavilionId = pavilionId;
    this.loginId = loginId;
    this.citizenSessionId = citizenSessionId;
    this.location = location;
    this.deviceIp = deviceIp;
  }

  static new(pavilionId: string, loginId: string, citizenSessionId: string, location: string, deviceIp: string) {
    const command = new LogoutCitizenUserCommand(
      pavilionId,
      loginId,
      citizenSessionId,
      location,
      deviceIp,
    );

    return command;
  }

}

export default LogoutCitizenUserCommand;

