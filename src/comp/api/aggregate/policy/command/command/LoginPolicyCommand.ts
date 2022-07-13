import { CommandRequest, CommandType, NameValueList } from '@nara-way/accent';
import { LoginPolicyCdo } from '../../api-model/sdo';


class LoginPolicyCommand extends CommandRequest {
  loginPolicyCdo: LoginPolicyCdo | null = null;
  loginPolicyCdos: LoginPolicyCdo[] = [];
  multiCdo: boolean | null = null;
  loginPolicyId: string | null = null;
  nameValues: NameValueList | null = null;

  static newRegisterLoginPolicyCommand(loginPolicyCdo: LoginPolicyCdo): LoginPolicyCommand {
    const command = new LoginPolicyCommand(CommandType.Register);

    command.loginPolicyCdo = loginPolicyCdo;
    return command;
  }

  static newRegisterLoginPolicyCommands(loginPolicyCdos: LoginPolicyCdo[]): LoginPolicyCommand {
    const command = new LoginPolicyCommand(CommandType.Register);

    command.loginPolicyCdos = loginPolicyCdos;
    command.multiCdo = true;
    return command;
  }

  static newModifyLoginPolicyCommand(loginPolicyId: string, nameValues: NameValueList): LoginPolicyCommand {
    const command = new LoginPolicyCommand(CommandType.Modify);

    command.loginPolicyId = loginPolicyId;
    command.nameValues = nameValues;
    return command;
  }

  static newRemoveLoginPolicyCommand(loginPolicyId: string): LoginPolicyCommand {
    const command = new LoginPolicyCommand(CommandType.Remove);

    command.loginPolicyId = loginPolicyId;
    return command;
  }

}

export default LoginPolicyCommand;

