import { CommandRequest, CommandType, NameValueList } from '@nara-way/accent';
import { CitizenSessionCdo } from '../../api-model/sdo';


class CitizenSessionCommand extends CommandRequest {
  citizenSessionCdo: CitizenSessionCdo | null = null;
  citizenSessionCdos: CitizenSessionCdo[] = [];
  multiCdo: boolean | null = null;
  citizenSessionId: string | null = null;
  nameValues: NameValueList | null = null;

  static newRegisterCitizenSessionCommand(citizenSessionCdo: CitizenSessionCdo): CitizenSessionCommand {
    const command = new CitizenSessionCommand(CommandType.Register);

    command.citizenSessionCdo = citizenSessionCdo;
    return command;
  }

  static newRegisterCitizenSessionCommands(citizenSessionCdos: CitizenSessionCdo[]): CitizenSessionCommand {
    const command = new CitizenSessionCommand(CommandType.Register);

    command.citizenSessionCdos = citizenSessionCdos;
    command.multiCdo = true;
    return command;
  }

  static newModifyCitizenSessionCommand(citizenSessionId: string, nameValues: NameValueList): CitizenSessionCommand {
    const command = new CitizenSessionCommand(CommandType.Modify);

    command.citizenSessionId = citizenSessionId;
    command.nameValues = nameValues;
    return command;
  }

  static newRemoveCitizenSessionCommand(citizenSessionId: string): CitizenSessionCommand {
    const command = new CitizenSessionCommand(CommandType.Remove);

    command.citizenSessionId = citizenSessionId;
    return command;
  }

}

export default CitizenSessionCommand;

