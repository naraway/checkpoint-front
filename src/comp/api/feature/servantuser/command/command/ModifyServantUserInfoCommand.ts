import { CommandRequest, CommandType } from '@nara-way/accent';


class ModifyServantUserInfoCommand extends CommandRequest {
  servantUserId: string;
  password: string;
  displayName: string;
  officeIds: string[];

  constructor(servantUserId: string, password: string, displayName: string, officeIds: string[]) {
    super(CommandType.UserDefined);
    this.servantUserId = servantUserId;
    this.password = password;
    this.displayName = displayName;
    this.officeIds = officeIds;
  }

  static new(servantUserId: string, password: string, displayName: string, officeIds: string[]) {
    const command = new ModifyServantUserInfoCommand(
      servantUserId,
      password,
      displayName,
      officeIds,
    );

    return command;
  }

}

export default ModifyServantUserInfoCommand;

