import { CommandRequest, CommandType, NameValueList } from '@nara-way/accent';
import { PasswordStateLogCdo } from '../../api-model/sdo';


class PasswordStateLogCommand extends CommandRequest {
  passwordStateLogCdo: PasswordStateLogCdo | null = null;
  passwordStateLogCdos: PasswordStateLogCdo[] = [];
  multiCdo: boolean | null = null;
  passwordStateLogId: string | null = null;
  nameValues: NameValueList | null = null;

  static newRegisterPasswordStateLogCommand(passwordStateLogCdo: PasswordStateLogCdo): PasswordStateLogCommand {
    const command = new PasswordStateLogCommand(CommandType.Register);

    command.passwordStateLogCdo = passwordStateLogCdo;
    return command;
  }

  static newRegisterPasswordStateLogCommands(passwordStateLogCdos: PasswordStateLogCdo[]): PasswordStateLogCommand {
    const command = new PasswordStateLogCommand(CommandType.Register);

    command.passwordStateLogCdos = passwordStateLogCdos;
    command.multiCdo = true;
    return command;
  }

  static newModifyPasswordStateLogCommand(passwordStateLogId: string, nameValues: NameValueList): PasswordStateLogCommand {
    const command = new PasswordStateLogCommand(CommandType.Modify);

    command.passwordStateLogId = passwordStateLogId;
    command.nameValues = nameValues;
    return command;
  }

  static newRemovePasswordStateLogCommand(passwordStateLogId: string): PasswordStateLogCommand {
    const command = new PasswordStateLogCommand(CommandType.Remove);

    command.passwordStateLogId = passwordStateLogId;
    return command;
  }

}

export default PasswordStateLogCommand;

