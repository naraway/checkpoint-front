import { CommandRequest, CommandType, NameValueList } from '@nara-way/accent';
import { ServantUserCdo } from '../../api-model/sdo';


class ServantUserCommand extends CommandRequest {
  servantUserCdo: ServantUserCdo | null = null;
  servantUserCdos: ServantUserCdo[] = [];
  multiCdo: boolean | null = null;
  servantUserId: string | null = null;
  nameValues: NameValueList | null = null;

  static newRegisterServantUserCommand(servantUserCdo: ServantUserCdo): ServantUserCommand {
    const command = new ServantUserCommand(CommandType.Register);

    command.servantUserCdo = servantUserCdo;
    return command;
  }

  static newRegisterServantUserCommands(servantUserCdos: ServantUserCdo[]): ServantUserCommand {
    const command = new ServantUserCommand(CommandType.Register);

    command.servantUserCdos = servantUserCdos;
    command.multiCdo = true;
    return command;
  }

  static newModifyServantUserCommand(servantUserId: string, nameValues: NameValueList): ServantUserCommand {
    const command = new ServantUserCommand(CommandType.Modify);

    command.servantUserId = servantUserId;
    command.nameValues = nameValues;
    return command;
  }

  static newRemoveServantUserCommand(servantUserId: string): ServantUserCommand {
    const command = new ServantUserCommand(CommandType.Remove);

    command.servantUserId = servantUserId;
    return command;
  }

}

export default ServantUserCommand;

