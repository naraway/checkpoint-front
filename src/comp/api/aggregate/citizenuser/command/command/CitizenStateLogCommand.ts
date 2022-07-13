import { CommandRequest, CommandType, NameValueList } from '@nara-way/accent';
import { CitizenStateLogCdo } from '../../api-model/sdo';


class CitizenStateLogCommand extends CommandRequest {
  citizenStateLogCdo: CitizenStateLogCdo | null = null;
  citizenStateLogCdos: CitizenStateLogCdo[] = [];
  multiCdo: boolean | null = null;
  citizenStateLogId: string | null = null;
  nameValues: NameValueList | null = null;

  static newRegisterCitizenStateLogCommand(citizenStateLogCdo: CitizenStateLogCdo): CitizenStateLogCommand {
    const command = new CitizenStateLogCommand(CommandType.Register);

    command.citizenStateLogCdo = citizenStateLogCdo;
    return command;
  }

  static newRegisterCitizenStateLogCommands(citizenStateLogCdos: CitizenStateLogCdo[]): CitizenStateLogCommand {
    const command = new CitizenStateLogCommand(CommandType.Register);

    command.citizenStateLogCdos = citizenStateLogCdos;
    command.multiCdo = true;
    return command;
  }

  static newModifyCitizenStateLogCommand(citizenStateLogId: string, nameValues: NameValueList): CitizenStateLogCommand {
    const command = new CitizenStateLogCommand(CommandType.Modify);

    command.citizenStateLogId = citizenStateLogId;
    command.nameValues = nameValues;
    return command;
  }

  static newRemoveCitizenStateLogCommand(citizenStateLogId: string): CitizenStateLogCommand {
    const command = new CitizenStateLogCommand(CommandType.Remove);

    command.citizenStateLogId = citizenStateLogId;
    return command;
  }

}

export default CitizenStateLogCommand;

