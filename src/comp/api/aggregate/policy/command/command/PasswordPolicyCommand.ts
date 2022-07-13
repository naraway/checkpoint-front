import { CommandRequest, CommandType, NameValueList } from '@nara-way/accent';
import { PasswordPolicyCdo } from '../../api-model/sdo';


class PasswordPolicyCommand extends CommandRequest {
  passwordPolicyCdo: PasswordPolicyCdo | null = null;
  passwordPolicyCdos: PasswordPolicyCdo[] = [];
  multiCdo: boolean | null = null;
  passwordPolicyId: string | null = null;
  nameValues: NameValueList | null = null;

  static newRegisterPasswordPolicyCommand(passwordPolicyCdo: PasswordPolicyCdo): PasswordPolicyCommand {
    const command = new PasswordPolicyCommand(CommandType.Register);

    command.passwordPolicyCdo = passwordPolicyCdo;
    return command;
  }

  static newRegisterPasswordPolicyCommands(passwordPolicyCdos: PasswordPolicyCdo[]): PasswordPolicyCommand {
    const command = new PasswordPolicyCommand(CommandType.Register);

    command.passwordPolicyCdos = passwordPolicyCdos;
    command.multiCdo = true;
    return command;
  }

  static newModifyPasswordPolicyCommand(passwordPolicyId: string, nameValues: NameValueList): PasswordPolicyCommand {
    const command = new PasswordPolicyCommand(CommandType.Modify);

    command.passwordPolicyId = passwordPolicyId;
    command.nameValues = nameValues;
    return command;
  }

  static newRemovePasswordPolicyCommand(passwordPolicyId: string): PasswordPolicyCommand {
    const command = new PasswordPolicyCommand(CommandType.Remove);

    command.passwordPolicyId = passwordPolicyId;
    return command;
  }

}

export default PasswordPolicyCommand;

