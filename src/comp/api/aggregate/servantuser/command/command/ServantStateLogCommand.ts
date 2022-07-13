import { CommandRequest, CommandType, NameValueList } from '@nara-way/accent';
import { ServantStateLogCdo } from '../../api-model/sdo';


class ServantStateLogCommand extends CommandRequest {
  servantStateLogCdo: ServantStateLogCdo | null = null;
  servantStateLogCdos: ServantStateLogCdo[] = [];
  multiCdo: boolean | null = null;
  servantStateLogId: string | null = null;
  nameValues: NameValueList | null = null;

  static newRegisterServantStateLogCommand(servantStateLogCdo: ServantStateLogCdo): ServantStateLogCommand {
    const command = new ServantStateLogCommand(CommandType.Register);

    command.servantStateLogCdo = servantStateLogCdo;
    return command;
  }

  static newRegisterServantStateLogCommands(servantStateLogCdos: ServantStateLogCdo[]): ServantStateLogCommand {
    const command = new ServantStateLogCommand(CommandType.Register);

    command.servantStateLogCdos = servantStateLogCdos;
    command.multiCdo = true;
    return command;
  }

  static newModifyServantStateLogCommand(servantStateLogId: string, nameValues: NameValueList): ServantStateLogCommand {
    const command = new ServantStateLogCommand(CommandType.Modify);

    command.servantStateLogId = servantStateLogId;
    command.nameValues = nameValues;
    return command;
  }

  static newRemoveServantStateLogCommand(servantStateLogId: string): ServantStateLogCommand {
    const command = new ServantStateLogCommand(CommandType.Remove);

    command.servantStateLogId = servantStateLogId;
    return command;
  }

}

export default ServantStateLogCommand;

