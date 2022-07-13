import { CommandRequest, CommandType, NameValueList } from '@nara-way/accent';
import { ServantLoginLogCdo } from '../../api-model/sdo';


class ServantLoginLogCommand extends CommandRequest {
  servantLoginLogCdo: ServantLoginLogCdo | null = null;
  servantLoginLogCdos: ServantLoginLogCdo[] = [];
  multiCdo: boolean | null = null;
  servantLoginLogId: string | null = null;
  nameValues: NameValueList | null = null;

  static newRegisterServantLoginLogCommand(servantLoginLogCdo: ServantLoginLogCdo): ServantLoginLogCommand {
    const command = new ServantLoginLogCommand(CommandType.Register);

    command.servantLoginLogCdo = servantLoginLogCdo;
    return command;
  }

  static newRegisterServantLoginLogCommands(servantLoginLogCdos: ServantLoginLogCdo[]): ServantLoginLogCommand {
    const command = new ServantLoginLogCommand(CommandType.Register);

    command.servantLoginLogCdos = servantLoginLogCdos;
    command.multiCdo = true;
    return command;
  }

  static newModifyServantLoginLogCommand(servantLoginLogId: string, nameValues: NameValueList): ServantLoginLogCommand {
    const command = new ServantLoginLogCommand(CommandType.Modify);

    command.servantLoginLogId = servantLoginLogId;
    command.nameValues = nameValues;
    return command;
  }

  static newRemoveServantLoginLogCommand(servantLoginLogId: string): ServantLoginLogCommand {
    const command = new ServantLoginLogCommand(CommandType.Remove);

    command.servantLoginLogId = servantLoginLogId;
    return command;
  }

}

export default ServantLoginLogCommand;

