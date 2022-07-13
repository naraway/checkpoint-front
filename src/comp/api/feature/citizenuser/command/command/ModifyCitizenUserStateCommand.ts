import { CommandRequest, CommandType } from '@nara-way/accent';
import { UserState } from '~/comp';


class ModifyCitizenUserStateCommand extends CommandRequest {
  citizenUserId: string;
  userState: UserState;
  reason: string;
  remark: string;

  constructor(citizenUserId: string, userState: UserState, reason: string, remark: string) {
    super(CommandType.UserDefined);
    this.citizenUserId = citizenUserId;
    this.userState = userState;
    this.reason = reason;
    this.remark = remark;
  }

  static new(citizenUserId: string, userState: UserState, reason: string, remark: string) {
    const command = new ModifyCitizenUserStateCommand(
      citizenUserId,
      userState,
      reason,
      remark,
    );

    return command;
  }

}

export default ModifyCitizenUserStateCommand;

