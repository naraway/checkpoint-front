import { CommandRequest, CommandType, NameValueList } from '@nara-way/accent';
import { CitizenLoginLogCdo } from '../../api-model/sdo';


class CitizenLoginLogCommand extends CommandRequest {
  citizenLoginLogCdo: CitizenLoginLogCdo | null = null;
  citizenLoginLogCdos: CitizenLoginLogCdo[] = [];
  multiCdo: boolean | null = null;
  citizenLoginLogId: string | null = null;
  nameValues: NameValueList | null = null;

  static newRegisterCitizenLoginLogCommand(citizenLoginLogCdo: CitizenLoginLogCdo): CitizenLoginLogCommand {
    const command = new CitizenLoginLogCommand(CommandType.Register);

    command.citizenLoginLogCdo = citizenLoginLogCdo;
    return command;
  }

  static newRegisterCitizenLoginLogCommands(citizenLoginLogCdos: CitizenLoginLogCdo[]): CitizenLoginLogCommand {
    const command = new CitizenLoginLogCommand(CommandType.Register);

    command.citizenLoginLogCdos = citizenLoginLogCdos;
    command.multiCdo = true;
    return command;
  }

  static newModifyCitizenLoginLogCommand(citizenLoginLogId: string, nameValues: NameValueList): CitizenLoginLogCommand {
    const command = new CitizenLoginLogCommand(CommandType.Modify);

    command.citizenLoginLogId = citizenLoginLogId;
    command.nameValues = nameValues;
    return command;
  }

  static newRemoveCitizenLoginLogCommand(citizenLoginLogId: string): CitizenLoginLogCommand {
    const command = new CitizenLoginLogCommand(CommandType.Remove);

    command.citizenLoginLogId = citizenLoginLogId;
    return command;
  }

}

export default CitizenLoginLogCommand;

