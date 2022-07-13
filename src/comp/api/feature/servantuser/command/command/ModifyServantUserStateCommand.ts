import { CommandRequest, CommandType } from '@nara-way/accent';
import { UserState } from '~/comp';


class ModifyServantUserStateCommand extends CommandRequest {
  servantUserId: string;
  userState: UserState;
  reason: string;
  remark: string;

  constructor(servantUserId: string, userState: UserState, reason: string, remark: string) {
    super(CommandType.UserDefined);
    this.servantUserId = servantUserId;
    this.userState = userState;
    this.reason = reason;
    this.remark = remark;
  }

  static new(servantUserId: string, userState: UserState, reason: string, remark: string) {
    const command = new ModifyServantUserStateCommand(
      servantUserId,
      userState,
      reason,
      remark,
    );

    return command;
  }

}

export default ModifyServantUserStateCommand;

