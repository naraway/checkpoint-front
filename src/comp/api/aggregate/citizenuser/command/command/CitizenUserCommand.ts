import { CommandRequest, CommandType, NameValueList } from '@nara-way/accent';
import { CitizenUserCdo } from '../../api-model/sdo';


class CitizenUserCommand extends CommandRequest {
  citizenUserCdo: CitizenUserCdo | null = null;
  citizenUserCdos: CitizenUserCdo[] = [];
  multiCdo: boolean | null = null;
  citizenUserId: string | null = null;
  nameValues: NameValueList | null = null;

  static newRegisterCitizenUserCommand(citizenUserCdo: CitizenUserCdo): CitizenUserCommand {
    const command = new CitizenUserCommand(CommandType.Register);

    command.citizenUserCdo = citizenUserCdo;
    return command;
  }

  static newRegisterCitizenUserCommands(citizenUserCdos: CitizenUserCdo[]): CitizenUserCommand {
    const command = new CitizenUserCommand(CommandType.Register);

    command.citizenUserCdos = citizenUserCdos;
    command.multiCdo = true;
    return command;
  }

  static newModifyCitizenUserCommand(citizenUserId: string, nameValues: NameValueList): CitizenUserCommand {
    const command = new CitizenUserCommand(CommandType.Modify);

    command.citizenUserId = citizenUserId;
    command.nameValues = nameValues;
    return command;
  }

  static newRemoveCitizenUserCommand(citizenUserId: string): CitizenUserCommand {
    const command = new CitizenUserCommand(CommandType.Remove);

    command.citizenUserId = citizenUserId;
    return command;
  }

}

export default CitizenUserCommand;

