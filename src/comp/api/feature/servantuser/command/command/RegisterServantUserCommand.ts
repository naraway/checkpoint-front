import { CommandRequest, CommandType } from '@nara-way/accent';


class RegisterServantUserCommand extends CommandRequest {
  loginEmailId: string;
  password: string;
  displayName: string;
  publicServantId: string;
  officeIds: string[];

  constructor(loginEmailId: string, password: string, displayName: string, publicServantId: string, officeIds: string[]) {
    super(CommandType.UserDefined);
    this.loginEmailId = loginEmailId;
    this.password = password;
    this.displayName = displayName;
    this.publicServantId = publicServantId;
    this.officeIds = officeIds;
  }

  static new(loginEmailId: string, password: string, displayName: string, publicServantId: string, officeIds: string[]) {
    const command = new RegisterServantUserCommand(
      loginEmailId,
      password,
      displayName,
      publicServantId,
      officeIds,
    );

    return command;
  }

}

export default RegisterServantUserCommand;

